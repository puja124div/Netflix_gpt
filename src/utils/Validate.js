
export const validate=(email,password)=>{
  const isEmailValidate=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValidate=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!isEmailValidate) return "Email is not valid";
  if(!isPasswordValidate) return "Passowrd is not valid";
  return null;
}