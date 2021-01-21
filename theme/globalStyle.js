import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after {
        margin:0;
        padding:0;
        box-sizing:border-box;
        -moz-box-sizing:border-box;
        -webkit-box-sizing:border-box
    }
    html {
        font-size:62.5%;
        overflow-x:hidden;
    }
    a,a:focus, a:hover {
        text-decoration:none;
    }
`;
 
export default GlobalStyle;