import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { id } = req.query;
  const story = await prisma.story.findUnique({
    where: { id: Number(id) },
  });
  res.status(200).json(story);
}
