let imageArray=[]
let i=1

while(i<=520){
    imageArray.push(process.env.PUBLIC_URL +"/image/"+i+".png")
    i++
}
const pokemonImages = imageArray.map((imageArray)=>
    <div>
    <img  src={imageArray} alt="圖片"></img>    
    </div>    
     
)



export default pokemonImages