"use client"
import React from "react"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { navLinks } from "@/constants"
import { SignedIn, UserButton, SignedOut } from "@clerk/nextjs"
import { Button } from "./ui/button"

const MobileNav = () => {
	const pathname = usePathname()
	return (
		<header className='header'>
			<Link
				href='/'
				className='flex items-center gap-2'
			>
				<Image
					src='/assets/images/logo-icon.svg'
					width={54}
					height={32}
					alt='logo'
				/>
				<h2 className='text-4xl font-bold text-gray-600'>ProgAI</h2>
			</Link>
			<nav className='flex gap-2'>
				<SignedIn>
					<UserButton afterSignOutUrl='/' />

					<Sheet>
						<SheetTrigger>
							<MenuIcon
								className='cursor-pointer text-gray-500'
								size={30}
							/>
						</SheetTrigger>
						<SheetContent
							side={"right"}
							className='sheet-content  sm:w-[282px] p-2'
						>
							<SheetTitle />

							<SheetClose
								className='h-full'
								asChild
							>
								<div className='flex flex-col justify-between h-full'>
									<div>
										<Link
											href='/'
											className='flex items-center gap-2 my-4 p-3'
										>
											<Image
												src='/assets/images/logo-icon.svg'
												width={54}
												height={32}
												alt='logo'
											/>
											<h2 className='text-2xl font-bold text-gray-600'>
												ProgAI
											</h2>
										</Link>
										<ul className='header-nav_elements'>
											{navLinks.map(link => {
												const isActive =
													pathname === link.route ||
													pathname.startsWith(link.route + "/")
												return (
													<li
														key={link.route}
														className={cn(
															"p-18 flex whitespace-nowrap  text-gray-700 duration-150",
															{
																"gradient-text translate-x-8": isActive
															}
														)}
													>
														<SheetClose asChild>
															<Link
																className='sidebar-link !p-3'
																href={link.route}
															>
																<Image
																	width={24}
																	height={24}
																	src={link.icon}
																	alt='menu-item_icon'
																/>
																{link.label}
															</Link>
														</SheetClose>
													</li>
												)
											})}
										</ul>
									</div>
									<div className='cursor-pointer flex w-full self-end gap-2 p-4 border-t-2 border-gray-200 mt-4'>
										<UserButton
											afterSignOutUrl='/'
											showName
										/>
									</div>
								</div>
							</SheetClose>
						</SheetContent>
					</Sheet>
				</SignedIn>
				<SignedOut>
					<Button
						asChild
						className='button bg-purple-gradient bg-cover'
					>
						<Link href='/sign-in'>Sign In</Link>
					</Button>
				</SignedOut>
			</nav>
		</header>
	)
}

export default MobileNav
