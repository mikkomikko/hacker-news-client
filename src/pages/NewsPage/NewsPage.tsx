import NewsList from "@/components/NewsList/NewsList";
import { Link } from "react-router-dom";

export default function NewsPage() {
  return (
    <div className="mt-2xl">
      <div className="f-step--1 text-primary f-semi-bold ph-s">
        <Link className="link--reset" to="/">
          Hacker News
        </Link>
      </div>
      <h1 className="f-step-5 mt-s mb-l ph-s">Top stories</h1>
      <NewsList />
    </div>
  );
}
