function handleControllerError(res, error, defaultMessage = 'Error interno del servidor') {
    console.error('Error en el controlador:', error);
    if (error.response && error.response.status === 404) {
        return res.status(404).json({ error: 'No se encontraron datos para actualizar' });
    } else if (error.response && error.response.status === 429) {
        return res.status(429).json({ error: 'Demasiadas solicitudes, inténtalo de nuevo más tarde' });
    } else {
        return res.status(500).json({ error: defaultMessage });
    }
}

module.exports = {
    handleControllerError,
};
