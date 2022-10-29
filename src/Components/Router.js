import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import UserForm from "./UserForm";

export const router = createBrowserRouter([
    {
        path:'/', element:<Root/>,
        children:[
            {path:'/', element:<UserForm/>}
        ]
    }
])