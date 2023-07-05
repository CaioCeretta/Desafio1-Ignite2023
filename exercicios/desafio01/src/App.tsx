
import Header from './components/Header'

import styles from './App.module.css'

import Tasks from './components/Tasks'
import './global.css'

interface TaskProps {
  task: string;
  status: boolean;
}

export function App() {


  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Tasks />
      </div>
    </>
  )
}

