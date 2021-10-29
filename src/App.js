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
      <button onClick={draw}>invert</button>
      <canvas id="myCanvas" width="630" height="630"></canvas>
      <canvas id="myCanvas2" width="630" height="630"></canvas>
      <div className="container">
      {pokemonImages}
      </div>
      
    </div>
    
  );
}
export default App;
