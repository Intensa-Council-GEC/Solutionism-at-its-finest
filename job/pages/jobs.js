import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Job from '../components/job'
import styles from '../components/layout.module.css'
import Layout from "../components/layout";

export default function Jobs() {
    const router = useRouter();
    const [jobs, setJobs] = useState([]);
    useEffect(() => {         
      fetchJobs();
      setJobs([])
  });
    
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '61853b4c78msh6a44eeac9d756edp1605bbjsn63fc348a0bdb',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

    let fetchJobs = () => {
      const res = fetch('https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20India%2C%20USA&page=1&num_pages=1', options);
      // const res = fetch('job/sampledata.json');
      console.log(res)
      const data = res.json();
      // console.log(data.data)
  
      setJobs(data.data)
      
      // setJobs(data);
};         
            

            
           
          
  return (
    <Layout>
       
    <div className={styles.jobsContainer}>
        {jobs.map((item) => {
        
            
            <Job job={item}/>
          
        })}
        
    </div>
  
    </Layout>
    
  )
 
}
