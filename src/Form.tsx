import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}

function Form() {
  const { register } = useForm();
  return (
    <form>
      <input {...register("email")} placeholder="Email" />
      <input {...register("firstName")} placeholder="First Name" />
      <input {...register("lastName")} placeholder="Last Name" />
      <input {...register("username")} placeholder="Username" />
      <input {...register("password")} placeholder="Password" />
      <input {...register("password1")} placeholder="Password1" />
      <button>Add</button>
    </form>
  );
}
export default Form;
