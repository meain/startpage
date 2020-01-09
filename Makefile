MAKEFLAGS += --silent

clean:
	rm build.zip 2>/dev/null || echo "No build exists"
build:
	zip -r build.zip * >/dev/null && echo "Build available in build.zip"
