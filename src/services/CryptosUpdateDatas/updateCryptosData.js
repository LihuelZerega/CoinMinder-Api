const { updateBitcoinData } = require('../../services/CryptosUpdateDatas/bitcoinUpdater');
// Importa los demás servicios de actualización de las otras criptomonedas

async function updateCryptosData() {
    try {
        // Llama a cada función de actualización de criptomonedas
        await updateBitcoinData();
        // Llama a las demás funciones de actualización de las otras criptomonedas
    } catch (error) {
        console.error(`Error al actualizar los datos de criptomonedas: ${error.message}`);
    }
}

module.exports = { updateCryptosData };
