//MOCK service
module.exports = (srv) => {

    srv.on('READ', 'Cinema', () => [{
        cinemaID: 'C001',
        cinemaName: "Silver Screen",
        cinemaLocation: 'Dana Mall',
        cinemaInfo: 'The best cinema ever',
        movieID: 'M001',
        ToMovie: [{
            movieID: "M001",
            movieName: "Dark Knight",
            movieType: "action_packed",
            cinemaID: "C001"
        }]
    }]);

    srv.on('READ', 'Movies', () => [{
        movieID: "M001",
        movieName: "Dark Knight",
        movieType: "action_packed",
        cinemaID: "C001",
        ToCinema: [{
            cinemaID: 'C001',
            cinemaName: "Silver Screen",
            cinemaLocation: 'Dana Mall',
            cinemaInfo: 'The best cinema ever',
            movieID: 'M001'
        }]

    }]);

};