import React, {useState, useEffect} from "react";

function App(){
    const [dog, setdog] = useState(null);

    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data =>{
            setdog(data.message)
        })
    },[])

    if(!dog)return <p>'Loading...'</p>



    return(
        <img src={dog} alt = "A Random Dog"/>
    )

}

export default App;