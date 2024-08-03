"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { SiSidequest } from "react-icons/si";

export const Appbar = () => {
  const { data: session } = useSession()

  return (
    <div className="flex mx-auto max-w-5xl  justify-between m-6">
      <div>
        <h2 className="text-2xl font-bold flex px-2 items-center gap-2"><SiSidequest className="gap-2 "/>JobQuest</h2>
        
      </div>
      <div>
        {
          session?.user ? (
            <Button onClick={() => signOut()}>Logout</Button>
          ) : (
            <Button onClick={() => signIn()}>Sign In</Button>
          )
        }
      </div>
      
    </div>
  )
}
