import Typography from '@mui/material/Typography';

let redArray=[]
let i=0
while(i<=9){
    redArray.push(<div>
    <img  id={"redimg-"+i} alt="圖片"></img>
    <Typography variant="h5" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center'}} id = {"redED-"+i}></Typography>
    </div>)
    i++
}
export default redArray