import styles from "../page.module.css";

// Refinamiento de UX (permite presionar Enter en el input de crear)
export default function Create({ task, setTask, handleAddTask }: any) {
    return (
        <div className={styles.addForm}>
            <input
                type="text"
                placeholder="Ingresa los pedientes de la Mesa OP-A"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddTask() }}
            />
            <button onClick={handleAddTask}>Agregar</button>
        </div>
    );
}

