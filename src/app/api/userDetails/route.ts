import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: NextRequest){
    
    try{
        const userId = req.nextUrl.searchParams.get(`userId`) as string;
        const existingUser = await prisma?.user.findUnique({
          where: {
              id: userId
          },
          select: {
              hashedPassword: false,
              followingIds: true,
              name: true,
              username: true,
              bio: true,
              profileImage: true
          }
      })
      const followersCount = await prisma?.user.count({
          where: {
              followingIds: {
                  has: userId
              }
          }
      })
      const followingCount = existingUser?.followingIds.length;
      return NextResponse.json({...existingUser, followersCount, followingCount}, {status: 200});

  }catch(e){
      console.log(e);
      return NextResponse.json({error: `Error occured ${e}`}, {status: 500});
  }
}

export async function POST(req : NextRequest){
    try{
        const {username, name, userId, bio} = await req.json();
        console.log(username, name, userId, bio);
        const user = await prisma?.user.findUnique({
            where: {
                username
            }
        })
        if(user && user.id !== userId){
            return NextResponse.json({error: `Username already taken. Please choose something else`}, {status: 400});
        }
        const updatedUser = await prisma?.user.update({
            where: {
                id: userId

            },
            data: {
                name,
                username,
                bio
            }
        })

        return NextResponse.json({updatedUser}, {status: 200});
    }catch(error){
        console.log(error);
        return NextResponse.json(
            {
                error: (error instanceof Error) ? error.message : 'An internal error occurred.',
            },
            { status: 500 }
        );
    }
}