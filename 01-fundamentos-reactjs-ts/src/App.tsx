import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";

import "./global.css";
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

interface Post extends PostProps {
  id: number;
}

/*We need at all costs avoid that the backend passes a string to the front end, because doind this, we are going tomake it
way easier to leave the site vulnerable, because if a user, finds a way to leave a script tag on the file, and we show it
we will end up executing a script in our site that was another user that put it in, so for it we use some formatting
structures, this is the way we are going to do it: */

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://segredosdomundo.r7.com/wp-content/uploads/2020/05/bruce-lee-historia-artes-marciais-carreira-no-cinema-e-principais-filmes.jpg.webp",
      name: "Bruce Lee",
      role: "Martial Artist",
    },
    content: [
      { type: "paragraph", content: "Welcome guys 👋" },

      {
        type: "paragraph",
        content:
          "I just uploaded another project into my portfolio, it is a project i made NLW Return, rocketseat event. The name of the project is DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-07-02 11:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI9ixUW017lZx3zQ41MUoVamJ_2j3NFmA9acXneLIx&s",
      name: "Thiago Garcia",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Welcome guys 👋" },

      {
        type: "paragraph",
        content:
          "I just uploaded another project into my portfolio, it is a project i made NLW Return, rocketseat event. The name of the project is DoctorCare 🚀",
      },

      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-07-02 10:00:00"),
  },
];


//Evitar a todo custo que o backend retorne html

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map(post => (
            <Post
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              key={post.id} />
          ))}


        </main>
      </div>
    </>
  );
}
