import type { Metadata } from "next";

// import "@/styles/globals.css";
// import "@/styles/custom.css"
import "./globals.css"

import { Roboto_Slab } from "next/font/google";
import NavMobile from "@/Components/Nav/NavMobile/NavMobile";
import NavDesktop from "@/Components/Nav/NavDesktop/NavDesktop";
import Footer from "@/Components/Footer/Footer";

export const metadata: Metadata = {
	title: "Music DB",
	description: "New Project",
};

const roboto = Roboto_Slab({
	subsets: ["latin"],
	weight: "400",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='pl'>
			<head>
				<link
					href='https://fonts.googleapis.com/css2?family=Audiowide&display=swap'
					rel='stylesheet'
				/>
			</head>
			<body className={roboto.className}>
				<NavMobile />
				<NavDesktop />
				{children}
				<Footer />
			</body>
		</html>
	);
}
