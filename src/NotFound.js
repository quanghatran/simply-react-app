import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className='not-found'>
			<h2>sorry</h2>
			<p>can not found the page</p>
			<Link to='/'>Back to the home page</Link>
		</div>
	);
};

export default NotFound;
