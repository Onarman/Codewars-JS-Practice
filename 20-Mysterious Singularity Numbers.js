//--------Mysterious Singularity Numbers-------//
// This is a rather simple but interesting kata. Try to solve it using logic. The shortest solution can be fit into one line.

// Task
// The point is that a natural number N (1 <= N <= 10^9) is given. You need to write a function which finds the number of natural numbers not exceeding N and not divided by any of the numbers [2, 3, 5].

// Example
// Let's take the number 5 as an example:

// 1 - doesn't divide integer by 2, 3, and 5
// 2 - divides integer by 2
// 3 - divides integer by 3
// 4 - divides integer by 2
// 5 - divides integer by 5
// Answer: 1

// because only one number doesn't divide integer by any of 2, 3, 5


//? Solution

function realNumbers(n) {
  return n - ~~(n/2) - ~~(n/3) - ~~(n/5) + ~~(n/6) + ~~(n/10) + ~~(n/15) - ~~(n/30);
}
// Bu kod, 2, 3 ve 5'ten hiçbirine tam olarak bölünmeyen n doğal sayısının sayısını hesaplar.

// Burada ~~ operatörü, bir sayının tamsayı bölümünü (yani ondalık kısmını atarak) verir. Örneğin, ~~(7/2) ifadesi 3 değerini verir.

// İşlem adımları şöyle açıklanabilir:

// n doğal sayısı verilir.
// n'den 2, 3 ve 5 ile tam bölünebilen sayıların sayısı çıkarılır. Bu, ~~(n/2) + ~~(n/3) + ~~(n/5) ifadesi ile yapılır. Burada 2 ve 3, 2 ve 3'e bölünebilen sayıları iki kez saydığı için tekrar eklenmesi gerekiyor (~~(n/6) + ~~(n/10) + ~~(n/15) ifadesi).
// Ancak, 2, 3 ve 5'e tam olarak bölünebilen sayılar iki kez sayıldığı için, tekrar eklenmesi gereken 2 ve 3'e tam olarak bölünebilen sayılar (~~(n/30) ifadesi) tekrar çıkarılır.
// Son olarak, geriye kalan sayıların sayısı n ile toplanarak bulunur.
// Bu yöntem, sıfırdan n'e kadar olan tüm sayıları tek tek kontrol etmek yerine matematiksel olarak hesaplayarak daha hızlı çalışır. 


//? Python Solution 

// def real_numbers(n):
//     return n - n//2 - n//3 - n//5 + n//6 + n//10 + n//15 - n//30