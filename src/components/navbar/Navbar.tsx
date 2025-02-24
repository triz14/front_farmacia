function Navbar() {
    return ( 
        <div className="w-full bg-blue-400 text-white flex justify-center py-4">
            <div className="container flex justify-between tex-lg">
                Farmacia
                <div className="flex gap-4">
                    Produtos 
                    Categorias
                </div>
            </div>
        </div>
     );
}

export default Navbar;