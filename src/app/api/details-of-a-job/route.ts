import { NextResponse } from "next/server";
import prisma from "@/utils/globalPrisma";


export async function GET(req:Request,res:Response){
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get('id');

        if(!id){
            return NextResponse.json({message:"please select a valid job"},{status:404})
        }

        const jobdetail=await prisma.job.findUnique({
            where:{
                id:id
            }
        })

        return NextResponse.json({message:"successfully fetched the details",jobdetail},{status:201});
        
    } catch (error) {
        return NextResponse.json({message:"error in the get details of a job"},{status:404})
        
    }
}