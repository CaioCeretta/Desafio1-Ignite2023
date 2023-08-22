import { enUS } from "date-fns/locale";
// import { Avatar } from "./Avatar";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from 'date-fns'
// import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import styles from "./Post.module.css";
import { FormEvent, useState } from "react";

interface ContentProps {
  type: 'paragraph' | 'link'
  content: string
}

export interface PostProps {
  author: AuthorProps;
  publishedAt: Date;
  content: ContentProps[];
}

interface AuthorProps {
  name: string;
  role: string;
  avatarUrl: string;
}

interface CommentProps {
  comment: string;
  id: number;
}

//Estado são variaveis que eu quero que o componente monitore



function addOrdinalIndicator(day: number) {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`;
    case 3: return `${day}rd`;
    default: return `${day}th`;
  }
}


export function Post({ author, publishedAt, content }: PostProps) {

  const [comments, setComments] = useState<CommentProps[]>([{ comment: 'Cool post, huh', id: 1 }])
  const [commentText, setCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'of' LLLL 'at' HH:mm'h'", {
    locale: enUS
  })


  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true
  });

  function handleCreateNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()


    setComments([...comments, { comment: commentText, id: comments.length + 1 }])

    setCommentText('');

  }


  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <p>{author.name}</p>
            <span>{author.role}</span>
          </div>
        </div>


        <time title={publishedDateFormatted} dateTime="2023-08-18 08:13:30">
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {

          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          value={commentText}
          name="comment"
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Leave a comment" />

        <footer>
          <button type="submit">Comment</button>
        </footer>

      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment.comment} />
        ))}

      </div>
    </article>
  )
}
