import React from "react";
import "../src/index.css";
import Providers from "./providers";

export const metadata = {
  title: "Blackstorm",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
