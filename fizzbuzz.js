let num = Number(prompt("enter number for fizzbuzz"));

for(let i = 1; i < num+1; i++)
{
    if((i % 3) == 0)
    {
        console.log("Fizz");
    }
    else if((i % 5) == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(i);
    }
}