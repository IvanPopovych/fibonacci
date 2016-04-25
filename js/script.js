// JavaScript File

function first(a,b,c)
{
    var d=b*b-4*a*c;
    if(d>0)
    {
       var x1=(-b+Math.sqrt(d))/(2*a);
       var x2=(-b-Math.sqrt(d))/(2*a);
       var result="x1 ="+x1 +"------/------"+'x2 ='+x2;
       return result;
    }
    if(d==0)
    {
        var x=(-b)/(2*a);
        var result="x ="+x;
        return result;
    }
    if(d<0)
    {alert('Це рівняння не має розв\'язків');}
    
}
var x=prompt("a=");
var y=prompt("b=");
var z=prompt("c=");
document.writeln(first(x,y,z)+'<br>');

var max=prompt("Top border Fibonaci=");
function Fib(max){
    var f_0=0;
    var f_1=1;
    var res=0;
    document.writeln(f_0+'<br>');
    document.writeln(f_1+'<br>');
    while(true)
    {
        res=f_0+f_1;
        if(res<max)
        {
        document.writeln(res+'<br>');
        f_0=res-f_0;
        f_1=res;
        }
        else break;
    }
}
if(max>0)
{
Fib(max);
}
function Fib2(max){
    var f_0=0;
    var f_1=-1;
    var res=0;
    document.writeln(f_0+'<br>');
    document.writeln(f_1+'<br>');
    while(true)
    {
        res=f_0+f_1;
        if(res>max)
        {
        document.writeln(res+'<br>');
        f_0=res-f_0;
        f_1=res;
        }
        else break;
    }
}
if(max<0)
{
Fib2(max);
}

