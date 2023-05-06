import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    const child = await prisma.child.findUnique({
      where: { id: Number(id) },
      include: { stories: true },
    });
    res.status(200).json(child);
  } else {
    res.status(404).json({ success: false, message: "Invalid request method" });
  }
}
