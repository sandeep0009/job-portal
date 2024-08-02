import { NextResponse } from "next/server";
import prisma from "@/utils/globalPrisma";


export async function GET(req:Request,res:Response){
    try {
        const allJobData=await prisma.job.findMany()
        return NextResponse.json({message:"all jobs fetched successfully", allJobData},{status:201})      
        
    } catch (error) {
        return NextResponse.json({message:"error in get request of jobs"},{status:404})
    }

}