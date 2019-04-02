

const data = {
    locations: [],
    get location() {
        return this._location;
    },
    set location(value) {
        this._location = value.trim();
        this.locations.push(data.location);
    }
};

data.location = '   Philadelphia    ';
data.location = ' New York ';
console.log(data);

