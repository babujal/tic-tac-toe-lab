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
/*
Notes for tomorrow:
The arrays below that contains the winning combinations wins.
*/
const xMarks = []
const oMarks = []


/*---------------------------- Variables (state) ----------------------------*/
let alternateMark = true


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const winner = () => {
    console.log(s0.innerText)
}

const createMark = (char, target) => {
    const mark = document.createElement('h3')
    mark.textContent = char
    target.appendChild(mark)
}

const handleClick = (e) => {
    let mark = null
    const elId = e.target.id
    if (alternateMark) {
        mark = x
        xMarks.push(elId)
        console.log(`Mark pushed ${xMarks}`)
        alternateMark = false
    }else{
        mark = o
        alternateMark = true
    }
    const target = e.target
    // console.log('Click register at', elId)
    // console.log(alternateMark)
    createMark(mark, target)
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

