var jsSnippet =
{
	// init, something like a constructor
	init: function()
	{
		jsSnippet.Hello.init();
	}

};

jsSnippet.Hello =
{
	init: function()
	{
		console.log('Hello world');
	}
};

$(jsSnippet.init);
