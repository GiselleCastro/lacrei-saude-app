import type { ReactNode } from "react"
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Wrapper } from "./styles";

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <Wrapper>
                {children}
                <Footer />
            </Wrapper>
        </>
    )
}
