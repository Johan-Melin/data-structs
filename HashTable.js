class HashTable {
  constructor(size=53){
    this.keyMap = new Array(size);
  }

  _hash(key){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
      let char = key[i];
      let value = char.charCodeAt(0) -96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      return this.keyMap[index].filter(item => item[0] === key); //filter needed?
    }
    return undefined;
  }
}

let ht = new HashTable(17);
ht.set('hello world', "goodbye");
ht.set('dogs', "are cool");
ht.set('cats', "are fine");
ht.set('i love', "pizza");
//console.log(ht.keyMap);
console.log(ht.get('hello world'));