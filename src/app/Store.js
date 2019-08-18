export class Store {
    
    getLocation(){
        let city = localStorage.getItem('city');
        let countryCode = localStorage.getItem('countryCode');
        
        // if(city === null && countryCode === null) {
        //     return null;
        // }

        return {
            city: city,
            countryCode: countryCode
        }
    }

    setLocation(city, countryCode) {
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}
