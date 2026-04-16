import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";
import CartProvider from "./context/CartProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Mama's Kitchen",
    template: "%s | Mama's Kitchen",
  },
  description: "Best kitchen in your area",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full flex flex-col">
        <Header></Header>
        <main className="">
          <CartProvider>{children}</CartProvider>
        </main>
      </body>
    </html>
  );
}
