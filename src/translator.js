export default function toHebrew(transText, callback) {
    const url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=iw&dt=t&q=" + encodeURIComponent(transText);

    let translation = "";

    let header = new Headers({
        "Access-Control-Allow-Origin": "*"
    });

    fetch(url, {
            headers: new Headers({
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            })
        })
        .then(transResponse => transResponse.json())
        .then(tr => {
            translation = tr;
            callback(translation);
        });
}