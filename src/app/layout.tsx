import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import AppLayout from "@/components/layout";

const raleway = Raleway({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
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
      <body className={raleway.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
