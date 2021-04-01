function addClickListener(element) {
    element.addEventListener('click', function (event) {
        console.log(`current target: ${event.currentTarget.id}`)
        alert(`click target: ${event.target.textContent}`)
    })
}