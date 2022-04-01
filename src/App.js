import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Friend from './components/Friend/Friend';
import About from './components/About/About';
import Header from './components/Header/Header';
import FriendShowDetails from './components/FriendShowDetails/FriendShowDetails';
import Posts from './components/Posts/Posts';
import PostsDetails from './components/PostsDetails/PostsDetails';

function App() {
  return (
    <div className="App">
      
      
      <h1>Bokkerper</h1>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/friend' element={<Friend></Friend>} ></Route>
        <Route path='/friend/:friendid' element={<FriendShowDetails></FriendShowDetails>} ></Route>
        <Route path='/posts' element={<Posts></Posts>} >

        <Route path='/posts/:postsid' element={<PostsDetails></PostsDetails>} ></Route>

        </Route>
        <Route path='/about' element={<About></About>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
