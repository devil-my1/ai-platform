export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <main className='auth'>{children}</main>
}
