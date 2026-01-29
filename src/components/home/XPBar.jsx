import { useState } from 'react'

import styles from './XPBar.module.css'

export default function XPBar({ updateXp, currentLvl }) {
  return (
    <div className={styles.xpBarFrame}>
      <div className={styles.xpStats}>
        <p className={styles.levelStat}></p>
        <p className={styles.totalXpStat}></p>
      </div>

      <div className={styles.xpFill}></div>
    </div>
  )
}
