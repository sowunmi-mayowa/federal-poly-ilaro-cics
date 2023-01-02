import logo from './logo.svg'
const Admin = () => {

    return (
        <div className="admin flex  h-screen gap-8">
           <div className="bg-cicsGreen h-screen p-12 flex flex-col items-start justify-between">
               <img src={ logo } alt="cics logo" className=" w-3/4 border-solid border-b-1"/>

               <div>
                   <ul className="text-white flex flex-col gap-y-4 gap-4">
                       <li className="font-bold border-l-4 border-solid">Dashboard</li>
                       <li>Membeer</li>
                       <li>Loan</li>
                       <li>Community</li>
                   </ul>
               </div>

               <button className="text-white border-solid border-2 rounded-lg px-8 py-2">Logout</button>
           </div>
           <div className="flex flex-col gap-40 mt-20">
               <h3 className="text-cicsGreen font-bold text-2xl">Welcome Admin!</h3>
              <div className=" flex gap-8 items-center">
                <div className="shadow-lg rounded-lg p-4 flex flex-col gap-y-2">
                    <p className="text-center text-cicsGrey text-sm">Total Members</p>
                    <h1 className="text-center text-4xl font-bold text-cicsGrey">255</h1>
                    <button className="bg-cicsGreen text-white font-bold px-4 py-2 rounded-md capitalize">register members</button>
                </div>
                <div className="rounded-lg p-4 flex flex-col gap-y-2 bg-cicslightGrey">
                   <p className="text-center text-cicsGrey text-sm">servicing Loans</p>
                   <h1 className="text-center text-4xl font-bold text-cicsGrey">50+</h1>
                   <button className="text-cicsGreen font-semibold px-16 py-2 rounded-md capitalize border-solid border-b-2 inline-block">view</button>
               </div>
              </div>
           </div>
        </div>
    )
}

export default Admin;