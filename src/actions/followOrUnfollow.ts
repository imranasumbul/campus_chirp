"use server"


interface props {
    followerId : string,
    isFollowing: boolean,
    followingId: string
}
export default async function followOrUnfoolow ({followerId, isFollowing, followingId}: props){
    try{
        const user = await prisma?.user.findUnique({
        where: {
            id: followerId
        }
        
    })
        if(isFollowing){
            
            await prisma?.user.update({
                where: {
                    id: followerId
                },
                data: {
                    followingIds: {
                        set: user?.followingIds.filter((id) => id != followingId)
                    }
                }
            })
            return {success: `Unfollwed successfully`}
          }else{
            if(!(user?.followingIds.includes(followingId))){
                await prisma?.user.update({
                    where: {
                        id: followerId
                    },
                    data: {
                        followingIds: {
                            push: followingId
                        }
                    }
                    
                })
            }
            
               return {success : `Following successful`}
        }
        
       

    }catch(e){
        throw new Error(`Could'nt get following details. Please try later . ${e}`)
    }
}