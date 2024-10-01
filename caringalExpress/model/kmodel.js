const db = require('../config/database');

module.exports = {
    save: (data, callback) => {
        const query = "INSERT INTO kdmc_users (kdmc_lastname, kdmc_firstname, kdmc_email, kdmc_gender, kdmc_address)  VALUES (?, ?, ?, ?, ?)";

        db.query(query, [data.lastname, data.firstname, data.email, data.gender, data.address], callback);
    },
    displayUsers: (callback) => {
        const query = "SELECT * FROM kdmc_users";
        db.query(query, callback);
    }
}