"use client";
import InstructionsComponent from "../components";
import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <InstructionsComponent></InstructionsComponent>
    </main>
  );
}
