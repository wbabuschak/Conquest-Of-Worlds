function truncateDecimal(num, n = 1) {
    if (num === 0) return 0;

    const absNum = Math.abs(num);
    const magnitude = Math.floor(Math.log10(absNum));
    const decimals = -magnitude + (n - 1);

    const factor = Math.pow(10, decimals);
    return Math.floor(num * factor) / factor;
}