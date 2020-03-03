import React, { useEffect } from "react";

// const ReactMarkdown = require('react-markdown/with-html')

const Blog = () => {

	useEffect(() => {
		(async function getBlogs() {
			// I might end up converting the blog to next for SSR purpose
			// https://dev.to/evantahler/markdown-in-react-1le Tech ref
			// http://collectui.com/designers/BillSKenney/portfolio Design ref
			await require(`./../../blogs/lorem.md`);
		})();
	}, [])

	return (
		<>
			{/* <ReactMarkdown
				source={markdown}
				escapeHtml={false}
			/> */}
			<h1>Title of blog and link to the source</h1>
		</>
	);
};


export default Blog;
