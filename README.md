# Example hologram style guide

This is an example project that uses
[hologram](http://trulia.github.io/hologram) to build a demo style guide for
the University of Arizona Libraries.  In order to set things up, run the 
following:

		git clone https://github.com/simpsonw/ual-hologram
		cd ual-hologram
		gem install bundler
    	gem install hologram
		bundle install
		npm install
		gulp

You should now be able to visit the Hologram installation in a browser.  The site will be in ual-hologram/docs, so if you cloned this repository into your webroot, you'll want to visit <yourhostname>/ual-hologram/docs/


**Nota Bene:** This example uses jQuery loaded from a CDN to build a simple menu navigation. You'll need to run a local server to see this menu in action.



# License

Like hologram itself, this example is licensed under the MIT license.
