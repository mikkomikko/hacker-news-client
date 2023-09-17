import NewsList from "@/components/NewsList/NewsList";

export default function NewsPage() {
  return (
    <div className="mt-2xl">
      <div className="f-step--1 text-primary f-semi-bold">Hacker News</div>
      <h1 className="f-step-5 mt-s mb-l">Top stories</h1>
      <NewsList />
    </div>
  );
}
