pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    if nums.len() > 0 {
        let mut left:usize= 0;
        let mut right:usize = (nums.len() - 1) as usize;
        while left <= right {
            let mid:usize = ((left + right)/2) as usize;
            if nums[mid] > target {
                right = mid - 1;
            } else if nums[mid] < target {
                left = mid + 1;
            } else {
                return mid as i32;
            } 
        }
    }
    -1
}

fn main() {
    let result = search(vec![-1, 0, 3, 5, 9, 12], 9);
    println!("Index is {}, should be 4", result);
}