/*eslint no-unused-vars: 0, no-undef:0, no-process-exit:0, new-cap:0*/
/*eslint-env node, es6 */
"use strict";

const dbClass = require(global.__base + "utils/dbClass");
const hdbext = require("@sap/hdbext");

const addWhereClause = (req, aWhere) => {
    req.query.SELECT.where = req.query.SELECT.where ?
        req.query.SELECT.where.concat(["and"]).concat(aWhere) :
        aWhere;

};

module.exports = function () {
    this.on("CREATE", "Cinema", async (Cinema) => {
        req.log.debug(`ON CREATE ${req.target["@Common.Label"]}`);

        const {
            data
        } = Cinema;
        if (data.length < 1) {
            return null;
        }

        const dbClass = require(global.__base + "utils/dbPromises");
        var client = await dbClass.createConnection();
        let db = new dbClass(client);

        if (!data.CINEMAID) {
            data.CINEMAID = await db.getNextval("cinemaID");
        }

        const sSql = `INSERT INTO "CINEMA" VALUES(?,?)`
        const aValues = [oCinema.cinemaID, oCinema.cinemaname, oCinema.cinemaLocation, oCinema.cinemaInfo];

        req.log.debug(aValues);
        req.log.debug(sSql);
        await db.executeUpdate(sSql, aValues);

        return data;
    });


    this.after("READ", "cinema", (entity) => {
        if (entity.length > 0) {
            entity.forEach(item => item.cinemaname = "");
        }
    });

};
