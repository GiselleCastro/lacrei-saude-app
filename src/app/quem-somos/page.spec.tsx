import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from "@testing-library/react";
import About from "./page";

describe("About", () => {
  it("should render successful", async () => {
    await act(async () => {
      render(<About />);
    });

    const mainElement = screen.queryByTestId("about-section");
    waitFor(() => {
      expect(mainElement).toBeVisible();
    });
  });
});
