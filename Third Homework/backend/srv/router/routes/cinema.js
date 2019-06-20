"use strict";

const express = require("express");

const dbClass = require(global.__base + "utils/dbClass");

function _prepareObject(oCinema, req) {
        oCinema.changedBy = "TrialUser";
        oCinema.changedOn = new Date();
    return oCinema;
}

module.exports = () => {
    const app = express.Router();

    app.get("/", async (req, res, next) => {
        try {
            res.type("application/json").status(201).send(JSON.stringify({text: "Successfully completed"}));
        } catch (e) {
            next(e);
        }
    });

    app.post("/", async (req, res, next) => {
        try {
            const db = new dbClass(req.db);

            const oCinema = _prepareObject(req.body, req);
                    oCinema.cinemaID = await db.getNextval("cinemaID");
                    oCinema.movieID = await db.getNextval("movieID");

            const sSql = "INSERT INTO \"CINEMA\" VALUES(?,?)";
						const aValues = [ oCinema.cinemaID, oCinema.cinemaName, oCinema.cinemaLocation, oCinema.cinemaInfo, oCinema.movieID ];

						console.log(aValues);
						console.log(sSql);
            await db.executeUpdate(sSql, aValues);

            res.type("application/json").status(201).send(JSON.stringify(oCinema));
        } catch (e) {
            next(e);
        }
    });

    app.put("/", async (req, res, next) => {
        try {
            const db = new dbClass(req.db);

            const oUser = _prepareObject(req.body, req);
            const sSql = "UPDATE \"CINEMA\" SET \"CINEMANAME\" = ? WHERE \"CINEMAID\" = ?";
            const aValues = [ oCinema.cinemaID, oCinema.cinemaName, oCinema.cinemaLocation, oCinema.cinemaInfo, oCinema.movieID ];

            await db.executeUpdate(sSql, aValues);

            res.type("application/json").status(200).send(JSON.stringify(oUser));
        } catch (e) {
            next(e);
        }
    });

    return app;
};
