import Image from 'next/image'
import Link from 'next/link'
import styles from './/layout.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <h3>
        ©SIRIS
            
        </h3>
        <p>
            Built by team Solutionism at its finest on NextJS
        </p>
    </footer>
  )
}

export default Footer