const list = [1, 3, 5, 2]

function getSmallestNumberOfSwapsPossible (list=[]) {
    let arr = [...list]
    let swaps= 0
    let min = Math.min(...list)
    let current_pos = 0

    while(arr.length > 0) {
        let min_pos = list.indexOf(min)

        if (min_pos !== current_pos) {
            [list[min_pos], list[current_pos]] = [list[current_pos], list[min_pos]]
            swaps++
        } 

        arr = arr.filter((item) => {
            return item !== min
        })

        min = Math.min(...arr)
        current_pos++
    }

    return {swaps, list}
}

getSmallestNumberOfSwapsPossible(list) // should return {swaps: 2, list: [1, 2, 3, 5]


