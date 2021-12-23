import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 0;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  & > p > a {
    transition: all 300ms ease-in-out;
    margin: 0;
    padding: 0;
    color: var(--text-color);
  }

  & > p > a:hover {
    opacity: .75;
  }
`;

const Footer = () => {
  return(
    <StyledFooter>
      <p>Created by <a href="https://gserra.netlify.app/" target="_blank" rel="noopener noreferrer">Gonzalo Serra</a> using unsplash api</p>
    </StyledFooter>
  );
}

export default Footer;