const { openai } = require("../common/openAI");

const createPrompt = (taleContent) => `
  Create image that depicts given tale context for children. Ilustrative style.
  My prompt has full detail so no need to add more.
  
  ###
  Context:
  ${taleContent}
`;

const createImage = async (taleContent) => {
  const prompt = createPrompt(taleContent);
  try {
    const response = await openai.images.generate({
      model: process.env.DALLE_3,
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    console.log(response.data);
    image_url = response.data[0].url;
    return image_url;
  } catch (e) {
    console.log(e);
    throw Error(e.message);
  }
};

module.exports = { createImage };
