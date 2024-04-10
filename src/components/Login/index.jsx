/* eslint-disable react/prop-types */

import {useState} from 'react';
import axios from 'axios';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Heading from '../Heading';
import userService from '../../services/users';
import inventoryService from '../../services/inventory';

window.axios = axios
const styles={
    headingContainer:{
      display:'flex',
      flexDirection:'column',
      paddingLeft:20,
      paddingRight:20,
      width:'100%'
    },
    contentSection:{
      display:'flex',
      flexDirection:'column',
      marginTop:10,
      paddingLeft:20,
      paddingRight:20,
      width:'100%'
    },
    heading:{
      fontSize:52,
      lineHeight:0,
    },
    bodyContainer:{
      marginLeft:'10%',
      marginRight:'10%',
      display:'flex',
      flexDirection:'column'
    },
  }

const Login = ({setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const authObject = {email, password}
        const data = await userService.login(authObject);
        const newToken = data.token;

        window.localStorage.setItem(
            'authToken', newToken
        )
        userService.setToken(newToken)
        inventoryService.setToken(newToken)
        const user = await userService.getMe();
        setUser(user)
    }
    return (
        <>
            <div style={styles.bodyContainer}>
                <Heading headingText={"Log In"}/>
                <div style={styles.headingContainer}>
                    <form onSubmit={handleLogin}>
                        <Input size="lg" placeholder="Email" sx={{mt:4}} value={email} onChange={e=>setEmail(e.target.value)} fullWidth />
                        <Input size="lg" placeholder="Password" sx={{mt:2}} type="password" value={password} onChange={e=>setPassword(e.target.value)} fullWidth />
                        <Button size="lg" type="submit" sx={{width:220, mt:4}}>Login</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login