Using Movies from './Movies';

type ID : Integer;

entity Cinema {
   key cinemaID: ID not null;
       cinemaName: String(40);
       cinemaLocation : String(40);
       cinemaInfo: String(40);
       movieID: Integer;

       ToMovie: Association to many Movies on ToMovie.movieID = movieID;
}
