function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/_pipes/filter-tag-autocomplete-options.pipe.ts":
  /*!****************************************************************!*\
    !*** ./src/app/_pipes/filter-tag-autocomplete-options.pipe.ts ***!
    \****************************************************************/

  /*! exports provided: FilterTagAutocompleteOptionsPipe */

  /***/
  function srcApp_pipesFilterTagAutocompleteOptionsPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterTagAutocompleteOptionsPipe", function () {
      return FilterTagAutocompleteOptionsPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterTagAutocompleteOptionsPipe = /*#__PURE__*/function () {
      function FilterTagAutocompleteOptionsPipe() {
        _classCallCheck(this, FilterTagAutocompleteOptionsPipe);
      }

      _createClass(FilterTagAutocompleteOptionsPipe, [{
        key: "transform",
        value: function transform(items, filter) {
          if (!items || !filter || filter.length === 0) {
            return items;
          }

          return items.filter(function (item) {
            var matchedAtLeaseOneFilterString = false;

            for (var i = 0; i < filter.length; i++) {
              if (item.value == filter[i]) matchedAtLeaseOneFilterString = true;
            }

            return matchedAtLeaseOneFilterString;
          });
        }
      }]);

      return FilterTagAutocompleteOptionsPipe;
    }();

    FilterTagAutocompleteOptionsPipe.ɵfac = function FilterTagAutocompleteOptionsPipe_Factory(t) {
      return new (t || FilterTagAutocompleteOptionsPipe)();
    };

    FilterTagAutocompleteOptionsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filterTagAutocompleteOptions",
      type: FilterTagAutocompleteOptionsPipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterTagAutocompleteOptionsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filterTagAutocompleteOptions',
          pure: false
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _products_product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./products/product-manage/product-manage.component */
    "./src/app/products/product-manage/product-manage.component.ts");
    /* harmony import */


    var _layout_pages_store_layout_store_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layout-pages/store-layout/store-layout.component */
    "./src/app/layout-pages/store-layout/store-layout.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./posts/post-create/post-create.component */
    "./src/app/posts/post-create/post-create.component.ts");
    /* harmony import */


    var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./posts/post-list/post-list.component */
    "./src/app/posts/post-list/post-list.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./products/product-create/product-create.component */
    "./src/app/products/product-create/product-create.component.ts");

    var routes = [{
      path: '',
      component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__["PostListComponent"]
    }, {
      path: 'create',
      component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'edit/:postId',
      component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: 'login',
      component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'signup',
      component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]
    }, {
      path: 'add-inventory',
      component: _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__["ProductCreateComponent"]
    }, {
      path: 'manage-inventory',
      component: _products_product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_0__["ProductManageComponent"]
    }, {
      path: 'editproduct/:productId',
      component: _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_9__["ProductCreateComponent"]
    }, {
      path: 'store',
      component: _layout_pages_store_layout_store_layout_component__WEBPACK_IMPORTED_MODULE_1__["StoreLayoutComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]],
          providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(authService) {
        _classCallCheck(this, AppComponent);

        this.authService = authService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var token = this.authService.autoAuthUser(); // Runs the check on localStorage, returns tokenData
          // Then also subscribe to localStorage changes on rsUserToken to run checks again whenever token changes

          this.tokenFromStorageEventSub = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'storage').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (evt) {
            return evt.key === 'rsUserToken';
          }), // deserialize the stored actions
          // get the last stored action from the actions array
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (evt) {
            return evt;
          })).subscribe(function (res) {
            _this.authService.autoAuthUser();

            console.log(res);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.tokenFromStorageEventSub.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["main[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBOztHQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi8qbWFpbiA+IGFwcC1wb3N0LWNyZWF0ZSwgYXBwLXBvc3QtbGlzdCwgYXBwLXN0b3JlLWxheW91dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59ICovXG4iLCJtYWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLyptYWluID4gYXBwLXBvc3QtY3JlYXRlLCBhcHAtcG9zdC1saXN0LCBhcHAtc3RvcmUtbGF5b3V0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn0gKi8iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _env_service_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./env.service.provider */
    "./src/app/env.service.provider.ts");
    /* harmony import */


    var _pipes_filter_tag_autocomplete_options_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./_pipes/filter-tag-autocomplete-options.pipe */
    "./src/app/_pipes/filter-tag-autocomplete-options.pipe.ts");
    /* harmony import */


    var _products_product_create_dialog_for_product_specification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./products/product-create/dialog-for-product-specification.component */
    "./src/app/products/product-create/dialog-for-product-specification.component.ts");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../global */
    "./src/global.ts");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth/auth-interceptor */
    "./src/app/auth/auth-interceptor.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/material.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./posts/post-create/post-create.component */
    "./src/app/posts/post-create/post-create.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./posts/post-list/post-list.component */
    "./src/app/posts/post-list/post-list.component.ts");
    /* harmony import */


    var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./auth/login/login.component */
    "./src/app/auth/login/login.component.ts");
    /* harmony import */


    var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./auth/signup/signup.component */
    "./src/app/auth/signup/signup.component.ts");
    /* harmony import */


    var _layout_pages_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./layout-pages/admin-layout/admin-layout.component */
    "./src/app/layout-pages/admin-layout/admin-layout.component.ts");
    /* harmony import */


    var _layout_pages_store_layout_store_layout_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./layout-pages/store-layout/store-layout.component */
    "./src/app/layout-pages/store-layout/store-layout.component.ts");
    /* harmony import */


    var _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./products/product-create/product-create.component */
    "./src/app/products/product-create/product-create.component.ts");
    /* harmony import */


    var _image_list_items_product_catalog_ili_product_catalog_ili_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./image-list-items/product-catalog-ili/product-catalog-ili.component */
    "./src/app/image-list-items/product-catalog-ili/product-catalog-ili.component.ts");
    /* harmony import */


    var _header_of_store_header_of_store_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./header-of-store/header-of-store.component */
    "./src/app/header-of-store/header-of-store.component.ts");
    /* harmony import */


    var _products_product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./products/product-manage/product-manage.component */
    "./src/app/products/product-manage/product-manage.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
        useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
        multi: true
      }, {
        provide: _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__["TINYMCE_SCRIPT_SRC"],
        useValue: 'tinymce/tinymce.min.js'
      }, _env_service_provider__WEBPACK_IMPORTED_MODULE_0__["EnvServiceProvider"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__["EditorModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_15__["PostCreateComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_17__["PostListComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"], _layout_pages_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_20__["AdminLayoutComponent"], _layout_pages_store_layout_store_layout_component__WEBPACK_IMPORTED_MODULE_21__["StoreLayoutComponent"], _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_22__["ProductCreateComponent"], _image_list_items_product_catalog_ili_product_catalog_ili_component__WEBPACK_IMPORTED_MODULE_23__["ProductCatalogIliComponent"], _header_of_store_header_of_store_component__WEBPACK_IMPORTED_MODULE_24__["HeaderOfStoreComponent"], _products_product_create_dialog_for_product_specification_component__WEBPACK_IMPORTED_MODULE_2__["DialogForProductSpecificationComponent"], _pipes_filter_tag_autocomplete_options_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterTagAutocompleteOptionsPipe"], _products_product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_25__["ProductManageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__["EditorModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_15__["PostCreateComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_17__["PostListComponent"], _auth_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"], _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"], _layout_pages_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_20__["AdminLayoutComponent"], _layout_pages_store_layout_store_layout_component__WEBPACK_IMPORTED_MODULE_21__["StoreLayoutComponent"], _products_product_create_product_create_component__WEBPACK_IMPORTED_MODULE_22__["ProductCreateComponent"], _image_list_items_product_catalog_ili_product_catalog_ili_component__WEBPACK_IMPORTED_MODULE_23__["ProductCatalogIliComponent"], _header_of_store_header_of_store_component__WEBPACK_IMPORTED_MODULE_24__["HeaderOfStoreComponent"], _products_product_create_dialog_for_product_specification_component__WEBPACK_IMPORTED_MODULE_2__["DialogForProductSpecificationComponent"], _pipes_filter_tag_autocomplete_options_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterTagAutocompleteOptionsPipe"], _products_product_manage_product_manage_component__WEBPACK_IMPORTED_MODULE_25__["ProductManageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__["EditorModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"]],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"],
            useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_4__["AuthInterceptor"],
            multi: true
          }, {
            provide: _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_12__["TINYMCE_SCRIPT_SRC"],
            useValue: 'tinymce/tinymce.min.js'
          }, _env_service_provider__WEBPACK_IMPORTED_MODULE_0__["EnvServiceProvider"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth-interceptor.ts":
  /*!******************************************!*\
    !*** ./src/app/auth/auth-interceptor.ts ***!
    \******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(authService) {
        _classCallCheck(this, AuthInterceptor);

        this.authService = authService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authToken = this.authService.getToken();
          var authUser = this.authService.getUser();
          var authRequest = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
              'Authorization': 'Bearer ' + authToken
            })
          });
          return next.handle(authRequest);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var tokenData = this.authService.getTokenData();

          if (!tokenData) {
            this.router.navigate(['/login']);
          } else {
            return true;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../env.service */
    "./src/app/env.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    Date.prototype.toIsoString = function () {
      var tzo = -this.getTimezoneOffset(),
          dif = tzo >= 0 ? '+' : '-',
          pad = function pad(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
      };

      return this.getFullYear() + '-' + pad(this.getMonth() + 1) + '-' + pad(this.getDate()) + 'T' + pad(this.getHours()) + ':' + pad(this.getMinutes()) + ':' + pad(this.getSeconds()) + dif + pad(tzo / 60) + ':' + pad(tzo % 60);
    };

    ;

    var AuthService = /*#__PURE__*/function () {
      function AuthService(envService, http) {
        _classCallCheck(this, AuthService);

        this.envService = envService;
        this.http = http;
        this.tokenData = null;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(AuthService, [{
        key: "getTokenData",
        value: function getTokenData() {
          return this.tokenData;
        }
      }, {
        key: "getIsAuth",
        value: function getIsAuth() {
          if (this.tokenData) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.authStatusListener.asObservable();
        }
      }, {
        key: "getToken",
        value: function getToken() {
          //return this.token;
          return localStorage.getItem('rsUserToken');
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return localStorage.getItem('rsUserId');
        }
      }, {
        key: "syncUserLog",
        value: function syncUserLog(token) {
          var _this2 = this;

          // Check whether userLogSocket is already initiated, if not: open new socket
          if (!this.userLogSocket) {
            this.userLogSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_4___default()(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/UserLog');
          }

          this.userLogSocket.on('connect', function (data) {
            // data is undefined here
            _this2.userLogSocket.emit('join', token); // Joins room ${token}

          });
          this.userLogSocket.on('data', function (res) {
            console.log('Received res object emitted from socket!');
            console.log(res);

            _this2.observer.next(res.data);
          });
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this2.observer = observer;
          });
        }
      }, {
        key: "createUser",
        value: function createUser(username, password) {
          var authData = {
            username: username,
            password: password,
            timeStamp: new Date().toIsoString()
          };
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/api/user/signup', authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resultData) {
            return resultData;
          }));
        }
      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var _this3 = this;

          var authInformation = this.getAuthData();

          if (!authInformation || !authInformation.token) {
            // Doing a lite-local logout
            this.tokenData = null;
            this.authStatusListener.next(null);
            clearTimeout(this.tokenTimer); // no need to call clear auth data again

            return;
          } // Have authInformation


          var expiresIn = authInformation.expirationDate - new Date().getTime();

          if (expiresIn > 0) {
            if (this.sub) {
              this.sub.unsubscribe();
              this.sub = null;
            } // ******** new subscription: whenever room ${this.token} gets data, logout


            this.sub = this.syncUserLog(authInformation.token).subscribe(function (data) {
              // received data emited from server, namespace UserLog, room token name
              //  logout for all events
              if (_this3.tokenData) {
                _this3.logoutUser(true).subscribe(function (res) {// this.tokenData = null;
                  // this.authStatusListener.next(null);
                  // clearTimeout(this.tokenTimer);
                  // this.clearAuthData(); // This fires StorageEvent, triggers autoAuthUser again, but this time authInformation is null
                }, function (err) {
                  console.log(err);
                });
              }
            }); // Set authentication info based on the valid token found from localStorage

            this.authStatusListener.next(authInformation);
            this.tokenData = authInformation;
            this.setAuthTimer(authInformation.expirationDate);
            return this.tokenData;
          }
        }
      }, {
        key: "loginUser",
        value: function loginUser(username, password) {
          var _this4 = this;

          var authData = {
            username: username,
            password: password,
            timeStamp: new Date().toIsoString()
          };
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/api/user/login', authData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (tokenData) {
            console.log(tokenData);

            if (tokenData && tokenData.token && tokenData.privileges && tokenData.creationDate && tokenData.expirationDate && tokenData.userId && tokenData.username) {
              _this4.authStatusListener.next(tokenData);

              _this4.tokenData = tokenData;

              _this4.setAuthTimer(tokenData.expirationDate); // Done with present page, now prep for other pages. Different pages are connected to the same localStorage
              // StorageEvent will detect localStorage changes and update tokenData


              _this4.saveAuthData(tokenData.token, tokenData.privileges, tokenData.creationDate, tokenData.expirationDate, tokenData.userId, tokenData.username);
            }

            return tokenData;
          }));
        }
      }, {
        key: "logoutUser",
        value: function logoutUser(processLogoutInsidePipe) {
          var _this5 = this;

          // Create a document in UserLogoutStamps that will trigger
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/api/user/logout', {
            token: this.tokenData.token
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (logoutData) {
            if (processLogoutInsidePipe) {
              _this5.tokenData = null;

              _this5.authStatusListener.next(null);

              clearTimeout(_this5.tokenTimer);

              _this5.clearAuthData();
            }

            return logoutData;
          }));
        }
      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, privileges, creationDate, expirationDate, userId, username) {
          localStorage.setItem('rsUserPrivileges', JSON.stringify(privileges));
          localStorage.setItem('rsUserTokenCreationDate', creationDate.toString());
          localStorage.setItem('rsUserTokenExpirationDate', expirationDate.toString());
          localStorage.setItem('rsUserId', userId);
          localStorage.setItem('rsUserName', username);
          localStorage.setItem('rsUserToken', token); // setting token Needs to be the final line
        }
      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem('rsUserPrivileges');
          localStorage.removeItem('rsUserTokenCreationDate');
          localStorage.removeItem('rsUserTokenExpirationDate');
          localStorage.removeItem('rsUserId');
          localStorage.removeItem('rsUserName');
          localStorage.removeItem('rsUserToken'); // setting token Needs to be the final line
        }
      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem('rsUserToken');
          var privileges = JSON.parse(localStorage.getItem('rsUserPrivileges'));
          var creationDate = localStorage.getItem('rsUserTokenCreationDate');
          var expirationDate = localStorage.getItem('rsUserTokenExpirationDate');
          var userId = localStorage.getItem('rsUserId');
          var username = localStorage.getItem('rsUserName');

          if (token && creationDate && expirationDate && userId && username) {
            return {
              token: token,
              privileges: privileges,
              expirationDate: +expirationDate,
              creationDate: +creationDate,
              userId: userId,
              username: username
            };
          } else {
            return;
          }
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(expiration) {
          var _this6 = this;

          var duration = expiration - new Date().getTime();
          this.tokenTimer = setTimeout(function () {
            _this6.logoutUser(true);
          }, duration);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/auth/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponent_mat_spinner_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function LoginComponent_form_4_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter username!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_4_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter password!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_form_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_form_4_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onLogin(_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_4_mat_error_5_Template, 2, 0, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_form_4_mat_error_9_Template, 2, 0, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid);
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(autherService, router) {
        _classCallCheck(this, LoginComponent);

        this.autherService = autherService;
        this.router = router;
        this.isLoading = false;
      }

      _createClass(LoginComponent, [{
        key: "onLogin",
        value: function onLogin(form) {
          var _this7 = this;

          if (form.invalid) {
            return;
          }

          this.isLoading = true;
          this.autherService.loginUser(form.value.username, form.value.password).subscribe(function (res) {
            //console.log(res)
            _this7.isLoading = false;

            _this7.router.navigate(['/']);
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 5,
      vars: 2,
      consts: [[4, "ngIf"], [3, "submit", 4, "ngIf"], [3, "submit"], ["loginForm", "ngForm"], ["name", "username", "ngModel", "", "matInput", "", "required", "", "type", "text", "placeholder", "Username"], ["usernameInput", "ngModel"], ["name", "password", "ngModel", "", "matInput", "", "required", "", "type", "password", "placeholder", "Password"], ["passwordInput", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_form_4_Template, 12, 2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/auth/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppAuthSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function SignupComponent_mat_spinner_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function SignupComponent_form_4_mat_error_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter username!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_4_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter password!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SignupComponent_form_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2, 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SignupComponent_form_4_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onSignup(_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SignupComponent_form_4_mat_error_5_Template, 2, 0, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SignupComponent_form_4_mat_error_9_Template, 2, 0, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r5.invalid);
      }
    }

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(authService, router) {
        _classCallCheck(this, SignupComponent);

        this.authService = authService;
        this.router = router;
        this.isLoading = false;
      }

      _createClass(SignupComponent, [{
        key: "onSignup",
        value: function onSignup(form) {
          var _this8 = this;

          if (form.invalid) {
            return;
          }

          this.isLoading = true;
          this.authService.createUser(form.value.username, form.value.password).subscribe(function (res) {
            console.log(res);
            _this8.isLoading = false;

            _this8.router.navigate(["/login"]); //this.router.navigate([`/login?username=${res.username}`]);

          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupComponent;
    }();

    SignupComponent.ɵfac = function SignupComponent_Factory(t) {
      return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SignupComponent,
      selectors: [["app-signup"]],
      decls: 5,
      vars: 2,
      consts: [[4, "ngIf"], [3, "submit", 4, "ngIf"], [3, "submit"], ["signupForm", "ngForm"], ["name", "username", "ngModel", "", "matInput", "", "required", "", "type", "text", "placeholder", "Username"], ["usernameInput", "ngModel"], ["name", "password", "ngModel", "", "matInput", "", "required", "", "type", "password", "placeholder", "Password"], ["passwordInput", "ngModel"], ["mat-raised-button", "", "color", "accent", "type", "submit"]],
      template: function SignupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SignupComponent_form_4_Template, 12, 2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-signup',
          templateUrl: './signup.component.html',
          styleUrls: ['./signup.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/env.service.provider.ts":
  /*!*****************************************!*\
    !*** ./src/app/env.service.provider.ts ***!
    \*****************************************/

  /*! exports provided: EnvServiceFactory, EnvServiceProvider */

  /***/
  function srcAppEnvServiceProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvServiceFactory", function () {
      return EnvServiceFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvServiceProvider", function () {
      return EnvServiceProvider;
    });
    /* harmony import */


    var _env_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./env.service */
    "./src/app/env.service.ts");

    var EnvServiceFactory = function EnvServiceFactory() {
      // Create env
      var env = new _env_service__WEBPACK_IMPORTED_MODULE_0__["EnvService"](); // Read environment variables from browser window

      var browserWindow = window || {};
      var browserWindowEnv = browserWindow['__env'] || {}; // Assign environment variables from browser window to env
      // In the current implementation, properties from env.js overwrite defaults from the EnvService.
      // If needed, a deep merge can be performed here to merge properties instead of overwriting them.

      for (var key in browserWindowEnv) {
        if (browserWindowEnv.hasOwnProperty(key)) {
          env[key] = window['__env'][key];
        }
      }

      return env;
    };

    var EnvServiceProvider = {
      provide: _env_service__WEBPACK_IMPORTED_MODULE_0__["EnvService"],
      useFactory: EnvServiceFactory,
      deps: []
    };
    /***/
  },

  /***/
  "./src/app/env.service.ts":
  /*!********************************!*\
    !*** ./src/app/env.service.ts ***!
    \********************************/

  /*! exports provided: EnvService */

  /***/
  function srcAppEnvServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvService", function () {
      return EnvService;
    });
    /*import { Injectable } from '@angular/core';
    
    @Injectable({
      providedIn: 'root'
    })*/


    var EnvService = function EnvService() {
      _classCallCheck(this, EnvService);

      this.apiHostUrl = '';
    };
    /***/

  },

  /***/
  "./src/app/header-of-store/header-of-store.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/header-of-store/header-of-store.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderOfStoreComponent */

  /***/
  function srcAppHeaderOfStoreHeaderOfStoreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderOfStoreComponent", function () {
      return HeaderOfStoreComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["menu1Button"];
    var _c1 = ["menu2Button"];
    var _c2 = ["menu3Button"];
    var _c3 = ["menu4Button"];
    var _c4 = ["menu5Button"];
    var _c5 = ["menu6Button"];
    var _c6 = ["menu7Button"];

    function HeaderOfStoreComponent_li_84_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderOfStoreComponent_li_85_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderOfStoreComponent_li_86_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderOfStoreComponent_li_87_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderOfStoreComponent = /*#__PURE__*/function () {
      function HeaderOfStoreComponent(authService) {
        _classCallCheck(this, HeaderOfStoreComponent);

        this.authService = authService;
        this.userIsAuthenticated = false;
        this.stayOpen = [];
      }

      _createClass(HeaderOfStoreComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.allTriggers = [this.menu1Trigger, this.menu2Trigger, this.menu3Trigger, this.menu4Trigger, this.menu5Trigger, this.menu6Trigger, this.menu7Trigger];
        }
      }, {
        key: "enableStayOpen",
        value: function enableStayOpen(index) {
          this.stayOpen[index] = true;
        }
      }, {
        key: "disableStayOpen",
        value: function disableStayOpen(index) {
          this.stayOpen[index] = false;
        }
      }, {
        key: "openHeaderMenu",
        value: function openHeaderMenu(index) {
          for (var i = 0; i < this.allTriggers.length; i++) {
            i !== index ? this.allTriggers[i].closeMenu() : null;
          }

          var thisTrigger = this.allTriggers[index];
          setTimeout(function () {
            if (!thisTrigger.menuOpen) {
              thisTrigger.openMenu();
            }
          }, 150);
        }
      }, {
        key: "mouseEnterMenu1Button",
        value: function mouseEnterMenu1Button() {
          this.openHeaderMenu(0);
        }
      }, {
        key: "mouseLeaveMenu1",
        value: function mouseLeaveMenu1() {
          this.menu1Trigger.closeMenu();
          this.disableStayOpen(0);
        }
      }, {
        key: "mouseLeaveMenu1Button",
        value: function mouseLeaveMenu1Button() {
          var _this9 = this;

          setTimeout(function () {
            !_this9.stayOpen[0] ? _this9.menu1Trigger.closeMenu() : null;
          }, 150);
        }
      }, {
        key: "mouseEnterMenu2Button",
        value: function mouseEnterMenu2Button() {
          this.openHeaderMenu(1);
        }
      }, {
        key: "mouseLeaveMenu2",
        value: function mouseLeaveMenu2() {
          this.menu2Trigger.closeMenu();
        }
      }, {
        key: "mouseLeaveMenu2Button",
        value: function mouseLeaveMenu2Button() {
          var _this10 = this;

          setTimeout(function () {
            !_this10.stayOpen[1] ? _this10.menu2Trigger.closeMenu() : null;
          }, 150);
        }
      }, {
        key: "mouseEnterMenu3Button",
        value: function mouseEnterMenu3Button() {
          this.openHeaderMenu(2);
        }
      }, {
        key: "mouseLeaveMenu3",
        value: function mouseLeaveMenu3() {
          this.menu3Trigger.closeMenu();
        }
      }, {
        key: "mouseLeaveMenu3Button",
        value: function mouseLeaveMenu3Button() {
          var _this11 = this;

          setTimeout(function () {
            !_this11.stayOpen[2] ? _this11.menu3Trigger.closeMenu() : null;
          }, 150);
        }
      }, {
        key: "mouseEnterMenu4Button",
        value: function mouseEnterMenu4Button() {
          this.openHeaderMenu(3);
        }
      }, {
        key: "mouseLeaveMenu4",
        value: function mouseLeaveMenu4() {
          this.menu4Trigger.closeMenu();
        }
      }, {
        key: "mouseLeaveMenu4Button",
        value: function mouseLeaveMenu4Button() {
          var _this12 = this;

          setTimeout(function () {
            !_this12.stayOpen[3] ? _this12.menu4Trigger.closeMenu() : null;
          }, 150);
        }
      }, {
        key: "mouseEnterMenu5Button",
        value: function mouseEnterMenu5Button() {
          this.openHeaderMenu(4);
        }
      }, {
        key: "mouseLeaveMenu5",
        value: function mouseLeaveMenu5() {
          this.menu5Trigger.closeMenu();
        }
      }, {
        key: "mouseLeaveMenu5Button",
        value: function mouseLeaveMenu5Button() {
          var _this13 = this;

          setTimeout(function () {
            !_this13.stayOpen[4] ? _this13.menu5Trigger.closeMenu() : null;
          }, 150);
        }
      }, {
        key: "mouseEnterMenu6Button",
        value: function mouseEnterMenu6Button() {
          this.openHeaderMenu(5);
        }
      }, {
        key: "mouseLeaveMenu6",
        value: function mouseLeaveMenu6() {
          this.menu6Trigger.closeMenu();
        }
      }, {
        key: "mouseLeaveMenu6Button",
        value: function mouseLeaveMenu6Button() {
          var _this14 = this;

          setTimeout(function () {
            !_this14.stayOpen[5] ? _this14.menu6Trigger.closeMenu() : null;
          }, 150);
        }
      }, {
        key: "mouseEnterMenu7Button",
        value: function mouseEnterMenu7Button() {
          this.openHeaderMenu(6);
        }
      }, {
        key: "mouseLeaveMenu7",
        value: function mouseLeaveMenu7() {
          this.menu7Trigger.closeMenu();
        }
      }, {
        key: "mouseLeaveMenu7Button",
        value: function mouseLeaveMenu7Button() {
          var _this15 = this;

          setTimeout(function () {
            !_this15.stayOpen[6] ? _this15.menu7Trigger.closeMenu() : null;
          }, 150);
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logoutUser(true).subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          // **************************************** //
          // Keep the component's auth status in sync //
          // **************************************** //
          var tokenData = this.authService.getTokenData();
          this.userIsAuthenticated = tokenData ? true : false;
          this.authListenerSub = this.authService.getAuthStatusListener().subscribe(function (tokenData) {
            _this16.userIsAuthenticated = tokenData ? true : false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authListenerSub.unsubscribe();
        }
      }]);

      return HeaderOfStoreComponent;
    }();

    HeaderOfStoreComponent.ɵfac = function HeaderOfStoreComponent_Factory(t) {
      return new (t || HeaderOfStoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    HeaderOfStoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderOfStoreComponent,
      selectors: [["app-header-of-store"]],
      viewQuery: function HeaderOfStoreComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu1Trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu2Trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu3Trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu4Trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu5Trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu6Trigger = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menu7Trigger = _t.first);
        }
      },
      decls: 88,
      vars: 18,
      consts: [["color", "white", 1, "mat-elevation-z4"], [2, "height", "50px", "margin-top", "7px"], ["routerLink", ""], ["src", "/assets/logo.png", 2, "min-height", "50px", "max-width", "250px"], [1, "spacer"], [1, "header-menu-button", 3, "matMenuTriggerFor", "mouseenter", "mouseleave"], ["menu1Button", ""], ["src", "/assets/icon_nav_1.webp", 1, "header-menu-img"], ["xPosition", "after", 3, "hasBackdrop"], ["menu1", "matMenu"], [3, "mouseenter", "mouseleave"], ["mat-menu-item", ""], ["menu2Button", ""], ["src", "/assets/icon_nav_2.webp", 1, "header-menu-img"], ["menu2", "matMenu"], ["mat-button", "", "routerLink", "/store", "routerLinkActive", "mat-accent"], ["menu3Button", ""], ["src", "/assets/icon_nav_3.webp", 1, "header-menu-img"], ["menu3", "matMenu"], ["menu4Button", ""], ["src", "/assets/icon_nav_4.webp", 1, "header-menu-img"], ["menu4", "matMenu"], ["menu5Button", ""], ["src", "/assets/icon_nav_5.webp", 1, "header-menu-img"], ["menu5", "matMenu"], ["menu6Button", ""], ["src", "/assets/icon_nav_6.webp", 1, "header-menu-img"], ["menu6", "matMenu"], ["menu7Button", ""], ["src", "/assets/icon_nav_7.webp", 1, "header-menu-img"], ["menu7", "matMenu"], [4, "ngIf"], ["mat-button", "", "routerLink", "/create", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "/login", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "/signup", "routerLinkActive", "mat-accent"], ["mat-button", ""]],
      template: function HeaderOfStoreComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_a_mouseenter_7_listener() {
            return ctx.mouseEnterMenu1Button();
          })("mouseleave", function HeaderOfStoreComponent_Template_a_mouseleave_7_listener() {
            return ctx.mouseLeaveMenu1Button();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_span_mouseenter_12_listener() {
            return ctx.enableStayOpen(0);
          })("mouseleave", function HeaderOfStoreComponent_Template_span_mouseleave_12_listener() {
            return ctx.mouseLeaveMenu1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Different Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Different Item");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_a_mouseenter_18_listener() {
            return ctx.mouseEnterMenu2Button();
          })("mouseleave", function HeaderOfStoreComponent_Template_a_mouseleave_18_listener() {
            return ctx.mouseLeaveMenu2Button();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-menu", 8, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_span_mouseenter_23_listener() {
            return ctx.enableStayOpen(1);
          })("mouseleave", function HeaderOfStoreComponent_Template_span_mouseleave_23_listener() {
            return ctx.mouseLeaveMenu2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 5, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_a_mouseenter_29_listener() {
            return ctx.mouseEnterMenu3Button();
          })("mouseleave", function HeaderOfStoreComponent_Template_a_mouseleave_29_listener() {
            return ctx.mouseLeaveMenu3Button();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-menu", 8, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_span_mouseenter_34_listener() {
            return ctx.enableStayOpen(2);
          })("mouseleave", function HeaderOfStoreComponent_Template_span_mouseleave_34_listener() {
            return ctx.mouseLeaveMenu3();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Store3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 5, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_a_mouseenter_40_listener() {
            return ctx.mouseEnterMenu4Button();
          })("mouseleave", function HeaderOfStoreComponent_Template_a_mouseleave_40_listener() {
            return ctx.mouseLeaveMenu4Button();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-menu", 8, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_span_mouseenter_45_listener() {
            return ctx.enableStayOpen(3);
          })("mouseleave", function HeaderOfStoreComponent_Template_span_mouseleave_45_listener() {
            return ctx.mouseLeaveMenu4();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Store4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 5, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_a_mouseenter_51_listener() {
            return ctx.mouseEnterMenu5Button();
          })("mouseleave", function HeaderOfStoreComponent_Template_a_mouseleave_51_listener() {
            return ctx.mouseLeaveMenu5Button();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-menu", 8, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_span_mouseenter_56_listener() {
            return ctx.enableStayOpen(4);
          })("mouseleave", function HeaderOfStoreComponent_Template_span_mouseleave_56_listener() {
            return ctx.mouseLeaveMenu5();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Store5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 5, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_a_mouseenter_62_listener() {
            return ctx.mouseEnterMenu6Button();
          })("mouseleave", function HeaderOfStoreComponent_Template_a_mouseleave_62_listener() {
            return ctx.mouseLeaveMenu6Button();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-menu", 8, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_span_mouseenter_67_listener() {
            return ctx.enableStayOpen(5);
          })("mouseleave", function HeaderOfStoreComponent_Template_span_mouseleave_67_listener() {
            return ctx.mouseLeaveMenu6();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Store6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 5, 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_a_mouseenter_73_listener() {
            return ctx.mouseEnterMenu7Button();
          })("mouseleave", function HeaderOfStoreComponent_Template_a_mouseleave_73_listener() {
            return ctx.mouseLeaveMenu7Button();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-menu", 8, 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function HeaderOfStoreComponent_Template_span_mouseenter_78_listener() {
            return ctx.enableStayOpen(6);
          })("mouseleave", function HeaderOfStoreComponent_Template_span_mouseleave_78_listener() {
            return ctx.mouseLeaveMenu7();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Store7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Item 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, HeaderOfStoreComponent_li_84_Template, 3, 0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, HeaderOfStoreComponent_li_85_Template, 3, 0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, HeaderOfStoreComponent_li_86_Template, 3, 0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, HeaderOfStoreComponent_li_87_Template, 3, 0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);

          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](55);

          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](66);

          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  padding-left: 10%;\n  padding-right: 10%;\n  position: relative;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n  flex: 1 1 auto;\n}\n\n.spacer[_ngcontent-%COMP%]    > mat-form-field[_ngcontent-%COMP%] {\n  width: calc(100% - 72px);\n}\n\n.mat-toolbar[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px black, 0 1px 1px 0 black, 0 1px 3px 0 black;\n}\n\n.header-menu-img[_ngcontent-%COMP%] {\n  max-width: 40px;\n}\n\n.header-menu-button[_ngcontent-%COMP%] {\n  vertical-align: top;\n  display: inline-block;\n  text-align: center;\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL2hlYWRlci1vZi1zdG9yZS9oZWFkZXItb2Ytc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci1vZi1zdG9yZS9oZWFkZXItb2Ytc3RvcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTtFQUNFLHNFQUFBO0FDQ0Y7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXItb2Ytc3RvcmUvaGVhZGVyLW9mLXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgcGFkZGluZy1yaWdodDogMTAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGFjZXIge1xuICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uc3BhY2VyID4gbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzJweCk7XG59XG5cbi5tYXQtdG9vbGJhcjpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMSksXG4gICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMSksXG4gICAgICAgICAgICAgIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMSk7XG59XG5cbi5oZWFkZXItbWVudS1pbWcge1xuICBtYXgtd2lkdGg6IDQwcHg7XG59XG5cbi5oZWFkZXItbWVudS1idXR0b24ge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDc1cHg7XG59XG4iLCJtYXQtdG9vbGJhciB7XG4gIHBhZGRpbmctbGVmdDogMTAlO1xuICBwYWRkaW5nLXJpZ2h0OiAxMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNwYWNlciB7XG4gIHBhZGRpbmctbGVmdDogMnJlbTtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5zcGFjZXIgPiBtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MnB4KTtcbn1cblxuLm1hdC10b29sYmFyOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggYmxhY2ssIDAgMXB4IDFweCAwIGJsYWNrLCAwIDFweCAzcHggMCBibGFjaztcbn1cblxuLmhlYWRlci1tZW51LWltZyB7XG4gIG1heC13aWR0aDogNDBweDtcbn1cblxuLmhlYWRlci1tZW51LWJ1dHRvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNzVweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderOfStoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-of-store',
          templateUrl: './header-of-store.component.html',
          styleUrls: ['./header-of-store.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, {
        menu1Trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['menu1Button', {
            read: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]
          }]
        }],
        menu2Trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['menu2Button', {
            read: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]
          }]
        }],
        menu3Trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['menu3Button', {
            read: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]
          }]
        }],
        menu4Trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['menu4Button', {
            read: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]
          }]
        }],
        menu5Trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['menu5Button', {
            read: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]
          }]
        }],
        menu6Trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['menu6Button', {
            read: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]
          }]
        }],
        menu7Trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['menu7Button', {
            read: _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "New post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HeaderComponent_li_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_18_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authService) {
        _classCallCheck(this, HeaderComponent);

        this.authService = authService;
        this.userIsAuthenticated = false;
      }

      _createClass(HeaderComponent, [{
        key: "onLogout",
        value: function onLogout() {
          this.authService.logoutUser(true).subscribe(function (res) {
            console.log(res);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          // **************************************** //
          // Keep the component's auth status in sync //
          // **************************************** //
          var tokenData = this.authService.getTokenData();
          this.userIsAuthenticated = tokenData ? true : false;
          this.authListenerSub = this.authService.getAuthStatusListener().subscribe(function (tokenData) {
            _this17.userIsAuthenticated = tokenData ? true : false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authListenerSub.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 19,
      vars: 5,
      consts: [["color", "primary"], ["routerLink", ""], [1, "spacer"], ["mat-button", "", 3, "matMenuTriggerFor"], ["aboveMenu", "matMenu"], ["type", "button", "mat-menu-item", "", "routerLink", "/store", "routerLinkActive", "mat-accent"], ["type", "button", "mat-menu-item", "", "routerLink", "/add-inventory", "routerLinkActive", "mat-accent"], [4, "ngIf"], ["mat-button", "", "routerLink", "/create", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "/login", "routerLinkActive", "mat-accent"], ["mat-button", "", "routerLink", "/signup", "routerLinkActive", "mat-accent"], ["mat-button", "", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Realtime Shop");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Links");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-menu", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Create Product");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HeaderComponent_li_15_Template, 3, 0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderComponent_li_16_Template, 3, 0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HeaderComponent_li_17_Template, 3, 0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_li_18_Template, 3, 0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"]],
      styles: ["ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbnVsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiIsInVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/image-list-items/product-catalog-ili/product-catalog-ili.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/image-list-items/product-catalog-ili/product-catalog-ili.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: ProductCatalogIliComponent */

  /***/
  function srcAppImageListItemsProductCatalogIliProductCatalogIliComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCatalogIliComponent", function () {
      return ProductCatalogIliComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductCatalogIliComponent = /*#__PURE__*/function () {
      function ProductCatalogIliComponent() {
        _classCallCheck(this, ProductCatalogIliComponent);
      }

      _createClass(ProductCatalogIliComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductCatalogIliComponent;
    }();

    ProductCatalogIliComponent.ɵfac = function ProductCatalogIliComponent_Factory(t) {
      return new (t || ProductCatalogIliComponent)();
    };

    ProductCatalogIliComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductCatalogIliComponent,
      selectors: [["app-product-catalog-ili"]],
      decls: 2,
      vars: 0,
      template: function ProductCatalogIliComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-catalog-ili works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLWxpc3QtaXRlbXMvcHJvZHVjdC1jYXRhbG9nLWlsaS9wcm9kdWN0LWNhdGFsb2ctaWxpLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductCatalogIliComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-catalog-ili',
          templateUrl: './product-catalog-ili.component.html',
          styleUrls: ['./product-catalog-ili.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout-pages/admin-layout/admin-layout.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout-pages/admin-layout/admin-layout.component.ts ***!
    \*********************************************************************/

  /*! exports provided: AdminLayoutComponent */

  /***/
  function srcAppLayoutPagesAdminLayoutAdminLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function () {
      return AdminLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdminLayoutComponent = /*#__PURE__*/function () {
      function AdminLayoutComponent() {
        _classCallCheck(this, AdminLayoutComponent);
      }

      _createClass(AdminLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdminLayoutComponent;
    }();

    AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) {
      return new (t || AdminLayoutComponent)();
    };

    AdminLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminLayoutComponent,
      selectors: [["app-admin-layout"]],
      decls: 2,
      vars: 0,
      template: function AdminLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "admin-layout works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC1wYWdlcy9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-layout',
          templateUrl: './admin-layout.component.html',
          styleUrls: ['./admin-layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layout-pages/store-layout/store-layout.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout-pages/store-layout/store-layout.component.ts ***!
    \*********************************************************************/

  /*! exports provided: StoreLayoutComponent */

  /***/
  function srcAppLayoutPagesStoreLayoutStoreLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreLayoutComponent", function () {
      return StoreLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _products_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../products/products.service */
    "./src/app/products/products.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _header_of_store_header_of_store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../header-of-store/header-of-store.component */
    "./src/app/header-of-store/header-of-store.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function StoreLayoutComponent_mat_spinner_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function StoreLayoutComponent_mat_card_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "mode_edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var picture_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](picture_r3.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", picture_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function StoreLayoutComponent_p_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No product added yet!\n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var StoreLayoutComponent = /*#__PURE__*/function () {
      function StoreLayoutComponent(productsService, authService) {
        _classCallCheck(this, StoreLayoutComponent);

        this.productsService = productsService;
        this.authService = authService;
        this.tiles = [{
          text: 'One',
          cols: 3,
          rows: 1,
          color: 'lightblue'
        }, {
          text: 'Two',
          cols: 1,
          rows: 2,
          color: 'lightgreen'
        }, {
          text: 'Three',
          cols: 1,
          rows: 1,
          color: 'lightpink'
        }, {
          text: 'Four',
          cols: 2,
          rows: 1,
          color: '#DDBDF1'
        }];
        this.pictures = [{
          id: 1,
          title: 'A natural view',
          img: 'https://product.hstatic.net/1000152881/product/y-type_leather_case_ipad-11-bk_grande.jpg'
        }, {
          id: 2,
          title: 'Newspaper',
          img: 'https://product.hstatic.net/1000152881/product/w04_402__03_7712928780ac4392a483666072fe5da5_master.jpg'
        }, {
          id: 3,
          title: 'Favourite pizza',
          img: 'https://product.hstatic.net/1000152881/product/baseus-encok-s30-silver-01_def3772fbe984bafa2f6ed74c88baf99_grande.jpg'
        }, {
          id: 4,
          title: 'Abstract design',
          img: 'https://product.hstatic.net/1000152881/product/baseus-gamo-h15-35aux-earphone-black-01_4832f02ff1cd49edb892fab742df306d_grande.jpg'
        }, {
          id: 5,
          title: 'Tech',
          img: 'https://product.hstatic.net/1000152881/product/jack-chuyen-audio-3-5-l43-silver_1abd35e0a20041779a8177380cd4debd_grande.jpg'
        }, {
          id: 6,
          title: 'Nightlife',
          img: 'https://product.hstatic.net/1000152881/product/baseus-l42-lightning-silver_19c5fd0b2fab41d6ad485537f5d0b462_grande.jpg'
        }, {
          id: 7,
          title: 'Nightlife',
          img: 'https://product.hstatic.net/1000152881/product/baseus-l42-lightning-silver_19c5fd0b2fab41d6ad485537f5d0b462_grande.jpg'
        }];
        this.isLoading = false;
        this.userIsAuthenticated = false;
      }

      _createClass(StoreLayoutComponent, [{
        key: "onDelete",
        value: function onDelete(productId) {
          var _this18 = this;

          this.isLoading = true;
          this.productsService.deleteProduct(productId).subscribe(function (res) {
            console.log(res);
            _this18.isLoading = false;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          // ***********************************************//
          // getPosts each time data is received from socket
          // this.sub = this.productsService.syncPosts()
          // .subscribe(data => {
          //   console.log(data)
          //   this.isLoading = true;
          //   this.postsService.getPosts(this.postsPerPage, this.currentPage).subscribe(
          //     res => {
          //       this.isLoading = false;
          //       this.posts = res.posts;
          //       this.totalPosts = res.postCount;
          //     }
          //   );
          // });
          // *************************************************//
          // ***********************************//
          // getPosts on component's init
          this.isLoading = true;
          this.productsService.getProducts().subscribe(function (res) {
            _this19.isLoading = false;
            _this19.products = res.products; //this.totalPosts = res.postCount;
          }, function (err) {
            console.log(err);
          }); // ***********************************//
          // **************************************** //
          // Keep the component's auth status in sync //
          // **************************************** //

          var tokenData = this.authService.getTokenData();
          this.userIsAuthenticated = tokenData ? true : false;
          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (tokenData) {
            _this19.userIsAuthenticated = tokenData ? true : false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          //this.sub.unsubscribe();
          this.authStatusSub.unsubscribe();
        }
      }]);

      return StoreLayoutComponent;
    }();

    StoreLayoutComponent.ɵfac = function StoreLayoutComponent_Factory(t) {
      return new (t || StoreLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    StoreLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StoreLayoutComponent,
      selectors: [["app-store-layout"]],
      decls: 14,
      vars: 3,
      consts: [[4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutAlign", "center", 1, "container"], ["fxFlex", "80", "fxFlexOffset", "10"], ["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutWrap", "", "fxLayoutGap", "0", "fxLayoutAlign", "start", 1, "suggestion-shelf"], ["class", "card-picture", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "working-on"], ["fxFlex", "67"], ["fxFlex", "33"], ["fxFlex", ""], ["class", "info-text mat-body-1", 4, "ngIf"], [1, "card-picture"], ["fxLayout.gt-xs", "row", "fxLayout.xs", "column"], ["fxFlex", "80%"], ["fxFlex", "10%"], ["mat-card-image", "", 2, "opacity", "0.1", 3, "src"], [1, "info-text", "mat-body-1"]],
      template: function StoreLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StoreLayoutComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-of-store");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StoreLayoutComponent_mat_card_6_Template, 9, 2, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " ABC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " DEF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, StoreLayoutComponent_p_13_Template, 2, 0, "p", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pictures);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.products || ctx.products.length <= 0) && !ctx.isLoading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _header_of_store_header_of_store_component__WEBPACK_IMPORTED_MODULE_4__["HeaderOfStoreComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexOffsetDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardImage"]],
      styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  overflow: auto;\n}\n\nmain[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n\n\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px black, 0 1px 1px 0 black, 0 1px 3px 0 black;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 18%;\n}\n\n.card-picture[_ngcontent-%COMP%] {\n  max-width: 150px;\n  margin-bottom: 2%;\n}\n\n.container[_ngcontent-%COMP%] {\n  min-height: 100%;\n  width: 100%;\n}\n\n.search-form[_ngcontent-%COMP%] {\n  width: 90%;\n}\n\n.working-on[_ngcontent-%COMP%] {\n  border: 3px solid indianred;\n  border-radius: 2px;\n}\n\n.suggestion-shelf[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\n\n.suggestion-shelf[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL2xheW91dC1wYWdlcy9zdG9yZS1sYXlvdXQvc3RvcmUtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQtcGFnZXMvc3RvcmUtbGF5b3V0L3N0b3JlLWxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBOztHQUFBOztBQUlBO0VBQ0Usc0VBQUE7QUNBRjs7QURLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FDQUY7O0FERUE7RUFDRSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0LXBhZ2VzL3N0b3JlLWxheW91dC9zdG9yZS1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbm1haW4ge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4vKiBtYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHVybCgnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHWUFBQUFqQ0FZQUFBQm1Tbis5QUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5WnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU5pMWpNVEV4SURjNUxqRTFPRE15TlN3Z01qQXhOUzh3T1M4eE1DMHdNVG94TURveU1DQWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRVZ0tGZHBibVJ2ZDNNcElpQjRiWEJOVFRwSmJuTjBZVzVqWlVsRVBTSjRiWEF1YVdsa09qbEVPRFl6TlVVd05UUXpSREV4UlRjNVEwWkdSRVZGUlRKQ1FUWkNPRVl5SWlCNGJYQk5UVHBFYjJOMWJXVnVkRWxFUFNKNGJYQXVaR2xrT2psRU9EWXpOVVV4TlRRelJERXhSVGM1UTBaR1JFVkZSVEpDUVRaQ09FWXlJajRnUEhodGNFMU5Pa1JsY21sMlpXUkdjbTl0SUhOMFVtVm1PbWx1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2T1VRNE5qTTFSRVUxTkRORU1URkZOemxEUmtaRVJVVkZNa0pCTmtJNFJqSWlJSE4wVW1WbU9tUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZPVVE0TmpNMVJFWTFORE5FTVRGRk56bERSa1pFUlVWRk1rSkJOa0k0UmpJaUx6NGdQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtJRHd2Y21SbU9sSkVSajRnUEM5NE9uaHRjRzFsZEdFK0lEdy9lSEJoWTJ0bGRDQmxibVE5SW5JaVB6N0hJT3l1QUFBRGpFbEVRVlI0MnV5YlAwZ2JZUmpHMy90eWw4c2ZFaE42cUxYK2F5RU9VcVR0MHFHbFN5bGFLbDFLaTFZUlJDa094YWtxS0RvRXBPaFVCeEVVSFJ6TTRGS2hPQ2c0WkhSUVhLcGkxWW9pQ0JWajBxU251Y3YxdTZzUlRjOUVNTjQ1dkErOEpQbkk5UHg0bi9kN2o0UlJGQVV1MHNURWhQWnFPVHI2ZENjWS9IeHZhb3ExSGh3QUtxc1NhYTNSbXFUMWhWWkVQV1F1QTRZUGhSWmtRWGpvdGxxaGVIWVdCSHBPUWlHME5QdmFwRlZONnp1NXhKZnR4eTVYQmN1eVlIRTZJZExRQUtHNU9VaDBkQUNUazROV1psZDNhWDJqNWI0TW1HY014MWxVTUJ6SGdaVjJEZWZ4Z0tXdERaeXJxK0RvN2diRzVVSkxzd3VuTlNNWTIvNyt1eVNVVXpBbjd6bEJBSWZmRDk2TkRiQzN0d1BqY0tDdDJkSGJqR0FVam50NXRsdVNwWDYyV0N6YWR3Z0Y1T3pyQSsvNk90aGJXNEhoZWJUMmFpckxCQ1pQOG5odXEyQlNvYWhucVNMNStlQWNHQUMrcVFtdHZacHNhY0ZZdytGcU5obGJLVEdXN0paVXhXZG1RQndhUW11dktEWXRtRmlzVHRHSk1iVmJDUG1mYVdKdlQ3dTFRWm9yT09weVN0c3hrdGY3V0crMjZNV1lDa09Gb3NKQlhTTVl1bHplaDV3Y1IycU1hZnVNVG96OTZlL1hZZ3gxeldEY096c05xYmV4SkJpR1ljNTMxdnc4Ukh0NjBFMGpaZ3poK2RjV25hR2ZHbU5LT0F5Um1ocUE0Mk4wODdvN0poQUk4RkpCZ1MvZDdwTFU3NVlXa0RjMzBVa2p3TGgyZDZ1STNVNHlEWDF4YkF5T0FnRjAwYWdvczRsaW81eGhkNUZYVmlCS3QzeVVnUjBqQzhMVGRMdUxJb3JhWEZHaVVYVFFLREJmUjBaeTVjTENXK2xpTE5yV0J0TFNFcnBuSkJqUDF0WUg3Z1NHM3U1eVBEVUY0dUFnT21kNGxEbWRieTdhWFJJN094QlJIMURpSXhmandVZ2xKZVc2dTRzc1E2U3VEcFQ5ZlhUTmFEREJ6czRua0p0cjFkdGRZcjI5RUE4RzBURXpyc3Vzb3JTQXp0QlhnY1Q4Zm5UTHJJNUo1T1U5VDQweGNuZ0lrZnA2TGNwUUpvQlpxSzExU0dWbCtlZDJGeHBoMGVabVNHeHZvMU5tZ1ZHODNrYlc3V2JPeHBnOE9xcGRqMUVtZ2trSXd2dXpNVWFXbDBHa2l5VEtaREJ5YWVtRDAyNlJKSWczTm1xUFhsQW1nbG11cXFxUWZUNUhzbHVZcmk1SXJLeWdPMmFEaVJjVmZiVGFiRnEzOE5QVGtCZ2ZSMmZNbFVoT1l1eUZCbVZ2RHhpY0t6ZEJhK1FYdy9CU2VYbXhsUkR0VjVRUURxTXQ1bXVTSEZSVzFwTGlZdUllSEFSbWNSRXRNVjgvYVEyUXVNL1g0RnBZQUg1NEdDMjVHVkJlMFFxejRQVSs4blIyNHFOOEV3YzlyUi93N3g5bEE3UU8xY08vQWd3QVVlMEt2UmxwbzhVQUFBQUFTVVZPUks1Q1lJST0nKSB0b3AgbGVmdCBuby1yZXBlYXQ7XG59ICovXG5cbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMSksXG4gICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMSksXG4gICAgICAgICAgICAgIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMSk7XG59XG5cbi5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTglO1xufVxuLmNhcmQtcGljdHVyZSB7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xufVxuLmNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlYXJjaC1mb3JtIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLndvcmtpbmctb24ge1xuICBib3JkZXI6IDNweCBzb2xpZCBpbmRpYW5yZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnN1Z2dlc3Rpb24tc2hlbGYge1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWF0LWNhcmQge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIG1hcmdpbjogNHB4O1xuICB9XG59XG5cbiIsIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxubWFpbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi8qIG1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUdZQUFBQWpDQVlBQUFCbVNuKzlBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlacFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1Tmkxak1URXhJRGM1TGpFMU9ETXlOU3dnTWpBeE5TOHdPUzh4TUMwd01Ub3hNRG95TUNBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVFVnS0ZkcGJtUnZkM01wSWlCNGJYQk5UVHBKYm5OMFlXNWpaVWxFUFNKNGJYQXVhV2xrT2psRU9EWXpOVVV3TlRRelJERXhSVGM1UTBaR1JFVkZSVEpDUVRaQ09FWXlJaUI0YlhCTlRUcEViMk4xYldWdWRFbEVQU0o0YlhBdVpHbGtPamxFT0RZek5VVXhOVFF6UkRFeFJUYzVRMFpHUkVWRlJUSkNRVFpDT0VZeUlqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZPVVE0TmpNMVJFVTFORE5FTVRGRk56bERSa1pFUlVWRk1rSkJOa0k0UmpJaUlITjBVbVZtT21SdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk9VUTROak0xUkVZMU5ETkVNVEZGTnpsRFJrWkVSVVZGTWtKQk5rSTRSaklpTHo0Z1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0lEd3ZjbVJtT2xKRVJqNGdQQzk0T25odGNHMWxkR0UrSUR3L2VIQmhZMnRsZENCbGJtUTlJbklpUHo3SElPeXVBQUFEakVsRVFWUjQydXliUDBnYllSakczL3R5bDhzZkVoTjZxTFgrYXlFT1VxVHQwcUdsU3lsYUtsMUtpMVlSUkNrT3hha3FLRG9FcE9oVUJ4RVVIUnpNNEZLaE9DZzRaSFJRWEtwaTFZb2lDQlZqMHFTbnVjdjF1NnNSVGM5RU1ONDV2QSs4SlBuSTlQeDRuL2Q3ajRSUkZBVXUwc1RFaFBacU9UcjZkQ2NZL0h4dmFvcTFIaHdBS3FzU2FhM1JtcVQxaFZaRVBXUXVBNFlQaFJaa1FYam90bHFoZUhZV0JIcE9RaUcwTlB2YXBGVk42enU1eEpmdHh5NVhCY3V5WUhFNklkTFFBS0c1T1VoMGRBQ1RrNE5XWmxkM2FYMmo1YjRNbUdjTXgxbFVNQnpIZ1pWMkRlZnhnS1d0RFp5cnErRG83Z2JHNVVKTHN3dW5OU01ZMi83K3V5U1VVekFuN3psQkFJZmZEOTZORGJDM3R3UGpjS0N0MmRIYmpHQVVqbnQ1dGx1U3BYNjJXQ3phZHdnRjVPenJBKy82T3RoYlc0SGhlYlQyYWlyTEJDWlA4bmh1cTJCU29haG5xU0w1K2VBY0dBQytxUW10dlpwc2FjRll3K0ZxTmhsYktUR1c3SlpVeFdkbVFCd2FRbXV2S0RZdG1GaXNUdEdKTWJWYkNQbWZhV0p2VDd1MVFab3JPT3B5U3RzeGt0ZjdXRysyNk1XWUNrT0Zvc0pCWFNNWXVsemVoNXdjUjJxTWFmdU1Ub3o5NmUvWFlneDF6V0RjT3pzTnFiZXhKQmlHWWM1MzF2dzhSSHQ2MEUwalpnemgrZGNXbmFHZkdtTktPQXlSbWhxQTQyTjA4N283SmhBSThGSkJnUy9kN3BMVTc1WVdrRGMzMFVrandMaDJkNnVJM1U0eURYMXhiQXlPQWdGMDBhZ29zNGxpbzV4aGQ1RlhWaUJLdDN5VWdSMGpDOExUZEx1TElvcmFYRkdpVVhUUUtEQmZSMFp5NWNMQ1crbGlMTnJXQnRMU0VycG5KQmpQMXRZSDdnU0czdTV5UERVRjR1QWdPbWQ0bERtZGJ5N2FYUkk3T3hCUkgxRGlJeGZqd1VnbEplVzZ1NHNzUTZTdURwVDlmWFROYUREQnpzNG5rSnRyMWR0ZFlyMjlFQThHMFRFenJzdXNvclNBenRCWGdjVDhmblRMckk1SjVPVTlUNDB4Y25nSWtmcDZMY3BRSm9CWnFLMTFTR1ZsK2VkMkZ4cGgwZVptU0d4dm8xTm1nVkc4M2tiVzdXYk94cGc4T3FwZGoxRW1na2tJd3Z1ek1VYVdsMEdraXlUS1pEQnlhZW1EMDI2UkpJZzNObXFQWGxBbWdsbXVxcXFRZlQ1SHNsdVlyaTVJckt5Z08yYURpUmNWZmJUYWJGcTM4TlBUa0JnZlIyZk1sVWhPWXV5RkJtVnZEeGljS3pkQmErUVh3L0JTZVhteGxSRHRWNVFRRHFNdDVtdVNIRlJXMXBMaVl1SWVIQVJtY1JFdE1WOC9hUTJRdU0vWDRGcFlBSDU0R0MyNUdWQmUwUXF6NFBVKzhuUjI0cU44RXdjOXJSL3c3eDlsQTdRTzFjTy9BZ3dBVWUwS3ZSbHBvOFVBQUFBQVNVVk9SSzVDWUlJPScpIHRvcCBsZWZ0IG5vLXJlcGVhdDtcbn0gKi9cbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IGJsYWNrLCAwIDFweCAxcHggMCBibGFjaywgMCAxcHggM3B4IDAgYmxhY2s7XG59XG5cbi5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMTglO1xufVxuXG4uY2FyZC1waWN0dXJlIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG5cbi5jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaC1mb3JtIHtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLndvcmtpbmctb24ge1xuICBib3JkZXI6IDNweCBzb2xpZCBpbmRpYW5yZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnN1Z2dlc3Rpb24tc2hlbGYge1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5zdWdnZXN0aW9uLXNoZWxmIG1hdC1jYXJkIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIG1hcmdpbjogNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-store-layout',
          templateUrl: './store-layout.component.html',
          styleUrls: ['./store-layout.component.scss']
        }]
      }], function () {
        return [{
          type: _products_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/material.module.ts":
  /*!************************************!*\
    !*** ./src/app/material.module.ts ***!
    \************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

    var MaterialModule = /*#__PURE__*/function () {
      function MaterialModule(matIconRegistry) {
        _classCallCheck(this, MaterialModule);

        this.matIconRegistry = matIconRegistry; // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
      }

      _createClass(MaterialModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: MaterialModule,
            providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]]
          };
        }
      }]);

      return MaterialModule;
    }();

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]));
      },
      providers: [],
      imports: [[_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]],
        exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]],
          exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"]],
          providers: []
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/post-create/mime-type.validator.ts":
  /*!**********************************************************!*\
    !*** ./src/app/posts/post-create/mime-type.validator.ts ***!
    \**********************************************************/

  /*! exports provided: mimeType */

  /***/
  function srcAppPostsPostCreateMimeTypeValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mimeType", function () {
      return mimeType;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var mimeType = function mimeType(control) {
      if (!control.value) {
        // No file is lid
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null); // them same thing as:

        /*return Observable.create((observer: Observer<{[key: string]: any}>) => {
          observer.next(null);
        });*/
      } else {
        // If there is file, check mime type
        var file = control.value;
        var fileReader = new FileReader();
        var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
          fileReader.addEventListener('loadend', function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = '';
            var isValid = false;

            for (var i = 0; i < arr.length; i++) {
              header += arr[i].toString(16);
            }

            switch (header) {
              case "89504e47":
                // png
                isValid = true;
                break;

              case "ffd8ffe0":
              case "ffd8ffe1":
              case "ffd8ffe2":
              case "ffd8ffe3":
              case "ffd8ffe8":
                isValid = true; // jpg, jpeg

                break;

              default:
                isValid = false;
                break;
            }

            if (isValid) {
              observer.next(null);
            } else {
              observer.next({
                invalidMimeType: true
              });
            }

            observer.complete();
          });
          fileReader.readAsArrayBuffer(file);
        });
        return frObs;
      }
    };
    /***/

  },

  /***/
  "./src/app/posts/post-create/post-create.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/posts/post-create/post-create.component.ts ***!
    \************************************************************/

  /*! exports provided: PostCreateComponent */

  /***/
  function srcAppPostsPostCreatePostCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function () {
      return PostCreateComponent;
    });
    /* harmony import */


    var _mime_type_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./mime-type.validator */
    "./src/app/posts/post-create/mime-type.validator.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../posts.service */
    "./src/app/posts/posts.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function PostCreateComponent_mat_spinner_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function PostCreateComponent_form_4_mat_error_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PostCreateComponent_form_4_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r4.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx_r4.form.value.title);
      }
    }

    function PostCreateComponent_form_4_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PostCreateComponent_form_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function PostCreateComponent_form_4_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.onSavePost();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PostCreateComponent_form_4_mat_error_3_Template, 2, 0, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostCreateComponent_form_4_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);

          return _r3.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Pick image");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 5, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PostCreateComponent_form_4_Template_input_change_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.onImagePicked($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PostCreateComponent_form_4_div_9_Template, 2, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "textarea", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, PostCreateComponent_form_4_mat_error_12_Template, 2, 0, "mat-error", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Save Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.get("title").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.imagePreview && ctx_r1.imagePreview !== "" && ctx_r1.form.get("image").valid);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.form.get("content").invalid);
      }
    }

    var PostCreateComponent = /*#__PURE__*/function () {
      //@Output() postCreated = new EventEmitter<Post>();
      function PostCreateComponent(postsService, route, router, sanitizer) {
        _classCallCheck(this, PostCreateComponent);

        this.postsService = postsService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.enteredTitle = '';
        this.enteredContent = '';
        this.isLoading = false;

        this.onSavePost = function () {
          var _this20 = this;

          if (this.form.invalid) {
            return;
          }

          this.isLoading = true;

          if (!this.post) {
            // No postId -> Add post
            // Create new post. Image needs to be required but currently can be empty
            this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image).subscribe(function (res) {
              console.log(res);
              _this20.isLoading = false;

              _this20.router.navigate(['/']);
            }, function (err) {
              return console.log(err);
            });
          } else {
            // Update existing post. Image field is optional, and its value determines
            // whether the payload of postsService.updatePost will contain image property
            this.postsService.updatePost(this.post.id, this.form.value.title, this.form.value.content, this.form.value.image).subscribe(function (res) {
              console.log(res);
              _this20.isLoading = false;

              _this20.router.navigate(['/']);
            }, function (err) {
              console.log(err);
            });
          }

          this.form.reset();
        };
      }

      _createClass(PostCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [],
              asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_0__["mimeType"]]
            }),
            imagePath: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null)
          });
          this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('postId')) {
              _this21.isLoading = true;

              _this21.postsService.getPost(paramMap.get('postId')).subscribe(function (post) {
                _this21.isLoading = false;
                _this21.post = post;

                _this21.form.patchValue({
                  title: post.title,
                  content: post.content,
                  imagePath: post.imagePath
                });
              }, function (err) {
                return console.log(err);
              });
            } else {
              _this21.post = null;
            }
          });
        }
      }, {
        key: "onImagePicked",
        value: function onImagePicked(event) {
          var _this22 = this;

          var reader = new FileReader();
          var file = event.target.files[0];

          if (!file) {
            this.form.patchValue({
              image: null
            });
            this.imagePreview = '';
          } else {
            this.form.patchValue({
              image: file
            });
            console.log(this.form.value);
            reader.readAsDataURL(file);
          }

          this.form.get('image').updateValueAndValidity();

          reader.onload = function () {
            //this.imagePreview = (reader.result as string);
            _this22.imagePreview = _this22.sanitizer.bypassSecurityTrustUrl(reader.result); //this.imagePreview = this.sanitizer.sanitize(SecurityContext.STYLE, reader.result as string);
            //this.sanitizer.sanitize(SecurityContext.STYLE, 'url(' + this.image + ')');
          };
        }
      }]);

      return PostCreateComponent;
    }();

    PostCreateComponent.ɵfac = function PostCreateComponent_Factory(t) {
      return new (t || PostCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]));
    };

    PostCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PostCreateComponent,
      selectors: [["app-post-create"]],
      decls: 5,
      vars: 2,
      consts: [[4, "ngIf"], [3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], ["matInput", "", "type", "text", "formControlName", "title", "placeholder", "Post title"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", 3, "change"], ["filePicker", ""], ["class", "image-preview", 4, "ngIf"], ["matInput", "", "rows", "4", "formControlName", "content", "placeholder", "Post content"], ["mat-raised-button", "", "color", "accent", "type", "submit"], [1, "image-preview"], [3, "src", "alt"]],
      template: function PostCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PostCreateComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PostCreateComponent_form_4_Template, 15, 4, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.image-preview[_ngcontent-%COMP%] {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL3Bvc3RzL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wb3N0cy9wb3N0LWNyZWF0ZS9wb3N0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0W3R5cGU9J2ZpbGUnXSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltYWdlLXByZXZpZXcge1xuICBoZWlnaHQ6IDVyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW1hZ2UtcHJldmlldyB7XG4gIGhlaWdodDogNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-post-create',
          templateUrl: './post-create.component.html',
          styleUrls: ['./post-create.component.scss']
        }]
      }], function () {
        return [{
          type: _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/post-list/post-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/posts/post-list/post-list.component.ts ***!
    \********************************************************/

  /*! exports provided: PostListComponent */

  /***/
  function srcAppPostsPostListPostListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostListComponent", function () {
      return PostListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../posts.service */
    "./src/app/posts/posts.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    function PostListComponent_mat_spinner_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/edit", a1];
    };

    function PostListComponent_mat_accordion_3_mat_expansion_panel_1_mat_action_row_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-action-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EDIT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostListComponent_mat_accordion_3_mat_expansion_panel_1_mat_action_row_7_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.onDelete(post_r5.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "DELETE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, post_r5.id));
      }
    }

    function PostListComponent_mat_accordion_3_mat_expansion_panel_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostListComponent_mat_accordion_3_mat_expansion_panel_1_mat_action_row_7_Template, 5, 3, "mat-action-row", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r5.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", post_r5.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", post_r5.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r5.content, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userIsAuthenticated);
      }
    }

    function PostListComponent_mat_accordion_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostListComponent_mat_accordion_3_mat_expansion_panel_1_Template, 8, 5, "mat-expansion-panel", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.posts);
      }
    }

    function PostListComponent_mat_paginator_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-paginator", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function PostListComponent_mat_paginator_4_Template_mat_paginator_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onChangedPage($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx_r2.totalPosts)("pageSize", ctx_r2.postsPerPage)("pageSizeOptions", ctx_r2.pageSizeOptions);
      }
    }

    function PostListComponent_p_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No post added yet! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PostListComponent = /*#__PURE__*/function () {
      function PostListComponent(postsService, authService) {
        _classCallCheck(this, PostListComponent);

        this.postsService = postsService;
        this.authService = authService;
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 10;
        this.currentPage = 1;
        this.pageSizeOptions = [2, 5, 10];
        this.userIsAuthenticated = false;
      }

      _createClass(PostListComponent, [{
        key: "onChangedPage",
        value: function onChangedPage(pageData) {
          var _this23 = this;

          console.log(pageData);
          this.currentPage = pageData.pageIndex + 1;
          this.postsPerPage = pageData.pageSize; // getPosts everytime pagination triggers

          this.isLoading = true;
          this.postsService.getPosts(this.postsPerPage, this.currentPage).subscribe(function (res) {
            _this23.isLoading = false;
            _this23.posts = res.posts;
            _this23.totalPosts = res.postCount;
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete(postId) {
          var _this24 = this;

          this.isLoading = true;
          this.postsService.deletePost(postId).subscribe(function (res) {
            console.log(res);
            _this24.isLoading = false;
          }, function (err) {
            console.log(err);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          // ***********************************************//
          // getPosts each time data is received from socket
          this.sub = this.postsService.syncPosts().subscribe(function (data) {
            console.log(data);
            _this25.isLoading = true;

            _this25.postsService.getPosts(_this25.postsPerPage, _this25.currentPage).subscribe(function (res) {
              _this25.isLoading = false;
              _this25.posts = res.posts;
              _this25.totalPosts = res.postCount;
            });
          }); // *************************************************//
          // ***********************************//
          // getPosts on component's init

          this.isLoading = true;
          this.postsService.getPosts(this.postsPerPage, this.currentPage).subscribe(function (res) {
            _this25.isLoading = false;
            _this25.posts = res.posts;
            _this25.totalPosts = res.postCount;
          }, function (err) {
            console.log(err);
          }); // ***********************************//
          // **************************************** //
          // Keep the component's auth status in sync //
          // **************************************** //

          var tokenData = this.authService.getTokenData();
          this.userIsAuthenticated = tokenData ? true : false;
          this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (tokenData) {
            _this25.userIsAuthenticated = tokenData ? true : false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
          this.authStatusSub.unsubscribe();
        }
      }]);

      return PostListComponent;
    }();

    PostListComponent.ɵfac = function PostListComponent_Factory(t) {
      return new (t || PostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    PostListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostListComponent,
      selectors: [["app-post-list"]],
      decls: 6,
      vars: 4,
      consts: [[4, "ngIf"], ["multi", "true", 4, "ngIf"], [3, "length", "pageSize", "pageSizeOptions", "page", 4, "ngIf"], ["class", "info-text mat-body-1", 4, "ngIf"], ["multi", "true"], [4, "ngFor", "ngForOf"], [1, "post-image"], [3, "src", "alt"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-button", "", "color", "warn", 3, "click"], [3, "length", "pageSize", "pageSizeOptions", "page"], [1, "info-text", "mat-body-1"]],
      template: function PostListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostListComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostListComponent_mat_accordion_3_Template, 2, 1, "mat-accordion", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostListComponent_mat_paginator_4_Template, 1, 3, "mat-paginator", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostListComponent_p_5_Template, 2, 0, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts && ctx.posts.length > 0 && !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.posts && ctx.posts.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (!ctx.posts || ctx.posts.length <= 0) && !ctx.isLoading);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"]],
      styles: [".info-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.post-image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.post-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL3Bvc3RzL3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Bvc3RzL3Bvc3QtbGlzdC9wb3N0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLDBDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluZm8tdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9zdC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdC1pbWFnZSBpbWcge1xuICB3aWR0aDogNDAlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsMCwwLDAuNSk7XG59XG4iLCIuaW5mby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9zdC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdC1pbWFnZSBpbWcge1xuICB3aWR0aDogNDAlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post-list',
          templateUrl: './post-list.component.html',
          styleUrls: ['./post-list.component.scss']
        }]
      }], function () {
        return [{
          type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/posts/posts.service.ts":
  /*!****************************************!*\
    !*** ./src/app/posts/posts.service.ts ***!
    \****************************************/

  /*! exports provided: PostsService */

  /***/
  function srcAppPostsPostsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PostsService", function () {
      return PostsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../env.service */
    "./src/app/env.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PostsService = /*#__PURE__*/function () {
      function PostsService(envService, authService, http) {
        _classCallCheck(this, PostsService);

        this.envService = envService;
        this.authService = authService;
        this.http = http;
      }

      _createClass(PostsService, [{
        key: "syncPosts",
        value: function syncPosts() {
          var _this26 = this;

          // Check whether postsSocket is already initiated, if not: open new socket
          if (!this.postsSocket) {
            this.postsSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/PostsCollection');
          }

          this.postsSocket.on('data', function (res) {
            _this26.observer.next(res.data);
          });
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this26.observer = observer;
          });
        }
      }, {
        key: "getPosts",
        value: function getPosts(postsPerPage, currentPage) {
          var queryParams = "?pagesize=".concat(postsPerPage, "&page=").concat(currentPage);
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/posts' + queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return {
              postCount: postData.postCount,
              posts: postData.posts.map(function (post) {
                post.id = post._id;
                return post;
              })
            };
          }));
        }
      }, {
        key: "addPost",
        value: function addPost(title, content, image) {
          var postData = new FormData();
          postData.append('title', title);
          postData.append('content', content);
          postData.append('image', image, image.name); //MARK2

          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/posts', postData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (responseData) {
            return "something cool";
          }));
        }
      }, {
        key: "deletePost",
        value: function deletePost(postId) {
          var _this27 = this;

          return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/posts/' + postId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.error && err.error.needLogout) {
              console.log(err);

              _this27.authService.logoutUser(true).subscribe(function (res) {
                console.log(res);
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getPost",
        value: function getPost(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/posts/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            postData.id = postData._id;
            return postData;
          }));
        }
      }, {
        key: "updatePost",
        value: function updatePost(id, title, content, image) {
          var _this28 = this;

          var postData = new FormData();
          postData.append('title', title);
          postData.append('content', content);

          if (image) {
            postData.append('image', image, image.name); //MARK2
          }

          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/posts/' + id, postData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.error && err.error.needLogout) {
              console.log(err);

              _this28.authService.logoutUser(true).subscribe(function (res) {
                console.log(res);
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
          }));
        }
      }]);

      return PostsService;
    }();

    PostsService.ɵfac = function PostsService_Factory(t) {
      return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]));
    };

    PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PostsService,
      factory: PostsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/product-create/dialog-for-product-specification.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/products/product-create/dialog-for-product-specification.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: DialogForProductSpecificationComponent */

  /***/
  function srcAppProductsProductCreateDialogForProductSpecificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogForProductSpecificationComponent", function () {
      return DialogForProductSpecificationComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = ["specNameInput"];
    var _c1 = ["specValueInput"];

    function DialogForProductSpecificationComponent_mat_error_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DialogForProductSpecificationComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Required ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var DialogForProductSpecificationComponent = /*#__PURE__*/function () {
      function DialogForProductSpecificationComponent(dialogRef, data) {
        _classCallCheck(this, DialogForProductSpecificationComponent);

        this.dialogRef = dialogRef;
        this.data = data;
      }

      _createClass(DialogForProductSpecificationComponent, [{
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.specForm.invalid) {
            return;
          }

          this.dialogRef.close({
            specName: this.specForm.value.name,
            specValue: this.specForm.value.value
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.specForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.value.specName, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            }),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](this.data.value.specValue, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
            })
          }); // setTimeout is needed to work. The focus action is applied on the native element
          // (it cannot be allowed at iniatiation time at all. None of the digest cycles like ngAfterViewInit works)

          if (this.data.value.specName) {
            setTimeout(function () {
              return _this29.specValueInput.nativeElement.focus();
            });
          } else {
            setTimeout(function () {
              return _this29.specNameInput.nativeElement.focus();
            });
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return DialogForProductSpecificationComponent;
    }();

    DialogForProductSpecificationComponent.ɵfac = function DialogForProductSpecificationComponent_Factory(t) {
      return new (t || DialogForProductSpecificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    DialogForProductSpecificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DialogForProductSpecificationComponent,
      selectors: [["dialog-for-product-specification"]],
      viewQuery: function DialogForProductSpecificationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.specNameInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.specValueInput = _t.first);
        }
      },
      decls: 21,
      vars: 3,
      consts: [[3, "formGroup", "submit"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", "formControlName", "name"], ["specNameInput", ""], [4, "ngIf"], ["matInput", "", "formControlName", "value"], ["specValueInput", ""], ["mat-dialog-actions", ""], ["type", "button", "mat-button", "", 3, "click"], ["type", "submit", "mat-button", ""]],
      template: function DialogForProductSpecificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function DialogForProductSpecificationComponent_Template_form_submit_0_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Th\xF4ng s\u1ED1 s\u1EA3n ph\u1EA9m");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "T\xEAn th\xF4ng s\u1ED1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DialogForProductSpecificationComponent_mat_error_9_Template, 2, 0, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-form-field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Gi\xE1 tr\u1ECB th\xF4ng s\u1ED1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DialogForProductSpecificationComponent_mat_error_15_Template, 2, 0, "mat-error", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DialogForProductSpecificationComponent_Template_button_click_17_listener() {
            return ctx.onNoClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.specForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.specForm.get("name").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.specForm.get("value").invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogForProductSpecificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'dialog-for-product-specification',
          templateUrl: './dialog-for-product-specification.component.html'
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, {
        specNameInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['specNameInput']
        }],
        specValueInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['specValueInput']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/product-create/product-create.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/products/product-create/product-create.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProductCreateComponent */

  /***/
  function srcAppProductsProductCreateProductCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function () {
      return ProductCreateComponent;
    });
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _dialog_for_product_specification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dialog-for-product-specification.component */
    "./src/app/products/product-create/dialog-for-product-specification.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../products.service */
    "./src/app/products/products.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["tagInput"];
    var _c1 = ["auto"];

    function ProductCreateComponent_tr_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "remove_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "remove_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "remove_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "remove_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "remove_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ps_r5 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ps_r5.product.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.formatPS(ps_r5.productSpecific), " ");
      }
    }

    function ProductCreateComponent_mat_spinner_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function ProductCreateComponent_mat_card_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-card");
      }
    }

    function ProductCreateComponent_mat_card_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-card");
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r26 = ctx.$implicit;
        var i_r27 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroupName", i_r27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", photo_r26["controls"].url.value, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", "Image Preview " + (i_r27 + 1));
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_error_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2() {
      return {
        standalone: true
      };
    };

    function ProductCreateComponent_mat_card_16_form_1_mat_checkbox_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-checkbox", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductCreateComponent_mat_card_16_form_1_mat_checkbox_31_Template_mat_checkbox_ngModelChange_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r31);

          var i_r29 = ctx.index;

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r30.productForm.value.support[i_r29] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var psOption_r28 = ctx.$implicit;
        var i_r29 = ctx.index;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r14.productForm.value.support[i_r29])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](psOption_r28.title);
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_chip_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("removed", function ProductCreateComponent_mat_card_16_form_1_mat_chip_39_Template_mat_chip_removed_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r34);

          var pt_r32 = ctx.$implicit;

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

          return ctx_r33.remove(pt_r32);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pt_r32 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", pt_r32, " ");
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_option_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pt_r35 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", pt_r35);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", pt_r35.value, " ");
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_div_52_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Ch\u01B0a c\xF3 th\xF4ng tin th\xF4ng s\u1ED1 c\u1EE5 th\u1EC3 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_table_53_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCreateComponent_mat_card_16_form_1_table_53_tr_7_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39);

          var key_r37 = ctx.$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r38.openSpecificationDialog(key_r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCreateComponent_mat_card_16_form_1_table_53_tr_7_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r39);

          var key_r37 = ctx.$implicit;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

          return ctx_r40.removeSpecificationKey(key_r37);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "remove_circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r37 = ctx.$implicit;

        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", key_r37, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r36.productForm.value.specification[key_r37], " ");
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_table_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "T\xEAn th\xF4ng s\u1ED1");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Gi\xE1 tr\u1ECB");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProductCreateComponent_mat_card_16_form_1_table_53_tr_7_Template, 15, 2, "tr", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r21.getKeys(ctx_r21.productForm.value.specification));
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_error_60_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_error_63_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_error_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    function ProductCreateComponent_mat_card_16_form_1_mat_error_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    var _c3 = function _c3() {
      return ["file edit view insert format tools table help"];
    };

    var _c4 = function _c4() {
      return ["print preview paste importcss searchreplace autolink autosave", "save directionality code visualblocks visualchars fullscreen", "image link media template codesample table charmap hr pagebreak", "nonbreaking anchor toc insertdatetime advlist lists wordcount", "imagetools textpattern noneditable help charmap quickbars emoticons"];
    };

    var _c5 = function _c5(a3, a4) {
      return {
        base_url: "/tinymce",
        suffix: ".min",
        height: 500,
        menubar: a3,
        plugins: a4,
        toolbar: "undo redo | bold italic underline strikethrough | \n                  fontselect fontsizeselect formatselect | \n                  alignleft aligncenter alignright alignjustify | \n                  outdent indent |  numlist bullist | forecolor backcolor removeformat | \n                  pagebreak | charmap emoticons | fullscreen  preview save print | \n                  insertfile image media template link anchor codesample | ltr rtl",
        toolbar_sticky: true,
        toolbar_mode: "sliding"
      };
    };

    function ProductCreateComponent_mat_card_16_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function ProductCreateComponent_mat_card_16_form_1_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r41.onSaveProduct();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCreateComponent_mat_card_16_form_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](10);

          return _r8.click();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "add_photo_alternate");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProductCreateComponent_mat_card_16_form_1_div_8_Template, 3, 3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 17, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ProductCreateComponent_mat_card_16_form_1_Template_input_change_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r44.detectProductPhotos($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductCreateComponent_mat_card_16_form_1_mat_error_14_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductCreateComponent_mat_card_16_form_1_mat_error_17_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ProductCreateComponent_mat_card_16_form_1_mat_error_20_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ProductCreateComponent_mat_card_16_form_1_mat_error_23_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "textarea", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ProductCreateComponent_mat_card_16_form_1_mat_error_26_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "section", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Product support");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ProductCreateComponent_mat_card_16_form_1_mat_checkbox_31_Template, 3, 4, "mat-checkbox", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "section", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Product tags");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-form-field", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-chip-list", null, 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ProductCreateComponent_mat_card_16_form_1_mat_chip_39_Template, 4, 1, "mat-chip", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "input", 30, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matChipInputTokenEnd", function ProductCreateComponent_mat_card_16_form_1_Template_input_matChipInputTokenEnd_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r45.add($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-autocomplete", 32, 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("optionSelected", function ProductCreateComponent_mat_card_16_form_1_Template_mat_autocomplete_optionSelected_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r46.selected($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ProductCreateComponent_mat_card_16_form_1_mat_option_44_Template, 2, 2, "mat-option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](45, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "section", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Product specification");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductCreateComponent_mat_card_16_form_1_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          return ctx_r47.openSpecificationDialog();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " Th\xEAm th\xF4ng s\u1ED1 s\u1EA3n ph\u1EA9m ");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, ProductCreateComponent_mat_card_16_form_1_div_52_Template, 2, 0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, ProductCreateComponent_mat_card_16_form_1_table_53_Template, 8, 1, "table", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Product detail");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "editor", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, ProductCreateComponent_mat_card_16_form_1_mat_error_60_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "input", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, ProductCreateComponent_mat_card_16_form_1_mat_error_63_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](66, ProductCreateComponent_mat_card_16_form_1_mat_error_66_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](69, ProductCreateComponent_mat_card_16_form_1_mat_error_69_Template, 2, 0, "mat-error", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Save Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](38);

        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43);

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r6.productForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.productPhotos.controls);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("title").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("brand").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("model").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("upc").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("description").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.productSupportOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.selectedTags);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r6.tagInputCtrl)("matAutocomplete", _r18)("matChipInputFor", _r15)("matChipInputSeparatorKeyCodes", ctx_r6.separatorKeysCodes);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](45, 21, ctx_r6.filteredTags));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.getKeys(ctx_r6.productForm.value.specification).length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.getKeys(ctx_r6.productForm.value.specification).length !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("init", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](25, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c3), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c4)));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("salePrice").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("location").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("addingAmount").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.productForm.get("costPerUnit").invalid);
      }
    }

    function ProductCreateComponent_mat_card_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductCreateComponent_mat_card_16_form_1_Template, 72, 28, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.isLoading);
      }
    }

    var ProductCreateComponent = /*#__PURE__*/function () {
      function ProductCreateComponent(route, router, productsService, formBuilder, dialog) {
        _classCallCheck(this, ProductCreateComponent);

        this.route = route;
        this.router = router;
        this.productsService = productsService;
        this.formBuilder = formBuilder;
        this.dialog = dialog;

        this.formatPS = function (obj) {
          return JSON.stringify(obj);
        };

        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_0__["COMMA"]];
        this.tagInputCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.selectedTags = [];

        this.getKeys = function (obj) {
          return Object.keys(obj);
        };

        this.isLoading = false;
        this.productSupportOptions = [];
      }

      _createClass(ProductCreateComponent, [{
        key: "detectProductPhotos",
        value: function detectProductPhotos(event) {
          var _this30 = this;

          var files = event.target.files;

          if (files) {
            var _loop = function _loop() {
              var file = files[i];
              var reader = new FileReader();

              reader.onload = function (e) {
                _this30.productPhotos.push(_this30.formBuilder.group({
                  file: file,
                  url: e.target.result //Base64 string for preview image

                }));

                if (i + 1 === files.length) {
                  // Empty files input after read
                  event.target.value = '';
                }
              };

              reader.readAsDataURL(file);
            };

            for (var i = 0; i < files.length; i++) {
              _loop();
            }
          }
        }
      }, {
        key: "add",
        value: function add(event) {
          var input = event.input;
          var value = event.value; // Add our fruit

          if ((value || '').trim()) {
            this.selectedTags.push(value.trim());
          } // Reset the input value


          if (input) {
            input.value = '';
          }

          this.tagInputCtrl.setValue(null);
        }
      }, {
        key: "remove",
        value: function remove(fruit) {
          var index = this.selectedTags.indexOf(fruit);

          if (index >= 0) {
            this.selectedTags.splice(index, 1);
          }
        }
      }, {
        key: "selected",
        value: function selected(event) {
          this.selectedTags.push(event.option.viewValue);
          this.tagInput.nativeElement.value = '';
          this.tagInputCtrl.setValue(null);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.filteredTags = this.tagInputCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (filterText) {
            // convert the regular text to tag format
            var formatedText = filterText ? filterText.split(' ').join('-') : '';
            return _this31.productsService.getProductTags(formatedText);
          })); // ***********************************************//
          // Get table data
          // Do it each time data is received from socket

          this.syncProductsSubscription = this.productsService.syncProducts().subscribe(function (data) {
            console.log(data);
            _this31.isLoading = true;

            _this31.productsService.getProductSpecifications().subscribe(function (docs) {
              _this31.isLoading = false;
              _this31.productSpecifications = docs;
            }, function (err) {
              console.log(err);
            });
          }); // sync table data realtime

          this.productsService.getProductSpecifications().subscribe(function (docs) {
            _this31.isLoading = false;
            _this31.productSpecifications = docs;
          }, function (err) {
            console.log(err);
          }); // *************************************************//
          // *************************************************//
          //  Initialize productForm

          this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            brand: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            model: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            detail: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('Starting content', {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            tags: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            support: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]([]),
            specification: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({}),
            upc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            }),
            salePrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            addingAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            costPerUnit: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            //
            photos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
          });
          this.productsService.getProductSupports().subscribe(function (productSupports) {
            _this31.productSupportOptions = productSupports;
          }); // queryParams possible:  ?formMode=0 || 1 || 2&productSpecficationId=434ted4yet

          this.route.queryParamMap.subscribe(function (params) {
            _this31.formMode = +params.get('formMode');

            if (params.has('productSpecficationId')) {
              _this31.productsService.getProductSpecificationById(params.get('productSpecficationId')).subscribe(function (ps) {
                _this31.providedPS = ps;
              }, function (err) {
                return console.log(err);
              });
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.syncProductsSubscription.unsubscribe();
        }
      }, {
        key: "onSaveProduct",
        value: function onSaveProduct() {
          var _this32 = this;

          if (this.productForm.invalid) {
            return;
          } //this.isLoading = true;


          var newProductData = {
            title: this.productForm.value.title,
            description: this.productForm.value.description,
            brand: this.productForm.value.brand,
            model: this.productForm.value.model,
            detail: this.productForm.value.detail,
            tags: this.productForm.value.tags,
            support: this.productForm.value.support,
            specification: this.productForm.value.specification,
            upc: this.productForm.value.upc,
            salePrice: this.productForm.value.salePrice,
            location: this.productForm.value.location,
            addingAmount: this.productForm.value.addingAmount,
            costPerUnit: this.productForm.value.costPerUnit,
            photos: this.productForm.value.photos
          };
          this.productsService.addProduct(newProductData).subscribe(function (res) {
            console.log(res);
            _this32.isLoading = false;
          }, function (err) {
            return console.log(err);
          }); //this.form.reset();
        }
      }, {
        key: "removeSpecificationKey",
        value: function removeSpecificationKey(k) {
          var specification = this.productForm.value.specification;
          delete specification[k];
          this.productForm.patchValue({
            specification: specification
          });
        }
      }, {
        key: "openSpecificationDialog",
        value: function openSpecificationDialog(specName) {
          var _this33 = this;

          var dialogRef = this.dialog.open(_dialog_for_product_specification_component__WEBPACK_IMPORTED_MODULE_1__["DialogForProductSpecificationComponent"], {
            autoFocus: false,
            disableClose: true,
            width: '250px',
            data: {
              value: {
                specName: specName ? specName : '',
                specValue: ''
              }
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              var specification = _this33.productForm.value.specification;
              specification[result.specName] = result.specValue;

              _this33.productForm.patchValue({
                specification: Object.assign({}, specification)
              });
            }
          });
        }
      }, {
        key: "productPhotos",
        get: function get() {
          return this.productForm.get('photos');
        }
      }]);

      return ProductCreateComponent;
    }();

    ProductCreateComponent.ɵfac = function ProductCreateComponent_Factory(t) {
      return new (t || ProductCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]));
    };

    ProductCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProductCreateComponent,
      selectors: [["app-product-create"]],
      viewQuery: function ProductCreateComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tagInput = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.matAutocomplete = _t.first);
        }
      },
      decls: 17,
      vars: 5,
      consts: [["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between", 1, "container"], ["fxFlex", "40"], [1, "w3-table", "w3-bordered", "w3-striped", "w3-border"], [1, "w3-yellow"], [4, "ngFor", "ngForOf"], ["fxFlex", "60"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutAlign", "space-between"], ["fxFlex", ""], ["mat-button", "", 2, "line-height", "unset", "padding", "0 !important", "min-width", "32px !important"], [3, "formGroup", "submit", 4, "ngIf"], [3, "formGroup", "submit"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutAlign", "center", "fxLayoutGap", "1rem"], ["fxFlex", "50"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "scrolling-wrapper"], ["formArrayName", "photos", 4, "ngFor", "ngForOf"], ["type", "file", "id", "files", "multiple", "", "accept", "image/x-png,image/jpeg,image/webp", 1, "custom-file-input", "form-control", 3, "change"], ["filePicker", ""], ["matInput", "", "type", "text", "formControlName", "title", "placeholder", "Product title"], ["matInput", "", "type", "text", "formControlName", "brand", "placeholder", "Product brand"], ["matInput", "", "type", "text", "formControlName", "model", "placeholder", "Product model"], ["matInput", "", "type", "text", "formControlName", "upc", "placeholder", "Product upc"], ["matInput", "", "mat-autosize", "", "formControlName", "description", "placeholder", "Product description"], [1, "complex-section"], [1, "complex-section-part"], [3, "ngModel", "ngModelOptions", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "example-chip-list"], ["chipList", ""], [3, "removed", 4, "ngFor", "ngForOf"], [3, "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes", "matChipInputTokenEnd"], ["tagInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "mat-raised-button", "", 2, "margin-bottom", "1rem", "background-color", "#4CAF50", "color", "white", 3, "click"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutAlign", "center center", "style", "height: 36px;border:1px solid black;", 4, "ngIf"], ["class", "specification-table", 4, "ngIf"], ["formControlName", "detail", "initialValue", "<p>Initial content of the editor</p>", 3, "init"], ["matInput", "", "type", "number", "formControlName", "salePrice", "placeholder", "Sale price"], ["matInput", "", "type", "text", "formControlName", "location", "placeholder", "Location"], ["matInput", "", "type", "number", "formControlName", "addingAmount", "placeholder", "Amount to add"], ["matInput", "", "type", "number", "formControlName", "costPerUnit", "placeholder", "Cost per unit"], ["mat-raised-button", "", "color", "accent", "type", "submit"], ["formArrayName", "photos"], [3, "formGroupName"], [1, "card-img-top", 2, "height", "155px", "border", "1px solid black", 3, "src", "alt"], [3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "removed"], ["matChipRemove", ""], [3, "value"], ["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutAlign", "center center", 2, "height", "36px", "border", "1px solid black"], [1, "specification-table"], ["mat-button", "", 2, "line-height", "unset", "padding", "0 !important", "min-width", "32px !important", 3, "click"]],
      template: function ProductCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "specific");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductCreateComponent_tr_11_Template, 27, 2, "tr", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ProductCreateComponent_mat_spinner_13_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProductCreateComponent_mat_card_14_Template, 1, 0, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProductCreateComponent_mat_card_15_Template, 1, 0, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ProductCreateComponent_mat_card_16_Template, 2, 1, "mat-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productSpecifications);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formMode == 3 && ctx.providedPS);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.formMode == 1 || 2) && ctx.providedPS);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.formMode || !ctx.providedPS);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatTextareaAutosize"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipList"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocomplete"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_19__["EditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatError"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipRemove"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]],
      styles: ["main[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=file][_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.image-preview[_ngcontent-%COMP%] {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.scrolling-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  height: 200px;\n  border: 1px solid #ccc !important;\n  border-radius: 4px;\n  padding: 4px 8px;\n}\n\n.scrolling-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 2px 1px -1px black, 0 1px 1px 0 black, 0 1px 3px 0 black;\n}\n\n.complex-section[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n.complex-section[_ngcontent-%COMP%]   .complex-section-part[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.complex-section[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n\n.complex-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.specification-table[_ngcontent-%COMP%] {\n  padding: 2px;\n  border: 1px solid black;\n}\n\n.specification-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtY3JlYXRlL3Byb2R1Y3QtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LWNyZWF0ZS9wcm9kdWN0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREdBO0VBQ0Usc0VBQUE7QUNBRjs7QURLQTtFQUlFLGdCQUFBO0FDTEY7O0FET0U7RUFDRSxtQkFBQTtBQ0xKOztBRE9FO0VBQ0UsY0FBQTtBQ0xKOztBRFFFO0VBQ0UsU0FBQTtBQ05KOztBRFVBO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0FDUEY7O0FEVUE7RUFDRSx1QkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1jcmVhdGUvcHJvZHVjdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW5wdXRbdHlwZT0nZmlsZSddIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uaW1hZ2UtcHJldmlldyB7XG4gIGhlaWdodDogNXJlbTtcbiAgbWFyZ2luOiAxcmVtIDA7XG59XG5cbi5pbWFnZS1wcmV2aWV3IGltZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNjcm9sbGluZy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG5cbiAgLmNhcmQge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICB9XG59XG5cbi5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAtMXB4IHJnYmEoMCwwLDAsMSksXG4gICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoMCwwLDAsMSksXG4gICAgICAgICAgICAgIDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsMSk7XG59XG5cbi5jb21wbGV4LXNlY3Rpb24ge1xuICAvL2Rpc3BsYXk6IGZsZXg7XG4gIC8vYWxpZ24tY29udGVudDogY2VudGVyO1xuICAvL2FsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG5cbiAgLmNvbXBsZXgtc2VjdGlvbi1wYXJ0IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB9XG4gIG1hdC1jaGVja2JveCB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cblxuICBoMiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbi5zcGVjaWZpY2F0aW9uLXRhYmxlIHtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnNwZWNpZmljYXRpb24tdGFibGUgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cblxuIiwibWFpbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5pbWFnZS1wcmV2aWV3IHtcbiAgaGVpZ2h0OiA1cmVtO1xuICBtYXJnaW46IDFyZW0gMDtcbn1cblxuLmltYWdlLXByZXZpZXcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2Nyb2xsaW5nLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG4uc2Nyb2xsaW5nLXdyYXBwZXIgLmNhcmQge1xuICBmbGV4OiAwIDAgYXV0bztcbn1cblxuLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcbiAgYm94LXNoYWRvdzogMCAycHggMXB4IC0xcHggYmxhY2ssIDAgMXB4IDFweCAwIGJsYWNrLCAwIDFweCAzcHggMCBibGFjaztcbn1cblxuLmNvbXBsZXgtc2VjdGlvbiB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uY29tcGxleC1zZWN0aW9uIC5jb21wbGV4LXNlY3Rpb24tcGFydCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uY29tcGxleC1zZWN0aW9uIG1hdC1jaGVja2JveCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmNvbXBsZXgtc2VjdGlvbiBoMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwZWNpZmljYXRpb24tdGFibGUge1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uc3BlY2lmaWNhdGlvbi10YWJsZSB0aCwgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProductCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-product-create',
          templateUrl: './product-create.component.html',
          styleUrls: ['./product-create.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]
        }];
      }, {
        tagInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['tagInput']
        }],
        matAutocomplete: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['auto']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/products/product-manage/product-manage.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/products/product-manage/product-manage.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProductManageComponent */

  /***/
  function srcAppProductsProductManageProductManageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductManageComponent", function () {
      return ProductManageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../products.service */
    "./src/app/products/products.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    var _c0 = function _c0(a1) {
      return ["/add-inventory", a1];
    };

    function ProductManageComponent_mat_accordion_4_mat_expansion_panel_1_mat_action_row_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-action-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "RouterLink /add-inventory");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, category_r5.id));
      }
    }

    function ProductManageComponent_mat_accordion_4_mat_expansion_panel_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductManageComponent_mat_accordion_4_mat_expansion_panel_1_mat_action_row_5_Template, 3, 3, "mat-action-row", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var category_r5 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r5.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r5.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.userIsAuthenticated);
      }
    }

    function ProductManageComponent_mat_accordion_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductManageComponent_mat_accordion_4_mat_expansion_panel_1_Template, 6, 3, "mat-expansion-panel", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
      }
    }

    function ProductManageComponent_mat_spinner_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
      }
    }

    function ProductManageComponent_form_8_mat_error_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductManageComponent_form_8_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductManageComponent_form_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProductManageComponent_form_8_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onSaveCategory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductManageComponent_form_8_mat_error_3_Template, 2, 0, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductManageComponent_form_8_mat_error_6_Template, 2, 0, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save Category");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.categoryForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.categoryForm.get("title").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.categoryForm.get("description").invalid);
      }
    }

    function ProductManageComponent_form_10_mat_error_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductManageComponent_form_10_mat_error_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Error message ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProductManageComponent_form_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProductManageComponent_form_10_Template_form_submit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.onSaveSubcategory();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductManageComponent_form_10_mat_error_3_Template, 2, 0, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductManageComponent_form_10_mat_error_6_Template, 2, 0, "mat-error", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save Subcategory");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.subcategoryForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.subcategoryForm.get("title").invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.subcategoryForm.get("description").invalid);
      }
    }

    var ProductManageComponent = /*#__PURE__*/function () {
      function ProductManageComponent(productsService) {
        _classCallCheck(this, ProductManageComponent);

        this.productsService = productsService;
        this.isLoading = false;
        this.userIsAuthenticated = true;
      }

      _createClass(ProductManageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.productsService.getCategories().subscribe(function (docs) {
            _this34.isLoading = false;
            _this34.categories = docs;
          }, function (err) {
            console.log(err);
          });
          this.categoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
          this.subcategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            }),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
          });
        }
      }, {
        key: "onSaveCategory",
        value: function onSaveCategory() {
          var _this35 = this;

          if (this.categoryForm.invalid) {
            return;
          } // logic


          this.productsService.addCategory(this.categoryForm.value.title, this.categoryForm.value.description).subscribe(function (res) {
            _this35.isLoading = false;
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "onSaveSubcategory",
        value: function onSaveSubcategory() {
          var _this36 = this;

          if (this.subcategoryForm.invalid) {
            return;
          }

          this.productsService.addSubcategory(this.subcategoryForm.value.title, this.subcategoryForm.value.description).subscribe(function (res) {
            _this36.isLoading = false;
          }, function (err) {
            return console.log(err);
          });
        }
      }]);

      return ProductManageComponent;
    }();

    ProductManageComponent.ɵfac = function ProductManageComponent_Factory(t) {
      return new (t || ProductManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]));
    };

    ProductManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductManageComponent,
      selectors: [["app-product-manage"]],
      decls: 11,
      vars: 4,
      consts: [["fxLayout", "row", "fxLayoutWrap", "", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between", 1, "container"], ["fxFlex", "40"], ["multi", "true", 4, "ngIf"], ["fxFlex", "60"], [4, "ngIf"], [3, "formGroup", "submit", 4, "ngIf"], ["multi", "true"], [4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", 3, "routerLink"], [3, "formGroup", "submit"], ["matInput", "", "type", "text", "formControlName", "title", "placeholder", "Category title"], ["matInput", "", "mat-autosize", "", "formControlName", "description", "placeholder", "Category description"], ["mat-raised-button", "", "color", "warn", "type", "submit"], ["matInput", "", "type", "text", "formControlName", "title", "placeholder", "Subcategory title"], ["matInput", "", "mat-autosize", "", "formControlName", "description", "placeholder", "Subcategory description"]],
      template: function ProductManageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductManageComponent_mat_accordion_4_Template, 2, 1, "mat-accordion", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductManageComponent_mat_spinner_6_Template, 1, 0, "mat-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductManageComponent_form_8_Template, 9, 3, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductManageComponent_form_10_Template, 9, 3, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.categories && ctx.categories.length > 0 && !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatTextareaAutosize"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"]],
      styles: ["main[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vcmlnYW1pbmgvcmVhbHRpbWUtc2hvcC9yZWFsdGltZS1zaG9wLWFwcC9zcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3QtbWFuYWdlL3Byb2R1Y3QtbWFuYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0LW1hbmFnZS9wcm9kdWN0LW1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdC1tYW5hZ2UvcHJvZHVjdC1tYW5hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxubWF0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwibWFpbiB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbm1hdC1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-manage',
          templateUrl: './product-manage.component.html',
          styleUrls: ['./product-manage.component.scss']
        }]
      }], function () {
        return [{
          type: _products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/products/products.service.ts ***!
    \**********************************************/

  /*! exports provided: ProductsService */

  /***/
  function srcAppProductsProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsService", function () {
      return ProductsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _env_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../env.service */
    "./src/app/env.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductsService = /*#__PURE__*/function () {
      function ProductsService(envService, authService, http) {
        _classCallCheck(this, ProductsService);

        this.envService = envService;
        this.authService = authService;
        this.http = http;
      }

      _createClass(ProductsService, [{
        key: "syncProducts",
        value: function syncProducts() {
          var _this37 = this;

          // Check whether postsSocket is already initiated, if not: open new socket
          if (!this.productsSocket) {
            this.productsSocket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/ProductsCollection');
          }

          this.productsSocket.on('data', function (res) {
            _this37.observer.next(res.data);
          });
          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this37.observer = observer;
          });
        }
      }, {
        key: "getProductTags",
        value: function getProductTags(filterText) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/product-tags' + (filterText ? '?filter-text=' + filterText : '')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (ptData) {
            return ptData.productTags.map(function (pt) {
              pt.id = pt._id;
              return pt;
            });
          }));
        }
      }, {
        key: "getProductSupports",
        value: function getProductSupports() {
          //console.log(process.env)
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/product-supports').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (psData) {
            return psData.productSupports;
          }));
        }
      }, {
        key: "getProductSpecificationById",
        value: function getProductSpecificationById(psId) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/product-specifications/' + psId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (psData) {
            psData.id = psData._id;
            return psData;
          }));
        }
      }, {
        key: "getProductSpecifications",
        value: function getProductSpecifications() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/product-specifications').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (psData) {
            return psData.productSpecifications.map(function (ps) {
              ps.id = ps._id;
              return ps;
            });
          }));
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (productData) {
            return {
              productCount: productData.productCount,
              products: productData.products.map(function (product) {
                product.id = product._id;
                return product;
              })
            };
          }));
        }
      }, {
        key: "addProduct",
        value: function addProduct(newProduct) {
          var productData = new FormData();
          var propertiesThatNeedStringify = ['support', 'specification', 'tags'];

          for (var key in newProduct) {
            if (key !== 'photos') {
              if (propertiesThatNeedStringify.indexOf(key) !== -1) {
                productData.append(key, JSON.stringify(newProduct[key]));
              } else {
                productData.append(key, newProduct[key]);
              }
            }
          }

          var _iterator = _createForOfIteratorHelper(newProduct.photos),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var file = _step.value;
              productData.append('photos', file.file, file.name);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products', productData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (responseData) {
            return "something cool";
          }));
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(productId) {
          var _this38 = this;

          return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/produts/' + productId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.error && err.error.needLogout) {
              console.log(err);

              _this38.authService.logoutUser(true).subscribe(function (res) {
                console.log(res);
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "getProduct",
        value: function getProduct(id) {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (productData) {
            productData.id = productData._id;
            return productData;
          }));
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(id, title, description, brand, model, upc, detail, support) {
          var _this39 = this;

          var productData = new FormData();
          productData.append('title', title);
          productData.append('description', description);
          productData.append('brand', brand);
          productData.append('model', model);
          productData.append('upc', upc);
          productData.append('detail', detail);
          productData.append('support', JSON.stringify(support));
          return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/' + id, productData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.error && err.error.needLogout) {
              console.log(err);

              _this39.authService.logoutUser(true).subscribe(function (res) {
                console.log(res);
              });
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            return data;
          }));
        }
      }, {
        key: "addCategory",
        value: function addCategory(title, description) {
          var categoryData = new FormData();
          categoryData.append('title', title);
          categoryData.append('description', description);
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/categories', categoryData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (responseData) {
            return responseData;
          }));
        }
      }, {
        key: "addSubcategory",
        value: function addSubcategory(title, description) {
          var subcategoryData = new FormData();
          subcategoryData.append('title', title);
          subcategoryData.append('description', description);
          return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/subcategories', subcategoryData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (responseData) {
            return responseData;
          }));
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/categories').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (categoriesData) {
            return categoriesData.categories.map(function (category) {
              category.id = category._id;
              return category;
            });
          }));
        }
      }, {
        key: "getSubcategories",
        value: function getSubcategories() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/api/products/subcategories').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (subcategoriesData) {
            return subcategoriesData.subcategories.map(function (subcategory) {
              subcategory.id = subcategory._id;
              return subcategory;
            });
          }));
        }
      }]);

      return ProductsService;
    }();

    ProductsService.ɵfac = function ProductsService_Factory(t) {
      return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]));
    };

    ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductsService,
      factory: ProductsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _env_service__WEBPACK_IMPORTED_MODULE_5__["EnvService"]
        }, {
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      apiBaseUrl: 'http://localhost:3000',
      apiUrl: 'undefined',
      appName: 'undefined',
      awsPubKey: 'undefined',
      nodeEnv: 'undefined',
      production: 'undefined'
    };
    /***/
  },

  /***/
  "./src/global.ts":
  /*!***********************!*\
    !*** ./src/global.ts ***!
    \***********************/

  /*! no static exports found */

  /***/
  function srcGlobalTs(module, exports) {
    Date.prototype.toIsoString = function () {
      var tzo = -this.getTimezoneOffset(),
          dif = tzo >= 0 ? '+' : '-',
          pad = function pad(num) {
        var norm = Math.floor(Math.abs(num));
        return (norm < 10 ? '0' : '') + norm;
      };

      return this.getFullYear() + '-' + pad(this.getMonth() + 1) + '-' + pad(this.getDate()) + 'T' + pad(this.getHours()) + ':' + pad(this.getMinutes()) + ':' + pad(this.getSeconds()) + dif + pad(tzo / 60) + ':' + pad(tzo % 60);
    };
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/origaminh/realtime-shop/realtime-shop-app/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map