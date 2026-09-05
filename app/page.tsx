"use client";
 
import { useState } from "react";
import styles from "./page.module.css";
import Create from "./modules_CRUD/create";
import Read from "./modules_CRUD/read";
 
export interface Task {
    id: number;
    text: string;
    done: boolean;
}
 
export default function Home() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState<Task[]>([]);
 
    const handleAddTask = () => {
        if (!task.trim()) return;
        const nuevaTarea: Task = { id: Date.now(), text: task.trim(), done: false };
        setTasks((prev) => [nuevaTarea, ...prev]);
        setTask("");
    };
 
    const handleToggleTask = (id: number) => {
        setTasks((prev) => prev.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
        ));
    };
 
    const handleDeleteTask = (id: number) => {
        setTasks((prev) => prev.filter((item) => item.id !== id));
    };
 
    // Función para actualizar el texto de una tarea
    const handleUpdateTask = (id: number, newText: string) => {
        setTasks((prev) => prev.map((item) =>
            item.id === id ? { ...item, text: newText } : item
        ));
    };
 
    const completedTasks = tasks.filter((item) => item.done).length;
 
    return (
        <main className={styles.page}>
            <section className={styles.todoCard}> {/* Corregido para usar la clase exacta del CSS */}
                <p className={styles.eyebrow}>TO-DO LIST</p>
                <h1>Seguimiento de pendientes</h1>
                <p className={styles.subtitle}>
                    Este espacio te será de utilidad para la gestión de tus compromisos. Seamos productivos!
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
                    handleUpdateTask={handleUpdateTask} // Pasamos la nueva función a Read
                />
            </section>
        </main>
    );
}