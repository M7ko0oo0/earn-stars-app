export default async function handler(req, res) {
  const body = req.body;

  if (!body?.message) {
    return res.status(200).send("ok");
  }

  const chatId = body.message.chat.id;
  const text = body.message.text;

  if (text === "/start") {
    await fetch(`https://api.telegram.org/bot8803450557:AAECYD6WZcz2fUzd_w82z6KMI-sWbO2Cvfo/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: "👋 أهلاً بيك في Earn Stars",
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "⭐ Earn Stars",
                url: "https://earn-stars-app.vercel.app"
              }
            ]
          ]
        }
      })
    });
  }

  res.status(200).send("ok");
                }
