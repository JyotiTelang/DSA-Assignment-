console.clear();
function fixOperator(x)
    {
  
        switch (x) {
        case '+':
        case '-':
        case '/':
        case '*':
        
            return true;
        }
        return false;
    }

    function postToPre(post_exp)
    {
        let s = [];
        let length = post_exp.length;
     for (let i = 0; i < length; i++) 
     {
       if (fixOperator(post_exp[i])) 
      {
         let op1 = s[s.length - 1];
         s.pop();
         let op2 = s[s.length - 1];
         s.pop();
    let temp = post_exp[i] + op2 + op1;
         s.push(temp);
      }
     else 
     {
       s.push(post_exp[i] + "");
     }
 }
  let ans = "";
        while (s.length > 0)
          {
            ans += s.pop();
        return ans;
          }  
    }
     
    let post_exp = "AB+CD-*";
   
    document.write("Prefix : " + postToPre(post_exp));