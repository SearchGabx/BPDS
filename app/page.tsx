"use client";
 
 
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Create from "./modules_CRUD/create";
import Read from "./modules_CRUD/read";
 
export interface Task {
    id: number;
    text: string;
    done: boolean;
}
 
 
function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
 
    const handleAddTask = (taskText: string) => {
        if (!taskText.trim()) return;
        const nuevaTarea: Task = { id: Date.now(), text: taskText.trim(), done: false };
        setTasks((prev) => [nuevaTarea, ...prev]);
    };
 
    const handleToggleTask = (id: number) => {
        setTasks((prev) => prev.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
        ));
    };
 
    const handleDeleteTask = (id: number) => {
        setTasks((prev) => prev.filter((item) => item.id !== id));
    };
 
    const handleUpdateTask = (id: number, newText: string) => {
        setTasks((prev) => prev.map((item) =>
            item.id === id ? { ...item, text: newText } : item
        ));
    };
 
    return { tasks, handleAddTask, handleToggleTask, handleDeleteTask, handleUpdateTask };
}
 
export default function Home() {
    // El estado del Input lo mantenemos en Home, pero la lógica fuerte viene del hook.
    const [task, setTask] = useState("");
   
    // Invocamos nuestro Custom Hook
    const { tasks, handleAddTask, handleToggleTask, handleDeleteTask, handleUpdateTask } = useTasks();
 
    const completedTasks = tasks.filter((item) => item.done).length;
 
    return (
        <main className={styles.page}>
            <section className={styles.todoCard}>
                <p className={styles.eyebrow}>TO-DO LIST</p>
                <h1>Seguimiento de pendientes</h1>
                <p className={styles.subtitle}>
                    Este espacio te será de utilidad para la gestión de tus compromisos. Seamos productivos!
                </p>
 
                <Create
                    task={task}
                    setTask={setTask}
                    handleAddTask={() => {
                        handleAddTask(task);
                        setTask(""); // Limpiamos el input después de agregar
                    }}
                />
 
                <Read
                    tasks={tasks}
                    completedTasks={completedTasks}
                    handleToggleTask={handleToggleTask}
                    handleDeleteTask={handleDeleteTask}
                    handleUpdateTask={handleUpdateTask}
                />
            </section>
        </main>
    );
}
 