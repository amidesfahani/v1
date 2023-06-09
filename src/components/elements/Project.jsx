import React from "react";
import { IconExternal } from '../icons';

const Project = ({title, description, tech, link, image, className}) => (
	<>
		<li className={"bg-primary-800/30 lg:bg-transparent group relative grid gap-3 grid-cols-12 items-center lg:[&:nth-of-type(2n+1)&>*:first-child]:text-right lg:[&:nth-of-type(2n+1)&>*:first-child]:col-start-7 lg:[&:nth-of-type(2n+1)&>*:first-child]:col-end-[-1] lg:[&:nth-of-type(2n+1)&>*:last-child]:col-start-1 lg:[&:nth-of-type(2n+1)&>*:last-child]:col-end-8 " + className}>
			<div className="project-content bg-gray-900/25 relative row-start-1 row-end-[-1] col-start-1 col-end-[-1] lg:col-start-1 lg:col-end-7 p-6 lg:p-0">
				<div>
					<p className="my-2 mx-0 font-normal text-sm text-primary-400 whitespace-nowrap">Featured Project</p>
					<h3 className="mb-5 text-2xl text-gray-200 whitespace-nowrap">
						<a className="relative z-[1] hover:text-primary-400 transition-all duration-500" href={link} target="_blank" rel="noopener noreferrer">
							{title}
						</a>
					</h3>
					<div className="relative lg:p-6 z-[2] lg:bg-primary-600 rounded-lg text-gray-300 text-sm lg:shadow-md lg:shadow-primary-900/50">
						<p className="text-left">{description}</p>
					</div>
					<ul className="relative flex flex-row flex-wrap text-gray-300 lg:text-gray-400 lg:group-[:nth-of-type(2n+1)]:justify-end z-[2] mt-6 mb-3 list-none whitespace-nowrap text-xs">
						{tech.map((tech, i) => (
							<li className="mt-0 mr-3 lg:mr-5 ml-0 mb-1" key={i}>{tech}</li>
						))}
					</ul>
					<div className="flex items-center relative mt-4 lg:group-[:nth-of-type(2n+1)]:justify-end">
						<a href={link} aria-label="Project Link" className="cursor-pointer hover:text-primary-400 transition-all duration-500" rel="noopener noreferrer" target="_blank">
							<IconExternal className="w-6" />
						</a>
					</div>
				</div>
			</div>
			<div className="project-image relative blur-sm lg:blur-none opacity-25 lg:opacity-100 lg:z-[1] row-start-1 row-end-[-1] col-start-1 col-end-[-1] lg:col-start-6 lg:col-end-[-1] lg:shadow-lg shadow-primary-900/30 rounded-lg overflow-hidden">
				<a
					href={link}
					aria-label="Project Link"
					className="
									relative z-[1]
									w-full h-full
									align-middle
									rounded-lg bg-primary-600
									before:content-[''] before:absolute before:inset-0 before:z-[3] before:w-full before:h-full before:bg-primary-700 before:mix-blend-screen"
					rel="noopener noreferrer"
					target="_blank"
				>
					<div className="w-full h-full align-middle">
						<picture>
							<img className="object-cover" sizes="(min-width: 700px) 700px, 100vw" decoding="async" src={"/static/" + image} srcSet={"/static/" + image +  " 700w"} alt={title} width="700" height="438" />
						</picture>
					</div>
				</a>
			</div>
		</li>
	</>
);

export default Project;