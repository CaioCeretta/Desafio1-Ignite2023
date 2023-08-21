import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {

  return (
    <div className={styles.comment}>
      <img src="https://github.com/caioceretta.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio Ceretta</strong>
              <time title="August 18th at 08:13h" dateTime="2023-08-18 08:13:30">About 1hr ago</time>
            </div>

            <button title="Delete Comment">
              <Trash size={20} />
            </button>
          </header>

          <p>Well done, Chuck! Congratulations</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={24} />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}