import 'server-only';

let jwtClient: any = null;
let sheetsApi: any = null;

function getAuthClient() {
  if (!process.env.GOOGLE_SA_KEY_B64) {
    throw new Error('Missing GOOGLE_SA_KEY_B64 env var');
  }

  if (!jwtClient) {
    // Dynamic import to prevent build failure when dependencies aren't installed
    const { JWT } = require('google-auth-library');
    const { google } = require('googleapis');

    const credentials = JSON.parse(
      Buffer.from(process.env.GOOGLE_SA_KEY_B64, 'base64').toString('utf8')
    );

    jwtClient = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    sheetsApi = google.sheets({ version: 'v4', auth: jwtClient });
  }

  return sheetsApi;
}

export async function withBackoff<T>(fn: () => Promise<T>, tries = 4): Promise<T> {
  let attempt = 0;
  while (attempt < tries) {
    try {
      return await fn();
    } catch (error: any) {
      attempt++;
      if (
        attempt >= tries ||
        (error.code !== 429 && error.code !== 500 && error.code !== 503)
      ) {
        throw error;
      }
      const delay = Math.pow(2, attempt) * 1000 + Math.random() * 1000;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw new Error('Unreachable');
}

export async function readTabs(
  wb: 'CMS' | 'CRM',
  tabs: string[]
): Promise<Record<string, any[]>> {
  try {
    const spreadsheetId = wb === 'CMS' ? process.env.SHEET_ID_CMS : process.env.SHEET_ID_CRM;
    if (!spreadsheetId) {
      throw new Error(`Missing spreadsheet ID for ${wb}`);
    }

    const sheets = getAuthClient();
    const result: any = await withBackoff(() =>
      sheets.spreadsheets.values.batchGet({
        spreadsheetId,
        ranges: tabs,
      })
    );

    const valueRanges = result?.data?.valueRanges || [];
    const data: Record<string, any[]> = {};

    valueRanges.forEach((range: any, i: number) => {
      const tabName = tabs[i];
      const rows = range.values || [];
      if (rows.length < 2) {
        data[tabName] = [];
        return;
      }
      const headers = rows[0] as string[];
      data[tabName] = rows.slice(1).map((row: any) => {
        const obj: Record<string, any> = {};
        headers.forEach((h, j) => {
          obj[h] = row[j] !== undefined ? row[j] : null;
        });
        return obj;
      });
    });

    return data;
  } catch (error) {
    console.error(`Error reading tabs from ${wb}:`, error);
    return {};
  }
}

export async function appendRow(
  wb: 'CMS' | 'CRM',
  tab: string,
  row: (string | number | boolean | null)[]
): Promise<void> {
  try {
    const spreadsheetId = wb === 'CMS' ? process.env.SHEET_ID_CMS : process.env.SHEET_ID_CRM;
    if (!spreadsheetId) {
      throw new Error(`Missing spreadsheet ID for ${wb}`);
    }

    const sheets = getAuthClient();
    await withBackoff(() =>
      sheets.spreadsheets.values.append({
        spreadsheetId,
        range: tab,
        valueInputOption: 'RAW',
        requestBody: {
          values: [row],
        },
      })
    );
  } catch (error) {
    console.error(`Error appending row to ${wb} -> ${tab}:`, error);
  }
}
