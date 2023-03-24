import Image from 'next/image'
import Link from 'next/link'
import styles from './/layout.module.css'

function Procedures() {
  return (
    <div className={styles.procedures}>
          <div className={styles.procedure}>
            <img className={styles.img} src="/images/casual-life-3d-young-man-in-orange-headphones-sitting-at-green-table-and-using-computer.png" alt=""/>
            <div className={styles.div}>
                <h2>Submit your resume</h2>
                <p>We put your resume through our intelligent parser that has the ability to extract key skills from various parts of your resume</p>
                {/* <button>Sign up</button> */}
            </div>
          </div>
          <div className={styles.procedure}>
            
            <div className={styles.div}>
                <h2>View personalized recommendations</h2>
                <p> View personalized job recommendations based on your skills that we extracted from your resume. The platform might also suggest whart new 
                  skills you could potentially learn to level up your professional standing and get your desired job.
                </p>
                {/* <button>Sign up</button> */}
            </div>
            <img className={styles.img}  src="/images/casual-life-3d-woman-works-on-laptop-sitting-on-the-floor.png" alt=""/>
          </div>
          <div className={styles.procedure}>
            <img className={styles.img}  src="/images/casual-life-3d-young-man-holding-blue-smartphone.png" alt=""/>
            <div className={styles.div}>
                <h2>Apply for the recommended jobs</h2>
                <p>You have now been intelligently matched with a few jobs according to your skill set.
                  Go ahead and apply directly on the 

</p>
                
            </div>
          </div>
      </div>
  )
}

export default Procedures