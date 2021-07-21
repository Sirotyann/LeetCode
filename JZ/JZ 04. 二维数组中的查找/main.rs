pub fn find_number_in2_d_array(matrix: Vec<Vec<i32>>, target: i32) -> bool {
    if matrix.len() <= 0 || matrix[0].len() <= 0 {
        return false;
    }
    let max_row = matrix.len() - 1;
    let max_col = matrix[0].len() - 1;
    let mut row = 0; 
    let mut col = max_col;
    while row >= 0 && col >= 0 && row <= max_row && col <= max_col {
        if matrix[row][col] == target {
            return true;
        } else if matrix[row][col] < target {
            row = row + 1;
        } else if matrix[row][col] > target {
            col = col - 1;
        }
    }
    false
}

fn main() {
    println!("剑指 Offer 04. 二维数组中的查找");
    let vec = vec![
        vec![1, 4, 7, 11, 15],
        vec![2, 5, 8, 12, 19],
        vec![3, 6, 9, 16, 22],
        vec![10, 13, 14, 17, 24],
        vec![18, 21, 23, 26, 30]
    ];

    let result = find_number_in2_d_array(vec, 5);
    println!("expect find 5 to be true: {}", result);
    
    let result_empty = find_number_in2_d_array(vec![], 5);
    println!("expect find 5 to be false: {}", result_empty);
}