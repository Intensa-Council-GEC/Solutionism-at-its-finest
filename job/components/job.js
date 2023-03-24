import Link from 'next/link'

import styles from './layout.module.css'

function Job( {job}) {
    return (

    <div className={styles.job}>
     <div className={styles.jobMain}> 
        <h2>{job.job_title}</h2>
        <h3>{job.employer_name}</h3>
        <div className={styles.location}>
        <img src="https://img.icons8.com/material-outlined/96/D3D3D3/marker.png"/>
        <h5>{job.job_city}, {job.job_country}</h5>
        </div>
        <h4>Relevant skills:</h4>
            
        <div className={styles.tags}>
        <div className={styles.tag}>Python</div>
        <div className={styles.tag}>C++</div>

        </div> <br/>
         <p>{job.job_description}</p>
         </div>  
         <a href={job.job_apply_link} className={styles.applynow}>Apply now</a>
    </div>
      
  
   
        
        
    )
}
export default Job
