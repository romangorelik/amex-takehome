import { describe, expect, test, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Scenario from "../components/Scenario";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";

// Instantiate a user and render the UI. Return the user as property in an object to destructure in the test
const renderWithUser = (ui: React.ReactNode) => {
  const user = userEvent.setup();
  render(ui);

  return { user };
};

describe("Modal", () => {
  const mockClose = vi.fn();

  beforeEach(() => {
    mockClose.mockReset();
  });

  test("renders modal with expected controls", () => {
    render(<Scenario />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("heading")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toBeInTheDocument();
  });

  describe("when passed onClose handler", () => {
    test("calls onClose action when pressing the ESC key", () => {
      render(<Scenario onClose={mockClose} />);
      fireEvent.keyDown(screen.getByRole("dialog"), { key: "Escape", code: "Escape" });
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("renders dismissible button that calls onClose action when clicked", async () => {
      const { user } = renderWithUser(<Scenario onClose={mockClose} />);
      const closeButton = screen.getByRole("button", { name: /close/i });
      await user.click(closeButton);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("calls onClose action when clicking outside of the modal", async () => {
      const { user } = renderWithUser(<Scenario data-testid="mockId" onClose={mockClose} />);
      const scrimElement = screen.getByTestId("mockId");
      await user.click(scrimElement);
      expect(mockClose).toHaveBeenCalledTimes(1);
    });
  });
});
