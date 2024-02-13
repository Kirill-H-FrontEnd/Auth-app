// > Globals styles
import "./globals.scss";
// > Next
import type { Metadata } from "next";
// > Font
import { Nunito } from "next/font/google";
const font = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});
// > Components
import { NavBar } from "./components/navBar/NavBar";
import { Footer } from "./components/footer/Footer";
// > NextUi
import NextUiProvider from "./providers/nextUiProvider";
import ModalProvider from "./providers/modalProvider";
import { SubscribeModal } from "@/components/ui/modal";

export const metadata: Metadata = {
  title: "Protocol | Home",
  description: "Protocol is a web Framework",
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
          <ModalProvider>
            <NavBar />
            <main>{children}</main>
            <Footer />
            <SubscribeModal />
          </ModalProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}
