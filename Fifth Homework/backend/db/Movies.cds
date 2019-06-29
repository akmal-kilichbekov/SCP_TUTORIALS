Using Cinema from './Cinema';

type Janre : String enum {
    action_packed;
    comedy;
    melodrama;
    fantastica;
};

type start_end : {
    start_time : String(20);
    end_time: String(20);    
};


entity Movies{
   key movieID: Integer not null;
   movieName: String(20);
   movieType: Janre;
   movieTime: start_end;
   cinemaID : Integer;

   ToCinema: Association to many Cinema on ToCinema.cinemaID = cinemaID;


}

