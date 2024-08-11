(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/components_stocks_stock_tsx_b4cdd2._.js", {

"[project]/components/stocks/stock.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Stock": ()=>Stock
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/d3-scale@4.0.2/node_modules/d3-scale/src/linear.js [app-client] (ecmascript) <export default as scaleLinear>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/subMonths.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/date-fns@3.6.0/node_modules/date-fns/format.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$usehooks$2d$ts$40$3$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/usehooks-ts@3.1.0_react@18.3.1/node_modules/usehooks-ts/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$2$2e$16_openai$40$4$2e$52$2e$2_react$40$18$2e$3$2e$1_svelte$40$4$2e$2$2e$18_vue$40$3$2e$4$2e$31_zod$40$3$2e$23$2e$8$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/ai@3.2.16_openai@4.52.2_react@18.3.1_svelte@4.2.18_vue@3.4.31_zod@3.23.8/node_modules/ai/rsc/dist/rsc-shared.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
function Stock({ props: { symbol, price, delta } }) {
    _s();
    const [aiState, setAIState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$2$2e$16_openai$40$4$2e$52$2e$2_react$40$18$2e$3$2e$1_svelte$40$4$2e$2$2e$18_vue$40$3$2e$4$2e$31_zod$40$3$2e$23$2e$8$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIState"])();
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const [priceAtTime, setPriceAtTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        time: '00:00',
        value: price.toFixed(2),
        x: 0
    });
    const [startHighlight, setStartHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [endHighlight, setEndHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { width = 0 } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$usehooks$2d$ts$40$3$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResizeObserver"])({
        ref: chartRef,
        box: 'border-box'
    });
    const xToDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])([
        0,
        width
    ], [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$subMonths$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subMonths"])(new Date(), 6),
        new Date()
    ]);
    const xToValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$d3$2d$scale$40$4$2e$0$2e$2$2f$node_modules$2f$d3$2d$scale$2f$src$2f$linear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__scaleLinear$3e$__["scaleLinear"])([
        0,
        width
    ], [
        price - price / 2,
        price + price / 2
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (startHighlight && endHighlight) {
            const message = {
                id,
                role: 'system',
                content: `[User has highlighted dates between between ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(xToDate(startHighlight), 'd LLL')} and ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(xToDate(endHighlight), 'd LLL, yyyy')}`
            };
            if (aiState.messages[aiState.messages.length - 1]?.id === id) {
                setAIState({
                    ...aiState,
                    messages: [
                        ...aiState.messages.slice(0, -1),
                        message
                    ]
                });
            } else {
                setAIState({
                    ...aiState,
                    messages: [
                        ...aiState.messages,
                        message
                    ]
                });
            }
        }
    }, [
        startHighlight,
        endHighlight
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border bg-zinc-950 p-4 text-green-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "float-right inline-block rounded-full bg-white/10 px-2 py-1 text-xs",
                children: `${delta > 0 ? '+' : ''}${(delta / price * 100).toFixed(2)}% ${delta > 0 ? '↑' : '↓'}`
            }, void 0, false, {
                fileName: "[project]/components/stocks/stock.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-lg text-zinc-300",
                children: symbol
            }, void 0, false, {
                fileName: "[project]/components/stocks/stock.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl font-bold",
                children: [
                    "$",
                    price
                ]
            }, void 0, true, {
                fileName: "[project]/components/stocks/stock.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text mt-1 text-xs text-zinc-500",
                children: "Closed: Feb 27, 4:59 PM EST"
            }, void 0, false, {
                fileName: "[project]/components/stocks/stock.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative -mx-4 cursor-col-resize",
                onPointerDown: (event)=>{
                    if (chartRef.current) {
                        const { clientX } = event;
                        const { left } = chartRef.current.getBoundingClientRect();
                        setStartHighlight(clientX - left);
                        setEndHighlight(0);
                        setPriceAtTime({
                            time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(xToDate(clientX), 'dd LLL yy'),
                            value: xToValue(clientX).toFixed(2),
                            x: clientX - left
                        });
                    }
                },
                onPointerUp: (event)=>{
                    if (chartRef.current) {
                        const { clientX } = event;
                        const { left } = chartRef.current.getBoundingClientRect();
                        setEndHighlight(clientX - left);
                    }
                },
                onPointerMove: (event)=>{
                    if (chartRef.current) {
                        const { clientX } = event;
                        const { left } = chartRef.current.getBoundingClientRect();
                        setPriceAtTime({
                            time: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$date$2d$fns$40$3$2e$6$2e$0$2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(xToDate(clientX), 'dd LLL yy'),
                            value: xToValue(clientX).toFixed(2),
                            x: clientX - left
                        });
                    }
                },
                onPointerLeave: ()=>{
                    setPriceAtTime({
                        time: '00:00',
                        value: price.toFixed(2),
                        x: 0
                    });
                },
                ref: chartRef,
                children: [
                    priceAtTime.x > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute z-10 flex w-fit select-none gap-2 rounded-md bg-zinc-800 p-2",
                        style: {
                            left: priceAtTime.x - 124 / 2,
                            top: 30
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs tabular-nums",
                                children: [
                                    "$",
                                    priceAtTime.value
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/stocks/stock.tsx",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs tabular-nums text-zinc-400",
                                children: priceAtTime.time
                            }, void 0, false, {
                                fileName: "[project]/components/stocks/stock.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/stocks/stock.tsx",
                        lineNumber: 128,
                        columnNumber: 11
                    }, this) : null,
                    startHighlight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute h-32 w-5 select-none rounded-md border border-zinc-500 bg-zinc-500/20",
                        style: {
                            left: startHighlight,
                            width: endHighlight ? endHighlight - startHighlight : priceAtTime.x - startHighlight,
                            bottom: 0
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/stocks/stock.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 250.0 168.0",
                        height: "150",
                        width: "100%",
                        preserveAspectRatio: "none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                        id: "fill-id-tsuid_31",
                                        x1: "0%",
                                        x2: "0%",
                                        y1: "0%",
                                        y2: "100%",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "0%",
                                                stopColor: "#34a853",
                                                stopOpacity: "0.38"
                                            }, void 0, false, {
                                                fileName: "[project]/components/stocks/stock.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                offset: "13%",
                                                stopColor: "#e6f4ea",
                                                stopOpacity: "0"
                                            }, void 0, false, {
                                                fileName: "[project]/components/stocks/stock.tsx",
                                                lineNumber: 170,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/stocks/stock.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                        id: "range-id-tsuid_31",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            height: "100%",
                                            width: "0",
                                            x: "0",
                                            y: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/stocks/stock.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/stock.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                            id: "chart-grad-_f1bJZYLUHqWpxc8Prs2meA_33",
                                            x1: "0%",
                                            x2: "0%",
                                            y1: "0%",
                                            y2: "100%",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "0%",
                                                    stopColor: "#34a853",
                                                    stopOpacity: "0.38"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/stocks/stock.tsx",
                                                    lineNumber: 183,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                    offset: "13%",
                                                    stopColor: "#e6f4ea",
                                                    stopOpacity: "0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/stocks/stock.tsx",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/stocks/stock.tsx",
                                            lineNumber: 176,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/stock.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                                        id: "mask-_f1bJZYLUHqWpxc8Prs2meA_32",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            height: "218",
                                            width: "250",
                                            x: "0",
                                            y: "-5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/stocks/stock.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/stocks/stock.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/stocks/stock.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M  0 42.86 L 0.89 46.26 L 1.78 44.3 L 2.68 44.24 L 3.57 42 L 4.46 43.42 L 5.35 43.62 L 6.25 47 L 7.14 47.65 L 8.03 47.69 L 8.92 45.55 L 9.82 43.19 L 10.71 43.9 L 11.6 42.83 L 12.49 42.81 L 13.39 46.75 L 14.28 43.06 L 15.17 40.8 L 16.06 39.72 L 16.96 39.77 L 17.85 45.77 L 18.74 44.93 L 19.63 44.35 L 20.53 40.29 L 21.42 42.77 L 22.31 42.12 L 23.2 43.4 L 24.1 47.95 L 24.99 50.15 L 25.88 48.59 L 26.77 42.18 L 27.67 44.1 L 28.56 39.91 L 29.45 44.92 L 30.34 47.62 L 31.24 48.06 L 32.13 47.67 L 33.02 56.47 L 33.91 57.74 L 34.8 65.48 L 35.7 64.47 L 36.59 47.25 L 37.48 58.26 L 38.37 52.04 L 39.27 55.8 L 40.16 92.92 L 41.05 105.2 L 41.94 102 L 42.84 106.14 L 43.73 78.71 L 44.62 104.6 L 45.51 96.58 L 46.41 67.56 L 47.3 69.53 L 48.19 69.99 L 49.08 66.75 L 49.98 69.72 L 50.87 70.13 L 51.76 71.3 L 52.65 70.03 L 53.55 67.92 L 54.44 66.41 L 55.33 97.12 L 56.22 95.93 L 57.12 95.03 L 58.01 95.09 L 58.9 65.56 L 59.79 65.12 L 60.69 82.42 L 61.58 74.7 L 62.47 71.13 L 63.36 82.43 L 64.26 96.02 L 65.15 100.36 L 66.04 98.6 L 66.93 103.37 L 67.82 102.12 L 68.72 97.08 L 69.61 89.74 L 70.5 90.7 L 71.39 93.46 L 72.29 94.24 L 73.18 97.8 L 74.07 97.88 L 74.96 96.63 L 75.86 96.27 L 76.75 97.15 L 77.64 100.12 L 78.53 100.51 L 79.43 106.59 L 80.32 104.54 L 81.21 100.31 L 82.1 118.76 L 83 106.24 L 83.89 114.8 L 84.78 174.89 L 85.67 122.28 L 86.57 149.25 L 87.46 151.47 L 88.35 153.38 L 89.24 153.5 L 90.14 149.24 L 91.03 122.44 L 91.92 122.08 L 92.81 147.16 L 93.71 147.46 L 94.6 119.13 L 95.49 117.97 L 96.38 122.22 L 97.28 116.38 L 98.17 119.53 L 99.06 119.65 L 99.95 120.15 L 100.84 120.22 L 101.74 121.28 L 102.63 121.4 L 103.52 122.97 L 104.41 122.15 L 105.31 120.6 L 106.2 116.55 L 107.09 122.23 L 107.98 120.96 L 108.88 119.54 L 109.77 120.19 L 110.66 120.99 L 111.55 119.92 L 112.45 115.69 L 113.34 116.33 L 114.23 116.07 L 115.12 115.34 L 116.02 111.34 L 116.91 107.23 L 117.8 113.21 L 118.69 98.77 L 119.59 97.04 L 120.48 96.56 L 121.37 96.36 L 122.26 99.7 L 123.16 103.33 L 124.05 100.38 L 124.94 99.68 L 125.83 99.02 L 126.73 102.56 L 127.62 103.25 L 128.51 103.38 L 129.4 104.89 L 130.3 118.07 L 131.19 100.82 L 132.08 103.06 L 132.97 103.47 L 133.86 99.8 L 134.76 111.28 L 135.65 107.73 L 136.54 107.46 L 137.43 108.08 L 138.33 109.82 L 139.22 110.94 L 140.11 111.3 L 141 108.14 L 141.9 109.35 L 142.79 108.38 L 143.68 99.08 L 144.57 99.02 L 145.47 98.61 L 146.36 99.07 L 147.25 99.26 L 148.14 95.1 L 149.04 92.08 L 149.93 92.76 L 150.82 92.87 L 151.71 83.31 L 152.61 82.93 L 153.5 84.86 L 154.39 84.12 L 155.28 94.08 L 156.18 93.31 L 157.07 94.23 L 157.96 94.58 L 158.85 99.33 L 159.75 80 L 160.64 90.28 L 161.53 84.07 L 162.42 68.37 L 163.32 76.88 L 164.21 81.78 L 165.1 80.72 L 165.99 73.89 L 166.88 77.14 L 167.78 67.58 L 168.67 59.82 L 169.56 61.91 L 170.45 61.07 L 171.35 73.74 L 172.24 77.02 L 173.13 78.61 L 174.02 71.59 L 174.92 68.24 L 175.81 72.14 L 176.7 65.37 L 177.59 76.73 L 178.49 88.02 L 179.38 88.01 L 180.27 88.27 L 181.16 86.23 L 182.06 86.14 L 182.95 89.54 L 183.84 94.16 L 184.73 97.72 L 185.63 81.52 L 186.52 92.85 L 187.41 94.14 L 188.3 93.06 L 189.2 92.64 L 190.09 92.44 L 190.98 91.75 L 191.87 90.53 L 192.77 88.27 L 193.66 85.44 L 194.55 82.26 L 195.44 85.08 L 196.34 85.65 L 197.23 53.43 L 198.12 72.01 L 199.01 38.37 L 199.9 69.43 L 200.8 74.46 L 201.69 74.22 L 202.58 82.46 L 203.47 77.01 L 204.37 87.8 L 205.26 91.56 L 206.15 76.69 L 207.04 76.46 L 207.94 78.13 L 208.83 80.06 L 209.72 92.79 L 210.61 87.74 L 211.51 88.21 L 212.4 88.47 L 213.29 87.35 L 214.18 89.69 L 215.08 77.37 L 215.97 87.95 L 216.86 75.16 L 217.75 70.47 L 218.65 85.11 L 219.54 88.1 L 220.43 88.06 L 221.32 86.34 L 222.22 76.91 L 223.11 75.33 L 224 73.6 L 224.89 25.31 L 225.79 44.14 L 226.68 43.93 L 227.57 45.13 L 228.46 44.03 L 229.36 35.73 L 230.25 33.65 L 231.14 34.81 L 232.03 17.64 L 232.92 21.13 L 233.82 19.37 L 234.71 24.66 L 235.6 23.87 L 236.49 22.56 L 237.39 28.48 L 238.28 25.33 L 239.17 28.51 L 240.06 30.83 L 240.96 35.79 L 241.85 34.6 L 242.74 31.2 L 243.63 32.97 L 244.53 33.01 L 245.42 31.38 L 246.31 30.21 L 247.2 27.75 L 248.1 25.27 L 248.99 23 L 249.88 23 L 250 23 L 2000 0 L 2000 1000 L -1000 1000",
                                clipPath: "url(#range-id-tsuid_31)",
                                vectorEffect: "non-scaling-stroke",
                                stroke: "none",
                                strokeWidth: 2,
                                fill: 'url("#fill-id-tsuid_31")'
                            }, void 0, false, {
                                fileName: "[project]/components/stocks/stock.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                clipPath: "url(#mask-_f1bJZYLUHqWpxc8Prs2meA_32)",
                                d: "M 0 42.86 L 0.89 46.26 L 1.78 44.3 L 2.68 44.24 L 3.57 42 L 4.46 43.42 L 5.35 43.62 L 6.25 47 L 7.14 47.65 L 8.03 47.69 L 8.92 45.55 L 9.82 43.19 L 10.71 43.9 L 11.6 42.83 L 12.49 42.81 L 13.39 46.75 L 14.28 43.06 L 15.17 40.8 L 16.06 39.72 L 16.96 39.77 L 17.85 45.77 L 18.74 44.93 L 19.63 44.35 L 20.53 40.29 L 21.42 42.77 L 22.31 42.12 L 23.2 43.4 L 24.1 47.95 L 24.99 50.15 L 25.88 48.59 L 26.77 42.18 L 27.67 44.1 L 28.56 39.91 L 29.45 44.92 L 30.34 47.62 L 31.24 48.06 L 32.13 47.67 L 33.02 56.47 L 33.91 57.74 L 34.8 65.48 L 35.7 64.47 L 36.59 47.25 L 37.48 58.26 L 38.37 52.04 L 39.27 55.8 L 40.16 92.92 L 41.05 105.2 L 41.94 102 L 42.84 106.14 L 43.73 78.71 L 44.62 104.6 L 45.51 96.58 L 46.41 67.56 L 47.3 69.53 L 48.19 69.99 L 49.08 66.75 L 49.98 69.72 L 50.87 70.13 L 51.76 71.3 L 52.65 70.03 L 53.55 67.92 L 54.44 66.41 L 55.33 97.12 L 56.22 95.93 L 57.12 95.03 L 58.01 95.09 L 58.9 65.56 L 59.79 65.12 L 60.69 82.42 L 61.58 74.7 L 62.47 71.13 L 63.36 82.43 L 64.26 96.02 L 65.15 100.36 L 66.04 98.6 L 66.93 103.37 L 67.82 102.12 L 68.72 97.08 L 69.61 89.74 L 70.5 90.7 L 71.39 93.46 L 72.29 94.24 L 73.18 97.8 L 74.07 97.88 L 74.96 96.63 L 75.86 96.27 L 76.75 97.15 L 77.64 100.12 L 78.53 100.51 L 79.43 106.59 L 80.32 104.54 L 81.21 100.31 L 82.1 118.76 L 83 106.24 L 83.89 114.8 L 84.78 174.89 L 85.67 122.28 L 86.57 149.25 L 87.46 151.47 L 88.35 153.38 L 89.24 153.5 L 90.14 149.24 L 91.03 122.44 L 91.92 122.08 L 92.81 147.16 L 93.71 147.46 L 94.6 119.13 L 95.49 117.97 L 96.38 122.22 L 97.28 116.38 L 98.17 119.53 L 99.06 119.65 L 99.95 120.15 L 100.84 120.22 L 101.74 121.28 L 102.63 121.4 L 103.52 122.97 L 104.41 122.15 L 105.31 120.6 L 106.2 116.55 L 107.09 122.23 L 107.98 120.96 L 108.88 119.54 L 109.77 120.19 L 110.66 120.99 L 111.55 119.92 L 112.45 115.69 L 113.34 116.33 L 114.23 116.07 L 115.12 115.34 L 116.02 111.34 L 116.91 107.23 L 117.8 113.21 L 118.69 98.77 L 119.59 97.04 L 120.48 96.56 L 121.37 96.36 L 122.26 99.7 L 123.16 103.33 L 124.05 100.38 L 124.94 99.68 L 125.83 99.02 L 126.73 102.56 L 127.62 103.25 L 128.51 103.38 L 129.4 104.89 L 130.3 118.07 L 131.19 100.82 L 132.08 103.06 L 132.97 103.47 L 133.86 99.8 L 134.76 111.28 L 135.65 107.73 L 136.54 107.46 L 137.43 108.08 L 138.33 109.82 L 139.22 110.94 L 140.11 111.3 L 141 108.14 L 141.9 109.35 L 142.79 108.38 L 143.68 99.08 L 144.57 99.02 L 145.47 98.61 L 146.36 99.07 L 147.25 99.26 L 148.14 95.1 L 149.04 92.08 L 149.93 92.76 L 150.82 92.87 L 151.71 83.31 L 152.61 82.93 L 153.5 84.86 L 154.39 84.12 L 155.28 94.08 L 156.18 93.31 L 157.07 94.23 L 157.96 94.58 L 158.85 99.33 L 159.75 80 L 160.64 90.28 L 161.53 84.07 L 162.42 68.37 L 163.32 76.88 L 164.21 81.78 L 165.1 80.72 L 165.99 73.89 L 166.88 77.14 L 167.78 67.58 L 168.67 59.82 L 169.56 61.91 L 170.45 61.07 L 171.35 73.74 L 172.24 77.02 L 173.13 78.61 L 174.02 71.59 L 174.92 68.24 L 175.81 72.14 L 176.7 65.37 L 177.59 76.73 L 178.49 88.02 L 179.38 88.01 L 180.27 88.27 L 181.16 86.23 L 182.06 86.14 L 182.95 89.54 L 183.84 94.16 L 184.73 97.72 L 185.63 81.52 L 186.52 92.85 L 187.41 94.14 L 188.3 93.06 L 189.2 92.64 L 190.09 92.44 L 190.98 91.75 L 191.87 90.53 L 192.77 88.27 L 193.66 85.44 L 194.55 82.26 L 195.44 85.08 L 196.34 85.65 L 197.23 53.43 L 198.12 72.01 L 199.01 38.37 L 199.9 69.43 L 200.8 74.46 L 201.69 74.22 L 202.58 82.46 L 203.47 77.01 L 204.37 87.8 L 205.26 91.56 L 206.15 76.69 L 207.04 76.46 L 207.94 78.13 L 208.83 80.06 L 209.72 92.79 L 210.61 87.74 L 211.51 88.21 L 212.4 88.47 L 213.29 87.35 L 214.18 89.69 L 215.08 77.37 L 215.97 87.95 L 216.86 75.16 L 217.75 70.47 L 218.65 85.11 L 219.54 88.1 L 220.43 88.06 L 221.32 86.34 L 222.22 76.91 L 223.11 75.33 L 224 73.6 L 224.89 25.31 L 225.79 44.14 L 226.68 43.93 L 227.57 45.13 L 228.46 44.03 L 229.36 35.73 L 230.25 33.65 L 231.14 34.81 L 232.03 17.64 L 232.92 21.13 L 233.82 19.37 L 234.71 24.66 L 235.6 23.87 L 236.49 22.56 L 237.39 28.48 L 238.28 25.33 L 239.17 28.51 L 240.06 30.83 L 240.96 35.79 L 241.85 34.6 L 242.74 31.2 L 243.63 32.97 L 244.53 33.01 L 245.42 31.38 L 246.31 30.21 L 247.2 27.75 L 248.1 25.27 L 248.99 23 L 249.88 23 L 250 23 L 2000 0 L 2000 1000 L -1000 1000",
                                vectorEffect: "non-scaling-stroke",
                                stroke: "#34a853",
                                style: {
                                    fill: 'url(#chart-grad-_f1bJZYLUHqWpxc8Prs2meA_33)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/stocks/stock.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/stocks/stock.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/stocks/stock.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/stocks/stock.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Stock, "Bssim/wgJnhDu+uB5HMU6CFRXtw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$ai$40$3$2e$2$2e$16_openai$40$4$2e$52$2e$2_react$40$18$2e$3$2e$1_svelte$40$4$2e$2$2e$18_vue$40$3$2e$4$2e$31_zod$40$3$2e$23$2e$8$2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAIState"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$2$2e$4_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$usehooks$2d$ts$40$3$2e$1$2e$0_react$40$18$2e$3$2e$1$2f$node_modules$2f$usehooks$2d$ts$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResizeObserver"]
    ];
});
_c = Stock;
var _c;
__turbopack_refresh__.register(_c, "Stock");

})()),
}]);

//# sourceMappingURL=components_stocks_stock_tsx_b4cdd2._.js.map