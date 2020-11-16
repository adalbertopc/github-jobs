import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body{
        font-family:'Poppins', 'Raleway', 'Arial';
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        header {
            color:${({ theme }) => theme.textHeader};
        }
    }

`;
