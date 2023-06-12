import { useParams } from "react-router-dom";

export default function Books() {
	const { bookId } = useParams();
	return (
		<div>
			<h1>Hello from Books {bookId}</h1>
		</div>
	);
}
