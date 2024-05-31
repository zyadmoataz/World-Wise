/* eslint-disable react/no-unescaped-entities */
import styles from "./TravelBlog.module.css";
import PageNav from "../components/PageNav";
import { HiChevronRight } from "react-icons/hi";

export default function TravelBlog() {
  return (
    <main className={styles.product}>
      <PageNav />
      <div className={styles.h2Container}>
        <h2>Exploring Local Cultures and Festivals</h2>
      </div>
      <section>
        <img
          src='img-6.jpg'
          alt='colorful festival in a local village'
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h3>Discovering Hidden Gems: Local Festivals and Cultural Events</h3>
          <p>
            One of the most enriching aspects of travel is experiencing the
            local culture and participating in traditional festivals. Whether
            it's the vibrant cherry blossom festivals in Japan or the colorful
            Carnivals in Italy, these events offer a unique glimpse into the
            heart of the community. Share your stories of attending these
            festivals, the traditions you learned, and the people you met.
          </p>
        </div>
      </section>
      <hr />
      <div className={styles.h2Container}>
        <h2>Journey Chronicles</h2>
      </div>
      <section>
        <img
          src='img-3.jpg'
          alt='person with dog overlooking mountain with sunset'
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h3>Adventures in Japan: A Journey Through Time and Tradition</h3>
          <p>
            Immerse yourself in the tranquility of Kyoto's renowned Zen gardens,
            where meticulously raked gravel and thoughtfully placed stones
            create a sense of peace and balance. Share your reflections on the
            meditative experience of strolling through these serene landscapes,
            and highlight the cultural significance of Zen philosophy in
            Japanese daily life. Enhance your narrative with detailed maps.
          </p>
        </div>
      </section>
      <section>
        <img
          src='img-4.jpg'
          alt='person with dog overlooking mountain with sunset'
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h3>A Taste of Italy: Culinary Delights and Scenic Sights</h3>
          <p>
            Dive into the world of Italian desserts by participating in a
            gelato-making workshop in the heart of Florence. Learn from master
            gelatieri the secrets behind crafting the perfect gelato, and savor
            the rich, creamy flavors of this beloved treat. Complement your
            culinary adventure with visits to local markets where you can
            discover fresh ingredients and artisanal products. Capture the
            vibrant colors.
          </p>
        </div>
      </section>
      <section>
        <img
          src='img-2.jpg'
          alt='person with dog overlooking mountain with sunset'
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h3>Icelandic Escapades: Natural Wonders and Nordic Charm</h3>
          <p>
            Discover the breathtaking landscapes and natural wonders of Iceland
            by exploring the famous Golden Circle route. Begin your adventure at
            the majestic Þingvellir National Park, where the North American and
            Eurasian tectonic plates meet. Marvel at the powerful Gullfoss
            waterfall, which cascades into a rugged canyon, and feel the
            geothermal energy at the Geysir geothermal area, where hot springs
            erupt dramatically.
          </p>
        </div>
      </section>
      <hr />
      <div className={styles.h2Container}>
        <h2>Travel Tips</h2>
      </div>
      <section>
        <img
          src='img-5.jpg'
          alt='person with dog overlooking mountain with sunset'
          className={styles.image}
        />
        <div className={styles.tripContainer}>
          <h3>Essential Travel Tips for a Smooth Journey</h3>
          <p>
            To ensure a seamless and enjoyable travel experience, it's crucial
            to have all your belongings organized and accounted for. Using a
            reliable travel planning tool like Trip Planner can help you manage
            your luggage, keep track of your itinerary, and ensure you don't
            forget any essentials.
          </p>
          <a
            href='https://travel-packing-list-two.vercel.app/'
            target='_blank'
            rel='noreferrer'
            className={styles.btn}
          >
            <span>Visit Trip Planner</span>
            <span className={styles.icon}>
              <HiChevronRight />
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
