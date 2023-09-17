import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("renders a heading", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeDefined();
  });
});
