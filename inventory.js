const knownItems = new Set([]);

function itemKnown(itemName){
    return knownItems.has(itemName);
}

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
        knownItems.add(item.name);
        // console.log("added " + item.name)
    }

    list(showQuant = true){
        const colors = [
            "#a7901fff", "#c432bcff", "#aa2a0aff", "#17467cff", "#2b814fff", "#9a50c5ff", "#6e1b07ff", "#316db3ff", "#c392dfff", "#e7c818ff", "#4e9b36ff", "#694e1dff", "#686868ff", "#000000"
        ];

        let sorted = this.items.slice().sort((a, b) => colors.indexOf(a.color) - colors.indexOf(b.color));
        let lastColor = null;
        let fragment = document.createDocumentFragment();
        sorted.forEach((item, i) => {
            if (lastColor && item.color !== lastColor) fragment.append(document.createElement("br"));
            else if (lastColor) fragment.append(" ");

            let next = sorted[i + 1];
            // let comma = next && next.color === item.color ? "," : "";

            let name = document.createElement("span");
            name.textContent = item.name;

            
            name.onmouseover = () => {
                document.getElementById("tooltip").style.display="block";
                document.getElementById("tooltip").innerHTML = `<span style="color: ${item.color}; font-size: 18px;">${item.name}</span>`;
                if (item.equippable) document.getElementById("tooltip").innerHTML += `<span style="font-size: 14px;"><br>${item.equippable}</span>`;
                if (item.desc) document.getElementById("tooltip").innerHTML += `<span style="font-size: 14px;"><br>${item.desc}</span>`;
            }
            name.onmouseout = () => document.getElementById("tooltip").style.display = "none";

            name.style.fontSize = "20px";
            let wrapper = document.createElement("span");
            
            wrapper.append(name);
            
            name.style.color = item.color;
            name.style.whiteSpace = "nowrap";

            if (showQuant){
                let suffix = document.createElement("span");
                suffix.textContent = " x" + item.quantity + '\u00A0' + '\u00A0' + '\u00A0';
                suffix.style.fontSize = "14px";
                suffix.style.whiteSpace = "nowrap";
                wrapper.append(suffix);
            }
            
            
            wrapper.style.whiteSpace = "nowrap";
            // wrapper.style.overflowWrap = "break-word";

            fragment.append(wrapper);
            
            // fragment.append(comma);
            lastColor = item.color;
        });
        

        return fragment;
    }

    serialize(){
        return this.items.map(item => item.serialize());
    }

    load(savedItems){
        this.items = savedItems.map(data =>
            Item.createItem(data.name, data.quantity)
        );
    }

    craftItem(recipe){
        // console.log("attempting to craft " + recipe.output.name);
        for (let material of recipe.materials){
            let found = false;
            for (let item of this.items){
                if (item.name == material.name && item.quantity >= material.quantity){
                    found = true;
                    break;
                }
            }
            if (!found){
                // console.log("could not find " + material.quantity + " " + material.name);
                return null;
            }
        }
        for (let material of recipe.materials){
            for (let item of this.items){
                if (item.name == material.name){
                    item.quantity -= material.quantity;
                    break;
                }
            }
        }
        this.items = this.items.filter(item => item.quantity > 0);
        this.addItem(Item.createItem(recipe.output.name,recipe.output.quantity));
        // console.log("crafted " + recipe.output.name);
    }
}