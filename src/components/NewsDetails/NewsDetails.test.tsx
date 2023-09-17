import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import NewsDetails from "./NewsDetails";
import { mockHackerNewsStory } from "@/tests/mocks/mocks";
import { MemoryRouter } from "react-router-dom";

describe("<NewsDetails />", () => {
  it("renders the story title as level 1 heading", () => {
    render(
      <MemoryRouter>
        <NewsDetails story={mockHackerNewsStory} />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", {
      level: 1,
      name: mockHackerNewsStory.title,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders a link with href to url of the story", () => {
    render(
      <MemoryRouter>
        <NewsDetails story={mockHackerNewsStory} />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: mockHackerNewsStory.url });
    expect(link).toHaveAttribute("href", mockHackerNewsStory.url);
  });
});
