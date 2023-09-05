import { useState } from "react"

type AuthUser = {
   name: string,
   email: string,
}

const Login = () => {
   const [user , setUser] = useState<null | AuthUser>(null)
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const handleLogin = () => {
      setIsLoggedIn(true);
      setUser({
         name: 'oluwafemi',
         email: 'makursemem@gmail.com'
      })
   }
   const handleLogout = () => {
      setIsLoggedIn(false);
      setUser(null);
   }

   return (
     <div>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleLogin}>Login</button>
        {
           isLoggedIn ?
         <div>           
            <div>{user?.name}</div>
            <div>{user?.email}</div>
         </div> : 
         <div>User is logged {isLoggedIn ? 'in' : 'out'}</div>   
        }
     </div>
   )
}

export default Login