import SignUp from "@/components/SignUp";
import { ReactElement } from "react";

interface SignUpPageProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ setIsLogin }): ReactElement => {
  return (
    <SignUp  setIsLogin={setIsLogin} />
  );
}

export default SignUpPage;
