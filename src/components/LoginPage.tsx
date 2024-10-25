import { useAuthStore } from "../store/auth.store"


export const LoginPage = () => {

    const authStatus = useAuthStore( state => state.status);

    if ( authStatus === 'checking'){
        return <h3>Loading..</h3>
    }

  return (
    <>
        <h3>LoginPage</h3>

        
    </>
  )
}
