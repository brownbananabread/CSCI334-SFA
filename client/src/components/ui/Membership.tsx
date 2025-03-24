import Badge from "../ui/Badge";

const Membership = ({ premiumMembership = false }: { premiumMembership?: boolean }) => {
  return (
    <Badge size="sm" color={premiumMembership ? "success" : "primary"} variant="light">
      {premiumMembership ? "Premium" : "Free"}
    </Badge>
  );
};

export default Membership;
