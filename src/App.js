import {imageArray} from './image';
import {draw} from './randomCanvas';
import './App.css'
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material'
import invertArray from './createInvert';
import grayArray from './createGray';
import thresholdArray from './createThreshold';
import putInvertImage from './invertCanvas';
import {putGrayImage} from './grayCanvas';
import putThresholdImage from './putThresholdCanvas';
import Swal from 'sweetalert2'
import { GetBlue} from './getBlue';
import blueArray from './createBlue';
import redArray from './createRed';
import { GetRed } from './getRed';
import { GetGreen } from './getGreen';
import greenArray from './createGreen';
import  {useState} from 'react'
import searchArray from './createSearch';
import { GetSearch } from './getSearch';

const putSource = ()=>{
  document.getElementById("status").innerHTML=""
  document.getElementById("invertContainer").style.display="none"
  document.getElementById("grayContainer").style.display="none"
  document.getElementById("thresholdContainer").style.display="none"
  document.getElementById("processedImageContainer").style.display="none"
  document.getElementById("sourceContainer").style.display=""
  document.getElementById("blueContainer").style.display="none"
  document.getElementById("greenContainer").style.display="none"
  document.getElementById("redContainer").style.display="none"
  document.getElementById("searchContainer").style.display="none"
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
      document.getElementById("blueContainer").style.display="none"
      document.getElementById("greenContainer").style.display="none"
      document.getElementById("redContainer").style.display="none"
      document.getElementById("searchContainer").style.display="none"
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
      document.getElementById("blueContainer").style.display="none"
      document.getElementById("redContainer").style.display="none"
      document.getElementById("greenContainer").style.display="none"
      document.getElementById("searchContainer").style.display="none"
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
      document.getElementById("blueContainer").style.display="none"
      document.getElementById("redContainer").style.display="none"
      document.getElementById("greenContainer").style.display="none"
      document.getElementById("searchContainer").style.display="none"
      setTimeout(()=>putThresholdImage(), 500)
    }
  })
}

const handRandom = ()=>{
  draw()
  document.getElementById("status").innerHTML=""
  document.getElementById("invertContainer").style.display="none"
  document.getElementById("grayContainer").style.display="none"
  document.getElementById("thresholdContainer").style.display="none"
  document.getElementById("processedImageContainer").style.display=""
  document.getElementById("blueContainer").style.display="none"
  document.getElementById("greenContainer").style.display="none"
  document.getElementById("redContainer").style.display="none"
  document.getElementById("sourceContainer").style.display="none"
  document.getElementById("searchContainer").style.display="none"
}
const handleBlue = ()=>{
  Swal.fire({
    text: "顯示最藍的10隻寶可夢",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '開始',
    cancelButtonText: '取消',
    background:'#121212'
    
  }).then((result) =>{
    if (result.isConfirmed){
      document.getElementById("loading").style.display="flex"
      document.getElementById("loadingText").style.display="flex"
      document.getElementById("status").style.display="none"
      document.getElementById("processedImageContainer").style.display="none"
      document.getElementById("invertContainer").style.display="none"
      document.getElementById("grayContainer").style.display="none"
      document.getElementById("sourceContainer").style.display="none"
      document.getElementById("thresholdContainer").style.display="none"
      document.getElementById("redContainer").style.display="none"
      document.getElementById("greenContainer").style.display="none"
      document.getElementById("searchContainer").style.display="none"
      setTimeout(()=>GetBlue(), 500)
    }
  })
}
const handleRed = ()=>{
  Swal.fire({
    text: "顯示最紅的10隻寶可夢",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '開始',
    cancelButtonText: '取消',
    background:'#121212'
    
  }).then((result) =>{
    if (result.isConfirmed){
      document.getElementById("loading").style.display="flex"
      document.getElementById("loadingText").style.display="flex"
      document.getElementById("status").style.display="none"
      document.getElementById("processedImageContainer").style.display="none"
      document.getElementById("invertContainer").style.display="none"
      document.getElementById("grayContainer").style.display="none"
      document.getElementById("sourceContainer").style.display="none"
      document.getElementById("thresholdContainer").style.display="none"
      document.getElementById("blueContainer").style.display="none"
      document.getElementById("greenContainer").style.display="none"
      document.getElementById("searchContainer").style.display="none"
      setTimeout(()=>GetRed(), 500)
    }
  })
}

const handleGreen = ()=>{
  Swal.fire({
    text: "顯示最綠的10隻寶可夢",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '開始',
    cancelButtonText: '取消',
    background:'#121212'
    
  }).then((result) =>{
    if (result.isConfirmed){
      document.getElementById("loading").style.display="flex"
      document.getElementById("loadingText").style.display="flex"
      document.getElementById("status").style.display="none"
      document.getElementById("processedImageContainer").style.display="none"
      document.getElementById("invertContainer").style.display="none"
      document.getElementById("grayContainer").style.display="none"
      document.getElementById("sourceContainer").style.display="none"
      document.getElementById("thresholdContainer").style.display="none"
      document.getElementById("blueContainer").style.display="none"
      document.getElementById("redContainer").style.display="none"
      document.getElementById("searchContainer").style.display="none"
      setTimeout(()=>GetGreen(), 500)
    }
  })
}

function App() {
  const [searchR, setSearchR] = useState('')
  const [searchG, setSearchG] = useState('')
  const [searchB, setSearchB] = useState('')
  const isNumeric = (value)=> {
    return /^-?\d+$/.test(value);
  }
  const handleSearch = ()=>{
    let searchRGB = []
    if(isNumeric(searchR)){
      if (parseInt(searchR)<0){
        searchRGB[0] =   (parseInt(0))
        
      }
      else if(parseInt(searchR)>255){
        searchRGB[0] = (parseInt(255))
        
      }
      else{
        searchRGB[0] = (parseInt(searchR))
        
      }
    }
    else{
      searchRGB[0] = (parseInt(0))
    }
  if(isNumeric(searchG)){
      if (parseInt(searchG)<0){
        searchRGB[1] = parseInt(0)
        
      }
      else if(parseInt(searchG)>255){
        searchRGB[1] = parseInt(255)
        
      }
      else{
        searchRGB[1] = (parseInt(searchG))
        
      }
  }
  else{
    searchRGB[1] = (parseInt(0))
  }

  if(isNumeric(searchB)){
      if (parseInt(searchB)<0){
        searchRGB[2] = (parseInt(0))
        
      }
      else if(parseInt(searchB)>255){
        searchRGB[2] = (parseInt(255))
        
      }
      else{
        searchRGB[2] = (parseInt(searchB))
        
      }
  }
  else{
    searchRGB[2] = (parseInt(0))
  }
  Swal.fire({
    text: "搜尋顏色最接近的10隻寶可夢",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '開始',
    cancelButtonText: '取消',
    background:'#121212'
    
  }).then((result) =>{
    if (result.isConfirmed){
      setSearchR('')
      setSearchG('')
      setSearchB('')
      document.getElementById("loading").style.display="flex"
      document.getElementById("loadingText").style.display="flex"
      document.getElementById("status").style.display="none"
      document.getElementById("processedImageContainer").style.display="none"
      document.getElementById("invertContainer").style.display="none"
      document.getElementById("grayContainer").style.display="none"
      document.getElementById("sourceContainer").style.display="none"
      document.getElementById("thresholdContainer").style.display="none"
      document.getElementById("blueContainer").style.display="none"
      document.getElementById("redContainer").style.display="none"
      document.getElementById("greenContainer").style.display="none"
      setTimeout(()=>GetSearch(searchRGB), 500)
      
    }
  })
  
  }
   
  return (
    <div>
      <Typography className="header" variant="h1" gutterBottom style={{'fontFamily': 'Noto Serif TC'}}>
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
        <Button onClick = {putSource} style={{ "margin": "auto"}} variant="outlined" color="error">顯示圖鑑</Button>
      </div>
      <div>
        <div style={{"display": "flex", "padding":"1px"}}>
        <Button onClick = {handleRed} style={{ "margin": "auto"}} variant="outlined" color="secondary">搜尋紅色</Button>
        <Button onClick = {handleGreen} style={{ "margin": "auto"}} variant="outlined" color="secondary">搜尋綠色</Button>
        <Button onClick = {handleBlue} style={{ "margin": "auto"}} variant="outlined" color="secondary">搜尋藍色</Button>
        <TextField  id="filled-basic" label="R值" variant="outlined"    value={searchR} onChange={(e)=>setSearchR(e.target.value)}
        />
      <TextField  id="filled-basic" label="G值" variant="outlined"    value={searchG} onChange={(e)=>setSearchG(e.target.value)}
        />
      <TextField  id="filled-basic" label="B值" variant="outlined"   value={searchB} onChange={(e)=>setSearchB(e.target.value)}
        />
        <Button onClick = {handleSearch} style={{ "margin": "auto"}} variant="outlined" >搜尋</Button>
        </div>
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
      <Typography variant="h4" gutterBottom id = "status" style={{"textAlign": "center", 'fontFamily': 'Noto Serif TC'}}></Typography>
            
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
      <div id = "blueContainer" className="container" style={{"display":"none"}}>{blueArray}</div>
      <div id = "greenContainer" className="container" style={{"display":"none"}}>{greenArray}</div>
      <div id = "redContainer" className="container" style={{"display":"none"}}>{redArray}</div>
      <div id = "searchContainer" className="container" style={{"display":"none"}}>{searchArray}</div>
      
      
    </div>
    
  );
}
export default App;
