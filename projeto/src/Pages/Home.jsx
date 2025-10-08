import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';


function Home() {
    const [charac, setCharac] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        getCharac();
    },[])

    const getCharac = async () => {
        const response = await axios.get("https://potterhead-api.vercel.app/api/characters");
        setCharac(response.data);
    }
    
    const OpenCharacPage = (name) => {

        navigate('/profile', {state: {name}})
    }

    return (
        <>
        <div className="container">

            <header className="head">
                <img src="https://acdn-us.mitiendanube.com/stores/956/391/products/papel-de-parede-hoghwart-harry-potter-21-4a0b607e165f195e1516454768190625-1024-1024.jpg" alt="fundo do castelo" />
                <h1>Home</h1>   
            </header>

            <h2>Selecione o nome do personagem: </h2>
            {/* Fazer um com input para testar! */}
            {/* <input type="text"  onChange={(e) => setCharacter(e.target.value) }/>
             */}

            <div className="buttons" >
                {charac.map((name) => (
                    
                    <button key={name.id} onClick={() => OpenCharacPage(name)}> 
                        {name.name} 
                    </button>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default Home