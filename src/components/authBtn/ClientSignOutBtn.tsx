"use client"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"


export function ClientSignOutBtn() {
    const { data: session } = useSession()
    if (!session) return null

    return <button onClick={() => signOut()}>Sign Out</button>
}