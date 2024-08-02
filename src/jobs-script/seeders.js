const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const { jobsData } = require("./data");

async function insertData() {
  try {
    for (const job of jobsData) {
      const existingJob = await prisma.job.findUnique({
        where: { slug: job.slug },
      });

      if (existingJob) {
        await prisma.job.update({
          where: { slug: job.slug },
          data: job,
        });
        console.log(`Updated job with slug: ${job.slug}`);
      } else {
        await prisma.job.create({
          data: job,
        });
        console.log(`Created new job with slug: ${job.slug}`);
      }
    }
    console.log("Jobs insertion/update completed successfully!");
  } catch (error) {
    console.error("Error processing jobs:", error);
  } finally {
    await prisma.$disconnect();
  }
}

insertData();