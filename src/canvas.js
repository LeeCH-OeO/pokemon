const draw = ()=>{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var c2 = document.getElementById("myCanvas2");
    var ctx2 = c2.getContext("2d");

    ctx.clearRect(0, 0, c.width, c.height);
    ctx2.clearRect(0, 0, c2.width, c2.height);

    let index = Math.floor(Math.random() * 520)
    let img = new Image()
    img.src = process.env.PUBLIC_URL+"/image/"+index+".png"
    
    ctx.drawImage(img, 0, 0);//canvas讀取圖片
    let imageData= ctx.getImageData(0,0,c.width, c.height);

    for (var i = 0; i < imageData.data.length; i += 4) {
        
        imageData.data[i]     = 255-imageData.data[i] // red
        imageData.data[i + 1] = 255-imageData.data[i+1] // green
        imageData.data[i + 2] = 255-imageData.data[i+2] // blue
        imageData.data[i + 3] =255
      }
      console.log(imageData);
      ctx2.putImageData(imageData, 0, 0);
    

}

export { draw}