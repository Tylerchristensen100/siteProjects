import Image from 'next/image'
import styles from './page.module.css'
import Table from 'src/app/components/table.js'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Attendance</h1>
        <Table />
      </main>
    </>
    
  )
}
