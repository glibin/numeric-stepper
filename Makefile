
gh-pages:
	rm -rf ../numeric-stepper-gh-pages/assets/*
	cp -r css ../numeric-stepper-gh-pages/assets/
	cp -r js ../numeric-stepper-gh-pages/assets/


.PHONY: dist gh-pages