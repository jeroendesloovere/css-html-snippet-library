var jsSnippet =
{
	// init, something like a constructor
	init: function()
	{
		jsSnippet.Unveil.init();
	}

};

jsSnippet.Unveil =
{
	init: function()
	{
		var img = $(".lazy-load img");
		var imgWrapper = $(".lazy-load");

		$(img).unveil(0, function() // trigger is 0px before the image
		{
			$(this).addClass("is-lazy-loaded");
		});
	}
};

$(jsSnippet.init);
