import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Loading from "../../hooks/Loading";
import Character from "./Character";

const ShowData = ({nameOfTheCharacter}) => {

    const [ characters, setCharacters ] = useState([]);

    const [ loading, setLoading ] = useState(false);

    useEffect(() => {
        consumeApi(nameOfTheCharacter);
    }, [nameOfTheCharacter]);

    const consumeApi = async(name) => {
        setLoading(true)
    try{
        const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}&status=alive`)
        if(!res.ok){
            return Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Character not found!'
              })
        }
        const data = await res.json();
        setCharacters(data.results);
        console.log(res);
    } catch(error){
        console.log(error);
    }finally{
        setLoading(false);
    }
    }
    
    if(loading){
        return <Loading/>
    }

    return (
        <div className="row mt-2">
            {
                characters.map(item => (
                    <Character key={item.id} character={item}/>
                ))
            }
        </div>
    )
}

export default ShowData
