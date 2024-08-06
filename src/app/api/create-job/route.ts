import { NextResponse } from "next/server";
import prisma from "@/utils/globalPrisma";

export async function POST(req: Request) {
    try {
        const dataToSend = await req.json();
            
        const {
            slug,
            jobTitle,
            jobType,
            locationType,
            jobLocation,
            salary,
            description,
            companyName,
            approved
        } = dataToSend;

       
        if (!slug || !jobTitle || !jobType || !locationType || !jobLocation || !salary || !description || !companyName ) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

    
        const newJob = await prisma.job.create({
            data: {
                slug,
                title: jobTitle,
                type: jobType,
                locationType,
                location: jobLocation,
                salary: parseInt(salary),
                description,
                companyName,
                approved: approved ?? false,
            }
        });

        return NextResponse.json(newJob, { status: 201 });

    } catch (error) {
        console.error("Error creating job:", error);
        return NextResponse.json({ message: "Error while creating job" }, { status: 500 });
    }
}
