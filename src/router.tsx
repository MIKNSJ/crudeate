import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx"
import ToDo from "./components/todo.tsx"

const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/todo", element: <ToDo />},
]);

export default router
