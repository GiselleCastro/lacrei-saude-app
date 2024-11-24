import { HeaderContainer } from "./styles"
import Down from "../../../public/assets/down.svg"
import Help from "../../../public/assets/help.svg"
import Person from "../../../public/assets/person.svg"
import { OptionsLogin } from "../OptionsLogin"
import { useState } from "react"
import { FormEvent } from "react"

export function Header() {
    const [showOptionsLogin, setShowOptionsLogin] = useState(false)

    const handlerShowOptionsLogin = (event: FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setShowOptionsLogin(!showOptionsLogin)
    }

    return (
        <>
            <HeaderContainer showOptionsLogin={showOptionsLogin}>
                <div className="desktop">
                    <a href="/">
                        <img src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg" alt="LS Lacrei Saúde" />
                    </a>
                    <nav>
                        <button>
                            <a href="/quem-somos">Quem Somos</a>
                        </button>
                        <button className="help">
                            <a href="/ajuda">Ajuda</a>
                        </button>
                        <button className="login" onClick={handlerShowOptionsLogin}>
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
                            <a href="/ajuda"><Help /></a>
                        </button>
                        <button className="login" onClick={handlerShowOptionsLogin}>
                            <a href="">
                                <Person />
                            </a>
                        </button>
                    </nav>
                </div>
            </HeaderContainer>
            <OptionsLogin isVisible={showOptionsLogin} />
        </>
    )
}