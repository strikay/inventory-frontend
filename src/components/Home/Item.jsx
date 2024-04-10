/* eslint-disable react/prop-types */
import {useState} from 'react';
import Input from '@mui/joy/Input';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Chip from '@mui/joy/Chip';
import AspectRatio from '@mui/joy/AspectRatio';
import Skeleton from '@mui/joy/Skeleton';
import Button from '@mui/joy/Button';
import ClearIcon from '@mui/icons-material/Clear';
import inventoryService from '../../services/inventory';

const Item = ({item, setRefresh, setMessage}) => {
    const inStock = item.units>0
    const [showDeleteButton, setShowDeleteButton] = useState(false)
    const [units, setUnits] = useState("")

    const handleMoveItems = async (e) => {
        e.preventDefault()
        const itemObject = {id:item.id, units}
        const data = await inventoryService.moveItems(itemObject, item.id);
        if(data){
            console.log(data)
            setRefresh(true)
            setMessage("Moved out of stock Successfully")
            setTimeout(() => {
                setMessage("")
            }, 5000);
        }
    }

    const handleDeleteItems = async () => {
        const data = await inventoryService.deleteCategory(item.id);
        if(data){
            setRefresh(true)
            setMessage("Deleted Successfully")
            setTimeout(() => {
                setMessage("")
            }, 5000);
        }
    }
    const styles = {
        deleteButtonContainer:{
            display:showDeleteButton?'flex':'none', 
            flexDirection:'column', 
            justifyContent:'center'
        },
        moveItemsFormContainer:{
            display:inStock?'flex':'none',
            flexDirection:'row', 
            justifyContent:'flex-end'
        }
    }
    return (
        <Card variant="soft" orientation="horizontal" style={{marginTop:20}} onMouseEnter={()=>setShowDeleteButton(true)} onMouseLeave={()=>setShowDeleteButton(false)}>
            <AspectRatio ratio="1" sx={{ width: 90 }}>
              <Skeleton variant="overlay">
                <img
                  src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
                  srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </Skeleton>
            </AspectRatio>
            <CardContent orientation="horizontal">
              <div style={{flexGrow:2}}>
                <Typography level="title-lg" textColor="inherit" style={{marginBottom:2}}>
                  {item.item_category}
                </Typography>
                <div style={{display:'flex', flexDirection:'row', marginBottom:2}}>
                  <Typography textColor="inherit" sx={{mr:1}}>Available Quantities</Typography>
                  <Typography textColor="inherit">{item.units}</Typography>
                </div>
                <Chip
                  variant="solid"
                  color={inStock?"success":"danger"}
                  size="sm"
                  sx={{ pointerEvents: 'none', px:1, my:1}}
                >
                  {inStock?"In Stock":"Out of Stock"}
                </Chip>
              </div>

              <div style={{width:220}}>
                <div style={{textAlign:'right', marginBottom:10}}>
                  <Typography textColor="inherit" level="body-sm" >Date: 17-12-23</Typography>
                  <Typography textColor="inherit" level="body-sm" >Added by Name</Typography>
                </div>
                <form style={styles.moveItemsFormContainer} onSubmit={handleMoveItems}>
                    <Input size="md" placeholder="Qty" value={units} onChange={e => setUnits(e.target.value)} sx={{px:2, mr:1, width:80}}/>
                    <Button size="md" type="submit" sx={{height:20}}>Move Items</Button>
                </form>
              </div>

              <div style={styles.deleteButtonContainer}>
                <Button size="md" onClick={handleDeleteItems} sx={{width:60, height:60}} variant="plain" color="danger" ><ClearIcon/></Button>
              </div>
            </CardContent>
          </Card>
    )
}

export default Item