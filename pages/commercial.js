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

			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing
				elit. Fugit pariatur minima beatae tempore doloribus
				voluptates praesentium! Sapiente enim, alias
				voluptatem eveniet repellendus temporibus expedita
				sed, minima, veritatis possimus nam? Repellat!
			</p>

			<div className="flex">
				<div className="relative w-96 h-80">
					<Image
						src="/img/background/bg02.jpg"
						alt="background 02"
						layout="fill"
						className="object-cover object-center w-full h-full"
					/>
				</div>

				<div className="relative w-96 h-80">
					<Image
						src="/img/background/bg02.jpg"
						alt="background 02"
						layout="fill"
						className="object-cover object-center w-full h-full"
					/>
				</div>

				<div className="relative w-96 h-80">
					<Image
						src="/img/background/bg02.jpg"
						alt="background 02"
						layout="fill"
						className="object-cover object-center w-full h-full"
					/>
				</div>
				<div className="relative w-96 h-80">
					<Image
						src="/img/background/bg02.jpg"
						alt="background 02"
						layout="fill"
						className="object-cover object-center w-full h-full"
					/>
				</div>
				<div className="relative w-96 h-80 flex-shrink-0">
					<Image
						src="/img/background/bg03.jpg"
						alt="background 03"
						layout="fill"
						className="object-cover object-center w-full h-full"
					/>
				</div>
			</div>

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
