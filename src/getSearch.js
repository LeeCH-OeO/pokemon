import { getAverageRGB, averageRGB } from "./getAverageRGB";

function GetSearch(searchRGB) {
  let i = 0;
  let startTime = Date.now();
  let diffSearchArray = [];
  console.log(searchRGB);
  const rgbToHex = (r, g, b) =>
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("");
  let hexColor = rgbToHex(searchRGB[0], searchRGB[1], searchRGB[2]);
  getAverageRGB();
  while (i < averageRGB.length) {
    let diffSearch = { index: 0, EuclideanD: 0 };
    diffSearch.index = i + 1;
    diffSearch.EuclideanD =
      ((averageRGB[i].r - searchRGB[0]) ** 2) ** 0.5 +
      ((averageRGB[i].g - searchRGB[1]) ** 2) ** 0.5 +
      ((averageRGB[i].b - searchRGB[2]) ** 2) ** 0.5;
    diffSearchArray.push(diffSearch);
    i += 1;
  }
  diffSearchArray.sort(function (a, b) {
    return a.EuclideanD - b.EuclideanD;
  });
  for (let i = 0; i <= 9; i++) {
    let searchImageID = document.getElementById("searchimg-" + i);
    searchImageID.src =
      process.env.PUBLIC_URL + "/image/" + diffSearchArray[i].index + ".png";
    let searchTextID = document.getElementById("searchED-" + i);
    searchTextID.innerHTML = `與RGB(${searchRGB}) 的歐氏距離為: ${diffSearchArray[i].EuclideanD}`;
    searchTextID.style.color = hexColor;
  }
  let endTime = Date.now();
  document.getElementById("status").style.display = "";
  document.getElementById("status").innerHTML = `搜尋RGB(${searchRGB})耗時${
    endTime - startTime
  } ms`;
  document.getElementById("loading").style.display = "none";
  document.getElementById("loadingText").style.display = "none";
  document.getElementById("searchContainer").style.display = "";
}

export { GetSearch };
