import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
background: -webkit-radial-gradient(circle, rgba(238,174,202,1) 20%, rgba(148,187,233,1) 100%);// background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

export const Wrapper = styled.section`
  padding: 1em;
  // color: blue;
  color: palevioletred;
  // background: linear-gradient(#006ded 0%, #1bace2 34.48%, #00e2ed 100%);
`;

export const Image = styled.img`
  width: 10%;
  margin-right: 10px;
  margin-bottom: 10px;
`;


// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const Container2 = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 50%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const TextTitle = styled.p`
  color: var(--white);
  font-size: 20px;
  font-weight: 500;
`;

export const TextSubTitle = styled.p`
  color: var(--white);
  font-size: 16px;
  font-weight: 500;
`;

export const TextDescription = styled.p`
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;
