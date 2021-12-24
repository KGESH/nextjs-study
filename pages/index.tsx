import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Next Project</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Main Page
        </h1>
          <Link href="/auth/signin">
              <button>Sign In</button>
          </Link>

          <Link href="/auth/signup">
              <button>Sign Up</button>
          </Link>


      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
