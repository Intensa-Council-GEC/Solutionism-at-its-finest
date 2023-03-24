import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Job from '../components/job'
import jobs from '../sampledata/jobs'
import styles from '../components/layout.module.css'
import Layout from "../components/layout";

  
       
  export default function Jo() {

       
      return (
        <Layout>
        <div className={styles.searchContainer}>
     <input onkeyup="search()" id="searchInput" onclick="search()" type="text" placeholder="Search query" className={styles.searchbox}></input>   
     </div>
    <div className={styles.jobsContainer}>
      
        {jobs.map((job) => {
          return (
            <Job job={job}/>
          )
        })}
        
    </div>
    <script
          src="../escripts/search.js"
          crossorigin="anonymous"
          
        ></script>
    </Layout>
      )
    }
    
  //   export async function getServerSideProps(context) {
       

  //   // const [jobs, setJobs] = useState([]);
  //   // useEffect(() => {         
  //   //     fetchJobs();
  //   // });
    
  //   const options = {
  //       method: 'GET',
  //       headers: {
  //           'X-RapidAPI-Key': 'c9acd4ce83msh7baf954d09f61f8p14fb22jsn8033f720c704',
  //           'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  //       }
  //   };

           
  //   const query=context.query.query
    
    
                
  //                   const res = await fetch(`https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20India%2C%20USA&page=1&num_pages=3`, options);
  //                   const data = res.json();
  //                   const jobs=data.data
                 
               
        
      
      
  //     return {
        
  //       props: {
  //         jobs: jobs,
  //       },
  //     };
    
  // }
   
  