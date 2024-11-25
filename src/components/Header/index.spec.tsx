import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
  it("should render successful", () => {
    render(<Header />);

    const mainElement = screen.getByTestId("header");

    expect(mainElement).toBeInTheDocument();
  });

  it("should render successful", () => {
    render(<Header />);

    const buttonElement = screen.getByTestId("button-login-desktop");

    expect(buttonElement).toBeVisible();

    fireEvent.click(buttonElement);

    waitFor(() => {
      const optionsLoginElement = screen.queryByTestId("button-ptions-login");

      expect(optionsLoginElement).toBeVisible();

      fireEvent.click(buttonElement);

      expect(optionsLoginElement).not.toBeVisible();
    });
  });

  describe("ResponsiveComponent Header", () => {
    it("desktop header visible", () => {
      window.innerWidth = 1440;
      fireEvent(window, new Event("resize"));

      render(<Header />);

      waitFor(() => {
        const headerDesktop = screen.getByTestId("header-desktop");

        const headerMobile = screen.getByTestId("button-login-mobile");

        expect(headerDesktop).toBeVisible();

        expect(headerMobile).not.toBeVisible();
      });
    });

    it("mobile header visible", () => {
      window.innerWidth = 360;
      fireEvent(window, new Event("resize"));

      render(<Header />);

      waitFor(() => {
        const headerMobile = screen.getByTestId("button-login-mobile");

        const headerDesktop = screen.getByTestId("header-desktop");

        expect(headerMobile).toBeVisible();

        expect(headerDesktop).not.toBeVisible();
      });
    });
  });
});
