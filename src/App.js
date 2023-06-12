import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Books from "./Books";
import Contact from "./Contact";
import BookList from "./BookList";
import BookLayout from "./BookLayout";

const App = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/profile">Profile</Link>
			<Link to="/books">Books</Link>
			<Link to="/contact">Contact</Link>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/books" element={<BookLayout />}>
					<Route index element={<BookList />} />
					<Route path=":bookId" element={<Books />} />
				</Route>
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</div>
	);
};

export default App;
