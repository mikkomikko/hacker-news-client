import { useCommentDetails } from "@/hooks/useCommentDetails";
import { formatUnixTime } from "@/utils/dateUtils";
import NewsListItemLoader from "@/components/NewsList/NewsListItemLoader";

interface Props {
  commentId: string;
}

export default function Comment({ commentId }: Props) {
  const { isLoading, commentData } = useCommentDetails(commentId);

  return (
    <div className="comment">
      {isLoading && <NewsListItemLoader />}
      {commentData?.text && (
        <div>
          <div className="comment__meta">
            <div className="comment__by">{commentData.by}</div>
            <div className="comment__time">
              {formatUnixTime(commentData.time)}
            </div>
          </div>
          <div
            className="comment__body"
            dangerouslySetInnerHTML={{ __html: commentData.text }}
          ></div>
          {commentData.kids?.length &&
            commentData.kids.map((id) => (
              <Comment key={id} commentId={id.toString()} />
            ))}
        </div>
      )}
    </div>
  );
}
