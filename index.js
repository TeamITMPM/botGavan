require("dotenv").config();
const TelegramApi = require("node-telegram-bot-api");
const TOKEN = process.env.token;

const bot = new TelegramApi(TOKEN, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Ти написав мені ${text}`);
  console.log(msg);
});
