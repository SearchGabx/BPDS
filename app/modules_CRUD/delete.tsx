import styles from "../page.module.css";
 
export default function Delete({ id, handleDeleteTask }: any) {
    return (
        <div className={styles.actions}>
            <button className={styles.deleteButton} onClick={() => handleDeleteTask(id)}>
                Eliminar
            </button>
        </div>
    );
}
 
 