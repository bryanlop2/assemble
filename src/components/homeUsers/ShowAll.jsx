import { useEffect, useState } from "react"
import HomeUsers from "./HomeUsers"
import ShowData from "./ShowData"

const ShowAll = () => {

    const [ nameOfTheCharacter, setNameOfTheCharacter ] = useState('');

    useEffect(() => {
        if(localStorage.getItem('nameApi')){
            setNameOfTheCharacter(JSON.parse(localStorage.getItem('nameApi')))
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem("nameApi", JSON.stringify(nameOfTheCharacter));
    }, [nameOfTheCharacter])

    return (
        <div className="container">
            <h1>Consume Api Rick and Morty</h1>
            <HomeUsers setNameOfTheCharacter={setNameOfTheCharacter}/>
            <ShowData nameOfTheCharacter={nameOfTheCharacter}/>
        </div>
    )
}

export default ShowAll
