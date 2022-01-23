import { useEffect } from 'react';
import { BlogCard, InputText, ExternalLinks, CardInfo, UtilityList, UrlList, HeaderThree } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

function Projects (props) {

  const handleSubmit = (data) => {
    props.addUrl()
  }

  return (
    <Section id="feature" style={{alignItems: 'center'}}>
      <br/>
      <SectionTitle>Shorten Link</SectionTitle>
      <BlogCard>
        <InputText type={'text'} name="inputLink" placeholder='Masukan Url' value={props.inputUrl} onChange={(e)=> props.setInputUrl(e.target.value)}/>
        <ExternalLinks href="#feature" onClick={()=> handleSubmit(props.inputUrl)}>Shorten it</ExternalLinks>
        {props.errorMsg ? <CardInfo style={{color: 'red'}}>{props.errorMsg}</CardInfo> : null }
        <UrlList>
          <HeaderThree>Url List</HeaderThree>
          {props.userLink ? props.userLink.map((el, index) => <li index={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: 680, marginBottom: 2}}><CardInfo>{index+1}. {el.full_short_link3}</CardInfo><ExternalLinks href="#feature" onClick={()=> navigator.clipboard.writeText(el.full_short_link3)}>Copy</ExternalLinks></li>) : null}
        </UrlList>
      </BlogCard>
      <br/>
    </Section>
  )
}

export default Projects;