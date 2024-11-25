import { FooterContainer, FooterGrid } from "./styles";
import Facebook from "../../../public/assets/facebook.svg";
import Instagram from "../../../public/assets/instagram.svg";
import Linkedin from "../../../public/assets/linkedin.svg";
import Mail from "../../../public/assets/mail.svg";
import Up from "../../../public/assets/up.svg";
import Link from "next/link";

const linksFooter = [
  {
    title: "Lacrei Saúde",
    linkList: [
      {
        title: "Quem Somos",
        url: "/quem-somos",
      },
      {
        title: "Nosso Propósito",
        url: "/quem-somos",
      },
      {
        title: "Missão, Visão e Valor",
        url: "/quem-somos",
      },
      {
        title: "Acessibilidade",
        url: "/quem-somos",
      },
    ],
  },
  {
    title: "Saúde",
    linkList: [
      {
        title: "Buscar atendimento",
        url: "/ajuda",
      },
      {
        title: "Oferecer atendimento",
        url: "/ajuda",
      },
    ],
  },
  {
    title: "Segurança e Privacidade",
    linkList: [
      {
        title: "Política de Privacidade",
        url: "/",
      },
      {
        title: "Termos de uso",
        url: "/",
      },
      {
        title: "Direitos de Titular",
        url: "/",
      },
    ],
  },
];

const listText = [
  "A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.",
  "Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site www.cvv.org.br",
  "Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65",
];

export function Footer() {
  const handlerUpPage = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <FooterContainer data-testid="footer">
      <FooterGrid>
        <div className="item1">
          <Link href="/">
            <img
              src="https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg"
              alt=""
              data-testid="footer-logo"
            />
          </Link>
          <div className="socialMedia">
            <Link href="https://www.facebook.com/lacrei.saude/">
              <Facebook alt="Facebook" />
            </Link>
            <Link href="https://www.instagram.com/lacrei.saude">
              <Instagram alt="Instagram" />
            </Link>
            <Link href="https://www.linkedin.com/company/lacrei">
              <Linkedin alt="LinkedIn" />
            </Link>
            <Link
              href="malito:contato@lacreisaude.com.br"
              target="_blank"
              title="E-mail site externo - abrirá uma nova janela com e e-mail do Lacrei Saúde"
            >
              <Mail alt="Mail" />
            </Link>
          </div>
        </div>
        <div className="columnLinks item2">
          {linksFooter.map((col) => {
            return (
              <div key={col.title} className="links">
                {col.title}
                {col.linkList.map((link) => (
                  <Link href={link.url} key={link.title}>
                    {link.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </FooterGrid>

      <div className="footerDown">
        <div>
          {listText.map((text) => {
            return <p key={text}>{text}</p>;
          })}
        </div>
        <button
          title="Voltar ao topo da página"
          onClick={handlerUpPage}
          data-testid="button-footer-top"
        >
          <Up />
        </button>
      </div>
    </FooterContainer>
  );
}
