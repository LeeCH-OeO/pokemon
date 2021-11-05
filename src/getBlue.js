import { getAverageRGB, averageRGB } from "./getAverageRGB";
let diffBlueArray = []
let i = 0
function GetBlue() {
    let startTime = Date.now()
    getAverageRGB()
    while(i<averageRGB.length){
        let blueRGB = [0,0,255]
        let diffBlue = {index:0, EuclideanD : 0}
        diffBlue.index = i+1
        diffBlue.EuclideanD =  averageRGB[i].r+averageRGB[i].g +((averageRGB[i].b-blueRGB[2])**2)**0.5
        diffBlueArray.push(diffBlue)
        i+=1
    }
    diffBlueArray.sort(function (a,b) {
        return a.EuclideanD - b.EuclideanD    
    })
    for(let i =0;i<=9;i++){
        let blueImageID =  document.getElementById("blueimg-"+i)
        blueImageID.src = process.env.PUBLIC_URL +"/image/"+diffBlueArray[i].index+".png"
        let blueTextID = document.getElementById("blueED-"+i)
        blueTextID.innerHTML=`與藍色的歐氏距離為: ${diffBlueArray[i].EuclideanD}`
    }
    let endTime = Date.now()
    document.getElementById("status").style.display=""
    document.getElementById("status").innerHTML=`耗時${endTime-startTime} ms`
    document.getElementById("loading").style.display="none"
    document.getElementById("loadingText").style.display="none"
    document.getElementById("blueContainer").style.display =""
    
}

export  {GetBlue}