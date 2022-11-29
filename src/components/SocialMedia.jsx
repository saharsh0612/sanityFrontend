import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {

  const linkedInHandle = () => {
    const linkedInUrl = "https://www.linkedin.com/in/saharsh-sinha-0612/"
    window.location = linkedInUrl;
    window.open(linkedInUrl);
  }

  const githubHandle = () => {
    const githuburl="https://github.com/saharsh0612"
    window.location = githuburl;
    window.open(githuburl);
  }

  return (
    <div className='app__social'>
        <div>
            <BsLinkedin onClick={linkedInHandle}/>
        </div>
        <div>
            <BsGithub onClick={githubHandle}/>
        </div>
    </div>
  )
}

export default SocialMedia