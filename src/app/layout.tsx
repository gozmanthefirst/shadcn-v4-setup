// External Imports
import { geistMono, geistSans } from "@/styles/fonts";
import type { Metadata } from "next";
import { ReactNode } from "react";

// Local Imports
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js Playground",
  description:
    "I call it a playground but I'm not really playing in it. Just working and testing out shit, yunno.",
};

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
