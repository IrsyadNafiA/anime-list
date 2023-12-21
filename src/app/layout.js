import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wibu Verse",
  description: "Yang wibu bisa disini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-100-200" suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
