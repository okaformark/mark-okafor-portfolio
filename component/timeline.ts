import { gsap, Power3 } from 'gsap';

type Timeline = gsap.core.Timeline;
type Ease = gsap.EaseFunction;

export const TimeLine = () => {
	let timeline: Timeline = gsap.timeline();
	return timeline;
};

export const Ease = () => {
	let ease: Ease = Power3.easeOut;
	return ease;
};
