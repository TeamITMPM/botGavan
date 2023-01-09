const TelegramApi = require("node-telegram-bot-api");
const token = "5965387739:AAEjlaV4SrdRBEwormU9_pw8kLxzpPQMA4o";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Ти написав мені ${text}`);
  console.log(msg);
});
