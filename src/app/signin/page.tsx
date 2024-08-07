"use client"
import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'

const Page = () => {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
    const {data:session}=useSession();
    const router=useRouter()

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target 
        setFormData(prev=>({
            ...prev,
            [name]:value
        }))
    }
    const handleLogin=async(e:React.FormEvent)=>{
        e.preventDefault()
        const res = await signIn('credentials', {
            redirect: false,
            email: formData.email,
            password: formData.password
        });
       

        if (res?.error) {
           
            console.error(res.error);
        } else if (res?.ok) {
           
            session?.user.role=="job-provider"?router.push('/admin-pannel'):router.push('/dashboard')

        }

    }
  return (
    <div className='w-full max-w-md mx-auto mt-20 border border-black shadow-lg rounded-lg'>
        <div className='p-6'>

            <h1 className='text-2xl font-bold text-center mb-6'>Login to JobQuest</h1>
            <form onSubmit={handleLogin} className='flex flex-col space-y-4'>
                    <div className='flex flex-col'>
                        <Label htmlFor="email" className='mb-1 text-sm font-medium'>email</Label>
                        <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter your name'
                            className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <Label htmlFor="password" className='mb-1 text-sm font-medium'>Password</Label>
                        <Input
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter your password'
                            type='password'
                            className='border rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-gray-500'
                        />
                    </div>
                    <Button type="submit"  className='bg-black text-white'>
                        Sign Up
                    </Button>

</form>

        </div>
    </div>
  )
}

export default Page