import { HackerNewsStory } from "@/types/types";
import NewsListItemMeta from "@/components/NewsList/NewsListItemMeta";
import Comment from "@/components/Comment/Comment";

interface Props {
  story: HackerNewsStory;
}

export default function NewsDetails({ story }: Props) {
  return (
    <div>
      <h1 className="f-step-3">{story.title}</h1>
      <div className="mb-s u-container-inline">
        <NewsListItemMeta story={story} />
      </div>
      <a href={story.url} target="_blank">
        {story.url}
      </a>
      {story.text && (
        <div dangerouslySetInnerHTML={{ __html: story.text }}></div>
      )}
      {story.kids?.length && (
        <>
          <hr />
          <h2 id="comments" className="f-step-0 mb-l f-semi-bold text-gray">
            Comments
          </h2>
          {story.kids.map((comment) => (
            <Comment key={comment} commentId={comment.toString()} />
          ))}
        </>
      )}
    </div>
  );
}
