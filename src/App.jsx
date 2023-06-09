import React, { useState, useEffect } from "react";
import { Head, Header, Hero, About, Experience, Projects, Services, Contact, Loader } from "./components";
import { IconGitHub, IconInstagram, IconLinkedin, IconTwitter } from "./components/icons";
import "react-tooltip/dist/react-tooltip.css";
import "./App.css";

function App() {
	const isHome = location.pathname === "/";
	const [isLoading, setIsLoading] = useState(isHome);

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (location.hash) {
			const id = location.hash.substring(1); // location.hash without the '#'
			setTimeout(() => {
				const el = document.getElementById(id);
				if (el) {
					el.scrollIntoView();
					el.focus();
				}
			}, 0);
		}
	}, [isLoading]);

	return (
		<>
			<Head />
			<div className="min-h-full bg-gray-900 font-sans text-gray-400">
				<div className="flex min-h-screen flex-col">
					<Header />
					{isLoading && isHome ? (
						<Loader finishLoading={() => setIsLoading(false)} />
					) : (
						<div id="content">
							<main className="min-h-screen w-full max-w-screen-2xl py-2 px-8 leading-normal lg:px-20 xl:px-40">
								<section id="heroSection" className="mx-auto flex min-h-screen max-w-250 flex-col justify-center">
									<Hero />
								</section>

								<section id="aboutSection" className="mx-auto flex min-h-screen max-w-250 flex-col justify-center py-16 xl:py-0">
									<About />
								</section>

								<section id="experienceSection" className="mx-auto flex min-h-screen max-w-250 flex-col justify-center py-16 lg:py-0">
									<Experience />
								</section>

								<section id="projectsSection" className="mx-auto flex min-h-screen max-w-250 flex-col justify-center py-16 lg:py-0">
									<Projects />
								</section>

								<section id="servicesSection" className="mx-auto flex min-h-screen max-w-250 flex-col justify-center py-16 lg:py-0">
									<Services />
								</section>

								<section id="contactSection" className="mx-auto mt-40 flex max-w-250 flex-col justify-center py-16 lg:py-0">
									<Contact />
								</section>
							</main>

							<footer className="flex w-full max-w-screen-2xl items-center justify-center p-4 px-40 leading-normal">
								<div className="mt-8">
									<ul className="flex list-none flex-row items-center justify-start space-x-4">
										<li>
											<a href="https://github.com/amidesfahani/" aria-label="GitHub" target="_blank" rel="noreferrer">
												<IconGitHub className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/amidesfahani/" aria-label="Instagram" target="_blank" rel="noreferrer">
												<IconInstagram className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
											</a>
										</li>
										<li>
											<a href="https://www.twitter.com/amidesfahani" aria-label="Twitter" target="_blank" rel="noreferrer">
												<IconTwitter className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
											</a>
										</li>
										<li>
											<a href="https://www.linkedin.com/in/amidesfahani/" aria-label="Linkedin" target="_blank" rel="noreferrer">
												<IconLinkedin className="h-5 w-5 stroke-gray-400 transition-all duration-300 hover:stroke-primary-400" />
											</a>
										</li>
									</ul>
								</div>
							</footer>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

// document.documentElement.style.setProperty('--logo-color', newColor);

export default App;
