import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-800 col-span-4 py-4 space-y-4">
			<div className="flex justify-center items-center md:mx-auto mx-4">
				<p className="text-center text-xs md:text-base">
					All Rights Reserved MetalMania ©
					{` ${new Date().getFullYear()}`}
				</p>

				<span className="mx-4 md:mx-8">|</span>

				<ul className="flex gap-4 items-center">
					<li>
						<a
							href="https://es-la.facebook.com/profile.php?id=100054525247624"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebookF className="h-5 w-5 duration-500 hover:scale-125 hover:text-cyan-500" />
						</a>
					</li>

					<li>
						<a
							href="https://twitter.com/MetalmaniaWorks"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaTwitter className="h-5 w-5 duration-500 hover:scale-125 hover:text-cyan-500" />
						</a>
					</li>

					<li>
						<a
							href="https://instagram.com/metalmaniaworks"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram className="h-6 w-6 duration-500 hover:scale-125 hover:text-cyan-500" />
						</a>
					</li>
				</ul>

				<span className="mx-4 md:mx-8">|</span>

				<a
					className="text-center text-xs md:text-base duration-500 hover:text-cyan-500"
					href="https://github.com/PCZeroX"
					target="_blank"
					rel="noopener noreferrer"
				>
					Designed by pczerox
				</a>
			</div>

			{/* <ul className="flex justify-center gap-4 text-center text-xs md:text-base">
				<li>(718) 567-7015</li>
				<span>-</span>
				<li>info@mm-works.com</li>
				<span>-</span>
				<li>metalmania@gmail.com</li>
			</ul> */}
		</footer>
	);
};

export default Footer;
