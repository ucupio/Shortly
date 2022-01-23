import { useEffect, useState } from 'react';
import Axios from 'axios';
import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import axios from 'axios';

const Home = () => {
  const [userLink, setUserLink] = useState([])
  const [inputUrl, setInputUrl] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const addUrl = () => {
    axios.get('https://api.shrtco.de/v2/shorten?url='+inputUrl)
    .then(({data})=>{
      console.log(data)
      if(data.ok) setUserLink([...userLink, data.result])
      setInputUrl("")
      setErrorMsg("")
    })
    .catch((error)=> {
      console.log(error.response.data)
      setErrorMsg(error.response.data.error)
    })
  }

  useEffect(()=>{
    if (localStorage.getItem('userLink') && userLink.length === 0) setUserLink(JSON.parse(localStorage.getItem('userLink')))
    if (userLink.length !== 0) localStorage.setItem('userLink', JSON.stringify(userLink))
  }, [userLink])

  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects userLink={userLink} setUserLink={setUserLink} inputUrl={inputUrl} setInputUrl={setInputUrl} addUrl={addUrl} errorMsg={errorMsg}/>
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
