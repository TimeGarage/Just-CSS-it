function insertDocFrag(element, n) {
    let fragment = document.createDocumentFragment()
    for (let i = 0; i < n; i++){
        let node = document.createElement('p')
        node.innerHTML = i
        fragment.appendChild(node)
    }
    let start = new Date()
    element.appendChild(fragment)
    let end = new Date()
    return 'insert ' + n + ' DOM nodes with documentFragment: ' + (end - start) + 'ms'
}

function insertDOM(element, n) {
    let start = new Date()
    for (let i = 0; i < n; i++){
        let node = document.createElement('p')
        node.innerHTML = i
        element.appendChild(node)
    }
    let end = new Date()
    return 'insert ' + n + ' DOM nodes without documentFragment: ' + (end - start) + 'ms'
}