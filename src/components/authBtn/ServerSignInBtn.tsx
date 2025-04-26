import { signIn,auth } from "@/app/auth"

export default async function ServerSignInBtn () {
    const session = await auth()
    if (session) return null

    return (
        <form
            action={async () => {
                "use server"
                await signIn("github",{ redirectTo: "/dashboard"})
            }}
        >
            <button type="submit">Signin with GitHub</button>
        </form>
    )
} 