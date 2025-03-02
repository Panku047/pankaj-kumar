import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import '../style/styles.css'

const frontendTech = [
    "React JS", "JavaScript", "TypeScript", "Next JS", "HTML", "CSS", "Tailwind CSS", "Redux"
]
const backendTech = [
    "Node JS","Express JS","Java", "Springboot", "SQL", "Postgres DB", "GraphQL"
]

const otherTech = [
    "Jest", "React Testing Library", "Cypress"
]

const MySkills: React.FC = () => {
  return (
    <div className="bg-blue-100 flex flex-col items-center justify-center p-4">
        <div className='page-heading'>Skills</div>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                '& > :not(style)': {
                m: 3,
                width: 300,
                height: 312,
                },
            }}
            >
            <Paper elevation={0} className='bg-[white]'>
                <div className='skills-head p-3 text-xl bg-[rebeccapurple] text-white'>
                    Frontend
                </div>
                <div className='skills-head'>
                    <ul>
                        {frontendTech.map((item, index) =>{
                            return <li className='skills-frontend-list' key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </Paper>
            <Paper>
                <div className='skills-head p-3 text-xl bg-[rebeccapurple] text-white'>
                    Backend
                </div>
                <div className='skills-head'>
                    <ul>
                        {backendTech.map((item, index) =>{
                            return <li className='skills-frontend-list' key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </Paper>
            <Paper elevation={3} >
                <div className='skills-head p-3 text-xl bg-[rebeccapurple] text-white'>
                    Testing and Tools
                </div>
                <div className='skills-head'>
                    <ul>
                        {otherTech.map((item, index) =>{
                            return <li className='skills-frontend-list' key={index}>{item}</li>
                        })}
                    </ul>
                </div>
            </Paper>
        </Box>
        <div className='border border-[#fbfcfc] w-[90%]'></div>
    </div>
  );
};

export default MySkills;
