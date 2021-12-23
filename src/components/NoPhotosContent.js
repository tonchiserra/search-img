import styled from "styled-components";
import oops from '../assets/Oops.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 3rem 0 0 0;
  min-height: calc(100vh - 13rem);

  & > img {
    width: 60vw;
    margin: 0 auto;
  }

  @media screen and (min-width: 600px){
    & > img {
      width: 30vw;
    }
  }

  & > p {
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;

const NoPhotosContent = ({ title }) => {
  return(
    <Container>
      <img src={oops} alt="Oops... :(" />
      <p>Oops... No pudimos econtrar ninguna imagen relacionada con '{title}'.</p>
    </Container>
  );
}

export default NoPhotosContent;