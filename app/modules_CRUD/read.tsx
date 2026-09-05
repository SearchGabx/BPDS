import styles from "../page.module.css";
import { Task } from "../page";
import Update from "./update";
import Delete from "./delete";


export default function Read({ tasks, completedTasks, handleToggleTask, handleDeleteTask, handleUpdateTask }: any) {
    return (
        <div>
            <div className={styles.taskHeader}>
                <h2>Tareas</h2>
                <span>({completedTasks}/{tasks.length})</span>
            </div>
            {tasks.length === 0 ? (
                <div className={styles.emptyState}>Buen trabajo, chicos. Tomen un descanso!</div>
            ) : (
                <ul className={styles.taskList}>
                    {tasks.map((item: Task) => (
                        <li key={item.id} className={styles.taskItem}>
                            <Update item={item} handleToggleTask={handleToggleTask} handleUpdateTask={handleUpdateTask} />
                            <Delete id={item.id} handleDeleteTask={handleDeleteTask} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
