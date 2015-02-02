# Paper [![Build Status](https://travis-ci.org/YangMann/Paper.svg?branch=master)](https://travis-ci.org/YangMann/Paper)
Paper, a modern CSS framework with a vintage breeze of China.
## Requirements
Paper css & js files are ready for use. If you want to compile from source, you need to install Ruby (1.9.3 is preferred, 2.0+ is compatible).

Sass (3.4+), compass (1.0.3), modular-scale (2.0.5) and sassy-math (1.5.1) are needed:

    gem install sass compass modular-scale sassy-math

### Font matters!
[Font Spider (字蛛)](http://font-spider.org/ "Font Spider (字蛛)") has made beautiful Chinese (CJK) fonts available for web.
Theoretically you can use ANY (open source) Chinese (CJK) font with Paper. We encourage you to use Font Spider to compress
your font before deployment to achieve high performance.

By default, Paper use [Source Han Sans (思源雅黑)](https://github.com/adobe-fonts/source-han-sans "Source Han Sans (思源雅黑)"),
an elegant open source CJK font by Adobe. You can change the font-family in `vars/_settings.scss`. 

## Compile
In command line, navigate to the directory where `config.rb` is located, and run

    compass compile

By default, the css file will be generated in the `css` directory. You can change the output folder by editing `config.rb`.