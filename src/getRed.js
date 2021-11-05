import { getAverageRGB, averageRGB } from "./getAverageRGB";
let diffRedArray = []
let i = 0
function GetRed() {
    let startTime = Date.now()
    getAverageRGB()
    while(i<averageRGB.length){
        let redRGB = [255,0,0]
        let diffRed = {index:0, EuclideanD : 0}
        diffRed.index = i+1
        diffRed.EuclideanD =  ((averageRGB[i].r-redRGB[0])**2)**0.5 +((averageRGB[i].g-redRGB[1])**2)**0.5 +((averageRGB[i].b-redRGB[2])**2)**0.5
        diffRedArray.push(diffRed)
        i+=1
    }
    diffRedArray.sort(function (a,b) {
        return a.EuclideanD - b.EuclideanD    
    })
    for(let i =0;i<=9;i++){
        let redImageID =  document.getElementById("redimg-"+i)
        redImageID.src = process.env.PUBLIC_URL +"/image/"+diffRedArray[i].index+".png"
        let redTextID = document.getElementById("redED-"+i)
        redTextID.innerHTML=`與紅色的歐氏距離為: ${diffRedArray[i].EuclideanD}`
    }
    let endTime = Date.now()
    document.getElementById("status").style.display=""
    document.getElementById("status").innerHTML=`搜尋紅色耗時${endTime-startTime} ms`
    document.getElementById("loading").style.display="none"
    document.getElementById("loadingText").style.display="none"
    document.getElementById("redContainer").style.display =""
}

export  {GetRed}