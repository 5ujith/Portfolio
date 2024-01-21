import '../../App.css';
import styled from 'styled-components';
import { experience } from '../../data/constants';
import { Desc, Technologies, Technology } from '../shared/StyledComponents';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import '../../App.css';
import { useState } from 'react';
import { Education } from '../Education';

const Container = styled.div`
    width: 100%;
    padding: 20px 12px;
    margin-top: 80px;
`;

const NavigateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.text_secondary};
`;

const ExperienceButton = styled.button`
    background: transparent;
    color: inherit;
    padding: 5px 10px;
    border: 0.1px solid ${({ theme }) => theme.primary};
    border-radius: 5px;
    border-top: 0px;
    font-size: 32px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
        font-size: 30px;
    }

    @media (max-width: 500px) {
        font-size: 28px;
        max-width: 330px;
    }
`;

const EducationButton = styled.button`
    background: transparent;
    color: inherit;
    padding: 5px 10px;
    border: 0.1px solid ${({ theme }) => theme.primary};
    border-radius: 5px;
    border-top: 0px;
    border-left: 0px;
    /* box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px; */
    font-size: 32px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    }

    @media (max-width: 768px) {
        font-size: 30px;
    }

    @media (max-width: 500px) {
        font-size: 28px;
        max-width: 330px;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ExperienceContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const WorkDesc = styled.ul`
    font-size: 14px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

const WorkExperience = styled.div`
    border: 0.1px solid ${({ theme }) => theme.primary};
    width: 600px;
    color: ${({ theme }) => theme.text_secondary + 99};
    padding: 20px 40px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
    }

    &:hover ${WorkDesc} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }


    @media (max-width: 768px) {
        max-width: 400px;
        padding: 20px 36px;
    }

    @media (max-width: 500px) {
        max-width: 310px;
        padding: 15px 30px;
    }
`;

const Role = styled.div`
    font-size: 22px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    /* justify-content: center; */

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 500px) {
        font-size: 16px;
        max-width: 330px;
    }
`;

const Org = styled.div`
    font-weight: 400;
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 14px;
    /* justify-content: center; */
`;

const Duration = styled.div`
    font-weight: 250;
    display: flex;
    gap: 6px;
    align-items: center;
    font-size: 12px;
`;

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
    align-items: flex-start;
`;

const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 5px;
    margin-top: 5px;
`;

const TopContent = styled.div`
    width: 100%;
`;

const WorkDescItem = styled.li`
    width: 100%;
`;

const Certficate = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 8px;
    align-items: center;
    width: fit-content;
    padding-right: 8px;
    border-radius: 16px;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
`;

const CertificateImage = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 16px;
`;

const CertificateLink = styled.a`
    color: ${({ theme }) => theme.text_secondary};
`;

export const Experience = () => {
    const [displayEducation, setDisplayEducation] = useState(false);

    function educationHandler() {
        setDisplayEducation(true);
    }

    function experienceHandler() {
        setDisplayEducation(false);
    }

    return (
        <Container id = "experience">
            <NavigateContainer>
                <ExperienceButton onClick = {experienceHandler}
                className = {displayEducation ? '' : 'activeButton'}>
                    Experience
                </ExperienceButton>
                <EducationButton onClick = {educationHandler}
                className = {displayEducation ? 'activeButton' : ''}>
                    Education
                </EducationButton>
            </NavigateContainer>
            {
                displayEducation ? <Education /> :
                (
                <Wrapper>
                    <Desc>{experience.desc}</Desc>
                    <ExperienceContainer>
                        <Timeline style = {{padding: "0px"}}>
                        {
                            experience?.data?.map((item, index) => (
                                <TimelineItem className = 'timelineItem'>
                                    <TimelineSeparator style = {{padding: "0px 12px 0px 0px"}}>
                                        <TimelineDot variant="outlined" color="secondary" />
                                        {index !== (experience?.data?.length - 1) && <TimelineConnector style={{ background: '#854CE6' }} />}
                                    </TimelineSeparator>
                                    <TimelineContent style = {{padding: "0px", margin: "15px 0px"}}>
                                        <WorkExperience>
                                            <Top>
                                                <Image src = {item?.image} alt = {item?.org + '.png'}/>
                                                <TopContent>
                                                    <Role>{item?.role}</Role>
                                                    <Org>{item?.org}</Org>
                                                    <Duration>{item?.date}</Duration>
                                                </TopContent>
                                            </Top>
                                            <Technologies>
                                                {
                                                    item?.technologies.map((tech, index) => (
                                                        <Technology key = {index} 
                                                        style = {{ color: "#b1b2b3"}}>
                                                            {tech}
                                                        </Technology>
                                                    ))
                                                }
                                            </Technologies>
                                            <WorkDesc>
                                                {
                                                    item?.contribution?.split(".").slice(0, -1).map((line, idx) => (
                                                        <WorkDescItem key = {idx}>
                                                            {line}.
                                                        </WorkDescItem>
                                                    ))
                                                }
                                                <Certficate>
                                                    <CertificateImage
                                                    src = {item?.certificate?.image} 
                                                    alt = 'certificate.png'/>
                                                    <CertificateLink
                                                    href = {item?.certificate?.link}
                                                    target = '_blank'>
                                                        Certficate
                                                    </CertificateLink>
                                                </Certficate>
                                            </WorkDesc>
                                        </WorkExperience>
                                    </TimelineContent>
                                </TimelineItem>
                            ))
                        }
                        </Timeline>
                    </ExperienceContainer>
                </Wrapper>
                )
            }
        </Container>
    );
}