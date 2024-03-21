import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios"
import { useEffect, useState } from "react";

interface Puck{
    link:string;
    fileFormat:string;
    title:string;

}


const ShowSavedPucks = () =>{

    const [savedPucks, setSavedPucks] =useState<Puck[]>([]);
    const {user} = useAuth0();
 
    useEffect(()=>{

        if (user?.sub) {
            axios.get(`http://localhost:3000/api/favorites?userId=${user.sub}`)
            .then (response => {
                setSavedPucks(response.data);
                console.log(response.data);
            })
            .catch(error =>{
                console.log('error fetching the data', error);
            })
        }
    }, [user?.sub])

    


    return(
        <>
        
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