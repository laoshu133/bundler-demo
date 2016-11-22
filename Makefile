app: dist/make/app.js
	echo mkdir dist dir...
	mkdir -p dist/make

	echo browserify...
	browserify lib/app.js -o dist/make/app.js

dist/make/app.js:
	echo babel...
	babel src --out-dir lib

clean:
	echo clean...
	rm -rf lib dist/make
