import { useState } from "react";
import { useEffect } from "react"

const Users= () =>{

    const[users ,    setUsers] =useState([]);

    const getUserList=async()=>{

                let result= await fetch("http://localhost:7000/api/auth/list")
                result = await result.json()
                setUsers(result)
                console.log(result);
           };

           const deleteUser= async (userId)=>{
           let result =  await fetch(`http://localhost:7000/api/auth/list/${userId}`,{

              method:"Delete"
            })
            result=  await result.json();
            if(result){
              getUserList(  )
            }
          }  
            
        
            useEffect(()=>{
              getUserList()
            },[])
        

    return(
        <>

       <h1 className="my-3 text-center">list of Page</h1>
       <div className="container">
       <table className="table table-stripped table-bordered  ">
  <thead>
    <tr>
      <th scope="col">sr.no</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Address</th>
      <th scope="col">Operations</th>
      
    </tr>
  </thead>
  <tbody>
           {
            
            users.map((user , index )=>{
                return(
                  
                  <>

<tr key={index}>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.password}</td>
      <td>{user.address}</td>
      <td>
        <button className="btn btn-success btn-sm m-2">Edit</button>
        <button  onClick={()=>deleteUser(user._id)} className="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
                  </>  
                )
            })

            }
           

  </tbody>
</table>

       </div>

        </>
    )
}

export default Users