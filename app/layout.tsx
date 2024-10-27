import type { Metadata } from "next";
import "./globals.css";
import ConvexClerkProvider from "@/app/providers/ConvexClerkProvider";

export const metadata: Metadata = {
  title: "Your Podcast",
  description: "Generated your podcast using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConvexClerkProvider>{children}</ConvexClerkProvider>
      </body>
    </html>
  );
}
