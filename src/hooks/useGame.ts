import { useState } from "react";

export const useGame = () => {
  // prettier-ignore
  const [board,setBoard] =useState ([
    [0,0,0,0,0,0,0,0] ,
    [0,0,0,0,0,0,0,0] ,  
    [0,0,0,3,0,0,0,0] , 
    [0,0,3,1,2,0,0,0] , 
    [0,0,0,2,1,3,0,0] , 
    [0,0,0,0,3,0,0,0] , 
    [0,0,0,0,0,0,0,0] , 
    [0,0,0,0,0,0,0,0] ,     
    ])
  
    const [turnColor, setTurnColor] = useState(2);
  
    const direction = [
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
    ];
    const newBoard: number[][] = JSON.parse(JSON.stringify(board));
  
    const resetOrange = () => {
      newBoard.map((row, y) =>
        row.map((cell, x) => {
          newBoard[y][x] = cell % 3;
        })
      );
    };
    const makeOrange = () => {
      newBoard.map((row, y) =>
        row.map((cell, x) => {
          if (cell === 3 - turnColor) {
            for (const d of direction) {
              for (let distance = 1; distance <= 7; distance++) {
                if (newBoard[y + d[0] * distance] === undefined) {
                  break;
                } else if (newBoard[y + d[0] * distance][x + d[1] * distance] === 0) {
                  if (distance >= 2) {
                    newBoard[y + d[0] * distance][x + d[1] * distance] = 3;
                  }
                  break;
                } else if (newBoard[y + d[0] * distance][x + d[1] * distance] === 3 - turnColor) {
                  break;
                } else if (newBoard[y + d[0] * distance][x + d[1] * distance] === turnColor) {
                  continue;
                } else {
                  break;
                }
              }
            }
          }
        })
      );
    };
  
    const onClick = (x: number, y: number) => {
      console.log(x, y);
      if (newBoard[y][x] === 3) {
        for (const d of direction) {
          if (board[y + d[0]] !== undefined && board[y + d[0]][x + d[1]] === 3 - turnColor) {
            for (let distance = 1; distance <= 7; distance++) {
              if (newBoard[y + d[0] * distance] === undefined) {
                break;
              } else if (newBoard[y + d[0] * distance][x + d[1] * distance] === 0) {
                break;
              } else if (newBoard[y + d[0] * distance][x + d[1] * distance] === 3 - turnColor) {
                continue;
              } else if (newBoard[y + d[0] * distance][x + d[1] * distance] === turnColor) {
                if (distance >= 2) {
                  for (let i = distance; i >= 0; i -= 1) {
                    newBoard[y + d[0] * i][x + d[1] * i] = turnColor;
                  }
                }
              }
            }
          }
        }
        resetOrange();
        makeOrange();
        setTurnColor(3 - turnColor);
        setBoard(newBoard);
      }
    };
}