(function(){
	var textSubstitutions = [
		{
			textToReplace: 'debate',
			textToReplaceWith: 'dance-off'
		},
		{
			textToReplace: 'self driving',
			textToReplaceWith: 'uncontrollably swerving'
		},
		{
			textToReplace: 'poll',
			textToReplaceWith: 'psychic reading'
		},
		{
			textToReplace: 'candidate',
			textToReplaceWith: 'airbender'
		},
		{
			textToReplace: 'drone',
			textToReplaceWith: 'dog'
		},
		{
			textToReplace: 'vows to',
			textToReplaceWith: 'probably won\'t'
		},
		{
			textToReplace: 'at large',
			textToReplaceWith: 'very large'
		},
		{
			textToReplace: 'successfully',
			textToReplaceWith: 'suddenly'
		},
		{
			textToReplace: 'expands',
			textToReplaceWith: 'physically expands'
		},
		{
			textToReplace: 'first degree',
			textToReplaceWith: 'friggin\' awful'
		},
		{
			textToReplace: 'second degree',
			textToReplaceWith: 'friggin\' awful'
		},
		{
			textToReplace: 'third degree',
			textToReplaceWith: 'friggin\' awful'
		},
		{
			textToReplace: 'an unknown number',
			textToReplaceWith: 'like hundreds'
		},
		{
			textToReplace: 'front runner',
			textToReplaceWith: 'blade runner'
		},
		{
			textToReplace: 'global',
			textToReplaceWith: 'spherical'
		},
		{
			textToReplace: 'years',
			textToReplaceWith: 'minutes'
		},
		{
			textToReplace: 'minutes',
			textToReplaceWith: 'years'
		},
		{
			textToReplace: 'no indication',
			textToReplaceWith: 'lots of signs'
		},
		{
			textToReplace: 'urged restraint by',
			textToReplaceWith: 'drunkenly egged on'
		},
		{
			textToReplace: 'horsepower',
			textToReplaceWith: 'tons of horsemeat'
		}
	];

	var regexpSubstitutions = [];
	for(i in textSubstitutions) {
		var rSubst = {
			regexpToReplace: new RegExp(textSubstitutions[i].textToReplace, 'ig'),
			textToReplaceWith: textSubstitutions[i].textToReplaceWith
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