import { useEffect, useState } from "react";
import { getPosts, deletePost, makePost } from "../api";


const BASE_URL = `https://strangers-things.herokuapp.com/api/2306-FTB-ET-WEB-PT`;



export default function PostPage(){



const [allPosts, setAllPosts] = useState([]);
const [description, setDescription] = useState('');
const [title, setTitle] = useState('');
const [price, setPrice] = useState('');
const [location, setLocation] = useState('');
const [willDeliver, setWillDeliver] = useState('');
const [token, setToken] = useState('');
const [deleteSuccess, setDeletesuccess] = useState('');





const getAllPosts = async () => {
    const usersArr = await getPosts();;
    setAllPosts(usersArr.data.posts)
  }

  const handleDeleteButton =async (_id) => {
    const deletedPosts = await deletePost(token, _id);
    if(deletedPosts.success){
      setDeletesuccess(_id);
    } else {
      alert("Was unable to remove post. Please log in");
      console.log(deletedPosts.error);
    }

  }   

  const handleMakePostButton = async (e) => {
    e.preventDefault();
    
      const newPost = await makePost(token, {title, price, description, location});
      if(newPost.success){
        setAllPosts([...allPosts, newPost.data.post]);
       console.log("Successful Message");
      } else {
        console.error("Unsuccessful")
      } 
 }

 



  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    getAllPosts();

  }, [deleteSuccess])

    return(
        <div className="Post-container">
            <header>Here is everyone's Posts!</header>
            {
              allPosts.map((posts) => {
                return(
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  rowGap: '5px'
               }} key={posts._id}>
                  <h4 className="username">{posts.author.username}</h4>
                  <h4 className="title">{posts.title}</h4>
                  <h4 className="description">{posts.description}</h4>
                  <h4 className="price">{posts.price}</h4>
                  <h4 className="location">{posts.location}</h4>
                  <h4 className="WillDeliver">{posts.willDeliver}</h4>
                  <button onClick={()=>{handleDeleteButton(posts._id)}}>Delete</button>
                </div>)
              })
            }{token !== null ? (
            <div className="New-Form-Container"> 
            <form onSubmit={handleMakePostButton}>
              <label className="Description">
                Description:
                <input type="text" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
              </label>
              <label className="Title">
                Title:
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
              </label>
              <label className="Price">
                Price:
                <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
              </label>
              <label className="Location">
                Location:
                <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)}/>
              </label>
              <label className="Will-Deliver">
                Will Deliver:
                <input type="text" placeholder="Will Deliver" value={willDeliver} onChange={(e) => setWillDeliver(e.target.value)}/>
              </label>
              <button type="submit">Submit</button>
            </form>

            </div>
                ): null}
        </div>
      
    )
}