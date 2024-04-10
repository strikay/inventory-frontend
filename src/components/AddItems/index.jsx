/* eslint-disable react/prop-types */
import { useState } from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Heading from '../Heading';
import Alert from '@mui/joy/Alert';
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

const AddItems = ({user}) => {
    const [item_category, setItemCategory] = useState("");
    const [units, setUnits] = useState("");
    const [message, setMessage] = useState("");

    const handleItemAddition = async (e) => {
        e.preventDefault();
        const itemsObject = {item_category, units, user:user.id};
        const data = await inventoryService.addItems(itemsObject);
        if(data){
            console.log(data)
            setMessage("Added Successfully")
            setTimeout(() => {
                setMessage("")
            }, 5000);
        }
    }
    return (
        <>
            <div style={styles.bodyContainer}>
                <Heading headingText={"Add Items"}/>
                
                <div style={styles.headingContainer}>
                    {message && <Alert color="success">{message}</Alert>}
                    <form onSubmit={handleItemAddition}>
                        <Input size="lg" placeholder="Category eg Adidas sneakers" value={item_category} onChange={e=> setItemCategory(e.target.value)} sx={{mt:4}} fullWidth />
                        <Input size="lg" placeholder="Quantity i.e. number of units" value={units} onChange={e=> setUnits(e.target.value)} sx={{mt:2}} fullWidth />
                        <Button size="lg" type="submit" sx={{width:220, mt:4}}>Add Items</Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddItems