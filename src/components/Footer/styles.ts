import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: flex-start;
  padding: 2rem 0;
  background: ${(props) => props.theme.white};
  color: ${(props) => props.theme.black};
  flex-direction: column;

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-400"]};
    line-height: 25px;
  }

  p:last-child {
    margin-top: 24px;
  }

  .footerDown {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 860px) {
      align-items: flex-end;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      cursor: pointer;
      border: 2px solid ${(props) => props.theme["green-400"]};
      border-radius: 8px;
      min-width: 48px;
      min-height: 48px;
      box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 10px 0px;

      svg {
        height: 24px;
        color: ${(props) => props.theme["green-400"]};
      }
    }
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 25% 75%;
  padding: 3rem 0 2rem 0;
  border-top: 2px solid ${(props) => props.theme["green-100"]};
  border-bottom: 2px solid ${(props) => props.theme["green-100"]};
  margin-bottom: 36px;

  @media (max-width: 860px) {
    padding: 1.5rem 0 2rem 0;
    grid-template-columns: repeat(1, 1fr);
    .item1 {
      grid-row: 2 / 2;
    }
    .item2 {
      grid-row: 1 / 2;
    }
  }

  .columnLinks {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    align-items: flex-start;
    width: 100%;
    background: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};

    @media (max-width: 860px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 0rem;
      row-gap: 36px;
    }
  }

  .socialMedia {
    display: flex;
    padding-top: 3rem;
    gap: 24px;
    svg {
      stroke: ${(props) => props.theme["green-400"]};
      height: 32px;
    }
  }

  img {
    height: 48px;
    @media (max-width: 860px) {
      height: 0rem;
      display: none;
    }
  }

  .links {
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-weight: 700;

    a:first-child {
      margin-top: 24px;
    }
    a {
      font-weight: 400;
      text-decoration: none;
      padding: 12px 0;
      color: ${(props) => props.theme.black};
    }
  }
`;
