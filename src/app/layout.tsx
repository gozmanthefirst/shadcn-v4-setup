import type { Metadata } from "next";

import { geistSans } from "@/styles/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "ShadCN v4 Setup",
  description: "ShadCN v4 Setup",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
