import allName from "./allName";
import Typography from "@mui/material/Typography";
let thresholdArray = [];
let i = 1;

while (i <= 520) {
  thresholdArray.push(
    <div>
      <img id={"thresholdimg-" + i} alt="圖片"></img>
      <Typography
        variant="h5"
        gutterBottom
        style={{ fontFamily: "Noto Serif TC", textAlign: "center" }}
      >
        {allName[i - 1]}
      </Typography>
    </div>
  );
  i++;
}
export default thresholdArray;
