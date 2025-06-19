import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nectar",
  description: "ESAM Timeline",
  generator: "nectarit.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
