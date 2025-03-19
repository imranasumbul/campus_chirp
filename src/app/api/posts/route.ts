import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(){
    try{
        
        const recommendedPosts = await prisma.post.findMany({
            // skip: 0,
            // take: 6,
            // where: ownerId && ownerId !== 'null' ? {id: {
            //     not: ownerId
            // }} : {},
            orderBy: {
                createdAt: "desc"
            },
            select: {
                id : true,
                body : true,
                createdAt: true,
                updatedAt: true,
                
                user: {
                    select: { // Properly define selection for the related `user`
                        id: true,
                        name: true,
                        username: true
                    }

                }

            }
        })
       
        return NextResponse.json(recommendedPosts, {status: 200})
    }catch(e){
        console.log("error", e);
        return NextResponse.json({error: `Error occured ${e}`}, {status: 500});
    }
}