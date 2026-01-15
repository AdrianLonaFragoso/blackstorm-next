import React from "react";
import "./globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Blackstorm Motos 100% Eléctricas",
  description:
    "Experimenta la movilidad del futuro con BLACK STORM. Potencia, eficiencia y cero emisiones en cada viaje.",
  metadataBase: new URL("https://blackstorm.com.mx/"),
  openGraph: {
    type: "website",
    url: "https://blackstorm.com.mx/",
    title: "Blackstorm Motos 100% Eléctricas",
    description:
      "Experimenta la movilidad del futuro con BLACK STORM. Potencia, eficiencia y cero emisiones en cada viaje.",
    images: [
      {
        url: "/blackstorm-og.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blackstorm Motos 100% Eléctricas",
    description:
      "Experimenta la movilidad del futuro con BLACK STORM. Potencia, eficiencia y cero emisiones en cada viaje.",
    images: ["/blackstorm-og.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
