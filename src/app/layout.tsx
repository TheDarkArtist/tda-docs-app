import { NuqsAdapter } from "nuqs/adapters/next/app";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@liveblocks/react-ui/styles.css";
import "@liveblocks/react-tiptap/styles.css";
import "@/styles/globals.css";
import { ConvexClientProvider } from "@/providers/convex-client-provider";
import { Toaster } from "@/components/ui/toaster";

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
        <NuqsAdapter>
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </NuqsAdapter>
        <Toaster />
      </body>
    </html>
  );
}
