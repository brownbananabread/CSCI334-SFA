import { FormEvent } from "react";
import Button from "../ui/Button";
import Label from "../ui/Label";
import Input from "../ui/InputField";
import Checkbox from "../ui/Checkbox";
import Switch from "../ui/Switch";
import MoreInfo from "../common/MoreInfo";
import { Loader2 } from "lucide-react";

interface Props {
  firstName: string;
  lastName: string;
  password: string;
  isTermsChecked: boolean;
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setPassword: (value: string) => void;
  setIsTermsChecked: (value: boolean) => void;
  setIsBusinessAccount: (value: boolean) => void;
  onSubmit: (e: FormEvent) => void;
  isLoading: boolean;
}

export default function RegisterForm({
  firstName,
  lastName,
  password,
  isTermsChecked,
  setFirstName,
  setLastName,
  setPassword,
  setIsTermsChecked,
  setIsBusinessAccount,
  onSubmit,
  isLoading,
}: Props) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-8 flex items-center gap-8">
        <Switch
          label="Are you registering as a Sole Trader?"
          color="gray"
          onChange={setIsBusinessAccount}
        />
      </div>
      <div className="mb-5">
        <Label>First Name <span className="text-error-400">*</span></Label>
        <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />
      </div>
      <div className="mb-5">
        <Label>Last Name <span className="text-error-400">*</span></Label>
        <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" />
      </div>
      <div className="mb-5">
        <Label>Password <span className="text-error-400">*</span></Label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
        <p className={`mt-1.5 text-xs ${password.length > 0 && password.length < 8 ? "text-error-400" : password.length >= 8 ? "text-success-400" : ""}`}>
          {password.length > 0 && password.length < 8 ? "Password must be at least 8 characters." : password.length >= 8 ? "Password looks good!" : ""}
        </p>
      </div>
      <div className="mb-5 flex items-center gap-3">
        <Checkbox checked={isTermsChecked} onChange={() => setIsTermsChecked(!isTermsChecked)} />
        <p className="text-sm text-gray-500">
          By creating an account, you agree to the <span className="text-gray-900">Terms and Conditions.</span>
        </p>
      </div>
    <Button
      className="w-full flex items-center justify-center gap-2"
      size="sm"
      disabled={isLoading || !isTermsChecked || password.length < 8 || !firstName || !lastName}
    >
      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Register"}
    </Button>
      <MoreInfo />
    </form>
  );
}
