import { css } from "styled-components";

const mobile = (props) => {
  return css`
    @media screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export default { mobile };
