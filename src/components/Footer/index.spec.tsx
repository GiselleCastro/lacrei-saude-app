import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Footer } from "./index";

describe("Footer", () => {
  it("should render successful", () => {
    render(<Footer />);

    expect(screen.getByTestId("footer")).toBeVisible();
  });

  it("should top successful", () => {
    window.scrollTo = jest.fn();

    render(<Footer />);

    const buttonElement = screen.getByTestId("button-footer-top");

    fireEvent.click(buttonElement);

    waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledWith({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  });

  describe("ResponsiveComponent Footer", () => {
    it("desktop footer, with the logo", () => {
      window.innerWidth = 1440;
      fireEvent(window, new Event("resize"));

      render(<Footer />);

      waitFor(() => {
        const logo = screen.getByTestId("footer-logo");
        expect(logo).toBeVisible();
      });
    });

    it("mobile footer, without the logo", () => {
      window.innerWidth = 360;
      fireEvent(window, new Event("resize"));

      render(<Footer />);

      waitFor(() => {
        const logo = screen.getByTestId("footer-logo");
        expect(logo).not.toBeVisible();
      });
    });
  });
});
