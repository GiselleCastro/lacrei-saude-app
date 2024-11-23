import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 6rem;
background: linear-gradient(180deg, #F5FFFB 31.04%, #FFFFFF 100%);
display: flex;
align-items: center;
justify-content: center;
width: 100%;

div {
        padding: 0 7.5rem;
        max-width: 1440px;
        width: calc(100%);
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 1024px) {
            padding: 0 2rem;
        }
        
        button {
            cursor: pointer;
            height: 3rem;
            background: transparent;
            border-radius: 8px;
            border: none;
            margin: 0 0.5rem;
            
            a {
                text-decoration: none;
                letter-spacing: 0.02rem;
                font-weight: 700;
                font-size: 1.125rem;
                color: rgb(1, 135,98);
                padding: 0.625rem 2rem;
            }

            &:hover {
                background: ${props => props.theme["green-100"]};
            }
        }

        .login {
            background: ${props => props.theme["green-400"]};
            width: 10.75rem;

            a {
                display:flex;
                justify-content: center;
                gap: 12px;
                color: ${props => props.theme.white};
                svg {
                    height: 24px;
                    fill: ${props => props.theme.white};
                }
            }


            &:hover {
                background: ${props => props.theme["green-500"]};
            }
        }
    }
`

