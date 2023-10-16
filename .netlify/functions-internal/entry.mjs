import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_451b0d97.mjs';
import './chunks/astro_b2ff30b1.mjs';
import './chunks/pages/generic_63f4ac33.mjs';
import './chunks/astro-assets-services_1e9914d3.mjs';

const _page0  = () => import('./chunks/generic_633849fa.mjs');
const _page1  = () => import('./chunks/index_bfcef91a.mjs');const pageMap = new Map([["node_modules/.pnpm/astro@3.3.0_typescript@5.2.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
