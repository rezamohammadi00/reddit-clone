import { signOut, auth } from "@/app/auth"

export async function ServerSignOutBtn() {
    const session = await auth()
    if (!session) return null
    return (
        <form
            action={async () => {
                "use server"
                await signOut()
            }}
        >
            <button type="submit">Sign Out</button>
        </form>
    )
}