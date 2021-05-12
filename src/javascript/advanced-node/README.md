# Advanced Node

## Assessment Questions

[source](https://medium.com/edge-coders/how-well-do-you-know-node-js-36b1473c01c8)

1. _How come when you declare a global variable in any Node.js file it’s not really global to all modules?_
2. _When exporting the API of a Node module, why can we sometimes use exports and other times we have to use module.exports?_
3. _Can we require local files without using relative paths?_
4. _What is the Event Loop? Is it part of V8?_
5. _What is the Call Stack? Is it part of V8?_
6. _What is the difference between setImmediate and process.nextTick?_
7. _How do you make an asynchronous function return a value?_
8. _Can callbacks be used with promises or is it one way or the other?_
9. _What are the major differences between spawn, exec, and fork?_
10. _How does the cluster module work? How is it different than using a load balancer?_
11. _What are the --harmony-* flags?_
12. _How can you read and inspect the memory usage of a Node.js process?_
13. _Can reverse-search in commands history be used inside Node’s REPL?_
14. _What are V8 object and function templates?_
15. _What is libuv and how does Node.js use it?_
16. _How can you make Node’s REPL always use JavaScript strict mode?_
17. _How can we do one final operation before a Node process exits? Can that operation be done asynchronously?_
18. _Besides V8 and libuv, what other external dependencies does Node have?_
19. _What’s the problem with the process uncaughtException event? How is it different than the exit event?_
20. _Do Node buffers use V8 memory? Can they be resized?_
21. _What’s the difference between Buffer.alloc and Buffer.allocUnsafe?_
22. _How is the slice method on buffers different from that on arrays?_
23. _What is the string_decoder module useful for? How is it different than casting buffers to strings?_
24. _What are the 5 major steps that the require function does?_
25. _What is the require.resolve function and what is it useful for?_
26. _What is the main property in package.json useful for?_
27. _What are circular modular dependencies in Node and how can they be avoided?_
28. _What are the 3 file extensions that will be automatically tried by the require function?_
29. _When creating an http server and writing a response for a request, why is the end() function required?_
30. _When is it ok to use the file system *Sync methods?_
31. _How can you print only one level of a deeply nested object?_
32. _What is the node-gyp package used for?_
33. _The objects exports, require, and module are all globally available in every module but they are different in every module. How?_
34. _How can a module be both requirable by other modules and executable directly using the node command?_
35. _What’s an example of a built-in stream in Node that is both readable and writable?_
36. _What’s the difference between using event emitters and using simple callback functions to allow for asynchronous handling of code?_
37. _The require function always caches the module it requires. What can you do if you need to execute the code in a required module many times?_
38. _What’s the difference between the Paused and the Flowing modes of readable streams?_
39. _What does the --inspect argument do for the node command?_
40. _When working with streams, when do you use the pipe function and when do you use events? Can those two methods be combined?_

------------------------------------------------------------
------------------------------------------------------------

## My Answers
1. _How come when you declare a global variable in any Node.js file it’s not really global to all modules?_

- each node module (file) is wrapped by node in a function that scopes all its variables
------------------------------------------------------------

2. _When exporting the API of a Node module, why can we sometimes use exports and other times we have to use module.exports?_
- 
------------------------------------------------------------


3. _Can we require local files without using relative paths?_
4. _What is the Event Loop? Is it part of V8?_
5. _What is the Call Stack? Is it part of V8?_
6. _What is the difference between setImmediate and process.nextTick?_
7. _How do you make an asynchronous function return a value?_
8. _Can callbacks be used with promises or is it one way or the other?_
9. _What are the major differences between spawn, exec, and fork?_
10. _How does the cluster module work? How is it different than using a load balancer?_
11. _What are the --harmony-* flags?_
12. _How can you read and inspect the memory usage of a Node.js process?_
13. _Can reverse-search in commands history be used inside Node’s REPL?_
14. _What are V8 object and function templates?_
15. _What is libuv and how does Node.js use it?_
16. _How can you make Node’s REPL always use JavaScript strict mode?_
17. _How can we do one final operation before a Node process exits? Can that operation be done asynchronously?_
18. _Besides V8 and libuv, what other external dependencies does Node have?_
19. _What’s the problem with the process uncaughtException event? How is it different than the exit event?_
20. _Do Node buffers use V8 memory? Can they be resized?_
21. _What’s the difference between Buffer.alloc and Buffer.allocUnsafe?_
22. _How is the slice method on buffers different from that on arrays?_
23. _What is the string_decoder module useful for? How is it different than casting buffers to strings?_
24. _What are the 5 major steps that the require function does?_
25. _What is the require.resolve function and what is it useful for?_
26. _What is the main property in package.json useful for?_
27. _What are circular modular dependencies in Node and how can they be avoided?_
28. _What are the 3 file extensions that will be automatically tried by the require function?_
29. _When creating an http server and writing a response for a request, why is the end() function required?_
30. _When is it ok to use the file system *Sync methods?_
31. _How can you print only one level of a deeply nested object?_
32. _What is the node-gyp package used for?_
33. _The objects exports, require, and module are all globally available in every module but they are different in every module. How?_
34. _How can a module be both requirable by other modules and executable directly using the node command?_
35. _What’s an example of a built-in stream in Node that is both readable and writable?_
36. _What’s the difference between using event emitters and using simple callback functions to allow for asynchronous handling of code?_
37. _The require function always caches the module it requires. What can you do if you need to execute the code in a required module many times?_
38. _What’s the difference between the Paused and the Flowing modes of readable streams?_
39. _What does the --inspect argument do for the node command?_
40. _When working with streams, when do you use the pipe function and when do you use events? Can those two methods be combined?_