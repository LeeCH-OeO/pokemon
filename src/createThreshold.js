let tempArray=[]
let i=1

while(i<=520){
    tempArray.push("thresholdimg-"+i)
    i++
}
const createThreshold = tempArray.map((tempArray)=>
    <div>
    <img  id={tempArray} alt="圖片"></img>    
    </div>    
     
)
export default createThreshold