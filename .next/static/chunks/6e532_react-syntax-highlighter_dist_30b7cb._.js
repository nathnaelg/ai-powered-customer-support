(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/6e532_react-syntax-highlighter_dist_30b7cb._.js", {

"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/create-element.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "createChildren": ()=>createChildren,
    "createClassNameString": ()=>createClassNameString,
    "createStyleObject": ()=>createStyleObject,
    "default": ()=>createElement
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
;
//
// Super simple, non-algorithmic solution since the
// number of class names will not be greater than 4
function powerSetPermutations(arr) {
    var arrLength = arr.length;
    if (arrLength === 0 || arrLength === 1) return arr;
    if (arrLength === 2) {
        // prettier-ignore
        return [
            arr[0],
            arr[1],
            "".concat(arr[0], ".").concat(arr[1]),
            "".concat(arr[1], ".").concat(arr[0])
        ];
    }
    if (arrLength === 3) {
        return [
            arr[0],
            arr[1],
            arr[2],
            "".concat(arr[0], ".").concat(arr[1]),
            "".concat(arr[0], ".").concat(arr[2]),
            "".concat(arr[1], ".").concat(arr[0]),
            "".concat(arr[1], ".").concat(arr[2]),
            "".concat(arr[2], ".").concat(arr[0]),
            "".concat(arr[2], ".").concat(arr[1]),
            "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]),
            "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]),
            "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]),
            "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]),
            "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]),
            "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])
        ];
    }
    if (arrLength >= 4) {
        // Currently does not support more than 4 extra
        // class names (after `.token` has been removed)
        return [
            arr[0],
            arr[1],
            arr[2],
            arr[3],
            "".concat(arr[0], ".").concat(arr[1]),
            "".concat(arr[0], ".").concat(arr[2]),
            "".concat(arr[0], ".").concat(arr[3]),
            "".concat(arr[1], ".").concat(arr[0]),
            "".concat(arr[1], ".").concat(arr[2]),
            "".concat(arr[1], ".").concat(arr[3]),
            "".concat(arr[2], ".").concat(arr[0]),
            "".concat(arr[2], ".").concat(arr[1]),
            "".concat(arr[2], ".").concat(arr[3]),
            "".concat(arr[3], ".").concat(arr[0]),
            "".concat(arr[3], ".").concat(arr[1]),
            "".concat(arr[3], ".").concat(arr[2]),
            "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]),
            "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]),
            "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]),
            "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]),
            "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]),
            "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]),
            "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]),
            "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]),
            "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]),
            "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]),
            "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]),
            "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]),
            "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]),
            "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]),
            "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0]),
            "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]),
            "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]),
            "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]),
            "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]),
            "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]),
            "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]),
            "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]),
            "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]),
            "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]),
            "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[3]),
            "".concat(arr[0], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[2]),
            "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[3]),
            "".concat(arr[0], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[1]),
            "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[2]),
            "".concat(arr[0], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[1]),
            "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[3]),
            "".concat(arr[1], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[2]),
            "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[3]),
            "".concat(arr[1], ".").concat(arr[2], ".").concat(arr[3], ".").concat(arr[0]),
            "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[2]),
            "".concat(arr[1], ".").concat(arr[3], ".").concat(arr[2], ".").concat(arr[0]),
            "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[3]),
            "".concat(arr[2], ".").concat(arr[0], ".").concat(arr[3], ".").concat(arr[1]),
            "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[3]),
            "".concat(arr[2], ".").concat(arr[1], ".").concat(arr[3], ".").concat(arr[0]),
            "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[0], ".").concat(arr[1]),
            "".concat(arr[2], ".").concat(arr[3], ".").concat(arr[1], ".").concat(arr[0]),
            "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[1], ".").concat(arr[2]),
            "".concat(arr[3], ".").concat(arr[0], ".").concat(arr[2], ".").concat(arr[1]),
            "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[0], ".").concat(arr[2]),
            "".concat(arr[3], ".").concat(arr[1], ".").concat(arr[2], ".").concat(arr[0]),
            "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[0], ".").concat(arr[1]),
            "".concat(arr[3], ".").concat(arr[2], ".").concat(arr[1], ".").concat(arr[0])
        ];
    }
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
    if (classNames.length === 0 || classNames.length === 1) return classNames;
    var key = classNames.join('.');
    if (!classNameCombinations[key]) {
        classNameCombinations[key] = powerSetPermutations(classNames);
    }
    return classNameCombinations[key];
}
function createStyleObject(classNames) {
    var elementStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var stylesheet = arguments.length > 2 ? arguments[2] : undefined;
    var nonTokenClassNames = classNames.filter(function(className) {
        return className !== 'token';
    });
    var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
    return classNamesCombinations.reduce(function(styleObject, className) {
        return _objectSpread(_objectSpread({}, styleObject), stylesheet[className]);
    }, elementStyle);
}
function createClassNameString(classNames) {
    return classNames.join(' ');
}
function createChildren(stylesheet, useInlineStyles) {
    var childrenCount = 0;
    return function(children) {
        childrenCount += 1;
        return children.map(function(child, i) {
            return createElement({
                node: child,
                stylesheet: stylesheet,
                useInlineStyles: useInlineStyles,
                key: "code-segment-".concat(childrenCount, "-").concat(i)
            });
        });
    };
}
function createElement(_ref) {
    var node = _ref.node, stylesheet = _ref.stylesheet, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, useInlineStyles = _ref.useInlineStyles, key = _ref.key;
    var properties = node.properties, type = node.type, TagName = node.tagName, value = node.value;
    if (type === 'text') {
        return value;
    } else if (TagName) {
        var childrenCreator = createChildren(stylesheet, useInlineStyles);
        var props;
        if (!useInlineStyles) {
            props = _objectSpread(_objectSpread({}, properties), {}, {
                className: createClassNameString(properties.className)
            });
        } else {
            var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
                selector.split('.').forEach(function(className) {
                    if (!classes.includes(className)) classes.push(className);
                });
                return classes;
            }, []); // For compatibility with older versions of react-syntax-highlighter
            var startingClassName = properties.className && properties.className.includes('token') ? [
                'token'
            ] : [];
            var className = properties.className && startingClassName.concat(properties.className.filter(function(className) {
                return !allStylesheetSelectors.includes(className);
            }));
            props = _objectSpread(_objectSpread({}, properties), {}, {
                className: createClassNameString(className) || undefined,
                style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
            });
        }
        var children = childrenCreator(node.children);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(TagName, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            key: key
        }, props), children);
    }
}

})()),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/checkForListedLanguage.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const __TURBOPACK__default__export__ = function(astGenerator, language) {
    var langs = astGenerator.listLanguages();
    return langs.indexOf(language) !== -1;
};

})()),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/highlight.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/esm/defineProperty.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$create$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/create-element.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$checkForListedLanguage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/checkForListedLanguage.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
var _excluded = [
    "language",
    "children",
    "style",
    "customStyle",
    "codeTagProps",
    "useInlineStyles",
    "showLineNumbers",
    "showInlineLineNumbers",
    "startingLineNumber",
    "lineNumberContainerStyle",
    "lineNumberStyle",
    "wrapLines",
    "wrapLongLines",
    "lineProps",
    "renderer",
    "PreTag",
    "CodeTag",
    "code",
    "astGenerator"
];
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$defineProperty$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
;
;
;
var newLineRegex = /\n/g;
function getNewLines(str) {
    return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
    var lines = _ref.lines, startingLineNumber = _ref.startingLineNumber, style = _ref.style;
    return lines.map(function(_, i) {
        var number = i + startingLineNumber;
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("span", {
            key: "line-".concat(i),
            className: "react-syntax-highlighter-line-number",
            style: typeof style === 'function' ? style(number) : style
        }, "".concat(number, "\n"));
    });
}
function AllLineNumbers(_ref2) {
    var codeString = _ref2.codeString, codeStyle = _ref2.codeStyle, _ref2$containerStyle = _ref2.containerStyle, containerStyle = _ref2$containerStyle === void 0 ? {
        "float": 'left',
        paddingRight: '10px'
    } : _ref2$containerStyle, _ref2$numberStyle = _ref2.numberStyle, numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle, startingLineNumber = _ref2.startingLineNumber;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("code", {
        style: Object.assign({}, codeStyle, containerStyle)
    }, getAllLineNumbers({
        lines: codeString.replace(/\n$/, '').split('\n'),
        style: numberStyle,
        startingLineNumber: startingLineNumber
    }));
}
function getEmWidthOfNumber(num) {
    return "".concat(num.toString().length, ".25em");
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
    return {
        type: 'element',
        tagName: 'span',
        properties: {
            key: "line-number--".concat(lineNumber),
            className: [
                'comment',
                'linenumber',
                'react-syntax-highlighter-line-number'
            ],
            style: inlineLineNumberStyle
        },
        children: [
            {
                type: 'text',
                value: lineNumber
            }
        ]
    };
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
    // minimally necessary styling for line numbers
    var defaultLineNumberStyle = {
        display: 'inline-block',
        minWidth: getEmWidthOfNumber(largestLineNumber),
        paddingRight: '1em',
        textAlign: 'right',
        userSelect: 'none'
    }; // prep custom styling
    var customLineNumberStyle = typeof lineNumberStyle === 'function' ? lineNumberStyle(lineNumber) : lineNumberStyle; // combine
    var assembledStyle = _objectSpread(_objectSpread({}, defaultLineNumberStyle), customLineNumberStyle);
    return assembledStyle;
}
function createLineElement(_ref3) {
    var children = _ref3.children, lineNumber = _ref3.lineNumber, lineNumberStyle = _ref3.lineNumberStyle, largestLineNumber = _ref3.largestLineNumber, showInlineLineNumbers = _ref3.showInlineLineNumbers, _ref3$lineProps = _ref3.lineProps, lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps, _ref3$className = _ref3.className, className = _ref3$className === void 0 ? [] : _ref3$className, showLineNumbers = _ref3.showLineNumbers, wrapLongLines = _ref3.wrapLongLines;
    var properties = typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps;
    properties['className'] = className;
    if (lineNumber && showInlineLineNumbers) {
        var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
        children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
    }
    if (wrapLongLines & showLineNumbers) {
        properties.style = _objectSpread(_objectSpread({}, properties.style), {}, {
            display: 'flex'
        });
    }
    return {
        type: 'element',
        tagName: 'span',
        properties: properties,
        children: children
    };
}
function flattenCodeTree(tree) {
    var className = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var newTree = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    for(var i = 0; i < tree.length; i++){
        var node = tree[i];
        if (node.type === 'text') {
            newTree.push(createLineElement({
                children: [
                    node
                ],
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$toConsumableArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(new Set(className))
            }));
        } else if (node.children) {
            var classNames = className.concat(node.properties.className);
            flattenCodeTree(node.children, classNames).forEach(function(i) {
                return newTree.push(i);
            });
        }
    }
    return newTree;
}
function processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines) {
    var _ref4;
    var tree = flattenCodeTree(codeTree.value);
    var newTree = [];
    var lastLineBreakIndex = -1;
    var index = 0;
    function createWrappedLine(children, lineNumber) {
        var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return createLineElement({
            children: children,
            lineNumber: lineNumber,
            lineNumberStyle: lineNumberStyle,
            largestLineNumber: largestLineNumber,
            showInlineLineNumbers: showInlineLineNumbers,
            lineProps: lineProps,
            className: className,
            showLineNumbers: showLineNumbers,
            wrapLongLines: wrapLongLines
        });
    }
    function createUnwrappedLine(children, lineNumber) {
        if (showLineNumbers && lineNumber && showInlineLineNumbers) {
            var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
            children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
        }
        return children;
    }
    function createLine(children, lineNumber) {
        var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
        return wrapLines || className.length > 0 ? createWrappedLine(children, lineNumber, className) : createUnwrappedLine(children, lineNumber);
    }
    var _loop = function _loop() {
        var node = tree[index];
        var value = node.children[0].value;
        var newLines = getNewLines(value);
        if (newLines) {
            var splitValue = value.split('\n');
            splitValue.forEach(function(text, i) {
                var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
                var newChild = {
                    type: 'text',
                    value: "".concat(text, "\n")
                }; // if it's the first line
                if (i === 0) {
                    var _children = tree.slice(lastLineBreakIndex + 1, index).concat(createLineElement({
                        children: [
                            newChild
                        ],
                        className: node.properties.className
                    }));
                    var _line = createLine(_children, lineNumber);
                    newTree.push(_line); // if it's the last line
                } else if (i === splitValue.length - 1) {
                    var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
                    var lastLineInPreviousSpan = {
                        type: 'text',
                        value: "".concat(text)
                    };
                    if (stringChild) {
                        var newElem = createLineElement({
                            children: [
                                lastLineInPreviousSpan
                            ],
                            className: node.properties.className
                        });
                        tree.splice(index + 1, 0, newElem);
                    } else {
                        var _children2 = [
                            lastLineInPreviousSpan
                        ];
                        var _line2 = createLine(_children2, lineNumber, node.properties.className);
                        newTree.push(_line2);
                    } // if it's neither the first nor the last line
                } else {
                    var _children3 = [
                        newChild
                    ];
                    var _line3 = createLine(_children3, lineNumber, node.properties.className);
                    newTree.push(_line3);
                }
            });
            lastLineBreakIndex = index;
        }
        index++;
    };
    while(index < tree.length){
        _loop();
    }
    if (lastLineBreakIndex !== tree.length - 1) {
        var children = tree.slice(lastLineBreakIndex + 1, tree.length);
        if (children && children.length) {
            var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
            var line = createLine(children, lineNumber);
            newTree.push(line);
        }
    }
    return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
    var rows = _ref5.rows, stylesheet = _ref5.stylesheet, useInlineStyles = _ref5.useInlineStyles;
    return rows.map(function(node, i) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$create$2d$element$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            node: node,
            stylesheet: stylesheet,
            useInlineStyles: useInlineStyles,
            key: "code-segement".concat(i)
        });
    });
} // only highlight.js has the highlightAuto method
function isHighlightJs(astGenerator) {
    return astGenerator && typeof astGenerator.highlightAuto !== 'undefined';
}
function getCodeTree(_ref6) {
    var astGenerator = _ref6.astGenerator, language = _ref6.language, code = _ref6.code, defaultCodeValue = _ref6.defaultCodeValue;
    // figure out whether we're using lowlight/highlight or refractor/prism
    // then attempt highlighting accordingly
    // lowlight/highlight?
    if (isHighlightJs(astGenerator)) {
        var hasLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$checkForListedLanguage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(astGenerator, language);
        if (language === 'text') {
            return {
                value: defaultCodeValue,
                language: 'text'
            };
        } else if (hasLanguage) {
            return astGenerator.highlight(language, code);
        } else {
            return astGenerator.highlightAuto(code);
        }
    } // must be refractor/prism, then
    try {
        return language && language !== 'text' ? {
            value: astGenerator.highlight(code, language)
        } : {
            value: defaultCodeValue
        };
    } catch (e) {
        return {
            value: defaultCodeValue
        };
    }
}
function __TURBOPACK__default__export__(defaultAstGenerator, defaultStyle) {
    return function SyntaxHighlighter(_ref7) {
        var language = _ref7.language, children = _ref7.children, _ref7$style = _ref7.style, style = _ref7$style === void 0 ? defaultStyle : _ref7$style, _ref7$customStyle = _ref7.customStyle, customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle, _ref7$codeTagProps = _ref7.codeTagProps, codeTagProps = _ref7$codeTagProps === void 0 ? {
            className: language ? "language-".concat(language) : undefined,
            style: _objectSpread(_objectSpread({}, style['code[class*="language-"]']), style["code[class*=\"language-".concat(language, "\"]")])
        } : _ref7$codeTagProps, _ref7$useInlineStyles = _ref7.useInlineStyles, useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles, _ref7$showLineNumbers = _ref7.showLineNumbers, showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers, _ref7$showInlineLineN = _ref7.showInlineLineNumbers, showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN, _ref7$startingLineNum = _ref7.startingLineNumber, startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum, lineNumberContainerStyle = _ref7.lineNumberContainerStyle, _ref7$lineNumberStyle = _ref7.lineNumberStyle, lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle, wrapLines = _ref7.wrapLines, _ref7$wrapLongLines = _ref7.wrapLongLines, wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines, _ref7$lineProps = _ref7.lineProps, lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps, renderer = _ref7.renderer, _ref7$PreTag = _ref7.PreTag, PreTag = _ref7$PreTag === void 0 ? 'pre' : _ref7$PreTag, _ref7$CodeTag = _ref7.CodeTag, CodeTag = _ref7$CodeTag === void 0 ? 'code' : _ref7$CodeTag, _ref7$code = _ref7.code, code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || '' : _ref7$code, astGenerator = _ref7.astGenerator, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$24$2e$7$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$objectWithoutProperties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_ref7, _excluded);
        astGenerator = astGenerator || defaultAstGenerator;
        var allLineNumbers = showLineNumbers ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(AllLineNumbers, {
            containerStyle: lineNumberContainerStyle,
            codeStyle: codeTagProps.style || {},
            numberStyle: lineNumberStyle,
            startingLineNumber: startingLineNumber,
            codeString: code
        }) : null;
        var defaultPreStyle = style.hljs || style['pre[class*="language-"]'] || {
            backgroundColor: '#fff'
        };
        var generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs';
        var preProps = useInlineStyles ? Object.assign({}, rest, {
            style: Object.assign({}, defaultPreStyle, customStyle)
        }) : Object.assign({}, rest, {
            className: rest.className ? "".concat(generatorClassName, " ").concat(rest.className) : generatorClassName,
            style: Object.assign({}, customStyle)
        });
        if (wrapLongLines) {
            codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
                whiteSpace: 'pre-wrap'
            });
        } else {
            codeTagProps.style = _objectSpread(_objectSpread({}, codeTagProps.style), {}, {
                whiteSpace: 'pre'
            });
        }
        if (!astGenerator) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PreTag, preProps, allLineNumbers, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CodeTag, codeTagProps, code));
        }
        /*
     * Some custom renderers rely on individual row elements so we need to turn wrapLines on
     * if renderer is provided and wrapLines is undefined.
     */ if (wrapLines === undefined && renderer || wrapLongLines) wrapLines = true;
        renderer = renderer || defaultRenderer;
        var defaultCodeValue = [
            {
                type: 'text',
                value: code
            }
        ];
        var codeTree = getCodeTree({
            astGenerator: astGenerator,
            language: language,
            code: code,
            defaultCodeValue: defaultCodeValue
        });
        if (codeTree.language === null) {
            codeTree.value = defaultCodeValue;
        } // determine largest line number so that we can force minWidth on all linenumber elements
        var largestLineNumber = codeTree.value.length + startingLineNumber;
        var rows = processLines(codeTree, wrapLines, lineProps, showLineNumbers, showInlineLineNumbers, startingLineNumber, largestLineNumber, lineNumberStyle, wrapLongLines);
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PreTag, preProps, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(CodeTag, codeTagProps, !showInlineLineNumbers && allLineNumbers, renderer({
            rows: rows,
            stylesheet: style,
            useInlineStyles: useInlineStyles
        })));
    };
}

})()),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/styles/prism/prism.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const __TURBOPACK__default__export__ = {
    "code[class*=\"language-\"]": {
        "color": "black",
        "background": "none",
        "textShadow": "0 1px white",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "black",
        "background": "#f5f2f0",
        "textShadow": "0 1px white",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#f5f2f0",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "slategray"
    },
    "prolog": {
        "color": "slategray"
    },
    "doctype": {
        "color": "slategray"
    },
    "cdata": {
        "color": "slategray"
    },
    "punctuation": {
        "color": "#999"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#905"
    },
    "tag": {
        "color": "#905"
    },
    "boolean": {
        "color": "#905"
    },
    "number": {
        "color": "#905"
    },
    "constant": {
        "color": "#905"
    },
    "symbol": {
        "color": "#905"
    },
    "deleted": {
        "color": "#905"
    },
    "selector": {
        "color": "#690"
    },
    "attr-name": {
        "color": "#690"
    },
    "string": {
        "color": "#690"
    },
    "char": {
        "color": "#690"
    },
    "builtin": {
        "color": "#690"
    },
    "inserted": {
        "color": "#690"
    },
    "operator": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    "entity": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)",
        "cursor": "help"
    },
    "url": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    ".language-css .token.string": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    ".style .token.string": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    "atrule": {
        "color": "#07a"
    },
    "attr-value": {
        "color": "#07a"
    },
    "keyword": {
        "color": "#07a"
    },
    "function": {
        "color": "#DD4A68"
    },
    "class-name": {
        "color": "#DD4A68"
    },
    "regex": {
        "color": "#e90"
    },
    "important": {
        "color": "#e90",
        "fontWeight": "bold"
    },
    "variable": {
        "color": "#e90"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};

})()),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/languages/prism/supported-languages.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

//
// This file has been auto-generated by the `npm run build-languages-prism` task
//
__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
const __TURBOPACK__default__export__ = [
    'abap',
    'abnf',
    'actionscript',
    'ada',
    'agda',
    'al',
    'antlr4',
    'apacheconf',
    'apex',
    'apl',
    'applescript',
    'aql',
    'arduino',
    'arff',
    'asciidoc',
    'asm6502',
    'asmatmel',
    'aspnet',
    'autohotkey',
    'autoit',
    'avisynth',
    'avro-idl',
    'bash',
    'basic',
    'batch',
    'bbcode',
    'bicep',
    'birb',
    'bison',
    'bnf',
    'brainfuck',
    'brightscript',
    'bro',
    'bsl',
    'c',
    'cfscript',
    'chaiscript',
    'cil',
    'clike',
    'clojure',
    'cmake',
    'cobol',
    'coffeescript',
    'concurnas',
    'coq',
    'cpp',
    'crystal',
    'csharp',
    'cshtml',
    'csp',
    'css-extras',
    'css',
    'csv',
    'cypher',
    'd',
    'dart',
    'dataweave',
    'dax',
    'dhall',
    'diff',
    'django',
    'dns-zone-file',
    'docker',
    'dot',
    'ebnf',
    'editorconfig',
    'eiffel',
    'ejs',
    'elixir',
    'elm',
    'erb',
    'erlang',
    'etlua',
    'excel-formula',
    'factor',
    'false',
    'firestore-security-rules',
    'flow',
    'fortran',
    'fsharp',
    'ftl',
    'gap',
    'gcode',
    'gdscript',
    'gedcom',
    'gherkin',
    'git',
    'glsl',
    'gml',
    'gn',
    'go-module',
    'go',
    'graphql',
    'groovy',
    'haml',
    'handlebars',
    'haskell',
    'haxe',
    'hcl',
    'hlsl',
    'hoon',
    'hpkp',
    'hsts',
    'http',
    'ichigojam',
    'icon',
    'icu-message-format',
    'idris',
    'iecst',
    'ignore',
    'inform7',
    'ini',
    'io',
    'j',
    'java',
    'javadoc',
    'javadoclike',
    'javascript',
    'javastacktrace',
    'jexl',
    'jolie',
    'jq',
    'js-extras',
    'js-templates',
    'jsdoc',
    'json',
    'json5',
    'jsonp',
    'jsstacktrace',
    'jsx',
    'julia',
    'keepalived',
    'keyman',
    'kotlin',
    'kumir',
    'kusto',
    'latex',
    'latte',
    'less',
    'lilypond',
    'liquid',
    'lisp',
    'livescript',
    'llvm',
    'log',
    'lolcode',
    'lua',
    'magma',
    'makefile',
    'markdown',
    'markup-templating',
    'markup',
    'matlab',
    'maxscript',
    'mel',
    'mermaid',
    'mizar',
    'mongodb',
    'monkey',
    'moonscript',
    'n1ql',
    'n4js',
    'nand2tetris-hdl',
    'naniscript',
    'nasm',
    'neon',
    'nevod',
    'nginx',
    'nim',
    'nix',
    'nsis',
    'objectivec',
    'ocaml',
    'opencl',
    'openqasm',
    'oz',
    'parigp',
    'parser',
    'pascal',
    'pascaligo',
    'pcaxis',
    'peoplecode',
    'perl',
    'php-extras',
    'php',
    'phpdoc',
    'plsql',
    'powerquery',
    'powershell',
    'processing',
    'prolog',
    'promql',
    'properties',
    'protobuf',
    'psl',
    'pug',
    'puppet',
    'pure',
    'purebasic',
    'purescript',
    'python',
    'q',
    'qml',
    'qore',
    'qsharp',
    'r',
    'racket',
    'reason',
    'regex',
    'rego',
    'renpy',
    'rest',
    'rip',
    'roboconf',
    'robotframework',
    'ruby',
    'rust',
    'sas',
    'sass',
    'scala',
    'scheme',
    'scss',
    'shell-session',
    'smali',
    'smalltalk',
    'smarty',
    'sml',
    'solidity',
    'solution-file',
    'soy',
    'sparql',
    'splunk-spl',
    'sqf',
    'sql',
    'squirrel',
    'stan',
    'stylus',
    'swift',
    'systemd',
    't4-cs',
    't4-templating',
    't4-vb',
    'tap',
    'tcl',
    'textile',
    'toml',
    'tremor',
    'tsx',
    'tt2',
    'turtle',
    'twig',
    'typescript',
    'typoscript',
    'unrealscript',
    'uorazor',
    'uri',
    'v',
    'vala',
    'vbnet',
    'velocity',
    'verilog',
    'vhdl',
    'vim',
    'visual-basic',
    'warpscript',
    'wasm',
    'web-idl',
    'wiki',
    'wolfram',
    'wren',
    'xeora',
    'xml-doc',
    'xojo',
    'xquery',
    'yaml',
    'yang',
    'zig'
];

})()),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/prism.js [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$highlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/highlight.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/styles/prism/prism.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$refractor$40$3$2e$6$2e$0$2f$node_modules$2f$refractor$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/refractor@3.6.0/node_modules/refractor/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$languages$2f$prism$2f$supported$2d$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/languages/prism/supported-languages.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
var highlighter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$highlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$refractor$40$3$2e$6$2e$0$2f$node_modules$2f$refractor$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$styles$2f$prism$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
highlighter.supportedLanguages = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$languages$2f$prism$2f$supported$2d$languages$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const __TURBOPACK__default__export__ = highlighter;

})()),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/prism.js [app-client] (ecmascript) <export default as Prism>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {
"use strict";

__turbopack_esm__({
    "Prism": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$react$2d$syntax$2d$highlighter$40$15$2e$5$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$react$2d$syntax$2d$highlighter$2f$dist$2f$esm$2f$prism$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/esm/prism.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coy.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "maxHeight": "inherit",
        "height": "inherit",
        "padding": "0 1em",
        "display": "block",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]": {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "position": "relative",
        "margin": ".5em 0",
        "overflow": "visible",
        "padding": "1px",
        "backgroundColor": "#fdfdfd",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginBottom": "1em"
    },
    "pre[class*=\"language-\"] > code": {
        "position": "relative",
        "zIndex": "1",
        "borderLeft": "10px solid #358ccb",
        "boxShadow": "-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf",
        "backgroundColor": "#fdfdfd",
        "backgroundImage": "linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",
        "backgroundSize": "3em 3em",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "local"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "backgroundColor": "#fdfdfd",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box",
        "marginBottom": "1em",
        "position": "relative",
        "padding": ".2em",
        "borderRadius": "0.3em",
        "color": "#c92c2c",
        "border": "1px solid rgba(0, 0, 0, 0.1)",
        "display": "inline",
        "whiteSpace": "normal"
    },
    "pre[class*=\"language-\"]:before": {
        "content": "''",
        "display": "block",
        "position": "absolute",
        "bottom": "0.75em",
        "left": "0.18em",
        "width": "40%",
        "height": "20%",
        "maxHeight": "13em",
        "boxShadow": "0px 13px 8px #979797",
        "WebkitTransform": "rotate(-2deg)",
        "MozTransform": "rotate(-2deg)",
        "msTransform": "rotate(-2deg)",
        "OTransform": "rotate(-2deg)",
        "transform": "rotate(-2deg)"
    },
    "pre[class*=\"language-\"]:after": {
        "content": "''",
        "display": "block",
        "position": "absolute",
        "bottom": "0.75em",
        "left": "auto",
        "width": "40%",
        "height": "20%",
        "maxHeight": "13em",
        "boxShadow": "0px 13px 8px #979797",
        "WebkitTransform": "rotate(2deg)",
        "MozTransform": "rotate(2deg)",
        "msTransform": "rotate(2deg)",
        "OTransform": "rotate(2deg)",
        "transform": "rotate(2deg)",
        "right": "0.75em"
    },
    "comment": {
        "color": "#7D8B99"
    },
    "block-comment": {
        "color": "#7D8B99"
    },
    "prolog": {
        "color": "#7D8B99"
    },
    "doctype": {
        "color": "#7D8B99"
    },
    "cdata": {
        "color": "#7D8B99"
    },
    "punctuation": {
        "color": "#5F6364"
    },
    "property": {
        "color": "#c92c2c"
    },
    "tag": {
        "color": "#c92c2c"
    },
    "boolean": {
        "color": "#c92c2c"
    },
    "number": {
        "color": "#c92c2c"
    },
    "function-name": {
        "color": "#c92c2c"
    },
    "constant": {
        "color": "#c92c2c"
    },
    "symbol": {
        "color": "#c92c2c"
    },
    "deleted": {
        "color": "#c92c2c"
    },
    "selector": {
        "color": "#2f9c0a"
    },
    "attr-name": {
        "color": "#2f9c0a"
    },
    "string": {
        "color": "#2f9c0a"
    },
    "char": {
        "color": "#2f9c0a"
    },
    "function": {
        "color": "#2f9c0a"
    },
    "builtin": {
        "color": "#2f9c0a"
    },
    "inserted": {
        "color": "#2f9c0a"
    },
    "operator": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "entity": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)",
        "cursor": "help"
    },
    "url": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "variable": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "atrule": {
        "color": "#1990b8"
    },
    "attr-value": {
        "color": "#1990b8"
    },
    "keyword": {
        "color": "#1990b8"
    },
    "class-name": {
        "color": "#1990b8"
    },
    "regex": {
        "color": "#e90"
    },
    "important": {
        "color": "#e90",
        "fontWeight": "normal"
    },
    ".language-css .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    ".style .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "pre[class*=\"language-\"].line-numbers.line-numbers": {
        "paddingLeft": "0"
    },
    "pre[class*=\"language-\"].line-numbers.line-numbers code": {
        "paddingLeft": "3.8em"
    },
    "pre[class*=\"language-\"].line-numbers.line-numbers .line-numbers-rows": {
        "left": "0"
    },
    "pre[class*=\"language-\"][data-line]": {
        "paddingTop": "0",
        "paddingBottom": "0",
        "paddingLeft": "0"
    },
    "pre[data-line] code": {
        "position": "relative",
        "paddingLeft": "4em"
    },
    "pre .line-highlight": {
        "marginTop": "0"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/dark.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "white",
        "background": "none",
        "textShadow": "0 -.1em .2em black",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "white",
        "background": "hsl(30, 20%, 25%)",
        "textShadow": "0 -.1em .2em black",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "border": ".3em solid hsl(30, 20%, 40%)",
        "borderRadius": ".5em",
        "boxShadow": "1px 1px .5em black inset"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "hsl(30, 20%, 25%)",
        "padding": ".15em .2em .05em",
        "borderRadius": ".3em",
        "border": ".13em solid hsl(30, 20%, 40%)",
        "boxShadow": "1px 1px .3em -.1em black inset",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "hsl(30, 20%, 50%)"
    },
    "prolog": {
        "color": "hsl(30, 20%, 50%)"
    },
    "doctype": {
        "color": "hsl(30, 20%, 50%)"
    },
    "cdata": {
        "color": "hsl(30, 20%, 50%)"
    },
    "punctuation": {
        "Opacity": ".7"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "hsl(350, 40%, 70%)"
    },
    "tag": {
        "color": "hsl(350, 40%, 70%)"
    },
    "boolean": {
        "color": "hsl(350, 40%, 70%)"
    },
    "number": {
        "color": "hsl(350, 40%, 70%)"
    },
    "constant": {
        "color": "hsl(350, 40%, 70%)"
    },
    "symbol": {
        "color": "hsl(350, 40%, 70%)"
    },
    "selector": {
        "color": "hsl(75, 70%, 60%)"
    },
    "attr-name": {
        "color": "hsl(75, 70%, 60%)"
    },
    "string": {
        "color": "hsl(75, 70%, 60%)"
    },
    "char": {
        "color": "hsl(75, 70%, 60%)"
    },
    "builtin": {
        "color": "hsl(75, 70%, 60%)"
    },
    "inserted": {
        "color": "hsl(75, 70%, 60%)"
    },
    "operator": {
        "color": "hsl(40, 90%, 60%)"
    },
    "entity": {
        "color": "hsl(40, 90%, 60%)",
        "cursor": "help"
    },
    "url": {
        "color": "hsl(40, 90%, 60%)"
    },
    ".language-css .token.string": {
        "color": "hsl(40, 90%, 60%)"
    },
    ".style .token.string": {
        "color": "hsl(40, 90%, 60%)"
    },
    "variable": {
        "color": "hsl(40, 90%, 60%)"
    },
    "atrule": {
        "color": "hsl(350, 40%, 70%)"
    },
    "attr-value": {
        "color": "hsl(350, 40%, 70%)"
    },
    "keyword": {
        "color": "hsl(350, 40%, 70%)"
    },
    "regex": {
        "color": "#e90"
    },
    "important": {
        "color": "#e90",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "deleted": {
        "color": "red"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/funky.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "black",
        "color": "white",
        "boxShadow": "-.3em 0 0 .3em black, .3em 0 0 .3em black"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": ".4em .8em",
        "margin": ".5em 0",
        "overflow": "auto",
        "background": "url('data:image/svg+xml;charset=utf-8,<svg%20version%3D\"1.1\"%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"100\"%20height%3D\"100\"%20fill%3D\"rgba(0%2C0%2C0%2C.2)\">%0D%0A<polygon%20points%3D\"0%2C50%2050%2C0%200%2C0\"%20%2F>%0D%0A<polygon%20points%3D\"0%2C100%2050%2C100%20100%2C50%20100%2C0\"%20%2F>%0D%0A<%2Fsvg>')",
        "backgroundSize": "1em 1em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".2em",
        "borderRadius": ".3em",
        "boxShadow": "none",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#aaa"
    },
    "prolog": {
        "color": "#aaa"
    },
    "doctype": {
        "color": "#aaa"
    },
    "cdata": {
        "color": "#aaa"
    },
    "punctuation": {
        "color": "#999"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#0cf"
    },
    "tag": {
        "color": "#0cf"
    },
    "boolean": {
        "color": "#0cf"
    },
    "number": {
        "color": "#0cf"
    },
    "constant": {
        "color": "#0cf"
    },
    "symbol": {
        "color": "#0cf"
    },
    "selector": {
        "color": "yellow"
    },
    "attr-name": {
        "color": "yellow"
    },
    "string": {
        "color": "yellow"
    },
    "char": {
        "color": "yellow"
    },
    "builtin": {
        "color": "yellow"
    },
    "operator": {
        "color": "yellowgreen"
    },
    "entity": {
        "color": "yellowgreen",
        "cursor": "help"
    },
    "url": {
        "color": "yellowgreen"
    },
    ".language-css .token.string": {
        "color": "yellowgreen"
    },
    "variable": {
        "color": "yellowgreen"
    },
    "inserted": {
        "color": "yellowgreen"
    },
    "atrule": {
        "color": "deeppink"
    },
    "attr-value": {
        "color": "deeppink"
    },
    "keyword": {
        "color": "deeppink"
    },
    "regex": {
        "color": "orange"
    },
    "important": {
        "color": "orange",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "deleted": {
        "color": "red"
    },
    "pre.diff-highlight.diff-highlight > code .token.deleted:not(.prefix)": {
        "backgroundColor": "rgba(255, 0, 0, .3)",
        "display": "inline"
    },
    "pre > code.diff-highlight.diff-highlight .token.deleted:not(.prefix)": {
        "backgroundColor": "rgba(255, 0, 0, .3)",
        "display": "inline"
    },
    "pre.diff-highlight.diff-highlight > code .token.inserted:not(.prefix)": {
        "backgroundColor": "rgba(0, 255, 128, .3)",
        "display": "inline"
    },
    "pre > code.diff-highlight.diff-highlight .token.inserted:not(.prefix)": {
        "backgroundColor": "rgba(0, 255, 128, .3)",
        "display": "inline"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/okaidia.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "none",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "#272822",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#272822",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#8292a2"
    },
    "prolog": {
        "color": "#8292a2"
    },
    "doctype": {
        "color": "#8292a2"
    },
    "cdata": {
        "color": "#8292a2"
    },
    "punctuation": {
        "color": "#f8f8f2"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#f92672"
    },
    "tag": {
        "color": "#f92672"
    },
    "constant": {
        "color": "#f92672"
    },
    "symbol": {
        "color": "#f92672"
    },
    "deleted": {
        "color": "#f92672"
    },
    "boolean": {
        "color": "#ae81ff"
    },
    "number": {
        "color": "#ae81ff"
    },
    "selector": {
        "color": "#a6e22e"
    },
    "attr-name": {
        "color": "#a6e22e"
    },
    "string": {
        "color": "#a6e22e"
    },
    "char": {
        "color": "#a6e22e"
    },
    "builtin": {
        "color": "#a6e22e"
    },
    "inserted": {
        "color": "#a6e22e"
    },
    "operator": {
        "color": "#f8f8f2"
    },
    "entity": {
        "color": "#f8f8f2",
        "cursor": "help"
    },
    "url": {
        "color": "#f8f8f2"
    },
    ".language-css .token.string": {
        "color": "#f8f8f2"
    },
    ".style .token.string": {
        "color": "#f8f8f2"
    },
    "variable": {
        "color": "#f8f8f2"
    },
    "atrule": {
        "color": "#e6db74"
    },
    "attr-value": {
        "color": "#e6db74"
    },
    "function": {
        "color": "#e6db74"
    },
    "class-name": {
        "color": "#e6db74"
    },
    "keyword": {
        "color": "#66d9ef"
    },
    "regex": {
        "color": "#fd971f"
    },
    "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#657b83",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#657b83",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "backgroundColor": "#fdf6e3"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#073642"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#073642"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#073642"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#073642"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#073642"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#073642"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#073642"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#073642"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "backgroundColor": "#fdf6e3",
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#93a1a1"
    },
    "prolog": {
        "color": "#93a1a1"
    },
    "doctype": {
        "color": "#93a1a1"
    },
    "cdata": {
        "color": "#93a1a1"
    },
    "punctuation": {
        "color": "#586e75"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#268bd2"
    },
    "tag": {
        "color": "#268bd2"
    },
    "boolean": {
        "color": "#268bd2"
    },
    "number": {
        "color": "#268bd2"
    },
    "constant": {
        "color": "#268bd2"
    },
    "symbol": {
        "color": "#268bd2"
    },
    "deleted": {
        "color": "#268bd2"
    },
    "selector": {
        "color": "#2aa198"
    },
    "attr-name": {
        "color": "#2aa198"
    },
    "string": {
        "color": "#2aa198"
    },
    "char": {
        "color": "#2aa198"
    },
    "builtin": {
        "color": "#2aa198"
    },
    "url": {
        "color": "#2aa198"
    },
    "inserted": {
        "color": "#2aa198"
    },
    "entity": {
        "color": "#657b83",
        "background": "#eee8d5",
        "cursor": "help"
    },
    "atrule": {
        "color": "#859900"
    },
    "attr-value": {
        "color": "#859900"
    },
    "keyword": {
        "color": "#859900"
    },
    "function": {
        "color": "#b58900"
    },
    "class-name": {
        "color": "#b58900"
    },
    "regex": {
        "color": "#cb4b16"
    },
    "important": {
        "color": "#cb4b16",
        "fontWeight": "bold"
    },
    "variable": {
        "color": "#cb4b16"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/tomorrow.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#ccc",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#ccc",
        "background": "#2d2d2d",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#2d2d2d",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#999"
    },
    "block-comment": {
        "color": "#999"
    },
    "prolog": {
        "color": "#999"
    },
    "doctype": {
        "color": "#999"
    },
    "cdata": {
        "color": "#999"
    },
    "punctuation": {
        "color": "#ccc"
    },
    "tag": {
        "color": "#e2777a"
    },
    "attr-name": {
        "color": "#e2777a"
    },
    "namespace": {
        "color": "#e2777a"
    },
    "deleted": {
        "color": "#e2777a"
    },
    "function-name": {
        "color": "#6196cc"
    },
    "boolean": {
        "color": "#f08d49"
    },
    "number": {
        "color": "#f08d49"
    },
    "function": {
        "color": "#f08d49"
    },
    "property": {
        "color": "#f8c555"
    },
    "class-name": {
        "color": "#f8c555"
    },
    "constant": {
        "color": "#f8c555"
    },
    "symbol": {
        "color": "#f8c555"
    },
    "selector": {
        "color": "#cc99cd"
    },
    "important": {
        "color": "#cc99cd",
        "fontWeight": "bold"
    },
    "atrule": {
        "color": "#cc99cd"
    },
    "keyword": {
        "color": "#cc99cd"
    },
    "builtin": {
        "color": "#cc99cd"
    },
    "string": {
        "color": "#7ec699"
    },
    "char": {
        "color": "#7ec699"
    },
    "attr-value": {
        "color": "#7ec699"
    },
    "regex": {
        "color": "#7ec699"
    },
    "variable": {
        "color": "#7ec699"
    },
    "operator": {
        "color": "#67cdcc"
    },
    "entity": {
        "color": "#67cdcc",
        "cursor": "help"
    },
    "url": {
        "color": "#67cdcc"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "inserted": {
        "color": "green"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/twilight.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "white",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "textShadow": "0 -.1em .2em black",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "white",
        "background": "hsl(0, 0%, 8%)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "textShadow": "0 -.1em .2em black",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "borderRadius": ".5em",
        "border": ".3em solid hsl(0, 0%, 33%)",
        "boxShadow": "1px 1px .5em black inset",
        "margin": ".5em 0",
        "overflow": "auto",
        "padding": "1em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "hsl(0, 0%, 8%)",
        "borderRadius": ".3em",
        "border": ".13em solid hsl(0, 0%, 33%)",
        "boxShadow": "1px 1px .3em -.1em black inset",
        "padding": ".15em .2em .05em",
        "whiteSpace": "normal"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "hsla(0, 0%, 93%, 0.15)",
        "textShadow": "none"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "hsla(0, 0%, 93%, 0.15)",
        "textShadow": "none"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "hsla(0, 0%, 93%, 0.15)"
    },
    "comment": {
        "color": "hsl(0, 0%, 47%)"
    },
    "prolog": {
        "color": "hsl(0, 0%, 47%)"
    },
    "doctype": {
        "color": "hsl(0, 0%, 47%)"
    },
    "cdata": {
        "color": "hsl(0, 0%, 47%)"
    },
    "punctuation": {
        "Opacity": ".7"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "hsl(14, 58%, 55%)"
    },
    "boolean": {
        "color": "hsl(14, 58%, 55%)"
    },
    "number": {
        "color": "hsl(14, 58%, 55%)"
    },
    "deleted": {
        "color": "hsl(14, 58%, 55%)"
    },
    "keyword": {
        "color": "hsl(53, 89%, 79%)"
    },
    "property": {
        "color": "hsl(53, 89%, 79%)"
    },
    "selector": {
        "color": "hsl(53, 89%, 79%)"
    },
    "constant": {
        "color": "hsl(53, 89%, 79%)"
    },
    "symbol": {
        "color": "hsl(53, 89%, 79%)"
    },
    "builtin": {
        "color": "hsl(53, 89%, 79%)"
    },
    "attr-name": {
        "color": "hsl(76, 21%, 52%)"
    },
    "attr-value": {
        "color": "hsl(76, 21%, 52%)"
    },
    "string": {
        "color": "hsl(76, 21%, 52%)"
    },
    "char": {
        "color": "hsl(76, 21%, 52%)"
    },
    "operator": {
        "color": "hsl(76, 21%, 52%)"
    },
    "entity": {
        "color": "hsl(76, 21%, 52%)",
        "cursor": "help"
    },
    "url": {
        "color": "hsl(76, 21%, 52%)"
    },
    ".language-css .token.string": {
        "color": "hsl(76, 21%, 52%)"
    },
    ".style .token.string": {
        "color": "hsl(76, 21%, 52%)"
    },
    "variable": {
        "color": "hsl(76, 21%, 52%)"
    },
    "inserted": {
        "color": "hsl(76, 21%, 52%)"
    },
    "atrule": {
        "color": "hsl(218, 22%, 55%)"
    },
    "regex": {
        "color": "hsl(42, 75%, 65%)"
    },
    "important": {
        "color": "hsl(42, 75%, 65%)",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    ".language-markup .token.tag": {
        "color": "hsl(33, 33%, 52%)"
    },
    ".language-markup .token.attr-name": {
        "color": "hsl(33, 33%, 52%)"
    },
    ".language-markup .token.punctuation": {
        "color": "hsl(33, 33%, 52%)"
    },
    "": {
        "position": "relative",
        "zIndex": "1"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, hsla(0, 0%, 33%, .1) 70%, hsla(0, 0%, 33%, 0))",
        "borderBottom": "1px dashed hsl(0, 0%, 33%)",
        "borderTop": "1px dashed hsl(0, 0%, 33%)",
        "marginTop": "0.75em",
        "zIndex": "0"
    },
    ".line-highlight.line-highlight:before": {
        "backgroundColor": "hsl(215, 15%, 59%)",
        "color": "hsl(24, 20%, 95%)"
    },
    ".line-highlight.line-highlight[data-end]:after": {
        "backgroundColor": "hsl(215, 15%, 59%)",
        "color": "hsl(24, 20%, 95%)"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/prism.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "black",
        "background": "none",
        "textShadow": "0 1px white",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "black",
        "background": "#f5f2f0",
        "textShadow": "0 1px white",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#b3d4fc"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#f5f2f0",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "slategray"
    },
    "prolog": {
        "color": "slategray"
    },
    "doctype": {
        "color": "slategray"
    },
    "cdata": {
        "color": "slategray"
    },
    "punctuation": {
        "color": "#999"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#905"
    },
    "tag": {
        "color": "#905"
    },
    "boolean": {
        "color": "#905"
    },
    "number": {
        "color": "#905"
    },
    "constant": {
        "color": "#905"
    },
    "symbol": {
        "color": "#905"
    },
    "deleted": {
        "color": "#905"
    },
    "selector": {
        "color": "#690"
    },
    "attr-name": {
        "color": "#690"
    },
    "string": {
        "color": "#690"
    },
    "char": {
        "color": "#690"
    },
    "builtin": {
        "color": "#690"
    },
    "inserted": {
        "color": "#690"
    },
    "operator": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    "entity": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)",
        "cursor": "help"
    },
    "url": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    ".language-css .token.string": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    ".style .token.string": {
        "color": "#9a6e3a",
        "background": "hsla(0, 0%, 100%, .5)"
    },
    "atrule": {
        "color": "#07a"
    },
    "attr-value": {
        "color": "#07a"
    },
    "keyword": {
        "color": "#07a"
    },
    "function": {
        "color": "#DD4A68"
    },
    "class-name": {
        "color": "#DD4A68"
    },
    "regex": {
        "color": "#e90"
    },
    "important": {
        "color": "#e90",
        "fontWeight": "bold"
    },
    "variable": {
        "color": "#e90"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "#2b2b2b",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#2b2b2b",
        "padding": "0.1em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#d4d0ab"
    },
    "prolog": {
        "color": "#d4d0ab"
    },
    "doctype": {
        "color": "#d4d0ab"
    },
    "cdata": {
        "color": "#d4d0ab"
    },
    "punctuation": {
        "color": "#fefefe"
    },
    "property": {
        "color": "#ffa07a"
    },
    "tag": {
        "color": "#ffa07a"
    },
    "constant": {
        "color": "#ffa07a"
    },
    "symbol": {
        "color": "#ffa07a"
    },
    "deleted": {
        "color": "#ffa07a"
    },
    "boolean": {
        "color": "#00e0e0"
    },
    "number": {
        "color": "#00e0e0"
    },
    "selector": {
        "color": "#abe338"
    },
    "attr-name": {
        "color": "#abe338"
    },
    "string": {
        "color": "#abe338"
    },
    "char": {
        "color": "#abe338"
    },
    "builtin": {
        "color": "#abe338"
    },
    "inserted": {
        "color": "#abe338"
    },
    "operator": {
        "color": "#00e0e0"
    },
    "entity": {
        "color": "#00e0e0",
        "cursor": "help"
    },
    "url": {
        "color": "#00e0e0"
    },
    ".language-css .token.string": {
        "color": "#00e0e0"
    },
    ".style .token.string": {
        "color": "#00e0e0"
    },
    "variable": {
        "color": "#00e0e0"
    },
    "atrule": {
        "color": "#ffd700"
    },
    "attr-value": {
        "color": "#ffd700"
    },
    "function": {
        "color": "#ffd700"
    },
    "keyword": {
        "color": "#00e0e0"
    },
    "regex": {
        "color": "#ffd700"
    },
    "important": {
        "color": "#ffd700",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#c5c8c6",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#c5c8c6",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "background": "#1d1f21"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#1d1f21",
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#7C7C7C"
    },
    "prolog": {
        "color": "#7C7C7C"
    },
    "doctype": {
        "color": "#7C7C7C"
    },
    "cdata": {
        "color": "#7C7C7C"
    },
    "punctuation": {
        "color": "#c5c8c6"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#96CBFE"
    },
    "keyword": {
        "color": "#96CBFE"
    },
    "tag": {
        "color": "#96CBFE"
    },
    "class-name": {
        "color": "#FFFFB6",
        "textDecoration": "underline"
    },
    "boolean": {
        "color": "#99CC99"
    },
    "constant": {
        "color": "#99CC99"
    },
    "symbol": {
        "color": "#f92672"
    },
    "deleted": {
        "color": "#f92672"
    },
    "number": {
        "color": "#FF73FD"
    },
    "selector": {
        "color": "#A8FF60"
    },
    "attr-name": {
        "color": "#A8FF60"
    },
    "string": {
        "color": "#A8FF60"
    },
    "char": {
        "color": "#A8FF60"
    },
    "builtin": {
        "color": "#A8FF60"
    },
    "inserted": {
        "color": "#A8FF60"
    },
    "variable": {
        "color": "#C6C5FE"
    },
    "operator": {
        "color": "#EDEDED"
    },
    "entity": {
        "color": "#FFFFB6",
        "cursor": "help"
    },
    "url": {
        "color": "#96CBFE"
    },
    ".language-css .token.string": {
        "color": "#87C38A"
    },
    ".style .token.string": {
        "color": "#87C38A"
    },
    "atrule": {
        "color": "#F9EE98"
    },
    "attr-value": {
        "color": "#F9EE98"
    },
    "function": {
        "color": "#DAD085"
    },
    "regex": {
        "color": "#E9C062"
    },
    "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#f5f7ff",
        "color": "#5e6687"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#f5f7ff",
        "color": "#5e6687",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#dfe2f1"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#898ea4"
    },
    "prolog": {
        "color": "#898ea4"
    },
    "doctype": {
        "color": "#898ea4"
    },
    "cdata": {
        "color": "#898ea4"
    },
    "punctuation": {
        "color": "#5e6687"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "operator": {
        "color": "#c76b29"
    },
    "boolean": {
        "color": "#c76b29"
    },
    "number": {
        "color": "#c76b29"
    },
    "property": {
        "color": "#c08b30"
    },
    "tag": {
        "color": "#3d8fd1"
    },
    "string": {
        "color": "#22a2c9"
    },
    "selector": {
        "color": "#6679cc"
    },
    "attr-name": {
        "color": "#c76b29"
    },
    "entity": {
        "color": "#22a2c9",
        "cursor": "help"
    },
    "url": {
        "color": "#22a2c9"
    },
    ".language-css .token.string": {
        "color": "#22a2c9"
    },
    ".style .token.string": {
        "color": "#22a2c9"
    },
    "attr-value": {
        "color": "#ac9739"
    },
    "keyword": {
        "color": "#ac9739"
    },
    "control": {
        "color": "#ac9739"
    },
    "directive": {
        "color": "#ac9739"
    },
    "unit": {
        "color": "#ac9739"
    },
    "statement": {
        "color": "#22a2c9"
    },
    "regex": {
        "color": "#22a2c9"
    },
    "atrule": {
        "color": "#22a2c9"
    },
    "placeholder": {
        "color": "#3d8fd1"
    },
    "variable": {
        "color": "#3d8fd1"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #202746",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#c94922"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": "0.4em solid #c94922",
        "OutlineOffset": ".4em"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#dfe2f1"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#979db4"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0))"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/cb.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#fff",
        "textShadow": "0 1px 1px #000",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "whiteSpace": "pre",
        "wordWrap": "normal",
        "lineHeight": "1.4",
        "background": "none",
        "border": "0",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#fff",
        "textShadow": "0 1px 1px #000",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "whiteSpace": "pre",
        "wordWrap": "normal",
        "lineHeight": "1.4",
        "background": "#222",
        "border": "0",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "15px",
        "margin": "1em 0",
        "overflow": "auto",
        "MozBorderRadius": "8px",
        "WebkitBorderRadius": "8px",
        "borderRadius": "8px"
    },
    "pre[class*=\"language-\"] code": {
        "float": "left",
        "padding": "0 15px 0 0"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#222",
        "padding": "5px 10px",
        "lineHeight": "1",
        "MozBorderRadius": "3px",
        "WebkitBorderRadius": "3px",
        "borderRadius": "3px"
    },
    "comment": {
        "color": "#797979"
    },
    "prolog": {
        "color": "#797979"
    },
    "doctype": {
        "color": "#797979"
    },
    "cdata": {
        "color": "#797979"
    },
    "selector": {
        "color": "#fff"
    },
    "operator": {
        "color": "#fff"
    },
    "punctuation": {
        "color": "#fff"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#ffd893"
    },
    "boolean": {
        "color": "#ffd893"
    },
    "atrule": {
        "color": "#B0C975"
    },
    "attr-value": {
        "color": "#B0C975"
    },
    "hex": {
        "color": "#B0C975"
    },
    "string": {
        "color": "#B0C975"
    },
    "property": {
        "color": "#c27628"
    },
    "entity": {
        "color": "#c27628",
        "cursor": "help"
    },
    "url": {
        "color": "#c27628"
    },
    "attr-name": {
        "color": "#c27628"
    },
    "keyword": {
        "color": "#c27628"
    },
    "regex": {
        "color": "#9B71C6"
    },
    "function": {
        "color": "#e5a638"
    },
    "constant": {
        "color": "#e5a638"
    },
    "variable": {
        "color": "#fdfba8"
    },
    "number": {
        "color": "#8799B0"
    },
    "important": {
        "color": "#E45734"
    },
    "deliminator": {
        "color": "#E45734"
    },
    ".line-highlight.line-highlight": {
        "background": "rgba(255, 255, 255, .2)"
    },
    ".line-highlight.line-highlight:before": {
        "top": ".3em",
        "backgroundColor": "rgba(255, 255, 255, .3)",
        "color": "#fff",
        "MozBorderRadius": "8px",
        "WebkitBorderRadius": "8px",
        "borderRadius": "8px"
    },
    ".line-highlight.line-highlight[data-end]:after": {
        "top": ".3em",
        "backgroundColor": "rgba(255, 255, 255, .3)",
        "color": "#fff",
        "MozBorderRadius": "8px",
        "WebkitBorderRadius": "8px",
        "borderRadius": "8px"
    },
    ".line-numbers .line-numbers-rows > span": {
        "borderRight": "3px #d9d336 solid"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coldark-cold.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#111b27",
        "background": "none",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#111b27",
        "background": "#e3eaf2",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#8da1b9"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#8da1b9"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#8da1b9"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#8da1b9"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#8da1b9"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#8da1b9"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#8da1b9"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#8da1b9"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#e3eaf2",
        "padding": "0.1em 0.3em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#3c526d"
    },
    "prolog": {
        "color": "#3c526d"
    },
    "doctype": {
        "color": "#3c526d"
    },
    "cdata": {
        "color": "#3c526d"
    },
    "punctuation": {
        "color": "#111b27"
    },
    "delimiter.important": {
        "color": "#006d6d",
        "fontWeight": "inherit"
    },
    "selector.parent": {
        "color": "#006d6d"
    },
    "tag": {
        "color": "#006d6d"
    },
    "tag.punctuation": {
        "color": "#006d6d"
    },
    "attr-name": {
        "color": "#755f00"
    },
    "boolean": {
        "color": "#755f00"
    },
    "boolean.important": {
        "color": "#755f00"
    },
    "number": {
        "color": "#755f00"
    },
    "constant": {
        "color": "#755f00"
    },
    "selector.attribute": {
        "color": "#755f00"
    },
    "class-name": {
        "color": "#005a8e"
    },
    "key": {
        "color": "#005a8e"
    },
    "parameter": {
        "color": "#005a8e"
    },
    "property": {
        "color": "#005a8e"
    },
    "property-access": {
        "color": "#005a8e"
    },
    "variable": {
        "color": "#005a8e"
    },
    "attr-value": {
        "color": "#116b00"
    },
    "inserted": {
        "color": "#116b00"
    },
    "color": {
        "color": "#116b00"
    },
    "selector.value": {
        "color": "#116b00"
    },
    "string": {
        "color": "#116b00"
    },
    "string.url-link": {
        "color": "#116b00"
    },
    "builtin": {
        "color": "#af00af"
    },
    "keyword-array": {
        "color": "#af00af"
    },
    "package": {
        "color": "#af00af"
    },
    "regex": {
        "color": "#af00af"
    },
    "function": {
        "color": "#7c00aa"
    },
    "selector.class": {
        "color": "#7c00aa"
    },
    "selector.id": {
        "color": "#7c00aa"
    },
    "atrule.rule": {
        "color": "#a04900"
    },
    "combinator": {
        "color": "#a04900"
    },
    "keyword": {
        "color": "#a04900"
    },
    "operator": {
        "color": "#a04900"
    },
    "pseudo-class": {
        "color": "#a04900"
    },
    "pseudo-element": {
        "color": "#a04900"
    },
    "selector": {
        "color": "#a04900"
    },
    "unit": {
        "color": "#a04900"
    },
    "deleted": {
        "color": "#c22f2e"
    },
    "important": {
        "color": "#c22f2e",
        "fontWeight": "bold"
    },
    "keyword-this": {
        "color": "#005a8e",
        "fontWeight": "bold"
    },
    "this": {
        "color": "#005a8e",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "entity": {
        "cursor": "help"
    },
    ".language-markdown .token.title": {
        "color": "#005a8e",
        "fontWeight": "bold"
    },
    ".language-markdown .token.title .token.punctuation": {
        "color": "#005a8e",
        "fontWeight": "bold"
    },
    ".language-markdown .token.blockquote.punctuation": {
        "color": "#af00af"
    },
    ".language-markdown .token.code": {
        "color": "#006d6d"
    },
    ".language-markdown .token.hr.punctuation": {
        "color": "#005a8e"
    },
    ".language-markdown .token.url > .token.content": {
        "color": "#116b00"
    },
    ".language-markdown .token.url-link": {
        "color": "#755f00"
    },
    ".language-markdown .token.list.punctuation": {
        "color": "#af00af"
    },
    ".language-markdown .token.table-header": {
        "color": "#111b27"
    },
    ".language-json .token.operator": {
        "color": "#111b27"
    },
    ".language-scss .token.variable": {
        "color": "#006d6d"
    },
    "token.tab:not(:empty):before": {
        "color": "#3c526d"
    },
    "token.cr:before": {
        "color": "#3c526d"
    },
    "token.lf:before": {
        "color": "#3c526d"
    },
    "token.space:before": {
        "color": "#3c526d"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
        "color": "#e3eaf2",
        "background": "#005a8e"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
        "color": "#e3eaf2",
        "background": "#005a8e"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
        "color": "#e3eaf2",
        "background": "#005a8eda",
        "textDecoration": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
        "color": "#e3eaf2",
        "background": "#005a8eda",
        "textDecoration": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
        "color": "#e3eaf2",
        "background": "#005a8eda",
        "textDecoration": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
        "color": "#e3eaf2",
        "background": "#005a8eda",
        "textDecoration": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
        "color": "#e3eaf2",
        "background": "#3c526d"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
        "color": "#e3eaf2",
        "background": "#3c526d"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
        "color": "#e3eaf2",
        "background": "#3c526d"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, #8da1b92f 70%, #8da1b925)"
    },
    ".line-highlight.line-highlight:before": {
        "backgroundColor": "#3c526d",
        "color": "#e3eaf2",
        "boxShadow": "0 1px #8da1b9"
    },
    ".line-highlight.line-highlight[data-end]:after": {
        "backgroundColor": "#3c526d",
        "color": "#e3eaf2",
        "boxShadow": "0 1px #8da1b9"
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
        "backgroundColor": "#3c526d1f"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRight": "1px solid #8da1b97a",
        "background": "#d0dae77a"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#3c526dda"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
        "color": "#755f00"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
        "color": "#755f00"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
        "color": "#755f00"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
        "color": "#af00af"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
        "color": "#af00af"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
        "color": "#af00af"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
        "color": "#005a8e"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
        "color": "#005a8e"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
        "color": "#005a8e"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
        "color": "#7c00aa"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
        "color": "#7c00aa"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
        "color": "#7c00aa"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
        "backgroundColor": "#c22f2e1f"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
        "backgroundColor": "#c22f2e1f"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
        "backgroundColor": "#116b001f"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
        "backgroundColor": "#116b001f"
    },
    ".command-line .command-line-prompt": {
        "borderRight": "1px solid #8da1b97a"
    },
    ".command-line .command-line-prompt > span:before": {
        "color": "#3c526dda"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#e3eaf2",
        "background": "none",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#e3eaf2",
        "background": "#111b27",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#3c526d"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#3c526d"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#3c526d"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#3c526d"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#3c526d"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#3c526d"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#3c526d"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#3c526d"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#111b27",
        "padding": "0.1em 0.3em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#8da1b9"
    },
    "prolog": {
        "color": "#8da1b9"
    },
    "doctype": {
        "color": "#8da1b9"
    },
    "cdata": {
        "color": "#8da1b9"
    },
    "punctuation": {
        "color": "#e3eaf2"
    },
    "delimiter.important": {
        "color": "#66cccc",
        "fontWeight": "inherit"
    },
    "selector.parent": {
        "color": "#66cccc"
    },
    "tag": {
        "color": "#66cccc"
    },
    "tag.punctuation": {
        "color": "#66cccc"
    },
    "attr-name": {
        "color": "#e6d37a"
    },
    "boolean": {
        "color": "#e6d37a"
    },
    "boolean.important": {
        "color": "#e6d37a"
    },
    "number": {
        "color": "#e6d37a"
    },
    "constant": {
        "color": "#e6d37a"
    },
    "selector.attribute": {
        "color": "#e6d37a"
    },
    "class-name": {
        "color": "#6cb8e6"
    },
    "key": {
        "color": "#6cb8e6"
    },
    "parameter": {
        "color": "#6cb8e6"
    },
    "property": {
        "color": "#6cb8e6"
    },
    "property-access": {
        "color": "#6cb8e6"
    },
    "variable": {
        "color": "#6cb8e6"
    },
    "attr-value": {
        "color": "#91d076"
    },
    "inserted": {
        "color": "#91d076"
    },
    "color": {
        "color": "#91d076"
    },
    "selector.value": {
        "color": "#91d076"
    },
    "string": {
        "color": "#91d076"
    },
    "string.url-link": {
        "color": "#91d076"
    },
    "builtin": {
        "color": "#f4adf4"
    },
    "keyword-array": {
        "color": "#f4adf4"
    },
    "package": {
        "color": "#f4adf4"
    },
    "regex": {
        "color": "#f4adf4"
    },
    "function": {
        "color": "#c699e3"
    },
    "selector.class": {
        "color": "#c699e3"
    },
    "selector.id": {
        "color": "#c699e3"
    },
    "atrule.rule": {
        "color": "#e9ae7e"
    },
    "combinator": {
        "color": "#e9ae7e"
    },
    "keyword": {
        "color": "#e9ae7e"
    },
    "operator": {
        "color": "#e9ae7e"
    },
    "pseudo-class": {
        "color": "#e9ae7e"
    },
    "pseudo-element": {
        "color": "#e9ae7e"
    },
    "selector": {
        "color": "#e9ae7e"
    },
    "unit": {
        "color": "#e9ae7e"
    },
    "deleted": {
        "color": "#cd6660"
    },
    "important": {
        "color": "#cd6660",
        "fontWeight": "bold"
    },
    "keyword-this": {
        "color": "#6cb8e6",
        "fontWeight": "bold"
    },
    "this": {
        "color": "#6cb8e6",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "entity": {
        "cursor": "help"
    },
    ".language-markdown .token.title": {
        "color": "#6cb8e6",
        "fontWeight": "bold"
    },
    ".language-markdown .token.title .token.punctuation": {
        "color": "#6cb8e6",
        "fontWeight": "bold"
    },
    ".language-markdown .token.blockquote.punctuation": {
        "color": "#f4adf4"
    },
    ".language-markdown .token.code": {
        "color": "#66cccc"
    },
    ".language-markdown .token.hr.punctuation": {
        "color": "#6cb8e6"
    },
    ".language-markdown .token.url .token.content": {
        "color": "#91d076"
    },
    ".language-markdown .token.url-link": {
        "color": "#e6d37a"
    },
    ".language-markdown .token.list.punctuation": {
        "color": "#f4adf4"
    },
    ".language-markdown .token.table-header": {
        "color": "#e3eaf2"
    },
    ".language-json .token.operator": {
        "color": "#e3eaf2"
    },
    ".language-scss .token.variable": {
        "color": "#66cccc"
    },
    "token.tab:not(:empty):before": {
        "color": "#8da1b9"
    },
    "token.cr:before": {
        "color": "#8da1b9"
    },
    "token.lf:before": {
        "color": "#8da1b9"
    },
    "token.space:before": {
        "color": "#8da1b9"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
        "color": "#111b27",
        "background": "#6cb8e6"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
        "color": "#111b27",
        "background": "#6cb8e6"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
        "color": "#111b27",
        "background": "#6cb8e6da",
        "textDecoration": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
        "color": "#111b27",
        "background": "#6cb8e6da",
        "textDecoration": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
        "color": "#111b27",
        "background": "#6cb8e6da",
        "textDecoration": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
        "color": "#111b27",
        "background": "#6cb8e6da",
        "textDecoration": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
        "color": "#111b27",
        "background": "#8da1b9"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
        "color": "#111b27",
        "background": "#8da1b9"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
        "color": "#111b27",
        "background": "#8da1b9"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, #3c526d5f 70%, #3c526d55)"
    },
    ".line-highlight.line-highlight:before": {
        "backgroundColor": "#8da1b9",
        "color": "#111b27",
        "boxShadow": "0 1px #3c526d"
    },
    ".line-highlight.line-highlight[data-end]:after": {
        "backgroundColor": "#8da1b9",
        "color": "#111b27",
        "boxShadow": "0 1px #3c526d"
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
        "backgroundColor": "#8da1b918"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRight": "1px solid #0b121b",
        "background": "#0b121b7a"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#8da1b9da"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
        "color": "#e6d37a"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
        "color": "#e6d37a"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
        "color": "#e6d37a"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
        "color": "#f4adf4"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
        "color": "#f4adf4"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
        "color": "#f4adf4"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
        "color": "#6cb8e6"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
        "color": "#6cb8e6"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
        "color": "#6cb8e6"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
        "color": "#c699e3"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
        "color": "#c699e3"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
        "color": "#c699e3"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
        "backgroundColor": "#cd66601f"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
        "backgroundColor": "#cd66601f"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
        "backgroundColor": "#91d0761f"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
        "backgroundColor": "#91d0761f"
    },
    ".command-line .command-line-prompt": {
        "borderRight": "1px solid #0b121b"
    },
    ".command-line .command-line-prompt > span:before": {
        "color": "#8da1b9da"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coy-without-shadows.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "black",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "position": "relative",
        "borderLeft": "10px solid #358ccb",
        "boxShadow": "-1px 0 0 0 #358ccb, 0 0 0 1px #dfdfdf",
        "backgroundColor": "#fdfdfd",
        "backgroundImage": "linear-gradient(transparent 50%, rgba(69, 142, 209, 0.04) 50%)",
        "backgroundSize": "3em 3em",
        "backgroundOrigin": "content-box",
        "backgroundAttachment": "local",
        "margin": ".5em 0",
        "padding": "0 1em"
    },
    "pre[class*=\"language-\"] > code": {
        "display": "block"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "position": "relative",
        "padding": ".2em",
        "borderRadius": "0.3em",
        "color": "#c92c2c",
        "border": "1px solid rgba(0, 0, 0, 0.1)",
        "display": "inline",
        "whiteSpace": "normal",
        "backgroundColor": "#fdfdfd",
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "comment": {
        "color": "#7D8B99"
    },
    "block-comment": {
        "color": "#7D8B99"
    },
    "prolog": {
        "color": "#7D8B99"
    },
    "doctype": {
        "color": "#7D8B99"
    },
    "cdata": {
        "color": "#7D8B99"
    },
    "punctuation": {
        "color": "#5F6364"
    },
    "property": {
        "color": "#c92c2c"
    },
    "tag": {
        "color": "#c92c2c"
    },
    "boolean": {
        "color": "#c92c2c"
    },
    "number": {
        "color": "#c92c2c"
    },
    "function-name": {
        "color": "#c92c2c"
    },
    "constant": {
        "color": "#c92c2c"
    },
    "symbol": {
        "color": "#c92c2c"
    },
    "deleted": {
        "color": "#c92c2c"
    },
    "selector": {
        "color": "#2f9c0a"
    },
    "attr-name": {
        "color": "#2f9c0a"
    },
    "string": {
        "color": "#2f9c0a"
    },
    "char": {
        "color": "#2f9c0a"
    },
    "function": {
        "color": "#2f9c0a"
    },
    "builtin": {
        "color": "#2f9c0a"
    },
    "inserted": {
        "color": "#2f9c0a"
    },
    "operator": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "entity": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)",
        "cursor": "help"
    },
    "url": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "variable": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "atrule": {
        "color": "#1990b8"
    },
    "attr-value": {
        "color": "#1990b8"
    },
    "keyword": {
        "color": "#1990b8"
    },
    "class-name": {
        "color": "#1990b8"
    },
    "regex": {
        "color": "#e90"
    },
    "important": {
        "color": "#e90",
        "fontWeight": "normal"
    },
    ".language-css .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    ".style .token.string": {
        "color": "#a67f59",
        "background": "rgba(255, 255, 255, 0.5)"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "namespace": {
        "Opacity": ".7"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/darcula.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#a9b7c6",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#a9b7c6",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "background": "#2b2b2b"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
    },
    "pre[class*=\"language-\"]::selection": {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
    },
    "pre[class*=\"language-\"] ::selection": {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
    },
    "code[class*=\"language-\"]::selection": {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
    },
    "code[class*=\"language-\"] ::selection": {
        "color": "inherit",
        "background": "rgba(33, 66, 131, .85)"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#2b2b2b",
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#808080"
    },
    "prolog": {
        "color": "#808080"
    },
    "cdata": {
        "color": "#808080"
    },
    "delimiter": {
        "color": "#cc7832"
    },
    "boolean": {
        "color": "#cc7832"
    },
    "keyword": {
        "color": "#cc7832"
    },
    "selector": {
        "color": "#cc7832"
    },
    "important": {
        "color": "#cc7832"
    },
    "atrule": {
        "color": "#cc7832"
    },
    "operator": {
        "color": "#a9b7c6"
    },
    "punctuation": {
        "color": "#a9b7c6"
    },
    "attr-name": {
        "color": "#a9b7c6"
    },
    "tag": {
        "color": "#e8bf6a"
    },
    "tag.punctuation": {
        "color": "#e8bf6a"
    },
    "doctype": {
        "color": "#e8bf6a"
    },
    "builtin": {
        "color": "#e8bf6a"
    },
    "entity": {
        "color": "#6897bb"
    },
    "number": {
        "color": "#6897bb"
    },
    "symbol": {
        "color": "#6897bb"
    },
    "property": {
        "color": "#9876aa"
    },
    "constant": {
        "color": "#9876aa"
    },
    "variable": {
        "color": "#9876aa"
    },
    "string": {
        "color": "#6a8759"
    },
    "char": {
        "color": "#6a8759"
    },
    "attr-value": {
        "color": "#a5c261"
    },
    "attr-value.punctuation": {
        "color": "#a5c261"
    },
    "attr-value.punctuation:first-child": {
        "color": "#a9b7c6"
    },
    "url": {
        "color": "#287bde",
        "textDecoration": "underline"
    },
    "function": {
        "color": "#ffc66d"
    },
    "regex": {
        "background": "#364135"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "inserted": {
        "background": "#294436"
    },
    "deleted": {
        "background": "#484a4a"
    },
    "code.language-css .token.property": {
        "color": "#a9b7c6"
    },
    "code.language-css .token.property + .token.punctuation": {
        "color": "#a9b7c6"
    },
    "code.language-css .token.id": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.class": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.attribute": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.pseudo-class": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.pseudo-element": {
        "color": "#ffc66d"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/dracula.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "none",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "#282a36",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#282a36",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#6272a4"
    },
    "prolog": {
        "color": "#6272a4"
    },
    "doctype": {
        "color": "#6272a4"
    },
    "cdata": {
        "color": "#6272a4"
    },
    "punctuation": {
        "color": "#f8f8f2"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#ff79c6"
    },
    "tag": {
        "color": "#ff79c6"
    },
    "constant": {
        "color": "#ff79c6"
    },
    "symbol": {
        "color": "#ff79c6"
    },
    "deleted": {
        "color": "#ff79c6"
    },
    "boolean": {
        "color": "#bd93f9"
    },
    "number": {
        "color": "#bd93f9"
    },
    "selector": {
        "color": "#50fa7b"
    },
    "attr-name": {
        "color": "#50fa7b"
    },
    "string": {
        "color": "#50fa7b"
    },
    "char": {
        "color": "#50fa7b"
    },
    "builtin": {
        "color": "#50fa7b"
    },
    "inserted": {
        "color": "#50fa7b"
    },
    "operator": {
        "color": "#f8f8f2"
    },
    "entity": {
        "color": "#f8f8f2",
        "cursor": "help"
    },
    "url": {
        "color": "#f8f8f2"
    },
    ".language-css .token.string": {
        "color": "#f8f8f2"
    },
    ".style .token.string": {
        "color": "#f8f8f2"
    },
    "variable": {
        "color": "#f8f8f2"
    },
    "atrule": {
        "color": "#f1fa8c"
    },
    "attr-value": {
        "color": "#f1fa8c"
    },
    "function": {
        "color": "#f1fa8c"
    },
    "class-name": {
        "color": "#f1fa8c"
    },
    "keyword": {
        "color": "#8be9fd"
    },
    "regex": {
        "color": "#ffb86c"
    },
    "important": {
        "color": "#ffb86c",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2734",
        "color": "#9a86fd"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2734",
        "color": "#9a86fd",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#6a51e6"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#6c6783"
    },
    "prolog": {
        "color": "#6c6783"
    },
    "doctype": {
        "color": "#6c6783"
    },
    "cdata": {
        "color": "#6c6783"
    },
    "punctuation": {
        "color": "#6c6783"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#e09142"
    },
    "operator": {
        "color": "#e09142"
    },
    "number": {
        "color": "#e09142"
    },
    "property": {
        "color": "#9a86fd"
    },
    "function": {
        "color": "#9a86fd"
    },
    "tag-id": {
        "color": "#eeebff"
    },
    "selector": {
        "color": "#eeebff"
    },
    "atrule-id": {
        "color": "#eeebff"
    },
    "code.language-javascript": {
        "color": "#c4b9fe"
    },
    "attr-name": {
        "color": "#c4b9fe"
    },
    "code.language-css": {
        "color": "#ffcc99"
    },
    "code.language-scss": {
        "color": "#ffcc99"
    },
    "boolean": {
        "color": "#ffcc99"
    },
    "string": {
        "color": "#ffcc99"
    },
    "entity": {
        "color": "#ffcc99",
        "cursor": "help"
    },
    "url": {
        "color": "#ffcc99"
    },
    ".language-css .token.string": {
        "color": "#ffcc99"
    },
    ".language-scss .token.string": {
        "color": "#ffcc99"
    },
    ".style .token.string": {
        "color": "#ffcc99"
    },
    "attr-value": {
        "color": "#ffcc99"
    },
    "keyword": {
        "color": "#ffcc99"
    },
    "control": {
        "color": "#ffcc99"
    },
    "directive": {
        "color": "#ffcc99"
    },
    "unit": {
        "color": "#ffcc99"
    },
    "statement": {
        "color": "#ffcc99"
    },
    "regex": {
        "color": "#ffcc99"
    },
    "atrule": {
        "color": "#ffcc99"
    },
    "placeholder": {
        "color": "#ffcc99"
    },
    "variable": {
        "color": "#ffcc99"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #eeebff",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#c4b9fe"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #8a75f5",
        "OutlineOffset": ".4em"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#2c2937"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#3c3949"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(224, 145, 66, 0.2) 70%, rgba(224, 145, 66, 0))"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#322d29",
        "color": "#88786d"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#322d29",
        "color": "#88786d",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#6f5849"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#6a5f58"
    },
    "prolog": {
        "color": "#6a5f58"
    },
    "doctype": {
        "color": "#6a5f58"
    },
    "cdata": {
        "color": "#6a5f58"
    },
    "punctuation": {
        "color": "#6a5f58"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#bfa05a"
    },
    "operator": {
        "color": "#bfa05a"
    },
    "number": {
        "color": "#bfa05a"
    },
    "property": {
        "color": "#88786d"
    },
    "function": {
        "color": "#88786d"
    },
    "tag-id": {
        "color": "#fff3eb"
    },
    "selector": {
        "color": "#fff3eb"
    },
    "atrule-id": {
        "color": "#fff3eb"
    },
    "code.language-javascript": {
        "color": "#a48774"
    },
    "attr-name": {
        "color": "#a48774"
    },
    "code.language-css": {
        "color": "#fcc440"
    },
    "code.language-scss": {
        "color": "#fcc440"
    },
    "boolean": {
        "color": "#fcc440"
    },
    "string": {
        "color": "#fcc440"
    },
    "entity": {
        "color": "#fcc440",
        "cursor": "help"
    },
    "url": {
        "color": "#fcc440"
    },
    ".language-css .token.string": {
        "color": "#fcc440"
    },
    ".language-scss .token.string": {
        "color": "#fcc440"
    },
    ".style .token.string": {
        "color": "#fcc440"
    },
    "attr-value": {
        "color": "#fcc440"
    },
    "keyword": {
        "color": "#fcc440"
    },
    "control": {
        "color": "#fcc440"
    },
    "directive": {
        "color": "#fcc440"
    },
    "unit": {
        "color": "#fcc440"
    },
    "statement": {
        "color": "#fcc440"
    },
    "regex": {
        "color": "#fcc440"
    },
    "atrule": {
        "color": "#fcc440"
    },
    "placeholder": {
        "color": "#fcc440"
    },
    "variable": {
        "color": "#fcc440"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #fff3eb",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#a48774"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #816d5f",
        "OutlineOffset": ".4em"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#35302b"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#46403d"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(191, 160, 90, 0.2) 70%, rgba(191, 160, 90, 0))"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2d2a",
        "color": "#687d68"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#2a2d2a",
        "color": "#687d68",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#435643"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#535f53"
    },
    "prolog": {
        "color": "#535f53"
    },
    "doctype": {
        "color": "#535f53"
    },
    "cdata": {
        "color": "#535f53"
    },
    "punctuation": {
        "color": "#535f53"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#a2b34d"
    },
    "operator": {
        "color": "#a2b34d"
    },
    "number": {
        "color": "#a2b34d"
    },
    "property": {
        "color": "#687d68"
    },
    "function": {
        "color": "#687d68"
    },
    "tag-id": {
        "color": "#f0fff0"
    },
    "selector": {
        "color": "#f0fff0"
    },
    "atrule-id": {
        "color": "#f0fff0"
    },
    "code.language-javascript": {
        "color": "#b3d6b3"
    },
    "attr-name": {
        "color": "#b3d6b3"
    },
    "code.language-css": {
        "color": "#e5fb79"
    },
    "code.language-scss": {
        "color": "#e5fb79"
    },
    "boolean": {
        "color": "#e5fb79"
    },
    "string": {
        "color": "#e5fb79"
    },
    "entity": {
        "color": "#e5fb79",
        "cursor": "help"
    },
    "url": {
        "color": "#e5fb79"
    },
    ".language-css .token.string": {
        "color": "#e5fb79"
    },
    ".language-scss .token.string": {
        "color": "#e5fb79"
    },
    ".style .token.string": {
        "color": "#e5fb79"
    },
    "attr-value": {
        "color": "#e5fb79"
    },
    "keyword": {
        "color": "#e5fb79"
    },
    "control": {
        "color": "#e5fb79"
    },
    "directive": {
        "color": "#e5fb79"
    },
    "unit": {
        "color": "#e5fb79"
    },
    "statement": {
        "color": "#e5fb79"
    },
    "regex": {
        "color": "#e5fb79"
    },
    "atrule": {
        "color": "#e5fb79"
    },
    "placeholder": {
        "color": "#e5fb79"
    },
    "variable": {
        "color": "#e5fb79"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #f0fff0",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#b3d6b3"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #5c705c",
        "OutlineOffset": ".4em"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#2c302c"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#3b423b"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(162, 179, 77, 0.2) 70%, rgba(162, 179, 77, 0))"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-light.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#faf8f5",
        "color": "#728fcb"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#faf8f5",
        "color": "#728fcb",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#faf8f5"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#b6ad9a"
    },
    "prolog": {
        "color": "#b6ad9a"
    },
    "doctype": {
        "color": "#b6ad9a"
    },
    "cdata": {
        "color": "#b6ad9a"
    },
    "punctuation": {
        "color": "#b6ad9a"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#063289"
    },
    "operator": {
        "color": "#063289"
    },
    "number": {
        "color": "#063289"
    },
    "property": {
        "color": "#b29762"
    },
    "function": {
        "color": "#b29762"
    },
    "tag-id": {
        "color": "#2d2006"
    },
    "selector": {
        "color": "#2d2006"
    },
    "atrule-id": {
        "color": "#2d2006"
    },
    "code.language-javascript": {
        "color": "#896724"
    },
    "attr-name": {
        "color": "#896724"
    },
    "code.language-css": {
        "color": "#728fcb"
    },
    "code.language-scss": {
        "color": "#728fcb"
    },
    "boolean": {
        "color": "#728fcb"
    },
    "string": {
        "color": "#728fcb"
    },
    "entity": {
        "color": "#728fcb",
        "cursor": "help"
    },
    "url": {
        "color": "#728fcb"
    },
    ".language-css .token.string": {
        "color": "#728fcb"
    },
    ".language-scss .token.string": {
        "color": "#728fcb"
    },
    ".style .token.string": {
        "color": "#728fcb"
    },
    "attr-value": {
        "color": "#728fcb"
    },
    "keyword": {
        "color": "#728fcb"
    },
    "control": {
        "color": "#728fcb"
    },
    "directive": {
        "color": "#728fcb"
    },
    "unit": {
        "color": "#728fcb"
    },
    "statement": {
        "color": "#728fcb"
    },
    "regex": {
        "color": "#728fcb"
    },
    "atrule": {
        "color": "#728fcb"
    },
    "placeholder": {
        "color": "#93abdc"
    },
    "variable": {
        "color": "#93abdc"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #2d2006",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#896724"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #896724",
        "OutlineOffset": ".4em"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#ece8de"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#cdc4b1"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0))"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#1d262f",
        "color": "#57718e"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#1d262f",
        "color": "#57718e",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#004a9e"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#4a5f78"
    },
    "prolog": {
        "color": "#4a5f78"
    },
    "doctype": {
        "color": "#4a5f78"
    },
    "cdata": {
        "color": "#4a5f78"
    },
    "punctuation": {
        "color": "#4a5f78"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#0aa370"
    },
    "operator": {
        "color": "#0aa370"
    },
    "number": {
        "color": "#0aa370"
    },
    "property": {
        "color": "#57718e"
    },
    "function": {
        "color": "#57718e"
    },
    "tag-id": {
        "color": "#ebf4ff"
    },
    "selector": {
        "color": "#ebf4ff"
    },
    "atrule-id": {
        "color": "#ebf4ff"
    },
    "code.language-javascript": {
        "color": "#7eb6f6"
    },
    "attr-name": {
        "color": "#7eb6f6"
    },
    "code.language-css": {
        "color": "#47ebb4"
    },
    "code.language-scss": {
        "color": "#47ebb4"
    },
    "boolean": {
        "color": "#47ebb4"
    },
    "string": {
        "color": "#47ebb4"
    },
    "entity": {
        "color": "#47ebb4",
        "cursor": "help"
    },
    "url": {
        "color": "#47ebb4"
    },
    ".language-css .token.string": {
        "color": "#47ebb4"
    },
    ".language-scss .token.string": {
        "color": "#47ebb4"
    },
    ".style .token.string": {
        "color": "#47ebb4"
    },
    "attr-value": {
        "color": "#47ebb4"
    },
    "keyword": {
        "color": "#47ebb4"
    },
    "control": {
        "color": "#47ebb4"
    },
    "directive": {
        "color": "#47ebb4"
    },
    "unit": {
        "color": "#47ebb4"
    },
    "statement": {
        "color": "#47ebb4"
    },
    "regex": {
        "color": "#47ebb4"
    },
    "atrule": {
        "color": "#47ebb4"
    },
    "placeholder": {
        "color": "#47ebb4"
    },
    "variable": {
        "color": "#47ebb4"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #ebf4ff",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#7eb6f6"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #34659d",
        "OutlineOffset": ".4em"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#1f2932"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#2c3847"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-space.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#24242e",
        "color": "#767693"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "Consolas, Menlo, Monaco, \"Andale Mono WT\", \"Andale Mono\", \"Lucida Console\", \"Lucida Sans Typewriter\", \"DejaVu Sans Mono\", \"Bitstream Vera Sans Mono\", \"Liberation Mono\", \"Nimbus Mono L\", \"Courier New\", Courier, monospace",
        "fontSize": "14px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "background": "#24242e",
        "color": "#767693",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "#5151e6"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#5b5b76"
    },
    "prolog": {
        "color": "#5b5b76"
    },
    "doctype": {
        "color": "#5b5b76"
    },
    "cdata": {
        "color": "#5b5b76"
    },
    "punctuation": {
        "color": "#5b5b76"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "tag": {
        "color": "#dd672c"
    },
    "operator": {
        "color": "#dd672c"
    },
    "number": {
        "color": "#dd672c"
    },
    "property": {
        "color": "#767693"
    },
    "function": {
        "color": "#767693"
    },
    "tag-id": {
        "color": "#ebebff"
    },
    "selector": {
        "color": "#ebebff"
    },
    "atrule-id": {
        "color": "#ebebff"
    },
    "code.language-javascript": {
        "color": "#aaaaca"
    },
    "attr-name": {
        "color": "#aaaaca"
    },
    "code.language-css": {
        "color": "#fe8c52"
    },
    "code.language-scss": {
        "color": "#fe8c52"
    },
    "boolean": {
        "color": "#fe8c52"
    },
    "string": {
        "color": "#fe8c52"
    },
    "entity": {
        "color": "#fe8c52",
        "cursor": "help"
    },
    "url": {
        "color": "#fe8c52"
    },
    ".language-css .token.string": {
        "color": "#fe8c52"
    },
    ".language-scss .token.string": {
        "color": "#fe8c52"
    },
    ".style .token.string": {
        "color": "#fe8c52"
    },
    "attr-value": {
        "color": "#fe8c52"
    },
    "keyword": {
        "color": "#fe8c52"
    },
    "control": {
        "color": "#fe8c52"
    },
    "directive": {
        "color": "#fe8c52"
    },
    "unit": {
        "color": "#fe8c52"
    },
    "statement": {
        "color": "#fe8c52"
    },
    "regex": {
        "color": "#fe8c52"
    },
    "atrule": {
        "color": "#fe8c52"
    },
    "placeholder": {
        "color": "#fe8c52"
    },
    "variable": {
        "color": "#fe8c52"
    },
    "deleted": {
        "textDecoration": "line-through"
    },
    "inserted": {
        "borderBottom": "1px dotted #ebebff",
        "textDecoration": "none"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "important": {
        "fontWeight": "bold",
        "color": "#aaaaca"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid #7676f4",
        "OutlineOffset": ".4em"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#262631"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#393949"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(221, 103, 44, 0.2) 70%, rgba(221, 103, 44, 0))"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/ghcolors.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#393A34",
        "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": ".9em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#393A34",
        "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": ".9em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "border": "1px solid #dddddd",
        "backgroundColor": "white"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#b3d4fc"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#b3d4fc"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#b3d4fc"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".2em",
        "paddingTop": "1px",
        "paddingBottom": "1px",
        "background": "#f8f8f8",
        "border": "1px solid #dddddd"
    },
    "comment": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "doctype": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "cdata": {
        "color": "#999988",
        "fontStyle": "italic"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "string": {
        "color": "#e3116c"
    },
    "attr-value": {
        "color": "#e3116c"
    },
    "punctuation": {
        "color": "#393A34"
    },
    "operator": {
        "color": "#393A34"
    },
    "entity": {
        "color": "#36acaa"
    },
    "url": {
        "color": "#36acaa"
    },
    "symbol": {
        "color": "#36acaa"
    },
    "number": {
        "color": "#36acaa"
    },
    "boolean": {
        "color": "#36acaa"
    },
    "variable": {
        "color": "#36acaa"
    },
    "constant": {
        "color": "#36acaa"
    },
    "property": {
        "color": "#36acaa"
    },
    "regex": {
        "color": "#36acaa"
    },
    "inserted": {
        "color": "#36acaa"
    },
    "atrule": {
        "color": "#00a4db"
    },
    "keyword": {
        "color": "#00a4db"
    },
    "attr-name": {
        "color": "#00a4db"
    },
    ".language-autohotkey .token.selector": {
        "color": "#00a4db"
    },
    "function": {
        "color": "#9a050f",
        "fontWeight": "bold"
    },
    "deleted": {
        "color": "#9a050f"
    },
    ".language-autohotkey .token.tag": {
        "color": "#9a050f"
    },
    "tag": {
        "color": "#00009f"
    },
    "selector": {
        "color": "#00009f"
    },
    ".language-autohotkey .token.keyword": {
        "color": "#00009f"
    },
    "important": {
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/gruvbox-dark.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#ebdbb2",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#ebdbb2",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "background": "#1d2021"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "color": "#fbf1c7",
        "background": "#7c6f64"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "color": "#fbf1c7",
        "background": "#7c6f64"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "color": "#fbf1c7",
        "background": "#7c6f64"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "color": "#fbf1c7",
        "background": "#7c6f64"
    },
    "pre[class*=\"language-\"]::selection": {
        "color": "#fbf1c7",
        "background": "#7c6f64"
    },
    "pre[class*=\"language-\"] ::selection": {
        "color": "#fbf1c7",
        "background": "#7c6f64"
    },
    "code[class*=\"language-\"]::selection": {
        "color": "#fbf1c7",
        "background": "#7c6f64"
    },
    "code[class*=\"language-\"] ::selection": {
        "color": "#fbf1c7",
        "background": "#7c6f64"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#1d2021",
        "padding": "0.1em",
        "borderRadius": "0.3em"
    },
    "comment": {
        "color": "#a89984"
    },
    "prolog": {
        "color": "#a89984"
    },
    "cdata": {
        "color": "#a89984"
    },
    "delimiter": {
        "color": "#fb4934"
    },
    "boolean": {
        "color": "#fb4934"
    },
    "keyword": {
        "color": "#fb4934"
    },
    "selector": {
        "color": "#fb4934"
    },
    "important": {
        "color": "#fb4934"
    },
    "atrule": {
        "color": "#fb4934"
    },
    "operator": {
        "color": "#a89984"
    },
    "punctuation": {
        "color": "#a89984"
    },
    "attr-name": {
        "color": "#a89984"
    },
    "tag": {
        "color": "#fabd2f"
    },
    "tag.punctuation": {
        "color": "#fabd2f"
    },
    "doctype": {
        "color": "#fabd2f"
    },
    "builtin": {
        "color": "#fabd2f"
    },
    "entity": {
        "color": "#d3869b"
    },
    "number": {
        "color": "#d3869b"
    },
    "symbol": {
        "color": "#d3869b"
    },
    "property": {
        "color": "#fb4934"
    },
    "constant": {
        "color": "#fb4934"
    },
    "variable": {
        "color": "#fb4934"
    },
    "string": {
        "color": "#b8bb26"
    },
    "char": {
        "color": "#b8bb26"
    },
    "attr-value": {
        "color": "#a89984"
    },
    "attr-value.punctuation": {
        "color": "#a89984"
    },
    "url": {
        "color": "#b8bb26",
        "textDecoration": "underline"
    },
    "function": {
        "color": "#fabd2f"
    },
    "regex": {
        "background": "#b8bb26"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "inserted": {
        "background": "#a89984"
    },
    "deleted": {
        "background": "#fb4934"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/gruvbox-light.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#3c3836",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#3c3836",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "background": "#f9f5d7"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "color": "#282828",
        "background": "#a89984"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "color": "#282828",
        "background": "#a89984"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "color": "#282828",
        "background": "#a89984"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "color": "#282828",
        "background": "#a89984"
    },
    "pre[class*=\"language-\"]::selection": {
        "color": "#282828",
        "background": "#a89984"
    },
    "pre[class*=\"language-\"] ::selection": {
        "color": "#282828",
        "background": "#a89984"
    },
    "code[class*=\"language-\"]::selection": {
        "color": "#282828",
        "background": "#a89984"
    },
    "code[class*=\"language-\"] ::selection": {
        "color": "#282828",
        "background": "#a89984"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#f9f5d7",
        "padding": "0.1em",
        "borderRadius": "0.3em"
    },
    "comment": {
        "color": "#7c6f64"
    },
    "prolog": {
        "color": "#7c6f64"
    },
    "cdata": {
        "color": "#7c6f64"
    },
    "delimiter": {
        "color": "#9d0006"
    },
    "boolean": {
        "color": "#9d0006"
    },
    "keyword": {
        "color": "#9d0006"
    },
    "selector": {
        "color": "#9d0006"
    },
    "important": {
        "color": "#9d0006"
    },
    "atrule": {
        "color": "#9d0006"
    },
    "operator": {
        "color": "#7c6f64"
    },
    "punctuation": {
        "color": "#7c6f64"
    },
    "attr-name": {
        "color": "#7c6f64"
    },
    "tag": {
        "color": "#b57614"
    },
    "tag.punctuation": {
        "color": "#b57614"
    },
    "doctype": {
        "color": "#b57614"
    },
    "builtin": {
        "color": "#b57614"
    },
    "entity": {
        "color": "#8f3f71"
    },
    "number": {
        "color": "#8f3f71"
    },
    "symbol": {
        "color": "#8f3f71"
    },
    "property": {
        "color": "#9d0006"
    },
    "constant": {
        "color": "#9d0006"
    },
    "variable": {
        "color": "#9d0006"
    },
    "string": {
        "color": "#797403"
    },
    "char": {
        "color": "#797403"
    },
    "attr-value": {
        "color": "#7c6f64"
    },
    "attr-value.punctuation": {
        "color": "#7c6f64"
    },
    "url": {
        "color": "#797403",
        "textDecoration": "underline"
    },
    "function": {
        "color": "#b57614"
    },
    "regex": {
        "background": "#797403"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "inserted": {
        "background": "#7c6f64"
    },
    "deleted": {
        "background": "#9d0006"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/holi-theme.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*='language-']": {
        "color": "#d6e7ff",
        "background": "#030314",
        "textShadow": "none",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "fontSize": "1em",
        "lineHeight": "1.5",
        "letterSpacing": ".2px",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "textAlign": "left",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*='language-']": {
        "color": "#d6e7ff",
        "background": "#030314",
        "textShadow": "none",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "fontSize": "1em",
        "lineHeight": "1.5",
        "letterSpacing": ".2px",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "textAlign": "left",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "border": "1px solid #2a4555",
        "borderRadius": "5px",
        "padding": "1.5em 1em",
        "margin": "1em 0",
        "overflow": "auto"
    },
    "pre[class*='language-']::-moz-selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
    },
    "pre[class*='language-'] ::-moz-selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
    },
    "code[class*='language-']::-moz-selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
    },
    "code[class*='language-'] ::-moz-selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
    },
    "pre[class*='language-']::selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
    },
    "pre[class*='language-'] ::selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
    },
    "code[class*='language-']::selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
    },
    "code[class*='language-'] ::selection": {
        "color": "inherit",
        "background": "#1d3b54",
        "textShadow": "none"
    },
    ":not(pre) > code[class*='language-']": {
        "color": "#f0f6f6",
        "background": "#2a4555",
        "padding": "0.2em 0.3em",
        "borderRadius": "0.2em",
        "boxDecorationBreak": "clone"
    },
    "comment": {
        "color": "#446e69"
    },
    "prolog": {
        "color": "#446e69"
    },
    "doctype": {
        "color": "#446e69"
    },
    "cdata": {
        "color": "#446e69"
    },
    "punctuation": {
        "color": "#d6b007"
    },
    "property": {
        "color": "#d6e7ff"
    },
    "tag": {
        "color": "#d6e7ff"
    },
    "boolean": {
        "color": "#d6e7ff"
    },
    "number": {
        "color": "#d6e7ff"
    },
    "constant": {
        "color": "#d6e7ff"
    },
    "symbol": {
        "color": "#d6e7ff"
    },
    "deleted": {
        "color": "#d6e7ff"
    },
    "selector": {
        "color": "#e60067"
    },
    "attr-name": {
        "color": "#e60067"
    },
    "builtin": {
        "color": "#e60067"
    },
    "inserted": {
        "color": "#e60067"
    },
    "string": {
        "color": "#49c6ec"
    },
    "char": {
        "color": "#49c6ec"
    },
    "operator": {
        "color": "#ec8e01",
        "background": "transparent"
    },
    "entity": {
        "color": "#ec8e01",
        "background": "transparent"
    },
    "url": {
        "color": "#ec8e01",
        "background": "transparent"
    },
    ".language-css .token.string": {
        "color": "#ec8e01",
        "background": "transparent"
    },
    ".style .token.string": {
        "color": "#ec8e01",
        "background": "transparent"
    },
    "atrule": {
        "color": "#0fe468"
    },
    "attr-value": {
        "color": "#0fe468"
    },
    "keyword": {
        "color": "#0fe468"
    },
    "function": {
        "color": "#78f3e9"
    },
    "class-name": {
        "color": "#78f3e9"
    },
    "regex": {
        "color": "#d6e7ff"
    },
    "important": {
        "color": "#d6e7ff"
    },
    "variable": {
        "color": "#d6e7ff"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/hopscotch.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "fontFamily": "\"Fira Mono\", Menlo, Monaco, \"Lucida Console\", \"Courier New\", Courier, monospace",
        "fontSize": "16px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "background": "#322931",
        "color": "#b9b5b8"
    },
    "pre[class*=\"language-\"]": {
        "fontFamily": "\"Fira Mono\", Menlo, Monaco, \"Lucida Console\", \"Courier New\", Courier, monospace",
        "fontSize": "16px",
        "lineHeight": "1.375",
        "direction": "ltr",
        "textAlign": "left",
        "wordSpacing": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "background": "#322931",
        "color": "#b9b5b8",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#797379"
    },
    "prolog": {
        "color": "#797379"
    },
    "doctype": {
        "color": "#797379"
    },
    "cdata": {
        "color": "#797379"
    },
    "punctuation": {
        "color": "#b9b5b8"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "null": {
        "color": "#fd8b19"
    },
    "operator": {
        "color": "#fd8b19"
    },
    "boolean": {
        "color": "#fd8b19"
    },
    "number": {
        "color": "#fd8b19"
    },
    "property": {
        "color": "#fdcc59"
    },
    "tag": {
        "color": "#1290bf"
    },
    "string": {
        "color": "#149b93"
    },
    "selector": {
        "color": "#c85e7c"
    },
    "attr-name": {
        "color": "#fd8b19"
    },
    "entity": {
        "color": "#149b93",
        "cursor": "help"
    },
    "url": {
        "color": "#149b93"
    },
    ".language-css .token.string": {
        "color": "#149b93"
    },
    ".style .token.string": {
        "color": "#149b93"
    },
    "attr-value": {
        "color": "#8fc13e"
    },
    "keyword": {
        "color": "#8fc13e"
    },
    "control": {
        "color": "#8fc13e"
    },
    "directive": {
        "color": "#8fc13e"
    },
    "unit": {
        "color": "#8fc13e"
    },
    "statement": {
        "color": "#149b93"
    },
    "regex": {
        "color": "#149b93"
    },
    "atrule": {
        "color": "#149b93"
    },
    "placeholder": {
        "color": "#1290bf"
    },
    "variable": {
        "color": "#1290bf"
    },
    "important": {
        "color": "#dd464c",
        "fontWeight": "bold"
    },
    "pre > code.highlight": {
        "Outline": ".4em solid red",
        "OutlineOffset": ".4em"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/lucario.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "none",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "#263E52",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Monaco, Consolas, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#263E52",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#5c98cd"
    },
    "prolog": {
        "color": "#5c98cd"
    },
    "doctype": {
        "color": "#5c98cd"
    },
    "cdata": {
        "color": "#5c98cd"
    },
    "punctuation": {
        "color": "#f8f8f2"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#F05E5D"
    },
    "tag": {
        "color": "#F05E5D"
    },
    "constant": {
        "color": "#F05E5D"
    },
    "symbol": {
        "color": "#F05E5D"
    },
    "deleted": {
        "color": "#F05E5D"
    },
    "boolean": {
        "color": "#BC94F9"
    },
    "number": {
        "color": "#BC94F9"
    },
    "selector": {
        "color": "#FCFCD6"
    },
    "attr-name": {
        "color": "#FCFCD6"
    },
    "string": {
        "color": "#FCFCD6"
    },
    "char": {
        "color": "#FCFCD6"
    },
    "builtin": {
        "color": "#FCFCD6"
    },
    "inserted": {
        "color": "#FCFCD6"
    },
    "operator": {
        "color": "#f8f8f2"
    },
    "entity": {
        "color": "#f8f8f2",
        "cursor": "help"
    },
    "url": {
        "color": "#f8f8f2"
    },
    ".language-css .token.string": {
        "color": "#f8f8f2"
    },
    ".style .token.string": {
        "color": "#f8f8f2"
    },
    "variable": {
        "color": "#f8f8f2"
    },
    "atrule": {
        "color": "#66D8EF"
    },
    "attr-value": {
        "color": "#66D8EF"
    },
    "function": {
        "color": "#66D8EF"
    },
    "class-name": {
        "color": "#66D8EF"
    },
    "keyword": {
        "color": "#6EB26E"
    },
    "regex": {
        "color": "#F05E5D"
    },
    "important": {
        "color": "#F05E5D",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/material-dark.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#eee",
        "background": "#2f2f2f",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#eee",
        "background": "#2f2f2f",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "overflow": "auto",
        "position": "relative",
        "margin": "0.5em 0",
        "padding": "1.25em 1em"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#363636"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#363636"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#363636"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#363636"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#363636"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#363636"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#363636"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#363636"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "whiteSpace": "normal",
        "borderRadius": "0.2em",
        "padding": "0.1em"
    },
    ".language-css > code": {
        "color": "#fd9170"
    },
    ".language-sass > code": {
        "color": "#fd9170"
    },
    ".language-scss > code": {
        "color": "#fd9170"
    },
    "[class*=\"language-\"] .namespace": {
        "Opacity": "0.7"
    },
    "atrule": {
        "color": "#c792ea"
    },
    "attr-name": {
        "color": "#ffcb6b"
    },
    "attr-value": {
        "color": "#a5e844"
    },
    "attribute": {
        "color": "#a5e844"
    },
    "boolean": {
        "color": "#c792ea"
    },
    "builtin": {
        "color": "#ffcb6b"
    },
    "cdata": {
        "color": "#80cbc4"
    },
    "char": {
        "color": "#80cbc4"
    },
    "class": {
        "color": "#ffcb6b"
    },
    "class-name": {
        "color": "#f2ff00"
    },
    "comment": {
        "color": "#616161"
    },
    "constant": {
        "color": "#c792ea"
    },
    "deleted": {
        "color": "#ff6666"
    },
    "doctype": {
        "color": "#616161"
    },
    "entity": {
        "color": "#ff6666"
    },
    "function": {
        "color": "#c792ea"
    },
    "hexcode": {
        "color": "#f2ff00"
    },
    "id": {
        "color": "#c792ea",
        "fontWeight": "bold"
    },
    "important": {
        "color": "#c792ea",
        "fontWeight": "bold"
    },
    "inserted": {
        "color": "#80cbc4"
    },
    "keyword": {
        "color": "#c792ea"
    },
    "number": {
        "color": "#fd9170"
    },
    "operator": {
        "color": "#89ddff"
    },
    "prolog": {
        "color": "#616161"
    },
    "property": {
        "color": "#80cbc4"
    },
    "pseudo-class": {
        "color": "#a5e844"
    },
    "pseudo-element": {
        "color": "#a5e844"
    },
    "punctuation": {
        "color": "#89ddff"
    },
    "regex": {
        "color": "#f2ff00"
    },
    "selector": {
        "color": "#ff6666"
    },
    "string": {
        "color": "#a5e844"
    },
    "symbol": {
        "color": "#c792ea"
    },
    "tag": {
        "color": "#ff6666"
    },
    "unit": {
        "color": "#fd9170"
    },
    "url": {
        "color": "#ff6666"
    },
    "variable": {
        "color": "#ff6666"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/material-light.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#90a4ae",
        "background": "#fafafa",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#90a4ae",
        "background": "#fafafa",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "overflow": "auto",
        "position": "relative",
        "margin": "0.5em 0",
        "padding": "1.25em 1em"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#cceae7",
        "color": "#263238"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#cceae7",
        "color": "#263238"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#cceae7",
        "color": "#263238"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#cceae7",
        "color": "#263238"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#cceae7",
        "color": "#263238"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#cceae7",
        "color": "#263238"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#cceae7",
        "color": "#263238"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#cceae7",
        "color": "#263238"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "whiteSpace": "normal",
        "borderRadius": "0.2em",
        "padding": "0.1em"
    },
    ".language-css > code": {
        "color": "#f76d47"
    },
    ".language-sass > code": {
        "color": "#f76d47"
    },
    ".language-scss > code": {
        "color": "#f76d47"
    },
    "[class*=\"language-\"] .namespace": {
        "Opacity": "0.7"
    },
    "atrule": {
        "color": "#7c4dff"
    },
    "attr-name": {
        "color": "#39adb5"
    },
    "attr-value": {
        "color": "#f6a434"
    },
    "attribute": {
        "color": "#f6a434"
    },
    "boolean": {
        "color": "#7c4dff"
    },
    "builtin": {
        "color": "#39adb5"
    },
    "cdata": {
        "color": "#39adb5"
    },
    "char": {
        "color": "#39adb5"
    },
    "class": {
        "color": "#39adb5"
    },
    "class-name": {
        "color": "#6182b8"
    },
    "comment": {
        "color": "#aabfc9"
    },
    "constant": {
        "color": "#7c4dff"
    },
    "deleted": {
        "color": "#e53935"
    },
    "doctype": {
        "color": "#aabfc9"
    },
    "entity": {
        "color": "#e53935"
    },
    "function": {
        "color": "#7c4dff"
    },
    "hexcode": {
        "color": "#f76d47"
    },
    "id": {
        "color": "#7c4dff",
        "fontWeight": "bold"
    },
    "important": {
        "color": "#7c4dff",
        "fontWeight": "bold"
    },
    "inserted": {
        "color": "#39adb5"
    },
    "keyword": {
        "color": "#7c4dff"
    },
    "number": {
        "color": "#f76d47"
    },
    "operator": {
        "color": "#39adb5"
    },
    "prolog": {
        "color": "#aabfc9"
    },
    "property": {
        "color": "#39adb5"
    },
    "pseudo-class": {
        "color": "#f6a434"
    },
    "pseudo-element": {
        "color": "#f6a434"
    },
    "punctuation": {
        "color": "#39adb5"
    },
    "regex": {
        "color": "#6182b8"
    },
    "selector": {
        "color": "#e53935"
    },
    "string": {
        "color": "#f6a434"
    },
    "symbol": {
        "color": "#7c4dff"
    },
    "tag": {
        "color": "#e53935"
    },
    "unit": {
        "color": "#f76d47"
    },
    "url": {
        "color": "#e53935"
    },
    "variable": {
        "color": "#e53935"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#c3cee3",
        "background": "#263238",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "color": "#c3cee3",
        "background": "#263238",
        "fontFamily": "Roboto Mono, monospace",
        "fontSize": "1em",
        "lineHeight": "1.5em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "overflow": "auto",
        "position": "relative",
        "margin": "0.5em 0",
        "padding": "1.25em 1em"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#363636"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#363636"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#363636"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#363636"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#363636"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#363636"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#363636"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#363636"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "whiteSpace": "normal",
        "borderRadius": "0.2em",
        "padding": "0.1em"
    },
    ".language-css > code": {
        "color": "#fd9170"
    },
    ".language-sass > code": {
        "color": "#fd9170"
    },
    ".language-scss > code": {
        "color": "#fd9170"
    },
    "[class*=\"language-\"] .namespace": {
        "Opacity": "0.7"
    },
    "atrule": {
        "color": "#c792ea"
    },
    "attr-name": {
        "color": "#ffcb6b"
    },
    "attr-value": {
        "color": "#c3e88d"
    },
    "attribute": {
        "color": "#c3e88d"
    },
    "boolean": {
        "color": "#c792ea"
    },
    "builtin": {
        "color": "#ffcb6b"
    },
    "cdata": {
        "color": "#80cbc4"
    },
    "char": {
        "color": "#80cbc4"
    },
    "class": {
        "color": "#ffcb6b"
    },
    "class-name": {
        "color": "#f2ff00"
    },
    "color": {
        "color": "#f2ff00"
    },
    "comment": {
        "color": "#546e7a"
    },
    "constant": {
        "color": "#c792ea"
    },
    "deleted": {
        "color": "#f07178"
    },
    "doctype": {
        "color": "#546e7a"
    },
    "entity": {
        "color": "#f07178"
    },
    "function": {
        "color": "#c792ea"
    },
    "hexcode": {
        "color": "#f2ff00"
    },
    "id": {
        "color": "#c792ea",
        "fontWeight": "bold"
    },
    "important": {
        "color": "#c792ea",
        "fontWeight": "bold"
    },
    "inserted": {
        "color": "#80cbc4"
    },
    "keyword": {
        "color": "#c792ea",
        "fontStyle": "italic"
    },
    "number": {
        "color": "#fd9170"
    },
    "operator": {
        "color": "#89ddff"
    },
    "prolog": {
        "color": "#546e7a"
    },
    "property": {
        "color": "#80cbc4"
    },
    "pseudo-class": {
        "color": "#c3e88d"
    },
    "pseudo-element": {
        "color": "#c3e88d"
    },
    "punctuation": {
        "color": "#89ddff"
    },
    "regex": {
        "color": "#f2ff00"
    },
    "selector": {
        "color": "#f07178"
    },
    "string": {
        "color": "#c3e88d"
    },
    "symbol": {
        "color": "#c792ea"
    },
    "tag": {
        "color": "#f07178"
    },
    "unit": {
        "color": "#f07178"
    },
    "url": {
        "color": "#fd9170"
    },
    "variable": {
        "color": "#f07178"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/night-owl.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#d6deeb",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "fontSize": "1em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "white",
        "fontFamily": "Consolas, Monaco, \"Andale Mono\", \"Ubuntu Mono\", monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "fontSize": "1em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "background": "#011627"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "color": "white",
        "background": "#011627",
        "padding": "0.1em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
    },
    "cdata": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
    },
    "punctuation": {
        "color": "rgb(199, 146, 234)"
    },
    ".namespace": {
        "color": "rgb(178, 204, 214)"
    },
    "deleted": {
        "color": "rgba(239, 83, 80, 0.56)",
        "fontStyle": "italic"
    },
    "symbol": {
        "color": "rgb(128, 203, 196)"
    },
    "property": {
        "color": "rgb(128, 203, 196)"
    },
    "tag": {
        "color": "rgb(127, 219, 202)"
    },
    "operator": {
        "color": "rgb(127, 219, 202)"
    },
    "keyword": {
        "color": "rgb(127, 219, 202)"
    },
    "boolean": {
        "color": "rgb(255, 88, 116)"
    },
    "number": {
        "color": "rgb(247, 140, 108)"
    },
    "constant": {
        "color": "rgb(130, 170, 255)"
    },
    "function": {
        "color": "rgb(130, 170, 255)"
    },
    "builtin": {
        "color": "rgb(130, 170, 255)"
    },
    "char": {
        "color": "rgb(130, 170, 255)"
    },
    "selector": {
        "color": "rgb(199, 146, 234)",
        "fontStyle": "italic"
    },
    "doctype": {
        "color": "rgb(199, 146, 234)",
        "fontStyle": "italic"
    },
    "attr-name": {
        "color": "rgb(173, 219, 103)",
        "fontStyle": "italic"
    },
    "inserted": {
        "color": "rgb(173, 219, 103)",
        "fontStyle": "italic"
    },
    "string": {
        "color": "rgb(173, 219, 103)"
    },
    "url": {
        "color": "rgb(173, 219, 103)"
    },
    "entity": {
        "color": "rgb(173, 219, 103)"
    },
    ".language-css .token.string": {
        "color": "rgb(173, 219, 103)"
    },
    ".style .token.string": {
        "color": "rgb(173, 219, 103)"
    },
    "class-name": {
        "color": "rgb(255, 203, 139)"
    },
    "atrule": {
        "color": "rgb(255, 203, 139)"
    },
    "attr-value": {
        "color": "rgb(255, 203, 139)"
    },
    "regex": {
        "color": "rgb(214, 222, 235)"
    },
    "important": {
        "color": "rgb(214, 222, 235)",
        "fontWeight": "bold"
    },
    "variable": {
        "color": "rgb(214, 222, 235)"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/nord.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "none",
        "fontFamily": "\"Fira Code\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#f8f8f2",
        "background": "#2E3440",
        "fontFamily": "\"Fira Code\", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#2E3440",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#636f88"
    },
    "prolog": {
        "color": "#636f88"
    },
    "doctype": {
        "color": "#636f88"
    },
    "cdata": {
        "color": "#636f88"
    },
    "punctuation": {
        "color": "#81A1C1"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#81A1C1"
    },
    "tag": {
        "color": "#81A1C1"
    },
    "constant": {
        "color": "#81A1C1"
    },
    "symbol": {
        "color": "#81A1C1"
    },
    "deleted": {
        "color": "#81A1C1"
    },
    "number": {
        "color": "#B48EAD"
    },
    "boolean": {
        "color": "#81A1C1"
    },
    "selector": {
        "color": "#A3BE8C"
    },
    "attr-name": {
        "color": "#A3BE8C"
    },
    "string": {
        "color": "#A3BE8C"
    },
    "char": {
        "color": "#A3BE8C"
    },
    "builtin": {
        "color": "#A3BE8C"
    },
    "inserted": {
        "color": "#A3BE8C"
    },
    "operator": {
        "color": "#81A1C1"
    },
    "entity": {
        "color": "#81A1C1",
        "cursor": "help"
    },
    "url": {
        "color": "#81A1C1"
    },
    ".language-css .token.string": {
        "color": "#81A1C1"
    },
    ".style .token.string": {
        "color": "#81A1C1"
    },
    "variable": {
        "color": "#81A1C1"
    },
    "atrule": {
        "color": "#88C0D0"
    },
    "attr-value": {
        "color": "#88C0D0"
    },
    "function": {
        "color": "#88C0D0"
    },
    "class-name": {
        "color": "#88C0D0"
    },
    "keyword": {
        "color": "#81A1C1"
    },
    "regex": {
        "color": "#EBCB8B"
    },
    "important": {
        "color": "#EBCB8B",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/one-dark.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "background": "hsl(220, 13%, 18%)",
        "color": "hsl(220, 14%, 71%)",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "\"Fira Code\", \"Fira Mono\", Menlo, Consolas, \"DejaVu Sans Mono\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "background": "hsl(220, 13%, 18%)",
        "color": "hsl(220, 14%, 71%)",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "\"Fira Code\", \"Fira Mono\", Menlo, Consolas, \"DejaVu Sans Mono\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
    },
    "code[class*=\"language-\"] *::-moz-selection": {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
    },
    "pre[class*=\"language-\"] *::-moz-selection": {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
    },
    "code[class*=\"language-\"] *::selection": {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
    },
    "pre[class*=\"language-\"] *::selection": {
        "background": "hsl(220, 13%, 28%)",
        "color": "inherit",
        "textShadow": "none"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": "0.2em 0.3em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "hsl(220, 10%, 40%)",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "hsl(220, 10%, 40%)"
    },
    "cdata": {
        "color": "hsl(220, 10%, 40%)"
    },
    "doctype": {
        "color": "hsl(220, 14%, 71%)"
    },
    "punctuation": {
        "color": "hsl(220, 14%, 71%)"
    },
    "entity": {
        "color": "hsl(220, 14%, 71%)",
        "cursor": "help"
    },
    "attr-name": {
        "color": "hsl(29, 54%, 61%)"
    },
    "class-name": {
        "color": "hsl(29, 54%, 61%)"
    },
    "boolean": {
        "color": "hsl(29, 54%, 61%)"
    },
    "constant": {
        "color": "hsl(29, 54%, 61%)"
    },
    "number": {
        "color": "hsl(29, 54%, 61%)"
    },
    "atrule": {
        "color": "hsl(29, 54%, 61%)"
    },
    "keyword": {
        "color": "hsl(286, 60%, 67%)"
    },
    "property": {
        "color": "hsl(355, 65%, 65%)"
    },
    "tag": {
        "color": "hsl(355, 65%, 65%)"
    },
    "symbol": {
        "color": "hsl(355, 65%, 65%)"
    },
    "deleted": {
        "color": "hsl(355, 65%, 65%)"
    },
    "important": {
        "color": "hsl(355, 65%, 65%)"
    },
    "selector": {
        "color": "hsl(95, 38%, 62%)"
    },
    "string": {
        "color": "hsl(95, 38%, 62%)"
    },
    "char": {
        "color": "hsl(95, 38%, 62%)"
    },
    "builtin": {
        "color": "hsl(95, 38%, 62%)"
    },
    "inserted": {
        "color": "hsl(95, 38%, 62%)"
    },
    "regex": {
        "color": "hsl(95, 38%, 62%)"
    },
    "attr-value": {
        "color": "hsl(95, 38%, 62%)"
    },
    "attr-value > .token.punctuation": {
        "color": "hsl(95, 38%, 62%)"
    },
    "variable": {
        "color": "hsl(207, 82%, 66%)"
    },
    "operator": {
        "color": "hsl(207, 82%, 66%)"
    },
    "function": {
        "color": "hsl(207, 82%, 66%)"
    },
    "url": {
        "color": "hsl(187, 47%, 55%)"
    },
    "attr-value > .token.punctuation.attr-equals": {
        "color": "hsl(220, 14%, 71%)"
    },
    "special-attr > .token.attr-value > .token.value.css": {
        "color": "hsl(220, 14%, 71%)"
    },
    ".language-css .token.selector": {
        "color": "hsl(355, 65%, 65%)"
    },
    ".language-css .token.property": {
        "color": "hsl(220, 14%, 71%)"
    },
    ".language-css .token.function": {
        "color": "hsl(187, 47%, 55%)"
    },
    ".language-css .token.url > .token.function": {
        "color": "hsl(187, 47%, 55%)"
    },
    ".language-css .token.url > .token.string.url": {
        "color": "hsl(95, 38%, 62%)"
    },
    ".language-css .token.important": {
        "color": "hsl(286, 60%, 67%)"
    },
    ".language-css .token.atrule .token.rule": {
        "color": "hsl(286, 60%, 67%)"
    },
    ".language-javascript .token.operator": {
        "color": "hsl(286, 60%, 67%)"
    },
    ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
        "color": "hsl(5, 48%, 51%)"
    },
    ".language-json .token.operator": {
        "color": "hsl(220, 14%, 71%)"
    },
    ".language-json .token.null.keyword": {
        "color": "hsl(29, 54%, 61%)"
    },
    ".language-markdown .token.url": {
        "color": "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url > .token.operator": {
        "color": "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url-reference.url > .token.string": {
        "color": "hsl(220, 14%, 71%)"
    },
    ".language-markdown .token.url > .token.content": {
        "color": "hsl(207, 82%, 66%)"
    },
    ".language-markdown .token.url > .token.url": {
        "color": "hsl(187, 47%, 55%)"
    },
    ".language-markdown .token.url-reference.url": {
        "color": "hsl(187, 47%, 55%)"
    },
    ".language-markdown .token.blockquote.punctuation": {
        "color": "hsl(220, 10%, 40%)",
        "fontStyle": "italic"
    },
    ".language-markdown .token.hr.punctuation": {
        "color": "hsl(220, 10%, 40%)",
        "fontStyle": "italic"
    },
    ".language-markdown .token.code-snippet": {
        "color": "hsl(95, 38%, 62%)"
    },
    ".language-markdown .token.bold .token.content": {
        "color": "hsl(29, 54%, 61%)"
    },
    ".language-markdown .token.italic .token.content": {
        "color": "hsl(286, 60%, 67%)"
    },
    ".language-markdown .token.strike .token.content": {
        "color": "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.strike .token.punctuation": {
        "color": "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.list.punctuation": {
        "color": "hsl(355, 65%, 65%)"
    },
    ".language-markdown .token.title.important > .token.punctuation": {
        "color": "hsl(355, 65%, 65%)"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "namespace": {
        "Opacity": "0.8"
    },
    "token.tab:not(:empty):before": {
        "color": "hsla(220, 14%, 71%, 0.15)",
        "textShadow": "none"
    },
    "token.cr:before": {
        "color": "hsla(220, 14%, 71%, 0.15)",
        "textShadow": "none"
    },
    "token.lf:before": {
        "color": "hsla(220, 14%, 71%, 0.15)",
        "textShadow": "none"
    },
    "token.space:before": {
        "color": "hsla(220, 14%, 71%, 0.15)",
        "textShadow": "none"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
        "marginRight": "0.4em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 9%, 55%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 9%, 55%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 9%, 55%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
        "background": "hsl(220, 13%, 28%)",
        "color": "hsl(220, 14%, 71%)"
    },
    ".line-highlight.line-highlight": {
        "background": "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-highlight.line-highlight:before": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 14%, 71%)",
        "padding": "0.1em 0.6em",
        "borderRadius": "0.3em",
        "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    ".line-highlight.line-highlight[data-end]:after": {
        "background": "hsl(220, 13%, 26%)",
        "color": "hsl(220, 14%, 71%)",
        "padding": "0.1em 0.6em",
        "borderRadius": "0.3em",
        "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
        "backgroundColor": "hsla(220, 100%, 80%, 0.04)"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "hsla(220, 14%, 71%, 0.15)"
    },
    ".command-line .command-line-prompt": {
        "borderRightColor": "hsla(220, 14%, 71%, 0.15)"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "hsl(220, 14%, 45%)"
    },
    ".command-line .command-line-prompt > span:before": {
        "color": "hsl(220, 14%, 45%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
        "color": "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
        "color": "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
        "color": "hsl(355, 65%, 65%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
        "color": "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
        "color": "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
        "color": "hsl(95, 38%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
        "color": "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
        "color": "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
        "color": "hsl(207, 82%, 66%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
        "color": "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
        "color": "hsl(286, 60%, 67%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
        "color": "hsl(286, 60%, 67%)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
        "backgroundColor": "hsla(353, 100%, 66%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
        "backgroundColor": "hsla(353, 100%, 66%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
        "backgroundColor": "hsla(137, 100%, 55%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
        "backgroundColor": "hsla(137, 100%, 55%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    ".prism-previewer.prism-previewer:before": {
        "borderColor": "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-gradient.prism-previewer-gradient div": {
        "borderColor": "hsl(224, 13%, 17%)",
        "borderRadius": "0.3em"
    },
    ".prism-previewer-color.prism-previewer-color:before": {
        "borderRadius": "0.3em"
    },
    ".prism-previewer-easing.prism-previewer-easing:before": {
        "borderRadius": "0.3em"
    },
    ".prism-previewer.prism-previewer:after": {
        "borderTopColor": "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-flipped.prism-previewer-flipped.after": {
        "borderBottomColor": "hsl(224, 13%, 17%)"
    },
    ".prism-previewer-angle.prism-previewer-angle:before": {
        "background": "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-time.prism-previewer-time:before": {
        "background": "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-easing.prism-previewer-easing": {
        "background": "hsl(219, 13%, 22%)"
    },
    ".prism-previewer-angle.prism-previewer-angle circle": {
        "stroke": "hsl(220, 14%, 71%)",
        "strokeOpacity": "1"
    },
    ".prism-previewer-time.prism-previewer-time circle": {
        "stroke": "hsl(220, 14%, 71%)",
        "strokeOpacity": "1"
    },
    ".prism-previewer-easing.prism-previewer-easing circle": {
        "stroke": "hsl(220, 14%, 71%)",
        "fill": "transparent"
    },
    ".prism-previewer-easing.prism-previewer-easing path": {
        "stroke": "hsl(220, 14%, 71%)"
    },
    ".prism-previewer-easing.prism-previewer-easing line": {
        "stroke": "hsl(220, 14%, 71%)"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/one-light.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "background": "hsl(230, 1%, 98%)",
        "color": "hsl(230, 8%, 24%)",
        "fontFamily": "\"Fira Code\", \"Fira Mono\", Menlo, Consolas, \"DejaVu Sans Mono\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "background": "hsl(230, 1%, 98%)",
        "color": "hsl(230, 8%, 24%)",
        "fontFamily": "\"Fira Code\", \"Fira Mono\", Menlo, Consolas, \"DejaVu Sans Mono\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
    },
    "code[class*=\"language-\"] *::-moz-selection": {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
    },
    "pre[class*=\"language-\"] *::-moz-selection": {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
    },
    "code[class*=\"language-\"] *::selection": {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
    },
    "pre[class*=\"language-\"] *::selection": {
        "background": "hsl(230, 1%, 90%)",
        "color": "inherit"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": "0.2em 0.3em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "hsl(230, 4%, 64%)",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "hsl(230, 4%, 64%)"
    },
    "cdata": {
        "color": "hsl(230, 4%, 64%)"
    },
    "doctype": {
        "color": "hsl(230, 8%, 24%)"
    },
    "punctuation": {
        "color": "hsl(230, 8%, 24%)"
    },
    "entity": {
        "color": "hsl(230, 8%, 24%)",
        "cursor": "help"
    },
    "attr-name": {
        "color": "hsl(35, 99%, 36%)"
    },
    "class-name": {
        "color": "hsl(35, 99%, 36%)"
    },
    "boolean": {
        "color": "hsl(35, 99%, 36%)"
    },
    "constant": {
        "color": "hsl(35, 99%, 36%)"
    },
    "number": {
        "color": "hsl(35, 99%, 36%)"
    },
    "atrule": {
        "color": "hsl(35, 99%, 36%)"
    },
    "keyword": {
        "color": "hsl(301, 63%, 40%)"
    },
    "property": {
        "color": "hsl(5, 74%, 59%)"
    },
    "tag": {
        "color": "hsl(5, 74%, 59%)"
    },
    "symbol": {
        "color": "hsl(5, 74%, 59%)"
    },
    "deleted": {
        "color": "hsl(5, 74%, 59%)"
    },
    "important": {
        "color": "hsl(5, 74%, 59%)"
    },
    "selector": {
        "color": "hsl(119, 34%, 47%)"
    },
    "string": {
        "color": "hsl(119, 34%, 47%)"
    },
    "char": {
        "color": "hsl(119, 34%, 47%)"
    },
    "builtin": {
        "color": "hsl(119, 34%, 47%)"
    },
    "inserted": {
        "color": "hsl(119, 34%, 47%)"
    },
    "regex": {
        "color": "hsl(119, 34%, 47%)"
    },
    "attr-value": {
        "color": "hsl(119, 34%, 47%)"
    },
    "attr-value > .token.punctuation": {
        "color": "hsl(119, 34%, 47%)"
    },
    "variable": {
        "color": "hsl(221, 87%, 60%)"
    },
    "operator": {
        "color": "hsl(221, 87%, 60%)"
    },
    "function": {
        "color": "hsl(221, 87%, 60%)"
    },
    "url": {
        "color": "hsl(198, 99%, 37%)"
    },
    "attr-value > .token.punctuation.attr-equals": {
        "color": "hsl(230, 8%, 24%)"
    },
    "special-attr > .token.attr-value > .token.value.css": {
        "color": "hsl(230, 8%, 24%)"
    },
    ".language-css .token.selector": {
        "color": "hsl(5, 74%, 59%)"
    },
    ".language-css .token.property": {
        "color": "hsl(230, 8%, 24%)"
    },
    ".language-css .token.function": {
        "color": "hsl(198, 99%, 37%)"
    },
    ".language-css .token.url > .token.function": {
        "color": "hsl(198, 99%, 37%)"
    },
    ".language-css .token.url > .token.string.url": {
        "color": "hsl(119, 34%, 47%)"
    },
    ".language-css .token.important": {
        "color": "hsl(301, 63%, 40%)"
    },
    ".language-css .token.atrule .token.rule": {
        "color": "hsl(301, 63%, 40%)"
    },
    ".language-javascript .token.operator": {
        "color": "hsl(301, 63%, 40%)"
    },
    ".language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation": {
        "color": "hsl(344, 84%, 43%)"
    },
    ".language-json .token.operator": {
        "color": "hsl(230, 8%, 24%)"
    },
    ".language-json .token.null.keyword": {
        "color": "hsl(35, 99%, 36%)"
    },
    ".language-markdown .token.url": {
        "color": "hsl(230, 8%, 24%)"
    },
    ".language-markdown .token.url > .token.operator": {
        "color": "hsl(230, 8%, 24%)"
    },
    ".language-markdown .token.url-reference.url > .token.string": {
        "color": "hsl(230, 8%, 24%)"
    },
    ".language-markdown .token.url > .token.content": {
        "color": "hsl(221, 87%, 60%)"
    },
    ".language-markdown .token.url > .token.url": {
        "color": "hsl(198, 99%, 37%)"
    },
    ".language-markdown .token.url-reference.url": {
        "color": "hsl(198, 99%, 37%)"
    },
    ".language-markdown .token.blockquote.punctuation": {
        "color": "hsl(230, 4%, 64%)",
        "fontStyle": "italic"
    },
    ".language-markdown .token.hr.punctuation": {
        "color": "hsl(230, 4%, 64%)",
        "fontStyle": "italic"
    },
    ".language-markdown .token.code-snippet": {
        "color": "hsl(119, 34%, 47%)"
    },
    ".language-markdown .token.bold .token.content": {
        "color": "hsl(35, 99%, 36%)"
    },
    ".language-markdown .token.italic .token.content": {
        "color": "hsl(301, 63%, 40%)"
    },
    ".language-markdown .token.strike .token.content": {
        "color": "hsl(5, 74%, 59%)"
    },
    ".language-markdown .token.strike .token.punctuation": {
        "color": "hsl(5, 74%, 59%)"
    },
    ".language-markdown .token.list.punctuation": {
        "color": "hsl(5, 74%, 59%)"
    },
    ".language-markdown .token.title.important > .token.punctuation": {
        "color": "hsl(5, 74%, 59%)"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "namespace": {
        "Opacity": "0.8"
    },
    "token.tab:not(:empty):before": {
        "color": "hsla(230, 8%, 24%, 0.2)"
    },
    "token.cr:before": {
        "color": "hsla(230, 8%, 24%, 0.2)"
    },
    "token.lf:before": {
        "color": "hsla(230, 8%, 24%, 0.2)"
    },
    "token.space:before": {
        "color": "hsla(230, 8%, 24%, 0.2)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item": {
        "marginRight": "0.4em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 6%, 44%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 6%, 44%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 6%, 44%)",
        "padding": "0.1em 0.4em",
        "borderRadius": "0.3em"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
    },
    "div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus": {
        "background": "hsl(230, 1%, 78%)",
        "color": "hsl(230, 8%, 24%)"
    },
    ".line-highlight.line-highlight": {
        "background": "hsla(230, 8%, 24%, 0.05)"
    },
    ".line-highlight.line-highlight:before": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 8%, 24%)",
        "padding": "0.1em 0.6em",
        "borderRadius": "0.3em",
        "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    ".line-highlight.line-highlight[data-end]:after": {
        "background": "hsl(230, 1%, 90%)",
        "color": "hsl(230, 8%, 24%)",
        "padding": "0.1em 0.6em",
        "borderRadius": "0.3em",
        "boxShadow": "0 2px 0 0 rgba(0, 0, 0, 0.2)"
    },
    "pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before": {
        "backgroundColor": "hsla(230, 8%, 24%, 0.05)"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "hsla(230, 8%, 24%, 0.2)"
    },
    ".command-line .command-line-prompt": {
        "borderRightColor": "hsla(230, 8%, 24%, 0.2)"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "hsl(230, 1%, 62%)"
    },
    ".command-line .command-line-prompt > span:before": {
        "color": "hsl(230, 1%, 62%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-1": {
        "color": "hsl(5, 74%, 59%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-5": {
        "color": "hsl(5, 74%, 59%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-9": {
        "color": "hsl(5, 74%, 59%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-2": {
        "color": "hsl(119, 34%, 47%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-6": {
        "color": "hsl(119, 34%, 47%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-10": {
        "color": "hsl(119, 34%, 47%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-3": {
        "color": "hsl(221, 87%, 60%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-7": {
        "color": "hsl(221, 87%, 60%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-11": {
        "color": "hsl(221, 87%, 60%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-4": {
        "color": "hsl(301, 63%, 40%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-8": {
        "color": "hsl(301, 63%, 40%)"
    },
    ".rainbow-braces .token.token.punctuation.brace-level-12": {
        "color": "hsl(301, 63%, 40%)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)": {
        "backgroundColor": "hsla(353, 100%, 66%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)": {
        "backgroundColor": "hsla(353, 100%, 66%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(353, 95%, 66%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)": {
        "backgroundColor": "hsla(137, 100%, 55%, 0.15)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)": {
        "backgroundColor": "hsla(137, 100%, 55%, 0.15)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    "pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection": {
        "backgroundColor": "hsla(135, 73%, 55%, 0.25)"
    },
    ".prism-previewer.prism-previewer:before": {
        "borderColor": "hsl(0, 0, 95%)"
    },
    ".prism-previewer-gradient.prism-previewer-gradient div": {
        "borderColor": "hsl(0, 0, 95%)",
        "borderRadius": "0.3em"
    },
    ".prism-previewer-color.prism-previewer-color:before": {
        "borderRadius": "0.3em"
    },
    ".prism-previewer-easing.prism-previewer-easing:before": {
        "borderRadius": "0.3em"
    },
    ".prism-previewer.prism-previewer:after": {
        "borderTopColor": "hsl(0, 0, 95%)"
    },
    ".prism-previewer-flipped.prism-previewer-flipped.after": {
        "borderBottomColor": "hsl(0, 0, 95%)"
    },
    ".prism-previewer-angle.prism-previewer-angle:before": {
        "background": "hsl(0, 0%, 100%)"
    },
    ".prism-previewer-time.prism-previewer-time:before": {
        "background": "hsl(0, 0%, 100%)"
    },
    ".prism-previewer-easing.prism-previewer-easing": {
        "background": "hsl(0, 0%, 100%)"
    },
    ".prism-previewer-angle.prism-previewer-angle circle": {
        "stroke": "hsl(230, 8%, 24%)",
        "strokeOpacity": "1"
    },
    ".prism-previewer-time.prism-previewer-time circle": {
        "stroke": "hsl(230, 8%, 24%)",
        "strokeOpacity": "1"
    },
    ".prism-previewer-easing.prism-previewer-easing circle": {
        "stroke": "hsl(230, 8%, 24%)",
        "fill": "transparent"
    },
    ".prism-previewer-easing.prism-previewer-easing path": {
        "stroke": "hsl(230, 8%, 24%)"
    },
    ".prism-previewer-easing.prism-previewer-easing line": {
        "stroke": "hsl(230, 8%, 24%)"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/pojoaque.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "fontSize": "15px",
        "lineHeight": "1.5",
        "color": "#dccf8f",
        "textShadow": "0"
    },
    "pre[class*=\"language-\"]": {
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordBreak": "break-all",
        "wordWrap": "break-word",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "fontSize": "15px",
        "lineHeight": "1.5",
        "color": "#DCCF8F",
        "textShadow": "0",
        "borderRadius": "5px",
        "border": "1px solid #000",
        "background": "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
        "padding": "12px",
        "overflow": "auto"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "borderRadius": "5px",
        "border": "1px solid #000",
        "color": "#DCCF8F",
        "background": "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
        "padding": "2px 6px"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "comment": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "doctype": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "cdata": {
        "color": "#586e75",
        "fontStyle": "italic"
    },
    "number": {
        "color": "#b89859"
    },
    "string": {
        "color": "#468966"
    },
    "char": {
        "color": "#468966"
    },
    "builtin": {
        "color": "#468966"
    },
    "inserted": {
        "color": "#468966"
    },
    "attr-name": {
        "color": "#b89859"
    },
    "operator": {
        "color": "#dccf8f"
    },
    "entity": {
        "color": "#dccf8f",
        "cursor": "help"
    },
    "url": {
        "color": "#dccf8f"
    },
    ".language-css .token.string": {
        "color": "#dccf8f"
    },
    ".style .token.string": {
        "color": "#dccf8f"
    },
    "selector": {
        "color": "#859900"
    },
    "regex": {
        "color": "#859900"
    },
    "atrule": {
        "color": "#cb4b16"
    },
    "keyword": {
        "color": "#cb4b16"
    },
    "attr-value": {
        "color": "#468966"
    },
    "function": {
        "color": "#b58900"
    },
    "variable": {
        "color": "#b58900"
    },
    "placeholder": {
        "color": "#b58900"
    },
    "property": {
        "color": "#b89859"
    },
    "tag": {
        "color": "#ffb03b"
    },
    "boolean": {
        "color": "#b89859"
    },
    "constant": {
        "color": "#b89859"
    },
    "symbol": {
        "color": "#b89859"
    },
    "important": {
        "color": "#dc322f"
    },
    "statement": {
        "color": "#dc322f"
    },
    "deleted": {
        "color": "#dc322f"
    },
    "punctuation": {
        "color": "#dccf8f"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/shades-of-purple.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*='language-']": {
        "color": "#9efeff",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "fontFamily": "'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontWeight": "400",
        "fontSize": "17px",
        "lineHeight": "25px",
        "letterSpacing": "0.5px",
        "textShadow": "0 1px #222245"
    },
    "pre[class*='language-']": {
        "color": "#9efeff",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "fontFamily": "'Operator Mono', 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontWeight": "400",
        "fontSize": "17px",
        "lineHeight": "25px",
        "letterSpacing": "0.5px",
        "textShadow": "0 1px #222245",
        "padding": "2em",
        "margin": "0.5em 0",
        "overflow": "auto",
        "background": "#1e1e3f"
    },
    "pre[class*='language-']::-moz-selection": {
        "color": "inherit",
        "background": "#a599e9"
    },
    "pre[class*='language-'] ::-moz-selection": {
        "color": "inherit",
        "background": "#a599e9"
    },
    "code[class*='language-']::-moz-selection": {
        "color": "inherit",
        "background": "#a599e9"
    },
    "code[class*='language-'] ::-moz-selection": {
        "color": "inherit",
        "background": "#a599e9"
    },
    "pre[class*='language-']::selection": {
        "color": "inherit",
        "background": "#a599e9"
    },
    "pre[class*='language-'] ::selection": {
        "color": "inherit",
        "background": "#a599e9"
    },
    "code[class*='language-']::selection": {
        "color": "inherit",
        "background": "#a599e9"
    },
    "code[class*='language-'] ::selection": {
        "color": "inherit",
        "background": "#a599e9"
    },
    ":not(pre) > code[class*='language-']": {
        "background": "#1e1e3f",
        "padding": "0.1em",
        "borderRadius": "0.3em"
    },
    "": {
        "fontWeight": "400"
    },
    "comment": {
        "color": "#b362ff"
    },
    "prolog": {
        "color": "#b362ff"
    },
    "cdata": {
        "color": "#b362ff"
    },
    "delimiter": {
        "color": "#ff9d00"
    },
    "keyword": {
        "color": "#ff9d00"
    },
    "selector": {
        "color": "#ff9d00"
    },
    "important": {
        "color": "#ff9d00"
    },
    "atrule": {
        "color": "#ff9d00"
    },
    "operator": {
        "color": "rgb(255, 180, 84)",
        "background": "none"
    },
    "attr-name": {
        "color": "rgb(255, 180, 84)"
    },
    "punctuation": {
        "color": "#ffffff"
    },
    "boolean": {
        "color": "rgb(255, 98, 140)"
    },
    "tag": {
        "color": "rgb(255, 157, 0)"
    },
    "tag.punctuation": {
        "color": "rgb(255, 157, 0)"
    },
    "doctype": {
        "color": "rgb(255, 157, 0)"
    },
    "builtin": {
        "color": "rgb(255, 157, 0)"
    },
    "entity": {
        "color": "#6897bb",
        "background": "none"
    },
    "symbol": {
        "color": "#6897bb"
    },
    "number": {
        "color": "#ff628c"
    },
    "property": {
        "color": "#ff628c"
    },
    "constant": {
        "color": "#ff628c"
    },
    "variable": {
        "color": "#ff628c"
    },
    "string": {
        "color": "#a5ff90"
    },
    "char": {
        "color": "#a5ff90"
    },
    "attr-value": {
        "color": "#a5c261"
    },
    "attr-value.punctuation": {
        "color": "#a5c261"
    },
    "attr-value.punctuation:first-child": {
        "color": "#a9b7c6"
    },
    "url": {
        "color": "#287bde",
        "textDecoration": "underline",
        "background": "none"
    },
    "function": {
        "color": "rgb(250, 208, 0)"
    },
    "regex": {
        "background": "#364135"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "inserted": {
        "background": "#00ff00"
    },
    "deleted": {
        "background": "#ff000d"
    },
    "code.language-css .token.property": {
        "color": "#a9b7c6"
    },
    "code.language-css .token.property + .token.punctuation": {
        "color": "#a9b7c6"
    },
    "code.language-css .token.id": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.class": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.attribute": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.pseudo-class": {
        "color": "#ffc66d"
    },
    "code.language-css .token.selector > .token.pseudo-element": {
        "color": "#ffc66d"
    },
    "class-name": {
        "color": "#fb94ff"
    },
    ".language-css .token.string": {
        "background": "none"
    },
    ".style .token.string": {
        "background": "none"
    },
    ".line-highlight.line-highlight": {
        "marginTop": "36px",
        "background": "linear-gradient(to right, rgba(179, 98, 255, 0.17), transparent)"
    },
    ".line-highlight.line-highlight:before": {
        "content": "''"
    },
    ".line-highlight.line-highlight[data-end]:after": {
        "content": "''"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/solarized-dark-atom.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#839496",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#839496",
        "textShadow": "0 1px rgba(0, 0, 0, 0.3)",
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "borderRadius": "0.3em",
        "background": "#002b36"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#002b36",
        "padding": ".1em",
        "borderRadius": ".3em"
    },
    "comment": {
        "color": "#586e75"
    },
    "prolog": {
        "color": "#586e75"
    },
    "doctype": {
        "color": "#586e75"
    },
    "cdata": {
        "color": "#586e75"
    },
    "punctuation": {
        "color": "#93a1a1"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#268bd2"
    },
    "keyword": {
        "color": "#268bd2"
    },
    "tag": {
        "color": "#268bd2"
    },
    "class-name": {
        "color": "#FFFFB6",
        "textDecoration": "underline"
    },
    "boolean": {
        "color": "#b58900"
    },
    "constant": {
        "color": "#b58900"
    },
    "symbol": {
        "color": "#dc322f"
    },
    "deleted": {
        "color": "#dc322f"
    },
    "number": {
        "color": "#859900"
    },
    "selector": {
        "color": "#859900"
    },
    "attr-name": {
        "color": "#859900"
    },
    "string": {
        "color": "#859900"
    },
    "char": {
        "color": "#859900"
    },
    "builtin": {
        "color": "#859900"
    },
    "inserted": {
        "color": "#859900"
    },
    "variable": {
        "color": "#268bd2"
    },
    "operator": {
        "color": "#EDEDED"
    },
    "function": {
        "color": "#268bd2"
    },
    "regex": {
        "color": "#E9C062"
    },
    "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
    },
    "entity": {
        "color": "#FFFFB6",
        "cursor": "help"
    },
    "url": {
        "color": "#96CBFE"
    },
    ".language-css .token.string": {
        "color": "#87C38A"
    },
    ".style .token.string": {
        "color": "#87C38A"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "atrule": {
        "color": "#F9EE98"
    },
    "attr-value": {
        "color": "#F9EE98"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/synthwave84.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#f92aad",
        "textShadow": "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#f92aad",
        "textShadow": "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
        "background": "none",
        "fontFamily": "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
        "fontSize": "1em",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "backgroundColor": "transparent !important",
        "backgroundImage": "linear-gradient(to bottom, #2a2139 75%, #34294f)"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "backgroundColor": "transparent !important",
        "backgroundImage": "linear-gradient(to bottom, #2a2139 75%, #34294f)",
        "padding": ".1em",
        "borderRadius": ".3em",
        "whiteSpace": "normal"
    },
    "comment": {
        "color": "#8e8e8e"
    },
    "block-comment": {
        "color": "#8e8e8e"
    },
    "prolog": {
        "color": "#8e8e8e"
    },
    "doctype": {
        "color": "#8e8e8e"
    },
    "cdata": {
        "color": "#8e8e8e"
    },
    "punctuation": {
        "color": "#ccc"
    },
    "tag": {
        "color": "#e2777a"
    },
    "attr-name": {
        "color": "#e2777a"
    },
    "namespace": {
        "color": "#e2777a"
    },
    "number": {
        "color": "#e2777a"
    },
    "unit": {
        "color": "#e2777a"
    },
    "hexcode": {
        "color": "#e2777a"
    },
    "deleted": {
        "color": "#e2777a"
    },
    "property": {
        "color": "#72f1b8",
        "textShadow": "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
    },
    "selector": {
        "color": "#72f1b8",
        "textShadow": "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475"
    },
    "function-name": {
        "color": "#6196cc"
    },
    "boolean": {
        "color": "#fdfdfd",
        "textShadow": "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
    },
    "selector.id": {
        "color": "#fdfdfd",
        "textShadow": "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
    },
    "function": {
        "color": "#fdfdfd",
        "textShadow": "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975"
    },
    "class-name": {
        "color": "#fff5f6",
        "textShadow": "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75"
    },
    "constant": {
        "color": "#f92aad",
        "textShadow": "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
    },
    "symbol": {
        "color": "#f92aad",
        "textShadow": "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3"
    },
    "important": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",
        "fontWeight": "bold"
    },
    "atrule": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
    },
    "keyword": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
    },
    "selector.class": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
    },
    "builtin": {
        "color": "#f4eee4",
        "textShadow": "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575"
    },
    "string": {
        "color": "#f87c32"
    },
    "char": {
        "color": "#f87c32"
    },
    "attr-value": {
        "color": "#f87c32"
    },
    "regex": {
        "color": "#f87c32"
    },
    "variable": {
        "color": "#f87c32"
    },
    "operator": {
        "color": "#67cdcc"
    },
    "entity": {
        "color": "#67cdcc",
        "cursor": "help"
    },
    "url": {
        "color": "#67cdcc"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "inserted": {
        "color": "green"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/vs.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#393A34",
        "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": ".9em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]": {
        "color": "#393A34",
        "fontFamily": "\"Consolas\", \"Bitstream Vera Sans Mono\", \"Courier New\", Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "fontSize": ".9em",
        "lineHeight": "1.2em",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "border": "1px solid #dddddd",
        "backgroundColor": "white"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "background": "#C1DEF1"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "background": "#C1DEF1"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "background": "#C1DEF1"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "background": "#C1DEF1"
    },
    "pre[class*=\"language-\"]::selection": {
        "background": "#C1DEF1"
    },
    "pre[class*=\"language-\"] ::selection": {
        "background": "#C1DEF1"
    },
    "code[class*=\"language-\"]::selection": {
        "background": "#C1DEF1"
    },
    "code[class*=\"language-\"] ::selection": {
        "background": "#C1DEF1"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".2em",
        "paddingTop": "1px",
        "paddingBottom": "1px",
        "background": "#f8f8f8",
        "border": "1px solid #dddddd"
    },
    "comment": {
        "color": "#008000",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "#008000",
        "fontStyle": "italic"
    },
    "doctype": {
        "color": "#008000",
        "fontStyle": "italic"
    },
    "cdata": {
        "color": "#008000",
        "fontStyle": "italic"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "string": {
        "color": "#A31515"
    },
    "punctuation": {
        "color": "#393A34"
    },
    "operator": {
        "color": "#393A34"
    },
    "url": {
        "color": "#36acaa"
    },
    "symbol": {
        "color": "#36acaa"
    },
    "number": {
        "color": "#36acaa"
    },
    "boolean": {
        "color": "#36acaa"
    },
    "variable": {
        "color": "#36acaa"
    },
    "constant": {
        "color": "#36acaa"
    },
    "inserted": {
        "color": "#36acaa"
    },
    "atrule": {
        "color": "#0000ff"
    },
    "keyword": {
        "color": "#0000ff"
    },
    "attr-value": {
        "color": "#0000ff"
    },
    ".language-autohotkey .token.selector": {
        "color": "#0000ff"
    },
    ".language-json .token.boolean": {
        "color": "#0000ff"
    },
    ".language-json .token.number": {
        "color": "#0000ff"
    },
    "code[class*=\"language-css\"]": {
        "color": "#0000ff"
    },
    "function": {
        "color": "#393A34"
    },
    "deleted": {
        "color": "#9a050f"
    },
    ".language-autohotkey .token.tag": {
        "color": "#9a050f"
    },
    "selector": {
        "color": "#800000"
    },
    ".language-autohotkey .token.keyword": {
        "color": "#00009f"
    },
    "important": {
        "color": "#e90",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "class-name": {
        "color": "#2B91AF"
    },
    ".language-json .token.property": {
        "color": "#2B91AF"
    },
    "tag": {
        "color": "#800000"
    },
    "attr-name": {
        "color": "#ff0000"
    },
    "property": {
        "color": "#ff0000"
    },
    "regex": {
        "color": "#ff0000"
    },
    "entity": {
        "color": "#ff0000"
    },
    "directive.tag.tag": {
        "background": "#ffff00",
        "color": "#393A34"
    },
    ".line-numbers.line-numbers .line-numbers-rows": {
        "borderRightColor": "#a5a5a5"
    },
    ".line-numbers .line-numbers-rows > span:before": {
        "color": "#2B91AF"
    },
    ".line-highlight.line-highlight": {
        "background": "linear-gradient(to right, rgba(193, 222, 241, 0.2) 70%, rgba(221, 222, 241, 0))"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "pre[class*=\"language-\"]": {
        "color": "#d4d4d4",
        "fontSize": "13px",
        "textShadow": "none",
        "fontFamily": "Menlo, Monaco, Consolas, \"Andale Mono\", \"Ubuntu Mono\", \"Courier New\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "1em",
        "margin": ".5em 0",
        "overflow": "auto",
        "background": "#1e1e1e"
    },
    "code[class*=\"language-\"]": {
        "color": "#d4d4d4",
        "fontSize": "13px",
        "textShadow": "none",
        "fontFamily": "Menlo, Monaco, Consolas, \"Andale Mono\", \"Ubuntu Mono\", \"Courier New\", monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#264F78"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "#264F78"
    },
    "pre[class*=\"language-\"] *::selection": {
        "textShadow": "none",
        "background": "#264F78"
    },
    "code[class*=\"language-\"] *::selection": {
        "textShadow": "none",
        "background": "#264F78"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "padding": ".1em .3em",
        "borderRadius": ".3em",
        "color": "#db4c69",
        "background": "#1e1e1e"
    },
    ".namespace": {
        "Opacity": ".7"
    },
    "doctype.doctype-tag": {
        "color": "#569CD6"
    },
    "doctype.name": {
        "color": "#9cdcfe"
    },
    "comment": {
        "color": "#6a9955"
    },
    "prolog": {
        "color": "#6a9955"
    },
    "punctuation": {
        "color": "#d4d4d4"
    },
    ".language-html .language-css .token.punctuation": {
        "color": "#d4d4d4"
    },
    ".language-html .language-javascript .token.punctuation": {
        "color": "#d4d4d4"
    },
    "property": {
        "color": "#9cdcfe"
    },
    "tag": {
        "color": "#569cd6"
    },
    "boolean": {
        "color": "#569cd6"
    },
    "number": {
        "color": "#b5cea8"
    },
    "constant": {
        "color": "#9cdcfe"
    },
    "symbol": {
        "color": "#b5cea8"
    },
    "inserted": {
        "color": "#b5cea8"
    },
    "unit": {
        "color": "#b5cea8"
    },
    "selector": {
        "color": "#d7ba7d"
    },
    "attr-name": {
        "color": "#9cdcfe"
    },
    "string": {
        "color": "#ce9178"
    },
    "char": {
        "color": "#ce9178"
    },
    "builtin": {
        "color": "#ce9178"
    },
    "deleted": {
        "color": "#ce9178"
    },
    ".language-css .token.string.url": {
        "textDecoration": "underline"
    },
    "operator": {
        "color": "#d4d4d4"
    },
    "entity": {
        "color": "#569cd6"
    },
    "operator.arrow": {
        "color": "#569CD6"
    },
    "atrule": {
        "color": "#ce9178"
    },
    "atrule.rule": {
        "color": "#c586c0"
    },
    "atrule.url": {
        "color": "#9cdcfe"
    },
    "atrule.url.function": {
        "color": "#dcdcaa"
    },
    "atrule.url.punctuation": {
        "color": "#d4d4d4"
    },
    "keyword": {
        "color": "#569CD6"
    },
    "keyword.module": {
        "color": "#c586c0"
    },
    "keyword.control-flow": {
        "color": "#c586c0"
    },
    "function": {
        "color": "#dcdcaa"
    },
    "function.maybe-class-name": {
        "color": "#dcdcaa"
    },
    "regex": {
        "color": "#d16969"
    },
    "important": {
        "color": "#569cd6"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "class-name": {
        "color": "#4ec9b0"
    },
    "maybe-class-name": {
        "color": "#4ec9b0"
    },
    "console": {
        "color": "#9cdcfe"
    },
    "parameter": {
        "color": "#9cdcfe"
    },
    "interpolation": {
        "color": "#9cdcfe"
    },
    "punctuation.interpolation-punctuation": {
        "color": "#569cd6"
    },
    "variable": {
        "color": "#9cdcfe"
    },
    "imports.maybe-class-name": {
        "color": "#9cdcfe"
    },
    "exports.maybe-class-name": {
        "color": "#9cdcfe"
    },
    "escape": {
        "color": "#d7ba7d"
    },
    "tag.punctuation": {
        "color": "#808080"
    },
    "cdata": {
        "color": "#808080"
    },
    "attr-value": {
        "color": "#ce9178"
    },
    "attr-value.punctuation": {
        "color": "#ce9178"
    },
    "attr-value.punctuation.attr-equals": {
        "color": "#d4d4d4"
    },
    "namespace": {
        "color": "#4ec9b0"
    },
    "pre[class*=\"language-javascript\"]": {
        "color": "#9cdcfe"
    },
    "code[class*=\"language-javascript\"]": {
        "color": "#9cdcfe"
    },
    "pre[class*=\"language-jsx\"]": {
        "color": "#9cdcfe"
    },
    "code[class*=\"language-jsx\"]": {
        "color": "#9cdcfe"
    },
    "pre[class*=\"language-typescript\"]": {
        "color": "#9cdcfe"
    },
    "code[class*=\"language-typescript\"]": {
        "color": "#9cdcfe"
    },
    "pre[class*=\"language-tsx\"]": {
        "color": "#9cdcfe"
    },
    "code[class*=\"language-tsx\"]": {
        "color": "#9cdcfe"
    },
    "pre[class*=\"language-css\"]": {
        "color": "#ce9178"
    },
    "code[class*=\"language-css\"]": {
        "color": "#ce9178"
    },
    "pre[class*=\"language-html\"]": {
        "color": "#d4d4d4"
    },
    "code[class*=\"language-html\"]": {
        "color": "#d4d4d4"
    },
    ".language-regex .token.anchor": {
        "color": "#dcdcaa"
    },
    ".language-html .token.punctuation": {
        "color": "#808080"
    },
    "pre[class*=\"language-\"] > code[class*=\"language-\"]": {
        "position": "relative",
        "zIndex": "1"
    },
    ".line-highlight.line-highlight": {
        "background": "#f7ebc6",
        "boxShadow": "inset 5px 0 0 #f7d87c",
        "zIndex": "0"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/xonokai.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordWrap": "normal",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "fontSize": "14px",
        "color": "#76d9e6",
        "textShadow": "none"
    },
    "pre[class*=\"language-\"]": {
        "MozTabSize": "2",
        "OTabSize": "2",
        "tabSize": "2",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "whiteSpace": "pre-wrap",
        "wordWrap": "normal",
        "fontFamily": "Menlo, Monaco, \"Courier New\", monospace",
        "fontSize": "14px",
        "color": "#76d9e6",
        "textShadow": "none",
        "background": "#2a2a2a",
        "padding": "15px",
        "borderRadius": "4px",
        "border": "1px solid #e1e1e8",
        "overflow": "auto",
        "position": "relative"
    },
    "pre > code[class*=\"language-\"]": {
        "fontSize": "1em"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "background": "#2a2a2a",
        "padding": "0.15em 0.2em 0.05em",
        "borderRadius": ".3em",
        "border": "0.13em solid #7a6652",
        "boxShadow": "1px 1px 0.3em -0.1em #000 inset"
    },
    "pre[class*=\"language-\"] code": {
        "whiteSpace": "pre",
        "display": "block"
    },
    "namespace": {
        "Opacity": ".7"
    },
    "comment": {
        "color": "#6f705e"
    },
    "prolog": {
        "color": "#6f705e"
    },
    "doctype": {
        "color": "#6f705e"
    },
    "cdata": {
        "color": "#6f705e"
    },
    "operator": {
        "color": "#a77afe"
    },
    "boolean": {
        "color": "#a77afe"
    },
    "number": {
        "color": "#a77afe"
    },
    "attr-name": {
        "color": "#e6d06c"
    },
    "string": {
        "color": "#e6d06c"
    },
    "entity": {
        "color": "#e6d06c",
        "cursor": "help"
    },
    "url": {
        "color": "#e6d06c"
    },
    ".language-css .token.string": {
        "color": "#e6d06c"
    },
    ".style .token.string": {
        "color": "#e6d06c"
    },
    "selector": {
        "color": "#a6e22d"
    },
    "inserted": {
        "color": "#a6e22d"
    },
    "atrule": {
        "color": "#ef3b7d"
    },
    "attr-value": {
        "color": "#ef3b7d"
    },
    "keyword": {
        "color": "#ef3b7d"
    },
    "important": {
        "color": "#ef3b7d",
        "fontWeight": "bold"
    },
    "deleted": {
        "color": "#ef3b7d"
    },
    "regex": {
        "color": "#76d9e6"
    },
    "statement": {
        "color": "#76d9e6",
        "fontWeight": "bold"
    },
    "placeholder": {
        "color": "#fff"
    },
    "variable": {
        "color": "#fff"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "punctuation": {
        "color": "#bebec5"
    },
    "italic": {
        "fontStyle": "italic"
    },
    "code.language-markup": {
        "color": "#f9f9f9"
    },
    "code.language-markup .token.tag": {
        "color": "#ef3b7d"
    },
    "code.language-markup .token.attr-name": {
        "color": "#a6e22d"
    },
    "code.language-markup .token.attr-value": {
        "color": "#e6d06c"
    },
    "code.language-markup .token.style": {
        "color": "#76d9e6"
    },
    "code.language-markup .token.script": {
        "color": "#76d9e6"
    },
    "code.language-markup .token.script .token.keyword": {
        "color": "#76d9e6"
    },
    ".line-highlight.line-highlight": {
        "padding": "0",
        "background": "rgba(255, 255, 255, 0.08)"
    },
    ".line-highlight.line-highlight:before": {
        "padding": "0.2em 0.5em",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "color": "black",
        "height": "1em",
        "lineHeight": "1em",
        "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)"
    },
    ".line-highlight.line-highlight[data-end]:after": {
        "padding": "0.2em 0.5em",
        "backgroundColor": "rgba(255, 255, 255, 0.4)",
        "color": "black",
        "height": "1em",
        "lineHeight": "1em",
        "boxShadow": "0 1px 1px rgba(255, 255, 255, 0.7)"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/z-touch.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _default = {
    "code[class*=\"language-\"]": {
        "color": "#22da17",
        "fontFamily": "monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "lineHeight": "25px",
        "fontSize": "18px",
        "margin": "5px 0"
    },
    "pre[class*=\"language-\"]": {
        "color": "white",
        "fontFamily": "monospace",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "wordWrap": "normal",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "lineHeight": "25px",
        "fontSize": "18px",
        "margin": "0.5em 0",
        "background": "#0a143c",
        "padding": "1em",
        "overflow": "auto"
    },
    "pre[class*=\"language-\"] *": {
        "fontFamily": "monospace"
    },
    ":not(pre) > code[class*=\"language-\"]": {
        "color": "white",
        "background": "#0a143c",
        "padding": "0.1em",
        "borderRadius": "0.3em",
        "whiteSpace": "normal"
    },
    "pre[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "pre[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "code[class*=\"language-\"]::-moz-selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "code[class*=\"language-\"] ::-moz-selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "pre[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "pre[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "code[class*=\"language-\"]::selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "code[class*=\"language-\"] ::selection": {
        "textShadow": "none",
        "background": "rgba(29, 59, 83, 0.99)"
    },
    "comment": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
    },
    "prolog": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
    },
    "cdata": {
        "color": "rgb(99, 119, 119)",
        "fontStyle": "italic"
    },
    "punctuation": {
        "color": "rgb(199, 146, 234)"
    },
    ".namespace": {
        "color": "rgb(178, 204, 214)"
    },
    "deleted": {
        "color": "rgba(239, 83, 80, 0.56)",
        "fontStyle": "italic"
    },
    "symbol": {
        "color": "rgb(128, 203, 196)"
    },
    "property": {
        "color": "rgb(128, 203, 196)"
    },
    "tag": {
        "color": "rgb(127, 219, 202)"
    },
    "operator": {
        "color": "rgb(127, 219, 202)"
    },
    "keyword": {
        "color": "rgb(127, 219, 202)"
    },
    "boolean": {
        "color": "rgb(255, 88, 116)"
    },
    "number": {
        "color": "rgb(247, 140, 108)"
    },
    "constant": {
        "color": "rgb(34 183 199)"
    },
    "function": {
        "color": "rgb(34 183 199)"
    },
    "builtin": {
        "color": "rgb(34 183 199)"
    },
    "char": {
        "color": "rgb(34 183 199)"
    },
    "selector": {
        "color": "rgb(199, 146, 234)",
        "fontStyle": "italic"
    },
    "doctype": {
        "color": "rgb(199, 146, 234)",
        "fontStyle": "italic"
    },
    "attr-name": {
        "color": "rgb(173, 219, 103)",
        "fontStyle": "italic"
    },
    "inserted": {
        "color": "rgb(173, 219, 103)",
        "fontStyle": "italic"
    },
    "string": {
        "color": "rgb(173, 219, 103)"
    },
    "url": {
        "color": "rgb(173, 219, 103)"
    },
    "entity": {
        "color": "rgb(173, 219, 103)"
    },
    ".language-css .token.string": {
        "color": "rgb(173, 219, 103)"
    },
    ".style .token.string": {
        "color": "rgb(173, 219, 103)"
    },
    "class-name": {
        "color": "rgb(255, 203, 139)"
    },
    "atrule": {
        "color": "rgb(255, 203, 139)"
    },
    "attr-value": {
        "color": "rgb(255, 203, 139)"
    },
    "regex": {
        "color": "rgb(214, 222, 235)"
    },
    "important": {
        "color": "rgb(214, 222, 235)",
        "fontWeight": "bold"
    },
    "variable": {
        "color": "rgb(214, 222, 235)"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
};
exports["default"] = _default;

}.call(this) }),
"[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js [app-client] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__, m: module, e: exports, t: require }) { !function() {

"use strict";
var _interopRequireDefault = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.24.7/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-client] (ecmascript)");
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "a11yDark", {
    enumerable: true,
    get: function get() {
        return _a11yDark["default"];
    }
});
Object.defineProperty(exports, "atomDark", {
    enumerable: true,
    get: function get() {
        return _atomDark["default"];
    }
});
Object.defineProperty(exports, "base16AteliersulphurpoolLight", {
    enumerable: true,
    get: function get() {
        return _base16Ateliersulphurpool["default"];
    }
});
Object.defineProperty(exports, "cb", {
    enumerable: true,
    get: function get() {
        return _cb["default"];
    }
});
Object.defineProperty(exports, "coldarkCold", {
    enumerable: true,
    get: function get() {
        return _coldarkCold["default"];
    }
});
Object.defineProperty(exports, "coldarkDark", {
    enumerable: true,
    get: function get() {
        return _coldarkDark["default"];
    }
});
Object.defineProperty(exports, "coy", {
    enumerable: true,
    get: function get() {
        return _coy["default"];
    }
});
Object.defineProperty(exports, "coyWithoutShadows", {
    enumerable: true,
    get: function get() {
        return _coyWithoutShadows["default"];
    }
});
Object.defineProperty(exports, "darcula", {
    enumerable: true,
    get: function get() {
        return _darcula["default"];
    }
});
Object.defineProperty(exports, "dark", {
    enumerable: true,
    get: function get() {
        return _dark["default"];
    }
});
Object.defineProperty(exports, "dracula", {
    enumerable: true,
    get: function get() {
        return _dracula["default"];
    }
});
Object.defineProperty(exports, "duotoneDark", {
    enumerable: true,
    get: function get() {
        return _duotoneDark["default"];
    }
});
Object.defineProperty(exports, "duotoneEarth", {
    enumerable: true,
    get: function get() {
        return _duotoneEarth["default"];
    }
});
Object.defineProperty(exports, "duotoneForest", {
    enumerable: true,
    get: function get() {
        return _duotoneForest["default"];
    }
});
Object.defineProperty(exports, "duotoneLight", {
    enumerable: true,
    get: function get() {
        return _duotoneLight["default"];
    }
});
Object.defineProperty(exports, "duotoneSea", {
    enumerable: true,
    get: function get() {
        return _duotoneSea["default"];
    }
});
Object.defineProperty(exports, "duotoneSpace", {
    enumerable: true,
    get: function get() {
        return _duotoneSpace["default"];
    }
});
Object.defineProperty(exports, "funky", {
    enumerable: true,
    get: function get() {
        return _funky["default"];
    }
});
Object.defineProperty(exports, "ghcolors", {
    enumerable: true,
    get: function get() {
        return _ghcolors["default"];
    }
});
Object.defineProperty(exports, "gruvboxDark", {
    enumerable: true,
    get: function get() {
        return _gruvboxDark["default"];
    }
});
Object.defineProperty(exports, "gruvboxLight", {
    enumerable: true,
    get: function get() {
        return _gruvboxLight["default"];
    }
});
Object.defineProperty(exports, "holiTheme", {
    enumerable: true,
    get: function get() {
        return _holiTheme["default"];
    }
});
Object.defineProperty(exports, "hopscotch", {
    enumerable: true,
    get: function get() {
        return _hopscotch["default"];
    }
});
Object.defineProperty(exports, "lucario", {
    enumerable: true,
    get: function get() {
        return _lucario["default"];
    }
});
Object.defineProperty(exports, "materialDark", {
    enumerable: true,
    get: function get() {
        return _materialDark["default"];
    }
});
Object.defineProperty(exports, "materialLight", {
    enumerable: true,
    get: function get() {
        return _materialLight["default"];
    }
});
Object.defineProperty(exports, "materialOceanic", {
    enumerable: true,
    get: function get() {
        return _materialOceanic["default"];
    }
});
Object.defineProperty(exports, "nightOwl", {
    enumerable: true,
    get: function get() {
        return _nightOwl["default"];
    }
});
Object.defineProperty(exports, "nord", {
    enumerable: true,
    get: function get() {
        return _nord["default"];
    }
});
Object.defineProperty(exports, "okaidia", {
    enumerable: true,
    get: function get() {
        return _okaidia["default"];
    }
});
Object.defineProperty(exports, "oneDark", {
    enumerable: true,
    get: function get() {
        return _oneDark["default"];
    }
});
Object.defineProperty(exports, "oneLight", {
    enumerable: true,
    get: function get() {
        return _oneLight["default"];
    }
});
Object.defineProperty(exports, "pojoaque", {
    enumerable: true,
    get: function get() {
        return _pojoaque["default"];
    }
});
Object.defineProperty(exports, "prism", {
    enumerable: true,
    get: function get() {
        return _prism["default"];
    }
});
Object.defineProperty(exports, "shadesOfPurple", {
    enumerable: true,
    get: function get() {
        return _shadesOfPurple["default"];
    }
});
Object.defineProperty(exports, "solarizedDarkAtom", {
    enumerable: true,
    get: function get() {
        return _solarizedDarkAtom["default"];
    }
});
Object.defineProperty(exports, "solarizedlight", {
    enumerable: true,
    get: function get() {
        return _solarizedlight["default"];
    }
});
Object.defineProperty(exports, "synthwave84", {
    enumerable: true,
    get: function get() {
        return _synthwave["default"];
    }
});
Object.defineProperty(exports, "tomorrow", {
    enumerable: true,
    get: function get() {
        return _tomorrow["default"];
    }
});
Object.defineProperty(exports, "twilight", {
    enumerable: true,
    get: function get() {
        return _twilight["default"];
    }
});
Object.defineProperty(exports, "vs", {
    enumerable: true,
    get: function get() {
        return _vs["default"];
    }
});
Object.defineProperty(exports, "vscDarkPlus", {
    enumerable: true,
    get: function get() {
        return _vscDarkPlus["default"];
    }
});
Object.defineProperty(exports, "xonokai", {
    enumerable: true,
    get: function get() {
        return _xonokai["default"];
    }
});
Object.defineProperty(exports, "zTouch", {
    enumerable: true,
    get: function get() {
        return _zTouch["default"];
    }
});
var _coy = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coy.js [app-client] (ecmascript)"));
var _dark = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/dark.js [app-client] (ecmascript)"));
var _funky = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/funky.js [app-client] (ecmascript)"));
var _okaidia = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/okaidia.js [app-client] (ecmascript)"));
var _solarizedlight = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/solarizedlight.js [app-client] (ecmascript)"));
var _tomorrow = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/tomorrow.js [app-client] (ecmascript)"));
var _twilight = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/twilight.js [app-client] (ecmascript)"));
var _prism = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/prism.js [app-client] (ecmascript)"));
var _a11yDark = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark.js [app-client] (ecmascript)"));
var _atomDark = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/atom-dark.js [app-client] (ecmascript)"));
var _base16Ateliersulphurpool = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light.js [app-client] (ecmascript)"));
var _cb = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/cb.js [app-client] (ecmascript)"));
var _coldarkCold = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coldark-cold.js [app-client] (ecmascript)"));
var _coldarkDark = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark.js [app-client] (ecmascript)"));
var _coyWithoutShadows = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/coy-without-shadows.js [app-client] (ecmascript)"));
var _darcula = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/darcula.js [app-client] (ecmascript)"));
var _dracula = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/dracula.js [app-client] (ecmascript)"));
var _duotoneDark = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark.js [app-client] (ecmascript)"));
var _duotoneEarth = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-earth.js [app-client] (ecmascript)"));
var _duotoneForest = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-forest.js [app-client] (ecmascript)"));
var _duotoneLight = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-light.js [app-client] (ecmascript)"));
var _duotoneSea = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea.js [app-client] (ecmascript)"));
var _duotoneSpace = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/duotone-space.js [app-client] (ecmascript)"));
var _ghcolors = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/ghcolors.js [app-client] (ecmascript)"));
var _gruvboxDark = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/gruvbox-dark.js [app-client] (ecmascript)"));
var _gruvboxLight = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/gruvbox-light.js [app-client] (ecmascript)"));
var _holiTheme = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/holi-theme.js [app-client] (ecmascript)"));
var _hopscotch = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/hopscotch.js [app-client] (ecmascript)"));
var _lucario = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/lucario.js [app-client] (ecmascript)"));
var _materialDark = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/material-dark.js [app-client] (ecmascript)"));
var _materialLight = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/material-light.js [app-client] (ecmascript)"));
var _materialOceanic = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/material-oceanic.js [app-client] (ecmascript)"));
var _nightOwl = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/night-owl.js [app-client] (ecmascript)"));
var _nord = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/nord.js [app-client] (ecmascript)"));
var _oneDark = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/one-dark.js [app-client] (ecmascript)"));
var _oneLight = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/one-light.js [app-client] (ecmascript)"));
var _pojoaque = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/pojoaque.js [app-client] (ecmascript)"));
var _shadesOfPurple = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/shades-of-purple.js [app-client] (ecmascript)"));
var _solarizedDarkAtom = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/solarized-dark-atom.js [app-client] (ecmascript)"));
var _synthwave = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/synthwave84.js [app-client] (ecmascript)"));
var _vs = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/vs.js [app-client] (ecmascript)"));
var _vscDarkPlus = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus.js [app-client] (ecmascript)"));
var _xonokai = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/xonokai.js [app-client] (ecmascript)"));
var _zTouch = _interopRequireDefault(__turbopack_require__("[project]/node_modules/.pnpm/react-syntax-highlighter@15.5.0_react@18.3.1/node_modules/react-syntax-highlighter/dist/cjs/styles/prism/z-touch.js [app-client] (ecmascript)"));

}.call(this) }),
}]);

//# sourceMappingURL=6e532_react-syntax-highlighter_dist_30b7cb._.js.map