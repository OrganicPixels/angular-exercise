import * as _ from 'lodash';

export class Contact {
    phone: string;
    formattedPhone: string;
    twitter: string;
}
export class Location {
    address: string;
    crossStreet: string;
    lat: any;
    lng: any;
    postalCode: string;
    cc: string;
    city: string;
    state: string;
    country: string;
    formattedAddress: any;
}
export class Restaurant {
    name: string;
    backgroundImageURL: string;
    category: string;
    contact: Contact;
    location: Location;
    selected = false;
    constructor(source: any) {
        if (source) {
            _.merge(this, source);
        }
    }
}


