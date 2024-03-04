const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const CryptoMarketData = sequelize.define("CryptoMarketData", {
        active_cryptocurrencies: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        upcoming_icos: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ongoing_icos: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        ended_icos: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        markets: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        total_market_cap: {
            type: DataTypes.JSONB,
            allowNull: true
        },
        total_volume: {
            type: DataTypes.JSONB,
            allowNull: true
        },
        market_cap_percentage: {
            type: DataTypes.JSONB,
            allowNull: true
        },
        market_cap_change_percentage_24h_usd: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        },
    }, {
        tableName: 'cryptomarketdatas'
    });

    return CryptoMarketData;
};
