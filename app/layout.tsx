// > Globals styles
import "./globals.scss";
// > Next
import type { Metadata } from "next";
// > Font
import { Inter } from "next/font/google";
import { NavBar } from "./components/navBar/NavBar";
import NextUiProvider from "./providers/nextUiProvider";
import { Footer } from "./components/footer/Footer";
const font = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NextUiProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </NextUiProvider>
      </body>
    </html>
  );
}
