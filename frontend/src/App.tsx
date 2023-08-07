import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import {ChakraProvider} from "@chakra-ui/react";

import Layout from "./components/Layout.tsx";
import {Home} from "./components/Home.tsx";
import {Notify} from "./components/Notify.tsx";
import {Chat} from "./components/Chat.tsx";
import {Projects} from "./components/Projects.tsx";
import {Options} from "./components/Options.tsx";

function App() {
    const router = createBrowserRouter(
            createRoutesFromElements([
                <>
                    <Route path="/" element={<Layout/>}>
                        <Route path="" element={<Home/>}/>
                        <Route path="notify" element={<Notify/>}/>
                        <Route path="chat" element={<Chat/>}/>
                        <Route path="projects/*" element={<Projects/>}/>
                        <Route path="options" element={<Options/>}/>
                    </Route>
                </>
            ]),
        )
    ;


    return (
        <ChakraProvider>
            <RouterProvider router={router}/>
        </ChakraProvider>
    );
}

export default App;