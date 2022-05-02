const draw = () => {
  let sourceCanvas = document.getElementById("sourceCanvas");
  let ctxsource = sourceCanvas.getContext("2d");
  let grayCanvas = document.getElementById("grayCanvas");
  let ctxGray = grayCanvas.getContext("2d");
  let invertCanavs = document.getElementById("invertCanavs");
  let ctxinver = invertCanavs.getContext("2d");
  let thresholdCanvas = document.getElementById("thresholdCanvas");
  let ctxThreshold = thresholdCanvas.getContext("2d");
  //convas設定

  ctxsource.clearRect(0, 0, sourceCanvas.width, sourceCanvas.height);
  ctxGray.clearRect(0, 0, grayCanvas.width, grayCanvas.height);
  ctxinver.clearRect(0, 0, invertCanavs.width, invertCanavs.height);
  ctxThreshold.clearRect(0, 0, thresholdCanvas.width, thresholdCanvas.height);
  //清理canvas
  let index = Math.floor(Math.random() * 520);
  let img = new Image();
  img.src = process.env.PUBLIC_URL + "/image/" + index + ".png"; //隨機選取

  ctxsource.drawImage(img, 0, 0); //canvas讀取圖片
  let invertImageData = ctxsource.getImageData(
    0,
    0,
    sourceCanvas.width,
    sourceCanvas.height
  );
  let grayImageData = ctxsource.getImageData(
    0,
    0,
    sourceCanvas.width,
    sourceCanvas.height
  );
  let thresholdImageData = ctxsource.getImageData(
    0,
    0,
    sourceCanvas.width,
    sourceCanvas.height
  );

  for (let i = 0; i < invertImageData.data.length; i += 4) {
    invertImageData.data[i] = 255 - invertImageData.data[i]; // red
    invertImageData.data[i + 1] = 255 - invertImageData.data[i + 1]; // green
    invertImageData.data[i + 2] = 255 - invertImageData.data[i + 2]; // blue
    invertImageData.data[i + 3] = 255;
  }
  for (let i = 0; i < grayImageData.data.length; i += 4) {
    if (grayImageData.data[i + 3] !== 0) {
      let avg =
        grayImageData.data[i] * 0.2126 +
        grayImageData.data[i + 1] * 0.7152 +
        grayImageData.data[i + 2] * 0.0722;
      grayImageData.data[i] = avg;
      grayImageData.data[i + 1] = avg;
      grayImageData.data[i + 2] = avg;
    }
  }
  for (let i = 0; i < thresholdImageData.data.length; i += 4) {
    if (thresholdImageData.data[i + 3] !== 0) {
      let result =
        thresholdImageData.data[i] * 0.2126 +
          thresholdImageData.data[i + 1] * 0.7152 +
          thresholdImageData.data[i + 2] * 0.0722 >=
        200
          ? 255
          : 0; //閥值=200
      thresholdImageData.data[i] = result;
      thresholdImageData.data[i + 1] = result;
      thresholdImageData.data[i + 2] = result;
    }
  }

  ctxGray.putImageData(grayImageData, 0, 0);
  ctxinver.putImageData(invertImageData, 0, 0);
  ctxThreshold.putImageData(thresholdImageData, 0, 0);
  let sourceImage = document.getElementById("sourceImage");
  let grayImage = document.getElementById("grayImage");
  let invertImage = document.getElementById("invertImage");
  let thresholdImage = document.getElementById("thresholdImage");
  document.getElementById("processedImageContainer").style = "";
  sourceImage.src = process.env.PUBLIC_URL + "/image/" + index + ".png";
  grayImage.src = grayCanvas.toDataURL("image/png");
  invertImage.src = invertCanavs.toDataURL("image/png");
  thresholdImage.src = thresholdCanvas.toDataURL("image/png");
};

export { draw };
