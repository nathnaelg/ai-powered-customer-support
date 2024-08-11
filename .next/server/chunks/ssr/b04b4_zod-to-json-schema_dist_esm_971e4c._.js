module.exports = {

"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addErrorMessage": ()=>addErrorMessage,
    "setResponseValueAndErrors": ()=>setResponseValueAndErrors
});
function addErrorMessage(res, key, errorMessage, refs) {
    if (!refs?.errorMessages) return;
    if (errorMessage) {
        res.errorMessage = {
            ...res.errorMessage,
            [key]: errorMessage
        };
    }
}
function setResponseValueAndErrors(res, key, value, errorMessage, refs) {
    res[key] = value;
    addErrorMessage(res, key, errorMessage, refs);
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/Options.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "defaultOptions": ()=>defaultOptions,
    "getDefaultOptions": ()=>getDefaultOptions,
    "ignoreOverride": ()=>ignoreOverride
});
const ignoreOverride = Symbol("Let zodToJsonSchema decide on which parser to use");
const defaultOptions = {
    name: undefined,
    $refStrategy: "root",
    basePath: [
        "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    definitionPath: "definitions",
    target: "jsonSchema7",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    markdownDescription: false,
    patternStrategy: "escape",
    emailStrategy: "format:email"
};
const getDefaultOptions = (options)=>typeof options === "string" ? {
        ...defaultOptions,
        name: options
    } : {
        ...defaultOptions,
        ...options
    };

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseAnyDef": ()=>parseAnyDef
});
function parseAnyDef() {
    return {};
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseArrayDef": ()=>parseArrayDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.23.8/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function parseArrayDef(def, refs) {
    const res = {
        type: "array"
    };
    if (def.type?._def?.typeName !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny) {
        res.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.type._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "items"
            ]
        });
    }
    if (def.minLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minItems", def.minLength.value, def.minLength.message, refs);
    }
    if (def.maxLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxItems", def.maxLength.value, def.maxLength.message, refs);
    }
    if (def.exactLength) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minItems", def.exactLength.value, def.exactLength.message, refs);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxItems", def.exactLength.value, def.exactLength.message, refs);
    }
    return res;
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseBigintDef": ()=>parseBigintDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function parseBigintDef(def, refs) {
    const res = {
        type: "integer",
        format: "int64"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMinimum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMinimum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                }
                break;
            case "max":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMaximum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMaximum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                }
                break;
            case "multipleOf":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "multipleOf", check.value, check.message, refs);
                break;
        }
    }
    return res;
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseBooleanDef": ()=>parseBooleanDef
});
function parseBooleanDef() {
    return {
        type: "boolean"
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseBrandedDef": ()=>parseBrandedDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function parseBrandedDef(_def, refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(_def.type._def, refs);
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseCatchDef": ()=>parseCatchDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const parseCatchDef = (def, refs)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
};

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseDateDef": ()=>parseDateDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function parseDateDef(def, refs, overrideDateStrategy) {
    const strategy = overrideDateStrategy ?? refs.dateStrategy;
    if (Array.isArray(strategy)) {
        return {
            anyOf: strategy.map((item, i)=>parseDateDef(def, refs, item))
        };
    }
    switch(strategy){
        case "string":
        case "format:date-time":
            return {
                type: "string",
                format: "date-time"
            };
        case "format:date":
            return {
                type: "string",
                format: "date"
            };
        case "integer":
            return integerDateParser(def, refs);
    }
}
const integerDateParser = (def, refs)=>{
    const res = {
        type: "integer",
        format: "unix-time"
    };
    if (refs.target === "openApi3") {
        return res;
    }
    for (const check of def.checks){
        switch(check.kind){
            case "min":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                break;
            case "max":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                break;
        }
    }
    return res;
};

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseDefaultDef": ()=>parseDefaultDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function parseDefaultDef(_def, refs) {
    return {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(_def.innerType._def, refs),
        default: _def.defaultValue()
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseEffectsDef": ()=>parseEffectsDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function parseEffectsDef(_def, refs) {
    return refs.effectStrategy === "input" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(_def.schema._def, refs) : {};
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseEnumDef": ()=>parseEnumDef
});
function parseEnumDef(def) {
    return {
        type: "string",
        enum: def.values
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseIntersectionDef": ()=>parseIntersectionDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const isJsonSchema7AllOfType = (type)=>{
    if ("type" in type && type.type === "string") return false;
    return "allOf" in type;
};
function parseIntersectionDef(def, refs) {
    const allOf = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.left._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "0"
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.right._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "allOf",
                "1"
            ]
        })
    ].filter((x)=>!!x);
    let unevaluatedProperties = refs.target === "jsonSchema2019-09" ? {
        unevaluatedProperties: false
    } : undefined;
    const mergedAllOf = [];
    // If either of the schemas is an allOf, merge them into a single allOf
    allOf.forEach((schema)=>{
        if (isJsonSchema7AllOfType(schema)) {
            mergedAllOf.push(...schema.allOf);
            if (schema.unevaluatedProperties === undefined) {
                // If one of the schemas has no unevaluatedProperties set,
                // the merged schema should also have no unevaluatedProperties set
                unevaluatedProperties = undefined;
            }
        } else {
            let nestedSchema = schema;
            if ("additionalProperties" in schema && schema.additionalProperties === false) {
                const { additionalProperties, ...rest } = schema;
                nestedSchema = rest;
            } else {
                // As soon as one of the schemas has additionalProperties set not to false, we allow unevaluatedProperties
                unevaluatedProperties = undefined;
            }
            mergedAllOf.push(nestedSchema);
        }
    });
    return mergedAllOf.length ? {
        allOf: mergedAllOf,
        ...unevaluatedProperties
    } : undefined;
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseLiteralDef": ()=>parseLiteralDef
});
function parseLiteralDef(def, refs) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" && parsedType !== "number" && parsedType !== "boolean" && parsedType !== "string") {
        return {
            type: Array.isArray(def.value) ? "array" : "object"
        };
    }
    if (refs.target === "openApi3") {
        return {
            type: parsedType === "bigint" ? "integer" : parsedType,
            enum: [
                def.value
            ]
        };
    }
    return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        const: def.value
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseStringDef": ()=>parseStringDef,
    "zodPatterns": ()=>zodPatterns
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const zodPatterns = {
    /**
     * `c` was changed to `[cC]` to replicate /i flag
     */ cuid: "^[cC][^\\s-]{8,}$",
    cuid2: "^[a-z][a-z0-9]*$",
    ulid: "^[0-9A-HJKMNP-TV-Z]{26}$",
    /**
     * `a-z` was added to replicate /i flag
     */ email: "^(?!\\.)(?!.*\\.\\.)([a-zA-Z0-9_+-\\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\\-]*\\.)+[a-zA-Z]{2,}$",
    emoji: "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
    /**
     * Unused
     */ uuid: "^[0-9a-fA-F]{8}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{4}\\b-[0-9a-fA-F]{12}$",
    /**
     * Unused
     */ ipv4: "^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$",
    /**
     * Unused
     */ ipv6: "^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$"
};
function parseStringDef(def, refs) {
    const res = {
        type: "string"
    };
    function processPattern(value) {
        return refs.patternStrategy === "escape" ? escapeNonAlphaNumeric(value) : value;
    }
    if (def.checks) {
        for (const check of def.checks){
            switch(check.kind){
                case "min":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
                    break;
                case "max":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
                    break;
                case "email":
                    switch(refs.emailStrategy){
                        case "format:email":
                            addFormat(res, "email", check.message, refs);
                            break;
                        case "format:idn-email":
                            addFormat(res, "idn-email", check.message, refs);
                            break;
                        case "pattern:zod":
                            addPattern(res, zodPatterns.email, check.message, refs);
                            break;
                    }
                    break;
                case "url":
                    addFormat(res, "uri", check.message, refs);
                    break;
                case "uuid":
                    addFormat(res, "uuid", check.message, refs);
                    break;
                case "regex":
                    addPattern(res, check.regex.source, check.message, refs);
                    break;
                case "cuid":
                    addPattern(res, zodPatterns.cuid, check.message, refs);
                    break;
                case "cuid2":
                    addPattern(res, zodPatterns.cuid2, check.message, refs);
                    break;
                case "startsWith":
                    addPattern(res, "^" + processPattern(check.value), check.message, refs);
                    break;
                case "endsWith":
                    addPattern(res, processPattern(check.value) + "$", check.message, refs);
                    break;
                case "datetime":
                    addFormat(res, "date-time", check.message, refs);
                    break;
                case "length":
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minLength", typeof res.minLength === "number" ? Math.max(res.minLength, check.value) : check.value, check.message, refs);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maxLength", typeof res.maxLength === "number" ? Math.min(res.maxLength, check.value) : check.value, check.message, refs);
                    break;
                case "includes":
                    {
                        addPattern(res, processPattern(check.value), check.message, refs);
                        break;
                    }
                case "ip":
                    {
                        if (check.version !== "v6") {
                            addFormat(res, "ipv4", check.message, refs);
                        }
                        if (check.version !== "v4") {
                            addFormat(res, "ipv6", check.message, refs);
                        }
                        break;
                    }
                case "emoji":
                    addPattern(res, zodPatterns.emoji, check.message, refs);
                    break;
                case "ulid":
                    {
                        addPattern(res, zodPatterns.ulid, check.message, refs);
                        break;
                    }
                case "toLowerCase":
                case "toUpperCase":
                case "trim":
                    break;
                default:
                    ((_)=>{})(check);
            }
        }
    }
    return res;
}
const escapeNonAlphaNumeric = (value)=>Array.from(value).map((c)=>/[a-zA-Z0-9]/.test(c) ? c : `\\${c}`).join("");
const addFormat = (schema, value, message, refs)=>{
    if (schema.format || schema.anyOf?.some((x)=>x.format)) {
        if (!schema.anyOf) {
            schema.anyOf = [];
        }
        if (schema.format) {
            schema.anyOf.push({
                format: schema.format,
                ...schema.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        format: schema.errorMessage.format
                    }
                }
            });
            delete schema.format;
            if (schema.errorMessage) {
                delete schema.errorMessage.format;
                if (Object.keys(schema.errorMessage).length === 0) {
                    delete schema.errorMessage;
                }
            }
        }
        schema.anyOf.push({
            format: value,
            ...message && refs.errorMessages && {
                errorMessage: {
                    format: message
                }
            }
        });
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "format", value, message, refs);
    }
};
const addPattern = (schema, value, message, refs)=>{
    if (schema.pattern || schema.allOf?.some((x)=>x.pattern)) {
        if (!schema.allOf) {
            schema.allOf = [];
        }
        if (schema.pattern) {
            schema.allOf.push({
                pattern: schema.pattern,
                ...schema.errorMessage && refs.errorMessages && {
                    errorMessage: {
                        pattern: schema.errorMessage.pattern
                    }
                }
            });
            delete schema.pattern;
            if (schema.errorMessage) {
                delete schema.errorMessage.pattern;
                if (Object.keys(schema.errorMessage).length === 0) {
                    delete schema.errorMessage;
                }
            }
        }
        schema.allOf.push({
            pattern: value,
            ...message && refs.errorMessages && {
                errorMessage: {
                    pattern: message
                }
            }
        });
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "pattern", value, message, refs);
    }
};

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseRecordDef": ()=>parseRecordDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.23.8/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function parseRecordDef(def, refs) {
    if (refs.target === "openApi3" && def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) {
        return {
            type: "object",
            required: def.keyType._def.values,
            properties: def.keyType._def.values.reduce((acc, key)=>({
                    ...acc,
                    [key]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
                        ...refs,
                        currentPath: [
                            ...refs.currentPath,
                            "properties",
                            key
                        ]
                    }) ?? {}
                }), {}),
            additionalProperties: false
        };
    }
    const schema = {
        type: "object",
        additionalProperties: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        }) ?? {}
    };
    if (refs.target === "openApi3") {
        return schema;
    }
    if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString && def.keyType._def.checks?.length) {
        const keyType = Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringDef"])(def.keyType._def, refs)).reduce((acc, [key, value])=>key === "type" ? acc : {
                ...acc,
                [key]: value
            }, {});
        return {
            ...schema,
            propertyNames: keyType
        };
    } else if (def.keyType?._def.typeName === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum) {
        return {
            ...schema,
            propertyNames: {
                enum: def.keyType._def.values
            }
        };
    }
    return schema;
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseMapDef": ()=>parseMapDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function parseMapDef(def, refs) {
    if (refs.mapStrategy === "record") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRecordDef"])(def, refs);
    }
    const keys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.keyType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "0"
        ]
    }) || {};
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items",
            "items",
            "1"
        ]
    }) || {};
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [
                keys,
                values
            ],
            minItems: 2,
            maxItems: 2
        }
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseNativeEnumDef": ()=>parseNativeEnumDef
});
function parseNativeEnumDef(def) {
    const object = def.values;
    const actualKeys = Object.keys(def.values).filter((key)=>{
        return typeof object[object[key]] !== "number";
    });
    const actualValues = actualKeys.map((key)=>object[key]);
    const parsedTypes = Array.from(new Set(actualValues.map((values)=>typeof values)));
    return {
        type: parsedTypes.length === 1 ? parsedTypes[0] === "string" ? "string" : "number" : [
            "string",
            "number"
        ],
        enum: actualValues
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseNeverDef": ()=>parseNeverDef
});
function parseNeverDef() {
    return {
        not: {}
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseNullDef": ()=>parseNullDef
});
function parseNullDef(refs) {
    return refs.target === "openApi3" ? {
        enum: [
            "null"
        ],
        nullable: true
    } : {
        type: "null"
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseUnionDef": ()=>parseUnionDef,
    "primitiveMappings": ()=>primitiveMappings
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
};
function parseUnionDef(def, refs) {
    if (refs.target === "openApi3") return asAnyOf(def, refs);
    const options = def.options instanceof Map ? Array.from(def.options.values()) : def.options;
    // This blocks tries to look ahead a bit to produce nicer looking schemas with type array instead of anyOf.
    if (options.every((x)=>x._def.typeName in primitiveMappings && (!x._def.checks || !x._def.checks.length))) {
        // all types in union are primitive and lack checks, so might as well squash into {type: [...]}
        const types = options.reduce((types, x)=>{
            const type = primitiveMappings[x._def.typeName]; //Can be safely casted due to row 43
            return type && !types.includes(type) ? [
                ...types,
                type
            ] : types;
        }, []);
        return {
            type: types.length > 1 ? types : types[0]
        };
    } else if (options.every((x)=>x._def.typeName === "ZodLiteral" && !x.description)) {
        // all options literals
        const types = options.reduce((acc, x)=>{
            const type = typeof x._def.value;
            switch(type){
                case "string":
                case "number":
                case "boolean":
                    return [
                        ...acc,
                        type
                    ];
                case "bigint":
                    return [
                        ...acc,
                        "integer"
                    ];
                case "object":
                    if (x._def.value === null) return [
                        ...acc,
                        "null"
                    ];
                case "symbol":
                case "undefined":
                case "function":
                default:
                    return acc;
            }
        }, []);
        if (types.length === options.length) {
            // all the literals are primitive, as far as null can be considered primitive
            const uniqueTypes = types.filter((x, i, a)=>a.indexOf(x) === i);
            return {
                type: uniqueTypes.length > 1 ? uniqueTypes : uniqueTypes[0],
                enum: options.reduce((acc, x)=>{
                    return acc.includes(x._def.value) ? acc : [
                        ...acc,
                        x._def.value
                    ];
                }, [])
            };
        }
    } else if (options.every((x)=>x._def.typeName === "ZodEnum")) {
        return {
            type: "string",
            enum: options.reduce((acc, x)=>[
                    ...acc,
                    ...x._def.values.filter((x)=>!acc.includes(x))
                ], [])
        };
    }
    return asAnyOf(def, refs);
}
const asAnyOf = (def, refs)=>{
    const anyOf = (def.options instanceof Map ? Array.from(def.options.values()) : def.options).map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "anyOf",
                `${i}`
            ]
        })).filter((x)=>!!x && (!refs.strictUnions || typeof x === "object" && Object.keys(x).length > 0));
    return anyOf.length ? {
        anyOf
    } : undefined;
};

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseNullableDef": ()=>parseNullableDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function parseNullableDef(def, refs) {
    if ([
        "ZodString",
        "ZodNumber",
        "ZodBigInt",
        "ZodBoolean",
        "ZodNull"
    ].includes(def.innerType._def.typeName) && (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        if (refs.target === "openApi3") {
            return {
                type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["primitiveMappings"][def.innerType._def.typeName],
                nullable: true
            };
        }
        return {
            type: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["primitiveMappings"][def.innerType._def.typeName],
                "null"
            ]
        };
    }
    if (refs.target === "openApi3") {
        const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath
            ]
        });
        if (base && '$ref' in base) return {
            allOf: [
                base
            ],
            nullable: true
        };
        return base && {
            ...base,
            nullable: true
        };
    }
    const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "0"
        ]
    });
    return base && {
        anyOf: [
            base,
            {
                type: "null"
            }
        ]
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseNumberDef": ()=>parseNumberDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function parseNumberDef(def, refs) {
    const res = {
        type: "number"
    };
    if (!def.checks) return res;
    for (const check of def.checks){
        switch(check.kind){
            case "int":
                res.type = "integer";
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addErrorMessage"])(res, "type", check.message, refs);
                break;
            case "min":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMinimum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMinimum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "minimum", check.value, check.message, refs);
                }
                break;
            case "max":
                if (refs.target === "jsonSchema7") {
                    if (check.inclusive) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "exclusiveMaximum", check.value, check.message, refs);
                    }
                } else {
                    if (!check.inclusive) {
                        res.exclusiveMaximum = true;
                    }
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "maximum", check.value, check.message, refs);
                }
                break;
            case "multipleOf":
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(res, "multipleOf", check.value, check.message, refs);
                break;
        }
    }
    return res;
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseObjectDef": ()=>parseObjectDef,
    "parseObjectDefX": ()=>parseObjectDefX
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function decideAdditionalProperties(def, refs) {
    if (refs.removeAdditionalStrategy === "strict") {
        return def.catchall._def.typeName === "ZodNever" ? def.unknownKeys !== "strict" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.catchall._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        }) ?? true;
    } else {
        return def.catchall._def.typeName === "ZodNever" ? def.unknownKeys === "passthrough" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.catchall._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "additionalProperties"
            ]
        }) ?? true;
    }
}
;
function parseObjectDefX(def, refs) {
    Object.keys(def.shape()).reduce((schema, key)=>{
        let prop = def.shape()[key];
        const isOptional = prop.isOptional();
        if (!isOptional) {
            prop = {
                ...prop._def.innerSchema
            };
        }
        const propSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(prop._def, {
            ...refs,
            currentPath: [
                ...refs.currentPath,
                "properties",
                key
            ],
            propertyPath: [
                ...refs.currentPath,
                "properties",
                key
            ]
        });
        if (propSchema !== undefined) {
            schema.properties[key] = propSchema;
            if (!isOptional) {
                if (!schema.required) {
                    schema.required = [];
                }
                schema.required.push(key);
            }
        }
        return schema;
    }, {
        type: "object",
        properties: {},
        additionalProperties: decideAdditionalProperties(def, refs)
    });
    const result = {
        type: "object",
        ...Object.entries(def.shape()).reduce((acc, [propName, propDef])=>{
            if (propDef === undefined || propDef._def === undefined) return acc;
            const parsedDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(propDef._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "properties",
                    propName
                ],
                propertyPath: [
                    ...refs.currentPath,
                    "properties",
                    propName
                ]
            });
            if (parsedDef === undefined) return acc;
            return {
                properties: {
                    ...acc.properties,
                    [propName]: parsedDef
                },
                required: propDef.isOptional() ? acc.required : [
                    ...acc.required,
                    propName
                ]
            };
        }, {
            properties: {},
            required: []
        }),
        additionalProperties: decideAdditionalProperties(def, refs)
    };
    if (!result.required.length) delete result.required;
    return result;
}
function parseObjectDef(def, refs) {
    const result = {
        type: "object",
        ...Object.entries(def.shape()).reduce((acc, [propName, propDef])=>{
            if (propDef === undefined || propDef._def === undefined) return acc;
            const parsedDef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(propDef._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "properties",
                    propName
                ],
                propertyPath: [
                    ...refs.currentPath,
                    "properties",
                    propName
                ]
            });
            if (parsedDef === undefined) return acc;
            return {
                properties: {
                    ...acc.properties,
                    [propName]: parsedDef
                },
                required: propDef.isOptional() ? acc.required : [
                    ...acc.required,
                    propName
                ]
            };
        }, {
            properties: {},
            required: []
        }),
        additionalProperties: decideAdditionalProperties(def, refs)
    };
    if (!result.required.length) delete result.required;
    return result;
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseOptionalDef": ()=>parseOptionalDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const parseOptionalDef = (def, refs)=>{
    if (refs.currentPath.toString() === refs.propertyPath?.toString()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
    }
    const innerSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "anyOf",
            "1"
        ]
    });
    return innerSchema ? {
        anyOf: [
            {
                not: {}
            },
            innerSchema
        ]
    } : {};
};

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parsePipelineDef": ()=>parsePipelineDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const parsePipelineDef = (def, refs)=>{
    if (refs.pipeStrategy === "input") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.in._def, refs);
    } else if (refs.pipeStrategy === "output") {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.out._def, refs);
    }
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.in._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            "0"
        ]
    });
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.out._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "allOf",
            a ? "1" : "0"
        ]
    });
    return {
        allOf: [
            a,
            b
        ].filter((x)=>x !== undefined)
    };
};

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parsePromiseDef": ()=>parsePromiseDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function parsePromiseDef(def, refs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.type._def, refs);
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseSetDef": ()=>parseSetDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function parseSetDef(def, refs) {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.valueType._def, {
        ...refs,
        currentPath: [
            ...refs.currentPath,
            "items"
        ]
    });
    const schema = {
        type: "array",
        uniqueItems: true,
        items
    };
    if (def.minSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "minItems", def.minSize.value, def.minSize.message, refs);
    }
    if (def.maxSize) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setResponseValueAndErrors"])(schema, "maxItems", def.maxSize.value, def.maxSize.message, refs);
    }
    return schema;
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseTupleDef": ()=>parseTupleDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function parseTupleDef(def, refs) {
    if (def.rest) {
        return {
            type: "array",
            minItems: def.items.length,
            items: def.items.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === undefined ? acc : [
                    ...acc,
                    x
                ], []),
            additionalItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.rest._def, {
                ...refs,
                currentPath: [
                    ...refs.currentPath,
                    "additionalItems"
                ]
            })
        };
    } else {
        return {
            type: "array",
            minItems: def.items.length,
            maxItems: def.items.length,
            items: def.items.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(x._def, {
                    ...refs,
                    currentPath: [
                        ...refs.currentPath,
                        "items",
                        `${i}`
                    ]
                })).reduce((acc, x)=>x === undefined ? acc : [
                    ...acc,
                    x
                ], [])
        };
    }
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseUndefinedDef": ()=>parseUndefinedDef
});
function parseUndefinedDef() {
    return {
        not: {}
    };
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseUnknownDef": ()=>parseUnknownDef
});
function parseUnknownDef() {
    return {};
}

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseReadonlyDef": ()=>parseReadonlyDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const parseReadonlyDef = (def, refs)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(def.innerType._def, refs);
};

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "parseDef": ()=>parseDef
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod@3.23.8/node_modules/zod/lib/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/Options.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function parseDef(def, refs, forceResolution = false) {
    const seenItem = refs.seen.get(def);
    if (refs.override) {
        const overrideResult = refs.override?.(def, refs, seenItem, forceResolution);
        if (overrideResult !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ignoreOverride"]) {
            return overrideResult;
        }
    }
    if (seenItem && !forceResolution) {
        const seenSchema = get$ref(seenItem, refs);
        if (seenSchema !== undefined) {
            return seenSchema;
        }
    }
    const newItem = {
        def,
        path: refs.currentPath,
        jsonSchema: undefined
    };
    refs.seen.set(def, newItem);
    const jsonSchema = selectParser(def, def.typeName, refs);
    if (jsonSchema) {
        addMeta(def, refs, jsonSchema);
    }
    newItem.jsonSchema = jsonSchema;
    return jsonSchema;
}
const get$ref = (item, refs)=>{
    switch(refs.$refStrategy){
        case "root":
            return {
                $ref: item.path.join("/")
            };
        case "relative":
            return {
                $ref: getRelativePath(refs.currentPath, item.path)
            };
        case "none":
        case "seen":
            {
                if (item.path.length < refs.currentPath.length && item.path.every((value, index)=>refs.currentPath[index] === value)) {
                    console.warn(`Recursive reference detected at ${refs.currentPath.join("/")}! Defaulting to any`);
                    return {};
                }
                return refs.$refStrategy === "seen" ? {} : undefined;
            }
    }
};
const getRelativePath = (pathA, pathB)=>{
    let i = 0;
    for(; i < pathA.length && i < pathB.length; i++){
        if (pathA[i] !== pathB[i]) break;
    }
    return [
        (pathA.length - i).toString(),
        ...pathB.slice(i)
    ].join("/");
};
const selectParser = (def, typeName, refs)=>{
    switch(typeName){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodString:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseStringDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNumber:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNumberDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodObject:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseObjectDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBigInt:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBigintDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBoolean:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBooleanDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDate:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDateDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUndefined:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseUndefinedDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNull:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNullDef"])(refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodArray:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseArrayDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnion:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDiscriminatedUnion:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseUnionDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodIntersection:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseIntersectionDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodTuple:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseTupleDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodRecord:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseRecordDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLiteral:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseLiteralDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEnum:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseEnumDef"])(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNativeEnum:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNativeEnumDef"])(def);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNullable:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNullableDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodOptional:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseOptionalDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodMap:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMapDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSet:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseSetDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodLazy:
            return parseDef(def.getter()._def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPromise:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePromiseDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNaN:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodNever:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseNeverDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodEffects:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseEffectsDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodAny:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAnyDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodUnknown:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseUnknownDef"])();
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodDefault:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDefaultDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodBranded:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseBrandedDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodReadonly:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseReadonlyDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodCatch:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseCatchDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodPipeline:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePipelineDef"])(def, refs);
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodFunction:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodVoid:
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2f$lib$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodFirstPartyTypeKind"].ZodSymbol:
            return undefined;
        default:
            return ((_)=>undefined)(typeName);
    }
};
const addMeta = (def, refs, jsonSchema)=>{
    if (def.description) {
        jsonSchema.description = def.description;
        if (refs.markdownDescription) {
            jsonSchema.markdownDescription = def.description;
        }
    }
    return jsonSchema;
};

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getRefs": ()=>getRefs
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/Options.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const getRefs = (options)=>{
    const _options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDefaultOptions"])(options);
    const currentPath = _options.name !== undefined ? [
        ..._options.basePath,
        _options.definitionPath,
        _options.name
    ] : _options.basePath;
    return {
        ..._options,
        currentPath: currentPath,
        propertyPath: undefined,
        seen: new Map(Object.entries(_options.definitions).map(([name, def])=>[
                def._def,
                {
                    def: def._def,
                    path: [
                        ..._options.basePath,
                        _options.definitionPath,
                        name
                    ],
                    // Resolution of references will be forced even though seen, so it's ok that the schema is undefined here for now.
                    jsonSchema: undefined
                }
            ]))
    };
};

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js [app-rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "zodToJsonSchema": ()=>zodToJsonSchema
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const zodToJsonSchema = (schema, options)=>{
    const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRefs"])(options);
    const definitions = typeof options === "object" && options.definitions ? Object.entries(options.definitions).reduce((acc, [name, schema])=>({
            ...acc,
            [name]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(schema._def, {
                ...refs,
                currentPath: [
                    ...refs.basePath,
                    refs.definitionPath,
                    name
                ]
            }, true) ?? {}
        }), {}) : undefined;
    const name = typeof options === "string" ? options : options?.name;
    const main = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseDef"])(schema._def, name === undefined ? refs : {
        ...refs,
        currentPath: [
            ...refs.basePath,
            refs.definitionPath,
            name
        ]
    }, false) ?? {};
    const combined = name === undefined ? definitions ? {
        ...main,
        [refs.definitionPath]: definitions
    } : main : {
        $ref: [
            ...refs.$refStrategy === "relative" ? [] : refs.basePath,
            refs.definitionPath,
            name
        ].join("/"),
        [refs.definitionPath]: {
            ...definitions,
            [name]: main
        }
    };
    if (refs.target === "jsonSchema7") {
        combined.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (refs.target === "jsonSchema2019-09") {
        combined.$schema = "https://json-schema.org/draft/2019-09/schema#";
    }
    return combined;
};
;

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <locals>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js [app-rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["zodToJsonSchema"];

})()),
"[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <module evaluation>": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$errorMessages$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/errorMessages.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Options$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/Options.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parseDef$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parseDef.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$any$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/any.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$array$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/array.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$bigint$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/bigint.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$boolean$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/boolean.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$branded$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/branded.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$catch$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/catch.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$date$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/date.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$effects$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/effects.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$enum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/enum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$intersection$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/intersection.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$literal$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/literal.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$map$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/map.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nativeEnum$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/nativeEnum.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$never$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/never.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$null$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/null.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$nullable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/nullable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$number$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/number.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$object$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/object.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$optional$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/optional.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$pipeline$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/pipeline.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$promise$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/promise.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$readonly$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/readonly.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$record$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/record.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$set$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/set.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$string$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/string.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$tuple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/tuple.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$undefined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/undefined.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$union$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/union.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$parsers$2f$unknown$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/parsers/unknown.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$Refs$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/Refs.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$zodToJsonSchema$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/zodToJsonSchema.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$2d$to$2d$json$2d$schema$40$3$2e$22$2e$5_zod$40$3$2e$23$2e$8$2f$node_modules$2f$zod$2d$to$2d$json$2d$schema$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/zod-to-json-schema@3.22.5_zod@3.23.8/node_modules/zod-to-json-schema/dist/esm/index.js [app-rsc] (ecmascript) <locals>");
"__TURBOPACK__ecmascript__hoisting__location__";

})()),

};

//# sourceMappingURL=b04b4_zod-to-json-schema_dist_esm_971e4c._.js.map