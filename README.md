# And

A starting framework for websites that I build. Feel free to start with this, I try to manage these things from the terminal, because it's the most direct way to interact with the tools.

So, to start off:

    cd ~/path/to/project

### Bower

[Bower](https://github.com/bower/bower) manages any components(packages) of the site or application that you're building. This allows you to uninstall and install libraries and such much more simply. 

    bower install

Running the `install` command will install requirejs and jquery. I use or am trying to use these in most of my new projects. By default, these install to a directory called 'components.' You can edit this location in the .bowerrc file. It's the only thing in there.

    # Example
    bower search jquery
    bower install jquery-waypoints --save  # Saves jquery-waypoints to bower.json
    bower uninstall jquery-waypoints

I find having a tool like this extremely useful, but it especially shines when working with groups or sharing code. Bower keeps track of *which version* of components that you are using, and if you're using the same `bower.json` file, it'll make sure you're all dealing with the same code. Handy.

*Note:* This may be because I haven't [looked around](http://sindresorhus.com/bower-components/) enough, but most of the things I install with Bower are javascript libraries. If you notice on the registry, there are fonts, and even Bourbon and Neat can be installed easily. 

### Sass

Sass is cool. The following code tells the `sass` program to run the `--watch` command on the `style.scss` file in the `scss` folder, and output to `style.css` in the `css` folder. Read that again if it didn't make sense and see how it's represented in the command below.

    sass --watch scss/style.scss:css/style.css

Sass will continue to watch the file until you press `[ctrl]c`.


