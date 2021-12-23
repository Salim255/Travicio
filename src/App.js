import './App.scss';
import {BrowserRouter, Route, Routes, Switch, Link} from 'react-router-dom';
import Home from './js/componentsjs/Home';
import Header from './js/componentsjs/Header';
import Shape from './js/componentsjs/Shape';
import Footer from './js/componentsjs/Footer';
import SideBar from './js/componentsjs/SideBar';
import Datafetching from './js/componentsjs/Datafetching';
import Login from './js/componentsjs/Login';
import Dashboard from './js/componentsjs/Dashboard';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
          <div>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/dashboard'>Dashboard</Link>
        </div>
        {/* <Route path='/' element={<Home/>} /> */}
       {/*   <Route path='/' element={<Header/>}/>
         <Route path='/' element={<SideBar/>}/>
         <Route path='/' element={<Shape/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='/' element={<Datafetching/>}/> */}
        <Switch>
        <Route path='/login' component={Login}/>
         <Route path='/dashboard' component={Dashboard}/>
        {/*  <Route path='/' element={<Footer/>}/> */}
        </Switch>
        
     
      
      </BrowserRouter>
      
     
    
    </div>
  );
}

export default App;
