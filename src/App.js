import pokemonImages from './image';
import {draw} from './canvas';
import './App.css'
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

function App() {
  
  return (
    <div>
      <Typography className="header" variant="h3" gutterBottom style={{'font-family': 'Noto Serif TC','color':'red'}}>
        😀寶可夢圖鑑👍🏿
      </Typography>
      <div style={{"display": "flex"}}>
          <footer style={{ "margin": "auto"}}>
            <a href="https://github.com/LeeCH-OeO/Weather-App" target="_blank" rel="noreferrer">
            <Typography align="center" color="textSecondary" gutterBottom >
            ©LeeCH-OeO 
            </Typography></a>         
          </footer>
      </div>
      <div style={{"display": "flex"}}>
        <Button onClick = {draw} style={{ "margin": "auto"}} variant="contained">隨機圖片特效</Button>
      </div>  
      <span className = "processedImageContainer" style={{"display":"none"}} id = "processedImageContainer">

        <div>
        <img id="sourceImage" alt = "123" ></img>
        <Typography className="describe" variant="subtitle1" gutterBottom >
          原始
        </Typography>
        </div>
        <div>
          <img id="grayImage" alt = "123" ></img>
          <Typography className="describe" variant="subtitle1" gutterBottom >
          灰階
        </Typography>
        </div>
        <div>
          <img id="invertImage" alt = "123" ></img>
          <Typography className="describe" variant="subtitle1" gutterBottom >
          反轉
        </Typography>
        </div>
        <div>
        <img id="thresholdImage" alt = "123"></img>
        <Typography className="describe" variant="subtitle1" gutterBottom >
          二值化
        </Typography> 
        </div>            
      
      
      </span>
      
            
      <div id ="canvas_container" style={{"display":"none"}}>
      <canvas id="sourceCanvas" width="630" height="630"></canvas> 
      <canvas id="grayCanvas" width="630" height="630"></canvas>
      <canvas id="invertCanavs" width="630" height="630"></canvas>
      <canvas id="thresholdCanvas" width="630" height="630"></canvas>
      </div>      
      <div className="container">
      {pokemonImages}
      </div>

      
    </div>
    
  );
}
export default App;
