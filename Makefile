
build: components index.js
	@component build --dev -n list.fuzzysearch

dev: index.js components
	@component install -d
	@component build -n list -d

standalone:
	@component build --standalone ListFuzzysearch -n list.fuzzysearch.standalone
	mkdir -p dist
	mv build/list.fuzzysearch.standalone.js dist/list.fuzzysearch.js
	uglifyjs -o dist/list.fuzzysearch.min.js dist/list.pagination.js

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
