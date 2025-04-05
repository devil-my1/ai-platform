import { UserButton } from "@clerk/nextjs"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
	title: "Home"
}

export default function Home() {
	return (
		<div className='flex justify-between items-center'>
			<p className='h1-semibold'>Home</p>
		</div>
	)
}
