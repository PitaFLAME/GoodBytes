import Link  from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button, buttonVariants } from "./ui/button"
import { AlignJustify, ArrowRight, CookingPot, UserRound } from "lucide-react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { primaryTextAccent } from "./Global"
import React from "react"
import Hamburger from "./Hamburger"

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.ADMIN_EMAIL

    
    return (
        <nav className="sticky z-[100] h-14 insex-x-0 top-0 w-full border-b border-gray-200 
                       bg-white/75 backdrop-blur-lg transition-all">
            

            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <div className="flex flex-row items-center gap-2">
                        <Link href="/" className="flex z-40 font-semibold text-2xl">
                            <img src="/assets/logo.png" className="h-12 w-12 relative rounded-2xl mt-1 ml-4"/>
                        </Link>
                        <Link href="/" className="flex z-40 font-semibold text-2xl">
                            good<span className={`${primaryTextAccent}`}>bytes</span>
                        </Link>
                    </div>

                    {/* Desktop-only Nav Links */}
                    <div className="h-full hidden sm:flex items-center space-x-4">
                        {user ? (
                            <>
                                <Link href="/account" className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                })}>
                                    Account
                                </Link>
                                
                                { isAdmin ? <Link href="/admin" className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost",
                                })}>
                                    Dashboard
                                </Link> : null }

                                <Link href="/dashboard" className={buttonVariants({
                                    size: "sm",
                                    className: "hidden sm:flex items-center gap-1"
                                })}>
                                    Get Started
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
                    
                    {/* Mobile-only Hamburger */}
                    <div className="flex sm:hidden">
                        {user ? (
                                <>
                                    <Hamburger>
                                        <Link href="/account"
                                            className="flex flex-row gap-2 text-white text-xl mb-6">
                                            <UserRound className="h-8 w-8" /> Account
                                        </Link>
                                        <Link href="/dashboard"
                                            className="flex flex-row gap-2 text-white text-xl mb-6">
                                            <CookingPot className="h-8 w-8" /> Dashboard
                                        </Link>
                                        <Link href="/dashboard"
                                            className="flex flex-row gap-2 text-white text-xl mb-6
                                                rounded-lg
                                                border-2 px-8 py-1 border-zinc-600 bg-zinc-950
                                                shadow-lg shadow-zinc-950">
                                            <h2 className="underline underline-offset-4">Get Started</h2>
                                        </Link>
                                    </Hamburger>
                                </> )
                                :
                                ( <>
                                    <Link href="/api/auth/register"
                                            className="flex flex-row gap-2 text-white text-xl mb-6
                                                rounded-lg
                                                border-2 px-8 py-1 border-zinc-600 bg-zinc-950
                                                shadow-lg shadow-zinc-950">
                                            <h2 className="underline underline-offset-4">Get Started</h2>
                                        </Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar