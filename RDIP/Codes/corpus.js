	// storing in a set for constant time checking
	var english = new Set([
	    "John ate an apple before afternoon",
	    "before afternoon John ate an apple",
	    "John before afternoon ate an apple",

	    "some students like to study in the night",
	    "at night some students like to study",


	    "the woman who called my sister sells cosmetics",
	    "the woman who sells cosmetics called my sister",
	    "my sister who sells cosmetics called the woman",
	    "my sister who called the woman sells cosmetics",

	    "John and Mary went to church",
	    "Mary and John went to church",

	    "John went to church after eating",
	    "after eating John went to church",
	    "John after eating went to church",

	    "did he go to market",
	    "he did go to market",

	    "the teacher returned the book after she noticed the error",
	    "the teacher noticed the error after she returned the book",
	    "after the teacher returned the book she noticed the error",
	    "after the teacher noticed the error she returned the book",
	    "she returned the book after the teacher noticed the error",
	    "she noticed the error after the teacher returned the book",
	    "after she returned the book the teacher noticed the error",
	    "after she noticed the error the teacher returned the book",

	    "John goes to the library and studies",
	    "John studies and goes to the library",

	    "John ate an apple so did she",
	    "she ate an apple so did John",
	   	
	    "I told her that I bought a book yesterday",
	    "I told her yesterday that I bought a book",
	    "yesterday I told her that I bought a book",
	    "I bought a book that I told her yesterday",
	    "I bought a book yesterday that I told her",
	    "yesterday I bought a book that I told her"
	]);



	// storing in a set for constant time checking
	var hindi = new Set([
	    "राम और श्याम बाजार गयें",
	    "राम और श्याम गयें बाजार",
	    "बाजार गयें राम और श्याम",
	    "गयें बाजार राम और श्याम",

	    "राम खाकर सोया",
	    "खाकर राम सोया",
	    "राम सोया खाकर",
	    "खाकर सोया राम",
	    "सोया राम खाकर",
	    "सोया खाकर राम",

	    "राम सोया और श्याम भी",
	    "श्याम सोया और राम भी",
	    "सोया श्याम और राम भी",
	    "सोया राम और श्याम भी",

	    "मैंने उसे बताया कि राम सो रहा है",
	    "मैंने उसे बताया कि सो रहा है राम",
	    "उसे मैंने बताया कि राम सो रहा है",
	    "उसे मैंने बताया कि सो रहा है राम",
	    "मैंने बताया उसे कि राम सो रहा है",
	    "मैंने बताया उसे कि सो रहा है राम",
	    "उसे बताया मैंने कि राम सो रहा है",
	    "उसे बताया मैंने कि सो रहा है राम",
	    "बताया मैंने उसे कि राम सो रहा है",
	    "बताया मैंने उसे कि सो रहा है राम",
	    "बताया उसे मैंने कि राम सो रहा है",
	    "बताया उसे मैंने कि सो रहा है राम",
	    
	    "एक लाल किताब वहाँ है",
	    "एक लाल किताब है वहाँ",
	    "वहाँ है एक लाल किताब",
	    "है वहाँ एक लाल किताब",

	    "बिल्लियों को मारकर कुत्ता सो गया",
	    "मारकर बिल्लियों को कुत्ता सो गया",
	    "बिल्लियों को मारकर सो गया कुत्ता",
	    "मारकर बिल्लियों को सो गया कुत्ता",
	    "कुत्ता सो गया बिल्लियों को मारकर",
	    "कुत्ता सो गया मारकर बिल्लियों को",
	    "सो गया कुत्ता बिल्लियों को मारकर",
	    "सो गया कुत्ता मारकर बिल्लियों को",

	    "एक बड़ी सी किताब वहाँ है",
	    "एक बड़ी सी किताब है वहाँ",
	    "बड़ी सी एक किताब वहाँ है",
	    "बड़ी सी एक किताब है वहाँ",
	    "वहाँ है एक बड़ी सी किताब",
	    "वहाँ है बड़ी सी एक किताब",

	    " है वहाँ एक बड़ी सी किताब",
	    "है वहाँ बड़ी सी एक किताब"
	]);

	//corpus data above ^
