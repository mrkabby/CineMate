import { useState, useEffect } from "react";

const useQueryVideos = (id) => {
  const [video, setVideo] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isActive = true;

    const getVideos = async () => {
      setLoading(true);
      try {
        if (id) {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API_KEY}`
          );
          const result = await response.json();
          const videoIds = result.results.find(
            (res) => res?.name === "Official Trailer"
          );

          if (isActive) {
            setVideo(videoIds);
          }
        }
      } catch (err) {
        console.error(err);
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    getVideos();

    return () => {
      isActive = false;
    };
  }, [id]);

  return {
    video,
    loading,
  };
};

export default useQueryVideos;
