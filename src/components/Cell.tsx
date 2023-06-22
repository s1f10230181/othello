import styles from './cell.module.css';
export const Cell = (props: { x: number; y: number; cell: number; onClick: () => void }) => {
  return (
    <div className={styles.cell} onClick={props.onClick}>
      {props.cell !== 0 && (
        <div
          className={styles.disc}
          style={{ background: props.cell === 2 ? '#000' : props.cell === 1 ? '#fff' : '#ff9d00' }}
        />
      )}
    </div>
  );
};
