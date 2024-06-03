import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "./_components/header";
import BreadcrumbNav from "./_components/breadcrumb-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "ShadCN Breadcrumb Example",
	description: "A ShadCN Breadcrumb example"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<div className="container my-24 rounded-sm bg-slate-50 p-3">
					<BreadcrumbNav />
				</div>
				<main className="container mx-auto">{children}</main>
			</body>
		</html>
	);
}
