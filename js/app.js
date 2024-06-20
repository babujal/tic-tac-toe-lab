/*-------------------------------- Constants --------------------------------*/
const x = 'X'
const o = 'O'
const propmt = document.querySelector('#message')
// console.log(propmt)
const s0 = document.querySelector('#s0')
const s1 = document.querySelector('#s1')
const s2 = document.querySelector('#s2')
const s3 = document.querySelector('#s3')
const s4 = document.querySelector('#s4')
const s5 = document.querySelector('#s5')
const s6 = document.querySelector('#s6')
const s7 = document.querySelector('#s7')
const s8 = document.querySelector('#s8')


/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const createMark = (el, target) => {
    const mark = document.createElement('h3')
    mark.textContent = el
    target.appendChild(mark)
}
const handleClick = (e) => {
    console.log('Click register at s0', e.target.className)
}

/*----------------------------- Event Listeners -----------------------------*/

s0.addEventListener('click', handleClick)
s1.addEventListener('click', handleClick)
s2.addEventListener('click', handleClick)
s3.addEventListener('click', handleClick)
s4.addEventListener('click', handleClick)
s5.addEventListener('click', handleClick)
s6.addEventListener('click', handleClick)
s7.addEventListener('click', handleClick)
s8.addEventListener('click', handleClick)

