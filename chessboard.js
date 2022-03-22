

let char = ["a", "b", "c", "d", "e", "f", "g", "h"];


function chessboard() {
  let chessboardBox = []
  char.map(function (x) {
    newRow = [];
    for (let i = 1; i <= 8 ; i++) {
      newRow.push(x + " - " + i);
     
    };
    chessboardBox.push(newRow);
  });
  return chessboardBox;
};

  

module.exports = chessboard;





