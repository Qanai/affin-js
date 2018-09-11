import Sentiment from "sentiment";
import * as langProc from "sentiment/lib/language-processor";

function getScore(token) {
    const sent = new Sentiment();
    // console.log(sent);    
    const res = sent.analyze(token);
    return res;
}

export {
    getScore,
    langProc
};