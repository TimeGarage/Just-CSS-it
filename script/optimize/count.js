function normalCount(element) {
    let count = 1
    element.innerHTML = '无优化版本'
    function setCount() {
        element.innerHTML = '无优化版本: ' + count++
        console.log('normal')
    }
    element.onmousemove = setCount
}

function debounce(fn, delay, immediate=true) {
    let timer
    return function (...args) {
        let context = this
        if(timer) clearTimeout(timer)
        if (immediate) {
            let callNow = !timer
            timer = setTimeout(function () {
                timer = null
            }, delay)
            if(callNow) fn.apply(context, args)
        }
        else {
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)   
        }
    }
}

function throttle(fn, delay) {
    let previous = 0
    return function (...args) {
        let context = this
        let now = new Date()
        if (now - previous > delay) {
            previous = now
            fn.apply(context, args)
        }
    }
}

function debounceCount(element) {
    let count = 1
    element.innerHTML = '防抖版本'
    function setCount() {
        element.innerHTML = '防抖版本: ' + count++
        console.log('debounce')
    }
    setCount = debounce(setCount, 1000)
    element.onmousemove = setCount
}

function throttleCount(element) {
    let count = 1
    element.innerHTML = '节流版本'
    function setCount() {
        element.innerHTML = '节流版本: ' + count++
        console.log('debounce')
    }
    setCount = throttle(setCount, 1000)
    element.onmousemove = setCount
}