const express = require("express");
const axios = require("axios");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const APITOKEN = process.env.APITOKEN;

const app = express();

app.use(cors());

// Dolar Oficial
app.get("/api/bcra-usdof", async (req, res) => {
  try {
    const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzU4NDc4NDgsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJhc2RmYXNkQGFzZGYuY29tIn0.pEO8uoZu59dQw4lQyWmk_QwMBru58BFJm400WL3gGB7BBPcLiQaJkRTrMaIfpmEDBRTK2i8wrxXHfrewliRUTw";
    token;
    const headers = {
      Authorization: `BEARER ${token}`,
    };

    const response = await axios.get(
      "https://api.estadisticasbcra.com/usd_of",
      {
        headers,
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "Error al obtener datos del BCRA:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Error al obtener datos del BCRA" });
  }
});

// Dolar Oficial Minorista
app.get("/api/bcra-usdofmin", async (req, res) => {
  try {
    const token = APITOKEN;
    token;
    const headers = {
      Authorization: `BEARER ${token}`,
    };

    const response = await axios.get(
      "https://api.estadisticasbcra.com/usd_of_minorista",
      {
        headers,
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(
      "Error al obtener datos del BCRA:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Error al obtener datos del BCRA" });
  }
});

// Dolar Blue
app.get("/api/bcra-usd", async (req, res) => {
  try {
    const token = APITOKEN;
    token;
    const headers = {
      Authorization: `BEARER ${token}`,
    };

    const response = await axios.get("https://api.estadisticasbcra.com/usd", {
      headers,
    });

    res.json(response.data);
  } catch (error) {
    console.error(
      "Error al obtener datos del BCRA:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Error al obtener datos del BCRA" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
