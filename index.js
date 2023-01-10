require("dotenv").config();
const TelegramApi = require("node-telegram-bot-api");
const TOKEN = process.env.token;

const bot = new TelegramApi(TOKEN, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  // bot.sendMessage(chatId, `Ти написав мені ${text}`);

  let random = Math.floor(Math.random() * 100);

  if (random > 50) {
    bot.sendMessage(
      chatId,
      `Ти написав мені : "${text} ", але краще  випий пива`
    );
  } else {
    bot.sendMessage(
      chatId,
      `Ти написав мені : " ${text}"  , але краще випий горілки `
    );
  }

  console.log(msg);
});
