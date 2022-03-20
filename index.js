// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ` + activity +'!'

}

function mondayWork(task = 'go to the office') {
    return 'This Monday, I will ' + task + `.`
}

// function wrapAdjective(visFlair = "*") {
//     function innerFunction(text = "a dedicated programmer") {
//         return `${text}
//     }
//     return `You are a ${visFlair}` + innerFunction(text) `${visFlair}`
// }

//call
// wrapAdjective("*")("a dedicated programmer")

function wrapAdjective(visFlair = "*") {
    const adjectiveString = (adjective = "special") => {
        return `You are ${visFlair}${adjective}${visFlair}!`
    }
    return adjectiveString
}