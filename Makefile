
build: components index.js
	@component build --dev -n list.pagination

standalone:
	@component build --standalone ListPagination -n list.pagination.standalone
	mkdir -p dist
	mv build/list.pagination.standalone.js dist/list.pagination.js
	uglifyjs -o dist/list.pagination.min.js dist/list.pagination.js

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
