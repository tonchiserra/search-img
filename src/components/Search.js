import { Formik, Form, Field } from "formik";
import styled from 'styled-components';
import glassIcon from '../assets/glass.svg';
import headerImg from '../assets/headerSearch.svg';

const Container = styled.div`
  background-color: var(--gray-color);
  background: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 10rem;
  position: relative;

  Form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    width: 70vw;
    border-radius: 10px;
    box-shadow: 0px 8px 16px rgba(0,0,0,0.1);
    position: absolute;
    bottom: -2rem;
    left: 0;
    right: 0;
    margin: auto;
  }

  .search-input {
    width: 100%;
    margin: 0;
    padding: 1.5rem 1rem 1.5rem 1.5rem;
    outline: none;
    border: none;
    transition: all 300ms ease-in-out;
    font-size: 1rem;
    background-color: transparent;
  }

  .search-btn {
    border-radius: 9999px;
    background-color: transparent;
    margin: 0;
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }

  .search-btn:hover {
    opacity: .75;
  }

  .search-btn > img {
    width: 2rem;
    height: 2rem;
  }

  @media screen and (min-width: 600px){
    Form {
      width: 40vw;
    }
  }
`;

const Search = ({ setPhotos, setTitle }) => {

  async function getData(values) {
    const $modal = document.querySelector("#modal");
    $modal.style.display="block";

    try{
      let res = await fetch(`https://api.unsplash.com/search/photos?per_page=100&query=${values.search}`, {
        headers: {
          'Authorization': 'Client-ID a5dmAAvN1F-_Yz3wM3levvEW3C4OmQiA3qVbt4xXwjY'
        }
      });
      let data = await res.json();

      if(!res.ok){
        const err = { status:res.status, statusText: res.statusText }
        throw err;
      }

      setPhotos(data.results)
      setTitle(values.search)

      $modal.style.display="none";
    
    }catch(err){
      let message = err.statusText || "Ocurrio un error";
      console.log(message)
    }
  }

  return(
    <Container>
      <Formik
      initialValues={{ search: '' }}
      onSubmit={getData}
      >
        <Form>
          <Field className="search-input" name="search" placeholder="Buscar..." />
          <button className="search-btn" type="submit"><img src={glassIcon} alt="Buscar" /></button>
        </Form>
      </Formik>
    </Container>
  );
}

export default Search;