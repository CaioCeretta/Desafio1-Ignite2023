import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
  comment: string;
  id: number;
  onDelete: (id: number) => void
}


export function Comment({comment, id, onDelete}: CommentProps) {
  const [applauses, setApplauses] = useState(0);

  function handleLikeComment() {
    setApplauses(prev => prev + 1);
  }

  function handleDelete(id: number) {
    onDelete(id);
  }


  return (

    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/caioceretta.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Caio Ceretta</strong>
              <time title="August 18th at 08:13h" dateTime="2023-08-18 08:13:30">About 1hr ago</time>
            </div>

            <button onClick={() => handleDelete(id)} title="Delete Comment">
              <Trash size={20} />
            </button>
          </header>

          <p>{comment}</p>
        </div>

        <footer>
          <button onClick={() => setApplauses(prev => prev + 1)}>
            <ThumbsUp size={24} />
            Applaud <span>{applauses}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}