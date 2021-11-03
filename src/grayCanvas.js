import Swal from 'sweetalert2'
let imageURL = []
let index = 1

function GetGray (){
       
    while (index<=520){
    
      let sourceCanvas = document.createElement("canvas")
      sourceCanvas.id = "sourceCanvasAll"
      sourceCanvas.width = sourceCanvas.height = 630
      let ctxSource = sourceCanvas.getContext("2d");

      let grayCanvas = document.createElement("canvas")
      grayCanvas.id = "grayCanvasAll"
      grayCanvas.width = grayCanvas.height = 630
      let ctxGray = grayCanvas.getContext("2d");

      ctxSource.clearRect(0, 0, sourceCanvas.width, sourceCanvas.height);
      ctxGray.clearRect(0, 0, grayCanvas.width, grayCanvas.height);
      let img = new Image()
      img.src = process.env.PUBLIC_URL+"/image/"+index+".png"
      ctxSource.drawImage(img, 0, 0)
      let grayImageData= ctxSource.getImageData(0,0,sourceCanvas.width, sourceCanvas.height);
      for (let i = 0; i < grayImageData.data.length; i += 4){
        let avg = (grayImageData.data[i]*0.2126 + grayImageData.data[i +1]*0.7152 + grayImageData.data[i +2]*0.0722)
        grayImageData.data[i] = avg
        grayImageData.data[i+1] = avg
        grayImageData.data[i+2] = avg
      }
      ctxGray.putImageData(grayImageData, 0, 0);
      imageURL.push(grayCanvas.toDataURL("image/png"))
      console.log(`${index/520}`)
     
      index+=1  
    }
     
   
}

 const putGrayImage = ()=>{
    document.getElementById("status").innerHTML=""
    document.getElementById("grayContainer").style=""
    document.getElementById("sourceContainer").style.display="none"
    document.getElementById("invertContainer").style.display="none"
    document.getElementById("thresholdContainer").style.display="none"
    console.time("灰階計時")
    let startTime = Date.now()
    GetGray()
    let count = 1
    while(count<=520){
        let tempImageID = document.getElementById("grayimg-"+count)
        tempImageID.src = imageURL[count-1]        
        console.log(`第${count}張圖片已載入`)
        count+=1
    }
    console.timeEnd("灰階計時")
    let endTime = Date.now()
    document.getElementById("status").style.display=""
    document.getElementById("status").innerHTML=`520張灰階處理耗時${endTime-startTime} ms, 平均耗時${(endTime-startTime)/520} ms`
    Swal.fire({
        icon: 'success',
        title: '灰階轉換完成!', 
        background:'#121212'       
    })
    document.getElementById("loading").style.display="none"
    document.getElementById("loadingText").style.display="none"
    
    
}

export  {putGrayImage}