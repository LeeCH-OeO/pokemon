let averageRGB = []
let index = 1
function getAverageRGB(){ 
   while (index<=520){
    let sourceRGB = {r:0, g:0, b:0}
    let sourceCanvas = document.createElement("canvas")
    sourceCanvas.id = "sourceCanvasAll"
    sourceCanvas.width = sourceCanvas.height = 630
    let ctxSource = sourceCanvas.getContext("2d");
    ctxSource.clearRect(0, 0, sourceCanvas.width, sourceCanvas.height);
    let img = new Image()
    img.src = process.env.PUBLIC_URL+"/image/"+index+".png"//設定來源圖片
    ctxSource.drawImage(img, 0, 0)
    let sourceImageData= ctxSource.getImageData(0,0,sourceCanvas.width, sourceCanvas.height);//讀取圖片資訊
    let sourceCount = 0
    for(let i = 0; i < sourceImageData.data.length; i += 4){
        if(sourceImageData.data[i+3]!==0){//只計算非透明像素
          sourceCount+=1
          sourceRGB.r += sourceImageData.data[i]
          sourceRGB.g += sourceImageData.data[i+1]
          sourceRGB.b += sourceImageData.data[i+2]
        }        
    }
    sourceRGB.r = ~~(sourceRGB.r/sourceCount)
    sourceRGB.g = ~~(sourceRGB.g/sourceCount)
    sourceRGB.b = ~~(sourceRGB.b/sourceCount)//取得圖片的平均RGB值
    averageRGB.push(sourceRGB)
    console.log(`已計算${(index/520)*100}`)
    index+=1
    }
}

export {averageRGB, getAverageRGB}