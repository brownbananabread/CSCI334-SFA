import { FC } from "react";
import Badge from "../ui/Badge"; // Adjust the import path as needed

const Membership: FC = () => {
  const premiumMembership = false;

  return (
    <Badge size="sm" color={premiumMembership ? "success" : "primary"} variant="light">
      {premiumMembership ? "Premium" : "Free"}
    </Badge>
  );
};

export default Membership;
