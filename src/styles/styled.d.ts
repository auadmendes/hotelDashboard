import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    
      title: string,
    
      colors: {
        primary: string,
        secondary: string,
    
        background: string,
        text: string,
        green_300: string;
        green_400: string;
        green_500: string;
        green_600: string;
        red: string;
        gray: string;

        button: string;
      },
    
    
  }
}