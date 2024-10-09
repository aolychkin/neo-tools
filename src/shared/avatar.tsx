import Avatar from "@mui/joy/Avatar";

export function ProfileAvatar({
  avatar, avatarSize
}: {
  avatar: string;
  avatarSize: any;
}) {
  return (
    <Avatar
      variant="outlined"
      size={avatarSize}
      src={avatar}
    />
  )
}