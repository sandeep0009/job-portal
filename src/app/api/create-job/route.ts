import { NextResponse } from "next/server";
import prisma from "@/utils/globalPrisma";

export async  function POST(req:Request,res:Response){
    try {

        const { slug, title, type, locationType, location, description, salary, companyName, applicationEmail, applicationUrl, companyLogoUrl, approved } = await req.json();

        if (!slug || !title || !type || !locationType || !salary || !companyName) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

       
        const newData = await prisma.job.create({
            data: {
                slug,
                title,
                type,
                locationType,
                location,
                description,
                salary,
                companyName,
                applicationEmail,
                applicationUrl,
                companyLogoUrl,
                approved: approved ?? false, 
            }
        });

       
        return NextResponse.json(newData, { status: 201 });

        
    } catch (error) {
        return NextResponse.json({message:"error while creating post route of jobs"},{status:404})
        
    }

}