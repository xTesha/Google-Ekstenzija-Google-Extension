let logo = document.querySelector('.lnXdpd')
logo.src = chrome.runtime.getURL('images/logo.png')
logo.srcset = chrome.runtime.getURL('images/logo.png')

let text = document.querySelector('#SIvCob')
text.innerText = 'Ovaj extension je radjen u svrhe ucenja i nije kompletan stoga sve nedostatke ne uzimati za zlo!'