# Royal Theme for Sphinx

![Preview](github_assets/light_dark.png)

This is a [Sphinx](http://www.sphinx-doc.org/en/master/) theme I made for the French RPG Maker community [RPG Maker Alliance (aka RMA)](https://rpgmakeralliance.com). It was designed for more classic and verbose kind of documentations (partly due to being designed for French content). 

The theme is semi-responsive as in, it works on every platform (and has a few features specificially made for mobile and tablet) but it has a fixed width both on the sidebars and on the main content (in desktop mode)

## Installation

### PyPI

This theme has a LOT of hardcoded content replacing Sphinx's default stuff such as various translations, minified javascript files and page title (in addition of not having a single configuration setting). Therefore I don't think it would be a great idea to distribute it on PyPI.

### Manual Install

Copy the theme folder to your Docs directory (or anywhere else you like assuming you edit your `conf.py` file accordingly)

Modify your docs `conf.py` file like so :

```py
# Exclude base script files (the theme can uses its own)
from sphinx.builders.html import StandaloneHTMLBuilder
StandaloneHTMLBuilder.script_files = []

html_theme = 'royal_theme' # use the theme
html_theme_path = ["."] # search the theme locally
html_experimental_html5_writer = True # use the HTML5 writer
html_add_permalinks = "" # use font awesome's links 
```

## Using Sphinx's own javascript files (and removing the hardcoded translation)

If you want to use Sphinx's own JS files, simply remove the first three lines we added in `conf.py` :

```py
# Exclude base script files (the theme can uses its own)
from sphinx.builders.html import StandaloneHTMLBuilder
StandaloneHTMLBuilder.script_files = []
````

Remove these lines in `_head.html` :

```html
<script type="text/javascript" src="{{ pathto('_static/js/jquery.min.js', 1) }}"></script>
<script type="text/javascript" src="{{ pathto('_static/js/underscore.min.js', 1) }}"></script>
<script type="text/javascript" src="{{ pathto('_static/js/doctools.min.js', 1) }}"></script>
```

and in `search.html` replace

```jinja
{% set script_files = script_files + ["_static/js/searchtools.min.js"] %}
```

by 


```jinja
{% set script_files = script_files + ["_static/searchtools.js"] %}
```

And, voilà! You now uses the ugly, outdated and only somewhat minified files from the base Sphinx theme.

## Licenses

This theme is distributed under the MIT license. You can see the details [here](LICENSE)

## External Resources
- [Dark Mode Icon by Rami McMin](https://www.flaticon.com/free-icon/moon-phase-outline_53381#term=Moon&page=2&position=43)
- Various icons (menu, permalinks, external links etc) from [Font-Awesome](https://fontawesome.com/) built into a custom bundle using [Fontello](http://fontello.com/)

