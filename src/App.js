import './App.css';
import {Route, Routes} from "react-router";
import Layout from "./Components/Layout";
import LabData from "./Components/LabData";

function App() {
    return (
        <Routes>
            <Route path="/" exact={true} element={
                <Layout/>
            }>
                <Route path="/labData" element={
                    <LabData/>
                }/>
            </Route>
        </Routes>
    );
}

export default App;
