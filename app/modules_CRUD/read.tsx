import { useState } from "react";
import styles from "../page.module.css";
import { Task } from "../page";
import Update from "./update";
import Delete from "./delete";


export default function Read({ tasks, deletedTasks, completedTasks, handleToggleTask, handleDeleteTask, handleUpdateTask, handlePermanentDeleteTask }: any) {
    const [isTrashOpen, setIsTrashOpen] = useState(false);

    return (
        <div>
            {tasks.length === 0 ? (
                <div className={styles.emptyState}>Buen trabajo, chicos. Tomen un descanso!</div>
            ) : (
                <ul className={styles.taskList}>
                    {tasks.map((item: Task) => (
                        <li key={item.id} className={styles.taskItem}>
                            <Update item={item} handleToggleTask={handleToggleTask} handleUpdateTask={handleUpdateTask} />
                            <Delete item={item} handleDeleteTask={handleDeleteTask} />
                        </li>
                    ))}
                </ul>
            )}
            <div className={styles.taskHeader}>
                <h2>Tareas</h2>
                <span>({completedTasks}/{tasks.length})</span>
            </div>
            
            {deletedTasks && (
                <div style={{ marginTop: '24px', backgroundColor: '#fff1f2', borderRadius: '12px', border: '1px solid #ffe4e6', overflow: 'hidden' }}>
                    <div 
                        onClick={() => setIsTrashOpen(!isTrashOpen)}
                        style={{ 
                            padding: '16px', 
                            cursor: 'pointer', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            fontWeight: '600',
                            color: '#be123c',
                            userSelect: 'none'
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src="/OA-LOGO.svg" alt="Logo Opción Atlántico" style={{ height: '24px', width: 'auto' }} />
                            <span>Papelera ({deletedTasks.length})</span>
                        </div>
                        <span style={{ fontSize: '0.8em', transition: 'transform 0.2s', transform: isTrashOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                            ▼
                        </span>
                    </div>
                    
                    {isTrashOpen && (
                        <div style={{ padding: '0 16px 16px' }}>
                            {deletedTasks.length === 0 ? (
                                <div style={{ color: '#be123c', textAlign: 'center', padding: '10px 0', fontSize: '0.9em' }}>
                                    No hay tareas eliminadas aún.
                                </div>
                            ) : (
                                <ul className={styles.taskList}>
                                    {deletedTasks.map((t: Task) => (
                                        <li key={t.id} className={styles.taskItem} style={{ backgroundColor: '#fff', borderColor: '#ffe4e6' }}>
                                            <div style={{ flex: 1, textDecoration: t.done ? 'line-through' : 'none', color: '#667085', wordBreak: 'break-word' }}>
                                                {t.text}
                                            </div>
                                            <div className={styles.actions}>
                                                <button 
                                                    className={styles.deleteButton} 
                                                    onClick={() => handlePermanentDeleteTask(t.id)}
                                                >
                                                    Eliminar definitivamente
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
