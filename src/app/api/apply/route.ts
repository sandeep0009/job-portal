import { NextResponse } from "next/server";
import prisma from "@/utils/globalPrisma";


export async function GET(req:Request){
    try {

        const url=new URL(req.url);
        const id=url.searchParams.get('id');
        if(!id){
            return NextResponse.json({message:"please select a valid job"},{status:404})
        }

        const getDetails=await prisma.job.findUnique({
            where:{
                id:id
            },
            select:{
                applicationUrl:true
            }
        });
        if (!getDetails) {
            return NextResponse.json({ message: "Job not found" }, { status: 404 });
        }

        return NextResponse.json(getDetails, { status: 200 });

        
    } catch (error) {

        console.log("error in the get route of apply",error);
        return NextResponse.json({message:"error in the get route of apply"},{status:404});
        
    }
}