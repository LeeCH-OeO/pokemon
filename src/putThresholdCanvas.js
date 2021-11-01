import Swal from 'sweetalert2'
let imageURL = []
let index = 0
const getThreshold= ()=>{
    while (index<=519){
    let sourceCanvas = document.createElement("canvas")
    sourceCanvas.id = "sourceCanvasAll"
    sourceCanvas.width = sourceCanvas.height = 630
    let ctxSource = sourceCanvas.getContext("2d");

    let thresholdCanvas = document.createElement("canvas")
    thresholdCanvas.id = "thresholdCanvasAll"
    thresholdCanvas.width = thresholdCanvas.height = 630
    let ctxThreshold = thresholdCanvas.getContext("2d");

    ctxSource.clearRect(0, 0, sourceCanvas.width, sourceCanvas.height);
    ctxThreshold.clearRect(0, 0, thresholdCanvas.width, thresholdCanvas.height);
        let img = new Image()
        img.src = process.env.PUBLIC_URL+"/image/"+index+".png"
        ctxSource.drawImage(img, 0, 0)
        let thresholdImageData= ctxSource.getImageData(0,0,sourceCanvas.width, sourceCanvas.height);
        for(let i = 0; i < thresholdImageData.data.length; i += 4){
            let result = (thresholdImageData.data[i]*0.2126 + thresholdImageData.data[i +1]*0.7152 + thresholdImageData.data[i +2]*0.0722 >=200) ? 255:0//閥值=200
            thresholdImageData.data[i] = result
            thresholdImageData.data[i+1] = result
            thresholdImageData.data[i+2] = result
          }
        ctxThreshold.putImageData(thresholdImageData, 0, 0);
        imageURL.push(thresholdCanvas.toDataURL("image/png"))
         
        index+=1
        console.log(`第${index}張圖片已轉換`)
    }
}
 const putThresholdImage = ()=>{
    document.getElementById("status").innerHTML=""
    document.getElementById("thresholdContainer").style=""
    document.getElementById("sourceContainer").style.display="none"
    document.getElementById("invertContainer").style.display="none"
    document.getElementById("grayContainer").style.display="none"
    console.time("二值計時")
    let startTime = Date.now()
    document.getElementById("status").innerHTML="開始二值化處理"
    getThreshold()
    let count = 0
    while(count<=519){
        let tempImageID = document.getElementById("thresholdimg-"+count)
        tempImageID.src = imageURL[count]
        count+=1
        console.log(`第${count}張圖片已載入`)
    }
    console.timeEnd("二值計時")
    let endTime = Date.now()
    document.getElementById("status").style.display=""
    document.getElementById("status").innerHTML=`520張二值化處理耗時${endTime-startTime} ms, 平均耗時${(endTime-startTime)/520} ms`
    Swal.fire({
        icon: 'success',
        title: '二值化轉換完成!',        
    })
    document.getElementById("loading").style.display="none"
    document.getElementById("loadingText").style.display="none" 
}

export default putThresholdImage