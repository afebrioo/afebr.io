import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahmanda Afebrio Yuris Soesatyo | AI/ML Engineer & Data Scientist",
  description:
    "Portfolio of Rahmanda Afebrio Yuris Soesatyo — Computer Engineering graduate from Telkom University. Specializing in AI/ML, Data Science, and intelligent systems.",
  keywords: ["Rahmanda Afebrio", "AI Engineer", "Data Scientist", "Machine Learning", "Portfolio", "Telkom University"],
  authors: [{ name: "Rahmanda Afebrio Yuris Soesatyo" }],
  openGraph: {
    title: "Rahmanda Afebrio | AI/ML Engineer",
    description: "Dark elegant portfolio with AI chat assistant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="bg-grid" aria-hidden="true" />
        <div className="bg-noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
