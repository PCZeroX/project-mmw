import Head from "next/head";

const Contact = () => {
	return (
		<>
			<div className="max-w-7xl mx-auto space-y-8 py-8">
				<Head>
					<title>Metalmania - Contact</title>
				</Head>

				<h1 className="text-center font-bold text-4xl">
					Contact
				</h1>

				<div className="mx-4 grid lg:grid-cols-2 gap-4">
					<div className="space-y-6">
						<h2 className="font-semibold text-xl">
							How we work?
						</h2>
						<p>
							We are very flexible! We are eager to hear
							about you. You can contact us (email/phone)
							with your inquiries. We will dicuss a little
							bit about it. We might ask you to send some
							sketches or pictures and we go after there! Or
							if you want to visit us, shoot us a message so
							we make sure someone will be ther for you to
							assist you in your needs!
						</p>

						<p>
							Share your thoughts with us! We will work with
							you in your project. No project is too big or
							too small. Shoot us an email, call us, contact
							us and send us a picture so we can discuss
							about your inquiries.
						</p>
						<ul className="space-y-2">
							<li>Phone: (718) 567-7015</li>
							<li>Fax: (718) 567-7013</li>
							<li>
								Address: 272 46th St, Brooklyn, New York
								11220
							</li>
							<li>
								Emails: info@mm-works.com -
								metalmaniaworks@gmail.com
							</li>
						</ul>
					</div>

					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.4936418341576!2d-74.01433941838201!3d40.649303846379624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25ab0af9f4627%3A0xffb8750c8963659a!2s272%2046th%20St%2C%20Brooklyn%2C%20NY%2011220!5e0!3m2!1sen!2sus!4v1664933790893!5m2!1sen!2sus"
						allowFullScreen=""
						referrerPolicy="no-referrer-when-downgrade"
						loading="lazy"
						className="w-full lg:h-full h-96"
					></iframe>
				</div>
			</div>

			<div className="absolute top-0 left-0 -z-10 opacity-20 min-h-full w-full bg-cover bg-center bg-no-repeat">
				<img
					// src="/img/banners/banner01.jpg"
					src="/img/background/bg01.jpg"
					alt="Banner 01"
					className="absolute w-full h-full top-0"
				/>
			</div>
		</>
	);
};

export default Contact;
