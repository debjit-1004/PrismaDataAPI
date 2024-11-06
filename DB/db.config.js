import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query']
});

//Example usage of the Prisma client within an async function
async function main() {
  const user = await prisma.user.findUnique({ where: { id: 1 } });
  console.log(user);
}

main().catch(e => {
    console.error(e);
}).finally(async () => {
    await prisma.$disconnect();
});

export default prisma;
