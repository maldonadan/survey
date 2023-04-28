import { fireEvent, render, screen, within } from "@testing-library/react";
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

  fireEvent.click(screen.getByRole("radio", { name: "3" }));

  expect(screen.getByRole("radio", { name: "1" })).not.toBeChecked();
  expect(screen.getByRole("radio", { name: "2" })).not.toBeChecked();
  expect(screen.getByRole("radio", { name: "3" })).toBeChecked();
  expect(screen.getByRole("radio", { name: "4" })).not.toBeChecked();
  expect(screen.getByRole("radio", { name: "5" })).not.toBeChecked();

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

  let actualSurveyResults = null;

  render(
    <Survey
      questions={questions}
      renderAnsweredQuestion={(answeredQuestion) =>
        `Pregunta: ${answeredQuestion.question.texto} Valoración: ${answeredQuestion.vote}`
      }
    />
  );

  fireEvent.click(screen.getByRole("radio", { name: "3" }));
  fireEvent.click(screen.getByRole("radio", { name: "5" }));

  screen.getByText(
    "Pregunta: ¿Qué tan satisfecho estás con el producto? Valoración: 3"
  );

  screen.getByText(
    "Pregunta: ¿Cuál es tu opinión sobre el servicio al cliente? Valoración: 5"
  );
});
