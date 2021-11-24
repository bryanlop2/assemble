import './Login.css'
import { v4 as uuidv4 } from "uuid";
import { useFormulario } from "../../hooks/useFormulario";
import Swal from 'sweetalert2';


const Login = ({addUser}) => {

    const initialState = {
        email: '',
        password: '',
        remember: false
    }

    const [ inputs, handleChange, reset] = useFormulario(initialState);

    const { email, password, remember } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
        if(!email.trim()){
            console.log('no dejar vacío');
            e.target[0].focus();
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email cannot be empty',
              });
            return
        }
        if(!password.trim()){
            console.log('password error');
            e.target[1].focus();
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Password cannot be empty',
              });
            return
        }
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Credentials are fine',
        });
        addUser({
            email: email,
            password: password,
            remember: remember,
            id: uuidv4()
        })

        reset()
    }
    


    return (
        <>
            <form onSubmit={handleSubmit} style={{border:"1px solid #ccc"}}>
                <div class="container">
                    <h1>Sing Up </h1>
                    <p>Please fill in this form to Sing Up.</p>
                    <br />
                    <label htmlFor="email"><b>Email</b></label>
                        <input 
                            type="text" 
                            placeholder="Enter Email"  
                            name="email"
                            onChange={handleChange}
                            value={email}
                        />
                    <label htmlFor="psw"><b>Password</b></label>
                        <input 
                            type="password" 
                            placeholder="Enter Password" 
                            name="password"
                            onChange={handleChange}
                            value={password}
                        />
                    
                    <label htmlFor="">
                        <input 
                            type="checkbox"
                            name="remember" 
                            style={{marginBottom:"15px"}}
                            onChange={handleChange}
                            value={remember}
                        /> Remember me
                    </label>

                <div class="clearfix">
                    <button type="button" class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Log In</button>
                </div>
                </div>
            </form>
            
        </>
    )
}

export default Login
