import Image from 'next/image'
import styles from './page.module.css'
import Home from "@/app/home/page";
import Link from "next/link";

export default function page() {
  return (
    <main className={styles.main}>
        <div>
            <Home/>
        </div>
    </main>
  )
}
