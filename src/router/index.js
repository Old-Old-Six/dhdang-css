import React from "react";
import { Route, Routes } from "react-router-dom";
import {Home} from "../pages/home.jsx";
import { Test1 } from "../pages/test1.jsx";

const CustomRouter = () => {
	return (
		<Routes>
			<Route path="/" exact={false} element={<Home/>} />
			<Route path="/t1" exact={true} element={<Test1/>} />
		</Routes>
	);
};

export default CustomRouter;
