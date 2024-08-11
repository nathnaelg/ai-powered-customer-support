(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_stocks_stocks_tsx_036c53._.js", {

"[project]/components/stocks/stocks.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Stocks": ()=>Stocks
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$2$2e$16_openai$40$4$2e$52$2e$2_react$40$18$2e$3$2e$1_svelte$40$4$2e$2$2e$18_vue$40$3$2e$4$2e$31_zod$40$3$2e$23$2e$8$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ai@3.2.16_openai@4.52.2_react@18.3.1_svelte@4.2.18_vue@3.4.31_zod@3.23.8/node_modules/ai/rsc/dist/rsc-shared.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
function Stocks({ props: stocks }) {
    _s();
    const [, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$2$2e$16_openai$40$4$2e$52$2e$2_react$40$18$2e$3$2e$1_svelte$40$4$2e$2$2e$18_vue$40$3$2e$4$2e$31_zod$40$3$2e$23$2e$8$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"])();
    const { submitUserMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$2$2e$16_openai$40$4$2e$52$2e$2_react$40$18$2e$3$2e$1_svelte$40$4$2e$2$2e$18_vue$40$3$2e$4$2e$31_zod$40$3$2e$23$2e$8$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActions"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 flex flex-col gap-2 overflow-y-scroll pb-4 text-sm sm:flex-row",
                children: stocks.map((stock)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex cursor-pointer flex-row gap-2 rounded-lg bg-zinc-800 p-2 text-left hover:bg-zinc-700 sm:w-52",
                        onClick: async ()=>{
                            const response = await submitUserMessage(`View ${stock.symbol}`);
                            setMessages((currentMessages)=>[
                                    ...currentMessages,
                                    response
                                ]);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-xl ${stock.delta > 0 ? 'text-green-600' : 'text-red-600'} flex w-11 flex-row justify-center rounded-md bg-white/10 p-2`,
                                children: stock.delta > 0 ? '↑' : '↓'
                            }, void 0, false, {
                                fileName: "[project]/components/stocks/stocks.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bold uppercase text-zinc-300",
                                        children: stock.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/stocks.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-base text-zinc-500",
                                        children: [
                                            "$",
                                            stock.price.toExponential(1)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/stocks/stocks.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/stocks/stocks.tsx",
                                lineNumber: 36,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${stock.delta > 0 ? 'text-green-600' : 'text-red-600'} bold text-right uppercase`,
                                        children: ` ${(stock.delta / stock.price * 100).toExponential(1)}%`
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/stocks.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${stock.delta > 0 ? 'text-green-700' : 'text-red-700'} text-right text-base`,
                                        children: stock.delta.toExponential(1)
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/stocks.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/stocks/stocks.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, stock.symbol, true, {
                        fileName: "[project]/components/stocks/stocks.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/stocks/stocks.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 text-center text-sm text-zinc-500",
                children: "Note: Data and latency are simulated for illustrative purposes and should not be considered as financial advice."
            }, void 0, false, {
                fileName: "[project]/components/stocks/stocks.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/stocks/stocks.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(Stocks, "1dVz2EaMc6yv3eG5uitXlVfPrbs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$2$2e$16_openai$40$4$2e$52$2e$2_react$40$18$2e$3$2e$1_svelte$40$4$2e$2$2e$18_vue$40$3$2e$4$2e$31_zod$40$3$2e$23$2e$8$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUIState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$2$2e$16_openai$40$4$2e$52$2e$2_react$40$18$2e$3$2e$1_svelte$40$4$2e$2$2e$18_vue$40$3$2e$4$2e$31_zod$40$3$2e$23$2e$8$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActions"]
    ];
});
_c = Stocks;
var _c;
__turbopack_refresh__.register(_c, "Stocks");

})()),
}]);

//# sourceMappingURL=components_stocks_stocks_tsx_036c53._.js.map