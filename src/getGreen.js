import { getAverageRGB, averageRGB } from "./getAverageRGB";
let diffGreenArray = []
let i = 0
function GetGreen() {
    let startTime = Date.now()
    getAverageRGB()
    while(i<averageRGB.length){
        let greenRGB = [0,255,0]
        let diffGreen = {index:0, EuclideanD : 0}
        diffGreen.index = i+1
        diffGreen.EuclideanD =  ((averageRGB[i].r-greenRGB[0])**2)**0.5 +((averageRGB[i].g-greenRGB[1])**2)**0.5 +((averageRGB[i].b-greenRGB[2])**2)**0.5
        diffGreenArray.push(diffGreen)
        i+=1
    }
    diffGreenArray.sort(function (a,b) {
        return a.EuclideanD - b.EuclideanD    
    })
    for(let i =0;i<=9;i++){
        let greenImageID =  document.getElementById("greenimg-"+i)
        greenImageID.src = process.env.PUBLIC_URL +"/image/"+diffGreenArray[i].index+".png"
        let greenTextID = document.getElementById("greenED-"+i)
        greenTextID.innerHTML=`與綠色的歐氏距離為: ${diffGreenArray[i].EuclideanD}`
    }
    let endTime = Date.now()
    document.getElementById("status").style.display=""
    document.getElementById("status").innerHTML=`搜尋綠色耗時${endTime-startTime} ms`
    document.getElementById("loading").style.display="none"
    document.getElementById("loadingText").style.display="none"
    document.getElementById("greenContainer").style.display =""
}

export  {GetGreen}