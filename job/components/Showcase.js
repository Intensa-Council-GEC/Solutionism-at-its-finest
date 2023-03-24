import Image from 'next/image'
import Link from 'next/link'
import styles from './/layout.module.css'
function Showcase() {
  return (
   <>
    <div className={styles.hero}>
  <h1>A career's an adventure, we help you pick your next destination</h1>
    </div>
    <div className={styles.showcase}>
          
          <div>
              <h2>India's first intelligent job aggregator</h2>
              <p>
              Our platform brings together job postings from various sources and presents them in one easy-to-use interface.

With our platform, job seekers can easily search for jobs based on location, industry, experience level, and more. They can also set up job alerts and receive notifications when new job openings matching their criteria are posted.

              </p>
              <Link href="/jobs">  
              <a><button>Explore</button></a>
              </Link>
              
          </div>
          <img  className={styles.img} src="/images/dazzle-line-man-looks-at-the-resumes-of-candidates-for-a-vacancy.gif" alt=""/>
      </div>
      </> 
  )
}

export default Showcase