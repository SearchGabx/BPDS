"use client";

// Importamos useState porque vamos a guardar la información de la lista.
// Este componente será interactivo, por eso necesitamos estado.
import { useState } from "react";
import styles from "./page.module.css";
import Create from "./modules_CRUD/create";
import Read from "./modules_CRUD/read";

// Definimos la estructura de la tarea (TypeScript)
export interface Task {
    id: number;
    text: string;
    done: boolean;
}

export default function Home() {
    // task guarda lo que el usuario escribe en el input.
    const [task, setTask] = useState("");

    // Iniciamos con un arreglo vacío para no tener tareas predefinidas.
    const [tasks, setTasks] = useState<Task[]>([]);

    // Esta función se ejecuta cuando el usuario hace clic en "Agregar".
    const handleAddTask = () => {
        // Si el texto está vacío o solo tiene espacios, no agregamos nada.
        if (!task.trim()) {
            return;
        }

        // Creamos una nueva tarea con un id único y el texto limpio.
        const nuevaTarea: Task = {
            id: Date.now(),
            text: task.trim(),
            done: false,
        };

        // setTasks recibe una función para mantener el estado anterior.
        setTasks((tareasAnteriores) => [nuevaTarea, ...tareasAnteriores]);

        // Limpiamos el input después de agregar la tarea.
        setTask("");
    };

    // Esta función marca o desmarca una tarea como completada.
    const handleToggleTask = (id: number) => {
        setTasks((tareasAnteriores) =>
            tareasAnteriores.map((item) =>
                item.id === id ? { ...item, done: !item.done } : item
            )
        );
    };

    // Esta función elimina una tarea de la lista.
    const handleDeleteTask = (id: number) => {
        setTasks((tareasAnteriores) =>
            tareasAnteriores.filter((item) => item.id !== id)
        );
    };

    // Contamos cuántas tareas están completadas.
    const completedTasks = tasks.filter((item) => item.done).length;

    // Función para actualizar el texto de una tarea
    const handleUpdateTask = (id: number, newText: string) => {
        setTasks((prev) => prev.map((item) =>
            item.id === id ? { ...item, text: newText } : item
        ));
    };

    return (
        <main className={styles.page}>
            <section className={styles.todoCard}>
                <p className={styles.eyebrow}>TO-DO LIST</p>
                <h1>Seguimiento de pendientes</h1>
                <p className={styles.subtitle}>
                    Este espacio te será de utilidad para la gestión de tus compromisos. ¡Seamos productivos!
                </p>

                <Create
                    task={task}
                    setTask={setTask}
                    handleAddTask={handleAddTask}
                />

                <Read
                    tasks={tasks}
                    completedTasks={completedTasks}
                    handleToggleTask={handleToggleTask}
                    handleDeleteTask={handleDeleteTask}
                />
            </section>
        </main>
    );
}

 