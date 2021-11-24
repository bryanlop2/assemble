import Swal from 'sweetalert2';
import { useFormulario } from '../../hooks/useFormulario';

const HomeUsers = ({setNameOfTheCharacter}) => {
    
    const [ inputs, handleChange, reset] = useFormulario({
        name: ''
    });
    
    const { name } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    
        if(!name.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Please type any name!'
              })
        }
        setNameOfTheCharacter(name.trim().toLowerCase());
        reset();
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="name"
                placeholder="Search for a name 😉"
                value={name}
                onChange={handleChange}
                className="form-control mb-2" 
            />
            <button 
                className="btn brn-dark"
                type="submit"
            >Search</button>
        </form>
    )
}

export default HomeUsers
