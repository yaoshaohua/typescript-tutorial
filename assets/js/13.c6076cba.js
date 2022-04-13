(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{578:function(t,s,a){"use strict";a.r(s);var e=a(10),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在本章中，我们将会介绍一些在 JavaScript 代码中最常见的值类型，并解释在 TypeScript 中描述这些类型的相应方法。这不是一个详细的列表，以后的章节将描述更多命名和使用其他类型的方法。")]),t._v(" "),a("p",[t._v("类型还可以出现在很多地方，而不仅仅是类型注释。在我们了解类型本身的同时，我们还将了解在什么地方可以引用这些类型形成新结构。")]),t._v(" "),a("p",[t._v("我们首先来复习一下在写 JavaScript 和 TypeScript 代码时可能遇到的最基本和最常见的类型。这是后面构建更复杂类型的核心。")]),t._v(" "),a("h2",{attrs:{id:"string-number-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-number-boolean"}},[t._v("#")]),t._v(" "),a("code",[t._v("string")]),t._v(", "),a("code",[t._v("number")]),t._v(", "),a("code",[t._v("boolean")])]),t._v(" "),a("p",[t._v("JavaScript 有三种常用的基本类型："),a("code",[t._v("string")]),t._v(", "),a("code",[t._v("number")]),t._v(", "),a("code",[t._v("boolean")]),t._v("。每个都有一个相应的 TypeScript 类型。正如您所期望的，如果您在这些类型的值上使用 JavaScript 的 typeof 操作符，您会看到相同的名字：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("string")]),t._v(' 表示字符串，比如 "Hello, world"')]),t._v(" "),a("li",[a("code",[t._v("number")]),t._v(" 表示数字，比如 "),a("code",[t._v("42")]),t._v("，JavaScript 对于整数没有一个特殊的运行时值，因此，没有与 "),a("code",[t._v("int")]),t._v(" 或 "),a("code",[t._v("float")]),t._v(" 等价的值，一切都是简单的 "),a("code",[t._v("number")])]),t._v(" "),a("li",[a("code",[t._v("boolean")]),t._v(" 表示布尔值："),a("code",[t._v("true")]),t._v(" 和 "),a("code",[t._v("false")])])]),t._v(" "),a("blockquote",[a("p",[t._v("类型名 "),a("code",[t._v("String")]),t._v("、"),a("code",[t._v("Number")]),t._v(" 和 "),a("code",[t._v("Boolean")]),t._v(" (以大写字母开头)是合法的，但指的是一些很少在代码中出现的特殊内置类型。请始终使用 "),a("code",[t._v("string")]),t._v(", "),a("code",[t._v("number")]),t._v(", "),a("code",[t._v("boolean")]),t._v(" 作为类型。")])]),t._v(" "),a("h2",{attrs:{id:"arrays"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arrays"}},[t._v("#")]),t._v(" Arrays")]),t._v(" "),a("p",[t._v("要指定类似 "),a("code",[t._v("[1,2,3]")]),t._v(" 的数组类型，可以使用语法 "),a("code",[t._v("number[]")]),t._v(" ；这种语法适用于任何类型（比如 "),a("code",[t._v("string[]")]),t._v(" 表示字符串数组，等等）。您也可以看到它被写成 "),a("code",[t._v("Array<number>")]),t._v(" ，意思是一样的。当我们讨论泛型时，我们将学习更多关于语法 "),a("code",[t._v("T<U>")]),t._v(" 的知识。")]),t._v(" "),a("blockquote",[a("p",[t._v("请注意，[number] 是另一回事，请参阅有关 Tuples 的章节")])]),t._v(" "),a("h3",{attrs:{id:"any"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#any"}},[t._v("#")]),t._v(" "),a("code",[t._v("any")])]),t._v(" "),a("p",[t._v("还有一个特殊类型，"),a("code",[t._v("any")]),t._v(" ，可以在不希望某特定值导致类型检查错误时使用。")]),t._v(" "),a("p",[t._v("当一个值的类型是 "),a("code",[t._v("any")]),t._v(" 时，你可以访问它的任何属性（也会被转为 "),a("code",[t._v("any")]),t._v(" 类型），像调用函数一样调用它，把它赋值给任意类型或者把任意类型赋值给它，再或者是其他语法操作都可以：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// None of the following lines of code will throw compiler errors.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Using `any` disables all further type checking, and it is assumed")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you know the environment better than TypeScript.")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("obj")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("p",[t._v("当您不想仅仅为了让 TypeScript 相信某一行代码是可行的而写出一个很长的类型代码时，"),a("code",[t._v("any")]),t._v(" 类型是很有用的。")]),t._v(" "),a("h3",{attrs:{id:"noimplicitany"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#noimplicitany"}},[t._v("#")]),t._v(" "),a("code",[t._v("noImplicitAny")])]),t._v(" "),a("p",[t._v("如果没有指定类型，TypeScript 也无法从上下文推断出类型，编译器会默认设置为 "),a("code",[t._v("any")]),t._v(" 类型。")]),t._v(" "),a("p",[t._v("但是，您通常希望避免这种情况，因为 TypeScript 对 "),a("code",[t._v("any")]),t._v(" 不做类型检查。启用 "),a("code",[t._v("noImplicitAny")]),t._v(" ，当被隐式推断为 "),a("code",[t._v("any")]),t._v(" 时，TypeScript 就会报错。")]),t._v(" "),a("h2",{attrs:{id:"变量的类型注释-type-annotations-on-variables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量的类型注释-type-annotations-on-variables"}},[t._v("#")]),t._v(" 变量的类型注释（Type Annotations on Variables）")]),t._v(" "),a("p",[t._v("当您使用 "),a("code",[t._v("const")]),t._v("、"),a("code",[t._v("var")]),t._v(" 或 "),a("code",[t._v("let")]),t._v(" 声明变量时，可以选择性地添加类型注释来显示指定变量的类型")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Alice'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("blockquote",[a("p",[t._v("TypeScript 不使用“类型在左边”风格的声明，如 "),a("code",[t._v("int x = 0")]),t._v(" ；类型注释总是紧跟在被声明内容的后面。")])]),t._v(" "),a("p",[t._v("然而，在大多数情况下，这是非必要的。TypeScript 会尽可能地尝试自动推断出代码中的类型。例如：变量的类型是基于初始值推断出来的：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No type annotation needed -- 'myName' inferred as type 'string'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" myName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Alice'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("在大多数情况下，您不需要明确地学习推理的规则，如果您刚开始使用，尝试少用点类型注释，你可能会惊讶，TypeScript 需要很少的东西就能完全理解将要发生什么。")]),t._v(" "),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("p",[t._v("函数是 JavaScript 中传递数据的主要方式，TypeScript 允许您指定函数的输入和输出值的类型。")]),t._v(" "),a("h3",{attrs:{id:"参数类型注释-parameter-type-annotations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参数类型注释-parameter-type-annotations"}},[t._v("#")]),t._v(" 参数类型注释（Parameter Type Annotations）")]),t._v(" "),a("p",[t._v("在声明类型时，可以在每个参数后面添加类型注释，以声明函数接受哪些类型的参数。参数类型注释跟在参数名后面：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Parameter type annotation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello, '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toUpperCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("当一个参数有一个类型注释时，该函数的参数将被检查：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Would be a runtime error if executed!")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("greet")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Argument of type 'number' is not assignable to parameter of type 'string'.")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("blockquote",[a("p",[t._v("即使您的参数上没有类型注释，TypeScript 仍然会检查传入的参数数量是否正确。")])]),t._v(" "),a("h3",{attrs:{id:"返回类型注释-return-type-annotations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回类型注释-return-type-annotations"}},[t._v("#")]),t._v(" 返回类型注释（Return Type Annotations）")]),t._v(" "),a("p",[t._v("您也可以添加返回类型注释，返回类型注释会出现在参数列表之后：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFavoriteNumber")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("26")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h3",{attrs:{id:"匿名函数-anonymous-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匿名函数-anonymous-functions"}},[t._v("#")]),t._v(" 匿名函数（Anonymous Functions）")]),t._v(" "),a("h2",{attrs:{id:"object-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-types"}},[t._v("#")]),t._v(" Object Types")]),t._v(" "),a("h3",{attrs:{id:"可选参数-optional-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可选参数-optional-properties"}},[t._v("#")]),t._v(" 可选参数（Optional Properties）")]),t._v(" "),a("h2",{attrs:{id:"联合类型-union-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#联合类型-union-types"}},[t._v("#")]),t._v(" 联合类型（Union Types）")]),t._v(" "),a("h3",{attrs:{id:"defining-a-union-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-union-type"}},[t._v("#")]),t._v(" Defining a Union Type")]),t._v(" "),a("h3",{attrs:{id:"working-with-union-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-union-types"}},[t._v("#")]),t._v(" Working with Union Types")]),t._v(" "),a("h2",{attrs:{id:"类型别名-type-aliases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型别名-type-aliases"}},[t._v("#")]),t._v(" 类型别名（Type Aliases）")]),t._v(" "),a("h2",{attrs:{id:"interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interfaces"}},[t._v("#")]),t._v(" Interfaces")]),t._v(" "),a("h3",{attrs:{id:"differences-between-type-aliases-and-interfaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#differences-between-type-aliases-and-interfaces"}},[t._v("#")]),t._v(" Differences Between Type Aliases and Interfaces")]),t._v(" "),a("h2",{attrs:{id:"类型断言-type-assertions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型断言-type-assertions"}},[t._v("#")]),t._v(" 类型断言（Type Assertions）")]),t._v(" "),a("h2",{attrs:{id:"字面量类型-literal-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字面量类型-literal-types"}},[t._v("#")]),t._v(" 字面量类型（Literal Types）")]),t._v(" "),a("h3",{attrs:{id:"literal-inference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#literal-inference"}},[t._v("#")]),t._v(" Literal Inference")]),t._v(" "),a("h2",{attrs:{id:"null-and-undefined"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null-and-undefined"}},[t._v("#")]),t._v(" "),a("code",[t._v("null")]),t._v(" and "),a("code",[t._v("undefined")])]),t._v(" "),a("h3",{attrs:{id:"strictnullchecks-off"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictnullchecks-off"}},[t._v("#")]),t._v(" "),a("code",[t._v("strictNullChecks")]),t._v(" off")]),t._v(" "),a("h3",{attrs:{id:"strictnullchecks-on"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strictnullchecks-on"}},[t._v("#")]),t._v(" "),a("code",[t._v("strictNullChecks")]),t._v(" on")]),t._v(" "),a("h3",{attrs:{id:"非空断言操作符-postfix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#非空断言操作符-postfix"}},[t._v("#")]),t._v(" 非空断言操作符（Postfix!）")]),t._v(" "),a("h2",{attrs:{id:"enums"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enums"}},[t._v("#")]),t._v(" Enums")]),t._v(" "),a("h2",{attrs:{id:"less-common-primitives"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#less-common-primitives"}},[t._v("#")]),t._v(" Less Common Primitives")]),t._v(" "),a("h3",{attrs:{id:"bigint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bigint"}},[t._v("#")]),t._v(" bigint")]),t._v(" "),a("h3",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" symbol")])])}),[],!1,null,null,null);s.default=n.exports}}]);