function produceDrivingRange(blockRange) {
    return function(start, end) {
        let startNum = start.slice(0, start.length - 2)
        let endNum = end.slice(0, start.length - 2)
        let distance = Math.abs(startNum - endNum)
        if (distance - blockRange < 0) {
            return `within range by ${blockRange-distance}`
        } else {
            return `${distance - blockRange} blocks out of range`
        }
    }
}

function produceTipCalculator(percentage) {
    return function(fare) {
      return fare * percentage
    }
}