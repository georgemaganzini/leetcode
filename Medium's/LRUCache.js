var LRUCache = function(capacity) {
    this.m = new Map();
    this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
    if(this.m.has(key)){
        // Remove and put key/value back into hash to move this key to the back (meaning recently used)
        var value = this.m.get(key);
        this.m.delete(key);
        this.m.set(key,value);
        return value;
    } else return -1;
};

LRUCache.prototype.put = function(key, value) {
    if (this.m.has(key)){//remove it and add it back with new value
        this.m.delete(key);
        this.m.set(key,value);
    } else if(this.m.size == this.capacity){ //remove the first key (Map adds new keys to the back)
        var first_key = this.m.keys().next().value;
        this.m.delete(first_key);
        this.m.set(key,value);
    } else this.m.set(key,value); //Map has extra capacity
};


// var LRUCache = function(capacity) {
//     this.map = new Map();
//     this.capacity = capacity;
// };


// LRUCache.prototype.get = function(key) {
//     if(!this.map.has(key)) return -1;
//     let value = this.map.get(key);
//     this.map.delete(key);
//     this.map.set(key, value)
//     return value;
// };


// LRUCache.prototype.put = function(key, value) {
//     if(this.map.has(key)) this.map.delete(key);
//     this.map.set(key, value);
//     if (this.map.size > this.capacity) this.map.delete(this.map.keys().next().value);
// };
