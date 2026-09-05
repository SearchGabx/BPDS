import styles from "../page.module.css";
 
export default function Create({ task, setTask, handleAddTask }: any) {
    return (
        <div className={styles.addForm}>
            <input
                type="text"
                placeholder="¿Qué necesitas hacer hoy?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Agregar</button>
        </div>
    );
}