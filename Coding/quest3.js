function annualDay(N, points) {
    let count = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (points[i] > points[j]) {
                count++;  
            }
        }
    }
    
    return count;
}

let input1 = 10;
let input2 = [1, 2, 7, 5, 7, 4, 1, 1, 2, 5];
console.log(annualDay(input1, input2)); 

input1 = 5;
input2 = [1, 1, 3, 6, 2];
console.log(annualDay(input1, input2));  

