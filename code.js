function augmentingPath(graph, start, end){
	var fullPath=[]
	var visitedNodes=[]
	keyValues=Object.keys(graph);
	source=keyValues[0]
	for (var i=0; i<Object.keys(graph).length; i++){
		visitedNodes[keyValues[i]]= Infinity
	}
	visitedNodes[source]=0
	return AP(graph, start, end, fullPath, visitedNodes);
}

function AP(graph, currentNode, goalNode, fullPath, visitedNodes){
	if (goalNode==currentNode){
		fullPath.push(currentNode)
		return fullPath
	}
	allVisited=true;
	visitedKeys=Object.keys(visitedNodes)
	if (!Object.values(visitedNodes).includes(Infinity)){
		return []
	}

	keyValues[currentNode]=Object.keys(graph[currentNode]);
        for (var j=0; j < Object.keys(graph[currentNode]).length; j++) {
		if (visitedNodes[keyValues[currentNode][j]]===Infinity)
		{
			fullPath.push(currentNode)
			visitedNodes[keyValues[currentNode][j]]=1
			// This return value dictates what should happen moving forward  
			// If an empty set is returned, it knows that the desired answer  
			// has not been found yet so it knows to keep looking. Otherwise,  
			// it will return the full path as it will know that the answer  
			// has been found.
			returnedValue =  AP(graph, keyValues[currentNode][j], goalNode, fullPath, visitedNodes)
			if (JSON.stringify(returnedValue)==JSON.stringify([])){
				fullPath.pop()
			}
			else{
				return fullPath
			}
		}
		
	}
	return []
}
