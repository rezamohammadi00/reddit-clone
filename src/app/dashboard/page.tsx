import { ClientSignOutBtn } from "@/components/authBtn/ClientSignOutBtn"
import { redirect } from "next/navigation"

import { auth } from "@/app/auth"


const DashboardPage = async () => {
    const session = await auth()
    console.log("DashboardPage", session)

    if (!session) redirect("/")
    return (
        <div><ClientSignOutBtn /></div>
    )
}

export default DashboardPage