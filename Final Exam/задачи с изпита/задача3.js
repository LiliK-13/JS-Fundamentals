function messagesManager(arr){
let n = Number(arr.shift());
let data = {};
for(let el of arr){
    if(el ==='Statistics')break;

    if(el.includes('Add')){
        let current = el.split('=');
        let username = current[1];
        let sent = Number(current[2]);
        
        if(!data.hasOwnProperty(username)){
            data[username] = {
                sent,
                received
            }
        }
    }
    else if(el.includes('Message')){
        let current = el.split('=');
        let sender = current[1];
        let receiver = current[2];

        if(data.hasOwnProperty(sender) && data.hasOwnProperty(receiver)){
            data[sender].sent++;
            data[receiver].received++

            if(data[sender].sent + data[sender].received === n){
                console.log(`${sender} reached the capacity!`);
                delete data[sender];
            }
            if(data[receiver].sent + data[receiver].received === n){
                console.log(`${receiver} reached the capacity!`)
                delete data[receiver];
            }
        }
    }
    else if(el.includes('Empty')){
        let current = el.split('=');
        let username = current[1];
        if(username === 'All') data = {};
        else{
            if(data.hasOwnProperty(username)){
                delete data[username];
            }
        }
    }
}
    let keys = Object.keys(data);
    console.log(`Users count: ${keys.length}`);
    let sorted = Object.entries(data).sort((x, y) => x[0].localeCompare(y[0])).sort((x, y) => y[1].received - x[1].received);

    for(let [key, value] of sorted){
        console.log(`${key} - ${value.sent + value.received}`)
    }
}
messagesManager(["10",
"Add=Berg=9=0",
"Add=Kevin=0=0",
"Message=Berg=Kevin",
"Add=Mark=5=4",
"Statistics"])