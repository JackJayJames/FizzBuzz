let num = Number(prompt("enter number for fizzbuzz"));

for(let i = 1; i < num+1; i++)
{
    if((i % 3) == 0)
    {
        console.log("Fizz");
    }
    else
    {
        console.log(i);
    }
}