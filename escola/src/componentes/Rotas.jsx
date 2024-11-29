
import {BrowserRouter, Routes,Route} from "react-router-dom";

import Home from "../paginas/Home";
import Cadastro from "../paginas/Cadastro";
import Consulta from "../paginas/Consulta";
import Alteracao from "../paginas/Alteracao";
import Exclusao from "../paginas/Exclusao";
import Erro from "../paginas/Erro"; 

import Menu from "./Menu";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path="/consulta" element={<Consulta/>}/>
                <Route path="/alteracao/:codigo" element={<Alteracao/>}/>
                <Route path="/exclusao/:codigo" element={<Exclusao/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    ); 
}