const someArr = [a, b, c, d, d, f, a, g, c]

// find duplicates
const duplicates = someArr.filter((item, index, array) => {
    return array.indexOf(item) !== index
    }
)