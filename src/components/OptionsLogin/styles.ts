import styled from "styled-components"

export type IsVisibleType = {
    isVisible: boolean;
}

export const OptionsLoginContainer = styled.div.withConfig({
    shouldForwardProp: (props) => props !== 'isVisible', 
  })<IsVisibleType>`

    position: absolute;
    width: 13.25rem;
    height: 9.375rem;
    border-radius: 8px;
    border: 1px solid ${props => props.theme["gray-200"]};
    background: ${props => props.theme.white};
    z-index: 1;
    top: 6rem;
    display: ${props=> props.isVisible ? 'flex' : 'none'};
    justify-content: center;
    flex-direction: column;
    padding: 0 14px;

    right: calc(7.5rem);


    @media (max-width: 1024px) {
        right: calc(2rem);
    }

    @media (max-width: 860px) {
        right: calc(1.5rem);
    }

    .bar {
        border-top: 1px solid ${props => props.theme["gray-200"]};
    }

    a {
        font-weight: 700;
        font-size: 18px;
        padding: 0 1rem;
        margin: auto 0;
        display: flex;
        align-items: center;
        gap: 16px;
        text-decoration: none;
        line-height: 48px;
        color: ${props => props.theme.black};
        border-left: 4px solid transparent;

        svg {
            height: 24px;
        }

        &:hover {
            background: ${props => props.theme["green-100"]};
            border-left: 4px solid ${props => props.theme["green-400"]};

            svg {
                fill: ${props => props.theme["green-400"]};
            }
        }
    }
`