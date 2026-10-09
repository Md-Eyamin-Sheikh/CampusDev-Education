import 'server-only';

export async function sendTelegramAlert(data: {
  leadId: string;
  name: string;
  institution: string;
  phone: string;
  source: string;
  message?: string;
}): Promise<void> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.warn('Telegram token or chat ID missing. Skipping alert.');
    return;
  }

  const text = `
🆕 New Lead: ${data.leadId}
👤 Name: ${data.name}
🏫 Institution: ${data.institution}
📞 Phone: ${data.phone}
🔗 Source: ${data.source}
💬 Message: ${data.message || 'N/A'}
  `.trim();

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (!res.ok) {
      console.error('Failed to send Telegram alert:', await res.text());
    }
  } catch (error) {
    console.error('Error sending Telegram alert:', error);
  }
}
