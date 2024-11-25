import styled from "styled-components";

export const HomeContainer = styled.div`
  transform-origin: center;
  transform: translate(calc((100% - 100vw) / 2), 0);

  img {
    width: calc(100vw);

    @media (max-width: 859px) {
      transform: translate(calc((100vw - 100%) / 2), 0);
      height: 320px;
      width: auto;
    }
  }

  div {
    position: absolute;
    bottom: 3rem;
    left: calc((100vw - 100%) / 2);

    @media (max-width: 1024px) {
      /* padding: */
    }
  }

  h1 {
    color: ${(props) => props.theme["green-400"]};
    font-weight: 700;
    font-size: 3rem;
    line-height: 3.625rem;
    margin-bottom: 0.8rem;

    @media (max-width: 1024px) {
      font-size: 2rem;
      line-height: 2.4rem;
    }
  }

  p {
    color: ${(props) => props.theme["gray-400"]};
    font-size: 1.5rem;
    line-height: 2.25rem;
    padding: 0.8rem 0;

    @media (max-width: 1024px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;
