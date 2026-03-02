function truncateDecimal(num, n = 1) {
    if (num === 0) return 0;

    const absNum = Math.abs(num);
    const magnitude = Math.floor(Math.log10(absNum));
    const decimals = -magnitude + (n - 1);

    const factor = Math.pow(10, decimals);
    return Math.floor(num * factor) / factor;
}

function isMaterial(recipe, itemName){
    for (let material of recipe.materials){
        for (let item of this.items){
            if (item.name == itemName){
                return true;
            }
        }
    }
    return false;
}

function toRoman(num){
    switch (num){
        case 1:
            return "I";
        case 2:
            return "II";
        case 3:
            return "III";
        case 4:
            return "IV";
        case 5:
            return "V";
    }
}

function toShort(num){
    let suffix = "";
    if ((num / 1000) > 1){
        num /= 1000;
        suffix = "K"
    }
    if ((num / 1000) > 1){
        num /= 1000;
        suffix = "M"
    }
    if ((num / 1000) > 1){
        num /= 1000;
        suffix = "B"
    }
    return Math.floor(num*100)/100 + suffix;
}