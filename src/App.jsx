import { useState, useEffect } from 'react'
import './App.css'
import AddItems from './components/AddItems'
import Home from './components/Home'
import {
  BrowserRouter as Router,
  Routes, Route, Link, Navigate
} from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import userService from './services/users'
import inventoryService from './services/inventory'


function App() {
  const [user, setUser] = useState();

  useEffect(()=>{
    const updateMyDetails = async () => {
      const token = window.localStorage.getItem('authToken')
      if(token){
        userService.setToken(token)
        inventoryService.setToken(token)
        const user = await userService.getMe();
        setUser(user)
      }
    }
    updateMyDetails()
  })

  const handleLogout = async () => {
    const res = await userService.logout();
    if(res){
      console.log(res)
      window.localStorage.removeItem('authToken')
      setUser()
    }
  
    
  }
  const styles={
    navItems:{
      padding: 20,
      cursor: 'pointer'
    },
    navContainer:{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'flex-start', 
      marginLeft:'10%',
      padding:10
      
    }
  }
    
  

  return (
    <Router>
      <div style={styles.navContainer}>
        <div style={styles.navItems}>
          <Link to="/">Home</Link>
        </div>
        <div style={styles.navItems}>
          <Link to="/add-items" >Add Items</Link>
        </div>
        {!user && 
        <>
          <div style={styles.navItems}>
            <Link to="/login">Login</Link>
          </div>
          <div style={styles.navItems}>
            <Link to="/signup">Create Account</Link>
          </div>
        </>
        }
        {user && 
          <>
            <div style={styles.navItems}>{user.name}</div>
            <div style={styles.navItems}>
              <Link to="#" onClick={handleLogout}>Logout</Link>
            </div>
          </>
        }

      </div>
      <Routes>
        <Route path="/add-items" element={user ? <AddItems user={user}/> : <Navigate replace to="/login" />} />
        <Route path="/login" element={<Login setUser={setUser}/>} />
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
