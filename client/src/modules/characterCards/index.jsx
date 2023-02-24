import { useState, useEffect } from 'react'
import axios from 'axios'
import {CHARACTER_URL} from "../../constants"

export function CharacterCards(){
    const [characters, setCharacters] = useState([])

    async function getCharacters() {
        try {
          const response = await axios.get(CHARACTER_URL);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }


   /*  function getCharacters() {
           return axios.get(CHARACTER_URL)
          .then( (characters) => setCharacters(characters.data))
    } */
    useEffect( () => {
        getCharacters()
    }, [])
    return (
        
        <div>
            {characters.map( (character) => {
                return(
                    <div>
                        <p>{character.name}</p>
                        <img 
                            src={character.image}
                            alt="hola"
                        />
                    </div>
                )
            })}
        </div>
        
    )
}   