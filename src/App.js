import { useState } from "react";
import Search from "./components/Search";
import Images from './components/Images';
import Footer from './components/Footer';
import Home from './components/Home';
import Loading from './components/Loading';

const App = () => {
  const [photos, setPhotos] = useState([])
  const [title, setTitle] = useState()

  return (
    <div>
      <Search setPhotos={setPhotos} setTitle={setTitle}/>
      <Loading />
      {title ? <Images photos={photos} title={title} /> : <Home />}
      <Footer />
    </div>
  );
}

export default App;
