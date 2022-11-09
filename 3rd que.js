console.clear();

let s1 = "AABBCCDD";
let s2 = "DDCCBBAA";
 
if(s1.length != s2.length)
{
    console.log("s2 is not a rotation on s1");
}
else
{
    let indexes = [];
    let Size = s1.length;
    let firstChar = s1[0];
    for(let i = 0; i < Size; i++)
    {
        if(s2[i] == firstChar)
        {
            indexes.push(i);
        }
    }
 
    let isRotation = false;
    for(let idx of indexes)
    {
        isRotation = checkString(s1, s2, idx, Size);
 
        if(isRotation)
          {
            break;
          }
    }
 
    if(isRotation)
    {
      console.log("s2 is rotation of s1");
    }
    else 
    {
      console.log("s2 is not a rotation of s1");
    }
}
    
function checkString(s1, s2, indexFound, Size)
{
 for(let i = 0; i < Size; i++)
    {
 if(s1[i] != s2[(indexFound + i)%Size])
       {
        return false;
        }
    }
 return true;
}
