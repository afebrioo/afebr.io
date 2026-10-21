import type { Metadata } from "next";
import { Poppins, Space_Mono, Syne } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rahmanda Afebrio — AI/ML Engineer · Data Scientist",
  description:
    "Portfolio of Rahmanda Afebrio — Computer Engineering graduate from Telkom University. Specializing in AI/ML, Data Science, and full-stack engineering.",
  keywords: ["Rahmanda Afebrio", "AI Engineer", "Data Scientist", "Machine Learning", "Portfolio", "Telkom University"],
  authors: [{ name: "Rahmanda Afebrio Yuris Soesatyo" }],
  openGraph: {
    title: "Rahmanda Afebrio — AI/ML Engineer",
    description: "Portfolio with AI showcase. Building intelligent systems at the intersection of data and engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poppins.variable} ${spaceMono.variable} ${syne.variable}`} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}

