import "./globals.scss";
import type { Metadata } from "next";
import { Work_Sans, Sora, Inter } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const work = Work_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-work-sans",
});
const sora = Sora({
	subsets: ["latin"],
	weight: "700",
	variable: "--font-sora",
});

export const metadata: Metadata = {
	title: "Help Me Out",
	description: "Your web Assistant",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={` ${work.variable} ${sora.variable} ${inter.variable}`}
		>
			<body className={work.className}>{children}</body>
		</html>
	);
}
