import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList  } from "../store/post-list-store";


const Post=({post})=>{
  const  {deletePost}=useContext(PostList);
  
    return (
      <div className="PostContainer">
    <div className="card card2"  style={{backgroundColor:"azure" }}>
  <img src={post.image} className="card-img-top" alt="..."/>
  <div className="card-body" style={{ paddingBottom: "0px"}} >
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
    onClick={()=> deletePost(post.id)}
    >
    <MdDelete></MdDelete>

    </span> 
  
    </h5>
    <p className="card-text">{post.body}</p>
    <div className="bottomContainer">
    
      
    <div className="hastags"> 
    <span className="badge text-bg-primary">#{post.tags[0]}</span>
    <span className="badge text-bg-primary">#{post.tags[1]}</span>
    <span className="badge text-bg-primary">#{post.tags[2]}</span>
    </div>
    <div className="alert alert-success" role="alert">
      <p className="para"> Likes: {post.reactions.likes} </p>
      <p className="para">Dislikes: {post.reactions.dislikes}</p>
    </div>
    
    </div>
  </div>
</div>
</div>
    );
}

export default Post;