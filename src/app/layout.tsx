import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Achmal Maulana | Developer • Student Leader • Problem Solver",
  description: "Personal portfolio of Achmal Maulana, a Software Engineering Student, Full Stack Developer, and Event Organizer. Building digital solutions, leading communities, and creating meaningful impact.",
  keywords: ["Achmal Maulana", "Portfolio", "Software Engineering Student", "Full Stack Developer", "Student Leader", "Event Organizer", "SIPERUKA", "JKB Fest"],
  authors: [{ name: "Achmal Maulana" }],
  creator: "Achmal Maulana",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/GomalRajaGula",
    title: "Achmal Maulana | Developer • Student Leader • Problem Solver",
    description: "Personal portfolio of Achmal Maulana. Building digital solutions, leading communities, and creating meaningful impact.",
    siteName: "Achmal Maulana Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Achmal Maulana | Developer • Student Leader • Problem Solver",
    description: "Personal portfolio of Achmal Maulana. Building digital solutions, leading communities, and creating meaningful impact.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${plusJakartaSans.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-[#09090B] text-[#FFFFFF] font-sans antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
