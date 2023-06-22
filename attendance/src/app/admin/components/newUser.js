"use client"


export default function NewUser() {
    const postUser = (event) => {
        event.preventDefault()
        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        
        const data = {
            message: 'new user',
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
    return (
        <>
        <h1>New User</h1>
        <form>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />

            <button type="submit" onClick={postUser}>Submit</button>

        </form>
        </>
    )
}