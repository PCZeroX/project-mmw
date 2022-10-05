import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
	return (
		<div className="grid grid-cols-3 grid-rows-[min-content_auto_min-content] min-h-screen">
			<Header />

			<main className="col-span-4 self-center place-self-center w-full max-w-[1920px]">
				<div className="mx-auto">{children}</div>
			</main>

			<Footer />
		</div>
	);
};
export default Layout;
