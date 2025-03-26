import Badge from "../ui/Badge";

export const CustomerMembership = () => {
  return (
    <Badge size="sm" color={"primary"} variant="light">
      Customer
    </Badge>
  )
}

export const SoleTraderMembership = () => {
  return (
    <Badge size="sm" color={"success"} variant="light">
      Business
    </Badge>
  )
}

export const AdminMembership = () => {
  return (
    <Badge size="sm" color={"error"} variant="light">
      Admin
    </Badge>
  )
}