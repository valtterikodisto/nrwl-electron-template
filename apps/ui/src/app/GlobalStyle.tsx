import { createGlobalStyle } from 'styled-components';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from '../assets/fonts/Roboto-Medium.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import RobotoItalic from '../assets/fonts/Roboto-Italic.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoMedium});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBold});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoItalic});
    font-weight: 400;
    font-style: italic;
  }
`;

export default GlobalStyle;
