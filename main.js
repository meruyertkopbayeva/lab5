let column_1 = [4, 7, 1, 3, 9, 4, 2, 9, 9, 2, 3, 2, 1, 6, 4, 5, 10, 1, 3, 9, 3, 3, 8, 10, 1, 10, 5, 3, 1, 5];
let column_2 = [7, 8, 8, 1, 10, 5, 2, 8, 8, 1, 6, 8, 8, 10, 8, 6, 7, 3, 6, 5, 7, 1, 7, 7, 8, 6, 5, 9, 9, 10];
let column_3 = [100, 71, 82, 88, 69, 87, 70, 54, 99, 43, 92, 75, 74, 40, 67, 84, 58, 47, 40, 80, 68, 48, 54, 41, 61, 68, 73, 45, 81, 62];
let column_4 = [41, 66, 56, 64, 100, 70, 82, 80, 67, 78, 81, 57, 73, 71, 95, 83, 59, 79, 46, 69, 45, 62, 41, 42, 79, 96, 46, 87, 100, 56];

let sum_1 = 0;
sum_1 = column_1[0] + column_1[1] + column_1[2] + column_1[3] + column_1[4] + column_1[5] + column_1[6] + column_1[7] + column_1[8] + column_1[9] + column_1[10] + column_1[11] + column_1[12] + column_1[13] + column_1[14] + column_1[15] + column_1[16] + column_1[17] + column_1[18] + column_1[19] + column_1[20] + column_1[21] + column_1[22] + column_1[23] + column_1[24] + column_1[25] + column_1[26] + column_1[27] + column_1[28] + column_1[29];
let sum_2 = 0;
sum_2 = column_2[0] + column_2[1] + column_2[2] + column_2[3] + column_2[4] + column_2[5] + column_2[6] + column_2[7] + column_2[8] + column_2[9] + column_2[10] + column_2[11] + column_2[12] + column_2[13] + column_2[14] + column_2[15] + column_2[16] + column_2[17] + column_2[18] + column_2[19] + column_2[20] + column_2[21] + column_2[22] + column_2[23] + column_2[24] + column_2[25] + column_2[26] + column_2[27] + column_2[28] + column_2[29];
let sum_3 = 0;
sum_3 = column_3[0] + column_3[1] + column_3[2] + column_3[3] + column_3[4] + column_3[5] + column_3[6] + column_3[7] + column_3[8] + column_3[9] + column_3[10] + column_3[11] + column_3[12] + column_3[13] + column_3[14] + column_3[15] + column_3[16] + column_3[17] + column_3[18] + column_3[19] + column_3[20] + column_3[21] + column_3[22] + column_3[23] + column_3[24] + column_3[25] + column_3[26] + column_3[27] + column_3[28] + column_3[29];
let sum_4 = 0;
sum_4 = column_4[0] + column_4[1] + column_4[2] + column_4[3] + column_4[4] + column_4[5] + column_4[6] + column_4[7] + column_4[8] + column_4[9] + column_4[10] + column_4[11] + column_4[12] + column_4[13] + column_4[14] + column_4[15] + column_4[16] + column_4[17] + column_4[18] + column_4[19] + column_4[20] + column_4[21] + column_4[22] + column_4[23] + column_4[24] + column_4[25] + column_4[26] + column_4[27] + column_4[28] + column_4[29];
let sums = [sum_1, sum_2, sum_3, sum_4];
var total_score = sum_1 + sum_2 + sum_3 + sum_4;

const results = {
    col1: column_1,
    col2: column_2,
    col3: column_3,
    col4: column_4,
    sums: sums,
    total_score: total_score
}

console.log(results)
