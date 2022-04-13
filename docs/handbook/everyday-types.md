---
title: 常见类型
---

在本章中，我们将会介绍一些在 JavaScript 代码中最常见的值类型，并解释在 TypeScript 中描述这些类型的相应方法。这不是一个详细的列表，以后的章节将描述更多命名和使用其他类型的方法。

类型还可以出现在很多地方，而不仅仅是类型注释。在我们了解类型本身的同时，我们还将了解在什么地方可以引用这些类型形成新结构。

我们首先来复习一下在写 JavaScript 和 TypeScript 代码时可能遇到的最基本和最常见的类型。这是后面构建更复杂类型的核心。

## `string`, `number`, `boolean`

JavaScript 有三种常用的基本类型：`string`, `number`, `boolean`。每个都有一个相应的 TypeScript 类型。正如您所期望的，如果您在这些类型的值上使用 JavaScript 的 typeof 操作符，您会看到相同的名字：

- `string` 表示字符串，比如 "Hello, world"
- `number` 表示数字，比如 `42`，JavaScript 对于整数没有一个特殊的运行时值，因此，没有与 `int` 或 `float` 等价的值，一切都是简单的 `number`
- `boolean` 表示布尔值：`true` 和 `false`

> 类型名 `String`、`Number` 和 `Boolean` (以大写字母开头)是合法的，但指的是一些很少在代码中出现的特殊内置类型。请始终使用 `string`, `number`, `boolean` 作为类型。

## Arrays

要指定类似 `[1,2,3]` 的数组类型，可以使用语法 `number[]` ；这种语法适用于任何类型（比如 `string[]` 表示字符串数组，等等）。您也可以看到它被写成 `Array<number>` ，意思是一样的。当我们讨论泛型时，我们将学习更多关于语法 `T<U>` 的知识。

> 请注意，[number] 是另一回事，请参阅有关 Tuples 的章节

### `any`

还有一个特殊类型，`any` ，可以在不希望某特定值导致类型检查错误时使用。

当一个值的类型是 `any` 时，你可以访问它的任何属性（也会被转为 `any` 类型），像调用函数一样调用它，把它赋值给任意类型或者把任意类型赋值给它，再或者是其他语法操作都可以：

```typescript
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = 'hello';
const n: number = obj;
```

当您不想仅仅为了让 TypeScript 相信某一行代码是可行的而写出一个很长的类型代码时，`any` 类型是很有用的。

### `noImplicitAny`

如果没有指定类型，TypeScript 也无法从上下文推断出类型，编译器会默认设置为 `any` 类型。

但是，您通常希望避免这种情况，因为 TypeScript 对 `any` 不做类型检查。启用 `noImplicitAny` ，当被隐式推断为 `any` 时，TypeScript 就会报错。

## 变量的类型注释（Type Annotations on Variables）

当您使用 `const`、`var` 或 `let` 声明变量时，可以选择性地添加类型注释来显示指定变量的类型

```typescript
let myName: string = 'Alice';
```

> TypeScript 不使用“类型在左边”风格的声明，如 `int x = 0` ；类型注释总是紧跟在被声明内容的后面。

然而，在大多数情况下，这是非必要的。TypeScript 会尽可能地尝试自动推断出代码中的类型。例如：变量的类型是基于初始值推断出来的：

```typescript
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = 'Alice';
```

在大多数情况下，您不需要明确地学习推理的规则，如果您刚开始使用，尝试少用点类型注释，你可能会惊讶，TypeScript 需要很少的东西就能完全理解将要发生什么。

## Functions

函数是 JavaScript 中传递数据的主要方式，TypeScript 允许您指定函数的输入和输出值的类型。

### 参数类型注释（Parameter Type Annotations）

在声明类型时，可以在每个参数后面添加类型注释，以声明函数接受哪些类型的参数。参数类型注释跟在参数名后面：

```typescript
// Parameter type annotation
function greet(name: string) {
  console.log('Hello, ' + name.toUpperCase() + '!!');
}
```

当一个参数有一个类型注释时，该函数的参数将被检查：

```typescript
// Would be a runtime error if executed!
greet(42);
// Argument of type 'number' is not assignable to parameter of type 'string'.
```

> 即使您的参数上没有类型注释，TypeScript 仍然会检查传入的参数数量是否正确。

### 返回类型注释（Return Type Annotations）

您也可以添加返回类型注释，返回类型注释会出现在参数列表之后：

```typescript
function getFavoriteNumber(): number {
  return 26;
}
```

### 匿名函数（Anonymous Functions）

## Object Types

### 可选参数（Optional Properties）

## 联合类型（Union Types）

### Defining a Union Type

### Working with Union Types

## 类型别名（Type Aliases）

## Interfaces

### Differences Between Type Aliases and Interfaces

## 类型断言（Type Assertions）

## 字面量类型（Literal Types）

### Literal Inference

## `null` and `undefined`

### `strictNullChecks` off

### `strictNullChecks` on

### 非空断言操作符（Postfix!）

## Enums

## Less Common Primitives

### bigint

### symbol
