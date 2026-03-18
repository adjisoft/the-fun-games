import * as import1 from "env"
import * as import2 from "env"
import * as import3 from "env"
import * as import4 from "env"
import * as import5 from "env"
import * as import6 from "env"
import * as import7 from "env"
import * as import8 from "env"
import * as import9 from "env"
import * as import10 from "env"
import * as import11 from "env"
import * as import12 from "env"
import * as import13 from "env"
import * as import14 from "env"
import * as import15 from "env"
import * as import16 from "env"
import * as import17 from "env"
import * as import18 from "env"
import * as import19 from "env"
import * as import20 from "env"
import * as import21 from "env"
import * as import22 from "env"
import * as import23 from "env"
import * as import24 from "env"
import * as import25 from "env"
import * as import26 from "env"
import * as import27 from "env"
import * as import28 from "env"
import * as import29 from "env"
import * as import30 from "env"
import * as import31 from "env"
import * as import32 from "env"
import * as import33 from "env"
import * as import34 from "env"
import * as import35 from "env"
import * as import36 from "env"
import * as import37 from "env"
import * as import38 from "env"
import * as import39 from "env"
import * as import40 from "env"
import * as import41 from "env"
import * as import42 from "env"
import * as import43 from "env"
import * as import44 from "env"
import * as import45 from "env"
import * as import46 from "env"
import * as import47 from "env"
import * as import48 from "env"
import * as import49 from "env"
import * as import50 from "env"
import * as import51 from "env"
import * as import52 from "env"
import * as import53 from "env"
import * as import54 from "env"
import * as import55 from "env"
import * as import56 from "env"
import * as import57 from "env"
import * as import58 from "env"
import * as import59 from "env"
import * as import60 from "env"
import * as import61 from "env"
import * as import62 from "env"
import * as import63 from "env"
import * as import64 from "env"
import * as import65 from "env"
import * as import66 from "env"
import * as import67 from "env"
import * as import68 from "env"
import * as import69 from "env"
import * as import70 from "env"
import * as import71 from "env"
import * as import72 from "env"
import * as import73 from "env"
import * as import74 from "env"
import * as import75 from "env"
import * as import76 from "env"
import * as import77 from "env"
import * as import78 from "env"
import * as import79 from "env"
import * as import80 from "env"
import * as import81 from "env"
import * as import82 from "env"
import * as import83 from "env"
import * as import84 from "env"
import * as import85 from "env"
import * as import86 from "env"
import * as import87 from "env"
import * as import88 from "env"
import * as import89 from "env"
import * as import90 from "env"
import * as import91 from "env"
import * as import92 from "env"
import * as import93 from "env"
import * as import94 from "env"
import * as import95 from "env"
import * as import96 from "env"
import * as import97 from "env"
import * as import98 from "env"
import * as import99 from "env"
import * as import100 from "env"
import * as import101 from "env"
import * as import102 from "env"
import * as import103 from "env"
import * as import104 from "env"
import * as import105 from "env"
import * as import106 from "env"
import * as import107 from "env"
import * as import108 from "env"
import * as import109 from "env"
import * as import110 from "env"
import * as import111 from "env"

function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_is_undefined_9e4d92534c42d778: function(arg0) {
            const ret = getObject(arg0) === undefined;
            return ret;
        },
        __wbg___wbindgen_throw_be289d5034ed271b: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_call_389efe28435a9388: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).call(getObject(arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_getItem_0c792d344808dcf5: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg1).getItem(getStringFromWasm0(arg2, arg3));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export2, wasm.__wbindgen_export3);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_instanceof_Window_ed49b2db8df90359: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_localStorage_a22d31b9eacc4594: function() { return handleError(function (arg0) {
            const ret = getObject(arg0).localStorage;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_new_no_args_1c7c842f08d00ebb: function(arg0, arg1) {
            const ret = new Function(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        },
        __wbg_setItem_cf340bb2edbd3089: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).setItem(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_static_accessor_GLOBAL_12837167ad935116: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_SELF_a621d3dfbb60d0ce: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_WINDOW_f8727f0cf888e0bd: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbindgen_object_clone_ref: function(arg0) {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        },
        __wbindgen_object_drop_ref: function(arg0) {
            takeObject(arg0);
        },
    };
    return {
        __proto__: null,
        "./matrix_crushed_bg.js": import0,
        "env": import1,
        "env": import2,
        "env": import3,
        "env": import4,
        "env": import5,
        "env": import6,
        "env": import7,
        "env": import8,
        "env": import9,
        "env": import10,
        "env": import11,
        "env": import12,
        "env": import13,
        "env": import14,
        "env": import15,
        "env": import16,
        "env": import17,
        "env": import18,
        "env": import19,
        "env": import20,
        "env": import21,
        "env": import22,
        "env": import23,
        "env": import24,
        "env": import25,
        "env": import26,
        "env": import27,
        "env": import28,
        "env": import29,
        "env": import30,
        "env": import31,
        "env": import32,
        "env": import33,
        "env": import34,
        "env": import35,
        "env": import36,
        "env": import37,
        "env": import38,
        "env": import39,
        "env": import40,
        "env": import41,
        "env": import42,
        "env": import43,
        "env": import44,
        "env": import45,
        "env": import46,
        "env": import47,
        "env": import48,
        "env": import49,
        "env": import50,
        "env": import51,
        "env": import52,
        "env": import53,
        "env": import54,
        "env": import55,
        "env": import56,
        "env": import57,
        "env": import58,
        "env": import59,
        "env": import60,
        "env": import61,
        "env": import62,
        "env": import63,
        "env": import64,
        "env": import65,
        "env": import66,
        "env": import67,
        "env": import68,
        "env": import69,
        "env": import70,
        "env": import71,
        "env": import72,
        "env": import73,
        "env": import74,
        "env": import75,
        "env": import76,
        "env": import77,
        "env": import78,
        "env": import79,
        "env": import80,
        "env": import81,
        "env": import82,
        "env": import83,
        "env": import84,
        "env": import85,
        "env": import86,
        "env": import87,
        "env": import88,
        "env": import89,
        "env": import90,
        "env": import91,
        "env": import92,
        "env": import93,
        "env": import94,
        "env": import95,
        "env": import96,
        "env": import97,
        "env": import98,
        "env": import99,
        "env": import100,
        "env": import101,
        "env": import102,
        "env": import103,
        "env": import104,
        "env": import105,
        "env": import106,
        "env": import107,
        "env": import108,
        "env": import109,
        "env": import110,
        "env": import111,
    };
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getObject(idx) { return heap[idx]; }

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export(addHeapObject(e));
    }
}

let heap = new Array(128).fill(undefined);
heap.push(undefined, null, true, false);

let heap_next = heap.length;

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasm;
function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('matrix_crushed_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
