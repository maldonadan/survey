import { fireEvent, render, screen } from "@testing-library/react";
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
  ).not.toBeVisible();
});

test("Cada pregunta tiene opciones de valoración del 1 al 5", () => {
  const questions = [
    {
      id: 1,
      texto: "¿Qué tan satisfecho estás con el producto?",
    },
  ];

  render(<Survey questions={questions} />);

  expect(screen.getByText("1 Star")).not.toBeChecked();
  expect(screen.getByText("2 Stars")).not.toBeChecked();
  expect(screen.getByText("3 Stars")).not.toBeChecked();
  expect(screen.getByText("4 Stars")).not.toBeChecked();
  expect(screen.getByText("5 Stars")).not.toBeChecked();
});

test("Mostrar la siguiente pregunta después de que el usuario haya respondido la actual", () => {
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

  fireEvent.click(screen.getAllByText("3 Stars")[0]);

  screen.getByText("¿Cuál es tu opinión sobre el servicio al cliente?");
});

test("Al finalizar la encuesta, mostrar un resumen con las respuestas del usuario", () => {
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

  render(
    <Survey
      questions={questions}
      renderAnsweredQuestion={(answeredQuestion) =>
        `Pregunta: ${answeredQuestion.question.texto} Valoración: ${answeredQuestion.vote}`
      }
    />
  );

  fireEvent.click(screen.getAllByText("3 Stars")[0]);
  fireEvent.click(screen.getAllByText("5 Stars")[1]);

  screen.getByText(
    "Pregunta: ¿Qué tan satisfecho estás con el producto? Valoración: 3"
  );

  screen.getByText(
    "Pregunta: ¿Cuál es tu opinión sobre el servicio al cliente? Valoración: 5"
  );
});
