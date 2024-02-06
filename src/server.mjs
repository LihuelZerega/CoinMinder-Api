import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/get-advice', async (req, res) => {
  try {
    const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
      body: JSON.stringify({
        prompt: 'Dale alguna información sobre la inversión del usuario...',
        max_tokens: 150,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      res.json(data);
    } else {
      res.status(response.status).json({ error: 'Error al obtener el consejo de OpenAI' });
    }
  } catch (error) {
    console.error('Error al procesar la solicitud a OpenAI:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
