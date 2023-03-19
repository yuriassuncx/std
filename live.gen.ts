// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import { context } from "$live/live.ts";

import * as $0 from "deco-sites/std/functions/vtexConfig.ts";
import * as $1 from "deco-sites/std/functions/vtexProductListingPage.ts";
import * as $2 from "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts";
import * as $3 from "deco-sites/std/functions/vtexSuggestions.ts";
import * as $4 from "deco-sites/std/functions/shopifyProductListingPage.ts";
import * as $5 from "deco-sites/std/functions/vtexProductList.ts";
import * as $6 from "deco-sites/std/functions/occProductDetailsPage.ts";
import * as $7 from "deco-sites/std/functions/vtexLegacyProductListingPage.ts";
import * as $8 from "deco-sites/std/functions/vtexProductDetailsPage.ts";
import * as $9 from "deco-sites/std/functions/vtexLegacyProductList.ts";
import * as $10 from "deco-sites/std/functions/shopifyProductList.ts";
import * as $11 from "deco-sites/std/functions/shopifyProductDetailsPage.ts";
import * as $$$0 from "./routes/404.tsx";
import * as $$$1 from "./routes/_middleware.ts";
import * as $$$$$$$0 from "deco-sites/std/sections/SEO.tsx";
import * as $$$$$$$1 from "deco-sites/std/sections/SEOPLP.tsx";
import * as $$$$$$$2 from "deco-sites/std/sections/configOCC.global.tsx";
import * as $$$$$$$3 from "deco-sites/std/sections/configShopify.global.tsx";
import * as $$$$$$$4 from "deco-sites/std/sections/configVTEX.global.tsx";
import * as $$$$$$$5 from "deco-sites/std/sections/SEOPDP.tsx";
import { $live } from "$live/engine/fresh/manifest.ts";
import * as $live_schema from "$live/routes/live/schema.ts";
import * as $live_previews from "$live/routes/live/previews/[...block].tsx";
import * as $live_catchall from "$live/routes/[...catchall].tsx";
import * as i1$0 from "$live/handlers/routesSelection.ts";
import * as i1$1 from "$live/handlers/router.ts";
import * as i1$2 from "$live/handlers/fresh.ts";
import * as i1$$0 from "$live/pages/LivePage.tsx";
import * as i1$$$0 from "$live/matchers/MatchDate.ts";
import * as i1$$$1 from "$live/matchers/MatchUserAgent.ts";
import * as i1$$$2 from "$live/matchers/MatchSite.ts";
import * as i1$$$3 from "$live/matchers/MatchMulti.ts";
import * as i1$$$4 from "$live/matchers/MatchRandom.ts";
import * as i1$$$5 from "$live/matchers/MatchEnvironment.ts";
import * as i1$$$6 from "$live/matchers/MatchAlways.ts";
import * as i1$$$$0 from "$live/flags/audience.ts";
import * as i1$$$$1 from "$live/flags/everyone.ts";

const manifest: DecoManifest = {
  "functions": {
    "deco-sites/std/functions/vtexConfig.ts": $0,
    "deco-sites/std/functions/vtexProductListingPage.ts": $1,
    "deco-sites/std/functions/vtexLegacyProductDetailsPage.ts": $2,
    "deco-sites/std/functions/vtexSuggestions.ts": $3,
    "deco-sites/std/functions/shopifyProductListingPage.ts": $4,
    "deco-sites/std/functions/vtexProductList.ts": $5,
    "deco-sites/std/functions/occProductDetailsPage.ts": $6,
    "deco-sites/std/functions/vtexLegacyProductListingPage.ts": $7,
    "deco-sites/std/functions/vtexProductDetailsPage.ts": $8,
    "deco-sites/std/functions/vtexLegacyProductList.ts": $9,
    "deco-sites/std/functions/shopifyProductList.ts": $10,
    "deco-sites/std/functions/shopifyProductDetailsPage.ts": $11,
  },
  "routes": {
    "./routes/404.tsx": $$$0,
    "./routes/_middleware.ts": $$$1,
    "./routes/live/schema.ts": $live_schema,
    "./routes/live/previews/[...block].tsx": $live_previews,
    "./routes/[...catchall].tsx": $live_catchall,
  },
  "sections": {
    "deco-sites/std/sections/SEO.tsx": $$$$$$$0,
    "deco-sites/std/sections/SEOPLP.tsx": $$$$$$$1,
    "deco-sites/std/sections/configOCC.global.tsx": $$$$$$$2,
    "deco-sites/std/sections/configShopify.global.tsx": $$$$$$$3,
    "deco-sites/std/sections/configVTEX.global.tsx": $$$$$$$4,
    "deco-sites/std/sections/SEOPDP.tsx": $$$$$$$5,
  },
  "handlers": {
    "$live/handlers/routesSelection.ts": i1$0,
    "$live/handlers/router.ts": i1$1,
    "$live/handlers/fresh.ts": i1$2,
  },
  "pages": {
    "$live/pages/LivePage.tsx": i1$$0,
  },
  "matchers": {
    "$live/matchers/MatchDate.ts": i1$$$0,
    "$live/matchers/MatchUserAgent.ts": i1$$$1,
    "$live/matchers/MatchSite.ts": i1$$$2,
    "$live/matchers/MatchMulti.ts": i1$$$3,
    "$live/matchers/MatchRandom.ts": i1$$$4,
    "$live/matchers/MatchEnvironment.ts": i1$$$5,
    "$live/matchers/MatchAlways.ts": i1$$$6,
  },
  "flags": {
    "$live/flags/audience.ts": i1$$$$0,
    "$live/flags/everyone.ts": i1$$$$1,
  },
  "islands": {},
  "config": config,
  "baseUrl": import.meta.url,
};

context.namespace = "deco-sites/std";

export default $live(manifest);
