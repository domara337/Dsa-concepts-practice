class HashMap {
    constructor(size = 10) {
        this.table = new Array(size);
        this.size = size;
    }

    // hash function
    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    // set method
    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Check if key exists
        for (let i = 0; i < this.table[index].length; i++) {
            if (this.table[index][i][0] === key) {
                this.table[index][i][1] = value; // update value
                return;
            }
        }

        // Key doesn't exist, push new key-value pair
        this.table[index].push([key, value]);
    }

    // get method
    get(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }

        return undefined; // key not found
    }

    // delete method
    delete(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                    return true;
                }
            }
        }

        return false;
    }

    print() {
        console.log(this.table);
    }
}


//test output
const map = new HashMap();

map.set("name", "Domara");
map.set("age", 24);
map.set("country", "Iraq");

console.log(map.get("name"));    // ✅ Domara
console.log(map.get("age"));     // ✅ 24

map.set("name", "Imad");         // ✅ update
console.log(map.get("name"));    // ✅ Imad

map.delete("country");           // ✅ delete
console.log(map.get("country")); // ✅ undefined

map.print();                     // ✅ shows internal structure

