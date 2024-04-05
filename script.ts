import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient({ log: ["query"] });
const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.deleteMany();
//   const user = await prisma.user.create({
//     data: {
//       name: "Kyle",
//       email: "somebody@test.com",
//       age: 19,
//       userPreference: {
//         create: {
//           emailUpdates: true,
//         },
//       },
//     },
//     // include: {
//     //   userPreference: true,
//     // },
//     select: {
//       name: true,
//       userPreference: { select: { id: true } },
//     },
//   });

//   console.log(user);
// }

// async function main() {
//   await prisma.user.deleteMany();
//   const users = await prisma.user.createMany({
//     data: [
//       {
//         name: "Kyle",
//         email: "somebody@test.com",
//         age: 19,
//       },
//       {
//         name: "Andrzej",
//         email: "andrzej@test.com",
//         age: 42,
//       },
//     ],
//   });

//   console.log(users);
// }

// async function main() {
//   const user = await prisma.user.findUnique({
//     where: {
//       // email: "somebody@test.com",
//       age_name: {
//         age: 19,
//         name: "Kyle",
//       },

//     },
//   });

//   console.log(user);
// }

async function main() {
  // const user = await prisma.user.findFirst({
  const user = await prisma.user.findMany({
    where: {
      // email: "somebody@test.com",
      name: "Sally",
    },
    // distinct: ["name", "age"],
    orderBy: {
      age: "asc",
    },
    take: 2,
    // skip: 1,
  });

  console.log(user);
}

// async function main() {
//   await prisma.user.createMany({
//     data: [{ name: "Sally", age: 15, email: "sally@test4.com" }],
//   });
// }

// async function main() {
//   // const user = await prisma.user.findFirst({
//   const user = await prisma.user.findMany({
//     where: {
//       // email: "somebody@test.com",
//       // name: { not: "Sally" },
//       // name: { equals: "Sally" },
//       // name: { in: ["Sally", "Kyle"] },
//       // name: { notIn: ["Sally", "Kyle"] },
//       // age: { lt: 20 },
//       // age: { gt: 20 },
//       // age: { lte: 20 },
//       // email: { contains: "@test.com" },

//       // AND: [
//       //   { email: { endsWith: "@test.com" } },
//       //   { email: { startsWith: "somebody" } },
//       // ],

//       // userPreference: {
//       //   emailUpdates: true,
//       // },
//       writtenPosts: {
//         // every: {
//         //   title: "Test",
//         // },
//         // none: {
//         //   title: "Test",
//         // },
//         some: {
//           title: { startsWith: "Test" },
//         },
//       },
//     },
//   });

//   console.log(user);
// }

// async function main() {
//   const user = await prisma.user.update({
//     // const user = await prisma.user.updateMany({
//     where: {
//       email: "somebody@test.com",
//     },
//     data: {
//       age: { increment: 1 },
//     },
//   });
//   // const user = await prisma.user.findMany({
//   //   where: {
//   //     name: "Sally",
//   //   },
//   // });
//   console.log(user);
// }

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
