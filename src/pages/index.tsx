import { useGame } from '../hooks/useGames'
import { Cell } from '../components/Cell';
import styles from './index.module.css';

const Home = () => {
  const {board, row , y, cell, x, turnColor ,onClick,} = useGame();

  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((cell, x) => (
            <Cell key={`${x}-${y}`} x={x} y={y} cell={cell} onClick={() => onClick(x, y)} />
          ))
        )}
      </div>
      <div>{`${turnColor === 2 ? '黒の番です' : '白の番です'}`}</div>
    </div>
  );
};

export default Home;
