# Foundation for Emails Template

[![devDependency Status](https://david-dm.org/zurb/foundation-emails-template/dev-status.svg)](https://david-dm.org/zurb/foundation-emails-template#info=devDependencies)

**Please open all issues with this template on the main [Foundation for Emails](http://github.com/zurb/foundation-emails/issues) repo.**

This is the official starter project for [Foundation for Emails](http://foundation.zurb.com/emails), a framework for creating responsive HTML devices that work in any email client. It has a Gulp-powered build system with these features:

- Handlebars HTML templates with [Panini](http://github.com/zurb/panini)
- Simplified HTML email syntax with [Inky](http://github.com/zurb/inky)
- Sass compilation
- Image compression
- Built-in BrowserSync server
- Full email inlining process

## Build Commands

Run `npm start` to kick off the build process. A new browser tab will open with a server pointing to your project files.
Run `npm run build` to inline your CSS into your HTML along with the rest of the build process.
Run `npm run litmus` to build as above, then submit to litmus for testing. *AWS S3 Account details required (config.json)*
Run `npm run mail` to build as above, then send to specified email address for testing. *SMTP server details required (config.json)*
Run `npm run zip` to build as above, then zip HTML and images for easy deployment to email marketing services. 

 localhost:3000
