import classNames from "classnames";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prompt Pad",
  description: "ChatGPT UI for software engineers, built with ChatGPT.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={classNames(inter.className, "h-full")}>{children}</body>
    </html>
  );
}
