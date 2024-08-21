'use client'
import { createUser } from "@/utils/actions";
// using formstate and formstatus
import { useFormState, useFormStatus } from "react-dom";

// const CreateUser = async() => {
//   'use server'
//   console.log('creating User....');
// };

//this
const SubmitButton = () => {
  const {pending} = useFormStatus();
  return (
    <button type="submit" className={btnStyle} disabled={pending}>
      {pending? 'submitting...' : 'submit'}
    </button>
  );
};

function Form() {
  const [message, formAction] = useFormState(createUser, null);
  return (
    <form action={formAction} className={formStyle}>
      {message && <p>{message}</p>}
      <h2 className="text-2xl capitalize mb-4">create user</h2>
      <input 
        type="text" 
        name="firstname" 
        defaultValue='berthem' 
        required 
        className={inputStyle} 
      />
      <input 
        type="text" 
        name="lastname" 
        defaultValue='benitez jr.' 
        required 
        className={inputStyle}
      />
      {/* <button type="submit" className={btnStyle}>submit</button> */}
      <SubmitButton />
    </form>
  )
}

export default Form

const formStyle = 'max-w-lg flex flex-col gap-y-4  shadow rounded p-8';
const inputStyle = 'border shadow rounded py-2 px-3 text-gray-700';
const btnStyle =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded capitalize';