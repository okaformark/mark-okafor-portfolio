import Project from '../../component/Project';

import { projects } from '../../data/data';

const Projects = () => {
	return (
		<section id='projects' className='flex flex-col w-full min-h-screen mt-20'>
			<h1 className='text-center mb-8'>Projects</h1>
			<div className='w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center py-8'>
				{projects.map(
					({
						id,
						title,
						backgroundImage,
						tech,
						projectUrl,
						demoLink,
						category,
					}) => (
						<Project
							key={id}
							title={title}
							tech={tech}
							projectUrl={projectUrl}
							backgroundImage={backgroundImage}
						/>
					)
				)}
			</div>
		</section>
	);
};

export default Projects;
