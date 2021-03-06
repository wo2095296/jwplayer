define([

], function () {
    function endOfRange(timeRanges) {
        if (!timeRanges || !timeRanges.length) {
            return 0;
        }

        return timeRanges.end(timeRanges.length - 1);
    }

    return {
        endOfRange: endOfRange,
    };
});
