// create your App component here
import React,{useState, useEffect} from "react";

// const API_URL = "https://dog.ceo/api/breeds/image/random"


function App(){
    const [image, setImage]= useState(null)

    useEffect(()=> { 
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => setImage(data.image))
        

        // if (!image){
        //     return<h2>loading...</h2>
        // }
    },[])


    return(
        <div>
        <p>"Loading..." </p>
        <img src={image} alt ="A Random Dog"/>
        
        </div>
    )
}
export default App