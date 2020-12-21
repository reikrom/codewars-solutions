Given an array (a list in Python) of integers and an integer `n`, find all occurrences of `n` in the given array and return another array containing all the index positions of `n` in the given array.

If `n` is not in the given array, return an empty array `[]`.

Assume that `n` and all values in the given array will always be integers.

Example:
```c
find_all(7, {6, 9, 3, 4, 3, 82, 11}, 3, *z)
// returns pointer to {2, 4}
// assigns array length to `*z`
```
```python
find_all([6, 9, 3, 4, 3, 82, 11], 3)
> [2, 4]
```
```javascript
findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
```
```csharp
Kata.FindAll(new int[] {6, 9, 3, 4, 3, 82, 11}, 3) => new int[] {2, 4}
```
```haskell
findAll [6, 9, 3, 4, 3, 82, 11]  3 = [2, 4]
```
```ruby
find_all([6, 9, 3, 4, 3, 82, 11], 3) = [2, 4]
```
```prolog
find_all([6, 9, 3, 4, 3, 82, 11], 3) = [2, 4]
```