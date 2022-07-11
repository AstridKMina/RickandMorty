import axios from 'axios';
import React, { useEffect, useState } from 'react';




const Character = ({ url }) => {
    const [characters, setCharacters] = useState([])
    const [status, setStatus] = useState("green")




    useEffect(() => {
        axios.get(url).then(res =>
            setCharacters(res.data),

        )

    }, []);



    return (

        <div className='character' >
            <div className='characterLeft'>
                <img src={characters?.image} alt="character.img" />
                <div className='status'>
                    <button className="status1 " ></button>
                    <h4>Status: {characters?.status} </h4>
                </div>
            </div>
            <ul>
                <li><h3><span>Name:</span> {characters?.name}</h3></li>
                <li><h3> <span>Origen:</span> {characters.origin?.name}</h3></li>
                <li><h3> <span>Episodes:</span> {characters.episode?.length}</h3></li>
            </ul>

        </div>

    )
}

export default Character;

