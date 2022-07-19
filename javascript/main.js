const veganCookiesSteps = [
    [1, "cup", "white flour", "dry"],
    [0.5, "tsp", "baking soda", "wet"],
    [0.25, "tsp", "salt", "dry"],
    [0.25, "cup", "sugar", "dry"],
    [0.25, "cup", "brow sugar", "dry"],
    [0.25, "tbsp", "soy milk", "wet"],
    [0.25, "tbsp", "oil", "wet"],
    [0.25, "tsp", "pure vanilla extract", "dry"],
    ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
    [325, 10]
  ];

function Receipe(title, steps) {
    var receipe = Object.create(Receipe.prototype);
    receipe.title = title;
    receipe.steps = steps;

    return receipe;
}

Receipe.prototype.cook = function () {

    // On créer d'abord un tableau qui dont les éléments seront les phrases transformées.
    // Il suffira de le 'join()' en fin de processus pour obtenir une seule chaîne de caractère affichable.
    const stringProcessing = [];

    // On transforme chaque ingrédient du tableau selon les conditions de l'exercice,
    // puis on injecte chaque résultat de transformation dans la chaine de caractère finale.
    stringProcessing.push(`<h1>Receipe : ${this.title} !</h1><ol>`);

    this.steps.map(item => {
        if(item.includes('dry')){
            let stringify = `<li>Add ${item[0]} ${item[1]} of ${item[2]} to the bowl</li>`;
            stringProcessing.push(stringify);
        }

        if(item.includes('wet')){
            let stringify = `<li>For ${item[0]} ${item[1]} of ${item[2]} to the bowl</li>`;
            stringProcessing.push(stringify);
        }

        if(item.length === 1){
            stringProcessing.push(`<li>${item}</li>`);
        }

        if(item.length === 2){
            if(!arrayEquals(item, [0, 0])){
                let stringify = `<li>Then heat ${item[0]} minutes in the oven at ${item[1]} degrees.</li></ol>`;
                stringProcessing.push(stringify);
            }
        }
    });

    stringProcessing.push('ENJOY & SHARE IT !');

    console.log(stringProcessing.join(''));
    return stringProcessing.join('');
}

arrayEquals = (a, b) => {
    return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
}


const veganCookies = Receipe("Vegan cookies", veganCookiesSteps);

// veganCookies.cook();

const receipeContainer = document.getElementById('receipe-container');
receipeContainer.innerHTML = veganCookies.cook();


