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
    font-weight: 700;
    @media (max-width: ${({ theme }) => theme.media.smallscreen}) {
      font-size: 50px;
    }
    @media (max-width: ${({ theme }) => theme.media.tab}) {
      font-size: 40px;
    }
    @media (max-width: ${({ theme }) => theme.media.midsizeMobile}) {
      font-size: 32px;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
      font-size: 25px;
    }
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

    @media (max-width: ${({ theme }) => theme.media.midsizeMobile}) {
        padding: 7px 15px;
      font-size: 12px;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        padding: 5px 10px;
      font-size: 10px;
    }


}

a{
    text-decoration: none;
    color:${({ theme }) => theme.colors.text};
    font-size: 24px;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.media.smallscreen}) {
      font-size: 20px;
    }

    @media (max-width: ${({ theme }) => theme.media.midScreen}) {
      font-size: 18px;
    }
}

`;
