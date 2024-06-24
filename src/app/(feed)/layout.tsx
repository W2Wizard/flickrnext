import CSS from "./layout.module.css";
import GithubIcon from "@/app/components/icons/github";
import SearchForm from "@/app/components/search/search-form";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header className={CSS.header}>
				<a
					href="https://portfolio.w2wizard.dev"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src="https://avatars.githubusercontent.com/u/63303990?v=4"
						alt="Logo"
						loading="lazy"
						width="32"
						height="32"
					/>
				</a>
				<SearchForm />
				<menu>
					<li>
						<a href="https://github.com/w2wizard/flickrfeed">
						<GithubIcon />
						</a>
					</li>
				</menu>
			</header>
			<main className={CSS.main}>{children}</main>
		</>
	);
}
