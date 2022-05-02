import Typography from "@mui/material/Typography";
let searchArray = [];
let i = 0;
while (i <= 9) {
  searchArray.push(
    <div>
      <img id={"searchimg-" + i} alt="圖片"></img>
      <Typography
        variant="subtitle1"
        gutterBottom
        style={{ fontFamily: "Noto Serif TC", textAlign: "center" }}
        id={"searchED-" + i}
      ></Typography>
    </div>
  );
  i++;
}
export default searchArray;
