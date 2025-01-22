import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
export async function GET(req : NextRequest){
    try{
        console.log(`received request api/getFollowing/route`)
        const userId  = req.nextUrl.searchParams.get('userid') as string;
        const user = await prisma?.user.findUnique({
            where: {
                id: userId,
            }
            
        })
        
        return NextResponse.json({followingIds : user?.followingIds}, {status: 200})
    }catch(e){
        console.log(e);
        //throw new Error(`cannot fetch followingIds. please try later`)
        return NextResponse.json({error: `Error occured ${e}`}, {status: 500});

    }
    
    
}