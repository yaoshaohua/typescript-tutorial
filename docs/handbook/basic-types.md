---
title: 基础
---

欢迎来到手册的第一页。如果这是您第一次使用 TypeScript，您可能希望从一本[入门指南](/started/)开始

## 静态类型检查（Static type-checking）

JavaScript 中的每个值都有一组行为，您可以通过运行不同的操作来观察这些行为。这听起来很抽象，但是作为一个简单的例子，考虑我们可能在一个名为 `message` 的变量上运行的一些操作。

```typescript
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();
```

如果我们将它分解，第一行可运行的代码访问一个名为 toLowerCase 的属性，然后调用它。第二个尝试直接调用 `message`。

但是假设我们不知道 `message` 的值，这是很常见的，我们无法可靠地说出运行这些代码会得到什么结果。每个操作的行为完全取决于我们最初的值。

- `message` 可以调用吗？
- 有没有 `toLowerCase` 属性？
- 如果有的话，`toLowerCase` 是可调用的吗？
- 如果这两个值都是可调用的，那么它们返回什么？

这些问题的答案通常是我们写 JavaScript 时记在脑子里的东西，我们不得不希望所有的细节都是正确的。

假设 `message` 是以如下方式定义的。

```typescript
const message = 'Hello World!';
```

正如您可能猜到的那样，如果我们尝试运行 `message.toLowerCase()`，我们将得到相同的小写字符串。

第二行代码呢？如果您熟悉 JavaScript，您会知道这个失败会出现一个异常：

```typescript
TypeError: message is not a function
```

如果我们能避免这样的错误，那就太好了。

当我们运行代码时，我们的 JavaScript 运行时选择做什么的方式是通过计算值的类型——它有什么样的行为和能力。这是 `TypeError` 暗指的一部分——它说字符串 `“Hello World！”` 不能作为函数调用。

对于一些值，比如基本类型 `string` 和 `number`，我们可以在运行时使用 `typeof` 操作符来标识它们的类型。但是对于其他东西，比如 `function` ，没有相应的运行时机制来识别它们的类型。例如，考虑这个函数：

```typescript
function fn(x) {
  return x.flip();
}
```

通过阅读代码，我们可以观察到，只有传入一个具有可调用的 `flip` 属性的对象，这个函数才会起作用，但是 JavaScript 并没有以一种我们可以在代码运行时检查的方式显示这些信息。在纯 JavaScript 中，判断 `fn` 如何处理特定值的唯一方法是调用它，看看会发生什么。这种行为使得在代码运行之前很难预测它将会做什么，这意味着在你编写代码的时候很难知道你的代码将会做什么。

从这个角度来看，类型是描述哪些值可以传递给 `fn`，哪些值会崩溃的概念。JavaScript 只真正提供了动态类型——运行代码看看会发生什么。

另一种方法是使用静态类型系统，在代码运行之前预测代码的预期内容。

## 非异常失败（Non-exception Failures）

## 工具类型（Types for Tooling）

## tsc, the TypeScript compiler

## Emitting with Errors

## 显示类型（Explicit Types）

## 降级（Downleveling）

## 严格模式（Strictness）

### noImplicitAny

### strictNullChecks
