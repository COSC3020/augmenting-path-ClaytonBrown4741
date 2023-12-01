[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12547999&assignment_repo_type=AssignmentRepo)
# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.  

**ANSWER**:  
The first thing we end up doing is initializing the visitedNodes array for further  
use. Because this goes over each node, the runtime would |V| amount of time.   
Finally, we have the loop which actually navigates the graph. This will go over every  
node and also go over every possible edge. Because we're checking whether each node has  
been visited before, it means that they can't be visited more than once. As a result,  
the runtime for this section would be |V|+|E|.  
So in the end, the runtime would be $\Theta(|V| + |V| + |E|)$ which gives us a simplified  
time of $\Theta(|V| + |E|)$.  
(Please let me know if any of this reasoning is bad or off. The one I'm most concerned with is the  
runtime for checking if the nodes have already been visited or not, so please let me know if that  
is wrong in any way so that I may fix it).  


