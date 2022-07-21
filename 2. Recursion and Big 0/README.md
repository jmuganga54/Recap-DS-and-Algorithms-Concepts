## Topic
On this section we will be talking about `Recursion`.

## Keywords and Notes
### What is Recursion?

`By definition`, it's a way of solving a problem by having a function calling itself.

`Recursion` - a way of solving a problem by having a function calling itself

> In computer Science, it's a method of solving a problem where the solution depends on the solution to the similar instance of the same problem.

Such problems can generally be solved by iteration as well. A real life example of recursion can be a `Russian nesting`, though hopefully you have seen a set of Russian, thought, if not, this is the picture how it looks like.

It is just one piece, so it does not open as you see it, thought, is a sequence of similar deals inside each other that can be open. But every time the size gets smaller and smaller, each time you open the door, a smaller version of those will be inside and you repeat the process until you reach the final goal that cannot be opened.

> There are many properties of recursion, so let's see properties of recursion based on this real life.So here, our example of Russian laws conform with the main properties of recursion.

* `Performing the same operation multiple times with different inputs`.

* `In every step we try smaller inputs to make the problem smaller`. So now you might be interested why we are making the problem smaller, because every time we make the problem smaller, this makes it easier to find the solution at the end, which is the smallest Russian.

* `Base condition is needed to stop the recursion, otherwise infinite loop will occur`.Basically, the basic condition is the condition, after that, we will not do any more recursion.We will stop the recursion because we either would have found the answer or the answer does not exist.

> What if we don't provide a base condition in this case? The system will not know when to stop recursion and this will lead to infinite loop.

```
const openRussianDoll = (doll)=>{
    if(doll == 1){
        console.log('All dolls are opened')
    }else{
        console.log(doll)
        openRussianDoll(doll-1)

    }
}

openRussianDoll(4)

//Expected output:
4
3
2
All dolls are opened
```










## Summary