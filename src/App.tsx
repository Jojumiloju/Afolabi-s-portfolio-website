import project_1 from './assets/project 1.jpg'
import project_2 from './assets/project 2.jpg'
import contact from './assets/contact.jpg'
import profile_pic from './assets/profile pic.jpg'
import icon_1 from './assets/icon 1.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiCredly } from 'react-icons/si'

function App() {

  return (
    <>
      {/* navigation bar */}
      <nav className='font-display flex justify-between px-5 py-4 bg-brand-primary
      sm:px-30 sm:py-10'>
        <span className='text-brand-secondary font-semibold
        sm:font-semibold sm:text-2xl'>Afolabi Akanni</span>
        <div className='space-x-2 text-brand-secondary
        sm:text-xl sm:flex sm:gap-17'>
          <span><a href="#Profile">Profile</a></span>
          <span><a href="#Projects">Projects</a></span>
          <span><a href="#Contacts">Contacts</a></span>
        </div>
        <span className='hidden
        lg:flex sm:gap-2 sm: h-1/2 sm:my-auto'>
          <a href="https://www.linkedin.com/in/afolabi-akanni/" target="_blank" ><FaLinkedin className='text-2xl text-brand-secondary'/></a>
          <a href="https://github.com/AkanniA1" target="_blank"><FaGithub className='text-2xl text-brand-secondary'/></a>
          <a href="https://www.credly.com/users/akanni-afolabi/edit#" target="_blank"><SiCredly className='text-2xl text-brand-secondary'/></a>
          
          
          
        </span>
      </nav>
      {/* introductory section */}
      <div className='font-display px-10 py-9 bg-brand-primary
      sm:px-30  lg:flex lg:justify-between lg:flex-wrap xl:flex-nowrap' id='Home'>
        <div className='my-auto'>
          <div className='text-brand-secondary text-lg font-medium 
          sm:text-3xl'>Hello, I'm Afolabi Akanni</div>
          <div className='text-brand-secondary flex flex-col text-5xl/13 font-bold tracking-tight
           sm:text-8xl/35 lg:text-9xl/35'><span>A Tech</span><span>Enthusiast</span></div>
          <div className='text-brand-secondary text-lg/9 font-medium
          sm:text-3xl sm:py-6'>based in Lagos, Nigeria.</div>
          <div className='relative group w-20'>
          <div className='absolute top-1 left-1 h-full w-22 bg-brand-tertiary rounded-sm group-hover:top-0 group-hover:left-0 transition-all duration-200
          sm:top-2 sm:left-2 sm:w-38'></div>
          <button className='relative border border-brand-brown py-1 px-3 bg-transparent text-brand-brown rounded-sm 
          sm:text-2xl sm:py-3 sm:px-7 sm:font-normal'>Resume </button>
          </div>
        </div> 
        <div className='mt-10 xl:m-20 space-y-5 hidden lg:inline-block'>
          <div className='hidden xl:flex'><img className='mr-0 ml-auto' src={icon_1} alt="" /></div> 
          <div className='xl:p-10 w-100 p-0'><img src={profile_pic} alt="" /></div>            
        </div>
                   
      </div>
      {/* Profile section */}
      <div className='font-display px-10 py-9 bg-brand-primary
      sm:px-30' id='Profile'>
        <div className='text-3xl font-bold text-brand-tertiary py-2
        sm:text-8xl/35'>Profile</div>
        <div className='text-brand-secondary
        sm:text-2xl/10 sm:w-3/4'>
          Analytical thinker proficient in Python, ML, and Cloud basics, seeking an internship to solve complex business problems.
           I am a quick learner committed to 
          delivering high-quality results, whether in a dedicated data role or a cross-functional team.
          </div>
          <ul className='list-disc pl-4 text-brand-secondary
          sm:text-2xl sm:w-3/4 sm:mr-0 sm:ml-auto'>
            <li className='sm:mt-20'>
              <div className='text-brand-secondary text-sm font-semibold sm:text-2xl/relaxed'>2022</div>
              <div className='text-sm text-brand-secondary sm:text-2xl/relaxed'>
                Won a data analytics hackathon collaborating with a team of four to analyze drivers of low school attendance
                 among Nigerian students and
                propose data-informed interventions.
                </div>
            </li>
            <li className='sm:mt-20'>
              <div className='text-brand-secondary text-sm font-semibold sm:text-2xl/relaxed'>2023-2025</div>
              <div className='text-sm text-brand-secondary sm:text-2xl/relaxed'>
                Part of the google developers group. AI/ML Track
                Participated in team coaching sessions and ML study groups; contributed to peer learning.
                </div>
            </li>
            <li className='sm:mt-20'>
              <div className='text-brand-secondary text-sm font-semibold sm:text-2xl/relaxed'>2026-present</div>
              <div className='text-sm text-brand-secondary sm:text-2xl/relaxed'>
                Data Analytics Instructor at ENIKI Computer School
              </div>
            </li>
          </ul>
      </div>
      {/* Projects section */}
      <div className='px-10 py-9 bg-brand-primary text-brand-secondary
      sm:px-30' id='Projects'>
        <div className='text-3xl font-bold text-brand-tertiary py-2
        sm:text-8xl/35 '>Projects</div>
        <div className='sm:text-2xl/10 sm:w-3/4 sm:mb-30'>
          Having  engaged in several projects especially on
           google Cloud and on Coursera, I have obtained skills in the 
           aspect of Data Analytics, Machine learning  and Cloud Operations. 
        </div>
        <div className='md:flex md:gap-30 md:flex-wrap'>
          <div className='md:flex-1'>
            <img className='max-w-full h-auto md:min-w-100' src={project_2} alt="" />
            <div className='italic text-xs sm:text-sm sm:mb-1'>November 24, 2022</div><br />
            <span className='text-sm sm:text-lg/8'>
              Some Projecrs which I have worked are on this website:     

              <a href="https://github.com/AkanniA1" target='_blank'> https://github.com/AkanniA1</a>
            </span>
          </div>
          <div className='md:flex-1'>
            <img className='max-w-full h-auto md:min-w-100' src={project_1} alt="" />
            <div className='italic text-xs sm:text-sm'>January 09, 2026</div><br />
            <span className='text-sm sm:text-lg/8'>
              <p className='font-semibold sm:text-2xl/10 sm:font-bold'>Some Case Study</p>
              Some certificates which I
                 have obtained during my journey and transition in tech are  on this website: 
              <a href="https://www.credly.com/users/akanni-afolabi/edit#" target='_blank'> https://www.credly.com/users/akanni-afolabi/edit#</a>
            </span>
          </div>
        </div>
        
      </div>
      {/* Contacts section */}
      <div className='px-10 py-9 bg-brand-primary text-brand-secondary
      sm:px-30' id='Contacts'>
        <div className='text-3xl font-bold text-brand-tertiary py-2
        sm:text-8xl/50'>contact.</div>
        <div className='md:flex md:gap-20 md:flex-wrap'>
          <img className='hidden md:inline-block md:w-100' src={contact} alt="" />
          <div className='text-sm sm:text-2xl/10 sm:mb-0 sm:mt-auto'>
            <p>Please Reach out to me via these mediums: </p>
            <p>E-mail: akanniaone@gmail.com</p>
            <p>Linked-In Profile: https://www.linkedin.com/in/afolabi-akanni/</p>
            <p>Phone number : 08143992926</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App