var input = document.getElementById('xp')
var output = document.getElementById('value')

input.addEventListener('input', levelFromXp)

function getRequiredXP(level) {
    return (5 * (level ** 2) + 50 * level + 100) // (5x^2)+500x
}

function levelFromXp(event) {
    exp = parseInt(input.value) // mynamea javascript

    let level = 0
    while (exp >= getRequiredXP(level)) {
        exp = exp - getRequiredXP(level)
        level++; // random semicolon because i think it's funny
    }

    output.innerText = `Level: ${level}`
}