import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
    background-color: ${({ theme }) => theme.colors.background};
    font-family: "Manrope", serif;
}

html, body {
    padding: 10px 30px 0 30px;
}

h1{
    color: ${({ theme }) => theme.colors.text};
    font-size: 60px;
    font-weight: 700px;

}

h2{
    color:${({ theme }) => theme.colors.text};
    font-size:24px;

}

p{
   color:${({ theme }) => theme.colors.text};
   font-size:16px;

}

button{
    background-color:${({ theme }) => theme.colors.button};
    border-radius:20px;
    padding: 10px 20px;
    cursor: pointer;
    color: white;
    font-weight: regular;
}

a{
    text-decoration: none;
    color:${({ theme }) => theme.colors.text};
    font-size: 24px;
    font-weight: 500;
}

`;
