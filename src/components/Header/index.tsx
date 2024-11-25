import { HeaderContainer } from "./styles";
import Down from "../../../public/assets/down.svg";
import Help from "../../../public/assets/help.svg";
import Person from "../../../public/assets/person.svg";
import { OptionsLogin } from "../OptionsLogin";
import { useState, useEffect } from "react";
import { FormEvent } from "react";
import Link from "next/link";

export function Header() {
  const [showOptionsLogin, setShowOptionsLogin] = useState(false);

  const handlerShowOptionsLogin = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowOptionsLogin(!showOptionsLogin);
  };

  useEffect(() => {
    const handlerClick = () => {
      setShowOptionsLogin(false);
    };
    document.addEventListener("click", handlerClick);

    return () => document.removeEventListener("click", handlerClick);
  }, [showOptionsLogin]);

  return (
    <>
      <HeaderContainer showOptionsLogin={showOptionsLogin} data-testid="header">
        <div className="desktop" data-testid="header-desktop">
          <Link href="/">
            <img
              src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_desktop.7ae004ab.svg"
              alt="LS Lacrei Saúde"
            />
          </Link>
          <nav>
            <button>
              <Link href="/quem-somos">Quem Somos</Link>
            </button>
            <button className="help">
              <Link href="/ajuda">Ajuda</Link>
            </button>
            <button
              className="login"
              onClick={handlerShowOptionsLogin}
              data-testid="button-login-desktop"
            >
              <Link href="">
                Entrar <Down />
              </Link>
            </button>
          </nav>
        </div>
        <div className="mobile" data-testid="header-mobile">
          <Link href="/">
            <img
              src="https://lacreisaude.com.br/_next/static/media/logo_lacrei_mobile.1f3a65cb.svg"
              alt="LS Lacrei Saúde"
            />
          </Link>
          <nav>
            <button className="help">
              <Link href="/ajuda">
                <Help />
              </Link>
            </button>
            <button
              className="login"
              onClick={handlerShowOptionsLogin}
              data-testid="button-login-mobile"
            >
              <Link href="">
                <Person />
              </Link>
            </button>
          </nav>
        </div>
      </HeaderContainer>
      <OptionsLogin isVisible={showOptionsLogin} data-testid="options-login" />
    </>
  );
}
