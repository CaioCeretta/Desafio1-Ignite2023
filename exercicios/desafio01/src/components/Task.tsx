import { BiRadioCircle } from "react-icons/bi";
import { MdCircle } from "react-icons/md";
import styles from "./Task.module.css";
import { Trash } from "phosphor-react";
import { MouseEvent } from "react";

interface TaskProps {
  task: {
    id: string;
    title: string;
    status: boolean;
  }
  onDeleteTask: (title: string) => void
  onComplete: (id: string) => void
}

export default function Task({ task, onDeleteTask, onComplete }: TaskProps) {
  function handleDeleteComment(title: string) {
    onDeleteTask(title);
  }

  function handleToggleTaskStatus(id: string) {
    onComplete(id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.iconStyles}>
        <span className={styles.status}>
          {task.status === false ? (
            <button onClick={() => handleToggleTaskStatus(task.id)}  className={styles.todo}>
            <BiRadioCircle size={40} />
            </button>
          ) : (
            <button onClick={() => handleToggleTaskStatus(task.id)} className={styles.done}>
            <MdCircle  size={40}/>
            </button>
          )}
        </span>
        <span className={styles.title} >{task.title}</span>
      </div>
      <button className={styles.btnTrash} onClick={() => handleDeleteComment(task.title) }>
        <Trash size={20} />
      </button>
    </div>
  );
}
