import React, { useEffect, useState } from 'react'

// const Resgister = () => {

//     const[name , setName] = useState('')
//     const[email , setsEmail] = useState('')
//     const[password , setPassword] = useState('')
//     const[address , setAddress] = useState('')
//     const[users ,    setUsers] = useState([])

//     const ResgisterUser = async(e)=>{
//       e.preventDefault()

//        let result = await fetch("http://localhost:7000/api/auth/signup  ",{
//         method:'post',
//         body: JSON.stringify({name,email,password,address}),
//         headers:{
//           "content-Type":"Application/json"
//         }
//        })
//           result= await result.json()
//           console.log(result)
//     }

//       const getUserList=async()=>{

//         let result= await fetch("http://localhost:7000/api/auth/list")
//         result = await result.json()
//         setUsers(result)
//         console.log(result)
 

//    }

//     useEffect(()=>{
//       getUserList()
//     },[])

//   return (
//     <div>
//         <h1>Resgister user</h1>

// <form> 
//    Name:     <input name='name' onChange={( e)=>{ setName(e.target.value)}}type='text' placeholder='user name'/><br/>
//     email:    <input email ='email'onChange={(e)=>{ setsEmail(e.target.value)}}type='text' placeholder='user email'/><br/>
//     password: <input password='password'onChange={(e)=>{ setPassword(e.target.value)}}type='text' placeholder='user password'/><br/>
//     address:  <input address='address'onChange={(e)=>{ setAddress(e.target.value)}}type='text' placeholder='user address'/><br/>
//  <button onClick={ResgisterUser}>Register</button>
// </form>

// <hr/>
// <h1>list of users</h1>
//    <table align='center' width={"70%"} border={1} cellPadding={10} cellSpacing={10}>
//     <tr style={{backgroundColor: "blue", color:"white"}}>
//       <td>sr.No</td>
//       <td>Name</td>
//       <td>email</td>
//       <td>password</td>
//       <td>address</td>
//       <td>Operations</td>
//     </tr>

//       {
//         users.map((user, index)=>{
//           return(
//             <>
//                 <tr style={{ color:"red"}}>
//       <td>{index+1}</td>
//       <td>{user.name}</td>
//       <td>{user.email}</td>
//       <td>{user.password}</td>
//       <td>{user.address}</td>
//         <td style={{ backgroundColor:"lightblue", padding:"10px 5px", borderRadius:'5px',marginRight:'50px', color:"white"}}>
//          <button style={{backgroundColor:"lightgreen", marginRight:"30px",}}>Edit</button>
//          <button style={{backgroundColor:"red"}}>Delete</button>
//          </td>

//     </tr>
//             </>
//           )
//         })
//       }

//    </table>

//     </div>

//   )
// }

// export default Resgister