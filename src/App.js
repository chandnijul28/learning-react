
import React, {useState, useEffect} from "react"
import './App.css';
import axios from "axios";




function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

   useEffect(() => {
       setTimeout (()=>{

           const loadPosts = async () =>{
       setLoading(true);
       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
       setPosts(response.data);
       setLoading(false);

     }
     loadPosts();

       }, 3000)


   }, [])

  return (
    <div className="App">

      <h3>Search Box</h3>
      <input type="text" placeholder="search.." onChange={(e) =>setTimeout(()=>  setSearchTitle(e.target.value), 6000)}/>
      {loading ? (<h4>Loading...</h4>) : (
          (posts.filter((value) => {
              if (searchTitle === ""){
                  return value
              } else if (value.title.toLowerCase().includes(searchTitle.toLowerCase())){
                  return value
              }
          }).map(item => <h5 key={item.id}>{item.title}</h5>))
      )}

    </div>
  );
}

export default App;
