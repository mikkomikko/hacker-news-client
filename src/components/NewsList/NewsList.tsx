import { useCallback, useMemo } from "react";
import { useTopStoryIds } from "@/hooks/useTopStoryIds";
import Pagination from "@/components/Pagination/Pagination";
import NewsListItem from "./NewsListItem";
import NewsListItemLoader from "./NewsListItemLoader";
import { useNavigate, useParams } from "react-router-dom";

const itemsPerPage = 30;

export default function NewsList() {
  const { currentPage } = useParams();
  const navigate = useNavigate();
  const { storyIds, isLoading } = useTopStoryIds();

  const handlePageChange = useCallback((page: number) => {
    window.scrollTo({ top: 0 });
    navigate(`/page/${page}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPageStoryIds = useMemo(() => {
    const page = Number(currentPage) ?? 1;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return storyIds.slice(startIndex, endIndex);
  }, [currentPage, storyIds]);

  if (isLoading) {
    return <NewsListItemLoader />;
  }

  return (
    <section>
      {currentPageStoryIds.length > 0 && (
        <ol className="news-list">
          {currentPageStoryIds.map((id, index) => (
            <NewsListItem
              key={id}
              storyId={id.toString()}
              index={
                ((Number(currentPage) ?? 1) - 1) * itemsPerPage + index + 1
              }
            />
          ))}
        </ol>
      )}
      <div>
        <Pagination
          initialPage={Number(currentPage) ?? 1}
          totalItems={storyIds.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  );
}
