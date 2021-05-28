我们都知道，`CSS`是开发网页必备的东西。没了他，网页也就不美了。  
可是，有些小伙伴觉得`CSS`这个东西太麻烦了。看如下代码：

```css
/* test.css */

.box {
  display: flex;
}
.box .box1 {
  display: flex;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
}
.box .box2 {
  display: flex;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
}
.box .box1 .ad .title h1::before {
  content: "~(^_^)~";

  display: flex;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
}
.box .box1 .ad .content p::before {
  content: "- ";

  display: flex;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
}

/**
 * Only Support the multiline comment.
 * 仅支持多行注释。
 */
```

`CSS`如果要嵌套的话，那就要重复地写选择器，麻烦++。  
万一选择器写错的话，通常需要找很久才能找到并修改，麻烦++。  
如果有重复的代码，需要一个一个的复制粘贴，之后如果你要修改的话，需要一个一个修改，麻烦++。  

所以，号称`世界上最成熟、最稳定、最强大的专业级CSS扩展语言`的`SASS`就登场啦！看如下代码：

```sass
// test.sass

@mixin myMixin
  display: flex
  background-color: #000
  color: #fff
  border-radius: 10px

.box
  display: flex

  .box1
    @include myMixin

    .ad .title h1::before
      content: "~(^_^)~"

      @include myMixin

    .ad .content p::before
      content: "- "

      @include myMixin

  .box2
    @include myMixin

// Support the single-line comment!
// 支持单行注释！
```

这就是`SASS`的代码啦！是不是简洁许多？
相比之下，`CSS`用了38行，而`SASS`仅用了20行。

---

有人会说，我就喜欢`CSS`的风格，才不要没有大括号和分号的`SASS`呢！  
碰到这种人，我就给他一个回复：`Sassy CSS (SCSS)`。  
翻译过来就是`SASS`化的`CSS`。

~~可不是时髦的CSS！~~

来看一下`Sassy CSS`：

```scss
// test.scss

@mixin myMixin {
  display: flex;
  background-color: #000;
  color: #fff;
  border-radius: 10px;
}

.box {
  display: flex;

  .box1 {
    @include myMixin;

    .ad .title h1::before {
      content: "~(^_^)~";

      @include myMixin;
    }

    .ad .content p::before {
      content: "- ";

      @include myMixin;
    }

  .box2 {
    @include myMixin;
  }
}

// Support the single-line comment!
// 支持单行注释！
```

~~有内味了~~  
~~双厨狂喜~~

如果想学习`Sassy CSS (SCSS)`的小伙伴们，可以[点此链接](https://www.sass.hk/docs/)。  
如果想学习`SASS`的小伙伴们，很遗憾，没有教程。但是如果你把大括号去掉，把分号去掉，并加上合适的缩进，就**大概**是`SASS`了。

---

现在有很多像`SASS`这样的CSS扩展语言，比如

- [`Less`](https://less.bootcss.com/#%E6%A6%82%E8%A7%88)
- [`Stylus`](https://stylus.bootcss.com/)
- ...

小伙伴们也可以按照喜好来决定，反正尽量少用`CSS`。
