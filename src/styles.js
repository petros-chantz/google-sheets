import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  background-color: #84a98c;
  display:grid;
  place-items: center;
`;

export const ContentWrapper = styled.div`
  height: 90%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
`;
