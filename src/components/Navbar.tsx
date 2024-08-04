import Link  from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { primaryTextAccent } from "./Global"

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    return (
         <nav className="sticky z-[100] h-14 insex-x-0 top-0 w-full border-b border-gray-200 
                       bg-white/75 backdrop-blur-lg transition-all">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href="/" className="flex z-40 font-semibold text-2xl">
                    good<span className={`${primaryTextAccent}`}>bytes</span>
                </Link>
                <div className="h-full flex items-center space-x-4">
                    {user ? (
                        <>
                            <Link href="/account" className={buttonVariants({
                                size: "sm",
                                variant: "ghost",
                            })}>
                                Account
                            </Link>
                            
                            { isAdmin ? <Link href="/api/configure/dashboard" className={buttonVariants({
                                size: "sm",
                                variant: "ghost",
                            })}>
                                Dashboard
                            </Link> : null }

                            <Link href="/create" className={buttonVariants({
                                size: "sm",
                                className: "hidden sm:flex items-center gap-1"
                            })}>
                                Create meal
                                <ArrowRight className="ml-1.5 h-5 w-5" />
                            </Link>
                        </>
                    ) : (
                    <>
                        <Link href="/api/auth/register" className={buttonVariants({
                            size: "sm",
                            className: "hidden sm:flex items-center gap-1"
                            })}>
                            Get Started
                            <ArrowRight className="ml-1.5 h-5 w-5" />
                        </Link>
                    </>
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    </nav>
    )
}

export default Navbar