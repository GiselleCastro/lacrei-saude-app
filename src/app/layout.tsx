'use client';
import { Nunito } from 'next/font/google'
import { GlobalStyles } from "@/styles/global";
import { Layout } from "@/components/layout";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { defaultTheme } from "@/styles/themes/defaultTheme";
import StyledComponentsRegistry from '@/lib/registry';

const nunito = Nunito({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={nunito.className}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <StyleSheetManager shouldForwardProp={() => true}>
              <Layout>
                {children}
              </Layout>
            </StyleSheetManager>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
