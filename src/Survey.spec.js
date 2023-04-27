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

test("Cada pregunta tiene opciones de valoración del 1 al 5", () => {
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

  expect(screen.getByRole("radio", { name: "1" })).not.toBeChecked();
  expect(screen.getByRole("radio", { name: "2" })).not.toBeChecked();
  expect(screen.getByRole("radio", { name: "3" })).not.toBeChecked();
  expect(screen.getByRole("radio", { name: "4" })).not.toBeChecked();
  expect(screen.getByRole("radio", { name: "5" })).not.toBeChecked();
});
