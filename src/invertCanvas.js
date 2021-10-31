import Swal from 'sweetalert2'
let imageURL = []
let index = 0
const getInvert = ()=>{
    while (index<=519){
    let sourceCanvas = document.createElement("canvas")
    sourceCanvas.id = "sourceCanvasAll"
    sourceCanvas.width = sourceCanvas.height = 630
    let ctxSource = sourceCanvas.getContext("2d");

    let invertCanvas = document.createElement("canvas")
    invertCanvas.id = "invertCanvasAll"
    invertCanvas.width = invertCanvas.height = 630
    let ctxInvert = invertCanvas.getContext("2d");

    ctxSource.clearRect(0, 0, sourceCanvas.width, sourceCanvas.height);
    ctxInvert.clearRect(0, 0, invertCanvas.width, invertCanvas.height);
        let img = new Image()
        img.src = process.env.PUBLIC_URL+"/image/"+index+".png"
        ctxSource.drawImage(img, 0, 0)
        let invertImageData= ctxSource.getImageData(0,0,sourceCanvas.width, sourceCanvas.height);
        for (let i = 0; i < invertImageData.data.length; i += 4) {
        
            invertImageData.data[i]     = 255-invertImageData.data[i] // red
            invertImageData.data[i + 1] = 255-invertImageData.data[i+1] // green
            invertImageData.data[i + 2] = 255-invertImageData.data[i+2] // blue
            invertImageData.data[i + 3] =255
            }
        ctxInvert.putImageData(invertImageData, 0, 0);
        imageURL.push(invertCanvas.toDataURL("image/png"))
        console.log(`第${index}張圖片已轉換`) 
        index+=1
        
    }
}
 const putInvertImage = ()=>{
    document.getElementById("invertContainer").style=""
    document.getElementById("sourceContainer").style.display="none"
    document.getElementById("grayContainer").style.display="none"
    document.getElementById("thresholdContainer").style.display="none"
    let startTime = Date.now()
    console.time("反轉顏色計時")
    getInvert()
    let count = 0
    while(count<=519){
        let tempImageID = document.getElementById("invertimg-"+count)
        tempImageID.src = imageURL[count]
        count+=1
    }
    console.timeEnd("反轉顏色計時")
    let endTime = Date.now()
    document.getElementById("status").innerHTML=`520張反轉處理耗時${endTime-startTime} ms, 平均耗時${(endTime-startTime)/520} ms`
    Swal.fire({
        icon: 'success',
        title: '反轉轉換完成!',        
    })    
}

export default putInvertImage