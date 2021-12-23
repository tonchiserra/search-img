import styled from 'styled-components';
import NoPhotosContent from './NoPhotosContent';

const PhotosContainer = styled.div`
  background-color: #fff;
  padding: 0;
  max-width: 800px;
  margin: 0 1rem;
  padding-top: 3rem;

  & > h2 {
    text-align: center;
    font-size: 2rem;
    color: #222;
    margin: 0;
    padding: 1rem 0;
  }

  & > p {
    text-align: center;
    margin: 0 0 1rem 0;
  }

  @media screen and (min-width: 600px){
    & {
      margin: auto;
    }
  }
`;

const PhotosContent = styled.div`
  display: flex;
  margin: auto;
  max-width: 800px;

  & > .center {
    column-count: 2;
    column-gap: 0;
  }

  @media screen and (min-width: 600px){
    & > .center {
      column-count: 3;
    }
  }
`;

const Article = styled.article`
  border-radius: 5px;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  background-color: transparent;
  display: inline-block;
  margin: .25rem;
  position: relative;
  border-bottom: none;
  line-height: 0;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0,0,0,0.3);
  }

  @media screen and (min-width: 600px){
    & {
      margin: .5rem;
    }
  }
`;

const Image = styled.img`
  border-radius: 5px;
  margin: 0;
  padding: 0;
`;

const Images = ({ photos, title }) => {

  const open = (url) => window.open(url)

  if(photos.length === 0) return <NoPhotosContent title={title} />

  return(
    <PhotosContainer>
      <h2>{title}</h2>
      <p>Encontramos {photos.length} imagenes sobre {title}</p>
      <PhotosContent>
        <div className='center'>
          {photos.map(photo => 
            <Article key={photo.id} onClick={() => open(photo.links.html)}>
              <Image src={photo.urls.regular} alt={photo.id} />
            </Article>
          )}
        </div>
      </PhotosContent>
    </PhotosContainer>
  );
}

export default Images;