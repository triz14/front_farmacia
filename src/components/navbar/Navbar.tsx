import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div className="w-full bg-blue-400 text-white flex justify-center py-4">
            <div className="container flex justify-between tex-lg">
                Farmacia
                <div className="flex gap-4">
                    Produtos 
                    <Link to='/categorias' className='hover:underline'>Categorias</Link>
                    <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categoria</Link>
                </div>
            </div>
        </div>
     );
}

export default Navbar;