import { Link, useLocation } from "react-router-dom";
import { HackerNewsStory } from "@/types/types";
import { formatUnixTime } from "@/utils/dateUtils";

interface Props {
  story: HackerNewsStory;
}

export default function NewsListItem({ story }: Props) {
  const location = useLocation();

  return (
    <div className="news-list-item__meta">
      <span>{story.score} points</span>
      <span>{formatUnixTime(story.time)}</span>
      <span>by {story.by}</span>
      {story.kids?.length === 0 && <span>0 comments</span>}
      {story.kids && story.kids.length > 0 && (
        <Link state={location} to={`/item/${story.id}`}>
          {story.kids.length}{" "}
          {story.kids?.length === 1 ? "comment" : "comments"}
        </Link>
      )}
    </div>
  );
}
