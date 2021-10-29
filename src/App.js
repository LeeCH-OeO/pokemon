import pokemonImages from './image';
import {draw} from './canvas';
import './App.css'
import Typography from '@mui/material/Typography';



function App() {
  return (
    <div>
      <Typography className="header" variant="h3" gutterBottom style={{'font-family': 'Noto Serif TC','color':'red'}}>
        寶可夢圖鑑
        </Typography>
      <canvas id="myCanvas" width="630" height="630"></canvas>
      <canvas id="myCanvas2" width="630" height="630"></canvas>
      <button onClick={draw}>invert</button> 
      <div className="container">
      {pokemonImages}
      </div>      
           
      <img src = {process.env.PUBLIC_URL +"/image/1.png"} alt = "hehe" id="canvas_ref" style={{"display":"none"}}></img>
    </div>
    
  );
}
export default App;
