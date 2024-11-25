import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Layout } from "./layout";
import { faker } from "@faker-js/faker";

describe("Layout", () => {
  it("should render successful", () => {
    const text = faker.lorem.paragraph();

    render(
      <Layout>
        <div>{text}</div>
      </Layout>,
    );

    expect(screen.getByText(text)).toBeVisible();
  });
});
