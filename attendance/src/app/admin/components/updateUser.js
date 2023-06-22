"use client"
import { useState, useEffect } from 'react'

export default function UpdateUser() {
    const [users, setUsers] = useState([])
    const [selected, setSelected] = useState([])
    let modal = document.getElementById('modal')
    modal.style.display = 'none'
    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    function pushUpdate(firstName, lastName) {
        const data = {
            message: 'update user',
            user: {
                firstName,
                lastName
            }
        }
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify(data)
        })
    }

    function updateUser(firstName, lastName) {
        

        modal.style.display = 'block'
        document.getElementById('updatefirstName').value = firstName
        document.getElementById('updatelastName').value = lastName

        const submit = document.getElementById('modalSubmit')
        submit.onclick = (e) => {
            e.preventDefault()
            console.log('clicked')
            const firstName = document.getElementById('updatefirstName').value
            const lastName = document.getElementById('updatelastName').value
            modal.style.display = 'none'
            pushUpdate(firstName, lastName)
        }
    }



    return (
        <>
            <h1>Update User</h1>

            <table >
                <thead>
                    <tr >
                        <th >Name</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ firstName, lastName }, index) => {
                        return (
                            <tr key={index} id={firstName + '_' + lastName}>
                                <td >{firstName} {lastName}</td>
                                <td><button className="btn btn-danger" onClick={() => { updateUser(firstName, lastName) }}>Update</button></td>
                            </tr>
                        )
                    })
                    }

                </tbody>
            </table>

            <div id='modal' className="modalContent">
                <div className="modal-dialog modal-dialog-centered">
                    <form id='' className="modal-content">
                        <label for="firstName">First Name</label>
                        <input type="text" id="updatefirstName" name="firstName" value="" />
                        <label for="lastName">Last Name</label>
                        <input type="text" id="updatelastName" name="lastName" value="" />
                        <input id="modalSubmit" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
         </>
        )
}