import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/Friend.jsx";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state/index.js";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user?.friends || []); // Use optional chaining and provide a default empty array

  //HardCoded friends data
  const getFriends = [
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
    {
      _id: "3",
      firstName: "Alice",
      lastName: "Johnson",
      occupation: "Product Manager",
      picturePath: "path/to/image3.jpg",
    },
  ];

  useEffect(() => {
    // Set the hardcoded friends data in the Redux store
    dispatch(setFriends({ friends: getFriends }));
  }, [dispatch]);

  //   const getFriends = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3001/users/${userId}/friends`,
  //         {
  //           method: "GET",
  //           headers: { Authorization: `Bearer ${token}` },
  //         }
  //       );
  //       const data = await response.json();
  //       dispatch(setFriends({ friends: data }));
  //     } catch (error) {
  //       console.error("Failed to fetch friends:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     getFriends();
  //   }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.length > 0 ? (
          friends.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
          ))
        ) : (
          <Typography>No friends found</Typography>
        )}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
