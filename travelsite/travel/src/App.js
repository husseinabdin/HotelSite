import React from 'react'
import Navbar from './common/Navbar/Navbar';
import Home from './components/pages/Home';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Gallery from './components/gallery/Gallery';
import Destinations from './components/Destinations/Home';
import SinglePage from './SinglePage/SinglePage';
import Blog from './components/Blog/Blog';
import BlogSingle from './components/Blog/blog-single-page/BlogSingle';
import Testimonail from './components/Testimonail/Testimonail';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    
   
    <Router>
 <Navbar/>
 <Switch>
   <Route path='/'exact component = {Home} ></Route>
   <Route path='/about'exact component = {About} ></Route>
   <Route path='/gallery'exact component = {Gallery} ></Route>
   <Route path='/destination'exact component = {Destinations} ></Route>
   <Route path='/singlepage/:id'exact component = {SinglePage} ></Route>
   <Route path='/blog'exact component = {Blog} ></Route>
   <Route path='/blogsingle/:id'exact component = {BlogSingle} ></Route>
   <Route path='/testimonail'exact component = {Testimonail} ></Route>
   <Route path='/contact'exact component = {Contact} ></Route>
 </Switch>
    </Router>

   
      
  )
}

export default App