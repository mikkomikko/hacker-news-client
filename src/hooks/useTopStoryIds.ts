import { useState, useEffect } from "react";
import axios from "axios";

export function useTopStoryIds() {
  const [isLoading, setIsLoading] = useState(false);
  const [storyIds, setStoryIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://hacker-news.firebaseio.com/v0/topstories.json"
        );
        setStoryIds(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { isLoading, storyIds };
}
