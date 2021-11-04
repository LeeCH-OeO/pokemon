import allName from './allName'
import Typography from '@mui/material/Typography';

let imageArray=[]
let i=1
while(i<=520){
    // imageArray.push(process.env.PUBLIC_URL +"/image/"+i+".png")
    imageArray.push(<div>
        <img  src={process.env.PUBLIC_URL +"/image/"+i+".png"} alt="圖片"></img>
        <Typography variant="h5" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center'}}>{allName[i-1]}</Typography>
    </div>)
    i++
}

export  {imageArray}