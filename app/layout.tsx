import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import "react-datepicker/dist/react-datepicker.css"
import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"

const IBMPlex = IBM_Plex_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-ibm-plex"
})

export const metadata: Metadata = {
	title: {
		default: "ProgAI",
		template: `%s | ProgAI`
	},
	description: "AI-powered image generator",
	icons: ["/assets/images/logo-icon.svg"]
}
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<ClerkProvider
			appearance={{
				layout: {
					socialButtonsVariant: "iconButton",
					logoImageUrl: "/assets/images/logo-icon.svg"
				},
				variables: {
					colorText: "#fff",
					colorPrimary: "#624cf5",
					colorBackground: "#1C1F2E",
					colorInputBackground: "#252A41",
					colorInputText: "#fff"
				}
			}}
		>
			<html
				lang='en'
				suppressHydrationWarning
			>
				<body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
					{children}
					<Toaster />
				</body>
			</html>
		</ClerkProvider>
	)
}
