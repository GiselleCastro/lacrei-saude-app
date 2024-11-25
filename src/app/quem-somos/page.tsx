"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Section = dynamic(
  () => import("@/components/Section").then((result) => result.Section),
  { ssr: false },
);

const texts = [
  {
    title: "Atendimento qualificado, seguro e inclusivo",
    content:
      "Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo. Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+. Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.",
    img: "https://lacreisaude.com.br/_next/static/media/about-us-image.0c5e5cc6.png",
    description:
      "Pessoa com as cores da bandeira L G B T Q I A P N mais pintadas no rosto",
  },
  {
    title: "Nosso propósito",
    content:
      "A Lacrei Saúde facilita a conexão entre pessoas da comunidade LGBTQIAPN+ que precisam de atendimento clínico a profissionais da saúde.Buscamos proporcionar um atendimento de qualidade, sustentado pelos pilares da inclusão, representatividade e segurança.",
    img: "https://lacreisaude.com.br/_next/static/media/purpose-image.3e0752bb.png",
    description:
      "Imagem de uma pessoa sentada em uma poltrona com a bandeira L G B T Q I A P N mais na frente",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "Quem somos | Lacrei Saúde";
  });

  return texts.map((text) => {
    return <Section {...text} key={text.title} data-testid="about-section" />;
  });
}
