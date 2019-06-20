"use strict";

module.exports = (app, server) => {
    app.use("/cinema", require("./routes/cinema")());
};