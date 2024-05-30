import React, { useState, useRef } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import WidgetWrapper from "../../components/WidgetWrapper.jsx";
import videoReel from "../../assets/videoReel.mp4";
import videoReel1 from "../../assets/videoReel1.mp4";
import Navbar from "../navbar/navbar.jsx";

// Hardcoded reel data
const reels = [
  {
    id: "1",
    username: "john_doe",
    description: "Beautiful sunset at the beach",
    videoPath: "path/to/video1.mp4",
    likes: 120,
    comments: 45,
  },
  {
    id: "2",
    username: "jane_smith",
    description: "Hiking adventures in the mountains",
    videoPath: "path/to/video2.mp4",
    likes: 200,
    comments: 60,
  },
];

const Reels = () => {
  const { palette } = useTheme();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const dark = palette.grey[900];
  const main = palette.text.primary;
  const medium = palette.text.secondary;

  return (
    <Box>
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={isMobile ? "0 16px" : "0 300px"}
        margin={isMobile ? "0" : "0 200px"}
      >
        <WidgetWrapper>
          {reels.map((reel) => (
            <ReelItem
              key={reel.id}
              reel={reel}
              dark={dark}
              main={main}
              medium={medium}
            />
          ))}
        </WidgetWrapper>
      </Box>
    </Box>
  );
};

const ReelItem = ({ reel, dark, main, medium }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Box mb="2rem">
      <Box position="relative">
        <video
          ref={videoRef}
          src={reel.id === "1" ? videoReel : videoReel1}
          width="100%"
          height="auto"
          style={{ borderRadius: "0.75rem" }}
          onClick={togglePlayPause}
        />
        <IconButton
          onClick={togglePlayPause}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          {isPlaying ? (
            <PauseIcon sx={{ color: "white" }} />
          ) : (
            <PlayArrowIcon sx={{ color: "white" }} />
          )}
        </IconButton>
      </Box>
      <Box mt="0.5rem">
        <Typography variant="body1" color={main} fontWeight="500">
          {reel.username}
        </Typography>
        <Typography variant="body2" color={medium}>
          {reel.description}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" mt="0.5rem">
        <IconButton onClick={handleLike}>
          {isLiked ? (
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: dark }} />
          )}
        </IconButton>
        <Typography variant="body2" color={main}>
          {isLiked ? reel.likes + 1 : reel.likes}
        </Typography>
        <IconButton>
          <CommentIcon sx={{ color: dark }} />
        </IconButton>
        <Typography variant="body2" color={main}>
          {reel.comments}
        </Typography>
        <IconButton>
          <ShareIcon sx={{ color: dark }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Reels;
