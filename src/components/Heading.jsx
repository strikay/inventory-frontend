/* eslint-disable react/prop-types */



const Heading = ({headingText}) => {

    const styles ={
        headingContainer:{
            display:'flex',
            flexDirection:'column',
            paddingLeft:20,
            paddingRight:20,
            width:'100%'
        },
        heading:{
            fontSize:52,
            lineHeight:0,
          },
    }
    return(
      <div style={styles.headingContainer}>
        <h2 style={styles.heading}>{headingText}</h2>
      </div>
    )
}

export default Heading;