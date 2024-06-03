import Link from "next/link";
const Header = () => {
	return (
		<header className="flex justify-between p-3 bg-slate-100">
			<h1 className="text-xl">ShadCN Breadcrumb Example</h1>
			<nav>
				<ul className="flex">
					<li>
						<Link className="p-2" href="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="p-2" href="/about">
							About
						</Link>
					</li>
					<li>
						<Link className="p-2" href="/faq">
							FAQ
						</Link>
					</li>
					<li>
						<Link className="p-2" href="/contact">
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
