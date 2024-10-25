import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { RiArrowDropUpLine } from 'react-icons/ri';

export const ContactPage: React.FC = () => {
	return (
		<div
			id="contact-page"
			className="w-full h-full flex flex-col justify-center items-center"
			style={{ boxShadow: '0px -5px 10px 2px rgba(0,0,0,0.4)' }}
		>
			<h1 className="page-title dark fade-in fade-fast">get in touch_</h1>
			<div className="flex flex-col text-dark-100 text-2xl md:text-5xl fade-in font-roboto">
				<a
					href="https://github.com/janstaffa"
					target="_blank"
					className="link flex flex-row items-center my-1"
				>
					<FaGithub className="mr-4" />
					janstaffa
				</a>
				{/* <a
					href="mailto:jstaffa@janstaffa.cz"
					target="_blank"
					className="link flex flex-row items-center my-1"
				>
					<HiOutlineMail className="mr-4" />
					&#106;&#115;&#116;&#097;&#102;&#102;&#097;&#064;&#106;&#097;&#110;&#115;&#116;&#097;&#102;&#102;&#097;&#046;&#099;&#122;
				</a> */}
				<a
					href="https://www.linkedin.com/in/janstaffa"
					target="_blank"
					className="link flex flex-row items-center my-1"
				>
					<FaLinkedin className="mr-4" />
					janstaffa
				</a>
				<a
					href="https://www.instagram.com/janstaffa"
					target="_blank"
					className="link flex flex-row items-center my-1"
				>
					<FaInstagram className="mr-4" />
					@janstaffa
				</a>
			</div>
			<div className="absolute bottom-10 w-full flex flex-row justify-center">
				<RiArrowDropUpLine
					color={'#131515'}
					className="cursor-pointer"
					size={150}
					onClick={() => {
						window.scrollTo({ top: 0, behavior: 'smooth' });
					}}
				/>
			</div>
		</div>
	);
};
