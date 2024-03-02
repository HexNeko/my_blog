export const transform = (str) => {
    const strList = str.split('\n')
    let resStr = ''
    strList.forEach(item => {
        console.log('line', item)
        //#开头
        if (item.startsWith('#')) {
            let count = 2
            for (let i = 0; i < item.length; i++) {
                if (item[i] === '#') {
                    count++
                } else {
                    resStr += `<h${count}>` + item.substring(i).trim() + `</h${count}>`
                    break
                }
            }

        }
        else if (item == '---') {
            resStr += '<hr>'
        }
        else {
            resStr += item
        }
    })
    console.log('trans', resStr)
    return resStr
}