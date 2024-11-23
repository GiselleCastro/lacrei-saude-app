import { HeaderContainer } from "./styles"
import Down from "../../../public/assets/down.svg"

export function Header() {
    return (
        <HeaderContainer>
            <div>
                <a href="/">
                    <img src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="LS Lacrei Saúde" />
                </a>
                <nav>
                    <button>
                        <a href="/about">Quem Somos</a>
                    </button>
                    <button>
                        <a href="/help">Ajuda</a>
                    </button>
                    <button className="login">
                        <a href="">
                            Entrar <Down />
                        </a>
                    </button>
                </nav>
            </div>
        </HeaderContainer>
    )
}