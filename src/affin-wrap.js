import {
    getScore,
    langProc
} from "./affin-impl";
import toHebrew from "./translator";

window.analyseSentiment = token => {
    return getScore(token);
};

const enWords = langProc.getLabels("en");
window.translation = {};
let count = 0;

function returnTranslation(result) {
    window.translation[result[0][0][1]] = enWords[result[0][0][1]];
    count++;

    if (count == Object.keys(enWords).length) {
        // save json
    }
}

window.translate = () => {
    count = 0;
    for (const word in enWords) {
        toHebrew(word, returnTranslation);
    }
}

// window.languageProcessor = langProc;