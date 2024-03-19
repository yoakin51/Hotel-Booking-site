import "./App.css"
import Navbar from "./common/Navbar/Navbar"
import Home from "./components/pages/Home"
import About from "./components/about/About"
import Gallery from "./components/gallery/Gallery"
//import Destinations from "./Components/Destinations/Destinations"
//import DHome from "./Components/Destinations/Home"
import Destinations from "./components/Destinations/Home"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./SinglePage/SinglePage"

/*-------------blog------------ */
import Blog from "./components/Blog/Blog"
import BlogSingle from "./components/Blog/blog-single-page/BlogSingle"
import Testimonial from "./components/Testimonial/Testimonial"
import Contact from "./components/Contact/Contact"
import Footer from "./common/footer/Footer"
import Login from "./components/login/Login"
import Register from "./components/login/Register"
/*-------------blog------------ */

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/destinations' exact component={Destinations} />
          <Route path='/singlepage/:id' component={SinglePage} />
          <Route path='/blog' exact component={Blog} />
          <Route path='/blogsingle/:id' component={BlogSingle} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
