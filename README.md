# Paper [![Build Status](https://travis-ci.org/YangMann/Paper.svg?branch=master)](https://travis-ci.org/YangMann/Paper)
Paper, a modern CSS framework with a vintage breeze of China.

## Requirements
Paper css & js files are ready for use. If you want to compile from source, you need to install Ruby (1.9.3 is preferred, 2.0+ is compatible).

Sass (3.4+), compass (1.0.3), modular-scale (2.0.5) and sassy-math (1.5.1) are needed:

    gem install sass compass modular-scale sassy-math

### Font matters!
[Font Spider (字蛛)](http://font-spider.org/ "Font Spider (字蛛)") has made beautiful Chinese (CJK) fonts available for web.
Theoretically you can use ANY (open source) Chinese (CJK) font with Paper. We encourage you to use Font Spider to compress
your font before deployment.

By default, Paper uses [Source Han Sans (思源雅黑)](https://github.com/adobe-fonts/source-han-sans "Source Han Sans (思源雅黑)"),
an elegant open source CJK font by Adobe. You can change the font-family in `variables/_settings.scss`.

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