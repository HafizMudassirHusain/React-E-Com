import { createContext, useState } from "react";

export const UserContext = createContext();
function USerContextProvider({children}){
    const [user, setUser] = useState({
        name:'Hafiz'
    });
return(
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
)
}
export default USerContextProvider;


