import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { IoPersonAdd, IoLogIn } from 'react-icons/io5'
import ReCaptcha from 'react-google-recaptcha'



function RegisterPage() {
    const {register, handleSubmit, formState:{errors}} =useForm();
    const {signup, isAuthenticated, errors:registerErrors} = useAuth();
    const [captchaValue, setCaptchaValue] = useState(null)



    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticated)
            navigate('/products')
    }, [isAuthenticated])

    const onSubmit = handleSubmit(async (values) =>{
        //console.log(values)
        signup(values)
    })


  return (
    <div className='bg-slate-800 max-w-md p-10 rounded-md  justify-center'>
        
        {
            registerErrors.map( (error, i)=>(
                <div className='bg-red-500 p-2 my-2 text-white' key={i}>
                {error}
                </div>
            ))
        }




        <form onSubmit={onSubmit}>
        <label htmlFor='username'>Username</label>
        <input type='text'
        className='w-full bg-slate-700 text-white px-4 py-2 rounded-md my-2'
        placeholder='Username'
        {
            ...register("username", {required: true, minLength: 5})
        }
        />
        { errors.username?.type==='required' &&(
            <p className='text-red-500 '>El nombre es requerido</p>
        )}
        {errors.username?.type==='minLength'&&(
            <p className='text-red-500'>La longitud minima es de 5 caracteres</p>
        )}
        <label htmlFor='email'>Email</label>
        <input type='email'
        className='w-full bg-slate-700 text-white px-4 py-2 rounded-md my-2'
        placeholder='Email'
        {
            ...register("email", {required: true})
        }/>
        { errors.email &&(
            <p className='text-red-500 '>El email es requerido</p>
        )}
        <label htmlFor='password'>Password</label>
        <input type='password'
        className='w-full bg-slate-700 text-white px-4 py-2 rounded-md my-2'
        placeholder='Password'
        {
            ...register("password", {required: true, minLength: 6})
        }
        
        />
        { errors.password?.type==='required' &&(
            <p className='text-red-500 '>Password requerido</p>
        )}
        { errors.password?.type==='minLength' &&(
            <p className='text-red-500 '>Longitud minima de 6 caracteres</p>
        )}
        <button type='submit' className='bg-zinc-700 px-3 my-3 rounded-md'
            disabled={!captchaValue}
        >  
        <IoPersonAdd size={30}/></button>
        <ReCaptcha
            sitekey='6Ldd4SQpAAAAAF4v37bCiVN8YVFSYsaNSAPpeGFP'
            onChange={(value) => setCaptchaValue(value)}
            />
        </form>
        <p className='flex gap-x-2 justify-between pt-5 mt-5'>
            Ya tienes una cuenta?
            <Link to='/login' className='text-sky-500 '>
                <div className='flex mx-2 px-2 items-start'>
                Inicia sesión!<IoLogIn size={30} className='mx-1'/>
                </div>
                </Link>
        </p>

    </div>
  )
}

export default RegisterPage