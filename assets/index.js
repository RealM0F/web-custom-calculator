var theme = document.getElementById('theme')

var xp = document.getElementById('xp')
var multiplier = document.getElementById('multiplier')
var output = document.getElementById('value')

theme.addEventListener('change', changeTheme)

xp.addEventListener('input', levelFromXP)
multiplier.addEventListener('input', levelFromXP)

function getRequiredXP(level) {
    return ((5 * Math.pow(level, 2)) * (50 * level) + 100) // 5(x^2)+50x+100
}

function levelFromXP() {
    exp = parseInt(xp.value) * parseInt(multiplier.value == undefined ? 1 : multiplier.value) // mynamea javascript
    let level = 0
    while (exp >= getRequiredXP(level)) {
        exp = exp - getRequiredXP(level)
        level++; // random semicolon because i think it's funny
    }

    output.innerText = `Level: ${level}`
}

function changeTheme() {
    switch (theme.value) {
        case "strife":
            document.documentElement.style.backgroundColor = "var(--strife)"
            break;
        case "dejay":
            document.documentElement.style.backgroundColor = "var(--dejay)"
            break;
        case "matt":
            document.documentElement.style.backgroundColor = "var(--matt)"
            break;
        default:
            break;
    }
}