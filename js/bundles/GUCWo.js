var pageComponent=webpackJsonppageComponent([26],{282:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=o(1),s=i(c),l=o(2),u=i(l);o(4),o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12),o(13),o(14),o(15);var m=o(283),d=i(m),p=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);u.default.register(p,d.default),t.default=p},283:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.GUCWo=void 0;var c,s=o(1),l=i(s),u=o(2),m=i(u);goog.loadModule(function(e){function t(e,t,i){var c=function(){n("article"),n("p");var t=e.page.description;"function"==typeof t?t():null!=t&&a(t),r("p"),n("p"),n("code"),a("git bisect"),r("code"),a(" is used to find the problem commit for regression bugs; bugs that were once fixed but have been re-broken."),r("p"),n("p"),a("When a problem is discovered, it is not always clear what modification caused the regression. Sometimes it is easy to figure out, but in some cases, the only way to find out is by going back and testing each commit in the history of the file(s) to find out when the problem was introduced."),r("p"),n("p"),a("Checking each commit individually can take a significant amount of time, that is why we use "),n("code"),a("git bisect"),r("code"),a(" which will help automate the process to find the problem commit."),r("p"),n("p"),n("code"),a("git bisect"),r("code"),a(" uses binary search to look at all of the commits between good and bad commits, picks the middle one, and switches the current "),n("em"),a("HEAD"),r("em"),a(" to that commit. It repeats the process until the problem commit is found."),r("p"),n("p"),a("To start "),n("code"),a("git bisect"),r("code"),a(", you need to specify at least one good and bad commits. So we begin by finding a commit where things were working and another commit where things are broken."),r("p"),n("p"),n("em"),a("You can test whether a commit works or not by switching to that commit with "),n("code"),a("git checkout <commit hash>"),r("code"),a(" and rebuilding the source code"),r("em"),a("."),r("p"),n("ol"),n("li"),a("Start "),n("code"),a("git bisect"),r("code"),a(" by running the following command in your "),n("em"),a("Terminal/Git Bash"),r("em"),a("."),s({code:"git bisect start",mode:"shell"},null,i),r("li"),n("li"),a("Specify good working commit by running the following command in your "),n("em"),a("Terminal/Git Bash"),r("em"),a("."),s({code:"git bisect good <commit hash>",mode:"shell"},null,i),r("li"),n("li"),a("Specify bad commit by running the following command in your "),n("em"),a("Terminal/Git Bash"),r("em"),a("."),s({code:"git bisect bad <commit hash>",mode:"shell"},null,i),r("li"),n("li"),a("Git bisect switches the current "),n("em"),a("HEAD"),r("em"),a(" to the middle commit between the specified good and bad commits. You then mark the current commit as either good or bad by running the following command in your "),n("em"),a("Terminal/Git Bash"),r("em"),a("."),s({code:"git bisect good # good commit\ngit bisect bad # bad commit",mode:"shell"},null,i),r("li"),n("li"),a("Continues the process until you reach the final commit."),r("li"),n("li"),a("End your "),n("code"),a("git bisect"),r("code"),a(" session by running the following command in your "),n("em"),a("Terminal/Git Bash"),r("em"),a("."),s({code:"git bisect reset",mode:"shell"},null,i),r("li"),r("ol"),r("article"),n("input",null,null,"type","hidden","value",e.page.title),r("input"),n("input",null,null,"type","hidden","value",e.site.title),r("input")};l(o.$$assignDefaults({content:c},e),null,i)}goog.module("GUCWo.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var i=goog.require("incrementaldom"),n=i.elementOpen,r=i.elementClose,a=(i.elementVoid,i.elementOpenStart,i.elementOpenEnd,i.text),s=(i.attr,m.default.getTemplate("ElectricCode.incrementaldom","render")),l=m.default.getTemplate("blog.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="GUCWo.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=c=e,e});var d=function(e){function t(){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(l.default);m.default.register(d,c),t.GUCWo=d,t.templates=c,t.default=c}},[282]);