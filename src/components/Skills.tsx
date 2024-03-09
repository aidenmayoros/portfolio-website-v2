import { Box, Typography } from '@mui/material';
import JavascriptIcon from '../assets/skills-icons/javascript.svg';
import TypeScript from '../assets/skills-icons/typescript.svg';
import React from '../assets/skills-icons/react.svg';
import NodeJs from '../assets/skills-icons/node-js.svg';
import Express from '../assets/skills-icons/express.svg';
import HTML5 from '../assets/skills-icons/html5.svg';
import CSS from '../assets/skills-icons/css.svg';
import Git from '../assets/skills-icons/git.svg';
import GitHub from '../assets/skills-icons/github.svg';
import Bootstrap from '../assets/skills-icons/bootstrap.svg';
import MaterialUI from '../assets/skills-icons/material-ui.svg';
import Heroku from '../assets/skills-icons/heroku.svg';
import MongoDB from '../assets/skills-icons/mongodb.svg';
import Postman from '../assets/skills-icons/postman.svg';

const skillsList = [
	{ skillName: 'Javascript', image: JavascriptIcon },
	{ skillName: 'TypeScript', image: TypeScript },
	{ skillName: 'React', image: React },
	{ skillName: 'Node.Js', image: NodeJs },
	{ skillName: 'Express', image: Express },
	{ skillName: 'HTML5', image: HTML5 },
	{ skillName: 'CSS', image: CSS },
	{ skillName: 'Git', image: Git },
	{ skillName: 'GitHub', image: GitHub },
	{ skillName: 'Bootstrap', image: Bootstrap },
	{ skillName: 'Material Design', image: MaterialUI },
	{ skillName: 'Heroku', image: Heroku },
	{ skillName: 'MongoDB', image: MongoDB },
	{ skillName: 'Postman', image: Postman },
];

function Skills() {
	return (
		<Box sx={{ pt: 10 }}>
			<Typography variant='h4' color={'white'}>
				Skills
			</Typography>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
				{skillsList.map((skill) => (
					<Box
						key={skill.skillName}
						sx={{
							backgroundColor: '#2dd4bfcf',
							p: 1,
							borderRadius: '8px',
							margin: '10px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<img src={skill.image} alt={skill.skillName} width={30} />
						<Typography sx={{ marginTop: '10px', color: 'black' }}>
							{skill.skillName}
						</Typography>
					</Box>
				))}
			</Box>
		</Box>
	);
}

export default Skills;
