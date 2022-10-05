import Head from "next/head";
import Image from "next/image";

const Commercial = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<Head>
				<title>Metalmania - Commercial</title>
			</Head>

			<h1 className="text-center font-bold text-4xl">
				Commercial
			</h1>

			<div className="absolute top-0 left-0 -z-10 opacity-20 w-full h-full">
				<Image
					src="/img/background/bg04.jpg"
					alt="Background 04"
					layout="fill"
					className="object-cover object-center"
				/>
			</div>
		</div>
	);
};

export default Commercial;
