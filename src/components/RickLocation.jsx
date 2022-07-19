import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from './Character';


const RickLocation = () => {

    const random = Math.floor(Math.random() * 126) + 1
    const [searchInput, setSearchInput] = useState()
    const [location, setLocation] = useState({})
    const [urls, setUrls] = useState([])




    useEffect(() => {

        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => {
                setLocation(res.data)
            })

    }, [])


    const lookingFor = () => {
        if (searchInput.length > 0) {
            axios.get(`https://rickandmortyapi.com/api/location/${searchInput}`)
                .then(res => {
                    setLocation(res.data)
                    setUrls(res.data.residents)

                })
        }


    }

    const handleSubmit = (e) => { e.prevenDefault() }



    return (

        <div>

            <div className="App-header">
                {/* <img src="https://cdnb.artstation.com/p/assets/images/images/022/060/919/large/win-dolores-ricknmorty-f.jpg?1573981882" alt="" /> */}

                <video src="./src/assets/RickandMorty.mp4" autoPlay loop muted 
                poster=' https://cdnb.artstation.com/p/assets/images/images/022/060/919/large/win-dolores-ricknmorty-f.jpg?1573981882'>

                </video>
               
            </div>

            <h1>Rick and Morty</h1>

            <input onSubmit={handleSubmit} type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
            <button onClick={lookingFor}>Search</button>

            <h4 className='location-name'>{location?.name}</h4>
            <div className='loca'>
                <div className='location'>
                    <div className='locaItems'>
                        <h4 >Type:{location?.type}</h4>
                    </div>
                    <div className='locaItems'>
                        <h4 >Dimension:{location?.dimension}</h4>
                    </div>
                    <div className='locaItems'>
                        <h4 >Population:{location?.residents?.length}</h4>
                    </div>
                </div>
            </div>
            <h2>Residents</h2>
            <div className='characterCard1'>
                {urls.map(url => (
                    <div className='characterCard' key={url?.name}>

                        <Character url={url} searchInput={searchInput} location={location?.name} />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default RickLocation;