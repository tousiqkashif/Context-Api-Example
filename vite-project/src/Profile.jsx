import UserContext from "./Context/UserContext";
import { useContext } from "react";



export default function Profile(){
    const {userData} = useContext(UserContext);
    
return (
    <>
    {!userData? <div><h1>Please Login</h1></div> : <div><h1>Welcome {userData}</h1></div>}
    </>
);
}