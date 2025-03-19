import { NextRequest, NextResponse } from "next/server"


export async function POST(req: NextRequest){
    try{
        const {userId, body} = await req.json();
        const post = await prisma?.post.create({
            data: {
                userId,
                body
            }
        })
        if(post){
            return NextResponse.json({success : `Post successfully created`}, {status: 200});
        }

    }catch(e){
        console.log(e);
            return NextResponse.json({errorMsg: `An internal server error occured. Try again later`, error: e }, {status: 500});

    }
   
    

}