(function(){
    var textSubstitutions = {
        'debate': 'dance-off',
        'self driving': 'uncontrollably swerving',
        'poll': 'psychic reading',
        'candidate': 'airbender',
        'drone': 'dog',
        'vows to': 'probably won\'t',
        'at large': 'very large',
        'successfully': 'suddenly',
        'expands': 'physically expands',
        'first degree': 'friggin\' awful',
        'second degree': 'friggin\' awful',
        'third degree': 'friggin\' awful',
        'an unknown number': 'like hundreds',
        'front runner': 'blade runner',
        'global': 'spherical',
        'years': 'temp1',
        'minutes': 'years',
        'no indication': 'lots of signs',
        'urged restraint by': 'drunkenly egged on',
        'horsepower': 'tons of horsemeat',
        'temp1': 'minutes'
    };

    var regexpSubstitutions = [];
    for(key in textSubstitutions) {
        var rSubst = {
            regexpToReplace: new RegExp(key, 'ig'),
            textToReplaceWith: textSubstitutions[key]
        };
        regexpSubstitutions.push(rSubst);
    };

    var replace = function(node, regexpSubstitution) {
        node.data = node.data.replace(regexpSubstitution.regexpToReplace, regexpSubstitution.textToReplaceWith);
    }

    var walker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false);
    var currentTextNode;


    while (currentTextNode = walker.nextNode()) {
        if (currentTextNode.data.trim()) {
            for(i in regexpSubstitutions) {
                replace(currentTextNode,regexpSubstitutions[i]);
            }
        }
    }

})();