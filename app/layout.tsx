import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dilika Dilmith | Full Stack Web Developer",
    template: "%s | Dilika Dilmith",
  },
  description:
    "Portfolio of Dilika Dilmith, a Full Stack Web Developer specializing in modern web applications.",
  keywords: [
    "Dilika Dilmith",
    "Full Stack Developer",
    "Web Developer",
    "Portfolio",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Dilika Dilmith" }],
  openGraph: {
    title: "Dilika Dilmith | Full Stack Web Developer",
    description: "Portfolio of Dilika Dilmith, a Full Stack Web Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="flex flex-col min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}