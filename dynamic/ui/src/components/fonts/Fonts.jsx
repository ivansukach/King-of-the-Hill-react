import { createGlobalStyle } from 'styled-components';
import BancoDi from './BancoDi.ttf';
import dCharger from './d_Charger.otf';
export default createGlobalStyle`
    @font-face {
    font-family: BancoDi; /* Имя шрифта */
    src: url(${BancoDi}); /* Путь к файлу со шрифтом */
    }
    @font-face {
        font-family: d_Charger; /* Имя шрифта */
        src: url(${dCharger}); /* Путь к файлу со шрифтом */
    }
`;