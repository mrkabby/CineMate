import { useState, useEffect } from "react";

const useQueryVideos = (id ) => {
  const [video, setVideo] = useState({});

  const [loading, setLoading] = useState(false);

  const getVideos = async () => {
    setLoading(true);
    try {
      if (id) {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=528f87728aee2ed45584d7e02ef65390`
        );
        const result = await response.json();
        console.log(result.results);
        const videoIds = result.results.find(
          (res) => res?.name === "Official Trailer"
        );
        setVideo(videoIds);
        setLoading(false);
        console.log(video);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (id) {
      getVideos();
    }
  }, [id]);

  return {
    video,
    loading,
  };
};

export default useQueryVideos;
