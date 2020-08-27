function includeChinaOrEastIndies(voyage, result) {
    if ([
        'china',
        'east-indies',
    ].includes(voyage.zone)) {
        result += 4;
    }
    return result;
}

function voyageRisk(voyage) {
    let result = 1;
    if (voyage.length > 4) {
        result += 2;
    }
    if (voyage.length > 8) {
        result += voyage.length - 8;
    }
    result = includeChinaOrEastIndies(voyage, result);
    return Math.max(result, 0);
}

function hasChina(history) {
    return history.some(v => 'china' === v.zone);
}

function captainHistoryRisk(voyage, history) {
    let result = 1;
    if (history.length < 5) {
        result += 4;
    }
    result += history.filter(v => v.profit < 0).length;
    if (voyage.zone === 'china' && hasChina(history)) {
        result -= 2;
    }
    return Math.max(result, 0);
}

function getResultByLength(history, result, voyage) {
    if (history.length > 10) {
        result += 1;
    }
    if (voyage.length > 12) {
        result += 1;
    }
    if (voyage.length > 18) {
        result -= 1;
    }
    return result;
}

function getResultNoHasChina(history, result, voyage) {
    if (history.length > 8) {
        result += 1;
    }
    if (voyage.length > 14) {
        result -= 1;
    }
    return result;
}

function voyageProfitFactor(voyage, history) {
    let result = 2;
    if (voyage.zone === 'china' || voyage.zone === 'east-indies') {
        result += 1;
    }
    if (voyage.zone === 'china' && hasChina(history)) {
        result += 3;
        result = getResultByLength(history, result, voyage);
    } else {
        result = getResultNoHasChina(history, result, voyage);
    }
    return result;
}

function rating(voyage, history) {
    const vpf = voyageProfitFactor(voyage, history);
    const vr = voyageRisk(voyage);
    const chr = captainHistoryRisk(voyage, history);
    if (vpf * 3 > (vr + chr * 2)) {
        return 'A';
    } else {
        return 'B';
    }
}

module.exports = {
    rating, voyageRisk, hasChina, captainHistoryRisk, voyageProfitFactor
};
