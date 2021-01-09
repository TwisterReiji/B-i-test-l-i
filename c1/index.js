let A1 = [1, 2, 'a']
let A2 = [1, 3, 'b']

kt(A1,A2)

function kt(a,b) {
    let c = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if ( a[i] === b[j]) {
                b.splice(j,1)
                a.splice(i,1)   
            }
        }
        c.push(a[i])
    }
    for (let i = 0; i < b.length; i++) {
        c.push(b[i])
    }
    return console.log(c);
}