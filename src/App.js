// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
// import Services from './Components/Services/Services';
// import Blogs from './Components/Blogs/Blogs';
import Demos from './Components/Demos/Demos';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import NotFound from './Components/NotFound.js/NotFound';
import BlogDetail from './Components/BlogDetails/BlogDetail';
import Signout from './Components/Signout/Signout';
import Cookies from 'js-cookie';
import { decodeToken, isExpired } from 'react-jwt'
import Profile from './Components/Profile/Profile';
import CreateBlog from './Components/CreateBlog/CreateBlog';
// import { Link } from 'react-router-dom';

function App() {
  const mycookie = Cookies.get('macaron');
  const myDecodedToken = decodeToken(mycookie);
  const isMyTokenExpired = isExpired(mycookie);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        {/* <Route path='/services' element={<Services></Services>}></Route> */}
        {/* <Route path='/blogs' element={<Blogs></Blogs>}></Route> */}
        <Route path='/demos' element={<Demos></Demos>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog/:blogId' element={<BlogDetail></BlogDetail>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/signout' element={<Signout></Signout>}></Route>
        {mycookie && myDecodedToken && isMyTokenExpired === false ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/error" element={<NotFound />} />
        )}

        {mycookie && myDecodedToken && isMyTokenExpired === false ? (
          <Route path="/createblog" element={<CreateBlog />} />
        ) : (
          <Route path="/error" element={<NotFound />} />
        )}

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
