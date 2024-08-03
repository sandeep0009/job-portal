import { NextResponse } from "next/server";
import prisma from "@/utils/globalPrisma";


export async function GET(req:Request,res:Response){
    try {
         const url=new URL(req.url)

         const page = parseInt(url.searchParams.get('page') || '1', 10);
        const limit = parseInt(url.searchParams.get('limit') || '5', 10);

         const skip=(page-1)*limit
         const take=limit
        const allJobData=await prisma.job.findMany({skip,take});

        const totaljobs=await prisma.job.count();
        
        return NextResponse.json({message:"all jobs fetched successfully", allJobData,totaljobs,   totalPages: Math.ceil(totaljobs / limit),},{status:201})      
        
    } catch (error) {
        return NextResponse.json({message:"error in get request of jobs"},{status:404})
    }

}