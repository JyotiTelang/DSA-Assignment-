console.clear();
function towerOfHanoi(n, f_box,  s_box,  t_box)
{
        if (n == 0)
        {
            return;
        }
        towerOfHanoi(n - 1, f_box, s_box, t_box);
     console.log("Move item " + n + " from box " + f_box + " to box " + t_box+" ");
  towerOfHanoi(n - 1, t_box, s_box, f_box);
    }
    var N = 3;
    towerOfHanoi(N, 'A', 'C', 'B');
