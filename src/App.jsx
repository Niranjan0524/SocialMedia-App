import { useState } from 'react'

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css";
// import CreatePost from './components/CreatePost';
// import Post from './components/Post';
// import PostList from './components/PostList';
import SelectComponent from './components/SelectComponent';
import PostListProvider from './store/post-list-store';


function App() {

    const [selectedTab,setSelectedTab]=useState("Home");


    

  return   ( 
     <>
     <PostListProvider>
     <div className="App-Container">
     <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
     <div className="content">
     <Header></Header> 
       
     <SelectComponent selectedTab={selectedTab}></SelectComponent>
                
     <Footer></Footer>
     </div>
     </div>
     </PostListProvider>
  </>

  )
  
}
    


export default App;
