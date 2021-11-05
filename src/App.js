import {imageArray} from './image';
import {draw, sourceRGB} from './randomCanvas';
import './App.css'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'
import invertArray from './createInvert';
import grayArray from './createGray';
import thresholdArray from './createThreshold';
import putInvertImage from './invertCanvas';
import {putGrayImage} from './grayCanvas';
import putThresholdImage from './putThresholdCanvas';
import Swal from 'sweetalert2'
const putSource = ()=>{
  document.getElementById("status").innerHTML=""
  document.getElementById("invertContainer").style.display="none"
  document.getElementById("grayContainer").style.display="none"
  document.getElementById("thresholdContainer").style.display="none"
  document.getElementById("processedImageContainer").style.display="none"
  document.getElementById("sourceContainer").style.display=""
}
const handleGray = ()=>{
  Swal.fire({
    text: "開始灰階轉換",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '開始',
    cancelButtonText: '取消',
    background:'#121212'
    
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("loading").style.display="flex"
      document.getElementById("loadingText").style.display="flex"
      document.getElementById("status").style.display="none"
      document.getElementById("processedImageContainer").style.display="none"
      document.getElementById("invertContainer").style.display="none"
      document.getElementById("thresholdContainer").style.display="none"
      document.getElementById("sourceContainer").style.display="none"
      setTimeout(()=>putGrayImage(), 500)
    }
  })
}

const handleInvert = ()=>{
  Swal.fire({
    text: "開始反轉轉換",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '開始',
    cancelButtonText: '取消',
    background:'#121212'
    
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("loading").style.display="flex"
      document.getElementById("loadingText").style.display="flex"
      document.getElementById("status").style.display="none"
      document.getElementById("processedImageContainer").style.display="none"
      document.getElementById("grayContainer").style.display="none"
      document.getElementById("thresholdContainer").style.display="none"
      document.getElementById("sourceContainer").style.display="none"
      setTimeout(()=>putInvertImage(), 500)
    }
  })
}
const handThreshold = ()=>{
  Swal.fire({
    text: "開始二值化轉換",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '開始',
    cancelButtonText: '取消',
    background:'#121212'
    
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById("loading").style.display="flex"
      document.getElementById("loadingText").style.display="flex"
      document.getElementById("status").style.display="none"
      document.getElementById("processedImageContainer").style.display="none"
      document.getElementById("invertContainer").style.display="none"
      document.getElementById("grayContainer").style.display="none"
      document.getElementById("sourceContainer").style.display="none"
      setTimeout(()=>putThresholdImage(), 500)
    }
  })
}
const oeo = ()=>{
  document.getElementById("loading").style.display="flex"
  document.getElementById("loadingText").style.display="flex"
  document.getElementById("status").style.display="none"
  document.getElementById("processedImageContainer").style.display="none"
  document.getElementById("invertContainer").style.display="none"
  document.getElementById("grayContainer").style.display="none"
  document.getElementById("sourceContainer").style.display="none"
  document.getElementById("thresholdContainer").style.display="none"
  setTimeout(()=>document.getElementById("loading").style.display="none", 2900)
  setTimeout(()=>document.getElementById("loadingText").style.display="none", 2900)
  setTimeout(()=>window.open("https://youtu.be/d-lEahV5Q_o"), 3000)
  setTimeout(()=>document.getElementById("sourceContainer").style.display="", 3000)
  
}
const handRandom = ()=>{
  draw()
  console.log(sourceRGB)
}

function App() {
   
  return (
    <div>
      <Typography className="header" variant="h1" gutterBottom style={{'fontFamily': 'Noto Serif TC','color':'red'}}>
      ㊕寶可夢特效圖鑑㊝
      </Typography>
      <div style={{"display": "flex"}}>
          <footer style={{ "margin": "auto"}}>
            <a href="https://github.com/LeeCH-OeO/pokemon" target="_blank" rel="noreferrer">
            <Typography align="center"  gutterBottom style={{'fontFamily': 'Noto Serif TC','color':'red'}}>
            ©LeeCH-OeO 
            </Typography></a>         
          </footer>
      </div>
      <div style={{"display": "flex", "padding":"10px"}}>
        <Button onClick = {handRandom} style={{ "margin": "auto"}} variant="outlined" color="error">隨機圖片特效</Button>
        <Button onClick = {handleInvert} style={{ "margin": "auto"}} variant="outlined" color="error">全體反轉</Button>
        <Button onClick = {handleGray} style={{ "margin": "auto"}} variant="outlined" color="error">全體灰階</Button>
        <Button onClick = {handThreshold} style={{ "margin": "auto"}} variant="outlined" color="error">全體二值化</Button>
        <Button onClick = {oeo} style={{ "margin": "auto"}} variant="outlined" color="error">🎵🎶🎙️🎼</Button>
        <Button onClick = {putSource} style={{ "margin": "auto"}} variant="outlined" color="error">關閉特效</Button>

      </div>
      <div id = "loading" style={{"display":"none"}}>
        <div className="lds-hourglass" style={{"margin": "auto"}}></div>
      </div>
      <div id = "loadingText" style={{"display":"none"}}>
        <Typography variant="h5" gutterBottom style={{"margin": "auto", 'fontFamily': 'Noto Serif TC','color':'red'}} >Loading</Typography>
      </div>      
      <span className = "processedImageContainer" style={{"display":"none"}} id = "processedImageContainer">

        <div>
        <img id="sourceImage" alt = "123" ></img>
        <Typography className="describe" variant="subtitle1" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center'}} >
          原始
        </Typography>
        </div>
        <div>
          <img id="invertImage" alt = "123" ></img>
          <Typography className="describe" variant="subtitle1" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center'}} >
          反轉
        </Typography>
        </div>
        <div>
          <img id="grayImage" alt = "123" ></img>
          <Typography className="describe" variant="subtitle1" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center'}} >
          灰階
        </Typography>
        </div>
        
        <div>
        <img id="thresholdImage" alt = "123"></img>
        <Typography className="describe" variant="subtitle1" gutterBottom style={{'fontFamily': 'Noto Serif TC', 'textAlign': 'center'}} >
          二值化
        </Typography> 
        </div>            
      
      
      </span>
      <Typography variant="h4" gutterBottom id = "status" style={{"textAlign": "center", 'fontFamily': 'Noto Serif TC','color':'red'}}></Typography>
            
      <div id ="canvas_container" style={{"display":"none"}}>
      <canvas id="sourceCanvas" width="630" height="630"></canvas> 
      <canvas id="grayCanvas" width="630" height="630"></canvas>
      <canvas id="invertCanavs" width="630" height="630"></canvas>
      <canvas id="thresholdCanvas" width="630" height="630"></canvas>
      </div>
      <div className="container" id = "sourceContainer">
      {imageArray}
 
      </div>
      
      <div id = "invertContainer" className = "container" style={{"display":"none"}}>
      {invertArray}
      </div>
      <div id = "grayContainer" className = "container" style={{"display":"none"}}>
      {grayArray}
      </div>
      <div id = "thresholdContainer" className = "container" style={{"display":"none"}}>
      {thresholdArray}
      </div>
      
      
    </div>
    
  );
}
export default App;
