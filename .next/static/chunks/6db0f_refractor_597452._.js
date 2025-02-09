(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/6db0f_refractor_597452._.js", {

"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/core.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

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
var h = __turbopack_require__("[project]/node_modules/.pnpm/hastscript@6.0.0/node_modules/hastscript/index.js [app-client] (ecmascript)");
var decode = __turbopack_require__("[project]/node_modules/.pnpm/parse-entities@2.0.0/node_modules/parse-entities/index.js [app-client] (ecmascript)");
var Prism = __turbopack_require__("[project]/node_modules/.pnpm/prismjs@1.27.0/node_modules/prismjs/components/prism-core.js [app-client] (ecmascript)");
var markup = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/markup.js [app-client] (ecmascript)");
var css = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/css.js [app-client] (ecmascript)");
var clike = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/clike.js [app-client] (ecmascript)");
var js = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javascript.js [app-client] (ecmascript)");
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
"[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

'use strict';
var refractor = __turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/core.js [app-client] (ecmascript)");
module.exports = refractor;
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/abap.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/abnf.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/actionscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ada.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/agda.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/al.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/antlr4.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/apacheconf.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/apex.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/apl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/applescript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/aql.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/arduino.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/arff.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/asciidoc.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/asm6502.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/asmatmel.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/aspnet.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/autohotkey.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/autoit.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/avisynth.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/avro-idl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bash.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/basic.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/batch.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bbcode.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bicep.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/birb.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bison.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bnf.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/brainfuck.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/brightscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bro.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/bsl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/c.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cfscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/chaiscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cil.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/clojure.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cmake.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cobol.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/coffeescript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/concurnas.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/coq.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cpp.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/crystal.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/csharp.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cshtml.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/csp.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/css-extras.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/csv.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/cypher.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/d.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dart.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dataweave.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dax.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dhall.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/diff.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/django.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dns-zone-file.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/docker.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/dot.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ebnf.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/editorconfig.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/eiffel.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ejs.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/elixir.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/elm.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/erb.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/erlang.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/etlua.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/excel-formula.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/factor.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/false.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/firestore-security-rules.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/flow.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/fortran.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/fsharp.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ftl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gap.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gcode.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gdscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gedcom.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gherkin.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/git.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/glsl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gml.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/gn.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/go-module.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/go.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/graphql.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/groovy.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/haml.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/handlebars.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/haskell.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/haxe.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hcl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hlsl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hoon.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hpkp.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/hsts.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/http.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ichigojam.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/icon.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/icu-message-format.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/idris.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/iecst.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ignore.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/inform7.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ini.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/io.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/j.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/java.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javadoc.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javadoclike.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/javastacktrace.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jexl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jolie.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jq.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/js-extras.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/js-templates.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsdoc.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/json5.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsonp.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsstacktrace.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/jsx.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/julia.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/keepalived.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/keyman.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/kotlin.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/kumir.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/kusto.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/latex.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/latte.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/less.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/lilypond.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/liquid.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/lisp.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/livescript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/llvm.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/log.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/lolcode.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/lua.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/magma.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/makefile.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/markdown.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/markup-templating.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/matlab.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/maxscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/mel.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/mermaid.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/mizar.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/mongodb.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/monkey.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/moonscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/n1ql.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/n4js.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nand2tetris-hdl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/naniscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nasm.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/neon.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nevod.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nginx.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nim.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nix.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/nsis.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/objectivec.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ocaml.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/opencl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/openqasm.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/oz.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/parigp.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/parser.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pascal.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pascaligo.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pcaxis.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/peoplecode.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/perl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/php-extras.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/php.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/phpdoc.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/plsql.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/powerquery.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/powershell.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/processing.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/prolog.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/promql.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/properties.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/protobuf.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/psl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pug.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/puppet.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/pure.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/purebasic.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/purescript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/python.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/q.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/qml.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/qore.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/qsharp.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/r.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/racket.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/reason.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/regex.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rego.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/renpy.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rest.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rip.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/roboconf.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/robotframework.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/ruby.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/rust.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sas.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sass.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/scala.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/scheme.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/scss.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/shell-session.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/smali.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/smalltalk.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/smarty.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sml.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/solidity.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/solution-file.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/soy.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sparql.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/splunk-spl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sqf.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/sql.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/squirrel.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/stan.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/stylus.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/swift.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/systemd.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/t4-cs.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/t4-templating.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/t4-vb.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tap.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tcl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/textile.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/toml.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tremor.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tsx.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/tt2.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/turtle.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/twig.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/typescript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/typoscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/unrealscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/uorazor.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/uri.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/v.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/vala.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/vbnet.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/velocity.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/verilog.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/vhdl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/vim.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/visual-basic.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/warpscript.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/wasm.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/web-idl.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/wiki.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/wolfram.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/wren.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/xeora.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/xml-doc.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/xojo.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/xquery.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/yaml.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/yang.js [app-client] (ecmascript)"));
refractor.register(__turbopack_require__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/lang/zig.js [app-client] (ecmascript)"));

}.call(this) }),
}]);

//# sourceMappingURL=6db0f_refractor_597452._.js.map