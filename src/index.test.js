import { render } from "@testing-library/react";
import App from "./App";

describe("Smoke test", () => {
  it("App should render", () => {
    const { screen } = render(<App />);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });
});
