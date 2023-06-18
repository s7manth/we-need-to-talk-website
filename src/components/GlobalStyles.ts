import { css } from "@emotion/react";

const GlobalStyles: any = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

export default GlobalStyles;