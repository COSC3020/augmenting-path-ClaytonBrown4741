function augmentingPath(graph, start, end){
	fullPath=[]
	visitedNodes=[]
	keyValues=Object.keys(graph);
	source=keyValues[0]
	for (var i=0; i<Object.keys(graph).length; i++){
		visitedNodes[keyValues[i]]= Infinity
	}
	visitedNodes[source]=0
	returnedValue=AP(graph, start, end);
	if (returnedValue==0)
		return fullPath
	else if (returnedValue==1)
		return []
	else if (returnedValue==2)
		return []
}

function AP(graph, currentNode, goalNode){
	fullPath.push(currentNode)
	if (goalNode==currentNode){
		return 0
	}
	allVisited=true;
	visitedKeys=Object.keys(visitedNodes)
	for (var i=0; i<visitedKeys.length; i++){
		if (visitedNodes[visitedKeys[i]]===Infinity)
			allVisited=false;
	}
	if (allVisited==true){
		fullPath=[]
		return 1
	}

	keyValues[currentNode]=Object.keys(graph[currentNode]);
        for (var j=0; j < Object.keys(graph[currentNode]).length; j++) {
		if (visitedNodes[keyValues[currentNode][j]]===Infinity)
		{
			visitedNodes[keyValues[currentNode][j]]=1
			returnValue=AP(graph, keyValues[currentNode][j], goalNode)
			if (returnValue==2)
				fullPath.pop()
			else if (returnValue==1)
				return 1
			else if (returnValue==0)
				return 0

		}
	}
	return 2;
}

var fullPath=[]
var visitedNodes=[]
