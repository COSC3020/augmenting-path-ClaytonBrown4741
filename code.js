function augmentingPath(graph, start, end){
	fullPath=[]
	visitedNodes=[]
	keyValues=Object.keys(graph);
	source=keyValues[0]
	for (var i=0; i<Object.keys(graph).length; i++){
		visitedNodes[keyValues[i]]= Infinity
	}
	visitedNodes[source]=0
	returnedValue=dAlgorithm(graph, start, end);
	if (returnedValue==0)
		return fullPath
	else if (returnedValue==1)
		return []
	else if (returnedValue==2)
		return []
	console.log(visitedNodes)
	//console.log(fullPath)
	//return fullPath
}

function dAlgorithm(graph, currentNode, goalNode){
	fullPath.push(currentNode)
	//console.log(fullPath)
	//console.log(goalNode)
	//console.log(currentNode)
	if (goalNode==currentNode){
		console.log("skdjfksdjfksjdfkd")
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
	smallestWeight=Infinity;
	smallestEdge=null
	keyValues[currentNode]=Object.keys(graph[currentNode]);
	//console.log(Object.keys(graph[currentNode]).length)
        for (var j=0; j < Object.keys(graph[currentNode]).length; j++) {
		console.log(keyValues[currentNode]);
		console.log(keyValues[currentNode][j])
		if (visitedNodes[keyValues[currentNode][j]]===Infinity)
		{
			visitedNodes[keyValues[currentNode][j]]=1
			returnValue=dAlgorithm(graph, keyValues[currentNode][j], goalNode)
			if (returnValue==2)
				fullPath.pop()
			else if (returnValue==1)
				return 1
			else if (returnValue==0)
				return 0

		}
		else
		{
			console.log("can't go")
		}
	}
	return 2;
}

var fullPath=[]
var visitedNodes=[]

var graph = {'foo': {},
    'bar': {'foo': 1}};

console.log("Begin")
console.log(augmentingPath(graph, 'foo', 'bar'));
console.log("Done")
