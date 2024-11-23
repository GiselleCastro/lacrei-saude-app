'use client';
import { Nunito } from 'next/font/google'
import { GlobalStyles } from "@/styles/global";
import Layout from "@/components/layout";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/defaultTheme";
import Head from "next/head";
import favicon from "../../public/favicon.ico"

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>
      <body>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
