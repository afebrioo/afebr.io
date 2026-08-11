import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahmanda Afebrio — AI/ML Engineer · Data Scientist",
  description:
    "Portfolio of Rahmanda Afebrio — Computer Engineering graduate from Telkom University. Specializing in AI/ML, Data Science, and full-stack engineering.",
  keywords: ["Rahmanda Afebrio", "AI Engineer", "Data Scientist", "Machine Learning", "Portfolio", "Telkom University"],
  authors: [{ name: "Rahmanda Afebrio Yuris Soesatyo" }],
  openGraph: {
    title: "Rahmanda Afebrio — AI/ML Engineer",
    description: "Editorial portfolio with AI chat assistant. Building intelligent systems at the intersection of data and engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
