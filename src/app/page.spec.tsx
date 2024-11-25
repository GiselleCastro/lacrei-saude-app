import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from "@testing-library/react";
import Home from "./page";

describe("Home", () => {
  it("should render successful", async () => {
    await act(async () => {
      render(<Home />);
    });

    const mainElement = screen.queryByTestId("home-section");
    waitFor(() => {
      expect(mainElement).toBeVisible();
    });
  });
});
