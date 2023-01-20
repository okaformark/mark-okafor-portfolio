import About from './about/page';
import Contact from './contacts/page';
import Projects from './projects/page';
import Skills from './skills/page';

export type Timeline = gsap.core.Timeline;
export type Ease = gsap.EaseFunction;

export default function Home() {
	return (
		<div>
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	);
}
