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
Start displaying whom turn is and who is the winner. After that, Time for CSS
*/

const xMarks = []
const oMarks = []


/*---------------------------- Variables (state) ----------------------------*/
let alternateMark = true


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const checkForWinner = (id, mark) => {

    if (id === 's0') {
        if (mark===x && xMarks.includes('s1') && xMarks.includes('s2') || mark===x && xMarks.includes('s4') && xMarks.includes('s8') || mark===x && xMarks.includes('s3') && xMarks.includes('s6')) {
            return true
        } else if (oMarks.includes('s1') && oMarks.includes('s2') || oMarks.includes('s4') && oMarks.includes('s8') || oMarks.includes('s3') && oMarks.includes('s6')) {
            return true
        } else {
            return false
        }
    }
    if (id === 's1') {
        if (mark===x && xMarks.includes('s0') && xMarks.includes('s2') || mark===x && xMarks.includes('s4') && xMarks.includes('s7')) {
            return true
        } else if (oMarks.includes('s0') && oMarks.includes('s2') || oMarks.includes('s4') && oMarks.includes('s7')) {
            return true
        } else {
            return false
        }
    }
    if (id === 's2') {
        if (mark===x && xMarks.includes('s1') && xMarks.includes('s0') || mark===x && xMarks.includes('s4') && xMarks.includes('s6') || mark===x && xMarks.includes('s5') && xMarks.includes('s8')) {
            return true
        } else if (oMarks.includes('s1') && oMarks.includes('s0') || oMarks.includes('s4') && oMarks.includes('s6') || oMarks.includes('s5') && oMarks.includes('s8')) {
            return true
        } else {
            return false
        }
    }
    if (id === 's3') {
        if (mark===x && xMarks.includes('s0') && xMarks.includes('s6') || mark===x && xMarks.includes('s4') && xMarks.includes('s5')) {
            return true
        } else if (oMarks.includes('s0') && oMarks.includes('s6') || oMarks.includes('s4') && oMarks.includes('s5')) {
            return true
        } else {
            return false
        }
    }
    if (id === 's4') {
        if (mark===x && xMarks.includes('s1') && xMarks.includes('s7') || mark===x && xMarks.includes('s3') && xMarks.includes('s5') || mark===x && xMarks.includes('s0') && xMarks.includes('s8')) {
            return true
        } else if (oMarks.includes('s1') && oMarks.includes('s7') || oMarks.includes('s3') && oMarks.includes('s5') || oMarks.includes('s0') && oMarks.includes('s8')) {
            return true
        } else {
            return false
        }
    }
    if (id === 's5') {
        if (mark===x && xMarks.includes('s2') && xMarks.includes('s8') || mark===x && xMarks.includes('s4') && xMarks.includes('s3')) {
            return true
        } else if (oMarks.includes('s2') && oMarks.includes('s8') || oMarks.includes('s4') && oMarks.includes('s3')) {
            return true
        } else {
            return false
        }
    }
    if (id === 's6') {
        if (mark===x && xMarks.includes('s0') && xMarks.includes('s3') || mark===x && xMarks.includes('s4') && xMarks.includes('s2') || mark===x && xMarks.includes('s7') && xMarks.includes('s8')) {
            return true
        } else if (oMarks.includes('s0') && oMarks.includes('s3') || oMarks.includes('s4') && oMarks.includes('s2') || oMarks.includes('s7') && oMarks.includes('s8')) {
            return true
        } else {
            return false
        }
    }
    if (id === 's7') {
        if (mark===x && xMarks.includes('s4') && xMarks.includes('s1') || mark===x && xMarks.includes('s6') && xMarks.includes('s8')) {
            return true
        } else if (oMarks.includes('s4') && oMarks.includes('s1') || oMarks.includes('s6') && oMarks.includes('s8')) {
            return true
        } else {
            return false
        }
    }
    if (id === 's8') {
        if (mark===x && xMarks.includes('s4') && xMarks.includes('s0') || mark===x && xMarks.includes('s7') && xMarks.includes('s6') || mark===x && xMarks.includes('s5') && xMarks.includes('s2')) {
            return true
        } else if (oMarks.includes('s4') && oMarks.includes('s0') || oMarks.includes('s7') && oMarks.includes('s6') || oMarks.includes('s5') && oMarks.includes('s2')) {
            return true
        } else {
            return false
        }
    }
}

const createMark = (char, target) => {
    const mark = document.createElement('h3')
    mark.textContent = char
    target.appendChild(mark)
}

const handleClick = (e) => {
    let mark = null
    const elId = e.target.id
    const target = e.target
    if (alternateMark && !e.target.innerText) {
        mark = x
        xMarks.push(elId)
        console.log(checkForWinner(elId, mark))
        console.log(`Marks pushed on X ${xMarks}`)
        alternateMark = false
    } else if (!alternateMark && !e.target.innerText) {
        mark = o
        oMarks.push(elId)
        console.log(checkForWinner(elId, mark))
        console.log(`Marks pushed on O ${oMarks}`)
        alternateMark = true
    }
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

