"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Create from "./modules_CRUD/create";
import Read from "./modules_CRUD/read";
import { getTasks, saveTasks } from "./actions"; // Integración de persistencia JSON

export interface Task {
    id: number;
    text: string;
    done: boolean;
    isDeleted?: boolean;
}

function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [deletedTasks, setDeletedTasks] = useState<Task[]>([]);
    const [isLoaded, setIsLoaded] = useState(false); // Estado para saber si ya cargó el JSON

    // Cargar las tareas desde el JSON al montar el componente
    useEffect(() => {
        getTasks().then((loadedTasks) => {
            if (loadedTasks) {
                const active = loadedTasks.filter((t: Task) => !t.isDeleted);
                const deleted = loadedTasks.filter((t: Task) => t.isDeleted);
                setTasks(active);
                setDeletedTasks(deleted);
            }
            setIsLoaded(true);
        });
    }, []);

    // Guardar en el JSON cada vez que tasks o deletedTasks cambian
    useEffect(() => {
        if (isLoaded) {
            saveTasks([...tasks, ...deletedTasks]);
        }
    }, [tasks, deletedTasks, isLoaded]);

    const handleAddTask = (taskText: string) => {
        if (!taskText.trim()) return;
        const nuevaTarea: Task = { id: Date.now(), text: taskText.trim(), done: false, isDeleted: false };
        setTasks((prev) => [nuevaTarea, ...prev]);
    };

    const handleToggleTask = (id: number) => {
        setTasks((prev) => prev.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
        ));
    };

    const handleDeleteTask = (item: Task) => {
        const deletedItem = { ...item, isDeleted: true };
        setDeletedTasks((prev) => [deletedItem, ...prev]);
        setTasks((prev) => prev.filter((t) => t.id !== item.id));
    };

    const handleUpdateTask = (id: number, newText: string) => {
        setTasks((prev) => prev.map((item) =>
            item.id === id ? { ...item, text: newText } : item
        ));
    };

    const handlePermanentDeleteTask = (id: number) => {
        setDeletedTasks((prev) => prev.filter((t) => t.id !== id));
    };

    return { tasks, deletedTasks, handleAddTask, handleToggleTask, handleDeleteTask, handleUpdateTask, handlePermanentDeleteTask };
}

export default function Home() {
    // El estado del Input lo mantenemos en Home, pero la lógica fuerte viene del hook.
    const [task, setTask] = useState("");

    // Invocamos nuestro Custom Hook
    const { tasks, deletedTasks, handleAddTask, handleToggleTask, handleDeleteTask, handleUpdateTask, handlePermanentDeleteTask } = useTasks();

    const completedTasks = tasks.filter((item) => item.done).length;

    return (
        <main className={styles.page}>
            <section className={styles.todoCard}>
                <img
                    className={styles.logo}
                    src="/OA-LOGO.svg"
                    alt="Logo de Opción Atlántico"
                />
                <p className={styles.eyebrow}>Lista de Tareas Opción Atlántico</p>
                <h1>Seguimiento de pendientes en la beca institucional</h1>
                <p className={styles.subtitle}>
                    Este espacio será de utilidad para la gestión de los compromisos de la mesa directiva del programa de becas Opción Atlántico.
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
                    deletedTasks={deletedTasks}
                    completedTasks={completedTasks}
                    handleToggleTask={handleToggleTask}
                    handleDeleteTask={handleDeleteTask}
                    handleUpdateTask={handleUpdateTask}
                    handlePermanentDeleteTask={handlePermanentDeleteTask}
                />
            </section>
        </main>
    );
}
