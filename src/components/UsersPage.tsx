import axios from "axios";
import { useEffect } from "react"
import { ReqResUserListResponse } from "../interfaces";

const loadUser = async () => {
    try {
        const {data} = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users?page=2');
        return data.data;
        //.then( resp => console.log( resp.data.data[0] ) );
    } catch (error) {
        console.log(error);
        return [];
    }
    
}

export const UsersPage = () => {

   useEffect(() => {

    loadUser().then( users => console.log( users ))
   })

  return (
    <>
       <h3>Usuarios</h3>
       <table>
        <thead>
            <tr>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>avatar</td>
                <td>nombre</td>
                <td>email</td>
            </tr>
        </tbody>
       </table>
    </>
  )
}
