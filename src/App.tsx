import { useState } from 'react'
import project_1 from './assets/project 1.jpg'
import project_2 from './assets/project 2.jpg'
import contact from './assets/contact.jpg'
import medium from './assets/medium.png'
import twitter from './assets/twitter.png'
import behance from './assets/behance.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* navigation bar */}
      <nav className='flex justify-between px-3 py-4 bg-brand-primary
      sm:px-30 sm:py-10'>
        <span className='text-brand-secondary font-semibold
        sm:font-bold sm:text-2xl'>Afolabi Akanni</span>
        <div className='space-x-2 text-brand-secondary
        sm:text-xl sm:flex sm:gap-17'>
          <span><a href="#Home">Home</a></span>
          <span><a href="#Projects">Projects</a></span>
          <span><a href="#Contacts">Contacts</a></span>
        </div>
        <span className='hidden
        sm:flex sm:gap-2 sm: h-1/2 sm:my-auto'>
          <img src={medium} alt="" />
          <img src={twitter} alt="" />
          <img src={behance} alt="" />
        </span>
      </nav>
      {/* introductory section */}
      <div className='px-5 py-9 bg-brand-primary
      sm:px-30 sm: py-50' id='Home'>
        <div>
          <div className='text-brand-secondary text-lg font-medium 
          sm:text-3xl'>Hello, I'm Afolabi Akanni</div>
          <div className='text-brand-secondary flex flex-col text-5xl/13 font-bold tracking-tight
           sm:text-8xl/25'><span>A Tech</span><span>Enthusiast</span></div>
          <div className='text-brand-secondary text-lg/9 font-medium'>based in Lagos, Nigeria.</div>
          <div className='relative group w-20'>
          <div className='absolute top-1 left-1 h-full w-full bg-brand-tertiary rounded-sm group-hover:top-0 group-hover:left-0 transition-all duration-200'></div>
          <button className='relative border border-brand-brown py-1 px-3 bg-transparent text-brand-brown rounded-sm '>Resume </button>
          </div>
        </div>
        <div>

        </div>
                
      </div>
      {/* Profile section */}
      <div className='px-5 py-9 bg-brand-primary'>
        <div className='text-3xl font-bold text-brand-tertiary py-2'>Profile</div>
        <div className='text-brand-secondary'>
          Analytical thinker proficient in Python, ML, and Cloud basics, seeking an internship to solve complex business problems.
           I am a quick learner committed to 
          delivering high-quality results, whether in a dedicated data role or a cross-functional team.
          </div>
          <ul className='list-disc pl-4'>
            <li>
              <div className='text-brand-secondary text-sm font-semibold'>2022</div>
              <div className='text-sm text-brand-secondary'>
                Won a data analytics hackathon collaborating with a team of four to analyze drivers of low school attendance
                 among Nigerian students and
                propose data-informed interventions.
                </div>
            </li>
            <li>
              <div className='text-brand-secondary text-sm font-semibold'>2023-2036</div>
              <div className='text-sm text-brand-secondary'>
                Part of the google developers group. AI/ML Track
                Participated in team coaching sessions and ML study groups; contributed to peer learning.
                </div>
            </li>
            <li>
              <div className='text-brand-secondary text-sm font-semibold'>2026-present</div>
              <div className='text-sm text-brand-secondary'>
                yh
              </div>
            </li>
          </ul>
      </div>
      {/* Projects section */}
      <div className='px-5 py-9 bg-brand-primary text-brand-secondary' id='Projects'>
        <div className='text-3xl font-bold text-brand-tertiary py-2'>Projects</div>
        <div>
          Having  engaged in several projects especially on
           google Cloud and on Coursera, I have obtained skills in the 
           aspect of Data Analytics, Machine learning  and Cloud Operations. 
        </div>
        <div className='py-5'>
          <div>
            <img className='max-w-full h-auto' src={project_2} alt="" />
            <span className='text-xs'>November 24, 2019</span><br />
            <span className='text-sm'>
              Some Projecrs which I have worked are on this website. 
              https://github.com/AkanniA1
            </span>
          </div>
        </div>
        <div>
            <img className='max-w-full h-auto' src={project_1} alt="" />
            <span className='text-xs'>November 24, 2019</span><br />
            <span className='text-sm'>
              <p className='font-semibold'>Some Case Study</p>
              Some certificates which I
                 have obtained during my journey and transition in tech are  on this website : 
              https://www.credly.com/users/akanni-afolabi/edit#credly

            </span>
          </div>
      </div>
      {/* Contacts section */}
      <div className='px-5 py-9 bg-brand-primary text-brand-secondary' id='Contacts'>
        <div className='text-3xl font-bold text-brand-tertiary py-2'>contact.</div>
        <div>
          <img className='hidden' src={contact} alt="" />
          <div className='text-sm'>
            <span>Please Reach out to me via these mediums: </span>
            <span>E-mail: akanniaone@gmail.com</span>
            <span>Linked-In Profile: https://www.linkedin.com/in/afolabi-akanni/</span>
            <span>Phone number : 08143992926</span>
          </div>
        </div>
      </div>
      <img src="" alt="logo of a doc for clarity" />
    </>
  )
}

export default App
