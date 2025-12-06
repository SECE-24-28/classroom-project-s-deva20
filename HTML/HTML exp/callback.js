function add(show)
{
    istrue=true
    if(istrue)
    {
       show()//display
    }
}

console.log("bye")

add(display)

function display(){
    console.log("ok")
}