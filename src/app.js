let moneyQuantity = document.getElementById('quantity');
let sendButton = document.getElementById('sendButton');
let timePicker = document.getElementById('times');

const CronJob = require('cron').CronJob;
const img = require('./iscep.png');

function showNotification(text) {
   
}

(async () => {
    await window.Notification.requestPermission();
    
    if(window.Notification.permission === 'default') 
        await window.Notification.requestPermission();

    if(window.Notification.permission === 'denied') {
        alert('Lutfen bildirim istegini kabul edin');
        await window.Notification.requestPermission();
    }
})();

sendButton.addEventListener('click', () => {
    let text = `Hesabiniza ${moneyQuantity.value}USD geldi`;
    let time = timePicker.value;
    let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;

    let job = new CronJob(time, () => {
        new window.Notification('IsCep', {
            body: text,
            icon: img,
            lang: 'tr_TR',          
        });
    }, null, true, tz, null, false); 
});