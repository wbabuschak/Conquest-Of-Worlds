class Inventory{
    constructor(){
        this.items = [];
    }
    addItem(item){
        if (!item){
            return;
        }
        for (let i of this.items){
            if (item.name == i.name){
                i.quantity += item.quantity;
                return;
            }
        }
        this.items.push(new Item(item.name,item.quantity,item.equippable,item.desc,item.color));
    }

    list(){
        let output = "";
        let flag = true;
        const colors = ["#a7901fff", "#c432bcff", "#aa2a0aff", "#17467cff", "#2b814fff","#9a50c5ff", "#686868ff", "#6e1b07ff", "#316db3ff", "#c392dfff", "#e7c818ff", "#4e9b36ff", "#000000"];
        let sorted = this.items.slice().sort((a, b) => {
            return colors.indexOf(a.color) - colors.indexOf(b.color);
        });
        for (let item of sorted) {
            if (!flag) output += ", ";
            flag = false;
            output += item.quantity + "x" + `<span style="color: ${item.color};"> ${item.name}</span>`;
        }
        return output;
    }

    serialize(){
        return this.items.map(item => item.serialize());
    }

    load(savedItems){
        this.items = savedItems.map(data =>
            Item.createItem(data.name, data.quantity)
        );
    }
}