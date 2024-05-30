import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween.jsx";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";

// Hardcoded notifications data
const notifications = [
  {
    id: "1",
    user: "John Doe",
    action: "liked your post",
    time: "2 hours ago",
  },
  {
    id: "2",
    user: "Jane Smith",
    action: "commented on your photo",
    time: "3 hours ago",
  },
  {
    id: "3",
    user: "Alice Johnson",
    action: "started following you",
    time: "1 day ago",
  },
];

const NotificationWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <Typography color={dark} variant="h5" fontWeight="500" mb="1rem">
        Notifications
      </Typography>
      {notifications.map((notification) => (
        <Box key={notification.id} mb="1rem">
          <FlexBetween>
            <Typography color={main} variant="body1" fontWeight="500">
              {notification.user}
            </Typography>
            <Typography color={medium} variant="body2">
              {notification.time}
            </Typography>
          </FlexBetween>
          <Typography color={medium} variant="body2">
            {notification.action}
          </Typography>
        </Box>
      ))}
    </WidgetWrapper>
  );
};

export default NotificationWidget;
