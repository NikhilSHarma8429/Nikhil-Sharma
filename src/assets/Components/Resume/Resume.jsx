import React from 'react'
import ResumeCSS from './Resume.module.css'

function Resume() {
  return (
    <>
      <div className="content-container">
        <div className="header-container" id={ResumeCSS.headerContainer}>
          <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ margin: '0' }}>Nikhil Sharma</h1>
            <p style={{ margin: '0' }}>Kalyanpur Khurd, Kanpur, Uttar Pradesh</p>
            <p style={{ margin: '0' }}>sharma842nikhil@gmail.com</p>
            <p style={{ margin: '0' }}>+91 8429770705</p>
          </div>
          <div>
            <img src="https://path-to-psit-logo" alt="PSIT Logo" style={{ height: '80px' }} />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <a href="https://github.com/NikhilSHarma8429" target="_blank"style={{ marginRight: '10px' }}>GitHub</a>
          <a href="https://www.linkedin.com/in/nikhil-sharma-4a599221b/" target="_blank"style={{ marginRight: '10px' }}>LinkedIn</a>
          <a href="https://leetcode.com/u/sharma842nikhil/" target="_blank">LeetCode</a>
        </div>
        <h2>Education</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Degree/Certificate</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Institute/Board</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>CGPA/Percentage</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>B.Tech. (CSE)</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Pranveer Singh Institute of Technology, Kanpur</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>7.5</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>2021-2025</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Class XII</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Gaurav Memorial International School (CBSE)</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>84.6%</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>2020</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px' }}>Class X</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>Gaurav Memorial International School (CBSE)</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>85.2%</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>2018</td>
            </tr>
          </tbody>
        </table>
        <h2>Projects</h2>
        <div>
          <h3>Social Media Comments Sentiment Analyzer (Ongoing)</h3>
          <p>Enhanced content quality by providing sentiment-based engagement insights between audience and creator.</p>
          <ul>
            <li>Analyze social media comments into different categories and provide ratio of them, comment categories are like Positive Comment, Negative Comment, Neutral Comment.</li>
            <li>Through Machine Learning and Artificial Intelligence provide suggestions for improving the content.</li>
            <li>Processed and analyzed over 10,000 comments during the development and testing phases.</li>
            <li>ReactJS, NodeJS, Python, CSS, Google Colab, Numpy, Pandas, NLTK, Scikit-learn.</li>
          </ul>
        </div>
        <div>
          <h3>FitSportChamp Website <a href="https://fitsportchamp.vercel.app/">(Live URL)</a> | <a href="https://github.com/NikhilSHarma8429/fitsportchamp">Github</a></h3>
          <p>Providing users with comprehensive fitness and sports content.</p>
          <ul>
            <li>Developed a project for the GFG Solving for India Hackathon 2023, with participation from over 100 colleges.</li>
            <li>Offered diverse reading materials on 6+ exercises and 6+ sports to enhance user’s physical fitness and diet.</li>
            <li>Created and formatted 12+ articles and tutorials on fitness and sports, showcasing a wide range of topics.</li>
            <li>HTML, CSS, and Wordpress.</li>
          </ul>
        </div>
        <div>
          <h3>YouTube And Spotify Clone with YouTube videos downloader <a href="https://all-in-one-vercel.vercel.app/">(Live URL)</a> | <a href="https://github.com/NikhilSHarma8429/Youtube-And-Spotify-Clone">Github</a></h3>
          <p>Built a multifunctional platform for video streaming, downloading, and music playback.</p>
          <ul>
            <li>Designed to replicate YouTube and Spotify functionalities, including video streaming and music playback.</li>
            <li>Enabled users to watch and download YouTube videos, and listen to music seamlessly, increasing user retention by 40%.</li>
            <li>Integrated YouTube Data API and Spotify API, with a user-friendly interface created using Bootstrap, leading to a 50% reduction in bounce rate.</li>
            <li>HTML, CSS, JavaScript, and BootStrap.</li>
          </ul>
        </div>
        <h2>Key Courses Taken</h2>
        <ul>
          <li>Data Structure, Algorithms, DBMS, Machine Learning, Artificial Intelligence, Web Services, Operating System.</li>
        </ul>
        <h2>Technical Skills</h2>
        <ul>
          <li><strong>Programming:</strong> C/C++, Python, JavaScript, SQL.</li>
          <li><strong>Tools & OS:</strong> Git, Jupyter Notebook, Google Colab, Windows.</li>
          <li><strong>Libraries/Frameworks:</strong> Pandas, Numpy, scikit-learn, JQuery.</li>
          <li><strong>Web Skills:</strong> HTML/CSS/JS, ReactJS.</li>
          <li><strong>Databases:</strong> MySql, MongoDB.</li>
        </ul>
        <h2>Achievements</h2>
        <ul>
          <li>Secured 569th Rank in TCS Codevita Season 11</li>
          <li>Solved Total 600+ Problems including all coding platforms</li>
          <li>Solved 470+ Problems on Leetcode</li>
          <li>Achieved a Contest Rating of 1604 on Leetcode, ranking in the top 21% of users</li>
          <li>Global Ranking of 115,080/538,088 in Leetcode</li>
        </ul>
        <h2>Certifications</h2>
        <ul>
          <li>CSS, JavaScript And Python Complete Course (Udemy)</li>
          <li>JavaScript (Infytq)</li>
          <li>Programming Fundamentals Using Python (Part 1 & Part 2) (Infytq)</li>
          <li>Object Oriented Programming Using Python (Infytq)</li>
        </ul>
        <h2>Language Known</h2>
        <ul>
          <li>English - Professional Proficiency</li>
          <li>Hindi - Native / Bilingual Proficiency</li>
        </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume

        {/* <iframe src="https://drive.google.com/file/d/1FqBPHABjh1xD6eAsw8hIJ3ksjmP5j3mv/preview?usp=drivesdk" className={ResumeCSS.resume}></iframe> */}