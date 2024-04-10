/* eslint-disable react/prop-types */
import {useState} from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Heading from '../Heading';
import userService from '../../services/users'
import inventoryService from '../../services/inventory';

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

const SignUp = ({setUser}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        const authObject = {name, email, password}
        const data = await userService.createAccount(authObject);
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
                <Heading headingText={"Create Account"}/>

                <div style={styles.headingContainer}>
                    <form onSubmit={handleSignUp}>
                        <Input size="lg" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} sx={{mt:4}} fullWidth />
                        <Input size="lg" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} sx={{mt:2}} fullWidth />
                        <Input size="lg" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} sx={{mt:2}} type="password" fullWidth />
                        <Button size="lg" type="submit" sx={{width:220, mt:4}}>Login</Button>    
                    </form>

                </div>
            </div>
        </>
    )
}

export default SignUp