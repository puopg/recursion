// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	// TODO(michael): Maybe theres a way to do this if we unwind the entire input argument
	// and place each object into a queue. Then we can simply dequeue a node and
	// not need to handle the array traversal inside. 
  	switch (typeof(obj))
  	{
  		case "number":
	  		return obj.toString();
	  		break;

  		case "boolean":
  			return obj.toString();
  			break;

  		case "undefined":
  			return '';
  			break;

  		case "string":
	  		return "\"" + obj.toString() + "\"";
	  		break;
	  	
	  	case "function":
  			return undefined
  			break;

	    case "object":
	    	if(obj == null) {
	    		return "null";
	    	}
	    	// If the obj is an array, we need to iterate through it and
	    	// call the function on each object in the array. 
	    	else if (Array.isArray(obj))
	    	{
    			var clone = obj.slice(0);
    			var arrayString = '';
    			for(var i = 0;i < clone.length;i++) {
    				if(i > 0)
    					arrayString += ',';
    				arrayString += stringifyJSON(clone[i]);
    			}
    			return "[" + arrayString + "]";	  
	    	}
	    	// If the obj is some kind of object with properties: 
	    	// 1. Iterate through all the properties in the object.
	    	// 2. Confirm that the value of each properrty is valid
	    	// 3. Build the string
	    	else
	    	{
	    		var clone = obj;
	    		var objectString = '';
	    		var index = 0;
	    		for(var property in clone) {
	   	    		var value = stringifyJSON(clone[property]);
	   	    		if(value === undefined || value === '')
	   	    		{
						continue;
	    			}
	    			else
	    			{
	    				if(index > 0)
		    				objectString += ',';
		    			objectString += "\"" + property + "\"";  
		    			objectString += ':';
		    			objectString += value;
		    			index++;
	    			}
	    		}
	    		return "{" + objectString + "}";	  
	    	}
	    	break;

	  	default:
	  		return String(null);
	  		break;
  	}
};
