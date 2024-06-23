/*-------------------------------- Constants --------------------------------*/
const x = 'X'
const o = 'O'
const prompt = document.querySelector('#message')
const s0 = document.querySelector('#s0')
const s1 = document.querySelector('#s1')
const s2 = document.querySelector('#s2')
const s3 = document.querySelector('#s3')
const s4 = document.querySelector('#s4')
const s5 = document.querySelector('#s5')
const s6 = document.querySelector('#s6')
const s7 = document.querySelector('#s7')
const s8 = document.querySelector('#s8')
const btn = document.querySelector('button')

const xMarks = []
const oMarks = []


/*---------------------------- Variables (state) ----------------------------*/
let alternateMark = true
let weHAveAWinner = false


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

const reset = () => {
    alternateMark = true
    weHAveAWinner = false
    xMarks.splice(0, xMarks.length)
    oMarks.splice(0, oMarks.length)
    prompt.innerText = `Let's Play!`
    s0.innerText = ''
    s1.innerText = ''
    s2.innerText = ''
    s3.innerText = ''
    s4.innerText = ''
    s5.innerText = ''
    s6.innerText = ''
    s7.innerText = ''
    s8.innerText = ''
}

const checkForWinner = (id, mark) => {

    if (id === 's0') {
        if (mark === x) {
            if (weHAveAWinner === false && xMarks.includes('s1') && xMarks.includes('s2') || weHAveAWinner === false && xMarks.includes('s4') && xMarks.includes('s8') || weHAveAWinner === false && xMarks.includes('s3') && xMarks.includes('s6')) {
                prompt.innerText = 'X WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
        if (mark === o) {
            if (weHAveAWinner === false && oMarks.includes('s1') && oMarks.includes('s2') || weHAveAWinner === false && oMarks.includes('s4') && oMarks.includes('s8') || weHAveAWinner === false && oMarks.includes('s3') && oMarks.includes('s6')) {
                prompt.innerText = 'O WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
    }
    if (id === 's1') {
        if (mark === x) {
            if (weHAveAWinner === false && xMarks.includes('s0') && xMarks.includes('s2') || weHAveAWinner === false && xMarks.includes('s4') && xMarks.includes('s7')) {
                prompt.innerText = 'X WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
        if (mark === o) {
            if (weHAveAWinner === false && oMarks.includes('s0') && oMarks.includes('s2') || weHAveAWinner === false && oMarks.includes('s4') && oMarks.includes('s7')) {
                prompt.innerText = 'O WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is X turns'
                return false
            }
        }
    }
    if (id === 's2') {
        if (mark === x) {
            if (weHAveAWinner === false && xMarks.includes('s1') && xMarks.includes('s0') || weHAveAWinner === false && xMarks.includes('s4') && xMarks.includes('s6') || weHAveAWinner === false && xMarks.includes('s5') && xMarks.includes('s8')) {
                prompt.innerText = 'X WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
        if (mark === o) {
            if (weHAveAWinner === false && oMarks.includes('s1') && oMarks.includes('s0') || weHAveAWinner === false && oMarks.includes('s4') && oMarks.includes('s6') || weHAveAWinner === false && oMarks.includes('s5') && oMarks.includes('s8')) {
                prompt.innerText = 'O WINS!'
                weHAveAWinner = true
                return true
            } else if(weHAveAWinner === false) {
                prompt.innerText = 'It is X turns'
                return false
            }
        }
    }
    if (id === 's3') {
        if (mark === x) {
            if (weHAveAWinner === false && xMarks.includes('s0') && xMarks.includes('s6') || weHAveAWinner === false && xMarks.includes('s4') && xMarks.includes('s5')) {
                prompt.innerText = 'X WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
        if (mark === o) {
            if (weHAveAWinner === false && oMarks.includes('s0') && oMarks.includes('s6') || weHAveAWinner === false && oMarks.includes('s4') && oMarks.includes('s5')) {
                prompt.innerText = 'O WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is X turns'
                return false
            }
        }
    }
    if (id === 's4') {
        if (mark === x) {
            if (weHAveAWinner === false && xMarks.includes('s1') && xMarks.includes('s7') || weHAveAWinner === false && xMarks.includes('s3') && xMarks.includes('s5') || weHAveAWinner === false && xMarks.includes('s0') && xMarks.includes('s8') || weHAveAWinner === false && xMarks.includes('s2') && xMarks.includes('s6')) {
                prompt.innerText = 'X WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
        if (mark === o) {
            if (weHAveAWinner === false && oMarks.includes('s1') && oMarks.includes('s7') || weHAveAWinner === false && oMarks.includes('s3') && oMarks.includes('s5') || weHAveAWinner === false && oMarks.includes('s0') && oMarks.includes('s8') || weHAveAWinner === false && xMarks.includes('s2') && xMarks.includes('s6')) {
                prompt.innerText = 'O WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is X turns'
                return false
            }
        }
    }
    if (id === 's5') {
        if (mark === x) {
            if (weHAveAWinner === false && xMarks.includes('s2') && xMarks.includes('s8') || weHAveAWinner === false && xMarks.includes('s4') && xMarks.includes('s3')) {
                prompt.innerText = 'X WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
        if (mark === o) {
            if (weHAveAWinner === false && oMarks.includes('s2') && oMarks.includes('s8') || weHAveAWinner === false && oMarks.includes('s4') && oMarks.includes('s3')) {
                prompt.innerText = 'O WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is X turns'
                return false
            }
        }
    }
    if (id === 's6') {
        if (mark === x) {
            if (weHAveAWinner === false && xMarks.includes('s0') && xMarks.includes('s3') || weHAveAWinner === false && xMarks.includes('s4') && xMarks.includes('s2') || weHAveAWinner === false && xMarks.includes('s7') && xMarks.includes('s8')) {
                prompt.innerText = 'X WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
        if (mark === o) {
            if (weHAveAWinner === false && oMarks.includes('s0') && oMarks.includes('s3') || weHAveAWinner === false && oMarks.includes('s4') && oMarks.includes('s2') || weHAveAWinner === false && oMarks.includes('s7') && oMarks.includes('s8')) {
                prompt.innerText = 'O WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is X turns'
                return false
            }
        }
    }
    if (id === 's7') {
        if (mark === x) {
            if (weHAveAWinner === false && xMarks.includes('s4') && xMarks.includes('s1') || weHAveAWinner === false && xMarks.includes('s6') && xMarks.includes('s8')) {
                prompt.innerText = 'X WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
        if (mark === o) {
            if (weHAveAWinner === false && oMarks.includes('s4') && oMarks.includes('s1') || weHAveAWinner === false && oMarks.includes('s6') && oMarks.includes('s8')) {
                prompt.innerText = 'O WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is X turns'
                return false
            }
        }
    }
    if (id === 's8') {
        if (mark === x) {
            if (weHAveAWinner === false && xMarks.includes('s4') && xMarks.includes('s0') || weHAveAWinner === false && xMarks.includes('s7') && xMarks.includes('s6') || weHAveAWinner === false && xMarks.includes('s5') && xMarks.includes('s2')) {
                prompt.innerText = 'X WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is O turns'
                return false
            }
        }
        if (mark === o) {
            if (weHAveAWinner === false && oMarks.includes('s4') && oMarks.includes('s0') || weHAveAWinner === false && oMarks.includes('s7') && oMarks.includes('s6') || weHAveAWinner === false && oMarks.includes('s5') && oMarks.includes('s2')) {
                prompt.innerText = 'O WINS!'
                weHAveAWinner = true
                return true
            } else if (weHAveAWinner === false) {
                prompt.innerText = 'It is X turns'
                return false
            }
        }
    }
}

const createMark = (char, target) => {
    if (weHAveAWinner === false){
        const mark = document.createElement('p')
        mark.textContent = char
        target.appendChild(mark)
    }
}

const handleClick = (e) => {
    let mark = null
    const elId = e.target.id
    const target = e.target
    if (alternateMark && !e.target.innerText) {
        mark = x
        xMarks.push(elId)
        createMark(mark, target)
        checkForWinner(elId, mark)
        console.log(`Marks pushed on X ${xMarks}`)
        alternateMark = false
    } else if (!alternateMark && !e.target.innerText) {
        mark = o
        oMarks.push(elId)
        createMark(mark, target)
        checkForWinner(elId, mark)
        console.log(`Marks pushed on O ${oMarks}`)
        alternateMark = true
    }
    if (weHAveAWinner === false && xMarks.length === 5) {
        prompt.innerText = 'It is a Draw!'
    }
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
btn.addEventListener('click', reset)

