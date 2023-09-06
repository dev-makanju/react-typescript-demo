import { useContext } from "react" 
import { UserContext } from "./UserContext"

const User = () => {
   const userContext = useContext(UserContext)
   const handleLogin = () => {
      if(userContext){
         userContext.setUser({
            name: 'Vishwas',
            email: 'makurseme@gmail.com',
         })
      }
   }
   const handleLogOut = () => {
      if(userContext){
         userContext.setUser(null);
      }
   }
   
   return (
     <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogOut}>Log Out</button>
        <div>User name is {userContext?.user?.name} and email: {userContext?.user?.email}</div>
     </div>
   )
}

export default User