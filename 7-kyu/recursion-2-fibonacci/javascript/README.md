<style>
  .recursive-heading {
    background-color: #c0c0c0;
    color: #131414;
    text-align: center;
    padding: 10px;
  }

  .recursive-heading div:first-child {
    font-size: 25px
  }

  .recursive-heading div:last-child {
    margin-top: 10px
  }

  .recursive-heading div span {
    color: black;
    cursor: pointer;
    text-decoration: underline;
  }

  .recursive-footer {
    text-align: center;
    padding: 10px 0;
  }
  
  .recursive-footer span {
    font-weight: bold;
  }

  .recursive-footer .next {
    float: right;
  }

  .recursive-footer .previous {
    float: left;
  }

  .recursive-footer .previous i {
    display: inline-block;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  .clear {
    clear: both;
  }
</style>

<div class="recursive-heading">
  <div><i class="icon-moon-bookmark is-large"></i>
  Do you know <span>recursion</span>?</div>
  <div>This is a kata series that you can only solve using recursion.</div>
</div>

#\#2 - Fibonacci number

In mathematical terms, the sequence `f(n)` of <a href="https://en.wikipedia.org/wiki/Fibonacci_number">fibonacci</a> numbers is defined by the recurrence relation

`f(n) = f(n-1) + f(n-2)`

with seed values

`f(1) = 1` and `f(2) = 1`

#Your task
  
You have to create the function `fibonacci` that receives `n` and returns `f(n)`. You have to use recursion.

<div class="recursive-footer">
  <a class="btn is-alt previous" href="http://www.codewars.com/kata/recursion-number-1-factorial">
    <i class="icon-moon-next"></i>Previous (<span>Recursion #1 - Factorial</span>)
  </a>
  <div class="clear"></div>
</div>