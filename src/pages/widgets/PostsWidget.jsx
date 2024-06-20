import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/index.js";
import PostWidget from "./PostWidget.jsx";
import pro from "../../assets/pro.jpg";
import { getPosts } from "../../data.js";

const PostsWidget = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:6001/posts", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  const getUserPosts = async () => {
    try {
      const response = await fetch(
        `http://localhost:6001/posts/${userId}/posts`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
    } catch (error) {
      console.error("Failed to fetch user posts:", error);
    }
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {ss
      getPosts();
    }
  }, [isProfile, userId, token, dispatch]); // eslint-disable-line react-hooks/exhaustive-deps

  // const getPosts = [
  //   {
  //     _id: "1",
  //     userId: "user1",
  //     firstName: "Rahul",
  //     lastName: "Sharma",
  //     description: "this is a description for post 1",
  //     location: "New york",
  //     picturePath: pro,
  //     userPicturePath: pro,
  //     likes: 15,
  //     comments: ["Great post", "Awesome"],
  //   },
  //   {
  //     _id: "2",
  //     userId: "user2",
  //     firstName: "Rohan",
  //     lastName: "Sharma",
  //     description: "this is a description for post 2",
  //     location: "New york",
  //     picturePath: pro,
  //     userPicturePath: pro,
  //     likes: 11,
  //     comments: ["Great post", "Awesome"],
  //   },
  //   {
  //     _id: "3",
  //     userId: "user3",
  //     firstName: "Rehan",
  //     lastName: "Ch",
  //     description: "this is a description for post 3",
  //     location: "New york",
  //     picturePath: pro,
  //     userPicturePath: pro,
  //     likes: 15,
  //     comments: ["Great post", "Awesome"],
  //   },
  // ];

  // useEffect(() => {
  //   dispatch(setPosts({ posts: getPosts }));
  // }, [dispatch, userId, isProfile]);

  return (
    <>
      {posts.map(
        ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};
export default PostsWidget;
