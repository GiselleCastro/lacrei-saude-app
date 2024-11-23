import { HeaderContainer } from "./styles"
import Down from "../../../public/assets/down.svg"
import Help from "../../../public/assets/help.svg"
import Person from "../../../public/assets/person.svg"

export function Header() {
    return (
        <HeaderContainer>
            <div className="desktop">
                <a href="/">
                    <img src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="LS Lacrei Saúde" />
                </a>
                <nav>
                    <button>
                        <a href="/about">Quem Somos</a>
                    </button>
                    <button className="help">
                        <a href="/help">Ajuda</a>
                    </button>
                    <button className="login">
                        <a href="">
                            Entrar <Down />
                        </a>
                    </button>
                </nav>
            </div>
            <div className="mobile">
                <a href="/">
                    <img src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_mobile.1f3a65cb.svg" alt="LS Lacrei Saúde" />
                </a>
                <nav>
                    <button className="help">
                        <a href="/help"><Help /></a>
                    </button>
                    <button className="login">
                        <a href="">
                            <Person />
                        </a>
                    </button>
                </nav>
            </div>
        </HeaderContainer>
    )
}