import "@/styles/global.css";
import Head from "next/head";
import StyledComponentsRegistry from "src/lib/registry";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peanut App",
  description: "Testing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* load fonts */}
      <Head>
        <link
          data-rh="true"
          rel="preload"
          href="https://cdn.peanut-app.io/static/media/KentledgeRegular.49ef8994.woff2"
          crossOrigin="anonymous"
          as="font"
          type="font/woff2"
        />
        <link
          data-rh="true"
          rel="preload"
          href="https://cdn.peanut-app.io/static/media/KentledgeHeavy.f4c760c6.woff2"
          crossOrigin="anonymous"
          as="font"
          type="font/woff2"
        ></link>
        <link
          data-rh="true"
          rel="preload"
          href="https://cdn.peanut-app.io/static/media/KentledgeRegularItalic.4b033476.woff2"
          crossOrigin="anonymous"
          as="font"
          type="font/woff2"
        ></link>
      </Head>
      <body>
        <div
          style={{ width: "100%", backgroundColor: "pink", height: "2rem" }}
        />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
