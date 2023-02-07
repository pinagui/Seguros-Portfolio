import { CardContainer, Image, Title, Description } from "./style";

export default function Cards ({ image, title, description}) {
  return (
    <CardContainer>
      <Image src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
}