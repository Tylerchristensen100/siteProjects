
import NewUser from "src/app/admin/components/newUser.js"
import UploadUsers from "src/app/admin/components/uploadUsers.js"
import DeleteUsers from "src/app/admin/components/deleteUsers.js"
import UpdateUser from "./components/updateUser"

export default function admin() {

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }
    return (
        <>
        <h1>Admin</h1>
        <NewUser />
        <br />
        <br />
        <br />
        <UploadUsers />
        <br />
        <br />
        <br />
        <DeleteUsers />
        <br />
        <br />
        <br />
        <UpdateUser />
        </>
    )
}