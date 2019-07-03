using Cinema as _Cinema from '../db/Cinema';
using Movies as _Movies from '../db/Movies';

service odata {
    entity Cinema @(
        title: 'Cinema',
		Capabilities: {
			InsertRestrictions: {Insertable: false},
			UpdateRestrictions: {Updatable: false},
			DeleteRestrictions: {Deletable: false}
		}
    ) as projection on _Cinema;

   entity Movies @(
    title: 'Movies',
		Capabilities: {
			InsertRestrictions: {Insertable: false},
			UpdateRestrictions: {Updatable: false},
			DeleteRestrictions: {Deletable: false}
		}  
    ) as projection on _Movies; 
    

}