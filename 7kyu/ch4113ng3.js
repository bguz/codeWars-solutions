// Ch4113ng3

// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"

function nerdify(txt) {
    return txt.split('').map(l => {
        if (l === 'a' || l === 'A') return '4';
        else if (l === 'e' || l === 'E') return '3';
        else if (l === 'l') return 1;
        else return l;
    }).join('')
}