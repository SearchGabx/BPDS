import styles from "../page.module.css";
import type { Task } from "../page";
 
export default function Read({ tasks, completedTasks, handleToggleTask, handleDeleteTask }: any) {
    return (
        <div>
            <div className={styles.taskHeader}>
                <h2>Tareas</h2>
                <span>({completedTasks}/{tasks.length})</span>
            </div>
            {tasks.length === 0 ? (
                <div className={styles.emptyState}>No hay tareas pendientes. ¡Buen trabajo!</div>
            ) : (
                <ul className={styles.taskList}>
                    {tasks.map((item: Task) => (
                        <li key={item.id} className={styles.taskItem}>
                            <label className={styles.taskLabel}>
                                <input type="checkbox" checked={item.done} onChange={() => handleToggleTask(item.id)} />
                                <span className={item.done ? styles.completed : ""}>{item.text}</span>
                            </label>
                            <div className={styles.actions}>
                                <button className={styles.deleteButton} onClick={() => handleDeleteTask(item.id)}>Eliminar</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
 
