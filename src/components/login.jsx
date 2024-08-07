// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/authContext";
// import { Alert } from "./alert";

// export default function Login() {
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });
//   const { login } = useAuth();
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await login(user.email, user.password);
//       navigate("/");
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const handleChange = ({ target: { value, name } }) =>
//     setUser({ ...user, [name]: value });

//   return (
//     <div className="container">
//       {error && <Alert message={error} />}

//       <form onSubmit={handleSubmit} className="card  mt-5 formularioLogin">
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label text-dark">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             onChange={handleChange}
//             className="form-control"
//             placeholder="youremail@company.tld"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label text-dark">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             onChange={handleChange}
//             className="form-control"
//             placeholder="*************"
//           />
//         </div>

//         <div className="flex items-center justify-between">
//           <button className="btn btn-primary" type="submit">
//             Iniciar
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
