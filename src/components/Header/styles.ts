import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 6rem;
background: linear-gradient(180deg, #F5FFFB 31.04%, #FFFFFF 100%);
display: flex;
align-items: center;
justify-content: center;
width: 100%;

.desktop {
        @media (max-width: 860px) {
            display: none;
        }

        padding: 0 7.5rem;
        max-width: 1440px;
        width: calc(100%);
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px
        }

        a {
            display: flex;
            align-items: center;
        }

        @media (max-width: 1024px) {
            padding: 0 2rem;
        }
      
        button {
            cursor: pointer;
            height: 3rem;
            background: transparent;
            border-radius: 8px;
            border: none;
            
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

        .help {
            svg {
                display: none;
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

.mobile {
    @media (min-width: 860px) {
        display: none;
    }

    padding: 0 1.5rem;
    width: calc(100%);
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 24px
    }

    a {
        display: flex;
        align-items: center;
    }
    
    button {
        cursor: pointer;
        height: 3rem;
        width: 3rem;
        background: transparent;
        border-radius: 8px;
        border: none;
    }

    .help {

        a {
            display:flex;
            justify-content: center;
            gap: 12px;

            svg {
                height: 1.5rem;
                width: 1.5rem;
                fill: ${props => props.theme["green-400"]};
            }
        }

        &:hover {
            background: ${props => props.theme["green-100"]};
        }
    }

    .login {
        background: ${props => props.theme["green-400"]};

        a {
            display:flex;
            justify-content: center;
            gap: 12px;
            color: ${props => props.theme.white};
            svg {
                height: 1.5rem;
                width: 1.5rem;
                fill: ${props => props.theme.white};
            }
        }


        &:hover {
            background: ${props => props.theme["green-500"]};
        }
    }
} 
`

