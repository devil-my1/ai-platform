"use client"
import { navLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { Button } from "./ui/button"

const Sidebar = () => {
	const pathname = usePathname()
	return (
		<aside className='sidebar'>
			<div className='flex size-full flex-col gap-4'>
				<Link
					href='/'
					className='sidebar-logo'
				>
					<Image
						src='/assets/images/logo-text.svg'
						alt='logo'
						width={180}
						height={28}
					/>
				</Link>

				<nav className='sidebar-nav'>
					<SignedIn>
						<ul className='sidebar-nav_elements'>
							{navLinks.slice(0, 6).map(link => {
								const isActive =
									pathname === link.route ||
									pathname.startsWith(link.route + "/")
								return (
									<li
										key={link.route}
										className={cn("sidebar-nav_element group text-gray-700", {
											"bg-purple-gradient text-white": isActive
										})}
									>
										<Link
											className='sidebar-link'
											href={link.route}
										>
											<Image
												width={24}
												height={24}
												src={link.icon}
												alt='menu-item_icon'
												className={cn("", {
													"brightness-200": isActive
												})}
											/>
											{link.label}
										</Link>
									</li>
								)
							})}
						</ul>
						<ul className='sidebar-nav_elements'>
							{navLinks.slice(6).map(link => {
								const isActive =
									pathname === link.route ||
									pathname.startsWith(link.route + "/")
								return (
									<li
										key={link.route}
										className={cn("sidebar-nav_element group text-gray-700", {
											"bg-purple-gradient text-white": isActive
										})}
									>
										<Link
											className='sidebar-link'
											href={link.route}
										>
											<Image
												width={24}
												height={24}
												src={link.icon}
												alt='menu-item_icon'
												className={cn("", {
													"brightness-200": isActive
												})}
											/>
											{link.label}
										</Link>
									</li>
								)
							})}

							<li className='cursor-pointer w-full gap-2 p-4 border-t-2 border-gray-200 mt-4'>
								<UserButton
									afterSignOutUrl='/'
									showName
								/>
							</li>
						</ul>
					</SignedIn>

					<SignedOut>
						<div className='flex flex-col gap-4'>
							<Button className='default-button'>
								<Link href='/sign-in'>Sign In</Link>
							</Button>
							<Button className='default-button'>
								<Link href='/sign-up'>Sign Up</Link>
							</Button>
						</div>
					</SignedOut>
				</nav>
			</div>
		</aside>
	)
}

export default Sidebar
