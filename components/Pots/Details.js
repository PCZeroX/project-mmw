import Image from "next/image";

const detailCard = [
	{
		title: "Our History",
		description:
			"MetalMania opens its door for business in 2009. Since its humble beginnings, every single client has been very satisfied with the quality of the job requested.",
		src: "/img/details/detail01.jpg",
	},
	{
		title: "Our Projects",
		description:
			"All of our projects and works are proudly elaborated in our shop. Using metal tools, hands tools and even custom made tools along with high skilled workers, we are able to produce unique and precis pieces, making each piece a masterpiece.",
		src: "/img/details/detail02.jpg",
	},
	{
		title: "Our Business",
		description:
			"The skeleton our business consist mainly in our highly skilled metal fabricators. He has been working in this industry for more than thirty years. His beginnings were in Macau, China almost fifteen years, reconstructing casinos in Macau. Later, his knowledge broadense then he continued working in the same filed New York City, creating artisan handcraft metal pieces for clients.",
		src: "/img/details/detail03.jpg",
	},
];

const Details = () => {
	return (
		<div className="max-w-7xl mx-auto py-24 space-y-16">
			<h2 className="text-base md:text-2xl text-center uppercase font-medium tracking-wide">
				Precision + Details Oriented + Great Customer
				Service
			</h2>
			<div
				className="mx-4 space-y-8 lg:flex lg:flex-col lg:relative lg:space-y-48

				after:relative
				after:w-1 after:h-full after:lg:absolute after:bg-gray-800 after:rounded after:z-10 after:top-0 after:left-1/2 after:-translate-x-1/2
			"
			>
				{detailCard.map((item) => (
					<div
						key={item.title}
						className="space-y-4 lg:grid lg:grid-cols-2 lg:relative lg:gap-16 lg:items-center

						detail-card

						after:lg:block after:lg:w-4 after:lg:h-4 after:lg:absolute after:lg:bg-gray-700 after:lg:rounded-full after:lg:border-gray-500 after:lg:border-2 after:lg:top-1/2 after:lg:left-1/2 after:lg:z-20 after:lg:-translate-x-1/2
					"
					>
						<div className="flex justify-center">
							<Image
								src={item.src}
								alt={item.title}
								width={640}
								height={320}
								className="object-cover object-center rounded-sm"
							/>
						</div>
						<div className="space-y-4 flex flex-col">
							<h3 className="lgTo:text-center font-semibold lg:text-2xl tracking-wide">
								{item.title}
							</h3>
							<p>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Details;
