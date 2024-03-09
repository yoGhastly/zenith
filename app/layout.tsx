import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Zenith",
  metadataBase: new URL("https://aizenith.vercel.app"),
  description:
    "Zenith is a powerful SaaS platform, designed to assist developers in making informed decisions about the best tools for their projects. With personalized recommendations and expert guidance, Zenith streamlines the tool selection process, helping developers build better projects with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
