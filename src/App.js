import react from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/recipe-details/:id" Component={RecipeDetails} />
    </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
