import { NextRequest, NextResponse } from "next/server";

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
      throw new Error(`Can't get user details. please try again later`)
  }
}