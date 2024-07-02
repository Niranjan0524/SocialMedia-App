import {  createContext, useCallback, useReducer } from "react";

    const DEFAULT_CONTEXT={
        postList:[],
        addPost:()=>{},
        deletePost:()=>{},
        addInitialPosts:()=>{}
    }

export const PostList= createContext( DEFAULT_CONTEXT );

const postlistReducer=(currentpostList,action)=>{

    let newPostList=currentpostList;
    if(action.type==='DELETE_POST'){
        newPostList=currentpostList.filter((post)=> post.id !==action.payload.postId);
    }
    else if(action.type==="ADD_INITIAL_POST"){
        newPostList=action.payload.posts;        
    }
    else if(action.type==='ADD_POST'){
        newPostList=[action.payload,...currentpostList];        
    }
    

    return newPostList;
}

const PostListProvider=({ children })=>{

    
    const [postList,dispatchPostList]=useReducer(postlistReducer, []);

    const addPost=(userId,postTitle,postBody,reactionsArray,hastagsArray)=>{
         
        dispatchPostList({
            type:"ADD_POST",
            payload:{
            id:Date.now(),           
            title:postTitle,
            body:postBody,
            reactions:reactionsArray,
            userId:userId,
            tags:hastagsArray
            } 
        })
    }

    
    const addInitialPosts=(posts)=>{
         
        dispatchPostList({
            type:"ADD_INITIAL_POST",
            payload:{
            posts
            } 
        })
    }

    const deletePost= useCallback(
        (postId)=>{
        dispatchPostList({
            type: "DELETE_POST",
            payload:{
                postId,
            },
        });
    },[dispatchPostList]);



    return <PostList.Provider value={
        {postList:postList,
        addPost:addPost,
        deletePost:deletePost,
        addInitialPosts:addInitialPosts
        }
    }>

        {children}

    </PostList.Provider>

};


// //array of the posts information:
// const DEFAULT_POST_LIST=[{
//     id:'1',
//     image:"https://assets.ajio.com/medias/sys_master/root/20240411/kOhi/6617bb4e05ac7d77bb031e26/-473Wx593H-467162071-black-MODEL2.jpg",
//     title:'Going To Bombay',
//     body:'Hello friends i m going to Bombay for my vactions.',
//     reactions:'0',
//     userId:'Rahul Khot ',
//     tags:['vacation','Mumbai','Travel']
// }
// ,{
//     id: "2",
//     image:"https://assets.ajio.com/medias/sys_master/root/20240411/kOhi/6617bb4e05ac7d77bb031e26/-473Wx593H-467162071-black-MODEL2.jpg",
//     title: "Exploring Delhi",
//     body: "Hey everyone, I'm heading to Delhi for a week-long trip!",
//     reactions: "0",
//     userId: "Amit Sharma",
//     tags: ["vacation", "Delhi", "Travel"]
// }
// ,
// {
//     id: "3",
//     image:"https://assets.ajio.com/medias/sys_master/root/20240411/kOhi/6617bb4e05ac7d77bb031e26/-473Wx593H-467162071-black-MODEL2.jpg",
//     title: "Vacation in Goa",
//     body: "Hi folks, planning a beach vacation in Goa. Can't wait!",
//     reactions: "0",
//     userId: "Priya Kapoor",
//     tags: ["vacation", "Goa", "Travel"]
// }
// ,
// {
//     id: "4",
//     image:"https://assets.ajio.com/medias/sys_master/root/20240411/kOhi/6617bb4e05ac7d77bb031e26/-473Wx593H-467162071-black-MODEL2.jpg",
//     title: "Trip to Jaipur",
//     body: "Hello all, heading to Jaipur for my holidays.",
//     reactions: " ",
//     userId: "Sunil Mehta",
//     tags: ["vacation", "Jaipur", "Travel"]
// }

// ]

export default PostListProvider;