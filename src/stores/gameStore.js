export function createGameStore() {
  return {
    boardRow: undefined,
    boardColumn: undefined,
    winnerLength: undefined,
    history: [],
    stepNumber: 0,
    xIsNex: true,
    clickedIndex: [],
    isFinished: false,

    get lastIndex() {
      return this.clickedIndex.length > 0
        ? this.clickedIndex[this.stepNumber - 1]
        : undefined;
    },
    get current() {
      return this.history.length > 0 ? this.history[this.stepNumber] : undefined;
    },

    get hasWinner() {
      return this.current ? this.calculateWinner(this.current.squares) : null;
    },

    get status() {
      if (this.hasWinner) {
        return "Winner: " + this.hasWinner.winner;
      } else if (this.stepNumber === this.boardRow * this.boardColumn) {
        this.isFinished = true;
        return "No one win.";
      } else {
        return "Next player: " + (this.xIsNext ? "X" : "O");
      }
    },

    startNewGame() {
      this.boardRow = undefined;
      this.boardColumn = undefined;
      this.winnerLength = undefined;
      this.history = [];
      this.stepNumber = 0;
      this.sIsNex = true;
      this.clickedIndex = [];
      this.isFinished = false;
    },

    setStartUpData(boardRow, boardColumn, winnerLen) {
      this.boardRow = boardRow;
      this.boardColumn = boardColumn;
      this.winnerLength = winnerLen;
      this.history.push({
        squares: Array(boardRow * boardColumn).fill(null),
      });
    },

    jumpTo(step) {
      this.stepNumber = step;
      this.xIsNext = step % 2 === 0;
    },

    calculateWinner(squares) {

      if(squares.filter(item => item).length<this.winnerLength){
        return null;
      }

      //win in row or column
      for (let i = 0; i < this.boardRow  ; i++) {
        for (let j = 0; j < this.boardColumn ; j++) {
          let rowList = [];
          let rowIndex = [];
          let columnList = [];
          let columnIndex = [];
          for (let k = 0; k < this.winnerLength; k++) {
            let rowCellIndex = i * this.boardColumn + j + k;
            let columnCellIndex = (i + k) * this.boardColumn + j;
            rowList.push(squares[rowCellIndex]);
            columnList.push(squares[columnCellIndex]);

            rowIndex.push(rowCellIndex);
            columnIndex.push(columnCellIndex);
          }
          // console.log(`row=> i=${i}, j=${j}  ==== ${rowList.toString()}`);
          // console.log(`column=> i=${i}, j=${j} ==== ${columnList.toString()}`);
          if (this.checkIsWon(rowList))
            return {
              winner: rowList[0],
              squares: rowIndex,
            };
          if (this.checkIsWon(columnList))
            return {
              winner: columnList[0],
              squares: columnIndex,
            };
        }
      }

      //win in cross
      for (let i = 0; i <= this.boardRow - this.winnerLength; i++) {
        for (let j = 0; j <= this.boardColumn - this.winnerLength; j++) {
          let slash = [];
          let backSlash = [];
          let slashIndex = [];
          let backSlashIndex = [];
          for (let k = 0; k < this.winnerLength; k++) {
            let slashRowIndex = (k + i) * this.boardColumn + j + k;
            let backSlachRowIndex = (k + i) * this.boardColumn + j + (this.winnerLength - k - 1);
            slash.push(squares[slashRowIndex]);
            backSlash.push(
              squares[
                backSlachRowIndex
              ]
            );

            slashIndex.push(slashRowIndex);
            backSlashIndex.push(
              backSlachRowIndex
            );
          }

          if (this.checkIsWon(slash))
            return {
              winner: slash[0],
              squares: slashIndex,
            };
          if (this.checkIsWon(backSlash))
            return {
              winner: backSlash[0],
              squares: backSlashIndex,
            };
          // console.log(`slash=> i=${i}, j=${j}  ==== ${slash.toString()}`);
          // console.log(`backSlash=> i=${i}, j=${j} ==== ${backSlash.toString()}`);
        }
      }
      return null;
    },

    checkIsWon(squares) {
      const isWon =
        squares &&
        squares.length === this.winnerLength &&
        squares.every((item) => item === squares[0] && item != null);
      if (isWon) {
        this.isFinished = true;
      }
      return isWon;
    },

    handleSquareClick(i) {
      const cloneHistory = this.history.slice(0, this.stepNumber + 1);
      const current = cloneHistory[cloneHistory.length - 1];
      const squares = current.squares.slice();

      if (this.calculateWinner(squares) || squares[i] || this.isFinished) {
        return;
      }
      squares[i] = this.xIsNext ? "X" : "O";
      this.history.push({
        squares: squares,
      });

      this.stepNumber = cloneHistory.length;
      this.xIsNext = !this.xIsNext;
      this.clickedIndex.push(i);
    },
  };
}
