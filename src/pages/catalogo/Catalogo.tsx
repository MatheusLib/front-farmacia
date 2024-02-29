import homeLogo from '../../assets/home.png'
import ListaProdutos from '../../components/produtos/listaprodutos/ListaProdutos';
import ModalProduto from '../../components/produtos/modalproduto/ModalProduto';

function Catalogo() {
    return (
        <>
        <div className="bg-indigo-900 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vinde!</h2>
              <p className='text-xl'>Dê uma olhada em nossos produtos</p>

              <div className="flex justify-around gap-4">
              <ModalProduto/>
              <button className='rounded bg-white text-blue-800 py-2 px-4'>Ver postagens</button>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaProdutos/>
      </>
    );
}

export default Catalogo;