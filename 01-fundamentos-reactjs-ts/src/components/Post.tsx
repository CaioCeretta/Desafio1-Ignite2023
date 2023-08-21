// import { enUS } from "date-fns/locale";
// import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
// import { format, formatDistanceToNow } from 'date-fns'
// import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./Post.module.css";

interface AuthorProps {
  author: string
  content: string
}

function addOrdinalIndicator(day: number) {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`;
    case 3: return `${day}rd`;
    default: return `${day}th`;
  }
}

export function Post() {

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://imagens.brasil.elpais.com/resizer/efFAffvmdH_navaqaTm_vE_dRTY=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/4VUEQEUHS5UOZPD3N2K7LKWX5M.jpg" alt="" />
          <div className={styles.authorInfo}>
            <p>Chuck Norris</p>
            <span>Tudo</span>
          </div>
        </div>


        <time title="August 18th at 08:13h" dateTime="2023-08-18 08:13:30">Published 1hr ago</time>
      </header>
      <div className={styles.content}>
        <p>
          What's up guys! 👐
        </p>
        <p>I just finished one more project in my portifolio. It's a project i made on NLW Return, rocketseat's event</p>

        <p>⤴ <a href="#">chuck.design/doctorcare </a></p>

        <a href="">#JS</a> <a href="">#React</a>
      </div>

      <form action="" className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave a comment" />

        <footer>
          <button type="submit">Comment</button>
        </footer>

      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
