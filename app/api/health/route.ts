import { NextResponse } from 'next/server';
import { readTabs } from '../../../lib/sheets';

export async function GET() {
  let sheetsStatus: 'up' | 'degraded' = 'degraded';
  
  try {
    const readPromise = readTabs('CMS', ['Settings']);
    const timeoutPromise = new Promise((_, reject) => 
      setTimeout(() => reject(new Error('Timeout')), 5000)
    );
    
    // Attempt to read sheets with a 5-second timeout
    await Promise.race([readPromise, timeoutPromise]);
    sheetsStatus = 'up';
  } catch (error) {
    console.error('Health check sheets ping failed:', error);
    sheetsStatus = 'degraded';
  }

  return NextResponse.json(
    { ok: true, sheets: sheetsStatus, ts: new Date().toISOString() },
    {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=60'
      }
    }
  );
}
