import './App.css';
import {Route, Routes} from "react-router";
import Layout from "./Components/Layout";
import LabData from "./Components/LabData";
import LabDataOC from "./Components/LabDataOC";
import Login from './Components/Login';
import Register from './Components/Register';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
    return (
        <Routes>
            <Route path="/" exact={true} element={
                <ProtectedRoute>
                    <Layout/>
                </ProtectedRoute>
            }>
                <Route path="/labData" element={
                    <ProtectedRoute>
                        <LabData/>
                    </ProtectedRoute>
                }/>
                <Route path="/labDataOC" element={
                    <ProtectedRoute>
                        <LabDataOC/>
                    </ProtectedRoute>
                }/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
}

export default App;
