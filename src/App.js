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
      <div className="container">
      {pokemonImages}
      </div>
      <button onClick={draw}>click</button>
      <canvas id="myCanvas" width="600" height="600"></canvas>
      <canvas id="myCanvas2" width="600" height="600"></canvas>
    </div>
    
  );
}
export default App;
