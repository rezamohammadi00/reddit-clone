import { auth } from "@/app/auth"
import { ServerSignOutBtn } from "@/components/authBtn/ServerSignOutBtn"
import { redirect } from "next/navigation"


const DashboardPage = async () => {
    const session = await auth()
    console.log("DashboardPage",session)

    if (!session) redirect("/")
    return (
        <div><ServerSignOutBtn /></div>
    )
}

export default DashboardPage