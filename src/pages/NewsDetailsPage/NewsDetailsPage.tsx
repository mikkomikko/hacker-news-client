import { Link, useLocation, useParams } from "react-router-dom";
import { useStoryDetails } from "@/hooks/useStoryDetails";
import NewsListItemLoader from "@/components/NewsList/NewsListItemLoader";

import { useEffect, useState } from "react";
import NewsDetails from "@/components/NewsDetails/NewsDetails";

export default function NewsDetailsPage() {
  const { id } = useParams();
  const location = useLocation();
  const { isLoading, storyData } = useStoryDetails(id);
  const [previousPath, setPreviousPath] = useState("/");

  useEffect(() => {
    if (location.state?.pathname) {
      setPreviousPath(location.state.pathname);
    }
  }, [location.state]);

  return (
    <div className="u-bg-white ph-m pv-l">
      <div className="mb-s">
        <Link to={previousPath}>← Back to news</Link>
      </div>
      {isLoading && <NewsListItemLoader />}
      {storyData && <NewsDetails story={storyData} />}
    </div>
  );
}
