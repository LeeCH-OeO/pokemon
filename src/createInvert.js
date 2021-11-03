let tempArray=[]
let i=1

while(i<=520){
    tempArray.push("invertimg-"+i)
    i++
}
const createInvert = tempArray.map((tempArray)=>
    <div>
    <img  id={tempArray} alt="圖片"></img>    
    </div>    
     
)
export default createInvert