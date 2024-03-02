export function debounce(fun, time) {
    let timer
    return function () {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fun()
        }, time)
    }
}