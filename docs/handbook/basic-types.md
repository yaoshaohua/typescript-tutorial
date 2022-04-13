---
title: 基础
---

欢迎来到手册的第一页。如果这是您第一次使用 TypeScript，您可以从[入门指南](/started/)开始

JavaScript 中的每个值都有一组行为，您可以通过运行不同的操作来观察这些行为。这听起来很抽象，但是作为一个简单的例子，考虑一下我们可能对一个名为 `message` 的变量运行的一些操作。

```typescript
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();
```

如果我们将它分解，第一行可运行的代码访问一个名为 toLowerCase 的属性，然后调用它。第二个尝试直接调用 `message`。

但是假设我们不知道 `message` 的值，这是很常见的，我们无法可靠地说出运行这些代码会得到什么结果。每个操作的行为完全取决于我们最初的值。

- `message` 是否可调用？
- 它是否有一个名为 `toLowerCase` 的属性？
- 如果是，`toLowerCase` 还能调用吗？
- 如果这两个值都是可调用的，它们返回什么？

这些问题的答案通常是我们写 JavaScript 时脑子里的东西，我们不得不希望所有的细节都是正确的。

假设 `message` 是以如下方式定义的。

```typescript
const message = 'Hello World!';
```

正如您可能猜到的那样，如果我们尝试运行 `message.toLowerCase()`，我们将得到相同的小写字符串。

那第二行代码呢？如果您熟悉 JavaScript，您会知道第二行代码是失败的，有一个异常：

```typescript
TypeError: message is not a function
```

如果我们能避免这样的错误就好了。

当我们运行代码时，我们的 JavaScript 运行时选择做什么的方式是通过弄清楚值的类型——它具有哪些类型的行为和能力。这是 `TypeError` 所影射的一部分 — 它说的是字符串 `“Hello World！”` 不能作为函数来调用。

对于某些值，比如基本类型 `string` 和 `number`，我们可以在运行时使用 `typeof` 操作符来标识它们的类型。但是对于 `function` 这样的其他东西，没有相应的运行时机制来识别它们的类型。例如，考虑这个函数：

```typescript
function fn(x) {
  return x.flip();
}
```

通过阅读代码，我们可以观察到，只有给定一个具有可调用的 `flip` 属性的对象，这个函数才能工作，但是 JavaScript 并没有以一种我们可以在代码运行时检查的方式来表现这些信息。在纯 JavaScript 中，要知道 `fn` 对特定值做了什么，唯一的方法就是调用它，然后看看会发生什么。这种行为使得很难预测代码在运行之前它会做什么，这意味着在编写代码时很难知道代码要做什么。

这样看来，类型就是这样一个概念：描述哪些值可以传递给 `fn`，哪些值会崩溃。JavaScript 只真正提供了动态类型 — 运行代码看看会发生什么。

另一种方法是使用静态类型系统，来预测在运行代码之前需要什么代码。

## 静态类型检查（Static type-checking）

回想一下我们之前在尝试将 `string` 作为函数调用时遇到的 `TypeError` 。大多数人不喜欢在运行代码时出现任何类型的错误 — 这些都被认为是 bug！当我们编写新代码时，我们尽力避免引入新的错误。

如果只添加一点代码，保存文件，重新运行代码，并立即看到错误，可能我们能够快速隔离问题；但事实并非总是如此。可能我们没有充分地测试这个特性，所以可能永远发现不了潜在的错误！或者，如果我们足够幸运地目睹了这个错误，最终可能需要大型重构来解决。

理想情况下，我们可以有一个工具来帮助我们在代码运行之前找到这些错误。这就是类似于 TypeScript 静态类型检查器所做的工作。静态类型系统描述了当我们运行程序时我们的值的形状和行为。类似于 TypeScript 类型检查器使用这些信息，并告诉我们什么时候事情可能会出问题。

```typescript
const message = 'hello!';
message();
// This expression is not callable. Type 'String' has no call signatures.
```

使用 TypeScript 运行最后一个示例将在我们运行代码之前给出一条错误消息。

## 非异常失败（Non-exception Failures）

到目前为止，我们已经讨论了一些事情，比如运行时错误 - 在这种情况下，JavaScript 运行时会告诉我们，它认为某些事情是无意义的。之所以出现这些情况，是因为 ECMAScript 规范明确指出，当遇到意外情况时，该语言应该如何表现。

例如，规范说试图调用不可调用的东西应该抛出错误。也许这听起来像是“显而易见的行为”，但是您可以想象，访问对象上不存在的属性也应该抛出错误。相反，JavaScript 给出了不同的行为，并返回 `undefined`：

```typescript
const user = {
  name: 'Daniel',
  age: 26,
};
user.location; // returns undefined
```

最终，静态类型系统必须决定系统中哪些代码应该被标记为错误，即使它是“有效的”JavaScript，不会立即抛出错误。在 TypeScript 中，下面代码会产生一个关于 `location` 不存在的错误：

```typescript
const user = {
  name: 'Daniel',
  age: 26,
};

user.location;
// Property 'location' does not exist on type '{ name: string; age: number; }'.
```

虽然有时这意味着在你所能表达的内容上有所取舍，但其目的是为了捕捉我们程序中的合法错误。并且 TypeScript 捕获了许多合法的错误。

比如：拼写错误，

```typescript
const announcement = 'Hello World!';

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();
```

函数未被调用，

```typescript
function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
  // Operator '<' cannot be applied to types '() => number' and 'number'.
}
```

或者是基本的逻辑错误：

```typescript
const value = Math.random() < 0.5 ? 'a' : 'b';
if (value !== 'a') {
  // ...
} else if (value === 'b') {
  // This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}
```

## 类型工具（Types for Tooling）

当我们在代码中出错时，TypeScript 可以捕捉到错误。这很好，但是 TypeScript 也可以从一开始阻止我们犯这些错误。

类型检查器有信息来检查我们是否正在访问变量和其他属性的正确属性。一旦有了这些信息，它还可以开始建议您可能想要使用哪些属性。

这意味着也可以利用 TypeScript 编辑代码，并且当您在编辑器中键入时，核心类型检查器可以提供错误消息和代码完成。这是人们在谈论 TypeScript 中的工具时经常提到的一部分。

TypeScript 非常重视工具，而且输入时不仅仅是完成和错误。支持 TypeScript 的编辑器可以提供“快速修复”来自动修复错误，重构代码以方便地重新组织代码，以及有用的导航功能，用于跳转到变量的定义，或查找给定变量的所有引用。所有这些都是建立在类型检查器之上的，并且是完全跨平台的，所以您最喜欢的编辑器很可能有 TypeScript 支持。

## tsc, TypeScript 编译器

我们一直在谈论类型检查，但是我们还没有使用我们的类型检查器。让我们来认识一下我们的新朋友 `tsc`，TypeScript 编译器。首先，我们需要通过 npm 获取它。

```
npm install -g typescript
```

> 这将全局安装 TypeScript 编译器 tsc。如果您更喜欢从本地 node_modules 包运行 tsc，可以使用 npx 或类似的工具。

现在让我们移到一个空文件夹，尝试编写我们的第一个 TypeScript 程序：hello.ts：

```typescript
// Greets the world.
console.log('Hello world!');
```

注意，这里没有多余的东西。这个“hello world”程序看起来与用 JavaScript 编写的“hello world”程序完全相同。现在让我们通过运行命令 `tsc` 来检查它，这是由 `typescript` 包为我们安装的。

```
tsc hello.ts
```

Tada！

等等，“tada”到底是什么？我们运行了 `tsc`，什么也没发生！嗯，没有类型错误，所以我们在控制台中没有得到任何输出，因为没有什么可报告的。

但是再次检查 — 我们得到了一些文件输出。如果我们查看当前目录，我们会在 `hello.ts` 旁边看到一个 `hello.js` 文件，这是 `tsc` 编译或转换成纯 JavaScript 文件之后，`hello.ts` 文件的输出。如果我们检查内容，会看到 TypeScript 在处理一个. `.ts` 文件后输出了什么：

```javascript
// Greets the world.
console.log('Hello world!');
```

在这种情况下，TypeScript 需要转换的内容很少，所以它看起来和我们写的代码一模一样。编译器试图发出清晰可读的代码，这些代码看起来像人们编写的代码。虽然这并不总是那么容易，但 TypeScript 始终如一地缩进，注意我们的代码跨越不同的代码行的时间，并尽量保留注释。

如果我们确实引入了类型检查错误呢？让我们重写 hello.ts：

```typescript
// This is an industrial-grade general-purpose greeter function:
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}
greet('Brendan');
```

如果我们再次运行 `tsc hello.ts`，请注意，我们会在命令行上得到一个错误！

```typescript
Expected 2 arguments, but got 1.
```

TypeScript 告诉我们，我们少传了一个参数给 greet 函数，这是正确的。到目前为止，我们只编写了标准的 JavaScript，但类型检查仍然能够发现代码中的问题。感谢 TypeScript ！

## Emitting with Errors

在上一个示例中，您可能没有注意到的一件事是 hello.js 文件又发生了更改。如果我们打开这个文件，我们会看到它的内容看起来基本上和我们的输入文件一样。考虑到 tsc 报告了一个关于我们代码的错误，这可能有点令人惊讶，但这是基于 `TypeScript` 的核心价值之一：大多数时候，你会比 `TypeScript` 知道得更多。

重申前面的观点，类型检查代码限制了可以运行的程序类型，因此类型检查器可以在哪些类型的事情上进行权衡。在大多数情况下，这是可以的，但是在有些情况下，这些检查会成为障碍。例如，想象自己将 JavaScript 代码迁移到 TypeScript 并引入类型检查错误。最终，您将抽出时间为类型检查器清理东西，但是最初的 JavaScript 代码已经在工作了！为什么把它转换成 TypeScript 就不能运行了呢？

所以 TypeScript 不会妨碍你。当然，随着时间的推移，您可能需要对错误有更多的防范，并使 TypeScript 更加严格。在这种情况下，可以使用 `noEmitOnError` 编译器选项。尝试更改 `hello.ts` 文件并使用该选项运行 `tsc`：

```
tsc --noEmitOnError hello.ts
```

您会注意到 `hello.js` 再也没更新过。

> TypeScript 编译器的默认行为是当发生错误时仍会生成 `.js` 文件， `noEmitOnError` 标记可以阻止在编译时遇到错误的情况下继续生成 `.js ` 代码。

## 显示类型（Explicit Types）

到目前为止，我们还没有告诉 TypeScript 什么是 `person` 或 `date`。让我们编辑代码告诉 TypeScript，`person` 是一个 `string` ，`date` 应该是一个 `Date` 对象。我们还将在 `date` 上使用 `toDateString()`方法。

```typescript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

我们所做的就是在 `person` 和 `date` 上添加类型注释，来描述什么类型的值可以调用 `greet` 。您可以将签名理解为 “ `greet` 接受字符串类型 `person` 和 `Date` 类型的`date` ” 。

有了这个，TypeScript 可以告诉我们 `greet` 可能被错误调用的情况。比如说…

```typescript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Maddison', Date());
// Argument of type 'string' is not assignable to parameter of type 'Date'.
```

啊？TypeScript 在我们的第二个参数上报告了一个错误，但是为什么呢？

也许令人惊讶的是，在 JavaScript 中调用 `Date()` 会返回一个 `string` 。另一方面，用 `new Date()` 构造一个 `Date` 实际上给出了我们所期望的结果。

无论如何，我们可以快速修复这个错误：

```typescript
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet('Maddison', new Date());
```

请记住，我们并不是总需要编写显式类型注释。在许多情况下，即使我们省略了类型，TypeScript 甚至可以为我们推断出类型。

```typescript
let msg = 'hello there!';

// let msg: string;
```

即使我们没有告诉 TypeScript `msg` 是 `string` 类型，它也能判断出来。这是一个特性，当类型系统最终推断出相同的类型时，最好不要添加注释。

## 类型擦除（Erased Types）

让我们看看当我们用 `tsc` 编译上面的函数 `greet` ，输出 JavaScript 时会发生什么：

```javascript
'use strict';
function greet(person, date) {
  console.log(
    'Hello '.concat(person, ', today is ').concat(date.toDateString(), '!')
  );
}
greet('Maddison', new Date());
```

注意这里的两件事:

- `person` 和 `date` 参数不再有类型注释
- 模板字符串 - 使用反斜杠(<mark> ` </mark>字符)的字符串 — 被转换成带有连接(+)的普通字符串

后面我们会详细讨论第二点，让我们先看一下第一点，类型注释不是 JavaScript 的一部分，所以没有任何浏览器或者运行环境可以直接运行 TypeScript 。这就是为什么 TypeScript 首先需要一个编译器。它需要某种方法去掉或转换 TypeScript 独有的代码，这样才能运行。大多数 TypeScript 独有的代码都会被擦除，同样，这里的类型注释也会被完全擦除。

## 降级（Downleveling）

与上面的另一个区别是，我们的模板字符串是从

```typescript
`Hello ${person}, today is ${date.toDateString()}!`;
```

到

```javascript
'Hello ' + person + ', today is ' + date.toDateString() + '!';
```

为什么会这样？

模版字符串是 ES6 的特性，TypeScript 能够将新版本的代码编译为老版本的代码，如 ES3 或 ES5。这种将高版本语法转换为低版本语法的过程称为“降级”。

TypeScript 默认转换成 ES3 ，一个非常老的 ECMAScript 版本。通过使用 `target` 选项，我们可以选择转换成更新的版本，使用 `--target es2015` 将 TypeScript 转换成 ECMAScript 2015，这意味着代码应该能够在任何支持 ECMAScript 2015 的环境运行。因此，运行 `tsc --target es2015 hell.ts` 得到以下输出：

```typescript
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet('Maddison', new Date());
```

## 严格模式（Strictness）

不同的用户使用 TypeScript 在类型检查器中寻求的体验不同。有些人寻找一个更为宽松的选择，既可以帮助他们验证程序，也可以体验 TypeScript 工具。这是 TypeScript 的默认体验，其中的类型是可选的，推断采用最宽松的类型，并且不检查潜在的 `null`/`undefined`。就像 `tsc` 在编译报错时依然会输出文件，这些默认选项并不会阻碍你的开发，如果您正在迁移 JavaScript 代码，最一开始就可以使用这种方式。

相反，很多用户更喜欢让 TypeScript 尽可能直接地进行验证，这就是为什么这门语言提供了严格模式的设置。

TypeScript 有几个类型检查严格模式的开关，除非另有说明，否则我们所有的示例都是在严格模式下编写的。CLI 中的 `strict` 配置项，或者 `tsconfig.json` 中的 `"strict": true` 可以同时开启所有选项，也可以分开设置。在这些设置里，你最需要了解的是 `noImplicitAny` 和 `strictNullChecks`。

### noImplicitAny

回想在某些地方，TypeScript 不会尝试为我们推断类型，而是回到最宽松的类型：`any`。这并不是最糟糕的事，回到 `any` 就是一种纯粹的 JavaScript 体验。

然而，频繁使用 `any` 违背了使用 TypeScript 的初衷。你的程序输入的类型越多，你得到的验证和工具就越多，这意味着你在编码时遇到的 bug 越少。启用 `noImplicitAny` ，当类型被隐式推断为 `any` 时，会报错。

### strictNullChecks

默认情况下，像 `null` 和 `undefined` 可以赋值给任何其他类型。这样编码更加容易，但是忘记处理 `null` 和 `undefined` 会导致无数 bug。`strictNullChecks` 配置使处理 `null` 和 `undefined` 变得更加明确，我们不必担心是否忘记处理。
