import { NextResponse } from "next/server";
import prisma from "@/utils/globalPrisma";
export async function GET(req: Request) {
    try {
        const url = new URL(req.url);

        const page = parseInt(url.searchParams.get('page') || '1', 10);
        const limit = parseInt(url.searchParams.get('limit') || '50', 10); // Increased default limit
        const skip = (page - 1) * limit;
        const take = limit;

        const title = url.searchParams.get('title') || '';
        const type = url.searchParams.get('type') || '';
        const location = url.searchParams.get('location') || '';
        const remote = url.searchParams.get('remote') === 'true';

        const where: any = {};
        if (title) {
            where.title = {
                contains: title,
                mode: 'insensitive',
            };
        }
        if (type) {
            where.type = type;
        }
        if (location) {
            where.locationType = location;
        }

       

        
        if (remote && typeof remote === 'boolean') {
            where.locationType = remote ? 'Remote' : { not: 'Remote' };
        }

      

        const [allJobData, totaljobs] = await Promise.all([
            prisma.job.findMany({ skip, take, where }),
            prisma.job.count({ where })
        ]);

        

        return NextResponse.json({
            message: "all jobs fetched successfully",
            allJobData,
            totaljobs,
            totalPages: Math.ceil(totaljobs / limit),
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "error in get request of jobs" }, { status: 500 });
    }
}
