!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("4Nugj"),i=r("lRuYh");r("bhhwi");var l=r("bjNOr");r("gjDBM");const a=new(0,i.ApiFavorite),c=new(0,l.CocktailsRender);function d(e){e.preventDefault(),a.removeCocktailById(e.currentTarget.dataset.cocktailId);document.querySelector("#c_"+e.currentTarget.dataset.cocktailId).remove()}function s(){let e=a.getAllCocktails();0===e.length?o.refs.cocktailsList.innerHTML=a.renderEmptyFavCocktailsPage():o.refs.cocktailsList.innerHTML=a.renderAllCocktails(e),f()}function f(){const e=document.querySelectorAll(".btn-add_and_remove");c.onRenderComplete();for(let t of e)console.log("remove"),t.addEventListener("click",d)}s(),o.refs.searchFavorite.addEventListener("submit",(function(e){a.searchByCocktailName(e),f()})),o.refs.modalCocktails.addEventListener("click",(function(e){s()}))}();
//# sourceMappingURL=favorite-cocktails.733e98fd.js.map
