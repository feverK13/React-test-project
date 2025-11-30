import styles from './Button.module.css'

export default function Button({ className, variant, children, ...props }) {
  let buttonStyles = `${styles.button} ${className || ''}`
  if (variant === 'outline') {
    buttonStyles += ` ${styles.outlineButton}`
  }
  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}
