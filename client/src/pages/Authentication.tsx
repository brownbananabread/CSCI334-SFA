import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { Fingerprint } from "lucide-react";
import { Link } from "react-router";
import { useAlert } from "../context/AlertContext";
import LandingForm from "../components/forms/LandingForm";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import { handleLandingFormSubmit, handleLoginFormSubmit, handleRegisterFormSubmit} from "../utils/formSubmit";

export default function Auth() {
  const { showAlert } = useAlert();
  const [step, setStep] = useState<"landing" | "login" | "register">("landing");
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (step === "landing") { 
        if (await handleLandingFormSubmit(email)) {
            setStep("login");
            showAlert("Email found!", "Showing login screen.", "success");
        } else {
            setStep("register");
            showAlert("Email not found!", "Showing register screen.", "info");
        }

      } else if (step === "login") { 
        if (await handleLoginFormSubmit(email, password)) {
          showAlert("Welcome back!", `${email} is logged in.`, "success", true, "#", "Learn More");
          setTimeout(() => window.location.href = "/dashboard", 2000);
        } else {
          showAlert("Wrong Password!", "Enter your password...", "error");
        }

      } else if (step === "register") {
        if (await handleRegisterFormSubmit(firstName, lastName, email, password, isBusinessAccount)) {
          showAlert("Account Created!", `${email} has been created.`, "info", true, "#", "Learn More");
          setTimeout(() => window.location.href = "/dashboard", 2000);
        } else {
          showAlert("Account Not Created", "Error...", "error");
        }
      }
    } catch (error) {
      console.error(error);
      showAlert("Error!", "Something went wrong. Please try again.", "error", true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>CSCI334 | Get Started</title>
      </Helmet>
      <div className="flex flex-col h-screen bg-white dark:bg-gray-900 relative">
        <div className="flex flex-1 p-6 sm:p-0 overflow-hidden">
          <div className="relative flex flex-col justify-center w-full lg:flex-row dark:bg-gray-900">
            <div className="w-full max-w-md m-auto ">
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
                <LandingForm
                  email={email}
                  setEmail={setEmail}
                  onSubmit={handleFormSubmit}
                  isLoading={isLoading}
                />
              )}
              {step === "login" && (
                <LoginForm
                  password={password}
                  setPassword={setPassword}
                  onSubmit={handleFormSubmit}
                  isLoading={isLoading}
                />
              )}
              {step === "register" && (
                <RegisterForm
                  firstName={firstName}
                  lastName={lastName}
                  password={password}
                  isTermsChecked={isTermsChecked}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setPassword={setPassword}
                  setIsTermsChecked={setIsTermsChecked}
                  setIsBusinessAccount={setIsBusinessAccount}
                  onSubmit={handleFormSubmit}
                  isLoading={isLoading}
                />
              )}
            </div>

            <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
              <div className="relative flex items-center justify-center z-1">
                <div className="flex flex-col items-center max-w-xs">
                  <div className="py-8 justify-center hidden lg:flex">
                    <Link to="/dashboard" className="flex items-center">
                      <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded">
                        <Fingerprint />
                      </span>
                      <span className="ml-2 text-3xl font-medium text-white dark:text-white">Service Finder App</span>
                    </Link>
                  </div>
                  <p className="text-center text-gray-400 dark:text-white/60">
                    Description about our app and what we do. Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
