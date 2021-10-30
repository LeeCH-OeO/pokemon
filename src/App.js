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
        <footer flex>
          <a href="https://github.com/LeeCH-OeO/pokemon" target="_blank" rel="noreferrer">
              <Typography align="center" color="textSecondary" gutterBottom >
          ©LeeCH-OeO 
          </Typography></a>         
          </footer>
      <img id="temp" alt = "123"></img>
      <img id="temp2" alt = "123"></img>
      <div id ="canvas_container" style={{"display":"none"}}>
      <canvas id="myCanvas" width="630" height="630"></canvas> 
      <canvas id="myCanvas2" width="630" height="630"></canvas>
      <canvas id="myCanvas3" width="630" height="630"></canvas>
      </div>
      <Button onClick={draw}>123</Button>
      <div className="container">
      {pokemonImages}
      </div>

      
    </div>
    
  );
}
export default App;
