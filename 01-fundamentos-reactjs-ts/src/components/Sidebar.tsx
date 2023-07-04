import { PencilLine } from "phosphor-react";
import styles from "./Sidebar.module.css";
import {Avatar} from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=500"
        alt="coding"
      />

      <div className={styles.profile}>
        <Avatar src="https://imagens.brasil.elpais.com/resizer/efFAffvmdH_navaqaTm_vE_dRTY=/1200x0/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/4VUEQEUHS5UOZPD3N2K7LKWX5M.jpg" />

        <strong>Chuck Norris</strong>
        <span>Tudo</span>
      </div>

      <footer>
        <a href="#">
          {" "}
          <PencilLine size={20} />
          Edit your profile
        </a>
      </footer>
    </aside>
  );
}
