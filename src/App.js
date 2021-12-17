import './App.scss';
import Home from './js/componentsjs/Home';
import Header from './js/componentsjs/Header';
import Shape from './js/componentsjs/Shape';
import Footer from './js/componentsjs/Footer';
import SideBar from './js/componentsjs/SideBar';
import Datafetching from './js/componentsjs/Datafetching';
function App() {
  return (
    <div className="App">
      <Header />
      <SideBar/>
      <Shape/>
      <Home />
      <Datafetching/>
      <Footer/>
    </div>
  );
}

export default App;
