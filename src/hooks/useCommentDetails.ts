import axios from "axios";
import { useState, useEffect } from "react";
import { HackerNewsComment } from "@/types/types";

export function useCommentDetails(commentId: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [commentData, setCommentData] = useState<HackerNewsComment | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${commentId}.json`
        );
        setCommentData(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [commentId]);

  return { isLoading, commentData };
}
