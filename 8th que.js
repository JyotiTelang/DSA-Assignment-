console.clear();
 function Brackets(expr)
{
    let stack = [];
    for(let i = 0; i < expr.length; i++)
    {
        let x = expr[i];
 
        if (x == '(' || x == '[' || x == '{')
        {
            stack.push(x);
            continue;
        }
        if (stack.length == 0)
            return false;
             
        let item;
        switch (x){
        case ')':
            item = stack.pop();
            if (item == '{' || item == '[')
                return false;
            break;
 
        case '}':
            item = stack.pop();
            if (item == '(' || item == '[')
                return false;
            break;
 
        case ']':
            item= stack.pop();
            if (item == '(' || item == '{')
                return false;
            break;
        }
    }
    return (stack.length == 0);
}
let expr = "([{}])";
 
if (Brackets(expr))
    console.log("Balanced ");
else
    console.log("Not Balanced ");
