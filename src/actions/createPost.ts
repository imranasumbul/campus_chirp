// "use server"
// interface createPostProps {
//     userId : string,
//     body: string,
    
// }
// async function createPost({userId, body}: createPostProps){
//     try{
//         const post = await prisma?.post.create({
//             data: {
//                 userId,
//                 body
//             }
//         })
//         if(post){
//             return {success: `Post successfully created.`}
//         }

//     }catch(e){
//         throw new Error(`Unexpected error while creating the post. Please try again later`)

//     }
   
    

// }