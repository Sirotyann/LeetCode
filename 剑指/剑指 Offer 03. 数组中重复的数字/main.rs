use std::collections::HashSet;

pub fn find_repeat_number(nums: Vec<i32>) -> i32 {
    let mut nums_set = HashSet::new();
    for i in nums.iter() {
        if nums_set.contains(i) {
            return *i;
        } else {
            nums_set.insert(*i);
        }
    }
    0
}

fn main() {
    println!("剑指 Offer 03. 数组中重复的数字");
    let result = find_repeat_number(vec![2, 3, 1, 0, 2, 5, 3]);
    println!("Repeat num is {}", result);
}