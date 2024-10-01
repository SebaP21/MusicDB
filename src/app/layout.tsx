import type { Metadata } from "next";
import "./globals.css";
import { Audiowide } from "next/font/google";
import { Roboto_Slab } from "next/font/google";

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
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
