import { useContext, useState } from "react";
import UserContext from "./Context/UserContext";
import UserContextProvider from "./Context/UserContextProvider";

export default function Login(){
   const [userName , setUserName] = useState("");
   const {setUserData} = useContext(UserContext);

   function handleSent(){
    setUserData(userName);
    setUserName("");

   }

    return(
        <>
        <input 
        onChange={(event) => setUserName(event.target.value)} 
        type="text" 
        value={userName}
        placeholder="Enter Your Name"/>

        <button
        onClick={handleSent}
        >Send Data</button>
        </>
    )
}