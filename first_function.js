function getTriangleArea(a, h){
    if ((a && h) > 0){
        return a*h/2;
    }
    else {
        return "Nieprawidłowe dane";
    }
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 15);
var triangle3Area = getTriangleArea(10, 5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);