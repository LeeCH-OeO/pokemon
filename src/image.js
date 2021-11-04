import allName from './allName'
let imageArray=[]
let i=1
while(i<=520){
    // imageArray.push(process.env.PUBLIC_URL +"/image/"+i+".png")
    imageArray.push(<div>
        <img  src={process.env.PUBLIC_URL +"/image/"+i+".png"} alt="圖片"></img>
        <p>{allName[i-1]}</p>
    </div>)
    i++
}

export  {imageArray}