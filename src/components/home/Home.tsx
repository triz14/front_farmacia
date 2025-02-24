import imagem from "../../assets/Pharmacist-pana.png";

function Home() {
    return ( 
        <div className="flex justify-center">
        <div className='container grid grid-cols-2'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
                <h2 className='text-5xl font-bold'>
                    Seja Bem Vinde!
                </h2>
                <p className='text-xl'>
                    Conheça nossos produtos e categorias
                </p>

                <div className="flex justify-around gap-4">
                    <div className="flex justify-around gap-4">
                    </div>
                </div>
            </div>

            <div className="flex justify-center ">
                <img
                    src={imagem}
                    alt="Imagem Página Home"
                    className='w-2/3'
                />
            </div>
        </div>
    </div>
     );
}

export default Home;