import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Section } from "./index";
import { faker } from "@faker-js/faker";

describe("Section", () => {
  it("should render successful", () => {
    const title = faker.lorem.sentence();
    const content = faker.lorem.paragraph();
    const img = faker.internet.url();
    const description = faker.lorem.sentence();

    render(
      <Section
        title={title}
        content={content}
        img={img}
        description={description}
      />,
    );

    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(content)).toBeVisible();
    expect(screen.queryByTestId("img")).toBeVisible();
    expect(screen.getByAltText(description)).toBeVisible();
  });
});
