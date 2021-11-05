import Typography from '@mui/material/Typography';

let greenArray=[]
let i=0
while(i<=9){
    greenArray.push(<div>
    <img  id={"greenimg-"+i} alt="圖片"></img>
    <Typography variant="subtitle1" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center', 'color':'#00FF00'}} id = {"greenED-"+i}></Typography>
    </div>)
    i++
}
export default greenArray