/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Page from "./page";

it("Page can be rendered", () => {
  render(<Page />);
});
