import prisma from "@/lib/prismadb";
import { NextRequest, NextResponse } from "next/server";
export async function GET(req: NextRequest){
    try{
        const ownerId = req.nextUrl.searchParams.get(`ownerId`);
        
        const recommendedUsers = await prisma.user.findMany({
            skip: 0,
            take: 6,
            where: ownerId && ownerId !== 'null' ? {id: {
                not: ownerId
            }} : {},
            orderBy: {
                createdAt: "desc"
            },
            select: {
                username: true,
                profileImage: true,
                name: true,
                id: true
                
            }
        })
        
        return NextResponse.json(recommendedUsers, {status: 200})
    }catch(e){
        console.log("error", e);
        return NextResponse.json({error: `Error occured ${e}`}, {status: 500});
    }
}