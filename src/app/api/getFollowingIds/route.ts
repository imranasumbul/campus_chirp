import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest){
    try{
        
        const userId  = req.nextUrl.searchParams.get('userId') as string;
        const user = await prisma?.user.findUnique({
            where: {
                id: userId,
            }
            
        })
        return NextResponse.json(user?.followingIds, {status: 200})
    }catch(e){
        console.log(e);
        //throw new Error(`cannot fetch followingIds. please try later`)
        return NextResponse.json({error: `Error occured ${e}`}, {status: 500});

    }
    
    
}