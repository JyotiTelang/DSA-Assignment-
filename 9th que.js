console.clear();
let stack = [];
function insert(x)
{
    if(stack.length==0)
        stack.push(x);
    else
    {
            let a = stack.pop();
            insert(x);
            stack.push(a);
    }
}
function reverse()
{
    if(stack.length > 0)
        {
            let x = stack.pop();
            reverse();
            insert(x);
        }
}
stack.push('1');
stack.push('2');
stack.push('3');
stack.push('4');
stack.push('5');
stack.push('6');
stack.push('7');
 
console.log("Original Stack");
 console.log(stack.join(" ")+" ");
reverse();
console.log("Reversed Stack");
 
console.log(stack.join(" "));
