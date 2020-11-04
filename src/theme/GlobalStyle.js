import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: KabelLTStd-Heavy;
    src: url(../font/KabelLTStd.otf);
}

  @font-face {
    font-family: Nexa-Regular;
    @import url('../font/Nexa-Regular.otf');
}

*, *::before, *::after {
    box-sizing: border-box;
}
    body {
        font-family: Nexa-Regular;
    }
`