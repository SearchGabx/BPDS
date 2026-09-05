"use client";
import { useState } from "react";
import styles from "../page.module.css";
 
export default function Update({ item, handleToggleTask, handleUpdateTask }: any) {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(item.text);
 
    const handleSave = () => {
        if (editText.trim() && editText !== item.text) {
            handleUpdateTask(item.id, editText.trim());
        } else {
            setEditText(item.text);
        }
        setIsEditing(false);
    };
 
    if (isEditing) {
        return (
            <div style={{ display: 'flex', gap: '8px', flex: 1, width: '100%' }}>
                <input
                    type="text"
                    className={styles.editInput}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                />
                <button className={styles.saveButton} onClick={handleSave}>Guardar</button>
            </div>
        );
    }
 
    return (
        <div className={styles.taskLabel}>
            <input type="checkbox" checked={item.done} onChange={() => handleToggleTask(item.id)} />
            <span className={item.done ? styles.completed : ""}>{item.text}</span>
            <button className={styles.saveButton} onClick={() => setIsEditing(true)}>Editar</button>
        </div>
    );
}
 