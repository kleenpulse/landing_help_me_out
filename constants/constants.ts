import circleIcon from "../public/assets/record-circle.svg";
import sendIcon from "../public/assets/send-icon.svg";
import refreshIcon from "../public/assets/refresh-icon.svg";
import workIllustration from "../public/assets/work-illustration.svg";

interface FeatureProps {
	icon: string;
	title: string;
	description: string;
	id: number;
}

interface WorksProps {
	image: string;
	title: string;
	desc: string;
	id: number;
}
interface FoobarLinksProps {
	menu: {
		label: string;
		link: string;
		id: number;
	}[];
	aboutUs: {
		label: string;
		link: string;
		id: number;
	}[];
	screenRecord: {
		label: string;
		link: string;
		id: number;
	}[];
}

export const features: FeatureProps[] = [
	{
		id: 1,
		icon: circleIcon,
		title: "Simple Screen Recording",
		description:
			"Effortless screen recording for everyone. Record with ease, no tech expertise required.",
	},
	{
		id: 2,
		icon: sendIcon,
		title: "Easy-to-Share URL",
		description:
			"Share your recordings instantly with a single link. No attachments, no downloads.",
	},
	{
		id: 3,
		icon: refreshIcon,
		title: "Revisit Recordings",
		description:
			"Access and review your past content effortlessly. Your recordings, always at your fingertips.",
	},
];

export const works: WorksProps[] = [
	{
		id: 1,
		title: "Record Screen",
		desc: 'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
		image: workIllustration,
	},
	{
		id: 2,
		title: "Share Your Recording",
		desc: "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
		image: workIllustration,
	},
	{
		id: 3,
		title: "Learn Effortlessly",
		desc: "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
		image: workIllustration,
	},
];

export const foobarLinks: FoobarLinksProps = {
	menu: [
		{
			id: 1,
			label: "Home",
			link: "/",
		},
		{
			id: 2,
			label: "Converter",
			link: "/converter",
		},
		{
			id: 3,
			label: "How It Works",
			link: "/how-it-works",
		},
	],
	aboutUs: [
		{
			id: 1,
			label: "About",
			link: "/about",
		},
		{
			id: 2,
			label: "Contact Us",
			link: "/contact",
		},
		{
			id: 3,
			label: "Privacy Policy",
			link: "/privacy",
		},
	],
	screenRecord: [
		{
			id: 1,
			label: "Browser Window",
			link: "/browser-window",
		},
		{
			id: 2,
			label: "Desktop",
			link: "/desktop",
		},
		{
			id: 3,
			label: "Application",
			link: "/application",
		},
	],
};
