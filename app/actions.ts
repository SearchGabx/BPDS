import type { Task } from "./page";

const STORAGE_KEY = "bpds_tasks";

// Leer tareas desde localStorage
export function getTasks(): Task[] {
    if (typeof window === "undefined") {
        return [];
    }
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            return [];
        }
        return JSON.parse(data) as Task[];
    } catch (error) {
        console.error("Error leyendo desde localStorage:", error);
        return [];
    }
}

// Guardar tareas en localStorage
export function saveTasks(tasks: Task[]): void {
    if (typeof window === "undefined") {
        return;
    }
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
        console.error("Error guardando en localStorage:", error);
    }
}
