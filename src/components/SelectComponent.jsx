import React from "react";
import Notification from "./Notification";
import Friends from "./Friends";
import Settings from "./Settings";
import PostList from "./PostList";
import CreatePost from "./CreatePost";


const SelectComponent=({selectedTab})=>{
    return (
        <div>
        {
        (()=>{
            if(selectedTab==='Notification'){
              return <Notification/>;
            }
            else if(selectedTab==='Friends'){
             return  <Friends/>;
            }
            else if(selectedTab==='Settings'){
              
              return <Settings/>;
            }
            else if(selectedTab==='Home'){
                return  <PostList/>  ;
            }
            else if(selectedTab==='CreatePost'){
                 
                return <CreatePost/>;
            }
            else{
                return  ;
            }
          })   ()
      }

</div>
    

    )
}

export default SelectComponent;