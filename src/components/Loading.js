import styled, { keyframes } from "styled-components";
import loadingIcon from '../assets/loading.svg';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0,0,0,0.3);
  display: none;
`;

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 180px;
  height: 180px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  & > img {
    height: 70px;
    display: inline-block;
    animation: ${girar} 2s linear infinite;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }

  & > h2 {
    margin: 1rem 0;
    padding: 0;
    font-size: 1.5rem;
    color: #888888;
  }

  @media screen and (min-width: 600px){
    & {
      width: 250px;
      height: 250px;
    }
  }
`;

const Loading = () => {
  return(
    <Container id="modal">
      <Modal>
        <img src={loadingIcon} alt="Cargando..." />
        <h2>Cargando...</h2>
      </Modal>
    </Container>
  );
}

export default Loading;