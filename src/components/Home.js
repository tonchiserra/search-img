import styled from "styled-components";

const Container = styled.div`
  min-height: calc(100vh - 13rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  & > h2 {
    text-align: center;
  }
`;

const Home = () => {
  return(
    <Container>
      <h2>ENCONTRAR INCREÍBLES IMÁGENES ESTÁ A SÓLO UN CLICK DE DISTANCIA</h2>
    </Container>
  );
}

export default Home;