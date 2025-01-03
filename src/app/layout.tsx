import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TDA DOCS APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
