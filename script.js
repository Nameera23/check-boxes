const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => dotheTrick(e.target)
))

function dotheTrick(theclickOne){
    if(good.checked && cheap.checked && fast.checked) {
        if(good === theclickOne){
            fast.checked = false
        }

        if(cheap === theclickOne){
            good.checked = false
        }

        if(cheap === theclickOne){
            cheap.checked = false
        }
    }
}