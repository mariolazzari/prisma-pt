import { PrismaClient } from "../generated/prisma/index.js";

const prisma = new PrismaClient();

(async function () {
  try {
    console.log("Seed start");
    await prisma.user.createMany({
      data: [
        { name: "Alice", email: "alice@gmail.com" },
        { name: "Bob", email: "bob@gmail.com" },
        { name: "Charlie", email: "charlie@gmail.com" },
      ],
    });
    console.log("Seed end");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
})();
