"use client"
import React from 'react';
import { Button } from './ui/button';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'

export const Hero = () => {
    const session=useSession()
    const route=useRouter()
  return (
    <div className="flex flex-col justify-center  items-center mt-20 ">
      <div className="text-3xl font-bold mb-4">
        Welcome to Job Quest
      </div>
      <div className="text-xl text-slate-600">
        Find your dream job or internship with our Job Quest
      </div>

      <div className='mt-5'>
        {
            session.data?.user?<Button onClick={()=>route.push('/dashboard')}>Go to Dashboard</Button>: <Button onClick={()=>signIn()} >
            Click to Login
        </Button>
        }
       
      </div>
    </div>
  );
}
