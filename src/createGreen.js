import Typography from '@mui/material/Typography';

let greenArray=[]
let i=0
while(i<=9){
    greenArray.push(<div>
    <img  id={"greenimg-"+i} alt="圖片"></img>
    <Typography variant="h5" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center'}} id = {"greenED-"+i}></Typography>
    </div>)
    i++
}
export default greenArray