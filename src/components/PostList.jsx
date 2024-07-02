import { useContext, useEffect ,useState} from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import EmptyMessage from "./EmptyMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList=()=>{

    const {postList,addInitialPosts}=useContext(PostListData);
//if u want to print the posts at time of the starting of the web page u can use useState or useRef:
//but this method is not suggested because it creates delay of some nseconds so not prefalable...

//useEffects take 2 parameters 1st is function or method and 2nd is dependency array:
//where enpty array means no dependencies... it will call the function only one time...
//by using this also server is taking some time to render the elements to avoid that we can actually use one more state called Loading state...

    const [fetching,setFetching]=useState(false); //this is for to show that loading image...

    useEffect(()=>{
           setFetching(true);

           const controller=new AbortController();
           const signal=controller.signal;

           fetch("https://dummyjson.com/posts",{signal})
           .then((res) => res.json())
           .then((data) => {
               addInitialPosts(data.posts);
               setFetching(false); 
           } ) ;

           return ()=>{
            console.log("cleaning up UseEffects");
            controller.abort();
           }
           
    }, []); 

// here return is used so that when different tab is opened this derver call can be terminated whisch is not used at that time..


return (
        <>
        {
            fetching && <LoadingSpinner/>
        }

        {
           !fetching && postList.length === 0  && (<EmptyMessage ></EmptyMessage>)
        }           
        {
            postList.map((post)=>( 
            < Post key={post.id} post={post} ></Post>))
        }           
        
    
        </>
    )
   
}

export default PostList;