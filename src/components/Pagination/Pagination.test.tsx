import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Pagination from "./Pagination";

describe("<Pagination />", () => {
  it("updates text when clicking next button", () => {
    render(
      <Pagination
        totalItems={100}
        itemsPerPage={20}
        initialPage={1}
        onPageChange={vi.fn()}
      />
    );
    const nextButton = screen.getByRole("button", { name: "Next" });
    fireEvent.click(nextButton);
    const pageIndicator = screen.getByText("Page 2 of 5");
    expect(pageIndicator).toBeInTheDocument();
  });
});
