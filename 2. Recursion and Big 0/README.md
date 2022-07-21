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

### Why we need Recursion?
`In this section we will look on why we need recursion`, So you might be interested why we need recursion?. There are many reasons for this, first of all, because of thinking is really important in programming and it helps you break down big into smaller one.

1.  Recursive thinking is really important in programming and it helps you break down big problems into smaller ones and easier to use.

> Recursion is used all the time in nearly every field, in nearly every language. If we compare the cost of way of writing code with iteratively, we can easily see that the recursive code is easy to write.
>
> Iteratively, of course, is basically where we use loops. so you might be interested if it is easier to write code, can we choose recursion over iteration? The answer is no, because there are situations where iteration performs faster than recursion. So it depends on the situation.
>
> `when to chose recursion` A good hint here is that if you can divide the problem into simple sub problems, then you can use recursion. The important point here is then problem must be similar, otherwise, recursion is not a choice.
>
> So how can we know that this problem is similar in nature. So when you hear a problem begins with the following statements, it's often  always a good candidate for recursion.
        * If you can divide the problem into similar sub problems
        * Design an algorithm to compute nth
        * Write code to list n
        * Implement a method to compute all
        * Practice
> Finally, the best way to identify the problem is practice, the more problems you do, the easier it will be recognized because of problems.

2.  The second reason to use recursion is the `prominent usage of recursion in data structures like tree and graphs`

> So when you are dealing with trees, the recursion become almost mandatory to use.So in the upcoming sections, we'll explain three data structures.And there you will see that without recursion, some operation on trees become almost impossible.
>
> But it doesn't mean that you can't use the Iteration over there. But in this case, recursion is preferable due to the easier nature of write code.So without learning recursion, the upcoming section will be extremely difficult to understand.

3. So the third reason is that many companies ask questions related to recursion during the `interview`.

> So to pass these interviews to get better job, recursion become extremely important 

4. The fourth reason, is that `It is used in many algorithms` (divide and conquer, greedy and dynamic programming)

> So without the knowledge of recursion these topics becomes very difficult to learn.












## Summary