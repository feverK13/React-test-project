import styles from './Button.module.css'

export default function Button({ className, variant, children, ...props }) {
  let buttonStyles = `${styles.button} ${className || ''}`
  if (variant === 'outline') {
    buttonStyles += ` ${styles.outlineButton}`
  } else if (variant === 'navItem') {
    buttonStyles = ` ${styles.navItemButton}`
  }
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}
