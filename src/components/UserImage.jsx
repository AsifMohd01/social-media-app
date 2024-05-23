import { Box } from "@mui/material";
import pro from "../assets/pro.jpg";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        // src={`http://localhost:3001/assets/${image}`}
        src={pro}
      />
    </Box>
  );
};
export default UserImage;
