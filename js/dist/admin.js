module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@fof/components/admin/settings/SettingsModal.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fof/components/admin/settings/SettingsModal.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsModal; });
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/SettingsModal */ "flarum/components/SettingsModal");
/* harmony import */ var flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../settings/items */ "./node_modules/@fof/components/admin/settings/items/index.js");



class SettingsModal extends flarum_components_SettingsModal__WEBPACK_IMPORTED_MODULE_0___default.a {
    init() {
        this.props.items = Array.from(this.props.items);
        this.settings = {};
        this.setting = this.setting.bind(this);

        if (this.props.onsaved) this.onsaved = this.props.onsaved.bind(this);
    }

    className() {
        return [
            this.props.className,
            this.props.size && `Modal--${this.props.size}`,
        ]
            .filter(Boolean)
            .join(' ');
    }

    title() {
        return this.props.title;
    }

    form() {
        return (
            this.props.form ||
            [...this.props.items].map(
                c =>
                    c &&
                    c.tag !== 'div' &&
                    (!c.attrs ||
                        !c.attrs.className ||
                        !c.attrs.className.contains('Form-group')) ? (
                            m('div.Form-group', c)
                    ) : (
                        c
                    )
            )
        );
    }

    static createItemsFromValidationRules(
        rules,
        settingsPrefix,
        translationsPrefix
    ) {
        const items = [];

        for (const key in rules) {
            const fullKey = settingsPrefix + key.toLowerCase();
            const rulez = rules[key].split('|');
            const type = rulez.find(t => _settings_items__WEBPACK_IMPORTED_MODULE_1__["types"][t]) || 'string';
            const item = (type && _settings_items__WEBPACK_IMPORTED_MODULE_1__["types"][type]) || _settings_items__WEBPACK_IMPORTED_MODULE_1__["StringItem"];

            const isRequired = rulez.includes('required');
            const label =
                (translationsPrefix &&
                    (app.translator.trans[
                        `${translationsPrefix}${key.toLowerCase()}-label`
                    ] ||
                        key)) ||
                key;
            const description =
                app.translator.translations[
                    `${translationsPrefix}${key.toLowerCase()}-description`
                ];

            items.push(
                m.prop(`div.Form-group${isRequired ? '.required' : ''}`, [
                    type !== 'boolean' && m('label', label),
                    item.component({
                        type,
                        key: fullKey,
                        required: isRequired,
                        children: label,
                        simple: true,
                    }),
                    description && m('span', description)
                ])
            );
        }

        return items;
    }
}


/***/ }),

/***/ "./node_modules/@fof/components/admin/settings/items/BooleanItem.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@fof/components/admin/settings/items/BooleanItem.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BooleanItem; });
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SettingItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingItem */ "./node_modules/@fof/components/admin/settings/items/SettingItem.js");



class BooleanItem extends _SettingItem__WEBPACK_IMPORTED_MODULE_1__["default"] {
    view() {
        return flarum_components_Switch__WEBPACK_IMPORTED_MODULE_0___default.a.component({
            state: !!this.getValue(),
            children: this.props.label || this.props.children,
            onchange: this.setting(),
        });
    }
}


/***/ }),

/***/ "./node_modules/@fof/components/admin/settings/items/NumberItem.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fof/components/admin/settings/items/NumberItem.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntegerItem; });
/* harmony import */ var _StringItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StringItem */ "./node_modules/@fof/components/admin/settings/items/StringItem.js");


class IntegerItem extends _StringItem__WEBPACK_IMPORTED_MODULE_0__["default"] {
    init() {
        _StringItem__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.init.call(this);

        this.cast = a => Number(a);
        this.props.type = 'number';
    }
}


/***/ }),

/***/ "./node_modules/@fof/components/admin/settings/items/SettingItem.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@fof/components/admin/settings/items/SettingItem.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingItem; });
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_0__);


class SettingItem extends flarum_Component__WEBPACK_IMPORTED_MODULE_0___default.a {
    init() {
        this.key = this.props.key;
        this.cast = this.props.cast || (a => a);
    }

    setting() {
        return app.modal.component.setting(this.key);
    }

    getValue() {
        return this.cast(this.setting()());
    }
}


/***/ }),

/***/ "./node_modules/@fof/components/admin/settings/items/StringItem.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@fof/components/admin/settings/items/StringItem.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringItem; });
/* harmony import */ var _SettingItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SettingItem */ "./node_modules/@fof/components/admin/settings/items/SettingItem.js");


class StringItem extends _SettingItem__WEBPACK_IMPORTED_MODULE_0__["default"] {
    view() {
        const attrs = Object.assign({}, this.props);
        const label = this.props.label || this.props.children;

        attrs.className = 'FormControl ' + (attrs.className || '');
        attrs.value = this.getValue();
        attrs.onchange = attrs.onchange || m.withAttr('value', this.setting());

        console.log(attrs);

        return attrs.simple ? (
            m('input', attrs)
        ) : (
            m('div.Form-group', [
                m('label', label),
                m('input', attrs)
            ])
        );
    }
}


/***/ }),

/***/ "./node_modules/@fof/components/admin/settings/items/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fof/components/admin/settings/items/index.js ***!
  \********************************************************************/
/*! exports provided: BooleanItem, StringItem, NumberItem, SettingItem, types */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony import */ var _BooleanItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BooleanItem */ "./node_modules/@fof/components/admin/settings/items/BooleanItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BooleanItem", function() { return _BooleanItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _StringItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StringItem */ "./node_modules/@fof/components/admin/settings/items/StringItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StringItem", function() { return _StringItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _NumberItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NumberItem */ "./node_modules/@fof/components/admin/settings/items/NumberItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NumberItem", function() { return _NumberItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _SettingItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SettingItem */ "./node_modules/@fof/components/admin/settings/items/SettingItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingItem", function() { return _SettingItem__WEBPACK_IMPORTED_MODULE_3__["default"]; });








const types = {
    boolean: _BooleanItem__WEBPACK_IMPORTED_MODULE_0__["default"],
    string: _StringItem__WEBPACK_IMPORTED_MODULE_1__["default"],
    integer: _NumberItem__WEBPACK_IMPORTED_MODULE_2__["default"],
    number: _NumberItem__WEBPACK_IMPORTED_MODULE_2__["default"],
};


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fof_components_admin_settings_SettingsModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fof/components/admin/settings/SettingsModal */ "./node_modules/@fof/components/admin/settings/SettingsModal.js");
/* harmony import */ var _fof_components_admin_settings_items_BooleanItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fof/components/admin/settings/items/BooleanItem */ "./node_modules/@fof/components/admin/settings/items/BooleanItem.js");



flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('fof/formatting', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionSettings['fof-formatting'] = function () {
    return flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.modal.show(new _fof_components_admin_settings_SettingsModal__WEBPACK_IMPORTED_MODULE_1__["default"]({
      title: 'FriendsOfFlarum Formatting',
      className: 'FofFormattingModal',
      items: [flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.forum.attribute('fof-formatting.plugins').map(function (plugin) {
        return m(_fof_components_admin_settings_items_BooleanItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: "fof-formatting.plugin." + plugin.toLowerCase(),
          cast: Number
        }, m("a", {
          href: "https://s9etextformatter.readthedocs.io/Plugins/" + plugin + "/Synopsis",
          target: "_blank"
        }, plugin), m("span", null, "\xA0\u2014\xA0 ", flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.translator.trans("fof-formatting.admin.plugins." + plugin)));
      })]
    }));
  };
});

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/SettingsModal":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsModal']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsModal'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map