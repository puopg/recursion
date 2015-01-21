// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  // Start at root node
  var elements = [];
  searchForClassInNode(className, document.body);
  return elements;

  /// Function: searchForClassInNode(className, node)
  /// This function will look for elements under the given node with classtype "className"
  function searchForClassInNode(className, node) {
  	if(node.nodeType === 1) { // An element Node
  	  	if(node.classList.contains(className)) {
  			elements.push(node);
  		}
  	}
  	for(var i = 0; i < node.childNodes.length; i++) {
  		searchForClassInNode(className, node.childNodes[i]);
	}
  }

};
