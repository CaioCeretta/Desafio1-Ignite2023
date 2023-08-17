import {v4 as uuid} from 'uuid'
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";


import styles from "./Tasks.module.css";
import Task from "./Task";

interface TaskProps {
  id: string;
  title: string;
  status: boolean;
}

export default function Tasks() {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [taskInput, setTaskInput] = useState('');

  const completedTasksCount = tasks.filter(task => task.status === true)

  function handleAddNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, {id: uuid(), title: taskInput, status: false}])
  }

  function handleTaskComplete(id: string) {
      setTasks((prevTasks) => 
        prevTasks.map((task) => 
          task.id === id ? {...task, status: !task.status} : task
      )
    );
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTaskInput(event.target.value);
  }

  function deleteTask(title: string) {
    const tasksWithoutDeletedOne = tasks.filter(taskToDelete => taskToDelete.title !== title);

    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleAddNewTask}>
        <input
          type="text"
          name="todo"
          className={styles.input}
          onChange={handleNewTaskChange}  
        />

        <button type="submit" className={styles.button}>
          Criar <PlusCircle size={20} />{" "}
        </button>
      </form>

      <section className={styles.container}>
        <div className={styles.header}>
          <p className={styles.createdTasks}>
            Tarefas Criadas <span className="tasksCount">{tasks.length}</span>
          </p>
          <p className={styles.concludedTasks}>
            Concluídas <span className="tasksCount">{completedTasksCount.length}</span>
          </p>
        </div>
        <div className={styles.taskList}>
          {tasks.map(task => (
            <Task key={task.id} onDeleteTask={deleteTask} onComplete={handleTaskComplete} task={task}/>
          ))}
        </div>
      </section>
    </>
  );
}
