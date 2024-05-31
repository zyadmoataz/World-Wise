/* eslint-disable react/no-unescaped-entities */
// Uses the same styles as Product
import styles from "./Resources.module.css";
import PageNav from "../components/PageNav";
import {
  HiOutlineBookOpen,
  HiOutlineClipboardList,
  HiOutlineDeviceMobile,
  HiOutlineShieldCheck,
  HiOutlineLink,
  HiOutlineGlobeAlt,
} from "react-icons/hi";

export default function Resources() {
  return (
    <main className={styles.recource}>
      <PageNav />
      <h2>Voyage Vistas Resources</h2>
      <section className={styles.resourcesSection}>
        <div className={styles.resourceItem}>
          <HiOutlineBookOpen className={styles.icon} />
          <h3>Travel Guides</h3>
          <p>
            Explore comprehensive travel guides for top destinations worldwide.
            From must-see attractions to local hidden gems, these guides have
            got you covered. Whether you're planning a city break or a
            countryside escape, our guides will help you make the most of your
            journey.
          </p>
        </div>
        <div className={styles.resourceItem}>
          <HiOutlineClipboardList className={styles.icon} />
          <h3>Packing Checklists</h3>
          <p>
            Ensure you have everything you need with our detailed packing
            checklists. Customize them based on your destination, travel style,
            and personal preferences. Never forget an essential item again and
            travel with peace of mind.
          </p>
        </div>
        <div className={styles.resourceItem}>
          <HiOutlineDeviceMobile className={styles.icon} />
          <h3>Recommended Apps</h3>
          <p>
            Discover the best apps for travel planning, navigation, language
            translation, and more. These apps will help you make the most of
            your journey, providing tools and information at your fingertips to
            enhance your travel experience.
          </p>
        </div>
        <div className={styles.resourceItem}>
          <HiOutlineShieldCheck className={styles.icon} />
          <h3>Safety Tips</h3>
          <p>
            Stay safe during your travels with our essential safety tips. Learn
            how to protect yourself and your belongings while exploring new
            places. From health precautions to staying aware of your
            surroundings, we've got the tips you need.
          </p>
        </div>
        <div className={styles.resourceItem}>
          <HiOutlineLink className={styles.icon} />
          <h3>Useful Websites</h3>
          <p>
            Find links to useful websites for booking flights, accommodation,
            tours, and more. These resources will make planning your trip a
            breeze, providing reliable and user-friendly platforms to help you
            organize every aspect of your travel.
          </p>
        </div>
        <div className={styles.resourceItem}>
          <HiOutlineGlobeAlt className={styles.icon} />
          <h3>Interactive Map</h3>
          <p>
            View an interactive map marking all the countries and cities you
            have visited. Use the map to visualize your travels, add notes, and
            find additional information and links to Wikipedia for each place.
            Share your travel map with friends and inspire others with your
            adventures.
          </p>
        </div>
      </section>
    </main>
  );
}
