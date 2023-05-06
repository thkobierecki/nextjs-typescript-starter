import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  const { email } = req.query;
  const user = await prisma.user.findUnique({
    where: { email },
    include: { children: { include: { stories: true } } },
  });
  res.status(200).json({id: user.id, email: user.email, children: user.children});
}
