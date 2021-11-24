import { useEffect, useState } from "react"
import Login from "../login/Login";
import ShowUsers from "../showUsers/ShowUsers";

const ListUsers = () => {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("users")){
            setUsers(JSON.parse(localStorage.getItem("users")));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const addUser = showUsers => {
        console.log(showUsers);
        setUsers((old) => [...old, showUsers])
    }

    const deleteUser = (id) => {
        setUsers((old) => old.filter(item => item.id  !== id));
    }

    const editUser = (id) => {
        const editUsers = users.map( item => (
            item.id === id ? {...item, email: !item.email} : item
        ))
        setUsers(editUsers)
    }

    return (
        <>
            <h2>List of all the users</h2>
            <Login addUser={addUser}/>
            <ul className="list-group list-group-numbered mt-2">
                {
                   users.map(item => (
                       <ShowUsers
                        key={item.id}
                        nameItem={item}
                        deleteUser={deleteUser}
                        editUser={editUser}    
                       />
                   )) 
                }
            </ul>
        </>
    )
}

export default ListUsers
