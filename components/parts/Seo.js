import Head from "next/head";

export default function Seo(props) {
	const {
		title = "The Pantry Cabinet",
		description = "A Pantry Inventory Site Built With NextJS and TailwindCSS",
	} = props;

	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
			<meta httpEquiv="content-type" content="text/html; charset=utf-8"/>

			<title>{title}</title>
			<meta name="description" content={description}/>
			<link rel="icon" href="/favicon.ico"/>

			<meta property="og:title" content={title}/>
			<meta property="og:description" content={description}/>
			<meta property="og:image" content="/static/images/default.jpg"/>
			<meta property="og:image:alt" content="Pantry Cabinet"/>
			<meta property="og:type" content="website"/>

			<meta name="color-scheme" content="light"/>
		</Head>
	);
}