import { HackerNewsStory, HackerNewsComment } from "@/types/types";

export const mockHackerNewsStory: HackerNewsStory = {
  by: "user123",
  descendants: 10,
  id: 123456,
  kids: [234567, 345678],
  score: 42,
  time: 1631726400,
  title: "Sample Hacker News Story",
  type: "story",
  url: "https://example.com/sample-story",
  text: "This is a sample Hacker News story text.",
};

export const mockHackerNewsComment: HackerNewsComment = {
  by: "user456",
  id: 234567,
  kids: [345678],
  parent: 123456,
  text: "This is a sample comment on the Hacker News story.",
  time: 1631730000,
  type: "comment",
};
