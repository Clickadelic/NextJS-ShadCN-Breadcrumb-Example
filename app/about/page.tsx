import Link from "next/link";
const AboutPage = () => {
	return (
		<div>
			<h1>About</h1>
			<Link href="/about/deeplink">Deeplink</Link>
			<br />
			<Link href="/about/deeplink/deeper-link">Deeperlink</Link>
		</div>
	);
};

export default AboutPage;
