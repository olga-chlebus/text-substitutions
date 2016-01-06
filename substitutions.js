var walker = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null, false);
var currentTextNode;
var textReplace = function(node, textToReplace, textToReplaceWith){
    var regExp = new RegExp(textToReplace, 'ig');
    node.data = node.data.replace(regExp, textToReplaceWith);
}
while (currentTextNode = walker.nextNode()){
    textReplace(currentTextNode, 'debate', 'dance-off');
    textReplace(currentTextNode, 'self-driving', 'uncontrollably swerving');
    textReplace(currentTextNode, 'poll', 'psychic reading');
    textReplace(currentTextNode, 'candidate', 'airbender');
    textReplace(currentTextNode, 'drone', 'dog');
    textReplace(currentTextNode, 'vows to', 'probably won\'t');
    textReplace(currentTextNode, 'at large', 'very large');
    textReplace(currentTextNode, 'successfully', 'suddenly');
    textReplace(currentTextNode, 'expands', 'physically expands');
    textReplace(currentTextNode, 'first degree', 'friggin\' awful');
    textReplace(currentTextNode, 'second degree', 'friggin\' awful');
    textReplace(currentTextNode, 'third degree', 'friggin\' awful');
    textReplace(currentTextNode, 'an unknown number', 'like hundreds');
    textReplace(currentTextNode, 'front runner', 'blade runner');
    textReplace(currentTextNode, 'global', 'spherical');
    textReplace(currentTextNode, 'years', 'minutes');
    textReplace(currentTextNode, 'minutes', 'years');
    textReplace(currentTextNode, 'no indication', 'lots of signs');
    textReplace(currentTextNode, 'urged restraint by', 'drunkenly egged on');
    textReplace(currentTextNode, 'horsepower', 'tons of horsemeat');
}