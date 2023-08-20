import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./global.css";
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";


// const posts: Post[] = [
//   {
//     id: 1,
//     author: {
//       avatarUrl:
//         "https://segredosdomundo.r7.com/wp-content/uploads/2020/05/bruce-lee-historia-artes-marciais-carreira-no-cinema-e-principais-filmes.jpg.webp",
//       name: "Bruce Lee",
//       role: "Martial Artist",
//     },
//     content: [
//       { type: "paragraph", content: "Welcome guys 👋" },

//       {
//         type: "paragraph",
//         content:
//           "I just uploaded another project into my portfolio, it is a project i made NLW Return, rocketseat event. The name of the project is DoctorCare 🚀",
//       },

//       { type: "link", content: "jane.design/doctorcare" },
//     ],
//     publishedAt: new Date("2023-07-02 11:00:00"),
//   },
//   {
//     id: 2,
//     author: {
//       avatarUrl:
//         "https://segredosdomundo.r7.com/wp-content/uploads/2020/05/bruce-lee-historia-artes-marciais-carreira-no-cinema-e-principais-filmes.jpg.webp",
//       name: "Thiago Garcia",
//       role: "Developer",
//     },
//     content: [
//       { type: "paragraph", content: "Welcome guys 👋" },

//       {
//         type: "paragraph",
//         content:
//           "I just uploaded another project into my portfolio, it is a project i made NLW Return, rocketseat event. The name of the project is DoctorCare 🚀",
//       },

//       { type: "link", content: "jane.design/doctorcare" },
//     ],
//     publishedAt: new Date("2023-07-02 10:00:00"),
//   },
// ];


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
        <Post />
        <Post />

        <Post />
        <Post />

        </main>
      </div>
    </>
  );
}
