let imageArray=[]
let i=0

while(i<=519){
    imageArray.push(process.env.PUBLIC_URL +"/image/"+i+".png")
    i++
}
const pokemonImages = imageArray.map((imageArray)=>
    <div>
    <img  src={imageArray} alt="圖片"></img>    
    </div>
     
     
)



export default pokemonImages