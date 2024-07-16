import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'MongoDB CRUD',
	description: 'Sherdils Mini Project',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='px-[200px] mt-10'>
					<Navbar />
					<div className='mt-8'>{children}</div>
				</div>
			</body>
		</html>
	)
}
