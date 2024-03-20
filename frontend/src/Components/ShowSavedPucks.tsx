import axios from "axios"
import { useEffect, useState } from "react";

interface Puck{
    link:string;
    fileFormat:string;
    title:string;

}

interface User {
    username: string;
    favoriteImages: Puck[];
  }

const ShowSavedPucks = () =>{

    const [savedPucks, setSavedPucks] =useState<Puck[]>([]);
 
    useEffect(()=>{

        axios.get('http://localhost:3000/api/favorites')
        .then(response => {
            const allPucks = response.data.users.flatMap((user: User )=> user.favoriteImages); // Ensure the property name matches your JSON structure
            setSavedPucks(allPucks); // Using allPucks to set the state
            console.log(allPucks);
        })


    .catch(error =>{
        console.log('erro fetching the data', error);
    });
}, []);
    


    return(
        <>
        <h1>saved pucks</h1>
        
        <div className="saved-pucks">

        
        {savedPucks.map((puck:Puck, index:number) => (
            <div key={index}>
                <img src={puck.link}
                alt={puck.title} />
            </div>
        ))}
        
        </div>
        </>
    )
}

export default ShowSavedPucks 