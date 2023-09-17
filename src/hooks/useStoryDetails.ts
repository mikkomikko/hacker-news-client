import axios from "axios";
import { useState, useEffect } from "react";
import { HackerNewsStory } from "@/types/types";

export function useStoryDetails(storyId: string | undefined) {
  const [isLoading, setIsLoading] = useState(false);
  const [storyData, setStoryData] = useState<HackerNewsStory | null>(null);

  useEffect(() => {
    if (!storyId) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
        );
        setStoryData(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [storyId]);

  return { isLoading, storyData };
}
