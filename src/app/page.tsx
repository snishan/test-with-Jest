"use client";
import React from "react";
import PostList from "../components/PostList";
import styles from "../app/style/HomePage.module.css"; // Import the CSS module

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
