import { SectionContainer } from "./styles";

interface SectionProps {
  title: string;
  content: string;
  img: string;
  description: string;
}

export function Section({ title, content, img, description }: SectionProps) {
  return (
    <SectionContainer>
      <h1>{title}</h1>
      <div className="bar"></div>
      <br />
      <div className="content">
        <p>{content}</p>
        <img src={img} alt={description} data-testid="img" />
      </div>
    </SectionContainer>
  );
}
