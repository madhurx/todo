import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/layout/Header/Header";

function App() {
	const AppLayout = () => {
		return (
			<div className="w-screen">
				<Header />
				<Outlet />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <AppLayout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
