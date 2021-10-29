const draw = ()=>{
    let canvas_container = document.getElementById("canvas_container");
    canvas_container.style.display=""
    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");
    let c2 = document.getElementById("myCanvas2");
    let ctx2 = c2.getContext("2d")
    let c3 = document.getElementById("myCanvas3");
    let ctx3 = c3.getContext("2d");

    ctx.clearRect(0, 0, c.width, c.height);
    ctx2.clearRect(0, 0, c2.width, c2.height)
    ctx3.clearRect(0, 0, c2.width, c2.height);//清理canvas

    let index = Math.floor(Math.random() * 520)
    let img = new Image()
    img.src = process.env.PUBLIC_URL+"/image/"+index+".png"
    
    ctx.drawImage(img, 0, 0);//canvas讀取圖片
    let imageData= ctx.getImageData(0,0,c.width, c.height);
    let imageData2= ctx.getImageData(0,0,c.width, c.height);

    for (let i = 0; i < imageData.data.length; i += 4) {
        
        imageData.data[i]     = 255-imageData.data[i] // red
        imageData.data[i + 1] = 255-imageData.data[i+1] // green
        imageData.data[i + 2] = 255-imageData.data[i+2] // blue
        imageData.data[i + 3] =255
      }
    for (let i = 0; i < imageData2.data.length; i += 4){
      let avg = (imageData2.data[i] + imageData2.data[i +1] + imageData2.data[i +2]) / 3
      imageData2.data[i] = avg
      imageData2.data[i+1] = avg
      imageData2.data[i+2] = avg
    }
      ctx2.putImageData(imageData, 0, 0);
      ctx3.putImageData(imageData2, 0, 0);
    

}

export { draw}