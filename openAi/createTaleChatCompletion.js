const { openai } = require("../common/openAI");

const createTaleChatCompletion = async (req) => {
  const taleResponse = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `
            You are a fairy tale writter. 
            You will be given info about the child for whom youre writting. The topic of the tale will be provided.
            Answer max 1000 characters but keep in mind the tale will be extended. 
            Keep in mind the child is the main character. Never change the child name. Adjust tone to the child age. 
            Answer only in polish. 
    
            ###
            Example input:
            {
              "child_name": "adam",
              "age": 9,
              "topic": "dinosaurs"
            }
          `,
      },
      {
        role: "user",
        content: JSON.stringify(req.body),
      },
    ],
    model: process.env.GPT_MODEL_3_5_TURBO,
  });
  return taleResponse.choices[0].message.content;
};

module.exports = { createTaleChatCompletion };
