const OpenAI = require("openai");
const { config } = require("./config.js");

const openai = new OpenAI({
  apiKey: config.openAIApiKey,
});

module.exports = {openai};
