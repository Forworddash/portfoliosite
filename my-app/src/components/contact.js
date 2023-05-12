// import { useState } from 'react';

// type FormState = {
//   name: string;
//   email: string;
//   message: string;
// };

// const ContactForm = () => {
//   const [formState, setFormState] = useState<FormState>({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormState((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formState);
//     // Send form data to backend
//   };

//   return (
//     <div className="max-w-lg mx-auto">
//       <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
//             Name
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formState.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
//             Email
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="email"
//             type="email"
//             name="email"
//             value={formState.email}
//             onChange={handleChange}
//             placeholder="Enter your email address"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
//             Message
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="message"
//             name="message"
//             value={formState.message}
//             onChange={handleChange}
//             placeholder="Enter your message"
//             rows={5}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
