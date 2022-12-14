import styled from "styled-components";

export const FeedbackWrapper = styled.ul`
display: flex;
justify-content: center;
grid-gap: ${p => p.theme.space[5]}px;
`
export const FeedbackBtn = styled.button`
cursor: pointer;
min-width: ${p => p.theme.sizes.xl};
padding: ${p => p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.l};
text-transform: capitalize;
font-weight: ${p => p.theme.fontWeights.bold};
border-radius: ${p => p.theme.radii.md};
margin-bottom: ${p => p.theme.space[5]}px;
background-color: ${p => p.theme.colors.primary};
color: ${p => p.theme.colors.white};
border-color: inherit;
&:hover,
&:focus {
    background-color: ${p => p.theme.colors.secondary};
}
`