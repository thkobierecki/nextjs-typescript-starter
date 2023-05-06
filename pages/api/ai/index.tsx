import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import prisma from "@/lib/prisma";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body);
  const { name, age, gender, hobbies, friends, id } = req.body;

  const prompt = `Act as a kids storyteller, and write me a bed time story for a kid named ${name} that is ${age} years old. The kid is a gender ${gender} that has friends named ${friends} and has hobbies ${hobbies}.`;
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 2000,
      temperature: 0,
    });
    const quote = completion.data.choices[0].text;
    

    console.log(quote);
   
    if (quote) {
      //@ts-ignore
      const story = await prisma.story.create({
        data: {
          title: "Title",
          content: quote,
          child: {
            connect: {
              id: id,
            },
          },
        },
      });
      console.log(story);
    }

    res.status(200).json({ quote });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err });
  }
}
