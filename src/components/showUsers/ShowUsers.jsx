const ShowUsers = ({nameItem, deleteUser, editUser}) => {

    const { id, email, password, remember } = nameItem

    return (
        <>
            <li className="list-group-item d-flex justify-content">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">
                        {email} 
                    </div>
                    <p>{remember}</p>
                    <div>
                        <button 
                            className="btn btn-danger me-2"
                            onClick={() => deleteUser(id)}
                        >Delete</button>

                        <button 
                            className="btn btn-warning"
                            onClick={() => editUser(id)}
                        >Edit</button>
                    </div>
                </div>
                
            </li>
        </>
    )
}

export default ShowUsers
