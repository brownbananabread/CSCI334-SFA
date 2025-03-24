import { useState, useEffect, FormEvent } from "react";
import { Loader2 } from "lucide-react";
import Button from "../ui/Button";
import Label from "../ui/Label";
import Input from "../ui/InputField";
import Checkbox from "../ui/Checkbox";
import Switch from "../ui/Switch";
import { useAlert } from "../../context/AlertContext";
import { validateEmailRegex } from "../../utilities/formating";
import MoreInfo from "../common/MoreInfo";
import { fetchRequest } from "../../api/fetch";

const RegisterLoginForm = () => {
  const { showAlert } = useAlert();
  const [step, setStep] = useState<"landing" | "login" | "register">("landing");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isBusinessAccount, setBusinessAccount] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (step === "landing") {
      setIsFormValid(validateEmailRegex(email));
    } else if (step === "login") {
      setIsFormValid(password.length >= 8);
    } else if (step === "register") {
      setIsFormValid(
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        password.length >= 8 &&
        isTermsChecked 
      );
    }
  }, [email, password, firstName, lastName, isTermsChecked, step]);

  const validateEmail = async (email: string) => {
    try {
      const response = await fetchRequest({
        method: 'POST',
        url: 'http://localhost:5174/api/validate',
        data: { email },
      });
  
      setIsLoading(false);
  
      if (response.isValid) {
        setStep("login");
        showAlert("Email found!", "Showing login screen.", "success");
      } else {
        setStep("register");
        showAlert("Email not found!", "Showing register screen.", "info");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error validating email:", error);
      showAlert("Error!", "An error occurred while validating the email. Please try again later.", "error", true);
    }
  };

  const login = async (password: string) => {
    try {
      const response = await fetchRequest({
        method: 'POST',
        url: 'http://localhost:5174/api/login',
        data: { password },
      });
  
      setIsLoading(false);
  
      if (response.isValid) {
        showAlert("Welcome back!", `${email} is logged in.`, "success", true, "#", "Learn More");
                
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      } else {
        showAlert("Wrong Password!", "Enter your password...", "error");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error validating email:", error);
      showAlert("Error!", "An error occurred while validating the email. Please try again later.", "error", true);
    }
  };

  const register = async (firstName: string, lastName: string, password: string, isTermsChecked: boolean, isBusinessAccount: boolean) => {
    try {
      const response = await fetchRequest({
        method: 'POST',
        url: 'http://localhost:5174/api/register',
        data: { 
          firstName,
          lastName,
          password,
          isTermsChecked,
          isBusinessAccount
         },
      });
  
      setIsLoading(false);
  
      if (response.isValid) {
        showAlert("Account Created!", `${email} has been successfully created.`, "info", true, "#", "Learn More");
        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 2000);
      } else {
        showAlert("Account Not Created", "Error...", "error");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error validating email:", error);
      showAlert("Error!", "An error occurred while validating the email. Please try again later.", "error", true);
    }
  };

  const handleFormSubmit = (e: FormEvent) => {
    if (!isFormValid) return;
    e.preventDefault();
    setIsLoading(true);

    if (step === "landing") { validateEmail(email) } 
    else if (step === "login") { login(password) } 
    else { register(firstName, lastName, password, isTermsChecked, isBusinessAccount) } 
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto" />
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              {step === "landing" ? "Register / Login" : step === "login" ? "Login" : "Create Account"}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {step === "landing"
                ? "Enter your email to get started!"
                : step === "login"
                ? "Enter your password to continue."
                : "Create a password to register."}
            </p>
          </div>

          {step === "landing" && (
            <form onSubmit={handleFormSubmit}>
              <div className="mb-5">
                <Label>Email <span className="text-error-400">*</span></Label>
                <Input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                />
                <p className={`mt-1.5 text-xs ${!validateEmailRegex(email) && email ? "text-error-400" : validateEmailRegex(email) ? "text-success-400" : ""}`}>
                {!validateEmailRegex(email) && email ? "Invalid email format." : validateEmailRegex(email) ? "Email looks good!" : ""}
                </p>
              </div>
              <Button className="w-full flex items-center justify-center gap-2" size="sm" disabled={!isFormValid || isLoading}>
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Continue"}
              </Button>
              <MoreInfo />
            </form>
          )}

          {step === "login" && (
            <form onSubmit={handleFormSubmit}>
                <div className="mb-5">
                <Label>Password <span className="text-error-400">*</span></Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                  setPassword(e.target.value);
                  }}
                  placeholder="Enter your password"
                />
                </div>
              <Button className="w-full flex items-center justify-center gap-2" size="sm" disabled={!isFormValid || isLoading}>
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login"}
              </Button>
              <MoreInfo />
            </form>
          )}

          {step === "register" && (
            <form onSubmit={handleFormSubmit}>
                 <div className="mb-8 flex items-center gap-8">
                  <Switch 
                  label="Are you registering as a Sole Trader?"
                  color="gray"
                  onChange={(value: boolean) => setBusinessAccount(value)}
                  />
                </div>
              <div className="mb-5">
                <Label>First Name <span className="text-error-400">*</span></Label>
                <Input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />
              </div>
              <div className="mb-5">
                <Label>Last Name <span className="text-error-400">*</span></Label>
                <Input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name"/>
              </div>
              <div className="mb-5">
                <Label>Password <span className="text-error-400">*</span></Label>
                <Input type="password" id="registerPassword" name="registerPassword" value={password} onChange={ (e) => {
                  setPassword(e.target.value); }} placeholder="Enter your password"/>
                <p className={`mt-1.5 text-xs ${password.length > 0 && password.length < 8 ? "text-error-400" : password.length >= 8 ? "text-success-400" : ""}`}>
                {password.length > 0 && password.length < 8 ? "Password must be at least 8 characters." : password.length >= 8 ? "Password looks good!" : ""}
                </p>
              </div>
                <div className="mb-5 flex items-center gap-3">
                <Checkbox checked={isTermsChecked} onChange={() => setIsTermsChecked(!isTermsChecked)} />
                <p className="text-sm text-gray-500">By creating an account, you agree to the <span className="text-gray-900">Terms and Conditions.</span></p>
                </div>
              <Button className="w-full flex items-center justify-center gap-2" size="sm" disabled={!isFormValid || isLoading}>
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Register"}
              </Button>
              <MoreInfo />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterLoginForm;
