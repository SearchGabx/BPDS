import styles from "../page.module.css";

export default function Delete({ item, handleDeleteTask }: any) {
    return (
        <div className={styles.actions}>
            <button className={styles.deleteButton} onClick={() => handleDeleteTask(item)}>
                Eliminar
            </button>
        </div>
    );
}
