import { Link, useLocation } from "react-router-dom";
import { useStoryDetails } from "@/hooks/useStoryDetails";
import NewsListItemLoader from "./NewsListItemLoader";
import NewsListItemMeta from "./NewsListItemMeta";
import { ArrowUpRight } from "react-feather";

interface Props {
  storyId: string;
  index: number;
}

export default function NewListItem({ storyId, index }: Props) {
  const { isLoading, storyData } = useStoryDetails(storyId);
  const location = useLocation();

  if (isLoading) {
    return (
      <li>
        <NewsListItemLoader />
      </li>
    );
  }

  return (
    <li className="news-list-item">
      {storyData && (
        <>
          <div className="news-list-item__index">{`${index}.`}</div>
          <div>
            <h2 className="news-list-item__title f-step--1 f-semi-bold">
              <Link state={location} to={`/item/${storyData.id}`}>
                {storyData.title}
              </Link>
            </h2>
            <NewsListItemMeta story={storyData} />
          </div>
          <div>
            <a
              className="button button--secondary"
              href={storyData.url}
              title={storyData.url}
              target="_blank"
            >
              <span>Visit</span>
              <div className="icon">
                <ArrowUpRight />
              </div>
            </a>
          </div>
        </>
      )}
    </li>
  );
}
