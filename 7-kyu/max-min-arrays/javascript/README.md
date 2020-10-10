In this Kata, you will be given an array of unique elements, and your task is to rerrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc. 

For example:
```javascript
solve([15,11,10,7,12]) = [15,7,12,10,11]
```
```csharp
Kata.Solve(new List<int> {15,11,10,7,12}) => new List<int> {15,7,12,10,11}
```
The first max is `15` and the first min is `7`. The second max is `12` and the second min is `10` and so on. 

More examples in the test cases. 

Good luck!