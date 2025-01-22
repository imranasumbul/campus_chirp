import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import reactToast from '@/lib/reactToast'
interface editProfile {
    name: string,
    username: string,
    bio?: null | string
}
const profileEditSchema = z.object({
    name: z.string().min(4, {message: "Name must be a minimum of 4 characters"}),
    username: z.string(),
    bio: z.string().nullable()   
})
function EditForm() {
    const user = useSession().data?.user;
    console.log(user?.id);
    const router = useRouter();
    const form  = useForm<z.infer<typeof profileEditSchema>>({
        resolver: zodResolver(profileEditSchema),
        defaultValues: {
            name: user?.name,
            username: user?.username,
            bio: user?.bio,

        }
    });
    async function submitFunc(data :editProfile ){
        try{
            const userId = user?.id;
            console.log(form.formState.errors);
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/userDetails`;
            const res = await fetch(url, {
                method: 'POST', 
                body: JSON.stringify({ userId, ...data }),
            })
           
            if(res instanceof Error){
                reactToast({message: `${res.message}`, type: "error", duration: 5000});
            }else{
                reactToast({message: `User updated successfully`, type: "success", duration: 5000});
                router.push(`/`);
            }
            }catch(e){
                
                reactToast({message: `${e}`, type: "error", duration: 5000});
                router.push(`/user/${user?.id}`);
            }
    }
    return (
        <>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitFunc)}>
            <FormField control={form.control}
                    name='name'
                    render={({field}) => {
                        return (
                            <FormItem className='my-4'>
                                <FormLabel className='text-dark-text'>
                                    Your name
                                </FormLabel>
                                <FormControl>
                                    <Input className='text-dark-text' {...field} placeholder={user?.name} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}
                    >
                    </FormField>
                    <FormField control={form.control}
                    name='username'
                    render={({field}) => {
                        return (
                            <FormItem className='my-4'>
                                <FormLabel className='text-dark-text'>
                                    Your Username
                                </FormLabel>
                                <FormControl>
                                    <Input className='text-dark-text' {...field} placeholder={user?.username} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}
                    >
                    </FormField>
                    <FormField control={form.control}
                    name='bio'
                    render={({field}) => {
                        return (
                            <FormItem className='my-4'>
                                <FormLabel className='text-dark-text'>
                                    Your Bio
                                </FormLabel>
                                <FormControl>
                                    <Input className='text-dark-text' {...field} value={field.value ?? ""} placeholder={(user?.bio) ? user?.bio : `No bio yet`} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}
                    >
                    </FormField>
                    <Button className='w-[100%] mt-2' type='submit'>Submit</Button>
            </form>
        </Form>
    </>
    )
}

export default EditForm