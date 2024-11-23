import styled from "styled-components";

export const SectionContainer = styled.div`
margin: 4rem 0;

h1 {
    font-size: 2.5rem;
    line-height: 3rem;
    width: calc(max(50%, 35rem));
    padding: 1rem 0;
}

.bar {
    height: 2px;
    width: 160px;
    border: 2px solid ${props => props.theme["green-400"]}
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

p {
    font-size: 1.5rem;
    width: calc(max(45%, 25rem));
    line-height: 2.25rem;
}

img {
    border-radius: 16px;
    width: calc(max(40%, 25rem));
}


`