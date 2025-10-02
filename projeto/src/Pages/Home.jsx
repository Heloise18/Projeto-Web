import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Home() {

    useEffect(() => {
        getCharac();
    },[])

    const [character, setCharacter] = useState("");
    const [charac, setCharac] = useState([]);
    
    const getCharac = async () => {
        const response = await axios.get("https://potterhead-api.vercel.app/api/characters");
        setCharac(response.data);
    }
    
    const OpenCharacPage = (name) => {

        navigate('/Profile', {state: {name}})
    }
    return (
        <>
            <h1>Home</h1>
            <h2>Digite o nome do personagem: </h2>
            <input type="text"  onChange={(e) => setCharacter(e.target.value) }/>
            
            {charac.map((name) => (
                    <button onClick={() => OpenCharacPage()}>{character}</button>
                ))

            }


        </>
    )
}

export default Home