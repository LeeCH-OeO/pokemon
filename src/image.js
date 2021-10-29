import Typography from '@mui/material/Typography';
let imageArray=[]
let i=0

while(i<=519){
    imageArray.push(process.env.PUBLIC_URL +"/image/"+i+".png")
    i++
}
console.log(imageArray)
const pokemonImages = imageArray.map((imageArray)=>
    <div>
    <img  src={imageArray} alt="圖片"></img>    
    <Typography className="describe" variant="subtitle1" gutterBottom >
        OoOOo
    </Typography>
    </div>
     
     
)



export default pokemonImages