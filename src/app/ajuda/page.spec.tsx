import "@testing-library/jest-dom";
import { render, screen, waitFor, act } from "@testing-library/react";
import Help from "./page";

describe("Help", () => {
  it("should render successful", async () => {
    await act(async () => {
      render(<Help />);
    });

    const mainElement = screen.queryByTestId("help-section");
    waitFor(() => {
      expect(mainElement).toBeVisible();
    });
  });
});
