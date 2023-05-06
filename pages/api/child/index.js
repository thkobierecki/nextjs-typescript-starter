import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    const child = await prisma.child.findUnique({
      where: { id },
      include: { stories: true },
    });
    res.status(200).json(child);
  }
  if (req.method === "POST") {
    const { name, age, gender, userId } = req.body;

    const child = await prisma.child.create({
      data: {
        name,
        age,
        gender,
        user: {
          connect: {
            id: Number(userId),
          },
        },
      },
    });

    res.status(200).json({ success: true, data: child });
  } else if (req.method === "PUT") {
    const { id, name, age, gender } = req.body;

    const child = await prisma.child.update({
      where: { id },
      data: {
        name,
        age,
        gender,
      },
    });

    res.status(200).json({ success: true, data: child });
  } else if (req.method === "DELETE") {
    const { id } = req.body;

    const child = await prisma.child.delete({
      where: { id },
    });

    res.status(200).json({ success: true, data: child });
  } else {
    res.status(404).json({ success: false, message: "Invalid request method" });
  }
}
