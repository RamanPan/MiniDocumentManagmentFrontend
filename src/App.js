import './App.css';
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import ShowDocs from "./components/pages/ShowDocs";
import {observer} from "mobx-react-lite";
import ShowVersionsDoc from "./components/pages/ShowVersionsDoc";

function App() {
    return (
        <div className="App">
            <BrowserRouter><Routes>
                <Route path="/show-docs" element={<ShowDocs/>}/>
                <Route path="/show-versions-doc" element={<ShowVersionsDoc/>}/>
            </Routes></BrowserRouter>
        </div>
    );
}

export default observer(App);
