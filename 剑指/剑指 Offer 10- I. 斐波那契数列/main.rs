
pub fn fib(n: i32) -> i32 {
    if n == 0 {
        return 0;
    } else if n == 1 || n == 2 {
        return 1;
    } else {
        let mut prev_prev:i32 = 1;
        let mut prev:i32 = 1;
        let mut i:i32 = 3;
        let mut result:i32 = 0;
        while i <= n {
            result = prev + prev_prev;
            prev_prev = prev;
            prev = result;
            i += 1;
        }
        return result;
    }
}

fn main() {
    // 0, 1, 1, 2, 3, 5, 8
    println!("fib(0) should be 0: {}", fib(0));
    println!("fib(1) should be 1: {}", fib(1));
    println!("fib(2) should be 1: {}", fib(2));
    println!("fib(3) should be 2: {}", fib(3));
    println!("fib(4) should be 3: {}", fib(4));
    println!("fib(5) should be 5: {}", fib(5));
    println!("fib(6) should be 8: {}", fib(6));
}