let tempArray=[]
let i=1

while(i<=520){
    tempArray.push("grayimg-"+i)
    i++
}
const createGray = tempArray.map((tempArray)=>
    <div>
    <img  id={tempArray} alt="圖片" ></img>    
    </div>    
     
)
export default createGray