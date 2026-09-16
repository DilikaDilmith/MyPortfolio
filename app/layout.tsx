import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export const metadata: Metadata = {
  title: "Dilika Dilmith | Full-Stack Developer",
  description:
    "Portfolio of Dilika Dilmith — Information Technology undergraduate at SLIIT and Full-Stack Developer building modern web and mobile applications.",
  keywords: [
    "Dilika Dilmith",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Spring Boot",
    "Next.js Portfolio",
    "SLIIT",
    "Sri Lanka Developer",
  ],
  authors: [{ name: "Dilika Dilmith" }],
  creator: "Dilika Dilmith",
  openGraph: {
    title: "Dilika Dilmith | Full-Stack Developer",
    description:
      "Portfolio of Dilika Dilmith — Full-Stack Developer building modern web and mobile applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="flex flex-col min-h-screen antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}