import { FormEvent } from "react";
import Button from "../ui/Button";
import Label from "../ui/Label";
import Input from "../ui/InputField";
import MoreInfo from "../common/MoreInfo";
import { Loader2 } from "lucide-react";
import { validateEmailRegex } from "../../utils/validate";

interface Props {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: (e: FormEvent) => void;
  isLoading: boolean;
}

export default function LandingForm({ email, setEmail, onSubmit, isLoading }: Props) {
  const isEmailValid = validateEmailRegex(email);
  return (
    <form onSubmit={onSubmit}>
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
        <p className={`mt-1.5 text-xs ${!isEmailValid && email ? "text-error-400" : isEmailValid ? "text-success-400" : ""}`}>
          {!isEmailValid && email ? "Invalid email format." : isEmailValid ? "Email looks good!" : ""}
        </p>
      </div>
      <Button className="w-full flex items-center justify-center gap-2" size="sm" disabled={!isEmailValid || isLoading}>
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Continue"}
      </Button>
      <MoreInfo />
    </form>
  );
}
