/* eslint-disable no-irregular-whitespace */
import { Link } from "react-router-dom";
import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <video className={styles.videoBackground} autoPlay loop muted>
        <source src='/bg.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
      <section>
        <PageNav />
        <h1>
          Explore The Globe.
          <br />
          Voyage Vistas Chronicles Your Journey.
        </h1>

        <h2>
          Discover a dynamic world map that traces every city you’ve explored.
          <br />
          Relive your unforgettable adventures and share your global escapades
          with friends.
        </h2>

        <Link to='/login' className='cta'>
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}
