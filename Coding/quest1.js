function consecutiveMarks(N, marks) {
    marks.sort((a, b) => a - b);

    for (let i = 1; i < N; i++) {
        if (marks[i] !== marks[i - 1] + 1) {
            return 0; 
        }
    }
    
    return 1; 
}

let input1 = 6;
let input2 = [3, 7, 2, 5, 4, 6];
console.log(consecutiveMarks(input1, input2));  

input1 = 6;
input2 = [1, 9, 2, 4, 0, 3];
console.log(consecutiveMarks(input1, input2));
