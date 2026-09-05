"use server";
import fs from "fs";
import path from "path";

// Definimos la ruta del archivo JSON donde persistirán los datos
const dataFilePath = path.join(process.cwd(), "data.json");

// Leer tareas desde el archivo JSON
export async function getTasks() {
    try {
        if (!fs.existsSync(dataFilePath)) {
            // Creamos el archivo si no existe
            fs.writeFileSync(dataFilePath, JSON.stringify([]));
        }
        const data = fs.readFileSync(dataFilePath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error leyendo JSON:", error);
        return [];
    }
}

// Escribir tareas al archivo JSON
export async function saveTasks(tasks: any[]) {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(tasks, null, 2));
    } catch (error) {
        console.error("Error escribiendo JSON:", error);
    }
}
