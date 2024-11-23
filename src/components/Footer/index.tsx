import { FooterContainer, FooterGrid } from "./styles"
import { v4 as uuid } from 'uuid';
import Facebook from '../../../public/assets/facebook.svg'
import Instagram from '../../../public/assets/instagram.svg'
import Linkedin from '../../../public/assets/linkedin.svg'
import Mail from '../../../public/assets/mail.svg'
import Up from '../../../public/assets/up.svg'

const linksFooter = [
    {
        id: uuid(),
        title: "Lacrei Saúde",
        linkList: [
            {
                id: uuid(),
                title: "Quem Somos",
                url: "/about"
            },
            {
                id: uuid(),
                title: "Nosso Propósito",
                url: "/about"
            },
            {
                id: uuid(),
                title: "Missão, Visão e Valor",
                url: "/about"
            },
            {
                id: uuid(),
                title: "Acessibilidade",
                url: "/about"
            }
        ]
    },
    {
        id: uuid(),
        title: "Saúde",
        linkList: [
            {
                id: uuid(),
                title: "Buscar atendimento",
                url: "/help"
            },
            {
                id: uuid(),
                title: "Oferecer atendimento",
                url: "/help"
            },
        ]
    },
    {
        id: uuid(),
        title: "Segurança e Privacidade",
        linkList: [
            {
                id: uuid(),
                title: "Política de Privacidade",
                url: "/"
            },
            {
                id: uuid(),
                title: "Termos de uso",
                url: "/"
            },
            {
                id: uuid(),
                title: "Direitos de Titular",
                url: "/"
            },
        ]
    }
]

const listText = [
    'A Lacrei Saúde não oferece tratamento médico emergencial. Em caso de emergência procure o hospital mais próximo.',
    'Em caso de auxílio psicológico, ligue para 188 (CVV) ou acesse o site www.cvv.org.br',
    'Copyright © 2024 Lacrei Saúde. Todos os direitos reservados. CNPJ: 51.265.351/0001-65',
]

export function Footer() {

    const handlerUpPage = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return <FooterContainer>
        <FooterGrid >
            <div className="item1">
                <a href="/">
                    <img src="https://lacreisaude.com.br/_next/static/media/global-logo.e41aea7b.svg" alt="" />
                </a>
                <div className="socialMedia">
                    <a href="https://www.facebook.com/lacrei.saude/">
                        <Facebook alt='Facebook' />
                    </a>
                    <a href="https://www.instagram.com/lacrei.saude">
                        <Instagram alt='Instagram' />
                    </a>
                    <a href="https://www.linkedin.com/company/lacrei">
                        <Linkedin alt='LinkedIn' />
                    </a>
                    <a href="malito:contato@lacreisaude.com.br" target="_blank" title="E-mail site externo - abrirá uma nova janela com e e-mail do Lacrei Saúde">
                        <Mail alt='Mail' />
                    </a>
                </div>
            </div>
            <div className="columnLinks item2">
                {linksFooter.map(col => {
                    return <div key={col.id} className="links">
                        {col.title}
                        {col.linkList.map(link => <a href={link.url} key={link.id}>{link.title}</a>)}
                    </div>
                })}
            </div>
        </FooterGrid>

        <div className="footerDown">
            <div>
                {listText.map(text => {
                    return (
                        <p key={text}>{text}</p>
                    )
                })}
            </div>
            <button
                title="Voltar ao topo da página"
                onClick={handlerUpPage}>
                <Up />
            </button>
        </div>
    </FooterContainer >
}