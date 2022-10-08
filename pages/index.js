import Head from "next/head";
import Details from "../components/Pots/Details";
import BannerSlider from "../components/Slider/BannerSlider";

export default function Home() {
	return (
		<div className="">
			<Head>
				<meta
					name="description"
					content="Driven passion for fine metal fabrication"
				/>
				<link rel="icon" href="/favicon.ico" />
				<title>MetalMania</title>
			</Head>

			<BannerSlider />

			<Details />
		</div>
	);
}
