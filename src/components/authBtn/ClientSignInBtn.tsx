"use client"

import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function ClientSignInBtn() {
    const { data: session } = useSession()
    if (session) return null
    return <button onClick={() => signIn("github", { redirectTo: "/dashboard" })}></button>
}
