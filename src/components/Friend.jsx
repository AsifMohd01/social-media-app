import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "../state/index.js";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";

//hardcode user data
const hardcodedUser = {
  _id: "123",
  friends: [
    {
      _id: "1",
      firstName: "John",
      lastName: "Doe",
      occupation: "Software Engineer",
      picturePath: "path/to/image1.jpg",
    },
    {
      _id: "2",
      firstName: "Jane",
      lastName: "Smith",
      occupation: "Graphic Designer",
      picturePath: "path/to/image2.jpg",
    },
  ],
};

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { _id } = useSelector((state) => state.user);
  //hardcode user data ,commented due to hardcode data
  // const user = useSelector((state) => state.user);
  const user = hardcodedUser;
  const _id = user ? user._id : null;
  const token = useSelector((state) => state.token);
  // const friends = useSelector((state) => state.user.friends);
  const friends = user ? user.friends : [];

  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const isFriend = friends.find((friend) => friend._id === friendId);

  // Hardcoded user data
  const patchFriend = () => {
    if (!_id) return;

    // Simulate patching friend by updating local state
    let updatedFriends;
    if (isFriend) {
      updatedFriends = friends.filter((friend) => friend._id !== friendId);
    } else {
      updatedFriends = [
        ...friends,
        {
          _id: friendId,
          firstName: name.split(" ")[0],
          lastName: name.split(" ")[1],
          occupation: subtitle,
          picturePath: userPicturePath,
        },
      ];
    }
    dispatch(setFriends({ friends: updatedFriends }));
  };

  //commented due to hardcode data
  // const patchFriend = async () => {
  //   if (!_id) return; //prevent patch request if _id is  null
  //   const response = await fetch(
  //     `http://localhost:3001/users/${_id}/${friendId}`,
  //     {
  //       method: "PATCH",
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   dispatch(setFriends({ friends: data }));
  // };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
            }}
          >
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
    </FlexBetween>
  );
};
export default Friend;
