import { render, screen } from "@testing-library/react";
import Survey from "./Survey";

test("Mostrar una pregunta a la vez", () => {
  const questions = [
    {
      id: 1,
      texto: "¿Qué tan satisfecho estás con el producto?",
    },
    {
      id: 2,
      texto: "¿Cuál es tu opinión sobre el servicio al cliente?",
    },
  ];

  render(<Survey questions={questions} />);

  expect(
    screen.queryByText("¿Qué tan satisfecho estás con el producto?")
  ).toBeInTheDocument();
  expect(
    screen.queryByText("¿Cuál es tu opinión sobre el servicio al cliente?")
  ).not.toBeInTheDocument();
});
