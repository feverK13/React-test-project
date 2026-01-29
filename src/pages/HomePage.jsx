import QuoteBlock from '../components/home/QuoteBlock'
import Button from '../components/ui/Button.jsx'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.homeHeader}>
        <div className={styles.headerInfo}>
          <h1 className={styles.headerTitle}>Arete</h1>
          <p className={styles.headerSubtitle}>Реалізовуйте свої мрії через пристрасть та гру</p>
        </div>

        <div className={styles.headerActions}>
          <QuoteBlock />
          <Button children='До Завдань' />
        </div>
      </header>

      <main className={styles.homeWorkspace}></main>
    </div>
  )
}
