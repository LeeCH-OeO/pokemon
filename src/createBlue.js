import Typography from '@mui/material/Typography';

let blueArray=[]
let i=0
while(i<=9){
    blueArray.push(<div>
    <img  id={"blueimg-"+i} alt="圖片"></img>
    <Typography variant="h5" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center'}} id = {"blueED-"+i}></Typography>
    </div>)
    i++
}
export default blueArray