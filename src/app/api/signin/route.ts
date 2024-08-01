
import prisma from "@/utils/globalPrisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req:Request,res:Response){
    try {

        const {name,email,password,role }=await req.json();

        const userExist=await prisma.user.findUnique({
            where:{
                email:email
            }
        })

        if (userExist){
            return NextResponse.json({message:"user already exist"},{status:404})
        }
        const hashedPassword=await bcrypt.hash(password,10)

        const newUser = await prisma.user.create({
            data: {
              name,
              email,
              password:hashedPassword,
              role
            },
          });

          return NextResponse.json({ message: "User saved", user: newUser }, { status: 201 });

        
    } catch (error) {
        return NextResponse.json({message:"error in sigin route"},{status:404})
    }
}