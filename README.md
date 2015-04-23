# Paper [![Build Status](https://travis-ci.org/YangMann/Paper.svg?branch=master)](https://travis-ci.org/YangMann/Paper)
Paper, a modern CSS framework with a vintage breeze of China.

## Progress
### Grid
- [x] All complete!

### Typography
- [x] Basic Chinese typography
- [x] Horizontal notations
- [ ] Vertical notations

### Document
- [x] Basic document style
- [x] Redhead
- [x] Document with image
- [x] Newspaper
- [ ] Vertical vintage document

### Forms
- [x] Input boxes
- [x] Select boxes
- [x] Textarea
- [ ] Search boxes
- [x] Radio & checkbox
- [x] Range input
- [ ] Switch
- [ ] Character Counter

### Buttons
- [ ] Basic button style
- [ ] Button animation

### Icons
- [ ] Icon set
- [ ] Seal (stamp)
- [ ] Textures (waves)
- [ ] Logo
- [ ] Icon related components
- [ ] Preloader

### Table
- [ ] Basic table style

### Navigation
- [ ] Basic nav style
- [ ] Basic cucumber style

### Misc
- [ ] Media
- [ ] Javascript components

## Requirements
Paper css & js files are ready for use. If you want to compile from source, you need to install Ruby (1.9.3 is preferred, 2.0+ is compatible).

Sass (3.4+), compass (1.0.3), modular-scale (2.0.5) and sassy-math (1.5.1) are needed:

    gem install sass compass modular-scale sassy-math

### Font matters!
[Font Spider (字蛛)](http://font-spider.org/ "Font Spider (字蛛)") has made beautiful Chinese (CJK) fonts available for web.
Theoretically you can use ANY (open source) Chinese (CJK) font with Paper. We encourage you to use Font Spider to compress
your font before deployment.

By default, Paper uses [Source Han Sans (思源雅黑)](https://github.com/adobe-fonts/source-han-sans "Source Han Sans (思源雅黑)"),
an elegant open source CJK font by Adobe. You can change the font-family in `variables/_settings.scss`. NOTE: Source Hans
Sans currently has some display problems on IE11 like lower underlines, higher emphasize dots and unaligned marker padding.

## Compile
In command line, navigate to the directory where `config.rb` is located, and run

    compass compile

By default, the `paper.css` file will be generated in the `css` directory. You can change the output folder by editing `config.rb`.

### Developers' preview!
Install NodeJS (0.10+), then install jade (1.8+):

    npm install -g jade

We prepared a demo page for preview. In command line, navigate to `jade` directory, then:

    jade demo.jade -P -o ..

And you can preview the rendered `demo.html` in browser.

## Usage
### Grid
`.container` is optional for centering your page into a comfortable reading width.

`.row` is the outside wrapper for a set of columns with class names like `.span-{m}-of-{n}`. Each column will take m/n of
the full container/page width. (It means a "row" in your page, but if the fractions of columns sum up to 1, they will
automatically form a new row.) You can add class `.push-{m}-of-{n}` to push the corresponding column to the right for a
intended width. Add `.centered` class to a column to make it align to the center of the row.

Paper's semantic fraction-declared grid system makes the layout highly customizable. But Paper do have a maximum column
number limit which is by default 12 and you can change it in `variables/_settings.scss`.

You can make the grid responsive! Just append other column fraction to the original `.col.span-{m}-of-{n}`. Column fractions
for different screen sizes are declared as `.span-phone-vertical-{m}-of-{n}`, `.span-phone-horizontal-{m}-of-{n}`,
`.span-phone-{m}-of-{n}` and `.span-tablet-{m}-of-{n}`.

NOTE: as a matter of math, you need to make sure that `m <= n` and all columns sum up to 1 in each of your intended row.

### Typography
Paper highly focuses on Chinese typography. Inspired by [typo.css](http://typo.sofi.sh/ "typo.css"), Paper brought Chinese
typography and annotations to web. `<u>`, `<blockquote>`, `<sub>`, `<sup>`, `<mark>`, `<em>` tags are following Chinese
typography standards. NOTE: `<em>` is supported through a javascript plugin in `javascript` directory.

Paper supports responsive font-size and font-weight. Use `.responsive-text` to make your text self-resize in
different screen sizes. The font-weight is switched automatically without any additional annotation. It switch font-weight
of `<p>` between "regular" and "normal" in respect of smaller screens and larger screens.

### Helpers
#### Vertical align
Add `.valign` to an element will make the children align to vertical center.
#### Hide
`.hide` will make an element hidden, add `.show` will make it visible.

We also provide `.hidden-phone`, `.hidden-tablet` and `.hidden-desktop` to hide content on specific screen sizes.

### Document
Using `.document` will give your article an awesome layout. We also provide different types of documents: `.document-redhead`,
`.document-image`, `.document-newspaper`. See the demo page for detailed usage. 
#### Vertical documents
Try out `.document.vertical` and prepare to get surprised! 

### Forms
See demo page for examples.

```html
<form>
  <div class="row">
    <div class="input-area col span-1-2">
      <input placeholder="占位符">
    </div>
    <div class="input-area col span-1-2">
      <input id="input_name" type="text">
      <label for="input_name">姓名</label>
    </div>
  </div>
  <div class="row">
    <div class="input-area col span-1-2">
      <input id="input_addr" placeholder="占位符">
      <label for="input_addr">地址</label>
    </div>
    <div class="input-area col span-1-2">
      <input id="input_disabled" placeholder="输入被禁用" disabled>
      <label for="input_disabled">禁用</label>
    </div>
  </div>
</form>
```

#### Textarea
Textareas can resize themselves! 

```html
<div class="input-area">
  <textarea id="input_textarea" class="auto-resize"></textarea>
  <label for="input_textarea">输入文本框</label>
</div>
```