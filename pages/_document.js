import Document, {
	Html,
	Head,
	Main,
	NextScript,
} from "next/document";

export default class Mydocument extends Document {
	render() {
		return (
			<Html
				lang="en"
				className={`scroll-smooth text-white bg-black/90 font-roboto`}
			>
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com"
					/>
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Raleway:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700;900&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
