const infoCard = [
	{
		title: "History",
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

let content = (
	<div className="py-12 space-y-8">
		<h2 className="text-base md:text-2xl text-center uppercase font-medium tracking-wide">
			Precision + Details Oriented + Great Customer Service
		</h2>
		<div className="flex justify-center items-center">
			<div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-4">
				{infoCard.map((item) => (
					<div key={item.title} className="py-4 space-y-2">
						<img
							src={item.src}
							alt={item.title}
							className="w-full"
						/>
						<h3 className="text-center font-semibold xl:text-xl tracking-wide">
							{item.title}
						</h3>
					</div>
				))}
			</div>
		</div>
	</div>
);

const Details = () => {
	return (
		<div className="max-w-7xl mx-auto py-16 space-y-8">
			<h2 className="text-base md:text-2xl text-center uppercase font-medium tracking-wide">
				Precision + Details Oriented + Great Customer
				Service
			</h2>
			<div className="grid lg:grid-cols-3 mx-4 gap-4">
				{infoCard.map((item) => (
					<div key={item.title} className="space-y-2">
						<img
							src={item.src}
							alt={item.title}
							// className="w-full"
						/>
						<h3 className="text-center font-semibold xl:text-xl tracking-wide">
							{item.title}
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Details;
