let tempArray=[]
let i=0

while(i<=519){
    tempArray.push("thresholdimg-"+i)
    i++
}
const createThreshold = tempArray.map((tempArray)=>
    <div>
    <img  id={tempArray} alt="圖片"></img>    
    </div>    
     
)
export default createThreshold