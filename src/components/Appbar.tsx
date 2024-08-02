"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"

export const Appbar = () => {
  const { data: session } = useSession()

  return (
    <div className="flex justify-between m-2">
      <div>
        <h2 className="text-xl font-bold">JobQuest</h2>
        
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
