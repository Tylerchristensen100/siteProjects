"use client"

export default function UploadUsers() {
    function handleUpload(event) {
        event.preventDefault()
        
        const file = document.getElementById('file').files[0]
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = () => {
            const data = JSON.parse(reader.result)
            const request = {
                message: 'upload users',
                users: data
            }
            fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify(request)
            })
        }
        document.getElementById('file').value = ''
    }
    return (
        <>
            <form>
                <label htmlFor="file">Upload Users</label>
                <input type="file" id="file" name="file" />
                <button type="submit" onClick={handleUpload}>Submit</button>
            </form>
        </>
    )
}