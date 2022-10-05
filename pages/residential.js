import Head from "next/head";
import Image from "next/image";

const Residential = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<Head>
				<title>Metalmania - Residential</title>
			</Head>

			<h1 className="text-center font-bold text-4xl">
				Residential
			</h1>

			<div className="absolute top-0 left-0 -z-10 opacity-20 w-full h-full">
				<Image
					src="/img/background/bg03.jpg"
					alt="Background 03"
					layout="fill"
					className="object-cover object-center"
				/>
			</div>
		</div>
	);
};

export default Residential;
