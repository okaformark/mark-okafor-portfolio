import HTML from '../public/assets/html.png';
import AWS from '../public/assets/aws.png';
import CSS from '../public/assets/css.png';
import Firebase from '../public/assets/firebase.png';
import Github from '../public/assets/github.png';
import GraphQL from '../public/assets/graphql.png';
import Javascript from '../public/assets/javascript.png';
import MatplotLib from '../public/assets/matplotlib.png';
import Mongo from '../public/assets/mongo.png';
import NestJS from '../public/assets/nestJS.png';
import NETCore from '../public/assets/netcore.png';
import NextJS from '../public/assets/nextJS.png';
import NodeJS from '../public/assets/node.png';
import Numpy from '../public/assets/numpy.png';
import Pandas from '../public/assets/pandas.png';
import React from '../public/assets/react.png';
import Python from '../public/assets/python.png';
import ScitkitLearn from '../public/assets/scikit-learn.png';
import Seaborn from '../public/assets/seaborn.png';
import SQL from '../public/assets/sql.png';
import TaiwindCSS from '../public/assets/tailwind.png';
import TensorFlow from '../public/assets/tensorflow.png';
import Java from '../public/assets/java.png';
import todo from '../public/assets/todo.png';
import note1 from '../public/assets/note1.png';
import dataviz1 from '../public/assets/dataviz1.png';
import graph1 from '../public/assets/graph1.png';
import mern1 from '../public/assets/mern1.png';
import { TfiEmail } from 'react-icons/tfi';
import { BsLinkedin, BsMessenger, BsWhatsapp } from 'react-icons/bs';

export const techData = [
	{
		id: 1,
		src: HTML,
		name: 'HTML',
	},
	{
		id: 2,
		src: CSS,
		name: 'CSS',
	},
	{
		id: 3,
		src: TaiwindCSS,
		name: 'Tailwind CSS',
	},
	{
		id: 4,
		src: Javascript,
		name: 'JavaScript',
	},
	{
		id: 5,
		src: React,
		name: 'React',
	},
	{
		id: 6,
		src: NextJS,
		name: 'Next JS',
	},
	{
		id: 7,
		src: NestJS,
		name: 'Nest JS',
	},
	{
		id: 8,
		src: NETCore,
		name: '.NET Core',
	},
	{
		id: 9,
		src: AWS,
		name: 'AWS',
	},
	{
		id: 10,
		src: Firebase,
		name: 'Firebase',
	},
	{
		id: 11,
		src: Github,
		name: 'GIT',
	},
	{
		id: 12,
		src: HTML,
		name: 'HTML',
	},
	{
		id: 13,
		src: GraphQL,
		name: 'GraphQL',
	},
	{
		id: 14,
		src: Mongo,
		name: 'MongoDB',
	},
	{
		id: 15,
		src: SQL,
		name: 'SQL',
	},
	{
		id: 16,
		src: ScitkitLearn,
		name: 'Scikit-Learn',
	},
	{
		id: 17,
		src: Seaborn,
		name: 'Seaborn',
	},
	{
		id: 18,
		src: Pandas,
		name: 'Pandas',
	},
	{
		id: 19,
		src: MatplotLib,
		name: 'Matplotlib',
	},
	{
		id: 20,
		src: Python,
		name: 'Python',
	},
	{
		id: 21,
		src: NodeJS,
		name: 'Node JS',
	},
	{
		id: 22,
		src: Numpy,
		name: 'Numpy',
	},
	{
		id: 23,
		src: TensorFlow,
		name: 'TensorFlow',
	},

	{
		id: 24,
		src: Java,
		name: 'Java',
	},
];

export const projects = [
	{
		id: 1,
		title: 'A simple rest API',
		backgroundImage: todo,
		tech: '.NET, C#, ADO.NET',
		projectUrl: 'https://github.com/okaformark/ToDoApp',
		demoLink: '',
		categoty: ['RestAPI', '.NET'],
	},
	{
		id: 2,
		title: 'Noted',
		backgroundImage: note1,
		tech: 'React, TypeScript, Styled Components',
		projectUrl: 'https://github.com/okaformark/noted',
		demoLink: '',
		category: ['React', 'TypeScript', 'JavaScript'],
	},
	{
		id: 3,
		title: 'Data Visualization with Python',
		backgroundImage: dataviz1,
		tech: 'Python, MatplotLib, Pandas, Seaborn, Bokeh, Plotly ',
		projectUrl: 'https://github.com/okaformark/Data-visualization',
		demoLink: '',
		category: ['Python', 'Data visualization'],
	},
	{
		id: 4,
		title: 'GraphQL Backend API',
		backgroundImage: graph1,
		tech: 'GraphQL, Node, Apollo server',
		projectUrl:
			'https://github.com/okaformark/grpahql-api/tree/main/aloompa-project',
		demoLink: '',
		category: ['GraphQL', 'Node'],
	},
	{
		id: 5,
		title: 'TECH PRO',
		backgroundImage: mern1,
		tech: 'MongoDB, Express, React, Node',
		projectUrl:
			'https://github.com/okaformark/grpahql-api/tree/main/aloompa-project',
		demoLink: '',
		category: ['MERN', 'Node', 'React'],
	},
];

export const contactData = [
	{
		id: 1,
		name: 'email',
		title: 'okaformark@gmail.com',
		link: 'mailto:okaformark@gmail.com',
		value: 'send an email',
		icon: <TfiEmail />,
	},
	{
		id: 2,
		name: 'FB messenger',
		title: 'Mark Chukwuemeka Okafor',
		link: 'https://m.me/okafor.mark',
		value: 'send a message',
		icon: <BsMessenger />,
	},
	{
		id: 3,
		name: 'linkedIn',
		title: 'Okafor Mark',
		link: 'https://linkedin.com/in/okaformark',
		value: 'send a message',
		icon: <BsLinkedin />,
	},
	{
		id: 4,
		name: 'whatsapp',
		title: '+1 (615)-918-1460',
		link: 'https://api.whatsapp.com/send?phone=+16159181460',
		value: 'text me',
		icon: <BsWhatsapp />,
	},
];

export const navMenu = [
	{
		id: 1,
		title: 'about',
		url: '/about',
	},
	{
		id: 2,
		title: 'skills',
		url: '/skills',
	},
	{
		id: 3,
		title: 'projects',
		url: '/projects',
	},
	{
		id: 4,
		title: 'contacts',
		url: '/contacts',
	},
];
