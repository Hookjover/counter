window.addEventListener('dblclick', function(event) {
  event.preventDefault();
}, true);
let peopleSum = document.getElementById("peopleSum")
console.log(peopleSum.innerText);
let countOne = document.getElementById("countOne")
let count = 0
//获取计数区域
let singleStamp = document.getElementById("dataArea");
console.log(countOne.innerHTML)

function incc(){
    count += 1
    countOne.innerText = count
}

function saveNum(){
    if (countOne.innerText!="0") {
        //计入总数
        peopleSum.innerText = Math.floor(peopleSum.innerText)+count;
        console.log(peopleSum.innerText);
        console.log('b')
        //获取时间
        let now = new Date();
        let year = now.getHours();
        let month = now.getMinutes(); 
        let seconds= now.getSeconds();
        let timeStamp = `‌${year}:${month}:${seconds}`;
        console.log(timeStamp)
        console.log(singleStamp)
        //添加innerHTML
        singleStamp.innerHTML +=  '<div><span class="countStamp">'+countOne.innerText+'</span><span class="timeStamp">'+timeStamp+'</span></div>' 
        
        /* for(var i=0;i<countStamp.length;i++){
                countStamp[i].innerHTML += '<span class="countStamp">203</span
            ><span class="timeStamp">20:34:43</span>'
                console.log(countStamp[i].innerHTML)
        } */
    } else { 
        
    }  
    
    //计数归零
    countOne.innerText = 0;
    count = 0; 
}

function clearNum(){
    countOne.innerText = 0;
    count = 0;
    singleStamp.innerHTML = ' ';
    peopleSum.innerText = 0;

}
 
