let count = 0
let count_id = document.getElementById("count_id")
let save_id = document.getElementById("save_id")

function increment() {
    count_id.textContent = count+=1;
}   
function decrement() {
    count_id.textContent = count-=1;
}

function save()
{
let count_pre= count + " - "
save_id.textContent+= count_pre
count_id.textContent=0
count=0
}



