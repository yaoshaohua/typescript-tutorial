---
title: JavaScript 开发者必看
---

TypeScript 与 JavaScript 有着不寻常的关系。TypeScript 提供了 JavaScript 的所有特性，并在这些特性之上增加了一层：TypeScript 的类型系统。

例如，JavaScript 提供了像 `string` 和 `number` 这样的基础类型，但是它不会检查您是否已经一致地分配。TypeScript 有。

这意味着您现有的 JavaScript 代码也是 TypeScript 代码。TypeScript 的主要好处是它可以高亮显示代码中的意外行为，从而降低出现 bug 的可能性。

本教程简要概述了 TypeScript，重点介绍了它的类型系统。

## 类型推断（Types by Inference）

TypeScript 了解 JavaScript 语言，在许多情况下会为您生成类型。例如，在创建变量并将其赋给特定值时，TypeScript 将使用该值作为其类型。

```typescript{2}
let helloWorld = 'Hello World';
// let helloWorld: string
```

通过理解 JavaScript 如何工作，TypeScript 可以构建一个接受 JavaScript 代码但具有类型的类型系统。这提供了一个类型系统，而不需要添加额外的字符来使类型在代码中显式。上面的例子中 TypeScript 就是这样知道 `helloWorld` 是一个 `string` 的。

您可能已经用 Visual Studio Code 编写了 JavaScript，并使用了编辑器自动填充功能。Visual Studio Code 使用 TypeScript 来简化 JavaScript 的使用。

## 定义类型（Defining Types）

您可以在 JavaScript 中使用各种各样的设计模式。然而，一些设计模式使得类型很难被自动推断出来(例如，使用动态编程的模式)。为了涵盖这些情况，TypeScript 支持 JavaScript 语言的扩展，这为您提供了显示声明 TypeScript 类型的地方。

例如，要创建一个包含 `name: string` 和 `id: number` 的推断类型的 object，可以这么写:

```typescript
const user = {
  name: 'Hayes',
  id: 0,
};
```

您可以使用 `interface` 声明显示地描述这个 object 的形状：

```typescript
interface User {
  name: string;
  id: number;
}
```

然后，可以使用如下语法声明符合新接口形状的 JavaScript object：  
在变量声明后键入 `TypeName`：

```typescript
const user: User = {
  name: 'Hayes',
  id: 0,
};
```

如果 object 与 interface 不匹配，TypeScript 将警告您:

```typescript {2,7,8,9}
interface User {
  name: string;
  id: number;
}

const user: User = {
  // Type '{ username: string; id: number; }' is not assignable to type 'User'.
  // Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  username: 'Hayes',
  id: 0,
};
```

由于 JavaScript 支持类和面向对象编程，因此 TypeScript 也支持。您可以对类使用接口声明：

```typescript
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount('Murphy', 1);
```

您可以使用接口来注释参数并将值返回给函数：

```typescript
function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  // ...
}
```

JavaScript 中已经有一部分可用的基本类型：`number`, `string`, `boolean`, `null`, `undefined`, `bigint`, `symbol`，您可以在接口中使用它们。TypeScript 对这个列表进行了扩展，例如： `any`(任意类型)、`unknown`(ensure someone using this type declares what the type is)、`never`(表示不可能发生)和 `void`(一个返回 `undefined` 或者没有返回值的函数)

您将看到有两种构建类型的语法：`interface` 和 `type`。您应该更喜欢 `interface`，当您需要特定功能的时候使用 `type`。

## 组合类型（Composing Types）

使用 TypeScript，您可以通过组合简单类型来创建复杂类型。有两种流行的方法：联合类型和泛型。

### 联合类型（Unions）

通过联合，您可以声明一个类型可以是多种类型之一。例如，您可以将 `boolean` 类型描述为 `true` 或 `false`：

```typescript{2}
type MyBool = true | false;
// type MyBool = boolean
```

注意：如果你将鼠标悬停在上面的 MyBool 上，你会看到它被归类为 `boolean`。这是结构类型系统的一个属性。以下是更多相关信息。

联合类型的一个常见用例是描述允许值为一组 `string` 或 `number` 字面量：

```typescript
type WindowStates = 'open' | 'closed' | 'minimized';
type LockStates = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

联合也提供了处理不同类型的方法。例如，您可能有一个接受 `array` 或 `string` 的函数：

```typescript
function getLength(obj: string | string[]) {
  return obj.length;
}
```

要了解变量的类型，请使用 `typeof`：

| Type      | Predicate                        |
| :-------- | :------------------------------- |
| string    | typeof s === "string"            |
| number    | typeof n === "number"            |
| boolean   | typeof b === "boolean"           |
| undefined | typeof undefined === "undefined" |
| function  | typeof f === "function"          |
| array     | Array.isArray(a)                 |

例如，您可以让函数根据传递给它的是 `string` 还是 `array` 返回不同的值：

```typescript{4}
function wrapInArray(obj: string | string[]) {
  if (typeof obj === 'string') {
    return [obj];
    // (parameter) obj: string
  }
  return obj;
}
```

### 泛型（Generics）

泛型为类型提供变量。一个常见的例子是数组。没有泛型的数组可以包含任何内容。具有泛型的数组可以描述数组包含的值。

```typescript
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

您可以声明自己使用泛型的类型:

```typescript{15}
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
// Argument of type 'number' is not assignable to parameter of type 'string'.
```

## 结构类型系统（Structural Type System）

TypeScript 的核心原则之一是类型检查关注值的形状。这有时被称为 **“duck typing”** 或者 **“structural typing”**。

在结构类型系统中，如果两个对象具有相同的形状，则认为它们属于同一类型。

```typescript
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

`point` 变量从未被声明为 `Point` 类型。然而，TypeScript 在类型检查中将 `point` 的形状与 `Point` 的形状进行比较。它们有相同的形状，所以代码通过。

形状匹配只需要匹配对象字段的子集

```typescript{9,10}
const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: '#187ABF' };
logPoint(color);
// Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
// Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
```

类和对象符合形状的方式没有区别：

```typescript{9,10}
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
```

如果对象或类具有所有必需的属性，TypeScript 会说它们匹配，而不管实现细节如何。

## 下一步

这是日常 TypeScript 中使用的语法和工具的简要概述。从这里，您可以：

阅读完整的手册 [from start to finish](https://www.typescriptlang.org/docs/handbook/intro.html)

探索例子 [Playground examples](https://www.typescriptlang.org/play/#show-examples)
