import { FormEvent } from "react";
import Button from "../ui/Button";
import Label from "../ui/Label";
import Input from "../ui/InputField";
import MoreInfo from "../common/MoreInfo";
import { Loader2 } from "lucide-react";

interface Props {
  password: string;
  setPassword: (password: string) => void;
  onSubmit: (e: FormEvent) => void;
  isLoading: boolean;
}

export default function LoginForm({ password, setPassword, onSubmit, isLoading }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-5">
        <Label>Password <span className="text-error-400">*</span></Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>
      <Button className="w-full flex items-center justify-center gap-2" size="sm" disabled={password.length < 8 || isLoading}>
        {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Login"}
      </Button>
      <MoreInfo />
    </form>
  );
}
