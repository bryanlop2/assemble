import { useState } from "react"
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom"
import Landing from "./components/landing/Landing"
import Login from "./components/login/Login"
import NavBar from "./components/navBar/NavBar"
import HomeUsers from "./components/homeUsers/HomeUsers"
import ListUsers from "./components/listUsers/ListUsers"
import ShowAll from "./components/homeUsers/ShowAll"

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <BrowserRouter>
            <NavBar/>
            <br />
            <div>
                <h1 className="container">Pagina principal</h1> 
            </div>
            <Routes>
                <Route path='/login' element={<ListUsers/>}></Route>
                {isLoggedIn && (
                        <>
                            <Route path='/logout' element={<Logout onLoginUpdate={setIsLoggedIn}/>}></Route>
                            <Route path='/users' element={<ShowAll onLoginUpdate={setIsLoggedIn}/>}></Route>
                        </>
                )}

                <Route path="/signup" element={<LoginUsers onLoginUpdate={setIsLoggedIn}/>}></Route>
                <Route path="/:pageName" element={<PageNotFound/>}></Route>
                <Route path="/" element={<Landing isLoggedIn={isLoggedIn}/>}></Route>
            </Routes>
        </BrowserRouter>
        
    )
}


function Logout({onLoginUpdate}){
    const navigate = useNavigate();
    return <button onClick={() => {onLoginUpdate(false);
                    navigate('/signup')
    }}>Logout</button>
}

function LoginUsers({onLoginUpdate}){
    const navigate = useNavigate();
    return <button onClick={() => {onLoginUpdate(true);
                   navigate('/')
    }}>Login</button>
}

/*function About(){
    return <button>Login</button>
}*/

function PageNotFound(){
    const params = useParams();
    let message = `${params.pageName}" page not found!`
    if (params.pageName === "users"){
        message = "You need to be logged in to access this page."
    }
    return <p>"{message}</p>
}


export default App