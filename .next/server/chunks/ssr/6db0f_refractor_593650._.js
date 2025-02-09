module.exports = {

"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/core.js [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

'use strict';
/* global window, self */ // istanbul ignore next - Don't allow Prism to run on page load in browser or
// to start messaging from workers.
var ctx = typeof globalThis === 'object' ? globalThis : typeof self === 'object' ? self : typeof window === 'object' ? window : typeof global === 'object' ? global : {};
var restore = capture();
ctx.Prism = {
    manual: true,
    disableWorkerMessageHandler: true
};
// Load all stuff in `prism.js` itself, except for `prism-file-highlight.js`.
// The wrapped non-leaky grammars are loaded instead of Prism’s originals.
var h = __turbopack_require__("[project]/node_modules/.pnpm/hastscript@6.0.0/node_modules/hastscript/index.js [app-ssr] (ecmascript)");
var decode = __turbopack_require__("[project]/node_modules/.pnpm/parse-entities@2.0.0/node_modules/parse-entities/index.js [app-ssr] (ecmascript)");
var Prism = __turbopack_require__("[project]/node_modules/.pnpm/prismjs@1.27.0/node_modules/prismjs/components/prism-core.js [app-ssr] (ecmascript)");
var markup = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/markup.js [app-ssr] (ecmascript)");
var css = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/css.js [app-ssr] (ecmascript)");
var clike = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/clike.js [app-ssr] (ecmascript)");
var js = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javascript.js [app-ssr] (ecmascript)");
restore();
var own = {}.hasOwnProperty;
// Inherit.
function Refractor() {}
Refractor.prototype = Prism;
// Construct.
var refract = new Refractor();
// Expose.
module.exports = refract;
// Create.
refract.highlight = highlight;
refract.register = register;
refract.alias = alias;
refract.registered = registered;
refract.listLanguages = listLanguages;
// Register bundled grammars.
register(markup);
register(css);
register(clike);
register(js);
refract.util.encode = encode;
refract.Token.stringify = stringify;
function register(grammar) {
    if (typeof grammar !== 'function' || !grammar.displayName) {
        throw new Error('Expected `function` for `grammar`, got `' + grammar + '`');
    }
    // Do not duplicate registrations.
    if (refract.languages[grammar.displayName] === undefined) {
        grammar(refract);
    }
}
function alias(name, alias) {
    var languages = refract.languages;
    var map = name;
    var key;
    var list;
    var length;
    var index;
    if (alias) {
        map = {};
        map[name] = alias;
    }
    for(key in map){
        list = map[key];
        list = typeof list === 'string' ? [
            list
        ] : list;
        length = list.length;
        index = -1;
        while(++index < length){
            languages[list[index]] = languages[key];
        }
    }
}
function highlight(value, name) {
    var sup = Prism.highlight;
    var grammar;
    if (typeof value !== 'string') {
        throw new Error('Expected `string` for `value`, got `' + value + '`');
    }
    // `name` is a grammar object.
    if (refract.util.type(name) === 'Object') {
        grammar = name;
        name = null;
    } else {
        if (typeof name !== 'string') {
            throw new Error('Expected `string` for `name`, got `' + name + '`');
        }
        if (own.call(refract.languages, name)) {
            grammar = refract.languages[name];
        } else {
            throw new Error('Unknown language: `' + name + '` is not registered');
        }
    }
    return sup.call(this, value, grammar, name);
}
function registered(language) {
    if (typeof language !== 'string') {
        throw new Error('Expected `string` for `language`, got `' + language + '`');
    }
    return own.call(refract.languages, language);
}
function listLanguages() {
    var languages = refract.languages;
    var list = [];
    var language;
    for(language in languages){
        if (own.call(languages, language) && typeof languages[language] === 'object') {
            list.push(language);
        }
    }
    return list;
}
function stringify(value, language, parent) {
    var env;
    if (typeof value === 'string') {
        return {
            type: 'text',
            value: value
        };
    }
    if (refract.util.type(value) === 'Array') {
        return stringifyAll(value, language);
    }
    env = {
        type: value.type,
        content: refract.Token.stringify(value.content, language, parent),
        tag: 'span',
        classes: [
            'token',
            value.type
        ],
        attributes: {},
        language: language,
        parent: parent
    };
    if (value.alias) {
        env.classes = env.classes.concat(value.alias);
    }
    refract.hooks.run('wrap', env);
    return h(env.tag + '.' + env.classes.join('.'), attributes(env.attributes), env.content);
}
function stringifyAll(values, language) {
    var result = [];
    var length = values.length;
    var index = -1;
    var value;
    while(++index < length){
        value = values[index];
        if (value !== '' && value !== null && value !== undefined) {
            result.push(value);
        }
    }
    index = -1;
    length = result.length;
    while(++index < length){
        value = result[index];
        result[index] = refract.Token.stringify(value, language, result);
    }
    return result;
}
function encode(tokens) {
    return tokens;
}
function attributes(attrs) {
    var key;
    for(key in attrs){
        attrs[key] = decode(attrs[key]);
    }
    return attrs;
}
function capture() {
    var defined = 'Prism' in ctx;
    /* istanbul ignore next */ var current = defined ? ctx.Prism : undefined;
    return restore;
    function restore() {
        /* istanbul ignore else - Clean leaks after Prism. */ if (defined) {
            ctx.Prism = current;
        } else {
            delete ctx.Prism;
        }
        defined = undefined;
        current = undefined;
    }
}

}.call(this) }),
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/index.js [app-ssr] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

'use strict';
var refractor = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/core.js [app-ssr] (ecmascript)");
module.exports = refractor;
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/abap.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/abnf.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/actionscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ada.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/agda.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/al.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/antlr4.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/apacheconf.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/apex.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/apl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/applescript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/aql.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/arduino.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/arff.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/asciidoc.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/asm6502.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/asmatmel.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/aspnet.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/autohotkey.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/autoit.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/avisynth.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/avro-idl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bash.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/basic.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/batch.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bbcode.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bicep.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/birb.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bison.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bnf.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/brainfuck.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/brightscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bro.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bsl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/c.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cfscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/chaiscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cil.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/clojure.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cmake.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cobol.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/coffeescript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/concurnas.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/coq.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cpp.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/crystal.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/csharp.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cshtml.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/csp.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/css-extras.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/csv.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cypher.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/d.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dart.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dataweave.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dax.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dhall.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/diff.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/django.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dns-zone-file.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/docker.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dot.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ebnf.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/editorconfig.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/eiffel.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ejs.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/elixir.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/elm.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/erb.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/erlang.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/etlua.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/excel-formula.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/factor.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/false.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/firestore-security-rules.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/flow.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/fortran.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/fsharp.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ftl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gap.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gcode.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gdscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gedcom.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gherkin.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/git.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/glsl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gml.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gn.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/go-module.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/go.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/graphql.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/groovy.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/haml.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/handlebars.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/haskell.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/haxe.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hcl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hlsl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hoon.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hpkp.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hsts.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/http.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ichigojam.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/icon.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/icu-message-format.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/idris.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/iecst.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ignore.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/inform7.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ini.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/io.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/j.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/java.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javadoc.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javadoclike.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javastacktrace.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jexl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jolie.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jq.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/js-extras.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/js-templates.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsdoc.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json5.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsonp.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsstacktrace.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsx.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/julia.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/keepalived.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/keyman.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/kotlin.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/kumir.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/kusto.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/latex.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/latte.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/less.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/lilypond.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/liquid.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/lisp.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/livescript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/llvm.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/log.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/lolcode.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/lua.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/magma.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/makefile.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/markdown.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/markup-templating.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/matlab.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/maxscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/mel.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/mermaid.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/mizar.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/mongodb.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/monkey.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/moonscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/n1ql.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/n4js.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nand2tetris-hdl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/naniscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nasm.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/neon.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nevod.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nginx.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nim.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nix.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nsis.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/objectivec.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ocaml.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/opencl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/openqasm.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/oz.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/parigp.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/parser.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pascal.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pascaligo.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pcaxis.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/peoplecode.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/perl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/php-extras.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/php.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/phpdoc.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/plsql.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/powerquery.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/powershell.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/processing.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/prolog.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/promql.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/properties.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/protobuf.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/psl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pug.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/puppet.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pure.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/purebasic.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/purescript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/python.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/q.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/qml.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/qore.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/qsharp.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/r.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/racket.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/reason.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/regex.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rego.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/renpy.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rest.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rip.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/roboconf.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/robotframework.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ruby.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rust.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sas.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sass.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/scala.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/scheme.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/scss.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/shell-session.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/smali.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/smalltalk.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/smarty.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sml.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/solidity.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/solution-file.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/soy.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sparql.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/splunk-spl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sqf.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sql.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/squirrel.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/stan.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/stylus.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/swift.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/systemd.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/t4-cs.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/t4-templating.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/t4-vb.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tap.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tcl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/textile.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/toml.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tremor.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tsx.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tt2.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/turtle.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/twig.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/typescript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/typoscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/unrealscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/uorazor.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/uri.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/v.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/vala.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/vbnet.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/velocity.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/verilog.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/vhdl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/vim.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/visual-basic.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/warpscript.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/wasm.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/web-idl.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/wiki.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/wolfram.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/wren.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/xeora.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/xml-doc.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/xojo.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/xquery.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/yaml.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/yang.js [app-ssr] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/zig.js [app-ssr] (ecmascript)"));

}.call(this) }),

};

//# sourceMappingURL=6db0f_refractor_593650._.js.map