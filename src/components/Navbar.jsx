import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { IoPerson, IoLogOut} from 'react-icons/io5'


function Navbar (){
    const {isAuthenticated, logout, user} = useAuth();
    return(
     <nav className="bg-slate-800 my-3 flex justify-between py-5 px-10 rounded-lg">
       
        <Link to={
            isAuthenticated ? '/products': '/'
        }>
        <h1 className="text-md font-bold">Productos-Ter</h1>
        </Link>
        


        <ul className="flex gap-x-2">
            {
                isAuthenticated ? (
                    <>
                    <Link to={
            '/provedores'
        }>
        <h1 className="text-md font-bold">Proveedores</h1>
        </Link>
        <Link to={ '/clientes'
        }>
        <h1 className="text-md font-bold">Clientes</h1>
        </Link>
                    <li className='text-lg px-5 '>
                        <div className='flex mx-3 px-3' >
                         <IoPerson size={30}/>{user.username}
                        </div>
                    </li>
                    <li>
                        <Link to='/products/new'
                        className='bg-slate-500 px-4 py-1 rounded-sm'
                        >Agregar Producto</Link>
                    </li>
                    <li>
                        <Link to='/provedor/new'
                        className='bg-slate-500 px-4 py-1 rounded-sm'
                        >Agregar Proveedor</Link>
                    </li>
                    <li>
                        <Link to='/cliente/new' className='bg-slate-500 px-4 py-1 rounded-sm'
                        >Agregar Cliente
                        
                        </Link>
                    </li>
                    <li>
                        <Link to='/' onClick={()=>{logout()}}
                        className='bg-slate-500 rounded-sm'
                        >
                            <IoLogOut size={30}/>
                        </Link>
                    </li>
                    </>
                ) : (
                    <>
                    <li>
                <Link to='/login'
                className='bg-slate-500 px-4 py-1 rounded-sm'
                >Login</Link>
            </li>
            <li>
                <Link to='/register'
                className='bg-slate-500 px-4 py-1 rounded-sm'
                >Register</Link>
            </li>
                    
                    
                    </>
                )
            }
        </ul>
     </nav>
    )
  }


  export default Navbar;