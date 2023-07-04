import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import {Avatar} from "./Avatar";
import { useState } from "react";

export function Comment({content, onDeleteComment}) {
  const [applausesCount, setApplausesCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {


    //Sempre que voce for atualizar uma informação e essa informação depender do valor que tinha anteriormente, ou seja, depender dela mesma, é sempre legal fazer a atualização usando esse padrão de funções
    setApplausesCount((prev) => {
      return prev + 1
    })

    /*
    Maneiras de resolver esse problema

     setApplausesCount(applausesCount + 1)
     setApplausesCount(applausesCount + 1)
    */

    // const newLikeCount = applausesCount + 1;
    // setApplausesCount(newLikeCount);
    // setApplausesCount(newLikeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false} src="https://imagens.brasil.elpais.com/resizer/efFAffvmdH_navaqaTm_vE_dRTY=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/4VUEQEUHS5UOZPD3N2K7LKWX5M.jpg"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.authorAndTime}>
            <div>
              <strong>Chuck Norris</strong>
              <time title="May 07th at 08:12" dateTime="2023-07-01 08:12:30">
                About one hour ago
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Delete Comment">
              <Trash size="24" />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Applaud<span>{applausesCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
