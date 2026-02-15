import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Windows 9 - Last Mile Connectivity",
    description: "Effortless rides from your doorstep to nearest Pune Metro station",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
