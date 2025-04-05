import { SignUp } from "@clerk/nextjs"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: "SignUp"
}

export default function SignUpPage() {
	return (
		<main className='flex h-screen w-full items-center justify-center'>
			<SignUp />
		</main>
	)
}
