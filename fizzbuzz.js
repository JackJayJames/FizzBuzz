let num = Number(prompt("enter number for fizzbuzz"));

for(let i = 1; i < num+1; i++)
{
    if(((i % 3) == 0) && ((i % 5) != 0))
    {
        console.log("Fizz");  /*replace number divisible by 3 with fizz*/
    }
    else if(((i % 5) == 0) && ((i % 3) != 0))
    {
        console.log("Buzz");  /*replace number divisible by 5 with buzz*/
    }
    else if (((i % 3) == 0) && ((i % 5) == 0))
    {
        console.log("FizzBuzz");  /*replace number divisible by 3 and 5 with FizzBuzz*/
    }
    else
    {
        console.log(i);
    }
}