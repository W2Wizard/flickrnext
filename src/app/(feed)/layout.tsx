import GithubIcon from "@/app/components/icons/github";
import SearchForm from "@/app/components/search-form";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<header className="bg-[var(--wui-header)] text-gray-200 flex justify-between z-10 gap-4 p-4">
				<a
					className="wui-outline"
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
				<menu className="flex items-center wui-outline">
					<li>
						<a href="https://github.com/w2wizard/flickrfeed" className="wui-outline">
							<GithubIcon />
						</a>
					</li>
				</menu>
			</header>
			<main className="px-4 pb-4">{children}</main>
		</>
	);
}
