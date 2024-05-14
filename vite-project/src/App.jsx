import './App.css'
import UserContextProvider from './Context/UserContextProvider';
import UserContext from './Context/UserContext';
import Login from './Login';
import Profile from './Profile';

function App() {
  

  return (
   
      <UserContextProvider>
      <h1>Tousiq Context API</h1>
      <Login/>
      <Profile/>
      </UserContextProvider>
  )
}

export default App
