import Cta from "@/components/shared/Cta"
import Teaser from "@/components/common/Teaser"
// import Image from "next/image"
import Hero from "@/components/common/Hero"
import Title from "@/components/shared/Title"
import PROJECTS from "@/data/projects"
import styles from "./page.module.scss"
import Description from "@/components/shared/Description"
// import { VimeoVideo } from '@videojs/react/media/vimeo-video'
// import '@videojs/react/video/skin.css'
/* 
<div className="vimeo-video">
  <VimeoVideo src="https://vimeo.com/5351002" />
</div>
*/

const HERO = {
  layout: 'Primary',
  title: 'Hello, world!',
  description: '<p>My name is Dan. I&rsquo;m a lifelong learner helping to lead a small digital team to create and deliver compelling work. I love using dynamic media to create shared experiences for our increasingly specialized world. I enjoy creating things that look and function so well that people actually want to use&nbsp;them.</p><p>I&rsquo;m seeking a team-oriented creative and technical role where my passion and experience can contribute towards building simple, successful, and memorable user experiences. I like solving problems I don’t already know the answer to. I like being surprised by what I find. I’m comfortable with ambiguity. I like advocating for others. I like making cool stuff with great people. And I have a security clearance too which is kinda&nbsp;neat.</p>',
  bgImage: {
    src: "/images/paris-posters.jpg",
    alt: "various ripped apart flyers from a message board in Paris."
  },
  ctas: [
    { id: 1, label: "View Resume", href: "./resume/dan_johnston_resume-2026.pdf"}
    // {id: 1, label: 'View Resume', href: 'https://www.danjohnston.com/dan_johnston_resume.pdf'},
    // {id: 2, label: 'Code Sample', href: 'https://www.danjohnston.com/dan_johnston_resume.pdf'},
    // {id: 3, label: 'Recommendation', href: 'https://www.danjohnston.com/dan_johnston_resume.pdf'}
  ],
}
const CONTACT = {
  jumplink: 'contact',
  animation: 'Slide Up',
  layout: 'Quote',
  images: [
    {id: 1, src: '/images/me.jpg', alternativeText: 'my alt text', width: 720, height: 720}
  ],
  title: { copy: 'Get in Touch' },
  description: '<p>While I&rsquo;ve most recently worked at an advertising agency, I&rsquo;ve also been fortunate enough to work for start-ups, academic research labs, the government, and of course; myself. Please reach out if you&rsquo;ve got a project&nbsp;you&rsquo;re thinking about creating or improving.</p>',
  // description: '<p>Please let me know if you&rsquo;ve got a project you&rsquo;re thinking about creating or improving. I&rsquo;d love to assist with anything you need.</p>',
  ctas: [
    {id: 1, label: 'email', href: 'mailto:drj8022@gmail.com'},
  ],
}

export default function Home() {
  return (
    <>
      <Hero jumplink="about" {...HERO} />
      <div id="skills" className={styles['twocol']}>
        <div className={styles['twocol-inner']}>
          <div className={styles['twocol-header']}>
            <Title copy="Feature List" header="h2" className={styles['twocol-title']} />
            <Description content='<p>Here&rsquo;s a brief overview of the skills and attributes that have helped me succeed on a team and deliver the projects listed below. I&rsquo;m always looking to grow and improve.</p>' className={styles['twocol-description']} />
          </div>
          <div className={styles['twocol-col']}>
            <div>
              <h3>Project Management</h3>
              <p>Familiar with Jira <em>(et. al.)</em> for project tracking and status updates. I can work with agile, kanban, or flow sprint styles. Really whatever works for you. I can write functional specs and pass them off, or build features myself as needed. I can provide timelines and other guidance during scrums and check-ins.</p>
            </div>
            <div>
              <h3>Languages & Tooling</h3>
              <p>In terms of the basics I'm quite comfortable with Node, JavaScript, <span>html/css</span>, React, Next.js, <span>sql</span>, GraphQL, <span>rest</span>, Bash, and <span>wcag/508</span> compliance. I'm somewhat decent with <span>php</span>, I've used Drupal and Wordpress on many occasions. I have some rudimentary understanding of Ruby, Python, and Java after delivering projects built on Rails, Django, and <span>aem</span>.</p>
            </div>
            <div>
              <h3>Deploying</h3>
              <p>At home using a variety of <span>aws</span> tooling. Amplify, <span>ec2</span>, Elastic Beanstalk are my go to, but I'm also familiar with Route 53, CloudFront, CodeBuild, CodePipeline, <span>rds</span> and <span>s3</span>. I like to select tools, platforms, and technologies that optimize for performance, cost, and maintainability.</p>
            </div>
            <div>
              <h3>Testing & Optimization</h3>
              <p>Highly skilled at performing accessibility testing across browsers and devices, optimizing for speed and scalability. Implementing <span>seo/aeo</span> elements such as <span>json-ld</span>.</p>
            </div>
          </div>
          <div className={styles['twocol-col']}>
            <div>
              <h3>Soft Skills</h3>
              <p>Explaining concepts in plain English to non-technical stakeholders. Building rapid prototypes and creating documentation. Attention to Detail with strong analytical skills. Collaborating with stakeholders to understand requirements, solve complex challenges, and deliver solutions.</p>
            </div>
            <div>
              <h3>AI</h3>
              <p>I&rsquo;ve used OpenAI models to perform image identification and categorizing tasks, using structured outputs to ensure returned data was type-safe. I&rsquo;ve begun to use Claude to accelerate timelines, but I still do certain things by hand to stay sharp.</p>
            </div>
            <div>
              <h3>Hand Raising</h3>
              <p>A willingness to roll my metaphorical sleeves up and just get it done, especially when it's "not my job". When deadlines loom I'm fine doing content entry, creating spreadsheets, asking the client for clarifications; basically whatever needs doing to get the project over the finish line.</p>
            </div>
            <div>
              <h3>Education</h3>
              <p>I've studied <Cta href="https://www.rit.edu/study/industrial-design-bfa">Industrial Design</Cta> at the Rochester Institute of Technology, and <Cta href="https://massart.edu/program/dynamic-media-institute/">Dynamic Media</Cta> at the Massachusetts College of Art and Design. I'm also always trying to keep my streak going on DuoLingo if you want to count that!</p>
            </div>
          </div>
        </div>
      </div>

{/* 
<h3>Leadership?</h3>
<h3>Design & UX?</h3>
Works with fellow engineers to design, review, and build well-crafted software.
Collaborates with stakeholders (technical and non-technical) to understand their needs, clarify possible options, make technical recommendations, and architect, implement, and deploy new systems and improvements to existing systems. 
Works in an agile manner to efficiently ship new features that meet user needs.
Creates tools and processes to automate our development, testing, and production workflows. 
Acts as a technical leader in the development of high-quality, well-tested, documented, CI/CD-enabled, and high-performance software solutions.
Writes and reviews technical documentation, including architecture diagrams, and performs code reviews. 
Works closely with product designers, product managers, and engineers to implement solutions for end-user and business needs.
Supports production systems and investigates issues when they occur. 
Upholds and continuously improves the team’s coding standards and development workflows.
Pursues personal growth by maintaining an awareness of the state of technology, engineering techniques, and best practices.
Contributes to and advances “best practices” within the team and our organization.
Supports project planning, including requirements gathering, design, scoping, and estimates for upcoming work.
Manages your own time and works well both independently and as part of a team.
Provides exemplary peer reviews, enabling continuous learning and improvement opportunities for other team members.
Participates in daily standups and other agile (Scrum or Kanban) routines.
Performs related work as required. 
*/}


      <div id="work">
        <Teaser layout="Centered" animation="Clip Right" title={{copy: "Work"}} description={'Here is a short list of some of the projects I&rsquo;ve been able to help out on.'} />
        { PROJECTS.map(project => <Teaser key={project.id} {...project} />)}
      </div>

      {/* <ul>
        <li><strong>Speedbag (MLUS)</strong></li>
        <li>Fantasy21 (MLUS)</li>
        <li>MediaHub (MLUS)</li>
        <li>Mullen Lowe (MLUS)</li>
        <li>ThisIsDK (Digital Kitchen)</li>
        <li>Knockdown (Digital Kitchen)</li>
        <li><s>Chestnut Hill Realty (MediumBold)</s></li>
        <li><s>Garden City (MassArt)</s></li>
        <li><s>Sustainable Connected Home (MIT)</s></li>
        <li><s>LoCast (MIT)</s></li>
      </ul> */}

      <Teaser {...CONTACT} />
    </>
  )
}
