import Input from '@mui/joy/Input';
import Alert from '@mui/joy/Alert';
import SearchIcon from '@mui/icons-material/Search';
import inventoryService from '../../services/inventory';
import Item from './Item';
import { useEffect, useState } from 'react';
import Heading from '../Heading';

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

    bodyContainer:{
      marginLeft:'10%',
      marginRight:'10%',
      display:'flex',
      flexDirection:'column'
    },
    searchBar:{
      marginTop:10,
      width:1000
    }
  }

const Home = () => {
    const [items, setItems] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [refresh, setRefresh] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(()=>{
        const getItems = async () => {
            const items = await inventoryService.getAll();
            if(items){
                setItems(items)
            }
            if(refresh){
                setRefresh(false)
            }
        }
        getItems()
    },[refresh])

    return (
        <>
    <div style={styles.bodyContainer}>
        <Heading headingText={"Inventory"}/>
        <div style={styles.headingContainer}>
            <Input size="lg" placeholder="Search for an item" value={searchValue} onChange={e=>setSearchValue(e.target.value)} startDecorator={<SearchIcon/>} fullWidth />
            {message && <Alert color="success" sx={{mt:2}}>{message}</Alert>}
        </div>

        <div style={styles.contentSection}>
            {items.filter((item) => {
                return !searchValue || item.item_category.includes(searchValue)
            }).map((item) => (
                <Item key={item.id} item={item} setRefresh={setRefresh} setMessage={setMessage}/>
            ))}
        </div>
      </div>
        </>
    )
}

export default Home