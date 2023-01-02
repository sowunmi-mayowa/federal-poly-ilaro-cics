import logo from './logo.svg';
import {Link} from "react-router-dom";

const Login = () => {
    
  return(
      <>
      
        <div className="login h-screen flex justify-center items-center flex-col">
            <img src={logo} alt="cics logo" className="mb-6 w-24"/>

            <form action="" method="post">
                <div className="my-4">
                    <h1 className=" text-3xl font-bold"> Welcome Admin!</h1>
                    {/* <p className="text-cicsGrey text-center text-md">Some text goes here to give more <br/> information about the heading. </p> */}
                </div>
                <div className="flex flex-col">
                    <input className=" text-cicsGrey bg-cicslightGrey p-2 mt-2 rounded-md outline-none w-64 text-sm" placeholder="Enter Username" />
                    <input className=" text-cicsGrey bg-cicslightGrey p-2 mt-2 rounded-md outline-none w-64 text-sm" placeholder="Enter Password" />
                    <p className="text-cicsBlue text-md flex-start my-4">Forgotten Password</p>
                </div>
                <Link to="/admin" >
                <button className="bg-cicsGreen text-white p-2 mt-2 rounded-md outline-none w-64 text-sm">Login</button>

                </Link>
            </form>

        </div>

        
        </>

    )
}

export default Login;