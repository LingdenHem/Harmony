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
    width: 100%;
    height: 100%;

    -ms-overflow-style: none;
    scrollbar-width: none;
}


::-webkit-scrollbar {
    display: none;
}


h1{
    color: ${({ theme }) => theme.colors.text};
    font-size: 60px;
    font-weight: 700px;

}

h2{
    color:${({ theme }) => theme.colors.text};
    font-size:40px;
    font-weight: 500;

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
    font-weight: bold;
    border: none;
    font-size: 16px;
}

a{
    text-decoration: none;
    color:${({ theme }) => theme.colors.text};
    font-size: 24px;
    font-weight: 600;
}

`;
