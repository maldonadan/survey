import React from "react";
import ReactDOM from "react-dom/client";
import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";
import "./index.css";
import Survey from "./Survey";

const questions = {
  preguntas: [
    {
      id: 1,
      texto: "¿Qué tan satisfecho estás con el producto?",
      valoracion: 5,
    },
    {
      id: 2,
      texto: "¿Cuál es tu opinión sobre el servicio al cliente?",
      valoracion: 5,
    },
    {
      id: 3,
      texto: "¿Cómo calificarías la usabilidad del sitio web?",
      valoracion: 5,
    },
    {
      id: 4,
      texto: "¿Recomendarías nuestro producto a otros?",
      valoracion: 5,
    },
    {
      id: 5,
      texto: "¿Cómo evaluarías la calidad del producto?",
      valoracion: 5,
    },
  ],
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Survey
      questions={questions.preguntas}
      renderAnsweredQuestion={(answeredQuestion) => (
        <div className="summary-question">
          <Typography variant="h4">
            {answeredQuestion.question.texto}
          </Typography>
          <Rating value={answeredQuestion.vote} readOnly />
        </div>
      )}
    />
  </React.StrictMode>
);
