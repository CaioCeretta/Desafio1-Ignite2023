import { enUS } from "date-fns/locale";
import {Avatar} from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { formatDistanceToNow} from 'date-fns'
import { useState } from "react";

// author: {name, content, avatarUrl}
// publishedAt: Date
// content: string

function addOrdinalIndicator(day) {
  if (day > 3 && day < 21) return `${day}th`;
  switch (day % 10) {
    case 1: return `${day}st`;
    case 2: return `${day}nd`;
    case 3: return `${day}rd`;
    default: return `${day}th`;
  }
}

const options = { month: 'long', day: 'numeric', year: 'numeric'}

export function Post({author, publishedAt, content}) {

  const [comments, setComments] = useState(['Very cool post, huh?'])
  const [newCommentText, setNewCommentText] = useState('')

  
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(publishedAt));
  const parts = formattedDate.split(' ');
  parts[1] = addOrdinalIndicator(parseInt(parts[1]));

  const finalDate = parts.join(' ');

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true
  });

  function handleCreateNewComment() {
    event.preventDefault()

    const newCommentsText = event.target.comment.value

    setComments([...comments, newCommentsText])

    setNewCommentText('');
  }

  function handleNewCommentChange() {
    console.log(event.target.value)

    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid() {
     event.target.setCustomValidity('This field is required');
  }

  function deleteComment(commentToDelete) {
    // As variáveis não sofrem mutaçã́o, nao alteramos o valor de uma variável na memória, e sim criamos um novo espaço na memória. Como o react compara as variaveis para ver se elas mudaram de valor ou não, criar um novo valor na memória é mais rápido do que fazer essa verificação de ver se o valor mudou, não mudou, coisas do tipo, então criando um novo valor na memória, o react terá duas versões da variável para ver o que mudou e o que não mudou, diferente de alterar diretamente o valor na posição que está, sendo que aí não existe mais uma fonte de comparação, então o ideal na deleção é criar uma nova lista de comentários sem o comentário que foi removido

    const commentsWithoutDeletedOne = comments.filter(comment => commentToDelete !== comment)

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={finalDate} dateTime="2023-07-02 08:12:30">
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
          {content.map(line => {
            if(line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            } else if(line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>
        <textarea
          name="comment"
          placeholder="Leave a comment" 
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentChange}
          required
        />

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}

      </div>
    </article>
  );
}
