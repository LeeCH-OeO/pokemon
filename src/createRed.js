import Typography from '@mui/material/Typography';

let redArray=[]
let i=0
while(i<=9){
    redArray.push(<div>
    <img  id={"redimg-"+i} alt="圖片"></img>
    <Typography variant="subtitle1" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center', 'color':'#ff0000'}} id = {"redED-"+i}></Typography>
    </div>)
    i++
}
export default redArray