import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import QuestionSets from "./views/QuestionSets";

type Props = {};

const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question-sets" element={<QuestionSets />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
