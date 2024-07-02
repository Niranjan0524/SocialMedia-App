import { useContext, useRef } from "react";

import { PostList  } from "../store/post-list-store";

const CreatePost=()=>
    {

      const {addPost}=useContext(PostList);

      const userIdElement =useRef();
      const postTitleElement  =useRef();
      const postBodyElement  =useRef();
      const reactionsElement  =useRef();
      const hashtagsElement  =useRef();

      const handleSubmit=(event)=>{
        event.preventDefault();
        const userId=userIdElement.current.value;
        const postTitle=postTitleElement.current.value;
        const postBody=postBodyElement.current.value;
        const reactions=reactionsElement.current.value.split(" ");
        const hastagsArray=hashtagsElement.current.value.split(" ");

        addPost(userId,postTitle,postBody,reactions,hastagsArray)
        userIdElement.current.value="";
        postTitleElement.current.value="";
        postBodyElement.current.value="";
        reactionsElement.current.value="";
        hashtagsElement.current.value="";
      }

        return(
        <form className="createPost" onSubmit={handleSubmit}>

          
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">UserId:</label>
              <input 
              type="text"
              ref={userIdElement }
              className="form-control" 
              placeholder="Enter your user id" />
              </div>

            <div className="mb-3 ">
              <label htmlFor="title" className="form-label">Post Title</label>
              <input type="text" 
              className="form-control" id="exampleInputEmail1" 
              ref={postTitleElement }
              placeholder="How are you feeling today"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>

              <div className="mb-3">
              <label htmlFor="body" 
              className="form-label">Post content</label>
              <textarea type="text" 
              ref={postBodyElement }
              rows="4" className="form-control" id="exampleInputEmail1" placeholder="Tell us more about It..."/> 
              </div>

            
              <div className="mb-3">
              <label htmlFor="reactions"  className="form-label">No Of Reactions:</label>
              <input type="text" 
              className="form-control" 
              ref={reactionsElement }
              placeholder="Enter likes and dislikes with space" />
              </div>

              <div className="mb-3">
              <label htmlFor="tags"  className="form-label">Enter your HashTags</label>
              <input type="text" 
              className="form-control" 
              ref={hashtagsElement }
              placeholder="Enter your tags using space" />
              </div>

            
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          )
    }

    export default CreatePost;