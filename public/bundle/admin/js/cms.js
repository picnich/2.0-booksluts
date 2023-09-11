(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/object-assign/index.js
  var require_object_assign = __commonJS({
    "node_modules/object-assign/index.js"(exports, module) {
      "use strict";
      var getOwnPropertySymbols = Object.getOwnPropertySymbols;
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var propIsEnumerable = Object.prototype.propertyIsEnumerable;
      function toObject(val) {
        if (val === null || val === void 0) {
          throw new TypeError("Object.assign cannot be called with null or undefined");
        }
        return Object(val);
      }
      function shouldUseNative() {
        try {
          if (!Object.assign) {
            return false;
          }
          var test1 = new String("abc");
          test1[5] = "de";
          if (Object.getOwnPropertyNames(test1)[0] === "5") {
            return false;
          }
          var test2 = {};
          for (var i = 0; i < 10; i++) {
            test2["_" + String.fromCharCode(i)] = i;
          }
          var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
          });
          if (order2.join("") !== "0123456789") {
            return false;
          }
          var test3 = {};
          "abcdefghijklmnopqrst".split("").forEach(function(letter) {
            test3[letter] = letter;
          });
          if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
            return false;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      module.exports = shouldUseNative() ? Object.assign : function(target, source) {
        var from;
        var to = toObject(target);
        var symbols;
        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);
          for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
              to[key] = from[key];
            }
          }
          if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }
        return to;
      };
    }
  });

  // node_modules/prop-types/lib/ReactPropTypesSecret.js
  var require_ReactPropTypesSecret = __commonJS({
    "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
      "use strict";
      var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      module.exports = ReactPropTypesSecret;
    }
  });

  // node_modules/prop-types/lib/has.js
  var require_has = __commonJS({
    "node_modules/prop-types/lib/has.js"(exports, module) {
      module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
    }
  });

  // node_modules/prop-types/checkPropTypes.js
  var require_checkPropTypes = __commonJS({
    "node_modules/prop-types/checkPropTypes.js"(exports, module) {
      "use strict";
      var printWarning = function() {
      };
      if (true) {
        ReactPropTypesSecret = require_ReactPropTypesSecret();
        loggedTypeFailures = {};
        has = require_has();
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      var ReactPropTypesSecret;
      var loggedTypeFailures;
      var has;
      function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
        if (true) {
          for (var typeSpecName in typeSpecs) {
            if (has(typeSpecs, typeSpecName)) {
              var error;
              try {
                if (typeof typeSpecs[typeSpecName] !== "function") {
                  var err = Error(
                    (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                  );
                  err.name = "Invariant Violation";
                  throw err;
                }
                error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
              } catch (ex) {
                error = ex;
              }
              if (error && !(error instanceof Error)) {
                printWarning(
                  (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
                );
              }
              if (error instanceof Error && !(error.message in loggedTypeFailures)) {
                loggedTypeFailures[error.message] = true;
                var stack = getStack ? getStack() : "";
                printWarning(
                  "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
                );
              }
            }
          }
        }
      }
      checkPropTypes.resetWarningCache = function() {
        if (true) {
          loggedTypeFailures = {};
        }
      };
      module.exports = checkPropTypes;
    }
  });

  // node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var _assign = require_object_assign();
          var checkPropTypes = require_checkPropTypes();
          var ReactVersion = "16.14.0";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = "@@iterator";
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== "object") {
              return null;
            }
            var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === "function") {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var ReactCurrentBatchConfig = {
            suspense: null
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null
          };
          var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
          function describeComponentFrame(name, source, ownerName) {
            var sourceInfo = "";
            if (source) {
              var path = source.fileName;
              var fileName = path.replace(BEFORE_SLASH_RE, "");
              {
                if (/^index\./.test(fileName)) {
                  var match = path.match(BEFORE_SLASH_RE);
                  if (match) {
                    var pathBeforeSlash = match[1];
                    if (pathBeforeSlash) {
                      var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                      fileName = folderName + "/" + fileName;
                    }
                  }
                }
              }
              sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
            } else if (ownerName) {
              sourceInfo = " (created by " + ownerName + ")";
            }
            return "\n    in " + (name || "Unknown") + sourceInfo;
          }
          var Resolved = 1;
          function refineResolvedLazyComponent(lazyComponent) {
            return lazyComponent._status === Resolved ? lazyComponent._result : null;
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var functionName = innerType.displayName || innerType.name || "";
            return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
          }
          function getComponentName(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === "number") {
                error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
              }
            }
            if (typeof type === "function") {
              return type.displayName || type.name || null;
            }
            if (typeof type === "string") {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return "Fragment";
              case REACT_PORTAL_TYPE:
                return "Portal";
              case REACT_PROFILER_TYPE:
                return "Profiler";
              case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
              case REACT_SUSPENSE_TYPE:
                return "Suspense";
              case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            }
            if (typeof type === "object") {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  return "Context.Consumer";
                case REACT_PROVIDER_TYPE:
                  return "Context.Provider";
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, "ForwardRef");
                case REACT_MEMO_TYPE:
                  return getComponentName(type.type);
                case REACT_BLOCK_TYPE:
                  return getComponentName(type.render);
                case REACT_LAZY_TYPE: {
                  var thenable = type;
                  var resolvedThenable = refineResolvedLazyComponent(thenable);
                  if (resolvedThenable) {
                    return getComponentName(resolvedThenable);
                  }
                  break;
                }
              }
            }
            return null;
          }
          var ReactDebugCurrentFrame = {};
          var currentlyValidatingElement = null;
          function setCurrentlyValidatingElement(element) {
            {
              currentlyValidatingElement = element;
            }
          }
          {
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function() {
              var stack = "";
              if (currentlyValidatingElement) {
                var name = getComponentName(currentlyValidatingElement.type);
                var owner = currentlyValidatingElement._owner;
                stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || "";
              }
              return stack;
            };
          }
          var IsSomeRendererActing = {
            current: false
          };
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner,
            IsSomeRendererActing,
            // Used by renderers to avoid bundling object-assign twice in UMD bundles:
            assign: _assign
          };
          {
            _assign(ReactSharedInternals, {
              // These should not be included in production.
              ReactDebugCurrentFrame,
              // Shim for React DOM 16.0.0 which still destructured (but not used) this.
              // TODO: remove in React 17.0.
              ReactComponentTreeHook: {}
            });
          }
          function warn(format) {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
          function error(format) {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
          function printWarning(level, format, args) {
            {
              var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === "string" && args[args.length - 1].indexOf("\n    in") === 0;
              if (!hasExistingStack) {
                var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame2.getStackAddendum();
                if (stack !== "") {
                  format += "%s";
                  args = args.concat([stack]);
                }
              }
              var argsWithFormat = args.map(function(item) {
                return "" + item;
              });
              argsWithFormat.unshift("Warning: " + format);
              Function.prototype.apply.call(console[level], console, argsWithFormat);
              try {
                var argIndex = 0;
                var message = "Warning: " + format.replace(/%s/g, function() {
                  return args[argIndex++];
                });
                throw new Error(message);
              } catch (x) {
              }
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
              var warningKey = componentName + "." + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function(publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function(publicInstance, callback, callerName) {
              warnNoop(publicInstance, "forceUpdate");
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
              warnNoop(publicInstance, "replaceState");
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function(publicInstance, partialState, callback, callerName) {
              warnNoop(publicInstance, "setState");
            }
          };
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function(partialState, callback) {
            if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
              {
                throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
              }
            }
            this.updater.enqueueSetState(this, partialState, callback, "setState");
          };
          Component.prototype.forceUpdate = function(callback) {
            this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
          };
          {
            var deprecatedAPIs = {
              isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
              replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
            };
            var defineDeprecationWarning = function(methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function() {
                  warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                  return void 0;
                }
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {
          }
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
          pureComponentPrototype.constructor = PureComponent;
          _assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true
          };
          var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, "ref")) {
                var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, "key")) {
                var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function() {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function() {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                var componentName = getComponentName(ReactCurrentOwner.current.type);
                if (!didWarnAboutStringRefs[componentName]) {
                  error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function(type, key, ref, self2, source, owner, props) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner
            };
            {
              element._store = {};
              Object.defineProperty(element._store, "validated", {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false
              });
              Object.defineProperty(element, "_self", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2
              });
              Object.defineProperty(element, "_source", {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (!!(element === null || element === void 0)) {
              {
                throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
              }
            }
            var propName;
            var props = _assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                key = "" + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(element.type, key, ref, self2, source, owner, props);
          }
          function isValidElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          var SEPARATOR = ".";
          var SUBSEPARATOR = ":";
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              "=": "=0",
              ":": "=2"
            };
            var escapedString = ("" + key).replace(escapeRegex, function(match) {
              return escaperLookup[match];
            });
            return "$" + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
          }
          var POOL_SIZE = 10;
          var traverseContextPool = [];
          function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
            if (traverseContextPool.length) {
              var traverseContext = traverseContextPool.pop();
              traverseContext.result = mapResult;
              traverseContext.keyPrefix = keyPrefix;
              traverseContext.func = mapFunction;
              traverseContext.context = mapContext;
              traverseContext.count = 0;
              return traverseContext;
            } else {
              return {
                result: mapResult,
                keyPrefix,
                func: mapFunction,
                context: mapContext,
                count: 0
              };
            }
          }
          function releaseTraverseContext(traverseContext) {
            traverseContext.result = null;
            traverseContext.keyPrefix = null;
            traverseContext.func = null;
            traverseContext.context = null;
            traverseContext.count = 0;
            if (traverseContextPool.length < POOL_SIZE) {
              traverseContextPool.push(traverseContext);
            }
          }
          function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
            var type = typeof children;
            if (type === "undefined" || type === "boolean") {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case "string":
                case "number":
                  invokeCallback = true;
                  break;
                case "object":
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              callback(
                traverseContext,
                children,
                // If it's the only child, treat the name as if it was wrapped in an array
                // so that it's consistent if the number of children grows.
                nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
              );
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (Array.isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getComponentKey(child, i);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === "function") {
                {
                  if (iteratorFn === children.entries) {
                    if (!didWarnAboutMaps) {
                      warn("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.");
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(children);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getComponentKey(child, ii++);
                  subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
                }
              } else if (type === "object") {
                var addendum = "";
                {
                  addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
                }
                var childrenString = "" + children;
                {
                  {
                    throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + ")." + addendum);
                  }
                }
              }
            }
            return subtreeCount;
          }
          function traverseAllChildren(children, callback, traverseContext) {
            if (children == null) {
              return 0;
            }
            return traverseAllChildrenImpl(children, "", callback, traverseContext);
          }
          function getComponentKey(component, index) {
            if (typeof component === "object" && component !== null && component.key != null) {
              return escape(component.key);
            }
            return index.toString(36);
          }
          function forEachSingleChild(bookKeeping, child, name) {
            var func = bookKeeping.func, context = bookKeeping.context;
            func.call(context, child, bookKeeping.count++);
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            if (children == null) {
              return children;
            }
            var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
            traverseAllChildren(children, forEachSingleChild, traverseContext);
            releaseTraverseContext(traverseContext);
          }
          function mapSingleChildIntoContext(bookKeeping, child, childKey) {
            var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
            var mappedChild = func.call(context, child, bookKeeping.count++);
            if (Array.isArray(mappedChild)) {
              mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/" : "") + childKey
                );
              }
              result.push(mappedChild);
            }
          }
          function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
            var escapedPrefix = "";
            if (prefix != null) {
              escapedPrefix = escapeUserProvidedKey(prefix) + "/";
            }
            var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
            traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
            releaseTraverseContext(traverseContext);
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            mapIntoWithKeyPrefixInternal(children, result, null, func, context);
            return result;
          }
          function countChildren(children) {
            return traverseAllChildren(children, function() {
              return null;
            }, null);
          }
          function toArray(children) {
            var result = [];
            mapIntoWithKeyPrefixInternal(children, result, null, function(child) {
              return child;
            });
            return result;
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              {
                throw Error("React.Children.only expected to receive a single React element child.");
              }
            }
            return children;
          }
          function createContext(defaultValue, calculateChangedBits) {
            if (calculateChangedBits === void 0) {
              calculateChangedBits = null;
            } else {
              {
                if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                  error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
                }
              }
            }
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              _calculateChangedBits: calculateChangedBits,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
                _calculateChangedBits: context._calculateChangedBits
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                  },
                  set: function(_Provider) {
                    context.Provider = _Provider;
                  }
                },
                _currentValue: {
                  get: function() {
                    return context._currentValue;
                  },
                  set: function(_currentValue) {
                    context._currentValue = _currentValue;
                  }
                },
                _currentValue2: {
                  get: function() {
                    return context._currentValue2;
                  },
                  set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  }
                },
                _threadCount: {
                  get: function() {
                    return context._threadCount;
                  },
                  set: function(_threadCount) {
                    context._threadCount = _threadCount;
                  }
                },
                Consumer: {
                  get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                  }
                }
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          function lazy(ctor) {
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _ctor: ctor,
              // React uses these fields to store the result.
              _status: -1,
              _result: null
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function() {
                    return defaultProps;
                  },
                  set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, "defaultProps", {
                      enumerable: true
                    });
                  }
                },
                propTypes: {
                  configurable: true,
                  get: function() {
                    return propTypes;
                  },
                  set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, "propTypes", {
                      enumerable: true
                    });
                  }
                }
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
              } else if (typeof render !== "function") {
                error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                }
              }
            }
            return {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render
            };
          }
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
              }
            }
            return {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare
            };
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            if (!(dispatcher !== null)) {
              {
                throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
              }
            }
            return dispatcher;
          }
          function useContext(Context, unstable_observedBits) {
            var dispatcher = resolveDispatcher();
            {
              if (unstable_observedBits !== void 0) {
                error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : "");
              }
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                } else if (realContext.Provider === Context) {
                  error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                }
              }
            }
            return dispatcher.useContext(Context, unstable_observedBits);
          }
          function useState(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentName(ReactCurrentOwner.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return "";
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement(element);
            {
              error('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
            }
            setCurrentlyValidatingElement(null);
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== "object") {
              return;
            }
            if (Array.isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (type === null || type === void 0 || typeof type === "string") {
                return;
              }
              var name = getComponentName(type);
              var propTypes;
              if (typeof type === "function") {
                propTypes = type.propTypes;
              } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
              // Inner props are checked in the reconciler.
              type.$$typeof === REACT_MEMO_TYPE)) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                setCurrentlyValidatingElement(element);
                checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
                setCurrentlyValidatingElement(null);
              } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                propTypesMisspellWarningShown = true;
                error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown");
              }
              if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              setCurrentlyValidatingElement(fragment);
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== "children" && key !== "key") {
                  error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                  break;
                }
              }
              if (fragment.ref !== null) {
                error("Invalid attribute `ref` supplied to `React.Fragment`.");
              }
              setCurrentlyValidatingElement(null);
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (Array.isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              {
                error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
              }
              Object.defineProperty(validatedFactory, "type", {
                enumerable: false,
                get: function() {
                  warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                  Object.defineProperty(this, "type", {
                    value: type
                  });
                  return type;
                }
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          {
            try {
              var frozenObject = Object.freeze({});
              var testMap = /* @__PURE__ */ new Map([[frozenObject, null]]);
              var testSet = /* @__PURE__ */ new Set([frozenObject]);
              testMap.set(0, 0);
              testSet.add(0);
            } catch (e) {
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useEffect = useEffect;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState;
          exports.version = ReactVersion;
        })();
      }
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    }
  });

  // node_modules/react-is/cjs/react-is.development.js
  var require_react_is_development = __commonJS({
    "node_modules/react-is/cjs/react-is.development.js"(exports) {
      "use strict";
      if (true) {
        (function() {
          "use strict";
          var hasSymbol = typeof Symbol === "function" && Symbol.for;
          var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
          var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
          var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
          var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
          var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
          var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
          var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
          var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
          var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
          var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
          var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
          var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
          var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
          var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
          var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
          var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
          var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
          var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
          function isValidElementType(type) {
            return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
            type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
          }
          function typeOf(object) {
            if (typeof object === "object" && object !== null) {
              var $$typeof = object.$$typeof;
              switch ($$typeof) {
                case REACT_ELEMENT_TYPE:
                  var type = object.type;
                  switch (type) {
                    case REACT_ASYNC_MODE_TYPE:
                    case REACT_CONCURRENT_MODE_TYPE:
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                      return type;
                    default:
                      var $$typeofType = type && type.$$typeof;
                      switch ($$typeofType) {
                        case REACT_CONTEXT_TYPE:
                        case REACT_FORWARD_REF_TYPE:
                        case REACT_LAZY_TYPE:
                        case REACT_MEMO_TYPE:
                        case REACT_PROVIDER_TYPE:
                          return $$typeofType;
                        default:
                          return $$typeof;
                      }
                  }
                case REACT_PORTAL_TYPE:
                  return $$typeof;
              }
            }
            return void 0;
          }
          var AsyncMode = REACT_ASYNC_MODE_TYPE;
          var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
          var ContextConsumer = REACT_CONTEXT_TYPE;
          var ContextProvider = REACT_PROVIDER_TYPE;
          var Element = REACT_ELEMENT_TYPE;
          var ForwardRef = REACT_FORWARD_REF_TYPE;
          var Fragment = REACT_FRAGMENT_TYPE;
          var Lazy = REACT_LAZY_TYPE;
          var Memo = REACT_MEMO_TYPE;
          var Portal = REACT_PORTAL_TYPE;
          var Profiler = REACT_PROFILER_TYPE;
          var StrictMode = REACT_STRICT_MODE_TYPE;
          var Suspense = REACT_SUSPENSE_TYPE;
          var hasWarnedAboutDeprecatedIsAsyncMode = false;
          function isAsyncMode(object) {
            {
              if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                hasWarnedAboutDeprecatedIsAsyncMode = true;
                console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
              }
            }
            return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
          }
          function isConcurrentMode(object) {
            return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
          }
          function isContextConsumer(object) {
            return typeOf(object) === REACT_CONTEXT_TYPE;
          }
          function isContextProvider(object) {
            return typeOf(object) === REACT_PROVIDER_TYPE;
          }
          function isElement(object) {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
          function isForwardRef(object) {
            return typeOf(object) === REACT_FORWARD_REF_TYPE;
          }
          function isFragment(object) {
            return typeOf(object) === REACT_FRAGMENT_TYPE;
          }
          function isLazy(object) {
            return typeOf(object) === REACT_LAZY_TYPE;
          }
          function isMemo(object) {
            return typeOf(object) === REACT_MEMO_TYPE;
          }
          function isPortal(object) {
            return typeOf(object) === REACT_PORTAL_TYPE;
          }
          function isProfiler(object) {
            return typeOf(object) === REACT_PROFILER_TYPE;
          }
          function isStrictMode(object) {
            return typeOf(object) === REACT_STRICT_MODE_TYPE;
          }
          function isSuspense(object) {
            return typeOf(object) === REACT_SUSPENSE_TYPE;
          }
          exports.AsyncMode = AsyncMode;
          exports.ConcurrentMode = ConcurrentMode;
          exports.ContextConsumer = ContextConsumer;
          exports.ContextProvider = ContextProvider;
          exports.Element = Element;
          exports.ForwardRef = ForwardRef;
          exports.Fragment = Fragment;
          exports.Lazy = Lazy;
          exports.Memo = Memo;
          exports.Portal = Portal;
          exports.Profiler = Profiler;
          exports.StrictMode = StrictMode;
          exports.Suspense = Suspense;
          exports.isAsyncMode = isAsyncMode;
          exports.isConcurrentMode = isConcurrentMode;
          exports.isContextConsumer = isContextConsumer;
          exports.isContextProvider = isContextProvider;
          exports.isElement = isElement;
          exports.isForwardRef = isForwardRef;
          exports.isFragment = isFragment;
          exports.isLazy = isLazy;
          exports.isMemo = isMemo;
          exports.isPortal = isPortal;
          exports.isProfiler = isProfiler;
          exports.isStrictMode = isStrictMode;
          exports.isSuspense = isSuspense;
          exports.isValidElementType = isValidElementType;
          exports.typeOf = typeOf;
        })();
      }
    }
  });

  // node_modules/react-is/index.js
  var require_react_is = __commonJS({
    "node_modules/react-is/index.js"(exports, module) {
      "use strict";
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_is_development();
      }
    }
  });

  // node_modules/prop-types/factoryWithTypeCheckers.js
  var require_factoryWithTypeCheckers = __commonJS({
    "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
      "use strict";
      var ReactIs = require_react_is();
      var assign = require_object_assign();
      var ReactPropTypesSecret = require_ReactPropTypesSecret();
      var has = require_has();
      var checkPropTypes = require_checkPropTypes();
      var printWarning = function() {
      };
      if (true) {
        printWarning = function(text) {
          var message = "Warning: " + text;
          if (typeof console !== "undefined") {
            console.error(message);
          }
          try {
            throw new Error(message);
          } catch (x) {
          }
        };
      }
      function emptyFunctionThatReturnsNull() {
        return null;
      }
      module.exports = function(isValidElement, throwOnDirectAccess) {
        var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
          if (typeof iteratorFn === "function") {
            return iteratorFn;
          }
        }
        var ANONYMOUS = "<<anonymous>>";
        var ReactPropTypes = {
          array: createPrimitiveTypeChecker("array"),
          bigint: createPrimitiveTypeChecker("bigint"),
          bool: createPrimitiveTypeChecker("boolean"),
          func: createPrimitiveTypeChecker("function"),
          number: createPrimitiveTypeChecker("number"),
          object: createPrimitiveTypeChecker("object"),
          string: createPrimitiveTypeChecker("string"),
          symbol: createPrimitiveTypeChecker("symbol"),
          any: createAnyTypeChecker(),
          arrayOf: createArrayOfTypeChecker,
          element: createElementTypeChecker(),
          elementType: createElementTypeTypeChecker(),
          instanceOf: createInstanceTypeChecker,
          node: createNodeChecker(),
          objectOf: createObjectOfTypeChecker,
          oneOf: createEnumTypeChecker,
          oneOfType: createUnionTypeChecker,
          shape: createShapeTypeChecker,
          exact: createStrictShapeTypeChecker
        };
        function is(x, y) {
          if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
          } else {
            return x !== x && y !== y;
          }
        }
        function PropTypeError(message, data) {
          this.message = message;
          this.data = data && typeof data === "object" ? data : {};
          this.stack = "";
        }
        PropTypeError.prototype = Error.prototype;
        function createChainableTypeChecker(validate) {
          if (true) {
            var manualPropTypeCallCache = {};
            var manualPropTypeWarningCount = 0;
          }
          function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
            componentName = componentName || ANONYMOUS;
            propFullName = propFullName || propName;
            if (secret !== ReactPropTypesSecret) {
              if (throwOnDirectAccess) {
                var err = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                );
                err.name = "Invariant Violation";
                throw err;
              } else if (typeof console !== "undefined") {
                var cacheKey = componentName + ":" + propName;
                if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
                manualPropTypeWarningCount < 3) {
                  printWarning(
                    "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                  );
                  manualPropTypeCallCache[cacheKey] = true;
                  manualPropTypeWarningCount++;
                }
              }
            }
            if (props[propName] == null) {
              if (isRequired) {
                if (props[propName] === null) {
                  return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
                }
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
              }
              return null;
            } else {
              return validate(props, propName, componentName, location, propFullName);
            }
          }
          var chainedCheckType = checkType.bind(null, false);
          chainedCheckType.isRequired = checkType.bind(null, true);
          return chainedCheckType;
        }
        function createPrimitiveTypeChecker(expectedType) {
          function validate(props, propName, componentName, location, propFullName, secret) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== expectedType) {
              var preciseType = getPreciseType(propValue);
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
                { expectedType }
              );
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createAnyTypeChecker() {
          return createChainableTypeChecker(emptyFunctionThatReturnsNull);
        }
        function createArrayOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
            }
            var propValue = props[propName];
            if (!Array.isArray(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
            }
            for (var i = 0; i < propValue.length; i++) {
              var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!isValidElement(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createElementTypeTypeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            if (!ReactIs.isValidElementType(propValue)) {
              var propType = getPropType(propValue);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createInstanceTypeChecker(expectedClass) {
          function validate(props, propName, componentName, location, propFullName) {
            if (!(props[propName] instanceof expectedClass)) {
              var expectedClassName = expectedClass.name || ANONYMOUS;
              var actualClassName = getClassName(props[propName]);
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createEnumTypeChecker(expectedValues) {
          if (!Array.isArray(expectedValues)) {
            if (true) {
              if (arguments.length > 1) {
                printWarning(
                  "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
                );
              } else {
                printWarning("Invalid argument supplied to oneOf, expected an array.");
              }
            }
            return emptyFunctionThatReturnsNull;
          }
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            for (var i = 0; i < expectedValues.length; i++) {
              if (is(propValue, expectedValues[i])) {
                return null;
              }
            }
            var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
              var type = getPreciseType(value);
              if (type === "symbol") {
                return String(value);
              }
              return value;
            });
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createObjectOfTypeChecker(typeChecker) {
          function validate(props, propName, componentName, location, propFullName) {
            if (typeof typeChecker !== "function") {
              return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
            }
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
            }
            for (var key in propValue) {
              if (has(propValue, key)) {
                var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
                if (error instanceof Error) {
                  return error;
                }
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createUnionTypeChecker(arrayOfTypeCheckers) {
          if (!Array.isArray(arrayOfTypeCheckers)) {
            true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
            return emptyFunctionThatReturnsNull;
          }
          for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
            var checker = arrayOfTypeCheckers[i];
            if (typeof checker !== "function") {
              printWarning(
                "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
              );
              return emptyFunctionThatReturnsNull;
            }
          }
          function validate(props, propName, componentName, location, propFullName) {
            var expectedTypes = [];
            for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
              var checker2 = arrayOfTypeCheckers[i2];
              var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
              if (checkerResult == null) {
                return null;
              }
              if (checkerResult.data && has(checkerResult.data, "expectedType")) {
                expectedTypes.push(checkerResult.data.expectedType);
              }
            }
            var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
          }
          return createChainableTypeChecker(validate);
        }
        function createNodeChecker() {
          function validate(props, propName, componentName, location, propFullName) {
            if (!isNode(props[propName])) {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function invalidValidatorError(componentName, location, propFullName, key, type) {
          return new PropTypeError(
            (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
          );
        }
        function createShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            for (var key in shapeTypes) {
              var checker = shapeTypes[key];
              if (typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function createStrictShapeTypeChecker(shapeTypes) {
          function validate(props, propName, componentName, location, propFullName) {
            var propValue = props[propName];
            var propType = getPropType(propValue);
            if (propType !== "object") {
              return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
            }
            var allKeys = assign({}, props[propName], shapeTypes);
            for (var key in allKeys) {
              var checker = shapeTypes[key];
              if (has(shapeTypes, key) && typeof checker !== "function") {
                return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
              }
              if (!checker) {
                return new PropTypeError(
                  "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
                );
              }
              var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error) {
                return error;
              }
            }
            return null;
          }
          return createChainableTypeChecker(validate);
        }
        function isNode(propValue) {
          switch (typeof propValue) {
            case "number":
            case "string":
            case "undefined":
              return true;
            case "boolean":
              return !propValue;
            case "object":
              if (Array.isArray(propValue)) {
                return propValue.every(isNode);
              }
              if (propValue === null || isValidElement(propValue)) {
                return true;
              }
              var iteratorFn = getIteratorFn(propValue);
              if (iteratorFn) {
                var iterator = iteratorFn.call(propValue);
                var step;
                if (iteratorFn !== propValue.entries) {
                  while (!(step = iterator.next()).done) {
                    if (!isNode(step.value)) {
                      return false;
                    }
                  }
                } else {
                  while (!(step = iterator.next()).done) {
                    var entry = step.value;
                    if (entry) {
                      if (!isNode(entry[1])) {
                        return false;
                      }
                    }
                  }
                }
              } else {
                return false;
              }
              return true;
            default:
              return false;
          }
        }
        function isSymbol(propType, propValue) {
          if (propType === "symbol") {
            return true;
          }
          if (!propValue) {
            return false;
          }
          if (propValue["@@toStringTag"] === "Symbol") {
            return true;
          }
          if (typeof Symbol === "function" && propValue instanceof Symbol) {
            return true;
          }
          return false;
        }
        function getPropType(propValue) {
          var propType = typeof propValue;
          if (Array.isArray(propValue)) {
            return "array";
          }
          if (propValue instanceof RegExp) {
            return "object";
          }
          if (isSymbol(propType, propValue)) {
            return "symbol";
          }
          return propType;
        }
        function getPreciseType(propValue) {
          if (typeof propValue === "undefined" || propValue === null) {
            return "" + propValue;
          }
          var propType = getPropType(propValue);
          if (propType === "object") {
            if (propValue instanceof Date) {
              return "date";
            } else if (propValue instanceof RegExp) {
              return "regexp";
            }
          }
          return propType;
        }
        function getPostfixForTypeWarning(value) {
          var type = getPreciseType(value);
          switch (type) {
            case "array":
            case "object":
              return "an " + type;
            case "boolean":
            case "date":
            case "regexp":
              return "a " + type;
            default:
              return type;
          }
        }
        function getClassName(propValue) {
          if (!propValue.constructor || !propValue.constructor.name) {
            return ANONYMOUS;
          }
          return propValue.constructor.name;
        }
        ReactPropTypes.checkPropTypes = checkPropTypes;
        ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
        ReactPropTypes.PropTypes = ReactPropTypes;
        return ReactPropTypes;
      };
    }
  });

  // node_modules/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/prop-types/index.js"(exports, module) {
      if (true) {
        ReactIs = require_react_is();
        throwOnDirectAccess = true;
        module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
      } else {
        module.exports = null();
      }
      var ReactIs;
      var throwOnDirectAccess;
    }
  });

  // node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // node_modules/lodash/_root.js
  var require_root = __commonJS({
    "node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "node_modules/lodash/isArray.js"(exports, module) {
      var isArray = Array.isArray;
      module.exports = isArray;
    }
  });

  // node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // node_modules/lodash/isString.js
  var require_isString = __commonJS({
    "node_modules/lodash/isString.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isArray = require_isArray();
      var isObjectLike = require_isObjectLike();
      var stringTag = "[object String]";
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      module.exports = isString;
    }
  });

  // node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "node_modules/lodash/isObject.js"(exports, module) {
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      module.exports = isObject;
    }
  });

  // node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // node_modules/lodash/_baseForOwn.js
  var require_baseForOwn = __commonJS({
    "node_modules/lodash/_baseForOwn.js"(exports, module) {
      var baseFor = require_baseFor();
      var keys = require_keys();
      function baseForOwn(object, iteratee) {
        return object && baseFor(object, iteratee, keys);
      }
      module.exports = baseForOwn;
    }
  });

  // node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "node_modules/lodash/identity.js"(exports, module) {
      function identity(value) {
        return value;
      }
      module.exports = identity;
    }
  });

  // node_modules/lodash/_castFunction.js
  var require_castFunction = __commonJS({
    "node_modules/lodash/_castFunction.js"(exports, module) {
      var identity = require_identity();
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      module.exports = castFunction;
    }
  });

  // node_modules/lodash/forOwn.js
  var require_forOwn = __commonJS({
    "node_modules/lodash/forOwn.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var castFunction = require_castFunction();
      function forOwn(object, iteratee) {
        return object && baseForOwn(object, castFunction(iteratee));
      }
      module.exports = forOwn;
    }
  });

  // node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "node_modules/lodash/isPlainObject.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map, key) {
        var data = map.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      module.exports = arrayPush;
    }
  });

  // node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set2 = getNative(root, "Set");
      module.exports = Set2;
    }
  });

  // node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap = getNative(root, "WeakMap");
      module.exports = WeakMap;
    }
  });

  // node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set2 = require_Set();
      var WeakMap = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // node_modules/lodash/_baseIsMatch.js
  var require_baseIsMatch = __commonJS({
    "node_modules/lodash/_baseIsMatch.js"(exports, module) {
      var Stack = require_Stack();
      var baseIsEqual = require_baseIsEqual();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === void 0 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
              return false;
            }
          }
        }
        return true;
      }
      module.exports = baseIsMatch;
    }
  });

  // node_modules/lodash/_isStrictComparable.js
  var require_isStrictComparable = __commonJS({
    "node_modules/lodash/_isStrictComparable.js"(exports, module) {
      var isObject = require_isObject();
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      module.exports = isStrictComparable;
    }
  });

  // node_modules/lodash/_getMatchData.js
  var require_getMatchData = __commonJS({
    "node_modules/lodash/_getMatchData.js"(exports, module) {
      var isStrictComparable = require_isStrictComparable();
      var keys = require_keys();
      function getMatchData(object) {
        var result = keys(object), length = result.length;
        while (length--) {
          var key = result[length], value = object[key];
          result[length] = [key, value, isStrictComparable(value)];
        }
        return result;
      }
      module.exports = getMatchData;
    }
  });

  // node_modules/lodash/_matchesStrictComparable.js
  var require_matchesStrictComparable = __commonJS({
    "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
        };
      }
      module.exports = matchesStrictComparable;
    }
  });

  // node_modules/lodash/_baseMatches.js
  var require_baseMatches = __commonJS({
    "node_modules/lodash/_baseMatches.js"(exports, module) {
      var baseIsMatch = require_baseIsMatch();
      var getMatchData = require_getMatchData();
      var matchesStrictComparable = require_matchesStrictComparable();
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      module.exports = baseMatches;
    }
  });

  // node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "node_modules/lodash/_isKey.js"(exports, module) {
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
          if (cache.has(key)) {
            return cache.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache.set(key, result) || cache;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
          }
          return key;
        });
        var cache = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string) {
        var result = [];
        if (string.charCodeAt(0) === 46) {
          result.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "node_modules/lodash/_castPath.js"(exports, module) {
      var isArray = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // node_modules/lodash/get.js
  var require_get = __commonJS({
    "node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get;
    }
  });

  // node_modules/lodash/_baseHasIn.js
  var require_baseHasIn = __commonJS({
    "node_modules/lodash/_baseHasIn.js"(exports, module) {
      function baseHasIn(object, key) {
        return object != null && key in Object(object);
      }
      module.exports = baseHasIn;
    }
  });

  // node_modules/lodash/_hasPath.js
  var require_hasPath = __commonJS({
    "node_modules/lodash/_hasPath.js"(exports, module) {
      var castPath = require_castPath();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isIndex = require_isIndex();
      var isLength = require_isLength();
      var toKey = require_toKey();
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result || ++index != length) {
          return result;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      module.exports = hasPath;
    }
  });

  // node_modules/lodash/hasIn.js
  var require_hasIn = __commonJS({
    "node_modules/lodash/hasIn.js"(exports, module) {
      var baseHasIn = require_baseHasIn();
      var hasPath = require_hasPath();
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      module.exports = hasIn;
    }
  });

  // node_modules/lodash/_baseMatchesProperty.js
  var require_baseMatchesProperty = __commonJS({
    "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      var get = require_get();
      var hasIn = require_hasIn();
      var isKey = require_isKey();
      var isStrictComparable = require_isStrictComparable();
      var matchesStrictComparable = require_matchesStrictComparable();
      var toKey = require_toKey();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      module.exports = baseMatchesProperty;
    }
  });

  // node_modules/lodash/_baseProperty.js
  var require_baseProperty = __commonJS({
    "node_modules/lodash/_baseProperty.js"(exports, module) {
      function baseProperty(key) {
        return function(object) {
          return object == null ? void 0 : object[key];
        };
      }
      module.exports = baseProperty;
    }
  });

  // node_modules/lodash/_basePropertyDeep.js
  var require_basePropertyDeep = __commonJS({
    "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
      var baseGet = require_baseGet();
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      module.exports = basePropertyDeep;
    }
  });

  // node_modules/lodash/property.js
  var require_property = __commonJS({
    "node_modules/lodash/property.js"(exports, module) {
      var baseProperty = require_baseProperty();
      var basePropertyDeep = require_basePropertyDeep();
      var isKey = require_isKey();
      var toKey = require_toKey();
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      module.exports = property;
    }
  });

  // node_modules/lodash/_baseIteratee.js
  var require_baseIteratee = __commonJS({
    "node_modules/lodash/_baseIteratee.js"(exports, module) {
      var baseMatches = require_baseMatches();
      var baseMatchesProperty = require_baseMatchesProperty();
      var identity = require_identity();
      var isArray = require_isArray();
      var property = require_property();
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      module.exports = baseIteratee;
    }
  });

  // node_modules/lodash/_createBaseEach.js
  var require_createBaseEach = __commonJS({
    "node_modules/lodash/_createBaseEach.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      module.exports = createBaseEach;
    }
  });

  // node_modules/lodash/_baseEach.js
  var require_baseEach = __commonJS({
    "node_modules/lodash/_baseEach.js"(exports, module) {
      var baseForOwn = require_baseForOwn();
      var createBaseEach = require_createBaseEach();
      var baseEach = createBaseEach(baseForOwn);
      module.exports = baseEach;
    }
  });

  // node_modules/lodash/_baseMap.js
  var require_baseMap = __commonJS({
    "node_modules/lodash/_baseMap.js"(exports, module) {
      var baseEach = require_baseEach();
      var isArrayLike = require_isArrayLike();
      function baseMap(collection, iteratee) {
        var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result[++index] = iteratee(value, key, collection2);
        });
        return result;
      }
      module.exports = baseMap;
    }
  });

  // node_modules/lodash/map.js
  var require_map = __commonJS({
    "node_modules/lodash/map.js"(exports, module) {
      var arrayMap = require_arrayMap();
      var baseIteratee = require_baseIteratee();
      var baseMap = require_baseMap();
      var isArray = require_isArray();
      function map(collection, iteratee) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, baseIteratee(iteratee, 3));
      }
      module.exports = map;
    }
  });

  // node_modules/reactcss/lib/flattenNames.js
  var require_flattenNames = __commonJS({
    "node_modules/reactcss/lib/flattenNames.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.flattenNames = void 0;
      var _isString2 = require_isString();
      var _isString3 = _interopRequireDefault(_isString2);
      var _forOwn2 = require_forOwn();
      var _forOwn3 = _interopRequireDefault(_forOwn2);
      var _isPlainObject2 = require_isPlainObject();
      var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
      var _map2 = require_map();
      var _map3 = _interopRequireDefault(_map2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var flattenNames = exports.flattenNames = function flattenNames2() {
        var things = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        var names = [];
        (0, _map3.default)(things, function(thing) {
          if (Array.isArray(thing)) {
            flattenNames2(thing).map(function(name) {
              return names.push(name);
            });
          } else if ((0, _isPlainObject3.default)(thing)) {
            (0, _forOwn3.default)(thing, function(value, key) {
              value === true && names.push(key);
              names.push(key + "-" + value);
            });
          } else if ((0, _isString3.default)(thing)) {
            names.push(thing);
          }
        });
        return names;
      };
      exports.default = flattenNames;
    }
  });

  // node_modules/lodash/_arrayEach.js
  var require_arrayEach = __commonJS({
    "node_modules/lodash/_arrayEach.js"(exports, module) {
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      module.exports = arrayEach;
    }
  });

  // node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // node_modules/lodash/_copyObject.js
  var require_copyObject = __commonJS({
    "node_modules/lodash/_copyObject.js"(exports, module) {
      var assignValue = require_assignValue();
      var baseAssignValue = require_baseAssignValue();
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      module.exports = copyObject;
    }
  });

  // node_modules/lodash/_baseAssign.js
  var require_baseAssign = __commonJS({
    "node_modules/lodash/_baseAssign.js"(exports, module) {
      var copyObject = require_copyObject();
      var keys = require_keys();
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      module.exports = baseAssign;
    }
  });

  // node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // node_modules/lodash/_baseAssignIn.js
  var require_baseAssignIn = __commonJS({
    "node_modules/lodash/_baseAssignIn.js"(exports, module) {
      var copyObject = require_copyObject();
      var keysIn = require_keysIn();
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      module.exports = baseAssignIn;
    }
  });

  // node_modules/lodash/_cloneBuffer.js
  var require_cloneBuffer = __commonJS({
    "node_modules/lodash/_cloneBuffer.js"(exports, module) {
      var root = require_root();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      module.exports = cloneBuffer;
    }
  });

  // node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      module.exports = copyArray;
    }
  });

  // node_modules/lodash/_copySymbols.js
  var require_copySymbols = __commonJS({
    "node_modules/lodash/_copySymbols.js"(exports, module) {
      var copyObject = require_copyObject();
      var getSymbols = require_getSymbols();
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      module.exports = copySymbols;
    }
  });

  // node_modules/lodash/_getSymbolsIn.js
  var require_getSymbolsIn = __commonJS({
    "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var getPrototype = require_getPrototype();
      var getSymbols = require_getSymbols();
      var stubArray = require_stubArray();
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result = [];
        while (object) {
          arrayPush(result, getSymbols(object));
          object = getPrototype(object);
        }
        return result;
      };
      module.exports = getSymbolsIn;
    }
  });

  // node_modules/lodash/_copySymbolsIn.js
  var require_copySymbolsIn = __commonJS({
    "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
      var copyObject = require_copyObject();
      var getSymbolsIn = require_getSymbolsIn();
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      module.exports = copySymbolsIn;
    }
  });

  // node_modules/lodash/_getAllKeysIn.js
  var require_getAllKeysIn = __commonJS({
    "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbolsIn = require_getSymbolsIn();
      var keysIn = require_keysIn();
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      module.exports = getAllKeysIn;
    }
  });

  // node_modules/lodash/_initCloneArray.js
  var require_initCloneArray = __commonJS({
    "node_modules/lodash/_initCloneArray.js"(exports, module) {
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function initCloneArray(array) {
        var length = array.length, result = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
          result.index = array.index;
          result.input = array.input;
        }
        return result;
      }
      module.exports = initCloneArray;
    }
  });

  // node_modules/lodash/_cloneArrayBuffer.js
  var require_cloneArrayBuffer = __commonJS({
    "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
      var Uint8Array2 = require_Uint8Array();
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      module.exports = cloneArrayBuffer;
    }
  });

  // node_modules/lodash/_cloneDataView.js
  var require_cloneDataView = __commonJS({
    "node_modules/lodash/_cloneDataView.js"(exports, module) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      module.exports = cloneDataView;
    }
  });

  // node_modules/lodash/_cloneRegExp.js
  var require_cloneRegExp = __commonJS({
    "node_modules/lodash/_cloneRegExp.js"(exports, module) {
      var reFlags = /\w*$/;
      function cloneRegExp(regexp) {
        var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result.lastIndex = regexp.lastIndex;
        return result;
      }
      module.exports = cloneRegExp;
    }
  });

  // node_modules/lodash/_cloneSymbol.js
  var require_cloneSymbol = __commonJS({
    "node_modules/lodash/_cloneSymbol.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
      }
      module.exports = cloneSymbol;
    }
  });

  // node_modules/lodash/_cloneTypedArray.js
  var require_cloneTypedArray = __commonJS({
    "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      module.exports = cloneTypedArray;
    }
  });

  // node_modules/lodash/_initCloneByTag.js
  var require_initCloneByTag = __commonJS({
    "node_modules/lodash/_initCloneByTag.js"(exports, module) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      var cloneDataView = require_cloneDataView();
      var cloneRegExp = require_cloneRegExp();
      var cloneSymbol = require_cloneSymbol();
      var cloneTypedArray = require_cloneTypedArray();
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      module.exports = initCloneByTag;
    }
  });

  // node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // node_modules/lodash/_initCloneObject.js
  var require_initCloneObject = __commonJS({
    "node_modules/lodash/_initCloneObject.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var getPrototype = require_getPrototype();
      var isPrototype = require_isPrototype();
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      module.exports = initCloneObject;
    }
  });

  // node_modules/lodash/_baseIsMap.js
  var require_baseIsMap = __commonJS({
    "node_modules/lodash/_baseIsMap.js"(exports, module) {
      var getTag = require_getTag();
      var isObjectLike = require_isObjectLike();
      var mapTag = "[object Map]";
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      module.exports = baseIsMap;
    }
  });

  // node_modules/lodash/isMap.js
  var require_isMap = __commonJS({
    "node_modules/lodash/isMap.js"(exports, module) {
      var baseIsMap = require_baseIsMap();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsMap = nodeUtil && nodeUtil.isMap;
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      module.exports = isMap;
    }
  });

  // node_modules/lodash/_baseIsSet.js
  var require_baseIsSet = __commonJS({
    "node_modules/lodash/_baseIsSet.js"(exports, module) {
      var getTag = require_getTag();
      var isObjectLike = require_isObjectLike();
      var setTag = "[object Set]";
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      module.exports = baseIsSet;
    }
  });

  // node_modules/lodash/isSet.js
  var require_isSet = __commonJS({
    "node_modules/lodash/isSet.js"(exports, module) {
      var baseIsSet = require_baseIsSet();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsSet = nodeUtil && nodeUtil.isSet;
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      module.exports = isSet;
    }
  });

  // node_modules/lodash/_baseClone.js
  var require_baseClone = __commonJS({
    "node_modules/lodash/_baseClone.js"(exports, module) {
      var Stack = require_Stack();
      var arrayEach = require_arrayEach();
      var assignValue = require_assignValue();
      var baseAssign = require_baseAssign();
      var baseAssignIn = require_baseAssignIn();
      var cloneBuffer = require_cloneBuffer();
      var copyArray = require_copyArray();
      var copySymbols = require_copySymbols();
      var copySymbolsIn = require_copySymbolsIn();
      var getAllKeys = require_getAllKeys();
      var getAllKeysIn = require_getAllKeysIn();
      var getTag = require_getTag();
      var initCloneArray = require_initCloneArray();
      var initCloneByTag = require_initCloneByTag();
      var initCloneObject = require_initCloneObject();
      var isArray = require_isArray();
      var isBuffer = require_isBuffer();
      var isMap = require_isMap();
      var isObject = require_isObject();
      var isSet = require_isSet();
      var keys = require_keys();
      var keysIn = require_keysIn();
      var CLONE_DEEP_FLAG = 1;
      var CLONE_FLAT_FLAG = 2;
      var CLONE_SYMBOLS_FLAG = 4;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result !== void 0) {
          return result;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? void 0 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result;
      }
      module.exports = baseClone;
    }
  });

  // node_modules/lodash/cloneDeep.js
  var require_cloneDeep = __commonJS({
    "node_modules/lodash/cloneDeep.js"(exports, module) {
      var baseClone = require_baseClone();
      var CLONE_DEEP_FLAG = 1;
      var CLONE_SYMBOLS_FLAG = 4;
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      module.exports = cloneDeep;
    }
  });

  // node_modules/reactcss/lib/mergeClasses.js
  var require_mergeClasses = __commonJS({
    "node_modules/reactcss/lib/mergeClasses.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.mergeClasses = void 0;
      var _forOwn2 = require_forOwn();
      var _forOwn3 = _interopRequireDefault(_forOwn2);
      var _cloneDeep2 = require_cloneDeep();
      var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var mergeClasses = exports.mergeClasses = function mergeClasses2(classes) {
        var activeNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
        var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
        activeNames.map(function(name) {
          var toMerge = classes[name];
          if (toMerge) {
            (0, _forOwn3.default)(toMerge, function(value, key) {
              if (!styles[key]) {
                styles[key] = {};
              }
              styles[key] = _extends({}, styles[key], toMerge[key]);
            });
          }
          return name;
        });
        return styles;
      };
      exports.default = mergeClasses;
    }
  });

  // node_modules/reactcss/lib/autoprefix.js
  var require_autoprefix = __commonJS({
    "node_modules/reactcss/lib/autoprefix.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.autoprefix = void 0;
      var _forOwn2 = require_forOwn();
      var _forOwn3 = _interopRequireDefault(_forOwn2);
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var transforms = {
        borderRadius: function borderRadius(value) {
          return {
            msBorderRadius: value,
            MozBorderRadius: value,
            OBorderRadius: value,
            WebkitBorderRadius: value,
            borderRadius: value
          };
        },
        boxShadow: function boxShadow(value) {
          return {
            msBoxShadow: value,
            MozBoxShadow: value,
            OBoxShadow: value,
            WebkitBoxShadow: value,
            boxShadow: value
          };
        },
        userSelect: function userSelect(value) {
          return {
            WebkitTouchCallout: value,
            KhtmlUserSelect: value,
            MozUserSelect: value,
            msUserSelect: value,
            WebkitUserSelect: value,
            userSelect: value
          };
        },
        flex: function flex(value) {
          return {
            WebkitBoxFlex: value,
            MozBoxFlex: value,
            WebkitFlex: value,
            msFlex: value,
            flex: value
          };
        },
        flexBasis: function flexBasis(value) {
          return {
            WebkitFlexBasis: value,
            flexBasis: value
          };
        },
        justifyContent: function justifyContent(value) {
          return {
            WebkitJustifyContent: value,
            justifyContent: value
          };
        },
        transition: function transition(value) {
          return {
            msTransition: value,
            MozTransition: value,
            OTransition: value,
            WebkitTransition: value,
            transition: value
          };
        },
        transform: function transform(value) {
          return {
            msTransform: value,
            MozTransform: value,
            OTransform: value,
            WebkitTransform: value,
            transform: value
          };
        },
        absolute: function absolute(value) {
          var direction = value && value.split(" ");
          return {
            position: "absolute",
            top: direction && direction[0],
            right: direction && direction[1],
            bottom: direction && direction[2],
            left: direction && direction[3]
          };
        },
        extend: function extend(name, otherElementStyles) {
          var otherStyle = otherElementStyles[name];
          if (otherStyle) {
            return otherStyle;
          }
          return {
            "extend": name
          };
        }
      };
      var autoprefix = exports.autoprefix = function autoprefix2(elements) {
        var prefixed = {};
        (0, _forOwn3.default)(elements, function(styles, element) {
          var expanded = {};
          (0, _forOwn3.default)(styles, function(value, key) {
            var transform = transforms[key];
            if (transform) {
              expanded = _extends({}, expanded, transform(value));
            } else {
              expanded[key] = value;
            }
          });
          prefixed[element] = expanded;
        });
        return prefixed;
      };
      exports.default = autoprefix;
    }
  });

  // node_modules/reactcss/lib/components/hover.js
  var require_hover = __commonJS({
    "node_modules/reactcss/lib/components/hover.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.hover = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var hover = exports.hover = function hover2(Component) {
        var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
        return function(_React$Component) {
          _inherits(Hover, _React$Component);
          function Hover() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck(this, Hover);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function() {
              return _this.setState({ hover: true });
            }, _this.handleMouseOut = function() {
              return _this.setState({ hover: false });
            }, _this.render = function() {
              return _react2.default.createElement(
                Span,
                { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
                _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
              );
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          return Hover;
        }(_react2.default.Component);
      };
      exports.default = hover;
    }
  });

  // node_modules/reactcss/lib/components/active.js
  var require_active = __commonJS({
    "node_modules/reactcss/lib/components/active.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.active = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var active = exports.active = function active2(Component) {
        var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
        return function(_React$Component) {
          _inherits(Active, _React$Component);
          function Active() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck(this, Active);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function() {
              return _this.setState({ active: true });
            }, _this.handleMouseUp = function() {
              return _this.setState({ active: false });
            }, _this.render = function() {
              return _react2.default.createElement(
                Span,
                { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
                _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
              );
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          return Active;
        }(_react2.default.Component);
      };
      exports.default = active;
    }
  });

  // node_modules/reactcss/lib/loop.js
  var require_loop = __commonJS({
    "node_modules/reactcss/lib/loop.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var loopable = function loopable2(i, length) {
        var props = {};
        var setProp = function setProp2(name) {
          var value = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
          props[name] = value;
        };
        i === 0 && setProp("first-child");
        i === length - 1 && setProp("last-child");
        (i === 0 || i % 2 === 0) && setProp("even");
        Math.abs(i % 2) === 1 && setProp("odd");
        setProp("nth-child", i);
        return props;
      };
      exports.default = loopable;
    }
  });

  // node_modules/reactcss/lib/index.js
  var require_lib = __commonJS({
    "node_modules/reactcss/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = void 0;
      var _flattenNames = require_flattenNames();
      var _flattenNames2 = _interopRequireDefault(_flattenNames);
      var _mergeClasses = require_mergeClasses();
      var _mergeClasses2 = _interopRequireDefault(_mergeClasses);
      var _autoprefix = require_autoprefix();
      var _autoprefix2 = _interopRequireDefault(_autoprefix);
      var _hover2 = require_hover();
      var _hover3 = _interopRequireDefault(_hover2);
      var _active = require_active();
      var _active2 = _interopRequireDefault(_active);
      var _loop2 = require_loop();
      var _loop3 = _interopRequireDefault(_loop2);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.hover = _hover3.default;
      exports.handleHover = _hover3.default;
      exports.handleActive = _active2.default;
      exports.loop = _loop3.default;
      var ReactCSS = exports.ReactCSS = function ReactCSS2(classes) {
        for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          activations[_key - 1] = arguments[_key];
        }
        var activeNames = (0, _flattenNames2.default)(activations);
        var merged = (0, _mergeClasses2.default)(classes, activeNames);
        return (0, _autoprefix2.default)(merged);
      };
      exports.default = ReactCSS;
    }
  });

  // node_modules/react-color/lib/helpers/alpha.js
  var require_alpha = __commonJS({
    "node_modules/react-color/lib/helpers/alpha.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var calculateChange = exports.calculateChange = function calculateChange2(e, hsl, direction, initialA, container) {
        var containerWidth = container.clientWidth;
        var containerHeight = container.clientHeight;
        var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
        var y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
        var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
        var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
        if (direction === "vertical") {
          var a = void 0;
          if (top < 0) {
            a = 0;
          } else if (top > containerHeight) {
            a = 1;
          } else {
            a = Math.round(top * 100 / containerHeight) / 100;
          }
          if (hsl.a !== a) {
            return {
              h: hsl.h,
              s: hsl.s,
              l: hsl.l,
              a,
              source: "rgb"
            };
          }
        } else {
          var _a = void 0;
          if (left < 0) {
            _a = 0;
          } else if (left > containerWidth) {
            _a = 1;
          } else {
            _a = Math.round(left * 100 / containerWidth) / 100;
          }
          if (initialA !== _a) {
            return {
              h: hsl.h,
              s: hsl.s,
              l: hsl.l,
              a: _a,
              source: "rgb"
            };
          }
        }
        return null;
      };
    }
  });

  // node_modules/react-color/lib/helpers/checkboard.js
  var require_checkboard = __commonJS({
    "node_modules/react-color/lib/helpers/checkboard.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var checkboardCache = {};
      var render = exports.render = function render2(c1, c2, size, serverCanvas) {
        if (typeof document === "undefined" && !serverCanvas) {
          return null;
        }
        var canvas = serverCanvas ? new serverCanvas() : document.createElement("canvas");
        canvas.width = size * 2;
        canvas.height = size * 2;
        var ctx = canvas.getContext("2d");
        if (!ctx) {
          return null;
        }
        ctx.fillStyle = c1;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = c2;
        ctx.fillRect(0, 0, size, size);
        ctx.translate(size, size);
        ctx.fillRect(0, 0, size, size);
        return canvas.toDataURL();
      };
      var get = exports.get = function get2(c1, c2, size, serverCanvas) {
        var key = c1 + "-" + c2 + "-" + size + (serverCanvas ? "-server" : "");
        if (checkboardCache[key]) {
          return checkboardCache[key];
        }
        var checkboard = render(c1, c2, size, serverCanvas);
        checkboardCache[key] = checkboard;
        return checkboard;
      };
    }
  });

  // node_modules/react-color/lib/components/common/Checkboard.js
  var require_Checkboard = __commonJS({
    "node_modules/react-color/lib/components/common/Checkboard.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Checkboard = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _checkboard = require_checkboard();
      var checkboard = _interopRequireWildcard(_checkboard);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Checkboard = exports.Checkboard = function Checkboard2(_ref) {
        var white = _ref.white, grey = _ref.grey, size = _ref.size, renderers = _ref.renderers, borderRadius = _ref.borderRadius, boxShadow = _ref.boxShadow, children = _ref.children;
        var styles = (0, _reactcss2.default)({
          "default": {
            grid: {
              borderRadius,
              boxShadow,
              absolute: "0px 0px 0px 0px",
              background: "url(" + checkboard.get(white, grey, size, renderers.canvas) + ") center left"
            }
          }
        });
        return (0, _react.isValidElement)(children) ? _react2.default.cloneElement(children, _extends({}, children.props, { style: _extends({}, children.props.style, styles.grid) })) : _react2.default.createElement("div", { style: styles.grid });
      };
      Checkboard.defaultProps = {
        size: 8,
        white: "transparent",
        grey: "rgba(0,0,0,.08)",
        renderers: {}
      };
      exports.default = Checkboard;
    }
  });

  // node_modules/react-color/lib/components/common/Alpha.js
  var require_Alpha = __commonJS({
    "node_modules/react-color/lib/components/common/Alpha.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Alpha = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _alpha = require_alpha();
      var alpha = _interopRequireWildcard(_alpha);
      var _Checkboard = require_Checkboard();
      var _Checkboard2 = _interopRequireDefault(_Checkboard);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Alpha = exports.Alpha = function(_ref) {
        _inherits(Alpha2, _ref);
        function Alpha2() {
          var _ref2;
          var _temp, _this, _ret;
          _classCallCheck(this, Alpha2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha2.__proto__ || Object.getPrototypeOf(Alpha2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e) {
            var change = alpha.calculateChange(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
            change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e);
          }, _this.handleMouseDown = function(e) {
            _this.handleChange(e);
            window.addEventListener("mousemove", _this.handleChange);
            window.addEventListener("mouseup", _this.handleMouseUp);
          }, _this.handleMouseUp = function() {
            _this.unbindEventListeners();
          }, _this.unbindEventListeners = function() {
            window.removeEventListener("mousemove", _this.handleChange);
            window.removeEventListener("mouseup", _this.handleMouseUp);
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Alpha2, [{
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.unbindEventListeners();
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;
            var rgb = this.props.rgb;
            var styles = (0, _reactcss2.default)({
              "default": {
                alpha: {
                  absolute: "0px 0px 0px 0px",
                  borderRadius: this.props.radius
                },
                checkboard: {
                  absolute: "0px 0px 0px 0px",
                  overflow: "hidden",
                  borderRadius: this.props.radius
                },
                gradient: {
                  absolute: "0px 0px 0px 0px",
                  background: "linear-gradient(to right, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)",
                  boxShadow: this.props.shadow,
                  borderRadius: this.props.radius
                },
                container: {
                  position: "relative",
                  height: "100%",
                  margin: "0 3px"
                },
                pointer: {
                  position: "absolute",
                  left: rgb.a * 100 + "%"
                },
                slider: {
                  width: "4px",
                  borderRadius: "1px",
                  height: "8px",
                  boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                  background: "#fff",
                  marginTop: "1px",
                  transform: "translateX(-2px)"
                }
              },
              "vertical": {
                gradient: {
                  background: "linear-gradient(to bottom, rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 0) 0%,\n           rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + ", 1) 100%)"
                },
                pointer: {
                  left: 0,
                  top: rgb.a * 100 + "%"
                }
              },
              "overwrite": _extends({}, this.props.style)
            }, {
              vertical: this.props.direction === "vertical",
              overwrite: true
            });
            return _react2.default.createElement(
              "div",
              { style: styles.alpha },
              _react2.default.createElement(
                "div",
                { style: styles.checkboard },
                _react2.default.createElement(_Checkboard2.default, { renderers: this.props.renderers })
              ),
              _react2.default.createElement("div", { style: styles.gradient }),
              _react2.default.createElement(
                "div",
                {
                  style: styles.container,
                  ref: function ref(container) {
                    return _this2.container = container;
                  },
                  onMouseDown: this.handleMouseDown,
                  onTouchMove: this.handleChange,
                  onTouchStart: this.handleChange
                },
                _react2.default.createElement(
                  "div",
                  { style: styles.pointer },
                  this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement("div", { style: styles.slider })
                )
              )
            );
          }
        }]);
        return Alpha2;
      }(_react.PureComponent || _react.Component);
      exports.default = Alpha;
    }
  });

  // node_modules/react-color/lib/components/common/EditableInput.js
  var require_EditableInput = __commonJS({
    "node_modules/react-color/lib/components/common/EditableInput.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.EditableInput = void 0;
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var DEFAULT_ARROW_OFFSET = 1;
      var UP_KEY_CODE = 38;
      var DOWN_KEY_CODE = 40;
      var VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
      var isValidKeyCode = function isValidKeyCode2(keyCode) {
        return VALID_KEY_CODES.indexOf(keyCode) > -1;
      };
      var getNumberValue = function getNumberValue2(value) {
        return Number(String(value).replace(/%/g, ""));
      };
      var idCounter = 1;
      var EditableInput = exports.EditableInput = function(_ref) {
        _inherits(EditableInput2, _ref);
        function EditableInput2(props) {
          _classCallCheck(this, EditableInput2);
          var _this = _possibleConstructorReturn(this, (EditableInput2.__proto__ || Object.getPrototypeOf(EditableInput2)).call(this));
          _this.handleBlur = function() {
            if (_this.state.blurValue) {
              _this.setState({ value: _this.state.blurValue, blurValue: null });
            }
          };
          _this.handleChange = function(e) {
            _this.setUpdatedValue(e.target.value, e);
          };
          _this.handleKeyDown = function(e) {
            var value = getNumberValue(e.target.value);
            if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
              var offset = _this.getArrowOffset();
              var updatedValue = e.keyCode === UP_KEY_CODE ? value + offset : value - offset;
              _this.setUpdatedValue(updatedValue, e);
            }
          };
          _this.handleDrag = function(e) {
            if (_this.props.dragLabel) {
              var newValue = Math.round(_this.props.value + e.movementX);
              if (newValue >= 0 && newValue <= _this.props.dragMax) {
                _this.props.onChange && _this.props.onChange(_this.getValueObjectWithLabel(newValue), e);
              }
            }
          };
          _this.handleMouseDown = function(e) {
            if (_this.props.dragLabel) {
              e.preventDefault();
              _this.handleDrag(e);
              window.addEventListener("mousemove", _this.handleDrag);
              window.addEventListener("mouseup", _this.handleMouseUp);
            }
          };
          _this.handleMouseUp = function() {
            _this.unbindEventListeners();
          };
          _this.unbindEventListeners = function() {
            window.removeEventListener("mousemove", _this.handleDrag);
            window.removeEventListener("mouseup", _this.handleMouseUp);
          };
          _this.state = {
            value: String(props.value).toUpperCase(),
            blurValue: String(props.value).toUpperCase()
          };
          _this.inputId = "rc-editable-input-" + idCounter++;
          return _this;
        }
        _createClass(EditableInput2, [{
          key: "componentDidUpdate",
          value: function componentDidUpdate(prevProps, prevState) {
            if (this.props.value !== this.state.value && (prevProps.value !== this.props.value || prevState.value !== this.state.value)) {
              if (this.input === document.activeElement) {
                this.setState({ blurValue: String(this.props.value).toUpperCase() });
              } else {
                this.setState({ value: String(this.props.value).toUpperCase(), blurValue: !this.state.blurValue && String(this.props.value).toUpperCase() });
              }
            }
          }
        }, {
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.unbindEventListeners();
          }
        }, {
          key: "getValueObjectWithLabel",
          value: function getValueObjectWithLabel(value) {
            return _defineProperty({}, this.props.label, value);
          }
        }, {
          key: "getArrowOffset",
          value: function getArrowOffset() {
            return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
          }
        }, {
          key: "setUpdatedValue",
          value: function setUpdatedValue(value, e) {
            var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
            this.props.onChange && this.props.onChange(onChangeValue, e);
            this.setState({ value });
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;
            var styles = (0, _reactcss2.default)({
              "default": {
                wrap: {
                  position: "relative"
                }
              },
              "user-override": {
                wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                input: this.props.style && this.props.style.input ? this.props.style.input : {},
                label: this.props.style && this.props.style.label ? this.props.style.label : {}
              },
              "dragLabel-true": {
                label: {
                  cursor: "ew-resize"
                }
              }
            }, {
              "user-override": true
            }, this.props);
            return _react2.default.createElement(
              "div",
              { style: styles.wrap },
              _react2.default.createElement("input", {
                id: this.inputId,
                style: styles.input,
                ref: function ref(input) {
                  return _this2.input = input;
                },
                value: this.state.value,
                onKeyDown: this.handleKeyDown,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
                placeholder: this.props.placeholder,
                spellCheck: "false"
              }),
              this.props.label && !this.props.hideLabel ? _react2.default.createElement(
                "label",
                {
                  htmlFor: this.inputId,
                  style: styles.label,
                  onMouseDown: this.handleMouseDown
                },
                this.props.label
              ) : null
            );
          }
        }]);
        return EditableInput2;
      }(_react.PureComponent || _react.Component);
      exports.default = EditableInput;
    }
  });

  // node_modules/react-color/lib/helpers/hue.js
  var require_hue = __commonJS({
    "node_modules/react-color/lib/helpers/hue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var calculateChange = exports.calculateChange = function calculateChange2(e, direction, hsl, container) {
        var containerWidth = container.clientWidth;
        var containerHeight = container.clientHeight;
        var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
        var y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
        var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
        var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
        if (direction === "vertical") {
          var h = void 0;
          if (top < 0) {
            h = 359;
          } else if (top > containerHeight) {
            h = 0;
          } else {
            var percent = -(top * 100 / containerHeight) + 100;
            h = 360 * percent / 100;
          }
          if (hsl.h !== h) {
            return {
              h,
              s: hsl.s,
              l: hsl.l,
              a: hsl.a,
              source: "hsl"
            };
          }
        } else {
          var _h = void 0;
          if (left < 0) {
            _h = 0;
          } else if (left > containerWidth) {
            _h = 359;
          } else {
            var _percent = left * 100 / containerWidth;
            _h = 360 * _percent / 100;
          }
          if (hsl.h !== _h) {
            return {
              h: _h,
              s: hsl.s,
              l: hsl.l,
              a: hsl.a,
              source: "hsl"
            };
          }
        }
        return null;
      };
    }
  });

  // node_modules/react-color/lib/components/common/Hue.js
  var require_Hue = __commonJS({
    "node_modules/react-color/lib/components/common/Hue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Hue = void 0;
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _hue = require_hue();
      var hue = _interopRequireWildcard(_hue);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Hue = exports.Hue = function(_ref) {
        _inherits(Hue2, _ref);
        function Hue2() {
          var _ref2;
          var _temp, _this, _ret;
          _classCallCheck(this, Hue2);
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue2.__proto__ || Object.getPrototypeOf(Hue2)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function(e) {
            var change = hue.calculateChange(e, _this.props.direction, _this.props.hsl, _this.container);
            change && typeof _this.props.onChange === "function" && _this.props.onChange(change, e);
          }, _this.handleMouseDown = function(e) {
            _this.handleChange(e);
            window.addEventListener("mousemove", _this.handleChange);
            window.addEventListener("mouseup", _this.handleMouseUp);
          }, _this.handleMouseUp = function() {
            _this.unbindEventListeners();
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }
        _createClass(Hue2, [{
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.unbindEventListeners();
          }
        }, {
          key: "unbindEventListeners",
          value: function unbindEventListeners() {
            window.removeEventListener("mousemove", this.handleChange);
            window.removeEventListener("mouseup", this.handleMouseUp);
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;
            var _props$direction = this.props.direction, direction = _props$direction === void 0 ? "horizontal" : _props$direction;
            var styles = (0, _reactcss2.default)({
              "default": {
                hue: {
                  absolute: "0px 0px 0px 0px",
                  borderRadius: this.props.radius,
                  boxShadow: this.props.shadow
                },
                container: {
                  padding: "0 2px",
                  position: "relative",
                  height: "100%",
                  borderRadius: this.props.radius
                },
                pointer: {
                  position: "absolute",
                  left: this.props.hsl.h * 100 / 360 + "%"
                },
                slider: {
                  marginTop: "1px",
                  width: "4px",
                  borderRadius: "1px",
                  height: "8px",
                  boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                  background: "#fff",
                  transform: "translateX(-2px)"
                }
              },
              "vertical": {
                pointer: {
                  left: "0px",
                  top: -(this.props.hsl.h * 100 / 360) + 100 + "%"
                }
              }
            }, { vertical: direction === "vertical" });
            return _react2.default.createElement(
              "div",
              { style: styles.hue },
              _react2.default.createElement(
                "div",
                {
                  className: "hue-" + direction,
                  style: styles.container,
                  ref: function ref(container) {
                    return _this2.container = container;
                  },
                  onMouseDown: this.handleMouseDown,
                  onTouchMove: this.handleChange,
                  onTouchStart: this.handleChange
                },
                _react2.default.createElement(
                  "style",
                  null,
                  "\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.pointer },
                  this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement("div", { style: styles.slider })
                )
              )
            );
          }
        }]);
        return Hue2;
      }(_react.PureComponent || _react.Component);
      exports.default = Hue;
    }
  });

  // node_modules/lodash/_assignMergeValue.js
  var require_assignMergeValue = __commonJS({
    "node_modules/lodash/_assignMergeValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      function assignMergeValue(object, key, value) {
        if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignMergeValue;
    }
  });

  // node_modules/lodash/isArrayLikeObject.js
  var require_isArrayLikeObject = __commonJS({
    "node_modules/lodash/isArrayLikeObject.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      var isObjectLike = require_isObjectLike();
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      module.exports = isArrayLikeObject;
    }
  });

  // node_modules/lodash/_safeGet.js
  var require_safeGet = __commonJS({
    "node_modules/lodash/_safeGet.js"(exports, module) {
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      module.exports = safeGet;
    }
  });

  // node_modules/lodash/toPlainObject.js
  var require_toPlainObject = __commonJS({
    "node_modules/lodash/toPlainObject.js"(exports, module) {
      var copyObject = require_copyObject();
      var keysIn = require_keysIn();
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      module.exports = toPlainObject;
    }
  });

  // node_modules/lodash/_baseMergeDeep.js
  var require_baseMergeDeep = __commonJS({
    "node_modules/lodash/_baseMergeDeep.js"(exports, module) {
      var assignMergeValue = require_assignMergeValue();
      var cloneBuffer = require_cloneBuffer();
      var cloneTypedArray = require_cloneTypedArray();
      var copyArray = require_copyArray();
      var initCloneObject = require_initCloneObject();
      var isArguments = require_isArguments();
      var isArray = require_isArray();
      var isArrayLikeObject = require_isArrayLikeObject();
      var isBuffer = require_isBuffer();
      var isFunction = require_isFunction();
      var isObject = require_isObject();
      var isPlainObject = require_isPlainObject();
      var isTypedArray = require_isTypedArray();
      var safeGet = require_safeGet();
      var toPlainObject = require_toPlainObject();
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
        var isCommon = newValue === void 0;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      module.exports = baseMergeDeep;
    }
  });

  // node_modules/lodash/_baseMerge.js
  var require_baseMerge = __commonJS({
    "node_modules/lodash/_baseMerge.js"(exports, module) {
      var Stack = require_Stack();
      var assignMergeValue = require_assignMergeValue();
      var baseFor = require_baseFor();
      var baseMergeDeep = require_baseMergeDeep();
      var isObject = require_isObject();
      var keysIn = require_keysIn();
      var safeGet = require_safeGet();
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
            if (newValue === void 0) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      module.exports = baseMerge;
    }
  });

  // node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "node_modules/lodash/constant.js"(exports, module) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }
  });

  // node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity = require_identity();
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // node_modules/lodash/_baseRest.js
  var require_baseRest = __commonJS({
    "node_modules/lodash/_baseRest.js"(exports, module) {
      var identity = require_identity();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      module.exports = baseRest;
    }
  });

  // node_modules/lodash/_isIterateeCall.js
  var require_isIterateeCall = __commonJS({
    "node_modules/lodash/_isIterateeCall.js"(exports, module) {
      var eq = require_eq();
      var isArrayLike = require_isArrayLike();
      var isIndex = require_isIndex();
      var isObject = require_isObject();
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      module.exports = isIterateeCall;
    }
  });

  // node_modules/lodash/_createAssigner.js
  var require_createAssigner = __commonJS({
    "node_modules/lodash/_createAssigner.js"(exports, module) {
      var baseRest = require_baseRest();
      var isIterateeCall = require_isIterateeCall();
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? void 0 : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      module.exports = createAssigner;
    }
  });

  // node_modules/lodash/merge.js
  var require_merge = __commonJS({
    "node_modules/lodash/merge.js"(exports, module) {
      var baseMerge = require_baseMerge();
      var createAssigner = require_createAssigner();
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      module.exports = merge;
    }
  });

  // node_modules/react-color/lib/components/common/Raised.js
  var require_Raised = __commonJS({
    "node_modules/react-color/lib/components/common/Raised.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Raised = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Raised = exports.Raised = function Raised2(_ref) {
        var zDepth = _ref.zDepth, radius = _ref.radius, background = _ref.background, children = _ref.children, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            wrap: {
              position: "relative",
              display: "inline-block"
            },
            content: {
              position: "relative"
            },
            bg: {
              absolute: "0px 0px 0px 0px",
              boxShadow: "0 " + zDepth + "px " + zDepth * 4 + "px rgba(0,0,0,.24)",
              borderRadius: radius,
              background
            }
          },
          "zDepth-0": {
            bg: {
              boxShadow: "none"
            }
          },
          "zDepth-1": {
            bg: {
              boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
            }
          },
          "zDepth-2": {
            bg: {
              boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
            }
          },
          "zDepth-3": {
            bg: {
              boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
            }
          },
          "zDepth-4": {
            bg: {
              boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
            }
          },
          "zDepth-5": {
            bg: {
              boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
            }
          },
          "square": {
            bg: {
              borderRadius: "0"
            }
          },
          "circle": {
            bg: {
              borderRadius: "50%"
            }
          }
        }, passedStyles), { "zDepth-1": zDepth === 1 });
        return _react2.default.createElement(
          "div",
          { style: styles.wrap },
          _react2.default.createElement("div", { style: styles.bg }),
          _react2.default.createElement(
            "div",
            { style: styles.content },
            children
          )
        );
      };
      Raised.propTypes = {
        background: _propTypes2.default.string,
        zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5]),
        radius: _propTypes2.default.number,
        styles: _propTypes2.default.object
      };
      Raised.defaultProps = {
        background: "#fff",
        zDepth: 1,
        radius: 2,
        styles: {}
      };
      exports.default = Raised;
    }
  });

  // node_modules/lodash/now.js
  var require_now = __commonJS({
    "node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      module.exports = baseTrim;
    }
  });

  // node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "node_modules/lodash/debounce.js"(exports, module) {
      var isObject = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce;
    }
  });

  // node_modules/lodash/throttle.js
  var require_throttle = __commonJS({
    "node_modules/lodash/throttle.js"(exports, module) {
      var debounce = require_debounce();
      var isObject = require_isObject();
      var FUNC_ERROR_TEXT = "Expected a function";
      function throttle(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      module.exports = throttle;
    }
  });

  // node_modules/react-color/lib/helpers/saturation.js
  var require_saturation = __commonJS({
    "node_modules/react-color/lib/helpers/saturation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var calculateChange = exports.calculateChange = function calculateChange2(e, hsl, container) {
        var _container$getBoundin = container.getBoundingClientRect(), containerWidth = _container$getBoundin.width, containerHeight = _container$getBoundin.height;
        var x = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
        var y = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
        var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
        var top = y - (container.getBoundingClientRect().top + window.pageYOffset);
        if (left < 0) {
          left = 0;
        } else if (left > containerWidth) {
          left = containerWidth;
        }
        if (top < 0) {
          top = 0;
        } else if (top > containerHeight) {
          top = containerHeight;
        }
        var saturation = left / containerWidth;
        var bright = 1 - top / containerHeight;
        return {
          h: hsl.h,
          s: saturation,
          v: bright,
          a: hsl.a,
          source: "hsv"
        };
      };
    }
  });

  // node_modules/react-color/lib/components/common/Saturation.js
  var require_Saturation = __commonJS({
    "node_modules/react-color/lib/components/common/Saturation.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Saturation = void 0;
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _throttle = require_throttle();
      var _throttle2 = _interopRequireDefault(_throttle);
      var _saturation = require_saturation();
      var saturation = _interopRequireWildcard(_saturation);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Saturation = exports.Saturation = function(_ref) {
        _inherits(Saturation2, _ref);
        function Saturation2(props) {
          _classCallCheck(this, Saturation2);
          var _this = _possibleConstructorReturn(this, (Saturation2.__proto__ || Object.getPrototypeOf(Saturation2)).call(this, props));
          _this.handleChange = function(e) {
            typeof _this.props.onChange === "function" && _this.throttle(_this.props.onChange, saturation.calculateChange(e, _this.props.hsl, _this.container), e);
          };
          _this.handleMouseDown = function(e) {
            _this.handleChange(e);
            var renderWindow = _this.getContainerRenderWindow();
            renderWindow.addEventListener("mousemove", _this.handleChange);
            renderWindow.addEventListener("mouseup", _this.handleMouseUp);
          };
          _this.handleMouseUp = function() {
            _this.unbindEventListeners();
          };
          _this.throttle = (0, _throttle2.default)(function(fn, data, e) {
            fn(data, e);
          }, 50);
          return _this;
        }
        _createClass(Saturation2, [{
          key: "componentWillUnmount",
          value: function componentWillUnmount() {
            this.throttle.cancel();
            this.unbindEventListeners();
          }
        }, {
          key: "getContainerRenderWindow",
          value: function getContainerRenderWindow() {
            var container = this.container;
            var renderWindow = window;
            while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
              renderWindow = renderWindow.parent;
            }
            return renderWindow;
          }
        }, {
          key: "unbindEventListeners",
          value: function unbindEventListeners() {
            var renderWindow = this.getContainerRenderWindow();
            renderWindow.removeEventListener("mousemove", this.handleChange);
            renderWindow.removeEventListener("mouseup", this.handleMouseUp);
          }
        }, {
          key: "render",
          value: function render() {
            var _this2 = this;
            var _ref2 = this.props.style || {}, color = _ref2.color, white = _ref2.white, black = _ref2.black, pointer = _ref2.pointer, circle = _ref2.circle;
            var styles = (0, _reactcss2.default)({
              "default": {
                color: {
                  absolute: "0px 0px 0px 0px",
                  background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                  borderRadius: this.props.radius
                },
                white: {
                  absolute: "0px 0px 0px 0px",
                  borderRadius: this.props.radius
                },
                black: {
                  absolute: "0px 0px 0px 0px",
                  boxShadow: this.props.shadow,
                  borderRadius: this.props.radius
                },
                pointer: {
                  position: "absolute",
                  top: -(this.props.hsv.v * 100) + 100 + "%",
                  left: this.props.hsv.s * 100 + "%",
                  cursor: "default"
                },
                circle: {
                  width: "4px",
                  height: "4px",
                  boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                  borderRadius: "50%",
                  cursor: "hand",
                  transform: "translate(-2px, -2px)"
                }
              },
              "custom": {
                color,
                white,
                black,
                pointer,
                circle
              }
            }, { "custom": !!this.props.style });
            return _react2.default.createElement(
              "div",
              {
                style: styles.color,
                ref: function ref(container) {
                  return _this2.container = container;
                },
                onMouseDown: this.handleMouseDown,
                onTouchMove: this.handleChange,
                onTouchStart: this.handleChange
              },
              _react2.default.createElement(
                "style",
                null,
                "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "
              ),
              _react2.default.createElement(
                "div",
                { style: styles.white, className: "saturation-white" },
                _react2.default.createElement("div", { style: styles.black, className: "saturation-black" }),
                _react2.default.createElement(
                  "div",
                  { style: styles.pointer },
                  this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement("div", { style: styles.circle })
                )
              )
            );
          }
        }]);
        return Saturation2;
      }(_react.PureComponent || _react.Component);
      exports.default = Saturation;
    }
  });

  // node_modules/lodash/forEach.js
  var require_forEach = __commonJS({
    "node_modules/lodash/forEach.js"(exports, module) {
      var arrayEach = require_arrayEach();
      var baseEach = require_baseEach();
      var castFunction = require_castFunction();
      var isArray = require_isArray();
      function forEach(collection, iteratee) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, castFunction(iteratee));
      }
      module.exports = forEach;
    }
  });

  // node_modules/lodash/each.js
  var require_each = __commonJS({
    "node_modules/lodash/each.js"(exports, module) {
      module.exports = require_forEach();
    }
  });

  // node_modules/tinycolor2/cjs/tinycolor.js
  var require_tinycolor = __commonJS({
    "node_modules/tinycolor2/cjs/tinycolor.js"(exports, module) {
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.tinycolor = factory());
      })(exports, function() {
        "use strict";
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
            return typeof obj2;
          } : function(obj2) {
            return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          }, _typeof(obj);
        }
        var trimLeft = /^\s+/;
        var trimRight = /\s+$/;
        function tinycolor(color, opts) {
          color = color ? color : "";
          opts = opts || {};
          if (color instanceof tinycolor) {
            return color;
          }
          if (!(this instanceof tinycolor)) {
            return new tinycolor(color, opts);
          }
          var rgb = inputToRGB(color);
          this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
          this._gradientType = opts.gradientType;
          if (this._r < 1)
            this._r = Math.round(this._r);
          if (this._g < 1)
            this._g = Math.round(this._g);
          if (this._b < 1)
            this._b = Math.round(this._b);
          this._ok = rgb.ok;
        }
        tinycolor.prototype = {
          isDark: function isDark() {
            return this.getBrightness() < 128;
          },
          isLight: function isLight() {
            return !this.isDark();
          },
          isValid: function isValid() {
            return this._ok;
          },
          getOriginalInput: function getOriginalInput() {
            return this._originalInput;
          },
          getFormat: function getFormat() {
            return this._format;
          },
          getAlpha: function getAlpha() {
            return this._a;
          },
          getBrightness: function getBrightness() {
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
          },
          getLuminance: function getLuminance() {
            var rgb = this.toRgb();
            var RsRGB, GsRGB, BsRGB, R, G, B;
            RsRGB = rgb.r / 255;
            GsRGB = rgb.g / 255;
            BsRGB = rgb.b / 255;
            if (RsRGB <= 0.03928)
              R = RsRGB / 12.92;
            else
              R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
            if (GsRGB <= 0.03928)
              G = GsRGB / 12.92;
            else
              G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
            if (BsRGB <= 0.03928)
              B = BsRGB / 12.92;
            else
              B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
            return 0.2126 * R + 0.7152 * G + 0.0722 * B;
          },
          setAlpha: function setAlpha(value) {
            this._a = boundAlpha(value);
            this._roundA = Math.round(100 * this._a) / 100;
            return this;
          },
          toHsv: function toHsv() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            return {
              h: hsv.h * 360,
              s: hsv.s,
              v: hsv.v,
              a: this._a
            };
          },
          toHsvString: function toHsvString() {
            var hsv = rgbToHsv(this._r, this._g, this._b);
            var h = Math.round(hsv.h * 360), s = Math.round(hsv.s * 100), v = Math.round(hsv.v * 100);
            return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
          },
          toHsl: function toHsl() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            return {
              h: hsl.h * 360,
              s: hsl.s,
              l: hsl.l,
              a: this._a
            };
          },
          toHslString: function toHslString() {
            var hsl = rgbToHsl(this._r, this._g, this._b);
            var h = Math.round(hsl.h * 360), s = Math.round(hsl.s * 100), l = Math.round(hsl.l * 100);
            return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
          },
          toHex: function toHex(allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char);
          },
          toHexString: function toHexString(allow3Char) {
            return "#" + this.toHex(allow3Char);
          },
          toHex8: function toHex8(allow4Char) {
            return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
          },
          toHex8String: function toHex8String(allow4Char) {
            return "#" + this.toHex8(allow4Char);
          },
          toRgb: function toRgb() {
            return {
              r: Math.round(this._r),
              g: Math.round(this._g),
              b: Math.round(this._b),
              a: this._a
            };
          },
          toRgbString: function toRgbString() {
            return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
          },
          toPercentageRgb: function toPercentageRgb() {
            return {
              r: Math.round(bound01(this._r, 255) * 100) + "%",
              g: Math.round(bound01(this._g, 255) * 100) + "%",
              b: Math.round(bound01(this._b, 255) * 100) + "%",
              a: this._a
            };
          },
          toPercentageRgbString: function toPercentageRgbString() {
            return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
          },
          toName: function toName() {
            if (this._a === 0) {
              return "transparent";
            }
            if (this._a < 1) {
              return false;
            }
            return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
          },
          toFilter: function toFilter(secondColor) {
            var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
            var secondHex8String = hex8String;
            var gradientType = this._gradientType ? "GradientType = 1, " : "";
            if (secondColor) {
              var s = tinycolor(secondColor);
              secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
          },
          toString: function toString(format) {
            var formatSet = !!format;
            format = format || this._format;
            var formattedString = false;
            var hasAlpha = this._a < 1 && this._a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
            if (needsAlphaFormat) {
              if (format === "name" && this._a === 0) {
                return this.toName();
              }
              return this.toRgbString();
            }
            if (format === "rgb") {
              formattedString = this.toRgbString();
            }
            if (format === "prgb") {
              formattedString = this.toPercentageRgbString();
            }
            if (format === "hex" || format === "hex6") {
              formattedString = this.toHexString();
            }
            if (format === "hex3") {
              formattedString = this.toHexString(true);
            }
            if (format === "hex4") {
              formattedString = this.toHex8String(true);
            }
            if (format === "hex8") {
              formattedString = this.toHex8String();
            }
            if (format === "name") {
              formattedString = this.toName();
            }
            if (format === "hsl") {
              formattedString = this.toHslString();
            }
            if (format === "hsv") {
              formattedString = this.toHsvString();
            }
            return formattedString || this.toHexString();
          },
          clone: function clone() {
            return tinycolor(this.toString());
          },
          _applyModification: function _applyModification(fn, args) {
            var color = fn.apply(null, [this].concat([].slice.call(args)));
            this._r = color._r;
            this._g = color._g;
            this._b = color._b;
            this.setAlpha(color._a);
            return this;
          },
          lighten: function lighten() {
            return this._applyModification(_lighten, arguments);
          },
          brighten: function brighten() {
            return this._applyModification(_brighten, arguments);
          },
          darken: function darken() {
            return this._applyModification(_darken, arguments);
          },
          desaturate: function desaturate() {
            return this._applyModification(_desaturate, arguments);
          },
          saturate: function saturate() {
            return this._applyModification(_saturate, arguments);
          },
          greyscale: function greyscale() {
            return this._applyModification(_greyscale, arguments);
          },
          spin: function spin() {
            return this._applyModification(_spin, arguments);
          },
          _applyCombination: function _applyCombination(fn, args) {
            return fn.apply(null, [this].concat([].slice.call(args)));
          },
          analogous: function analogous() {
            return this._applyCombination(_analogous, arguments);
          },
          complement: function complement() {
            return this._applyCombination(_complement, arguments);
          },
          monochromatic: function monochromatic() {
            return this._applyCombination(_monochromatic, arguments);
          },
          splitcomplement: function splitcomplement() {
            return this._applyCombination(_splitcomplement, arguments);
          },
          // Disabled until https://github.com/bgrins/TinyColor/issues/254
          // polyad: function (number) {
          //   return this._applyCombination(polyad, [number]);
          // },
          triad: function triad() {
            return this._applyCombination(polyad, [3]);
          },
          tetrad: function tetrad() {
            return this._applyCombination(polyad, [4]);
          }
        };
        tinycolor.fromRatio = function(color, opts) {
          if (_typeof(color) == "object") {
            var newColor = {};
            for (var i in color) {
              if (color.hasOwnProperty(i)) {
                if (i === "a") {
                  newColor[i] = color[i];
                } else {
                  newColor[i] = convertToPercentage(color[i]);
                }
              }
            }
            color = newColor;
          }
          return tinycolor(color, opts);
        };
        function inputToRGB(color) {
          var rgb = {
            r: 0,
            g: 0,
            b: 0
          };
          var a = 1;
          var s = null;
          var v = null;
          var l = null;
          var ok = false;
          var format = false;
          if (typeof color == "string") {
            color = stringInputToObject(color);
          }
          if (_typeof(color) == "object") {
            if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
              rgb = rgbToRgb(color.r, color.g, color.b);
              ok = true;
              format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
              s = convertToPercentage(color.s);
              v = convertToPercentage(color.v);
              rgb = hsvToRgb(color.h, s, v);
              ok = true;
              format = "hsv";
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
              s = convertToPercentage(color.s);
              l = convertToPercentage(color.l);
              rgb = hslToRgb(color.h, s, l);
              ok = true;
              format = "hsl";
            }
            if (color.hasOwnProperty("a")) {
              a = color.a;
            }
          }
          a = boundAlpha(a);
          return {
            ok,
            format: color.format || format,
            r: Math.min(255, Math.max(rgb.r, 0)),
            g: Math.min(255, Math.max(rgb.g, 0)),
            b: Math.min(255, Math.max(rgb.b, 0)),
            a
          };
        }
        function rgbToRgb(r, g, b) {
          return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
          };
        }
        function rgbToHsl(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max = Math.max(r, g, b), min = Math.min(r, g, b);
          var h, s, l = (max + min) / 2;
          if (max == min) {
            h = s = 0;
          } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
          }
          return {
            h,
            s,
            l
          };
        }
        function hslToRgb(h, s, l) {
          var r, g, b;
          h = bound01(h, 360);
          s = bound01(s, 100);
          l = bound01(l, 100);
          function hue2rgb(p2, q2, t) {
            if (t < 0)
              t += 1;
            if (t > 1)
              t -= 1;
            if (t < 1 / 6)
              return p2 + (q2 - p2) * 6 * t;
            if (t < 1 / 2)
              return q2;
            if (t < 2 / 3)
              return p2 + (q2 - p2) * (2 / 3 - t) * 6;
            return p2;
          }
          if (s === 0) {
            r = g = b = l;
          } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }
          return {
            r: r * 255,
            g: g * 255,
            b: b * 255
          };
        }
        function rgbToHsv(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max = Math.max(r, g, b), min = Math.min(r, g, b);
          var h, s, v = max;
          var d = max - min;
          s = max === 0 ? 0 : d / max;
          if (max == min) {
            h = 0;
          } else {
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
          }
          return {
            h,
            s,
            v
          };
        }
        function hsvToRgb(h, s, v) {
          h = bound01(h, 360) * 6;
          s = bound01(s, 100);
          v = bound01(v, 100);
          var i = Math.floor(h), f = h - i, p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s), mod = i % 6, r = [v, q, p, p, t, v][mod], g = [t, v, v, q, p, p][mod], b = [p, p, t, v, v, q][mod];
          return {
            r: r * 255,
            g: g * 255,
            b: b * 255
          };
        }
        function rgbToHex(r, g, b, allow3Char) {
          var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
          if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
          }
          return hex.join("");
        }
        function rgbaToHex(r, g, b, a, allow4Char) {
          var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
          if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
          }
          return hex.join("");
        }
        function rgbaToArgbHex(r, g, b, a) {
          var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
          return hex.join("");
        }
        tinycolor.equals = function(color1, color2) {
          if (!color1 || !color2)
            return false;
          return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
        };
        tinycolor.random = function() {
          return tinycolor.fromRatio({
            r: Math.random(),
            g: Math.random(),
            b: Math.random()
          });
        };
        function _desaturate(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.s -= amount / 100;
          hsl.s = clamp01(hsl.s);
          return tinycolor(hsl);
        }
        function _saturate(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.s += amount / 100;
          hsl.s = clamp01(hsl.s);
          return tinycolor(hsl);
        }
        function _greyscale(color) {
          return tinycolor(color).desaturate(100);
        }
        function _lighten(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.l += amount / 100;
          hsl.l = clamp01(hsl.l);
          return tinycolor(hsl);
        }
        function _brighten(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var rgb = tinycolor(color).toRgb();
          rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
          rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
          rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
          return tinycolor(rgb);
        }
        function _darken(color, amount) {
          amount = amount === 0 ? 0 : amount || 10;
          var hsl = tinycolor(color).toHsl();
          hsl.l -= amount / 100;
          hsl.l = clamp01(hsl.l);
          return tinycolor(hsl);
        }
        function _spin(color, amount) {
          var hsl = tinycolor(color).toHsl();
          var hue = (hsl.h + amount) % 360;
          hsl.h = hue < 0 ? 360 + hue : hue;
          return tinycolor(hsl);
        }
        function _complement(color) {
          var hsl = tinycolor(color).toHsl();
          hsl.h = (hsl.h + 180) % 360;
          return tinycolor(hsl);
        }
        function polyad(color, number) {
          if (isNaN(number) || number <= 0) {
            throw new Error("Argument to polyad must be a positive number");
          }
          var hsl = tinycolor(color).toHsl();
          var result = [tinycolor(color)];
          var step = 360 / number;
          for (var i = 1; i < number; i++) {
            result.push(tinycolor({
              h: (hsl.h + i * step) % 360,
              s: hsl.s,
              l: hsl.l
            }));
          }
          return result;
        }
        function _splitcomplement(color) {
          var hsl = tinycolor(color).toHsl();
          var h = hsl.h;
          return [tinycolor(color), tinycolor({
            h: (h + 72) % 360,
            s: hsl.s,
            l: hsl.l
          }), tinycolor({
            h: (h + 216) % 360,
            s: hsl.s,
            l: hsl.l
          })];
        }
        function _analogous(color, results, slices) {
          results = results || 6;
          slices = slices || 30;
          var hsl = tinycolor(color).toHsl();
          var part = 360 / slices;
          var ret = [tinycolor(color)];
          for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
            hsl.h = (hsl.h + part) % 360;
            ret.push(tinycolor(hsl));
          }
          return ret;
        }
        function _monochromatic(color, results) {
          results = results || 6;
          var hsv = tinycolor(color).toHsv();
          var h = hsv.h, s = hsv.s, v = hsv.v;
          var ret = [];
          var modification = 1 / results;
          while (results--) {
            ret.push(tinycolor({
              h,
              s,
              v
            }));
            v = (v + modification) % 1;
          }
          return ret;
        }
        tinycolor.mix = function(color1, color2, amount) {
          amount = amount === 0 ? 0 : amount || 50;
          var rgb1 = tinycolor(color1).toRgb();
          var rgb2 = tinycolor(color2).toRgb();
          var p = amount / 100;
          var rgba = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b,
            a: (rgb2.a - rgb1.a) * p + rgb1.a
          };
          return tinycolor(rgba);
        };
        tinycolor.readability = function(color1, color2) {
          var c1 = tinycolor(color1);
          var c2 = tinycolor(color2);
          return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
        };
        tinycolor.isReadable = function(color1, color2, wcag2) {
          var readability = tinycolor.readability(color1, color2);
          var wcag2Parms, out;
          out = false;
          wcag2Parms = validateWCAG2Parms(wcag2);
          switch (wcag2Parms.level + wcag2Parms.size) {
            case "AAsmall":
            case "AAAlarge":
              out = readability >= 4.5;
              break;
            case "AAlarge":
              out = readability >= 3;
              break;
            case "AAAsmall":
              out = readability >= 7;
              break;
          }
          return out;
        };
        tinycolor.mostReadable = function(baseColor, colorList, args) {
          var bestColor = null;
          var bestScore = 0;
          var readability;
          var includeFallbackColors, level, size;
          args = args || {};
          includeFallbackColors = args.includeFallbackColors;
          level = args.level;
          size = args.size;
          for (var i = 0; i < colorList.length; i++) {
            readability = tinycolor.readability(baseColor, colorList[i]);
            if (readability > bestScore) {
              bestScore = readability;
              bestColor = tinycolor(colorList[i]);
            }
          }
          if (tinycolor.isReadable(baseColor, bestColor, {
            level,
            size
          }) || !includeFallbackColors) {
            return bestColor;
          } else {
            args.includeFallbackColors = false;
            return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
          }
        };
        var names = tinycolor.names = {
          aliceblue: "f0f8ff",
          antiquewhite: "faebd7",
          aqua: "0ff",
          aquamarine: "7fffd4",
          azure: "f0ffff",
          beige: "f5f5dc",
          bisque: "ffe4c4",
          black: "000",
          blanchedalmond: "ffebcd",
          blue: "00f",
          blueviolet: "8a2be2",
          brown: "a52a2a",
          burlywood: "deb887",
          burntsienna: "ea7e5d",
          cadetblue: "5f9ea0",
          chartreuse: "7fff00",
          chocolate: "d2691e",
          coral: "ff7f50",
          cornflowerblue: "6495ed",
          cornsilk: "fff8dc",
          crimson: "dc143c",
          cyan: "0ff",
          darkblue: "00008b",
          darkcyan: "008b8b",
          darkgoldenrod: "b8860b",
          darkgray: "a9a9a9",
          darkgreen: "006400",
          darkgrey: "a9a9a9",
          darkkhaki: "bdb76b",
          darkmagenta: "8b008b",
          darkolivegreen: "556b2f",
          darkorange: "ff8c00",
          darkorchid: "9932cc",
          darkred: "8b0000",
          darksalmon: "e9967a",
          darkseagreen: "8fbc8f",
          darkslateblue: "483d8b",
          darkslategray: "2f4f4f",
          darkslategrey: "2f4f4f",
          darkturquoise: "00ced1",
          darkviolet: "9400d3",
          deeppink: "ff1493",
          deepskyblue: "00bfff",
          dimgray: "696969",
          dimgrey: "696969",
          dodgerblue: "1e90ff",
          firebrick: "b22222",
          floralwhite: "fffaf0",
          forestgreen: "228b22",
          fuchsia: "f0f",
          gainsboro: "dcdcdc",
          ghostwhite: "f8f8ff",
          gold: "ffd700",
          goldenrod: "daa520",
          gray: "808080",
          green: "008000",
          greenyellow: "adff2f",
          grey: "808080",
          honeydew: "f0fff0",
          hotpink: "ff69b4",
          indianred: "cd5c5c",
          indigo: "4b0082",
          ivory: "fffff0",
          khaki: "f0e68c",
          lavender: "e6e6fa",
          lavenderblush: "fff0f5",
          lawngreen: "7cfc00",
          lemonchiffon: "fffacd",
          lightblue: "add8e6",
          lightcoral: "f08080",
          lightcyan: "e0ffff",
          lightgoldenrodyellow: "fafad2",
          lightgray: "d3d3d3",
          lightgreen: "90ee90",
          lightgrey: "d3d3d3",
          lightpink: "ffb6c1",
          lightsalmon: "ffa07a",
          lightseagreen: "20b2aa",
          lightskyblue: "87cefa",
          lightslategray: "789",
          lightslategrey: "789",
          lightsteelblue: "b0c4de",
          lightyellow: "ffffe0",
          lime: "0f0",
          limegreen: "32cd32",
          linen: "faf0e6",
          magenta: "f0f",
          maroon: "800000",
          mediumaquamarine: "66cdaa",
          mediumblue: "0000cd",
          mediumorchid: "ba55d3",
          mediumpurple: "9370db",
          mediumseagreen: "3cb371",
          mediumslateblue: "7b68ee",
          mediumspringgreen: "00fa9a",
          mediumturquoise: "48d1cc",
          mediumvioletred: "c71585",
          midnightblue: "191970",
          mintcream: "f5fffa",
          mistyrose: "ffe4e1",
          moccasin: "ffe4b5",
          navajowhite: "ffdead",
          navy: "000080",
          oldlace: "fdf5e6",
          olive: "808000",
          olivedrab: "6b8e23",
          orange: "ffa500",
          orangered: "ff4500",
          orchid: "da70d6",
          palegoldenrod: "eee8aa",
          palegreen: "98fb98",
          paleturquoise: "afeeee",
          palevioletred: "db7093",
          papayawhip: "ffefd5",
          peachpuff: "ffdab9",
          peru: "cd853f",
          pink: "ffc0cb",
          plum: "dda0dd",
          powderblue: "b0e0e6",
          purple: "800080",
          rebeccapurple: "663399",
          red: "f00",
          rosybrown: "bc8f8f",
          royalblue: "4169e1",
          saddlebrown: "8b4513",
          salmon: "fa8072",
          sandybrown: "f4a460",
          seagreen: "2e8b57",
          seashell: "fff5ee",
          sienna: "a0522d",
          silver: "c0c0c0",
          skyblue: "87ceeb",
          slateblue: "6a5acd",
          slategray: "708090",
          slategrey: "708090",
          snow: "fffafa",
          springgreen: "00ff7f",
          steelblue: "4682b4",
          tan: "d2b48c",
          teal: "008080",
          thistle: "d8bfd8",
          tomato: "ff6347",
          turquoise: "40e0d0",
          violet: "ee82ee",
          wheat: "f5deb3",
          white: "fff",
          whitesmoke: "f5f5f5",
          yellow: "ff0",
          yellowgreen: "9acd32"
        };
        var hexNames = tinycolor.hexNames = flip(names);
        function flip(o) {
          var flipped = {};
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              flipped[o[i]] = i;
            }
          }
          return flipped;
        }
        function boundAlpha(a) {
          a = parseFloat(a);
          if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
          }
          return a;
        }
        function bound01(n, max) {
          if (isOnePointZero(n))
            n = "100%";
          var processPercent = isPercentage(n);
          n = Math.min(max, Math.max(0, parseFloat(n)));
          if (processPercent) {
            n = parseInt(n * max, 10) / 100;
          }
          if (Math.abs(n - max) < 1e-6) {
            return 1;
          }
          return n % max / parseFloat(max);
        }
        function clamp01(val) {
          return Math.min(1, Math.max(0, val));
        }
        function parseIntFromHex(val) {
          return parseInt(val, 16);
        }
        function isOnePointZero(n) {
          return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
        }
        function isPercentage(n) {
          return typeof n === "string" && n.indexOf("%") != -1;
        }
        function pad2(c) {
          return c.length == 1 ? "0" + c : "" + c;
        }
        function convertToPercentage(n) {
          if (n <= 1) {
            n = n * 100 + "%";
          }
          return n;
        }
        function convertDecimalToHex(d) {
          return Math.round(parseFloat(d) * 255).toString(16);
        }
        function convertHexToDecimal(h) {
          return parseIntFromHex(h) / 255;
        }
        var matchers = function() {
          var CSS_INTEGER = "[-\\+]?\\d+%?";
          var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
          var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
          var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
          var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
          return {
            CSS_UNIT: new RegExp(CSS_UNIT),
            rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
            rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
            hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
            hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
            hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
            hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
            hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
            hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
          };
        }();
        function isValidCSSUnit(color) {
          return !!matchers.CSS_UNIT.exec(color);
        }
        function stringInputToObject(color) {
          color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
          var named = false;
          if (names[color]) {
            color = names[color];
            named = true;
          } else if (color == "transparent") {
            return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              format: "name"
            };
          }
          var match;
          if (match = matchers.rgb.exec(color)) {
            return {
              r: match[1],
              g: match[2],
              b: match[3]
            };
          }
          if (match = matchers.rgba.exec(color)) {
            return {
              r: match[1],
              g: match[2],
              b: match[3],
              a: match[4]
            };
          }
          if (match = matchers.hsl.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              l: match[3]
            };
          }
          if (match = matchers.hsla.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              l: match[3],
              a: match[4]
            };
          }
          if (match = matchers.hsv.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              v: match[3]
            };
          }
          if (match = matchers.hsva.exec(color)) {
            return {
              h: match[1],
              s: match[2],
              v: match[3],
              a: match[4]
            };
          }
          if (match = matchers.hex8.exec(color)) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              a: convertHexToDecimal(match[4]),
              format: named ? "name" : "hex8"
            };
          }
          if (match = matchers.hex6.exec(color)) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              format: named ? "name" : "hex"
            };
          }
          if (match = matchers.hex4.exec(color)) {
            return {
              r: parseIntFromHex(match[1] + "" + match[1]),
              g: parseIntFromHex(match[2] + "" + match[2]),
              b: parseIntFromHex(match[3] + "" + match[3]),
              a: convertHexToDecimal(match[4] + "" + match[4]),
              format: named ? "name" : "hex8"
            };
          }
          if (match = matchers.hex3.exec(color)) {
            return {
              r: parseIntFromHex(match[1] + "" + match[1]),
              g: parseIntFromHex(match[2] + "" + match[2]),
              b: parseIntFromHex(match[3] + "" + match[3]),
              format: named ? "name" : "hex"
            };
          }
          return false;
        }
        function validateWCAG2Parms(parms) {
          var level, size;
          parms = parms || {
            level: "AA",
            size: "small"
          };
          level = (parms.level || "AA").toUpperCase();
          size = (parms.size || "small").toLowerCase();
          if (level !== "AA" && level !== "AAA") {
            level = "AA";
          }
          if (size !== "small" && size !== "large") {
            size = "small";
          }
          return {
            level,
            size
          };
        }
        return tinycolor;
      });
    }
  });

  // node_modules/react-color/lib/helpers/color.js
  var require_color = __commonJS({
    "node_modules/react-color/lib/helpers/color.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.isvalidColorString = exports.red = exports.getContrastingColor = exports.isValidHex = exports.toState = exports.simpleCheckForValidColor = void 0;
      var _each = require_each();
      var _each2 = _interopRequireDefault(_each);
      var _tinycolor = require_tinycolor();
      var _tinycolor2 = _interopRequireDefault(_tinycolor);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var simpleCheckForValidColor = exports.simpleCheckForValidColor = function simpleCheckForValidColor2(data) {
        var keysToCheck = ["r", "g", "b", "a", "h", "s", "l", "v"];
        var checked = 0;
        var passed = 0;
        (0, _each2.default)(keysToCheck, function(letter) {
          if (data[letter]) {
            checked += 1;
            if (!isNaN(data[letter])) {
              passed += 1;
            }
            if (letter === "s" || letter === "l") {
              var percentPatt = /^\d+%$/;
              if (percentPatt.test(data[letter])) {
                passed += 1;
              }
            }
          }
        });
        return checked === passed ? data : false;
      };
      var toState = exports.toState = function toState2(data, oldHue) {
        var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
        var hsl = color.toHsl();
        var hsv = color.toHsv();
        var rgb = color.toRgb();
        var hex = color.toHex();
        if (hsl.s === 0) {
          hsl.h = oldHue || 0;
          hsv.h = oldHue || 0;
        }
        var transparent = hex === "000000" && rgb.a === 0;
        return {
          hsl,
          hex: transparent ? "transparent" : "#" + hex,
          rgb,
          hsv,
          oldHue: data.h || oldHue || hsl.h,
          source: data.source
        };
      };
      var isValidHex = exports.isValidHex = function isValidHex2(hex) {
        if (hex === "transparent") {
          return true;
        }
        var lh = String(hex).charAt(0) === "#" ? 1 : 0;
        return hex.length !== 4 + lh && hex.length < 7 + lh && (0, _tinycolor2.default)(hex).isValid();
      };
      var getContrastingColor = exports.getContrastingColor = function getContrastingColor2(data) {
        if (!data) {
          return "#fff";
        }
        var col = toState(data);
        if (col.hex === "transparent") {
          return "rgba(0,0,0,0.4)";
        }
        var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1e3;
        return yiq >= 128 ? "#000" : "#fff";
      };
      var red = exports.red = {
        hsl: { a: 1, h: 0, l: 0.5, s: 1 },
        hex: "#ff0000",
        rgb: { r: 255, g: 0, b: 0, a: 1 },
        hsv: { h: 0, s: 1, v: 1, a: 1 }
      };
      var isvalidColorString = exports.isvalidColorString = function isvalidColorString2(string, type) {
        var stringWithoutDegree = string.replace("\xB0", "");
        return (0, _tinycolor2.default)(type + " (" + stringWithoutDegree + ")")._ok;
      };
    }
  });

  // node_modules/react-color/lib/components/common/ColorWrap.js
  var require_ColorWrap = __commonJS({
    "node_modules/react-color/lib/components/common/ColorWrap.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ColorWrap = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _debounce = require_debounce();
      var _debounce2 = _interopRequireDefault(_debounce);
      var _color = require_color();
      var color = _interopRequireWildcard(_color);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var ColorWrap = exports.ColorWrap = function ColorWrap2(Picker) {
        var ColorPicker = function(_ref) {
          _inherits(ColorPicker2, _ref);
          function ColorPicker2(props) {
            _classCallCheck(this, ColorPicker2);
            var _this = _possibleConstructorReturn(this, (ColorPicker2.__proto__ || Object.getPrototypeOf(ColorPicker2)).call(this));
            _this.handleChange = function(data, event) {
              var isValidColor = color.simpleCheckForValidColor(data);
              if (isValidColor) {
                var colors = color.toState(data, data.h || _this.state.oldHue);
                _this.setState(colors);
                _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
                _this.props.onChange && _this.props.onChange(colors, event);
              }
            };
            _this.handleSwatchHover = function(data, event) {
              var isValidColor = color.simpleCheckForValidColor(data);
              if (isValidColor) {
                var colors = color.toState(data, data.h || _this.state.oldHue);
                _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
              }
            };
            _this.state = _extends({}, color.toState(props.color, 0));
            _this.debounce = (0, _debounce2.default)(function(fn, data, event) {
              fn(data, event);
            }, 100);
            return _this;
          }
          _createClass(ColorPicker2, [{
            key: "render",
            value: function render() {
              var optionalEvents = {};
              if (this.props.onSwatchHover) {
                optionalEvents.onSwatchHover = this.handleSwatchHover;
              }
              return _react2.default.createElement(Picker, _extends({}, this.props, this.state, {
                onChange: this.handleChange
              }, optionalEvents));
            }
          }], [{
            key: "getDerivedStateFromProps",
            value: function getDerivedStateFromProps(nextProps, state) {
              return _extends({}, color.toState(nextProps.color, state.oldHue));
            }
          }]);
          return ColorPicker2;
        }(_react.PureComponent || _react.Component);
        ColorPicker.propTypes = _extends({}, Picker.propTypes);
        ColorPicker.defaultProps = _extends({}, Picker.defaultProps, {
          color: {
            h: 250,
            s: 0.5,
            l: 0.2,
            a: 1
          }
        });
        return ColorPicker;
      };
      exports.default = ColorWrap;
    }
  });

  // node_modules/react-color/lib/helpers/interaction.js
  var require_interaction = __commonJS({
    "node_modules/react-color/lib/helpers/interaction.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.handleFocus = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var handleFocus = exports.handleFocus = function handleFocus2(Component) {
        var Span = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
        return function(_React$Component) {
          _inherits(Focus, _React$Component);
          function Focus() {
            var _ref;
            var _temp, _this, _ret;
            _classCallCheck(this, Focus);
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function() {
              return _this.setState({ focus: true });
            }, _this.handleBlur = function() {
              return _this.setState({ focus: false });
            }, _temp), _possibleConstructorReturn(_this, _ret);
          }
          _createClass(Focus, [{
            key: "render",
            value: function render() {
              return _react2.default.createElement(
                Span,
                { onFocus: this.handleFocus, onBlur: this.handleBlur },
                _react2.default.createElement(Component, _extends({}, this.props, this.state))
              );
            }
          }]);
          return Focus;
        }(_react2.default.Component);
      };
    }
  });

  // node_modules/react-color/lib/components/common/Swatch.js
  var require_Swatch = __commonJS({
    "node_modules/react-color/lib/components/common/Swatch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Swatch = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _interaction = require_interaction();
      var _Checkboard = require_Checkboard();
      var _Checkboard2 = _interopRequireDefault(_Checkboard);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var ENTER = 13;
      var Swatch = exports.Swatch = function Swatch2(_ref) {
        var color = _ref.color, style = _ref.style, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
        } : _ref$onClick, onHover = _ref.onHover, _ref$title = _ref.title, title = _ref$title === void 0 ? color : _ref$title, children = _ref.children, focus = _ref.focus, _ref$focusStyle = _ref.focusStyle, focusStyle = _ref$focusStyle === void 0 ? {} : _ref$focusStyle;
        var transparent = color === "transparent";
        var styles = (0, _reactcss2.default)({
          default: {
            swatch: _extends({
              background: color,
              height: "100%",
              width: "100%",
              cursor: "pointer",
              position: "relative",
              outline: "none"
            }, style, focus ? focusStyle : {})
          }
        });
        var handleClick = function handleClick2(e) {
          return onClick(color, e);
        };
        var handleKeyDown = function handleKeyDown2(e) {
          return e.keyCode === ENTER && onClick(color, e);
        };
        var handleHover = function handleHover2(e) {
          return onHover(color, e);
        };
        var optionalEvents = {};
        if (onHover) {
          optionalEvents.onMouseOver = handleHover;
        }
        return _react2.default.createElement(
          "div",
          _extends({
            style: styles.swatch,
            onClick: handleClick,
            title,
            tabIndex: 0,
            onKeyDown: handleKeyDown
          }, optionalEvents),
          children,
          transparent && _react2.default.createElement(_Checkboard2.default, {
            borderRadius: styles.swatch.borderRadius,
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
          })
        );
      };
      exports.default = (0, _interaction.handleFocus)(Swatch);
    }
  });

  // node_modules/react-color/lib/components/common/index.js
  var require_common = __commonJS({
    "node_modules/react-color/lib/components/common/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _Alpha = require_Alpha();
      Object.defineProperty(exports, "Alpha", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Alpha).default;
        }
      });
      var _Checkboard = require_Checkboard();
      Object.defineProperty(exports, "Checkboard", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Checkboard).default;
        }
      });
      var _EditableInput = require_EditableInput();
      Object.defineProperty(exports, "EditableInput", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_EditableInput).default;
        }
      });
      var _Hue = require_Hue();
      Object.defineProperty(exports, "Hue", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Hue).default;
        }
      });
      var _Raised = require_Raised();
      Object.defineProperty(exports, "Raised", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Raised).default;
        }
      });
      var _Saturation = require_Saturation();
      Object.defineProperty(exports, "Saturation", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Saturation).default;
        }
      });
      var _ColorWrap = require_ColorWrap();
      Object.defineProperty(exports, "ColorWrap", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_ColorWrap).default;
        }
      });
      var _Swatch = require_Swatch();
      Object.defineProperty(exports, "Swatch", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Swatch).default;
        }
      });
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
    }
  });

  // node_modules/react-color/lib/components/alpha/AlphaPointer.js
  var require_AlphaPointer = __commonJS({
    "node_modules/react-color/lib/components/alpha/AlphaPointer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AlphaPointer = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var AlphaPointer = exports.AlphaPointer = function AlphaPointer2(_ref) {
        var direction = _ref.direction;
        var styles = (0, _reactcss2.default)({
          "default": {
            picker: {
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              transform: "translate(-9px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
            }
          },
          "vertical": {
            picker: {
              transform: "translate(-3px, -9px)"
            }
          }
        }, { vertical: direction === "vertical" });
        return _react2.default.createElement("div", { style: styles.picker });
      };
      exports.default = AlphaPointer;
    }
  });

  // node_modules/react-color/lib/components/alpha/Alpha.js
  var require_Alpha2 = __commonJS({
    "node_modules/react-color/lib/components/alpha/Alpha.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.AlphaPicker = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _common = require_common();
      var _AlphaPointer = require_AlphaPointer();
      var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var AlphaPicker = exports.AlphaPicker = function AlphaPicker2(_ref) {
        var rgb = _ref.rgb, hsl = _ref.hsl, width = _ref.width, height = _ref.height, onChange = _ref.onChange, direction = _ref.direction, style = _ref.style, renderers = _ref.renderers, pointer = _ref.pointer, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)({
          "default": {
            picker: {
              position: "relative",
              width,
              height
            },
            alpha: {
              radius: "2px",
              style
            }
          }
        });
        return _react2.default.createElement(
          "div",
          { style: styles.picker, className: "alpha-picker " + className },
          _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {
            rgb,
            hsl,
            pointer,
            renderers,
            onChange,
            direction
          }))
        );
      };
      AlphaPicker.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: _AlphaPointer2.default
      };
      exports.default = (0, _common.ColorWrap)(AlphaPicker);
    }
  });

  // node_modules/react-color/lib/components/block/BlockSwatches.js
  var require_BlockSwatches = __commonJS({
    "node_modules/react-color/lib/components/block/BlockSwatches.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.BlockSwatches = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _map = require_map();
      var _map2 = _interopRequireDefault(_map);
      var _common = require_common();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var BlockSwatches = exports.BlockSwatches = function BlockSwatches2(_ref) {
        var colors = _ref.colors, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
        var styles = (0, _reactcss2.default)({
          "default": {
            swatches: {
              marginRight: "-10px"
            },
            swatch: {
              width: "22px",
              height: "22px",
              float: "left",
              marginRight: "10px",
              marginBottom: "10px",
              borderRadius: "4px"
            },
            clear: {
              clear: "both"
            }
          }
        });
        return _react2.default.createElement(
          "div",
          { style: styles.swatches },
          (0, _map2.default)(colors, function(c) {
            return _react2.default.createElement(_common.Swatch, {
              key: c,
              color: c,
              style: styles.swatch,
              onClick,
              onHover: onSwatchHover,
              focusStyle: {
                boxShadow: "0 0 4px " + c
              }
            });
          }),
          _react2.default.createElement("div", { style: styles.clear })
        );
      };
      exports.default = BlockSwatches;
    }
  });

  // node_modules/react-color/lib/components/block/Block.js
  var require_Block = __commonJS({
    "node_modules/react-color/lib/components/block/Block.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Block = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _color = require_color();
      var color = _interopRequireWildcard(_color);
      var _common = require_common();
      var _BlockSwatches = require_BlockSwatches();
      var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Block = exports.Block = function Block2(_ref) {
        var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var transparent = hex === "transparent";
        var handleChange = function handleChange2(hexCode, e) {
          color.isValidHex(hexCode) && onChange({
            hex: hexCode,
            source: "hex"
          }, e);
        };
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            card: {
              width,
              background: "#fff",
              boxShadow: "0 1px rgba(0,0,0,.1)",
              borderRadius: "6px",
              position: "relative"
            },
            head: {
              height: "110px",
              background: hex,
              borderRadius: "6px 6px 0 0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative"
            },
            body: {
              padding: "10px"
            },
            label: {
              fontSize: "18px",
              color: color.getContrastingColor(hex),
              position: "relative"
            },
            triangle: {
              width: "0px",
              height: "0px",
              borderStyle: "solid",
              borderWidth: "0 10px 10px 10px",
              borderColor: "transparent transparent " + hex + " transparent",
              position: "absolute",
              top: "-10px",
              left: "50%",
              marginLeft: "-10px"
            },
            input: {
              width: "100%",
              fontSize: "12px",
              color: "#666",
              border: "0px",
              outline: "none",
              height: "22px",
              boxShadow: "inset 0 0 0 1px #ddd",
              borderRadius: "4px",
              padding: "0 7px",
              boxSizing: "border-box"
            }
          },
          "hide-triangle": {
            triangle: {
              display: "none"
            }
          }
        }, passedStyles), { "hide-triangle": triangle === "hide" });
        return _react2.default.createElement(
          "div",
          { style: styles.card, className: "block-picker " + className },
          _react2.default.createElement("div", { style: styles.triangle }),
          _react2.default.createElement(
            "div",
            { style: styles.head },
            transparent && _react2.default.createElement(_common.Checkboard, { borderRadius: "6px 6px 0 0" }),
            _react2.default.createElement(
              "div",
              { style: styles.label },
              hex
            )
          ),
          _react2.default.createElement(
            "div",
            { style: styles.body },
            _react2.default.createElement(_BlockSwatches2.default, { colors, onClick: handleChange, onSwatchHover }),
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input },
              value: hex,
              onChange: handleChange
            })
          )
        );
      };
      Block.propTypes = {
        width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
        triangle: _propTypes2.default.oneOf(["top", "hide"]),
        styles: _propTypes2.default.object
      };
      Block.defaultProps = {
        width: 170,
        colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
        triangle: "top",
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(Block);
    }
  });

  // node_modules/material-colors/dist/colors.js
  var require_colors = __commonJS({
    "node_modules/material-colors/dist/colors.js"(exports, module) {
      (function(root, factory) {
        if (typeof define === "function" && define.amd) {
          define([], factory);
        } else if (typeof exports === "object") {
          module.exports = factory();
        } else {
          root.materialColors = factory();
        }
      })(exports, function() {
        return { "red": { "50": "#ffebee", "100": "#ffcdd2", "200": "#ef9a9a", "300": "#e57373", "400": "#ef5350", "500": "#f44336", "600": "#e53935", "700": "#d32f2f", "800": "#c62828", "900": "#b71c1c", "a100": "#ff8a80", "a200": "#ff5252", "a400": "#ff1744", "a700": "#d50000" }, "pink": { "50": "#fce4ec", "100": "#f8bbd0", "200": "#f48fb1", "300": "#f06292", "400": "#ec407a", "500": "#e91e63", "600": "#d81b60", "700": "#c2185b", "800": "#ad1457", "900": "#880e4f", "a100": "#ff80ab", "a200": "#ff4081", "a400": "#f50057", "a700": "#c51162" }, "purple": { "50": "#f3e5f5", "100": "#e1bee7", "200": "#ce93d8", "300": "#ba68c8", "400": "#ab47bc", "500": "#9c27b0", "600": "#8e24aa", "700": "#7b1fa2", "800": "#6a1b9a", "900": "#4a148c", "a100": "#ea80fc", "a200": "#e040fb", "a400": "#d500f9", "a700": "#aa00ff" }, "deepPurple": { "50": "#ede7f6", "100": "#d1c4e9", "200": "#b39ddb", "300": "#9575cd", "400": "#7e57c2", "500": "#673ab7", "600": "#5e35b1", "700": "#512da8", "800": "#4527a0", "900": "#311b92", "a100": "#b388ff", "a200": "#7c4dff", "a400": "#651fff", "a700": "#6200ea" }, "indigo": { "50": "#e8eaf6", "100": "#c5cae9", "200": "#9fa8da", "300": "#7986cb", "400": "#5c6bc0", "500": "#3f51b5", "600": "#3949ab", "700": "#303f9f", "800": "#283593", "900": "#1a237e", "a100": "#8c9eff", "a200": "#536dfe", "a400": "#3d5afe", "a700": "#304ffe" }, "blue": { "50": "#e3f2fd", "100": "#bbdefb", "200": "#90caf9", "300": "#64b5f6", "400": "#42a5f5", "500": "#2196f3", "600": "#1e88e5", "700": "#1976d2", "800": "#1565c0", "900": "#0d47a1", "a100": "#82b1ff", "a200": "#448aff", "a400": "#2979ff", "a700": "#2962ff" }, "lightBlue": { "50": "#e1f5fe", "100": "#b3e5fc", "200": "#81d4fa", "300": "#4fc3f7", "400": "#29b6f6", "500": "#03a9f4", "600": "#039be5", "700": "#0288d1", "800": "#0277bd", "900": "#01579b", "a100": "#80d8ff", "a200": "#40c4ff", "a400": "#00b0ff", "a700": "#0091ea" }, "cyan": { "50": "#e0f7fa", "100": "#b2ebf2", "200": "#80deea", "300": "#4dd0e1", "400": "#26c6da", "500": "#00bcd4", "600": "#00acc1", "700": "#0097a7", "800": "#00838f", "900": "#006064", "a100": "#84ffff", "a200": "#18ffff", "a400": "#00e5ff", "a700": "#00b8d4" }, "teal": { "50": "#e0f2f1", "100": "#b2dfdb", "200": "#80cbc4", "300": "#4db6ac", "400": "#26a69a", "500": "#009688", "600": "#00897b", "700": "#00796b", "800": "#00695c", "900": "#004d40", "a100": "#a7ffeb", "a200": "#64ffda", "a400": "#1de9b6", "a700": "#00bfa5" }, "green": { "50": "#e8f5e9", "100": "#c8e6c9", "200": "#a5d6a7", "300": "#81c784", "400": "#66bb6a", "500": "#4caf50", "600": "#43a047", "700": "#388e3c", "800": "#2e7d32", "900": "#1b5e20", "a100": "#b9f6ca", "a200": "#69f0ae", "a400": "#00e676", "a700": "#00c853" }, "lightGreen": { "50": "#f1f8e9", "100": "#dcedc8", "200": "#c5e1a5", "300": "#aed581", "400": "#9ccc65", "500": "#8bc34a", "600": "#7cb342", "700": "#689f38", "800": "#558b2f", "900": "#33691e", "a100": "#ccff90", "a200": "#b2ff59", "a400": "#76ff03", "a700": "#64dd17" }, "lime": { "50": "#f9fbe7", "100": "#f0f4c3", "200": "#e6ee9c", "300": "#dce775", "400": "#d4e157", "500": "#cddc39", "600": "#c0ca33", "700": "#afb42b", "800": "#9e9d24", "900": "#827717", "a100": "#f4ff81", "a200": "#eeff41", "a400": "#c6ff00", "a700": "#aeea00" }, "yellow": { "50": "#fffde7", "100": "#fff9c4", "200": "#fff59d", "300": "#fff176", "400": "#ffee58", "500": "#ffeb3b", "600": "#fdd835", "700": "#fbc02d", "800": "#f9a825", "900": "#f57f17", "a100": "#ffff8d", "a200": "#ffff00", "a400": "#ffea00", "a700": "#ffd600" }, "amber": { "50": "#fff8e1", "100": "#ffecb3", "200": "#ffe082", "300": "#ffd54f", "400": "#ffca28", "500": "#ffc107", "600": "#ffb300", "700": "#ffa000", "800": "#ff8f00", "900": "#ff6f00", "a100": "#ffe57f", "a200": "#ffd740", "a400": "#ffc400", "a700": "#ffab00" }, "orange": { "50": "#fff3e0", "100": "#ffe0b2", "200": "#ffcc80", "300": "#ffb74d", "400": "#ffa726", "500": "#ff9800", "600": "#fb8c00", "700": "#f57c00", "800": "#ef6c00", "900": "#e65100", "a100": "#ffd180", "a200": "#ffab40", "a400": "#ff9100", "a700": "#ff6d00" }, "deepOrange": { "50": "#fbe9e7", "100": "#ffccbc", "200": "#ffab91", "300": "#ff8a65", "400": "#ff7043", "500": "#ff5722", "600": "#f4511e", "700": "#e64a19", "800": "#d84315", "900": "#bf360c", "a100": "#ff9e80", "a200": "#ff6e40", "a400": "#ff3d00", "a700": "#dd2c00" }, "brown": { "50": "#efebe9", "100": "#d7ccc8", "200": "#bcaaa4", "300": "#a1887f", "400": "#8d6e63", "500": "#795548", "600": "#6d4c41", "700": "#5d4037", "800": "#4e342e", "900": "#3e2723" }, "grey": { "50": "#fafafa", "100": "#f5f5f5", "200": "#eeeeee", "300": "#e0e0e0", "400": "#bdbdbd", "500": "#9e9e9e", "600": "#757575", "700": "#616161", "800": "#424242", "900": "#212121" }, "blueGrey": { "50": "#eceff1", "100": "#cfd8dc", "200": "#b0bec5", "300": "#90a4ae", "400": "#78909c", "500": "#607d8b", "600": "#546e7a", "700": "#455a64", "800": "#37474f", "900": "#263238" }, "darkText": { "primary": "rgba(0, 0, 0, 0.87)", "secondary": "rgba(0, 0, 0, 0.54)", "disabled": "rgba(0, 0, 0, 0.38)", "dividers": "rgba(0, 0, 0, 0.12)" }, "lightText": { "primary": "rgba(255, 255, 255, 1)", "secondary": "rgba(255, 255, 255, 0.7)", "disabled": "rgba(255, 255, 255, 0.5)", "dividers": "rgba(255, 255, 255, 0.12)" }, "darkIcons": { "active": "rgba(0, 0, 0, 0.54)", "inactive": "rgba(0, 0, 0, 0.38)" }, "lightIcons": { "active": "rgba(255, 255, 255, 1)", "inactive": "rgba(255, 255, 255, 0.5)" }, "white": "#ffffff", "black": "#000000" };
      });
    }
  });

  // node_modules/react-color/lib/components/circle/CircleSwatch.js
  var require_CircleSwatch = __commonJS({
    "node_modules/react-color/lib/components/circle/CircleSwatch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CircleSwatch = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _common = require_common();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var CircleSwatch = exports.CircleSwatch = function CircleSwatch2(_ref) {
        var color = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, hover = _ref.hover, active = _ref.active, circleSize = _ref.circleSize, circleSpacing = _ref.circleSpacing;
        var styles = (0, _reactcss2.default)({
          "default": {
            swatch: {
              width: circleSize,
              height: circleSize,
              marginRight: circleSpacing,
              marginBottom: circleSpacing,
              transform: "scale(1)",
              transition: "100ms transform ease"
            },
            Swatch: {
              borderRadius: "50%",
              background: "transparent",
              boxShadow: "inset 0 0 0 " + (circleSize / 2 + 1) + "px " + color,
              transition: "100ms box-shadow ease"
            }
          },
          "hover": {
            swatch: {
              transform: "scale(1.2)"
            }
          },
          "active": {
            Swatch: {
              boxShadow: "inset 0 0 0 3px " + color
            }
          }
        }, { hover, active });
        return _react2.default.createElement(
          "div",
          { style: styles.swatch },
          _react2.default.createElement(_common.Swatch, {
            style: styles.Swatch,
            color,
            onClick,
            onHover: onSwatchHover,
            focusStyle: { boxShadow: styles.Swatch.boxShadow + ", 0 0 5px " + color }
          })
        );
      };
      CircleSwatch.defaultProps = {
        circleSize: 28,
        circleSpacing: 14
      };
      exports.default = (0, _reactcss.handleHover)(CircleSwatch);
    }
  });

  // node_modules/react-color/lib/components/circle/Circle.js
  var require_Circle = __commonJS({
    "node_modules/react-color/lib/components/circle/Circle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Circle = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _map = require_map();
      var _map2 = _interopRequireDefault(_map);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _materialColors = require_colors();
      var material = _interopRequireWildcard(_materialColors);
      var _common = require_common();
      var _CircleSwatch = require_CircleSwatch();
      var _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Circle = exports.Circle = function Circle2(_ref) {
        var width = _ref.width, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, circleSize = _ref.circleSize, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, circleSpacing = _ref.circleSpacing, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            card: {
              width,
              display: "flex",
              flexWrap: "wrap",
              marginRight: -circleSpacing,
              marginBottom: -circleSpacing
            }
          }
        }, passedStyles));
        var handleChange = function handleChange2(hexCode, e) {
          return onChange({ hex: hexCode, source: "hex" }, e);
        };
        return _react2.default.createElement(
          "div",
          { style: styles.card, className: "circle-picker " + className },
          (0, _map2.default)(colors, function(c) {
            return _react2.default.createElement(_CircleSwatch2.default, {
              key: c,
              color: c,
              onClick: handleChange,
              onSwatchHover,
              active: hex === c.toLowerCase(),
              circleSize,
              circleSpacing
            });
          })
        );
      };
      Circle.propTypes = {
        width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        circleSize: _propTypes2.default.number,
        circleSpacing: _propTypes2.default.number,
        styles: _propTypes2.default.object
      };
      Circle.defaultProps = {
        width: 252,
        circleSize: 28,
        circleSpacing: 14,
        colors: [material.red["500"], material.pink["500"], material.purple["500"], material.deepPurple["500"], material.indigo["500"], material.blue["500"], material.lightBlue["500"], material.cyan["500"], material.teal["500"], material.green["500"], material.lightGreen["500"], material.lime["500"], material.yellow["500"], material.amber["500"], material.orange["500"], material.deepOrange["500"], material.brown["500"], material.blueGrey["500"]],
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(Circle);
    }
  });

  // node_modules/lodash/isUndefined.js
  var require_isUndefined = __commonJS({
    "node_modules/lodash/isUndefined.js"(exports, module) {
      function isUndefined(value) {
        return value === void 0;
      }
      module.exports = isUndefined;
    }
  });

  // node_modules/@icons/material/UnfoldMoreHorizontalIcon.js
  var require_UnfoldMoreHorizontalIcon = __commonJS({
    "node_modules/@icons/material/UnfoldMoreHorizontalIcon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      var DEFAULT_SIZE = 24;
      exports.default = function(_ref) {
        var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties(_ref, ["fill", "width", "height", "style"]);
        return _react2.default.createElement(
          "svg",
          _extends({
            viewBox: "0 0 " + DEFAULT_SIZE + " " + DEFAULT_SIZE,
            style: _extends({ fill, width, height }, style)
          }, props),
          _react2.default.createElement("path", { d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z" })
        );
      };
    }
  });

  // node_modules/react-color/lib/components/chrome/ChromeFields.js
  var require_ChromeFields = __commonJS({
    "node_modules/react-color/lib/components/chrome/ChromeFields.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ChromeFields = void 0;
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _color = require_color();
      var color = _interopRequireWildcard(_color);
      var _isUndefined = require_isUndefined();
      var _isUndefined2 = _interopRequireDefault(_isUndefined);
      var _common = require_common();
      var _UnfoldMoreHorizontalIcon = require_UnfoldMoreHorizontalIcon();
      var _UnfoldMoreHorizontalIcon2 = _interopRequireDefault(_UnfoldMoreHorizontalIcon);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var ChromeFields = exports.ChromeFields = function(_React$Component) {
        _inherits(ChromeFields2, _React$Component);
        function ChromeFields2(props) {
          _classCallCheck(this, ChromeFields2);
          var _this = _possibleConstructorReturn(this, (ChromeFields2.__proto__ || Object.getPrototypeOf(ChromeFields2)).call(this));
          _this.toggleViews = function() {
            if (_this.state.view === "hex") {
              _this.setState({ view: "rgb" });
            } else if (_this.state.view === "rgb") {
              _this.setState({ view: "hsl" });
            } else if (_this.state.view === "hsl") {
              if (_this.props.hsl.a === 1) {
                _this.setState({ view: "hex" });
              } else {
                _this.setState({ view: "rgb" });
              }
            }
          };
          _this.handleChange = function(data, e) {
            if (data.hex) {
              color.isValidHex(data.hex) && _this.props.onChange({
                hex: data.hex,
                source: "hex"
              }, e);
            } else if (data.r || data.g || data.b) {
              _this.props.onChange({
                r: data.r || _this.props.rgb.r,
                g: data.g || _this.props.rgb.g,
                b: data.b || _this.props.rgb.b,
                source: "rgb"
              }, e);
            } else if (data.a) {
              if (data.a < 0) {
                data.a = 0;
              } else if (data.a > 1) {
                data.a = 1;
              }
              _this.props.onChange({
                h: _this.props.hsl.h,
                s: _this.props.hsl.s,
                l: _this.props.hsl.l,
                a: Math.round(data.a * 100) / 100,
                source: "rgb"
              }, e);
            } else if (data.h || data.s || data.l) {
              if (typeof data.s === "string" && data.s.includes("%")) {
                data.s = data.s.replace("%", "");
              }
              if (typeof data.l === "string" && data.l.includes("%")) {
                data.l = data.l.replace("%", "");
              }
              if (data.s == 1) {
                data.s = 0.01;
              } else if (data.l == 1) {
                data.l = 0.01;
              }
              _this.props.onChange({
                h: data.h || _this.props.hsl.h,
                s: Number(!(0, _isUndefined2.default)(data.s) ? data.s : _this.props.hsl.s),
                l: Number(!(0, _isUndefined2.default)(data.l) ? data.l : _this.props.hsl.l),
                source: "hsl"
              }, e);
            }
          };
          _this.showHighlight = function(e) {
            e.currentTarget.style.background = "#eee";
          };
          _this.hideHighlight = function(e) {
            e.currentTarget.style.background = "transparent";
          };
          if (props.hsl.a !== 1 && props.view === "hex") {
            _this.state = {
              view: "rgb"
            };
          } else {
            _this.state = {
              view: props.view
            };
          }
          return _this;
        }
        _createClass(ChromeFields2, [{
          key: "render",
          value: function render() {
            var _this2 = this;
            var styles = (0, _reactcss2.default)({
              "default": {
                wrap: {
                  paddingTop: "16px",
                  display: "flex"
                },
                fields: {
                  flex: "1",
                  display: "flex",
                  marginLeft: "-6px"
                },
                field: {
                  paddingLeft: "6px",
                  width: "100%"
                },
                alpha: {
                  paddingLeft: "6px",
                  width: "100%"
                },
                toggle: {
                  width: "32px",
                  textAlign: "right",
                  position: "relative"
                },
                icon: {
                  marginRight: "-4px",
                  marginTop: "12px",
                  cursor: "pointer",
                  position: "relative"
                },
                iconHighlight: {
                  position: "absolute",
                  width: "24px",
                  height: "28px",
                  background: "#eee",
                  borderRadius: "4px",
                  top: "10px",
                  left: "12px",
                  display: "none"
                },
                input: {
                  fontSize: "11px",
                  color: "#333",
                  width: "100%",
                  borderRadius: "2px",
                  border: "none",
                  boxShadow: "inset 0 0 0 1px #dadada",
                  height: "21px",
                  textAlign: "center"
                },
                label: {
                  textTransform: "uppercase",
                  fontSize: "11px",
                  lineHeight: "11px",
                  color: "#969696",
                  textAlign: "center",
                  display: "block",
                  marginTop: "12px"
                },
                svg: {
                  fill: "#333",
                  width: "24px",
                  height: "24px",
                  border: "1px transparent solid",
                  borderRadius: "5px"
                }
              },
              "disableAlpha": {
                alpha: {
                  display: "none"
                }
              }
            }, this.props, this.state);
            var fields = void 0;
            if (this.state.view === "hex") {
              fields = _react2.default.createElement(
                "div",
                { style: styles.fields, className: "flexbox-fix" },
                _react2.default.createElement(
                  "div",
                  { style: styles.field },
                  _react2.default.createElement(_common.EditableInput, {
                    style: { input: styles.input, label: styles.label },
                    label: "hex",
                    value: this.props.hex,
                    onChange: this.handleChange
                  })
                )
              );
            } else if (this.state.view === "rgb") {
              fields = _react2.default.createElement(
                "div",
                { style: styles.fields, className: "flexbox-fix" },
                _react2.default.createElement(
                  "div",
                  { style: styles.field },
                  _react2.default.createElement(_common.EditableInput, {
                    style: { input: styles.input, label: styles.label },
                    label: "r",
                    value: this.props.rgb.r,
                    onChange: this.handleChange
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.field },
                  _react2.default.createElement(_common.EditableInput, {
                    style: { input: styles.input, label: styles.label },
                    label: "g",
                    value: this.props.rgb.g,
                    onChange: this.handleChange
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.field },
                  _react2.default.createElement(_common.EditableInput, {
                    style: { input: styles.input, label: styles.label },
                    label: "b",
                    value: this.props.rgb.b,
                    onChange: this.handleChange
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.alpha },
                  _react2.default.createElement(_common.EditableInput, {
                    style: { input: styles.input, label: styles.label },
                    label: "a",
                    value: this.props.rgb.a,
                    arrowOffset: 0.01,
                    onChange: this.handleChange
                  })
                )
              );
            } else if (this.state.view === "hsl") {
              fields = _react2.default.createElement(
                "div",
                { style: styles.fields, className: "flexbox-fix" },
                _react2.default.createElement(
                  "div",
                  { style: styles.field },
                  _react2.default.createElement(_common.EditableInput, {
                    style: { input: styles.input, label: styles.label },
                    label: "h",
                    value: Math.round(this.props.hsl.h),
                    onChange: this.handleChange
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.field },
                  _react2.default.createElement(_common.EditableInput, {
                    style: { input: styles.input, label: styles.label },
                    label: "s",
                    value: Math.round(this.props.hsl.s * 100) + "%",
                    onChange: this.handleChange
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.field },
                  _react2.default.createElement(_common.EditableInput, {
                    style: { input: styles.input, label: styles.label },
                    label: "l",
                    value: Math.round(this.props.hsl.l * 100) + "%",
                    onChange: this.handleChange
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.alpha },
                  _react2.default.createElement(_common.EditableInput, {
                    style: { input: styles.input, label: styles.label },
                    label: "a",
                    value: this.props.hsl.a,
                    arrowOffset: 0.01,
                    onChange: this.handleChange
                  })
                )
              );
            }
            return _react2.default.createElement(
              "div",
              { style: styles.wrap, className: "flexbox-fix" },
              fields,
              _react2.default.createElement(
                "div",
                { style: styles.toggle },
                _react2.default.createElement(
                  "div",
                  { style: styles.icon, onClick: this.toggleViews, ref: function ref(icon) {
                    return _this2.icon = icon;
                  } },
                  _react2.default.createElement(_UnfoldMoreHorizontalIcon2.default, {
                    style: styles.svg,
                    onMouseOver: this.showHighlight,
                    onMouseEnter: this.showHighlight,
                    onMouseOut: this.hideHighlight
                  })
                )
              )
            );
          }
        }], [{
          key: "getDerivedStateFromProps",
          value: function getDerivedStateFromProps(nextProps, state) {
            if (nextProps.hsl.a !== 1 && state.view === "hex") {
              return { view: "rgb" };
            }
            return null;
          }
        }]);
        return ChromeFields2;
      }(_react2.default.Component);
      ChromeFields.defaultProps = {
        view: "hex"
      };
      exports.default = ChromeFields;
    }
  });

  // node_modules/react-color/lib/components/chrome/ChromePointer.js
  var require_ChromePointer = __commonJS({
    "node_modules/react-color/lib/components/chrome/ChromePointer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ChromePointer = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var ChromePointer = exports.ChromePointer = function ChromePointer2() {
        var styles = (0, _reactcss2.default)({
          "default": {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              transform: "translate(-6px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
            }
          }
        });
        return _react2.default.createElement("div", { style: styles.picker });
      };
      exports.default = ChromePointer;
    }
  });

  // node_modules/react-color/lib/components/chrome/ChromePointerCircle.js
  var require_ChromePointerCircle = __commonJS({
    "node_modules/react-color/lib/components/chrome/ChromePointerCircle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.ChromePointerCircle = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var ChromePointerCircle = exports.ChromePointerCircle = function ChromePointerCircle2() {
        var styles = (0, _reactcss2.default)({
          "default": {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 0 1px #fff",
              transform: "translate(-6px, -6px)"
            }
          }
        });
        return _react2.default.createElement("div", { style: styles.picker });
      };
      exports.default = ChromePointerCircle;
    }
  });

  // node_modules/react-color/lib/components/chrome/Chrome.js
  var require_Chrome = __commonJS({
    "node_modules/react-color/lib/components/chrome/Chrome.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Chrome = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _common = require_common();
      var _ChromeFields = require_ChromeFields();
      var _ChromeFields2 = _interopRequireDefault(_ChromeFields);
      var _ChromePointer = require_ChromePointer();
      var _ChromePointer2 = _interopRequireDefault(_ChromePointer);
      var _ChromePointerCircle = require_ChromePointerCircle();
      var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Chrome = exports.Chrome = function Chrome2(_ref) {
        var width = _ref.width, onChange = _ref.onChange, disableAlpha = _ref.disableAlpha, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className, defaultView = _ref.defaultView;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            picker: {
              width,
              background: "#fff",
              borderRadius: "2px",
              boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
              boxSizing: "initial",
              fontFamily: "Menlo"
            },
            saturation: {
              width: "100%",
              paddingBottom: "55%",
              position: "relative",
              borderRadius: "2px 2px 0 0",
              overflow: "hidden"
            },
            Saturation: {
              radius: "2px 2px 0 0"
            },
            body: {
              padding: "16px 16px 12px"
            },
            controls: {
              display: "flex"
            },
            color: {
              width: "32px"
            },
            swatch: {
              marginTop: "6px",
              width: "16px",
              height: "16px",
              borderRadius: "8px",
              position: "relative",
              overflow: "hidden"
            },
            active: {
              absolute: "0px 0px 0px 0px",
              borderRadius: "8px",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
              background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + rgb.a + ")",
              zIndex: "2"
            },
            toggles: {
              flex: "1"
            },
            hue: {
              height: "10px",
              position: "relative",
              marginBottom: "8px"
            },
            Hue: {
              radius: "2px"
            },
            alpha: {
              height: "10px",
              position: "relative"
            },
            Alpha: {
              radius: "2px"
            }
          },
          "disableAlpha": {
            color: {
              width: "22px"
            },
            alpha: {
              display: "none"
            },
            hue: {
              marginBottom: "0px"
            },
            swatch: {
              width: "10px",
              height: "10px",
              marginTop: "0px"
            }
          }
        }, passedStyles), { disableAlpha });
        return _react2.default.createElement(
          "div",
          { style: styles.picker, className: "chrome-picker " + className },
          _react2.default.createElement(
            "div",
            { style: styles.saturation },
            _react2.default.createElement(_common.Saturation, {
              style: styles.Saturation,
              hsl,
              hsv,
              pointer: _ChromePointerCircle2.default,
              onChange
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.body },
            _react2.default.createElement(
              "div",
              { style: styles.controls, className: "flexbox-fix" },
              _react2.default.createElement(
                "div",
                { style: styles.color },
                _react2.default.createElement(
                  "div",
                  { style: styles.swatch },
                  _react2.default.createElement("div", { style: styles.active }),
                  _react2.default.createElement(_common.Checkboard, { renderers })
                )
              ),
              _react2.default.createElement(
                "div",
                { style: styles.toggles },
                _react2.default.createElement(
                  "div",
                  { style: styles.hue },
                  _react2.default.createElement(_common.Hue, {
                    style: styles.Hue,
                    hsl,
                    pointer: _ChromePointer2.default,
                    onChange
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.alpha },
                  _react2.default.createElement(_common.Alpha, {
                    style: styles.Alpha,
                    rgb,
                    hsl,
                    pointer: _ChromePointer2.default,
                    renderers,
                    onChange
                  })
                )
              )
            ),
            _react2.default.createElement(_ChromeFields2.default, {
              rgb,
              hsl,
              hex,
              view: defaultView,
              onChange,
              disableAlpha
            })
          )
        );
      };
      Chrome.propTypes = {
        width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        disableAlpha: _propTypes2.default.bool,
        styles: _propTypes2.default.object,
        defaultView: _propTypes2.default.oneOf(["hex", "rgb", "hsl"])
      };
      Chrome.defaultProps = {
        width: 225,
        disableAlpha: false,
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(Chrome);
    }
  });

  // node_modules/react-color/lib/components/compact/CompactColor.js
  var require_CompactColor = __commonJS({
    "node_modules/react-color/lib/components/compact/CompactColor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CompactColor = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _color = require_color();
      var colorUtils = _interopRequireWildcard(_color);
      var _common = require_common();
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var CompactColor = exports.CompactColor = function CompactColor2(_ref) {
        var color = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
        } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, active = _ref.active;
        var styles = (0, _reactcss2.default)({
          "default": {
            color: {
              background: color,
              width: "15px",
              height: "15px",
              float: "left",
              marginRight: "5px",
              marginBottom: "5px",
              position: "relative",
              cursor: "pointer"
            },
            dot: {
              absolute: "5px 5px 5px 5px",
              background: colorUtils.getContrastingColor(color),
              borderRadius: "50%",
              opacity: "0"
            }
          },
          "active": {
            dot: {
              opacity: "1"
            }
          },
          "color-#FFFFFF": {
            color: {
              boxShadow: "inset 0 0 0 1px #ddd"
            },
            dot: {
              background: "#000"
            }
          },
          "transparent": {
            dot: {
              background: "#000"
            }
          }
        }, { active, "color-#FFFFFF": color === "#FFFFFF", "transparent": color === "transparent" });
        return _react2.default.createElement(
          _common.Swatch,
          {
            style: styles.color,
            color,
            onClick,
            onHover: onSwatchHover,
            focusStyle: { boxShadow: "0 0 4px " + color }
          },
          _react2.default.createElement("div", { style: styles.dot })
        );
      };
      exports.default = CompactColor;
    }
  });

  // node_modules/react-color/lib/components/compact/CompactFields.js
  var require_CompactFields = __commonJS({
    "node_modules/react-color/lib/components/compact/CompactFields.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CompactFields = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _common = require_common();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var CompactFields = exports.CompactFields = function CompactFields2(_ref) {
        var hex = _ref.hex, rgb = _ref.rgb, onChange = _ref.onChange;
        var styles = (0, _reactcss2.default)({
          "default": {
            fields: {
              display: "flex",
              paddingBottom: "6px",
              paddingRight: "5px",
              position: "relative"
            },
            active: {
              position: "absolute",
              top: "6px",
              left: "5px",
              height: "9px",
              width: "9px",
              background: hex
            },
            HEXwrap: {
              flex: "6",
              position: "relative"
            },
            HEXinput: {
              width: "80%",
              padding: "0px",
              paddingLeft: "20%",
              border: "none",
              outline: "none",
              background: "none",
              fontSize: "12px",
              color: "#333",
              height: "16px"
            },
            HEXlabel: {
              display: "none"
            },
            RGBwrap: {
              flex: "3",
              position: "relative"
            },
            RGBinput: {
              width: "70%",
              padding: "0px",
              paddingLeft: "30%",
              border: "none",
              outline: "none",
              background: "none",
              fontSize: "12px",
              color: "#333",
              height: "16px"
            },
            RGBlabel: {
              position: "absolute",
              top: "3px",
              left: "0px",
              lineHeight: "16px",
              textTransform: "uppercase",
              fontSize: "12px",
              color: "#999"
            }
          }
        });
        var handleChange = function handleChange2(data, e) {
          if (data.r || data.g || data.b) {
            onChange({
              r: data.r || rgb.r,
              g: data.g || rgb.g,
              b: data.b || rgb.b,
              source: "rgb"
            }, e);
          } else {
            onChange({
              hex: data.hex,
              source: "hex"
            }, e);
          }
        };
        return _react2.default.createElement(
          "div",
          { style: styles.fields, className: "flexbox-fix" },
          _react2.default.createElement("div", { style: styles.active }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
            label: "hex",
            value: hex,
            onChange: handleChange
          }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "r",
            value: rgb.r,
            onChange: handleChange
          }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "g",
            value: rgb.g,
            onChange: handleChange
          }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "b",
            value: rgb.b,
            onChange: handleChange
          })
        );
      };
      exports.default = CompactFields;
    }
  });

  // node_modules/react-color/lib/components/compact/Compact.js
  var require_Compact = __commonJS({
    "node_modules/react-color/lib/components/compact/Compact.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Compact = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _map = require_map();
      var _map2 = _interopRequireDefault(_map);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _color = require_color();
      var color = _interopRequireWildcard(_color);
      var _common = require_common();
      var _CompactColor = require_CompactColor();
      var _CompactColor2 = _interopRequireDefault(_CompactColor);
      var _CompactFields = require_CompactFields();
      var _CompactFields2 = _interopRequireDefault(_CompactFields);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Compact = exports.Compact = function Compact2(_ref) {
        var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            Compact: {
              background: "#f6f6f6",
              radius: "4px"
            },
            compact: {
              paddingTop: "5px",
              paddingLeft: "5px",
              boxSizing: "initial",
              width: "240px"
            },
            clear: {
              clear: "both"
            }
          }
        }, passedStyles));
        var handleChange = function handleChange2(data, e) {
          if (data.hex) {
            color.isValidHex(data.hex) && onChange({
              hex: data.hex,
              source: "hex"
            }, e);
          } else {
            onChange(data, e);
          }
        };
        return _react2.default.createElement(
          _common.Raised,
          { style: styles.Compact, styles: passedStyles },
          _react2.default.createElement(
            "div",
            { style: styles.compact, className: "compact-picker " + className },
            _react2.default.createElement(
              "div",
              null,
              (0, _map2.default)(colors, function(c) {
                return _react2.default.createElement(_CompactColor2.default, {
                  key: c,
                  color: c,
                  active: c.toLowerCase() === hex,
                  onClick: handleChange,
                  onSwatchHover
                });
              }),
              _react2.default.createElement("div", { style: styles.clear })
            ),
            _react2.default.createElement(_CompactFields2.default, { hex, rgb, onChange: handleChange })
          )
        );
      };
      Compact.propTypes = {
        colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
        styles: _propTypes2.default.object
      };
      Compact.defaultProps = {
        colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(Compact);
    }
  });

  // node_modules/react-color/lib/components/github/GithubSwatch.js
  var require_GithubSwatch = __commonJS({
    "node_modules/react-color/lib/components/github/GithubSwatch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GithubSwatch = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _common = require_common();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var GithubSwatch = exports.GithubSwatch = function GithubSwatch2(_ref) {
        var hover = _ref.hover, color = _ref.color, onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover;
        var hoverSwatch = {
          position: "relative",
          zIndex: "2",
          outline: "2px solid #fff",
          boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
        };
        var styles = (0, _reactcss2.default)({
          "default": {
            swatch: {
              width: "25px",
              height: "25px",
              fontSize: "0"
            }
          },
          "hover": {
            swatch: hoverSwatch
          }
        }, { hover });
        return _react2.default.createElement(
          "div",
          { style: styles.swatch },
          _react2.default.createElement(_common.Swatch, {
            color,
            onClick,
            onHover: onSwatchHover,
            focusStyle: hoverSwatch
          })
        );
      };
      exports.default = (0, _reactcss.handleHover)(GithubSwatch);
    }
  });

  // node_modules/react-color/lib/components/github/Github.js
  var require_Github = __commonJS({
    "node_modules/react-color/lib/components/github/Github.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Github = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _map = require_map();
      var _map2 = _interopRequireDefault(_map);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _common = require_common();
      var _GithubSwatch = require_GithubSwatch();
      var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Github = exports.Github = function Github2(_ref) {
        var width = _ref.width, colors = _ref.colors, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            card: {
              width,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
              borderRadius: "4px",
              position: "relative",
              padding: "5px",
              display: "flex",
              flexWrap: "wrap"
            },
            triangle: {
              position: "absolute",
              border: "7px solid transparent",
              borderBottomColor: "#fff"
            },
            triangleShadow: {
              position: "absolute",
              border: "8px solid transparent",
              borderBottomColor: "rgba(0,0,0,0.15)"
            }
          },
          "hide-triangle": {
            triangle: {
              display: "none"
            },
            triangleShadow: {
              display: "none"
            }
          },
          "top-left-triangle": {
            triangle: {
              top: "-14px",
              left: "10px"
            },
            triangleShadow: {
              top: "-16px",
              left: "9px"
            }
          },
          "top-right-triangle": {
            triangle: {
              top: "-14px",
              right: "10px"
            },
            triangleShadow: {
              top: "-16px",
              right: "9px"
            }
          },
          "bottom-left-triangle": {
            triangle: {
              top: "35px",
              left: "10px",
              transform: "rotate(180deg)"
            },
            triangleShadow: {
              top: "37px",
              left: "9px",
              transform: "rotate(180deg)"
            }
          },
          "bottom-right-triangle": {
            triangle: {
              top: "35px",
              right: "10px",
              transform: "rotate(180deg)"
            },
            triangleShadow: {
              top: "37px",
              right: "9px",
              transform: "rotate(180deg)"
            }
          }
        }, passedStyles), {
          "hide-triangle": triangle === "hide",
          "top-left-triangle": triangle === "top-left",
          "top-right-triangle": triangle === "top-right",
          "bottom-left-triangle": triangle === "bottom-left",
          "bottom-right-triangle": triangle === "bottom-right"
        });
        var handleChange = function handleChange2(hex, e) {
          return onChange({ hex, source: "hex" }, e);
        };
        return _react2.default.createElement(
          "div",
          { style: styles.card, className: "github-picker " + className },
          _react2.default.createElement("div", { style: styles.triangleShadow }),
          _react2.default.createElement("div", { style: styles.triangle }),
          (0, _map2.default)(colors, function(c) {
            return _react2.default.createElement(_GithubSwatch2.default, {
              color: c,
              key: c,
              onClick: handleChange,
              onSwatchHover
            });
          })
        );
      };
      Github.propTypes = {
        width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
        triangle: _propTypes2.default.oneOf(["hide", "top-left", "top-right", "bottom-left", "bottom-right"]),
        styles: _propTypes2.default.object
      };
      Github.defaultProps = {
        width: 200,
        colors: ["#B80000", "#DB3E00", "#FCCB00", "#008B02", "#006B76", "#1273DE", "#004DCF", "#5300EB", "#EB9694", "#FAD0C3", "#FEF3BD", "#C1E1C5", "#BEDADC", "#C4DEF6", "#BED3F3", "#D4C4FB"],
        triangle: "top-left",
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(Github);
    }
  });

  // node_modules/react-color/lib/components/hue/HuePointer.js
  var require_HuePointer = __commonJS({
    "node_modules/react-color/lib/components/hue/HuePointer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SliderPointer = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var SliderPointer = exports.SliderPointer = function SliderPointer2(_ref) {
        var direction = _ref.direction;
        var styles = (0, _reactcss2.default)({
          "default": {
            picker: {
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              transform: "translate(-9px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
            }
          },
          "vertical": {
            picker: {
              transform: "translate(-3px, -9px)"
            }
          }
        }, { vertical: direction === "vertical" });
        return _react2.default.createElement("div", { style: styles.picker });
      };
      exports.default = SliderPointer;
    }
  });

  // node_modules/react-color/lib/components/hue/Hue.js
  var require_Hue2 = __commonJS({
    "node_modules/react-color/lib/components/hue/Hue.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.HuePicker = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _common = require_common();
      var _HuePointer = require_HuePointer();
      var _HuePointer2 = _interopRequireDefault(_HuePointer);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var HuePicker = exports.HuePicker = function HuePicker2(_ref) {
        var width = _ref.width, height = _ref.height, onChange = _ref.onChange, hsl = _ref.hsl, direction = _ref.direction, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            picker: {
              position: "relative",
              width,
              height
            },
            hue: {
              radius: "2px"
            }
          }
        }, passedStyles));
        var handleChange = function handleChange2(data) {
          return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
        };
        return _react2.default.createElement(
          "div",
          { style: styles.picker, className: "hue-picker " + className },
          _react2.default.createElement(_common.Hue, _extends({}, styles.hue, {
            hsl,
            pointer,
            onChange: handleChange,
            direction
          }))
        );
      };
      HuePicker.propTypes = {
        styles: _propTypes2.default.object
      };
      HuePicker.defaultProps = {
        width: "316px",
        height: "16px",
        direction: "horizontal",
        pointer: _HuePointer2.default,
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(HuePicker);
    }
  });

  // node_modules/react-color/lib/components/material/Material.js
  var require_Material = __commonJS({
    "node_modules/react-color/lib/components/material/Material.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Material = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _color = require_color();
      var color = _interopRequireWildcard(_color);
      var _common = require_common();
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Material = exports.Material = function Material2(_ref) {
        var onChange = _ref.onChange, hex = _ref.hex, rgb = _ref.rgb, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            material: {
              width: "98px",
              height: "98px",
              padding: "16px",
              fontFamily: "Roboto"
            },
            HEXwrap: {
              position: "relative"
            },
            HEXinput: {
              width: "100%",
              marginTop: "12px",
              fontSize: "15px",
              color: "#333",
              padding: "0px",
              border: "0px",
              borderBottom: "2px solid " + hex,
              outline: "none",
              height: "30px"
            },
            HEXlabel: {
              position: "absolute",
              top: "0px",
              left: "0px",
              fontSize: "11px",
              color: "#999999",
              textTransform: "capitalize"
            },
            Hex: {
              style: {}
            },
            RGBwrap: {
              position: "relative"
            },
            RGBinput: {
              width: "100%",
              marginTop: "12px",
              fontSize: "15px",
              color: "#333",
              padding: "0px",
              border: "0px",
              borderBottom: "1px solid #eee",
              outline: "none",
              height: "30px"
            },
            RGBlabel: {
              position: "absolute",
              top: "0px",
              left: "0px",
              fontSize: "11px",
              color: "#999999",
              textTransform: "capitalize"
            },
            split: {
              display: "flex",
              marginRight: "-10px",
              paddingTop: "11px"
            },
            third: {
              flex: "1",
              paddingRight: "10px"
            }
          }
        }, passedStyles));
        var handleChange = function handleChange2(data, e) {
          if (data.hex) {
            color.isValidHex(data.hex) && onChange({
              hex: data.hex,
              source: "hex"
            }, e);
          } else if (data.r || data.g || data.b) {
            onChange({
              r: data.r || rgb.r,
              g: data.g || rgb.g,
              b: data.b || rgb.b,
              source: "rgb"
            }, e);
          }
        };
        return _react2.default.createElement(
          _common.Raised,
          { styles: passedStyles },
          _react2.default.createElement(
            "div",
            { style: styles.material, className: "material-picker " + className },
            _react2.default.createElement(_common.EditableInput, {
              style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
              label: "hex",
              value: hex,
              onChange: handleChange
            }),
            _react2.default.createElement(
              "div",
              { style: styles.split, className: "flexbox-fix" },
              _react2.default.createElement(
                "div",
                { style: styles.third },
                _react2.default.createElement(_common.EditableInput, {
                  style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
                  label: "r",
                  value: rgb.r,
                  onChange: handleChange
                })
              ),
              _react2.default.createElement(
                "div",
                { style: styles.third },
                _react2.default.createElement(_common.EditableInput, {
                  style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
                  label: "g",
                  value: rgb.g,
                  onChange: handleChange
                })
              ),
              _react2.default.createElement(
                "div",
                { style: styles.third },
                _react2.default.createElement(_common.EditableInput, {
                  style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
                  label: "b",
                  value: rgb.b,
                  onChange: handleChange
                })
              )
            )
          )
        );
      };
      exports.default = (0, _common.ColorWrap)(Material);
    }
  });

  // node_modules/react-color/lib/components/photoshop/PhotoshopFields.js
  var require_PhotoshopFields = __commonJS({
    "node_modules/react-color/lib/components/photoshop/PhotoshopFields.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PhotoshopPicker = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _color = require_color();
      var color = _interopRequireWildcard(_color);
      var _common = require_common();
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var PhotoshopPicker = exports.PhotoshopPicker = function PhotoshopPicker2(_ref) {
        var onChange = _ref.onChange, rgb = _ref.rgb, hsv = _ref.hsv, hex = _ref.hex;
        var styles = (0, _reactcss2.default)({
          "default": {
            fields: {
              paddingTop: "5px",
              paddingBottom: "9px",
              width: "80px",
              position: "relative"
            },
            divider: {
              height: "5px"
            },
            RGBwrap: {
              position: "relative"
            },
            RGBinput: {
              marginLeft: "40%",
              width: "40%",
              height: "18px",
              border: "1px solid #888888",
              boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
              marginBottom: "5px",
              fontSize: "13px",
              paddingLeft: "3px",
              marginRight: "10px"
            },
            RGBlabel: {
              left: "0px",
              top: "0px",
              width: "34px",
              textTransform: "uppercase",
              fontSize: "13px",
              height: "18px",
              lineHeight: "22px",
              position: "absolute"
            },
            HEXwrap: {
              position: "relative"
            },
            HEXinput: {
              marginLeft: "20%",
              width: "80%",
              height: "18px",
              border: "1px solid #888888",
              boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
              marginBottom: "6px",
              fontSize: "13px",
              paddingLeft: "3px"
            },
            HEXlabel: {
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "14px",
              textTransform: "uppercase",
              fontSize: "13px",
              height: "18px",
              lineHeight: "22px"
            },
            fieldSymbols: {
              position: "absolute",
              top: "5px",
              right: "-7px",
              fontSize: "13px"
            },
            symbol: {
              height: "20px",
              lineHeight: "22px",
              paddingBottom: "7px"
            }
          }
        });
        var handleChange = function handleChange2(data, e) {
          if (data["#"]) {
            color.isValidHex(data["#"]) && onChange({
              hex: data["#"],
              source: "hex"
            }, e);
          } else if (data.r || data.g || data.b) {
            onChange({
              r: data.r || rgb.r,
              g: data.g || rgb.g,
              b: data.b || rgb.b,
              source: "rgb"
            }, e);
          } else if (data.h || data.s || data.v) {
            onChange({
              h: data.h || hsv.h,
              s: data.s || hsv.s,
              v: data.v || hsv.v,
              source: "hsv"
            }, e);
          }
        };
        return _react2.default.createElement(
          "div",
          { style: styles.fields },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "h",
            value: Math.round(hsv.h),
            onChange: handleChange
          }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "s",
            value: Math.round(hsv.s * 100),
            onChange: handleChange
          }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "v",
            value: Math.round(hsv.v * 100),
            onChange: handleChange
          }),
          _react2.default.createElement("div", { style: styles.divider }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "r",
            value: rgb.r,
            onChange: handleChange
          }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "g",
            value: rgb.g,
            onChange: handleChange
          }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: "b",
            value: rgb.b,
            onChange: handleChange
          }),
          _react2.default.createElement("div", { style: styles.divider }),
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
            label: "#",
            value: hex.replace("#", ""),
            onChange: handleChange
          }),
          _react2.default.createElement(
            "div",
            { style: styles.fieldSymbols },
            _react2.default.createElement(
              "div",
              { style: styles.symbol },
              "\xB0"
            ),
            _react2.default.createElement(
              "div",
              { style: styles.symbol },
              "%"
            ),
            _react2.default.createElement(
              "div",
              { style: styles.symbol },
              "%"
            )
          )
        );
      };
      exports.default = PhotoshopPicker;
    }
  });

  // node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle.js
  var require_PhotoshopPointerCircle = __commonJS({
    "node_modules/react-color/lib/components/photoshop/PhotoshopPointerCircle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PhotoshopPointerCircle = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle2(_ref) {
        var hsl = _ref.hsl;
        var styles = (0, _reactcss2.default)({
          "default": {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 0 1px #fff",
              transform: "translate(-6px, -6px)"
            }
          },
          "black-outline": {
            picker: {
              boxShadow: "inset 0 0 0 1px #000"
            }
          }
        }, { "black-outline": hsl.l > 0.5 });
        return _react2.default.createElement("div", { style: styles.picker });
      };
      exports.default = PhotoshopPointerCircle;
    }
  });

  // node_modules/react-color/lib/components/photoshop/PhotoshopPointer.js
  var require_PhotoshopPointer = __commonJS({
    "node_modules/react-color/lib/components/photoshop/PhotoshopPointer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PhotoshopPointerCircle = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle2() {
        var styles = (0, _reactcss2.default)({
          "default": {
            triangle: {
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "4px 0 4px 6px",
              borderColor: "transparent transparent transparent #fff",
              position: "absolute",
              top: "1px",
              left: "1px"
            },
            triangleBorder: {
              width: 0,
              height: 0,
              borderStyle: "solid",
              borderWidth: "5px 0 5px 8px",
              borderColor: "transparent transparent transparent #555"
            },
            left: {
              Extend: "triangleBorder",
              transform: "translate(-13px, -4px)"
            },
            leftInside: {
              Extend: "triangle",
              transform: "translate(-8px, -5px)"
            },
            right: {
              Extend: "triangleBorder",
              transform: "translate(20px, -14px) rotate(180deg)"
            },
            rightInside: {
              Extend: "triangle",
              transform: "translate(-8px, -5px)"
            }
          }
        });
        return _react2.default.createElement(
          "div",
          { style: styles.pointer },
          _react2.default.createElement(
            "div",
            { style: styles.left },
            _react2.default.createElement("div", { style: styles.leftInside })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.right },
            _react2.default.createElement("div", { style: styles.rightInside })
          )
        );
      };
      exports.default = PhotoshopPointerCircle;
    }
  });

  // node_modules/react-color/lib/components/photoshop/PhotoshopButton.js
  var require_PhotoshopButton = __commonJS({
    "node_modules/react-color/lib/components/photoshop/PhotoshopButton.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PhotoshopButton = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var PhotoshopButton = exports.PhotoshopButton = function PhotoshopButton2(_ref) {
        var onClick = _ref.onClick, label = _ref.label, children = _ref.children, active = _ref.active;
        var styles = (0, _reactcss2.default)({
          "default": {
            button: {
              backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
              border: "1px solid #878787",
              borderRadius: "2px",
              height: "20px",
              boxShadow: "0 1px 0 0 #EAEAEA",
              fontSize: "14px",
              color: "#000",
              lineHeight: "20px",
              textAlign: "center",
              marginBottom: "10px",
              cursor: "pointer"
            }
          },
          "active": {
            button: {
              boxShadow: "0 0 0 1px #878787"
            }
          }
        }, { active });
        return _react2.default.createElement(
          "div",
          { style: styles.button, onClick },
          label || children
        );
      };
      exports.default = PhotoshopButton;
    }
  });

  // node_modules/react-color/lib/components/photoshop/PhotoshopPreviews.js
  var require_PhotoshopPreviews = __commonJS({
    "node_modules/react-color/lib/components/photoshop/PhotoshopPreviews.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.PhotoshopPreviews = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var PhotoshopPreviews = exports.PhotoshopPreviews = function PhotoshopPreviews2(_ref) {
        var rgb = _ref.rgb, currentColor = _ref.currentColor;
        var styles = (0, _reactcss2.default)({
          "default": {
            swatches: {
              border: "1px solid #B3B3B3",
              borderBottom: "1px solid #F0F0F0",
              marginBottom: "2px",
              marginTop: "1px"
            },
            new: {
              height: "34px",
              background: "rgb(" + rgb.r + "," + rgb.g + ", " + rgb.b + ")",
              boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
            },
            current: {
              height: "34px",
              background: currentColor,
              boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
            },
            label: {
              fontSize: "14px",
              color: "#000",
              textAlign: "center"
            }
          }
        });
        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            { style: styles.label },
            "new"
          ),
          _react2.default.createElement(
            "div",
            { style: styles.swatches },
            _react2.default.createElement("div", { style: styles.new }),
            _react2.default.createElement("div", { style: styles.current })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.label },
            "current"
          )
        );
      };
      exports.default = PhotoshopPreviews;
    }
  });

  // node_modules/react-color/lib/components/photoshop/Photoshop.js
  var require_Photoshop = __commonJS({
    "node_modules/react-color/lib/components/photoshop/Photoshop.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Photoshop = void 0;
      var _createClass = function() {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _common = require_common();
      var _PhotoshopFields = require_PhotoshopFields();
      var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);
      var _PhotoshopPointerCircle = require_PhotoshopPointerCircle();
      var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);
      var _PhotoshopPointer = require_PhotoshopPointer();
      var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);
      var _PhotoshopButton = require_PhotoshopButton();
      var _PhotoshopButton2 = _interopRequireDefault(_PhotoshopButton);
      var _PhotoshopPreviews = require_PhotoshopPreviews();
      var _PhotoshopPreviews2 = _interopRequireDefault(_PhotoshopPreviews);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      var Photoshop = exports.Photoshop = function(_React$Component) {
        _inherits(Photoshop2, _React$Component);
        function Photoshop2(props) {
          _classCallCheck(this, Photoshop2);
          var _this = _possibleConstructorReturn(this, (Photoshop2.__proto__ || Object.getPrototypeOf(Photoshop2)).call(this));
          _this.state = {
            currentColor: props.hex
          };
          return _this;
        }
        _createClass(Photoshop2, [{
          key: "render",
          value: function render() {
            var _props = this.props, _props$styles = _props.styles, passedStyles = _props$styles === void 0 ? {} : _props$styles, _props$className = _props.className, className = _props$className === void 0 ? "" : _props$className;
            var styles = (0, _reactcss2.default)((0, _merge2.default)({
              "default": {
                picker: {
                  background: "#DCDCDC",
                  borderRadius: "4px",
                  boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                  boxSizing: "initial",
                  width: "513px"
                },
                head: {
                  backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                  borderBottom: "1px solid #B1B1B1",
                  boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                  height: "23px",
                  lineHeight: "24px",
                  borderRadius: "4px 4px 0 0",
                  fontSize: "13px",
                  color: "#4D4D4D",
                  textAlign: "center"
                },
                body: {
                  padding: "15px 15px 0",
                  display: "flex"
                },
                saturation: {
                  width: "256px",
                  height: "256px",
                  position: "relative",
                  border: "2px solid #B3B3B3",
                  borderBottom: "2px solid #F0F0F0",
                  overflow: "hidden"
                },
                hue: {
                  position: "relative",
                  height: "256px",
                  width: "19px",
                  marginLeft: "10px",
                  border: "2px solid #B3B3B3",
                  borderBottom: "2px solid #F0F0F0"
                },
                controls: {
                  width: "180px",
                  marginLeft: "10px"
                },
                top: {
                  display: "flex"
                },
                previews: {
                  width: "60px"
                },
                actions: {
                  flex: "1",
                  marginLeft: "20px"
                }
              }
            }, passedStyles));
            return _react2.default.createElement(
              "div",
              { style: styles.picker, className: "photoshop-picker " + className },
              _react2.default.createElement(
                "div",
                { style: styles.head },
                this.props.header
              ),
              _react2.default.createElement(
                "div",
                { style: styles.body, className: "flexbox-fix" },
                _react2.default.createElement(
                  "div",
                  { style: styles.saturation },
                  _react2.default.createElement(_common.Saturation, {
                    hsl: this.props.hsl,
                    hsv: this.props.hsv,
                    pointer: _PhotoshopPointerCircle2.default,
                    onChange: this.props.onChange
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.hue },
                  _react2.default.createElement(_common.Hue, {
                    direction: "vertical",
                    hsl: this.props.hsl,
                    pointer: _PhotoshopPointer2.default,
                    onChange: this.props.onChange
                  })
                ),
                _react2.default.createElement(
                  "div",
                  { style: styles.controls },
                  _react2.default.createElement(
                    "div",
                    { style: styles.top, className: "flexbox-fix" },
                    _react2.default.createElement(
                      "div",
                      { style: styles.previews },
                      _react2.default.createElement(_PhotoshopPreviews2.default, {
                        rgb: this.props.rgb,
                        currentColor: this.state.currentColor
                      })
                    ),
                    _react2.default.createElement(
                      "div",
                      { style: styles.actions },
                      _react2.default.createElement(_PhotoshopButton2.default, { label: "OK", onClick: this.props.onAccept, active: true }),
                      _react2.default.createElement(_PhotoshopButton2.default, { label: "Cancel", onClick: this.props.onCancel }),
                      _react2.default.createElement(_PhotoshopFields2.default, {
                        onChange: this.props.onChange,
                        rgb: this.props.rgb,
                        hsv: this.props.hsv,
                        hex: this.props.hex
                      })
                    )
                  )
                )
              )
            );
          }
        }]);
        return Photoshop2;
      }(_react2.default.Component);
      Photoshop.propTypes = {
        header: _propTypes2.default.string,
        styles: _propTypes2.default.object
      };
      Photoshop.defaultProps = {
        header: "Color Picker",
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(Photoshop);
    }
  });

  // node_modules/react-color/lib/components/sketch/SketchFields.js
  var require_SketchFields = __commonJS({
    "node_modules/react-color/lib/components/sketch/SketchFields.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SketchFields = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _color = require_color();
      var color = _interopRequireWildcard(_color);
      var _common = require_common();
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var SketchFields = exports.SketchFields = function SketchFields2(_ref) {
        var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, disableAlpha = _ref.disableAlpha;
        var styles = (0, _reactcss2.default)({
          "default": {
            fields: {
              display: "flex",
              paddingTop: "4px"
            },
            single: {
              flex: "1",
              paddingLeft: "6px"
            },
            alpha: {
              flex: "1",
              paddingLeft: "6px"
            },
            double: {
              flex: "2"
            },
            input: {
              width: "80%",
              padding: "4px 10% 3px",
              border: "none",
              boxShadow: "inset 0 0 0 1px #ccc",
              fontSize: "11px"
            },
            label: {
              display: "block",
              textAlign: "center",
              fontSize: "11px",
              color: "#222",
              paddingTop: "3px",
              paddingBottom: "4px",
              textTransform: "capitalize"
            }
          },
          "disableAlpha": {
            alpha: {
              display: "none"
            }
          }
        }, { disableAlpha });
        var handleChange = function handleChange2(data, e) {
          if (data.hex) {
            color.isValidHex(data.hex) && onChange({
              hex: data.hex,
              source: "hex"
            }, e);
          } else if (data.r || data.g || data.b) {
            onChange({
              r: data.r || rgb.r,
              g: data.g || rgb.g,
              b: data.b || rgb.b,
              a: rgb.a,
              source: "rgb"
            }, e);
          } else if (data.a) {
            if (data.a < 0) {
              data.a = 0;
            } else if (data.a > 100) {
              data.a = 100;
            }
            data.a /= 100;
            onChange({
              h: hsl.h,
              s: hsl.s,
              l: hsl.l,
              a: data.a,
              source: "rgb"
            }, e);
          }
        };
        return _react2.default.createElement(
          "div",
          { style: styles.fields, className: "flexbox-fix" },
          _react2.default.createElement(
            "div",
            { style: styles.double },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "hex",
              value: hex.replace("#", ""),
              onChange: handleChange
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.single },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "r",
              value: rgb.r,
              onChange: handleChange,
              dragLabel: "true",
              dragMax: "255"
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.single },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "g",
              value: rgb.g,
              onChange: handleChange,
              dragLabel: "true",
              dragMax: "255"
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.single },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "b",
              value: rgb.b,
              onChange: handleChange,
              dragLabel: "true",
              dragMax: "255"
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: "a",
              value: Math.round(rgb.a * 100),
              onChange: handleChange,
              dragLabel: "true",
              dragMax: "100"
            })
          )
        );
      };
      exports.default = SketchFields;
    }
  });

  // node_modules/react-color/lib/components/sketch/SketchPresetColors.js
  var require_SketchPresetColors = __commonJS({
    "node_modules/react-color/lib/components/sketch/SketchPresetColors.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SketchPresetColors = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _common = require_common();
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var SketchPresetColors = exports.SketchPresetColors = function SketchPresetColors2(_ref) {
        var colors = _ref.colors, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
        } : _ref$onClick, onSwatchHover = _ref.onSwatchHover;
        var styles = (0, _reactcss2.default)({
          "default": {
            colors: {
              margin: "0 -10px",
              padding: "10px 0 0 10px",
              borderTop: "1px solid #eee",
              display: "flex",
              flexWrap: "wrap",
              position: "relative"
            },
            swatchWrap: {
              width: "16px",
              height: "16px",
              margin: "0 10px 10px 0"
            },
            swatch: {
              borderRadius: "3px",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
            }
          },
          "no-presets": {
            colors: {
              display: "none"
            }
          }
        }, {
          "no-presets": !colors || !colors.length
        });
        var handleClick = function handleClick2(hex, e) {
          onClick({
            hex,
            source: "hex"
          }, e);
        };
        return _react2.default.createElement(
          "div",
          { style: styles.colors, className: "flexbox-fix" },
          colors.map(function(colorObjOrString) {
            var c = typeof colorObjOrString === "string" ? { color: colorObjOrString } : colorObjOrString;
            var key = "" + c.color + (c.title || "");
            return _react2.default.createElement(
              "div",
              { key, style: styles.swatchWrap },
              _react2.default.createElement(_common.Swatch, _extends({}, c, {
                style: styles.swatch,
                onClick: handleClick,
                onHover: onSwatchHover,
                focusStyle: {
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + c.color
                }
              }))
            );
          })
        );
      };
      SketchPresetColors.propTypes = {
        colors: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
          color: _propTypes2.default.string,
          title: _propTypes2.default.string
        })])).isRequired
      };
      exports.default = SketchPresetColors;
    }
  });

  // node_modules/react-color/lib/components/sketch/Sketch.js
  var require_Sketch = __commonJS({
    "node_modules/react-color/lib/components/sketch/Sketch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Sketch = void 0;
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _common = require_common();
      var _SketchFields = require_SketchFields();
      var _SketchFields2 = _interopRequireDefault(_SketchFields);
      var _SketchPresetColors = require_SketchPresetColors();
      var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Sketch = exports.Sketch = function Sketch2(_ref) {
        var width = _ref.width, rgb = _ref.rgb, hex = _ref.hex, hsv = _ref.hsv, hsl = _ref.hsl, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, disableAlpha = _ref.disableAlpha, presetColors = _ref.presetColors, renderers = _ref.renderers, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": _extends({
            picker: {
              width,
              padding: "10px 10px 0",
              boxSizing: "initial",
              background: "#fff",
              borderRadius: "4px",
              boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
            },
            saturation: {
              width: "100%",
              paddingBottom: "75%",
              position: "relative",
              overflow: "hidden"
            },
            Saturation: {
              radius: "3px",
              shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
            },
            controls: {
              display: "flex"
            },
            sliders: {
              padding: "4px 0",
              flex: "1"
            },
            color: {
              width: "24px",
              height: "24px",
              position: "relative",
              marginTop: "4px",
              marginLeft: "4px",
              borderRadius: "3px"
            },
            activeColor: {
              absolute: "0px 0px 0px 0px",
              borderRadius: "2px",
              background: "rgba(" + rgb.r + "," + rgb.g + "," + rgb.b + "," + rgb.a + ")",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
            },
            hue: {
              position: "relative",
              height: "10px",
              overflow: "hidden"
            },
            Hue: {
              radius: "2px",
              shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
            },
            alpha: {
              position: "relative",
              height: "10px",
              marginTop: "4px",
              overflow: "hidden"
            },
            Alpha: {
              radius: "2px",
              shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
            }
          }, passedStyles),
          "disableAlpha": {
            color: {
              height: "10px"
            },
            hue: {
              height: "10px"
            },
            alpha: {
              display: "none"
            }
          }
        }, passedStyles), { disableAlpha });
        return _react2.default.createElement(
          "div",
          { style: styles.picker, className: "sketch-picker " + className },
          _react2.default.createElement(
            "div",
            { style: styles.saturation },
            _react2.default.createElement(_common.Saturation, {
              style: styles.Saturation,
              hsl,
              hsv,
              onChange
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.controls, className: "flexbox-fix" },
            _react2.default.createElement(
              "div",
              { style: styles.sliders },
              _react2.default.createElement(
                "div",
                { style: styles.hue },
                _react2.default.createElement(_common.Hue, {
                  style: styles.Hue,
                  hsl,
                  onChange
                })
              ),
              _react2.default.createElement(
                "div",
                { style: styles.alpha },
                _react2.default.createElement(_common.Alpha, {
                  style: styles.Alpha,
                  rgb,
                  hsl,
                  renderers,
                  onChange
                })
              )
            ),
            _react2.default.createElement(
              "div",
              { style: styles.color },
              _react2.default.createElement(_common.Checkboard, null),
              _react2.default.createElement("div", { style: styles.activeColor })
            )
          ),
          _react2.default.createElement(_SketchFields2.default, {
            rgb,
            hsl,
            hex,
            onChange,
            disableAlpha
          }),
          _react2.default.createElement(_SketchPresetColors2.default, {
            colors: presetColors,
            onClick: onChange,
            onSwatchHover
          })
        );
      };
      Sketch.propTypes = {
        disableAlpha: _propTypes2.default.bool,
        width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        styles: _propTypes2.default.object
      };
      Sketch.defaultProps = {
        disableAlpha: false,
        width: 200,
        styles: {},
        presetColors: ["#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"]
      };
      exports.default = (0, _common.ColorWrap)(Sketch);
    }
  });

  // node_modules/react-color/lib/components/slider/SliderSwatch.js
  var require_SliderSwatch = __commonJS({
    "node_modules/react-color/lib/components/slider/SliderSwatch.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SliderSwatch = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var SliderSwatch = exports.SliderSwatch = function SliderSwatch2(_ref) {
        var hsl = _ref.hsl, offset = _ref.offset, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
        } : _ref$onClick, active = _ref.active, first = _ref.first, last = _ref.last;
        var styles = (0, _reactcss2.default)({
          "default": {
            swatch: {
              height: "12px",
              background: "hsl(" + hsl.h + ", 50%, " + offset * 100 + "%)",
              cursor: "pointer"
            }
          },
          "first": {
            swatch: {
              borderRadius: "2px 0 0 2px"
            }
          },
          "last": {
            swatch: {
              borderRadius: "0 2px 2px 0"
            }
          },
          "active": {
            swatch: {
              transform: "scaleY(1.8)",
              borderRadius: "3.6px/2px"
            }
          }
        }, { active, first, last });
        var handleClick = function handleClick2(e) {
          return onClick({
            h: hsl.h,
            s: 0.5,
            l: offset,
            source: "hsl"
          }, e);
        };
        return _react2.default.createElement("div", { style: styles.swatch, onClick: handleClick });
      };
      exports.default = SliderSwatch;
    }
  });

  // node_modules/react-color/lib/components/slider/SliderSwatches.js
  var require_SliderSwatches = __commonJS({
    "node_modules/react-color/lib/components/slider/SliderSwatches.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SliderSwatches = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _SliderSwatch = require_SliderSwatch();
      var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var SliderSwatches = exports.SliderSwatches = function SliderSwatches2(_ref) {
        var onClick = _ref.onClick, hsl = _ref.hsl;
        var styles = (0, _reactcss2.default)({
          "default": {
            swatches: {
              marginTop: "20px"
            },
            swatch: {
              boxSizing: "border-box",
              width: "20%",
              paddingRight: "1px",
              float: "left"
            },
            clear: {
              clear: "both"
            }
          }
        });
        var epsilon = 0.1;
        return _react2.default.createElement(
          "div",
          { style: styles.swatches },
          _react2.default.createElement(
            "div",
            { style: styles.swatch },
            _react2.default.createElement(_SliderSwatch2.default, {
              hsl,
              offset: ".80",
              active: Math.abs(hsl.l - 0.8) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
              onClick,
              first: true
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.swatch },
            _react2.default.createElement(_SliderSwatch2.default, {
              hsl,
              offset: ".65",
              active: Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
              onClick
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.swatch },
            _react2.default.createElement(_SliderSwatch2.default, {
              hsl,
              offset: ".50",
              active: Math.abs(hsl.l - 0.5) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
              onClick
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.swatch },
            _react2.default.createElement(_SliderSwatch2.default, {
              hsl,
              offset: ".35",
              active: Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
              onClick
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.swatch },
            _react2.default.createElement(_SliderSwatch2.default, {
              hsl,
              offset: ".20",
              active: Math.abs(hsl.l - 0.2) < epsilon && Math.abs(hsl.s - 0.5) < epsilon,
              onClick,
              last: true
            })
          ),
          _react2.default.createElement("div", { style: styles.clear })
        );
      };
      exports.default = SliderSwatches;
    }
  });

  // node_modules/react-color/lib/components/slider/SliderPointer.js
  var require_SliderPointer = __commonJS({
    "node_modules/react-color/lib/components/slider/SliderPointer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SliderPointer = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var SliderPointer = exports.SliderPointer = function SliderPointer2() {
        var styles = (0, _reactcss2.default)({
          "default": {
            picker: {
              width: "14px",
              height: "14px",
              borderRadius: "6px",
              transform: "translate(-7px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
            }
          }
        });
        return _react2.default.createElement("div", { style: styles.picker });
      };
      exports.default = SliderPointer;
    }
  });

  // node_modules/react-color/lib/components/slider/Slider.js
  var require_Slider = __commonJS({
    "node_modules/react-color/lib/components/slider/Slider.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Slider = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _common = require_common();
      var _SliderSwatches = require_SliderSwatches();
      var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);
      var _SliderPointer = require_SliderPointer();
      var _SliderPointer2 = _interopRequireDefault(_SliderPointer);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Slider = exports.Slider = function Slider2(_ref) {
        var hsl = _ref.hsl, onChange = _ref.onChange, pointer = _ref.pointer, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            hue: {
              height: "12px",
              position: "relative"
            },
            Hue: {
              radius: "2px"
            }
          }
        }, passedStyles));
        return _react2.default.createElement(
          "div",
          { style: styles.wrap || {}, className: "slider-picker " + className },
          _react2.default.createElement(
            "div",
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              style: styles.Hue,
              hsl,
              pointer,
              onChange
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.swatches },
            _react2.default.createElement(_SliderSwatches2.default, { hsl, onClick: onChange })
          )
        );
      };
      Slider.propTypes = {
        styles: _propTypes2.default.object
      };
      Slider.defaultProps = {
        pointer: _SliderPointer2.default,
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(Slider);
    }
  });

  // node_modules/@icons/material/CheckIcon.js
  var require_CheckIcon = __commonJS({
    "node_modules/@icons/material/CheckIcon.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var _extends = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0)
            continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i))
            continue;
          target[i] = obj[i];
        }
        return target;
      }
      var DEFAULT_SIZE = 24;
      exports.default = function(_ref) {
        var _ref$fill = _ref.fill, fill = _ref$fill === void 0 ? "currentColor" : _ref$fill, _ref$width = _ref.width, width = _ref$width === void 0 ? DEFAULT_SIZE : _ref$width, _ref$height = _ref.height, height = _ref$height === void 0 ? DEFAULT_SIZE : _ref$height, _ref$style = _ref.style, style = _ref$style === void 0 ? {} : _ref$style, props = _objectWithoutProperties(_ref, ["fill", "width", "height", "style"]);
        return _react2.default.createElement(
          "svg",
          _extends({
            viewBox: "0 0 " + DEFAULT_SIZE + " " + DEFAULT_SIZE,
            style: _extends({ fill, width, height }, style)
          }, props),
          _react2.default.createElement("path", { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" })
        );
      };
    }
  });

  // node_modules/react-color/lib/components/swatches/SwatchesColor.js
  var require_SwatchesColor = __commonJS({
    "node_modules/react-color/lib/components/swatches/SwatchesColor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SwatchesColor = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _color = require_color();
      var colorUtils = _interopRequireWildcard(_color);
      var _common = require_common();
      var _CheckIcon = require_CheckIcon();
      var _CheckIcon2 = _interopRequireDefault(_CheckIcon);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var SwatchesColor = exports.SwatchesColor = function SwatchesColor2(_ref) {
        var color = _ref.color, _ref$onClick = _ref.onClick, onClick = _ref$onClick === void 0 ? function() {
        } : _ref$onClick, onSwatchHover = _ref.onSwatchHover, first = _ref.first, last = _ref.last, active = _ref.active;
        var styles = (0, _reactcss2.default)({
          "default": {
            color: {
              width: "40px",
              height: "24px",
              cursor: "pointer",
              background: color,
              marginBottom: "1px"
            },
            check: {
              color: colorUtils.getContrastingColor(color),
              marginLeft: "8px",
              display: "none"
            }
          },
          "first": {
            color: {
              overflow: "hidden",
              borderRadius: "2px 2px 0 0"
            }
          },
          "last": {
            color: {
              overflow: "hidden",
              borderRadius: "0 0 2px 2px"
            }
          },
          "active": {
            check: {
              display: "block"
            }
          },
          "color-#FFFFFF": {
            color: {
              boxShadow: "inset 0 0 0 1px #ddd"
            },
            check: {
              color: "#333"
            }
          },
          "transparent": {
            check: {
              color: "#333"
            }
          }
        }, {
          first,
          last,
          active,
          "color-#FFFFFF": color === "#FFFFFF",
          "transparent": color === "transparent"
        });
        return _react2.default.createElement(
          _common.Swatch,
          {
            color,
            style: styles.color,
            onClick,
            onHover: onSwatchHover,
            focusStyle: { boxShadow: "0 0 4px " + color }
          },
          _react2.default.createElement(
            "div",
            { style: styles.check },
            _react2.default.createElement(_CheckIcon2.default, null)
          )
        );
      };
      exports.default = SwatchesColor;
    }
  });

  // node_modules/react-color/lib/components/swatches/SwatchesGroup.js
  var require_SwatchesGroup = __commonJS({
    "node_modules/react-color/lib/components/swatches/SwatchesGroup.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SwatchesGroup = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _map = require_map();
      var _map2 = _interopRequireDefault(_map);
      var _SwatchesColor = require_SwatchesColor();
      var _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var SwatchesGroup = exports.SwatchesGroup = function SwatchesGroup2(_ref) {
        var onClick = _ref.onClick, onSwatchHover = _ref.onSwatchHover, group = _ref.group, active = _ref.active;
        var styles = (0, _reactcss2.default)({
          "default": {
            group: {
              paddingBottom: "10px",
              width: "40px",
              float: "left",
              marginRight: "10px"
            }
          }
        });
        return _react2.default.createElement(
          "div",
          { style: styles.group },
          (0, _map2.default)(group, function(color, i) {
            return _react2.default.createElement(_SwatchesColor2.default, {
              key: color,
              color,
              active: color.toLowerCase() === active,
              first: i === 0,
              last: i === group.length - 1,
              onClick,
              onSwatchHover
            });
          })
        );
      };
      exports.default = SwatchesGroup;
    }
  });

  // node_modules/react-color/lib/components/swatches/Swatches.js
  var require_Swatches = __commonJS({
    "node_modules/react-color/lib/components/swatches/Swatches.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Swatches = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _map = require_map();
      var _map2 = _interopRequireDefault(_map);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _materialColors = require_colors();
      var material = _interopRequireWildcard(_materialColors);
      var _common = require_common();
      var _SwatchesGroup = require_SwatchesGroup();
      var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Swatches = exports.Swatches = function Swatches2(_ref) {
        var width = _ref.width, height = _ref.height, onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, colors = _ref.colors, hex = _ref.hex, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            picker: {
              width,
              height
            },
            overflow: {
              height,
              overflowY: "scroll"
            },
            body: {
              padding: "16px 0 6px 16px"
            },
            clear: {
              clear: "both"
            }
          }
        }, passedStyles));
        var handleChange = function handleChange2(data, e) {
          return onChange({ hex: data, source: "hex" }, e);
        };
        return _react2.default.createElement(
          "div",
          { style: styles.picker, className: "swatches-picker " + className },
          _react2.default.createElement(
            _common.Raised,
            null,
            _react2.default.createElement(
              "div",
              { style: styles.overflow },
              _react2.default.createElement(
                "div",
                { style: styles.body },
                (0, _map2.default)(colors, function(group) {
                  return _react2.default.createElement(_SwatchesGroup2.default, {
                    key: group.toString(),
                    group,
                    active: hex,
                    onClick: handleChange,
                    onSwatchHover
                  });
                }),
                _react2.default.createElement("div", { style: styles.clear })
              )
            )
          )
        );
      };
      Swatches.propTypes = {
        width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        colors: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string)),
        styles: _propTypes2.default.object
        /* eslint-disable max-len */
      };
      Swatches.defaultProps = {
        width: 320,
        height: 240,
        colors: [[material.red["900"], material.red["700"], material.red["500"], material.red["300"], material.red["100"]], [material.pink["900"], material.pink["700"], material.pink["500"], material.pink["300"], material.pink["100"]], [material.purple["900"], material.purple["700"], material.purple["500"], material.purple["300"], material.purple["100"]], [material.deepPurple["900"], material.deepPurple["700"], material.deepPurple["500"], material.deepPurple["300"], material.deepPurple["100"]], [material.indigo["900"], material.indigo["700"], material.indigo["500"], material.indigo["300"], material.indigo["100"]], [material.blue["900"], material.blue["700"], material.blue["500"], material.blue["300"], material.blue["100"]], [material.lightBlue["900"], material.lightBlue["700"], material.lightBlue["500"], material.lightBlue["300"], material.lightBlue["100"]], [material.cyan["900"], material.cyan["700"], material.cyan["500"], material.cyan["300"], material.cyan["100"]], [material.teal["900"], material.teal["700"], material.teal["500"], material.teal["300"], material.teal["100"]], ["#194D33", material.green["700"], material.green["500"], material.green["300"], material.green["100"]], [material.lightGreen["900"], material.lightGreen["700"], material.lightGreen["500"], material.lightGreen["300"], material.lightGreen["100"]], [material.lime["900"], material.lime["700"], material.lime["500"], material.lime["300"], material.lime["100"]], [material.yellow["900"], material.yellow["700"], material.yellow["500"], material.yellow["300"], material.yellow["100"]], [material.amber["900"], material.amber["700"], material.amber["500"], material.amber["300"], material.amber["100"]], [material.orange["900"], material.orange["700"], material.orange["500"], material.orange["300"], material.orange["100"]], [material.deepOrange["900"], material.deepOrange["700"], material.deepOrange["500"], material.deepOrange["300"], material.deepOrange["100"]], [material.brown["900"], material.brown["700"], material.brown["500"], material.brown["300"], material.brown["100"]], [material.blueGrey["900"], material.blueGrey["700"], material.blueGrey["500"], material.blueGrey["300"], material.blueGrey["100"]], ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"]],
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(Swatches);
    }
  });

  // node_modules/react-color/lib/components/twitter/Twitter.js
  var require_Twitter = __commonJS({
    "node_modules/react-color/lib/components/twitter/Twitter.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Twitter = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _map = require_map();
      var _map2 = _interopRequireDefault(_map);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _color = require_color();
      var color = _interopRequireWildcard(_color);
      var _common = require_common();
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Twitter = exports.Twitter = function Twitter2(_ref) {
        var onChange = _ref.onChange, onSwatchHover = _ref.onSwatchHover, hex = _ref.hex, colors = _ref.colors, width = _ref.width, triangle = _ref.triangle, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            card: {
              width,
              background: "#fff",
              border: "0 solid rgba(0,0,0,0.25)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
              borderRadius: "4px",
              position: "relative"
            },
            body: {
              padding: "15px 9px 9px 15px"
            },
            label: {
              fontSize: "18px",
              color: "#fff"
            },
            triangle: {
              width: "0px",
              height: "0px",
              borderStyle: "solid",
              borderWidth: "0 9px 10px 9px",
              borderColor: "transparent transparent #fff transparent",
              position: "absolute"
            },
            triangleShadow: {
              width: "0px",
              height: "0px",
              borderStyle: "solid",
              borderWidth: "0 9px 10px 9px",
              borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
              position: "absolute"
            },
            hash: {
              background: "#F0F0F0",
              height: "30px",
              width: "30px",
              borderRadius: "4px 0 0 4px",
              float: "left",
              color: "#98A1A4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            input: {
              width: "100px",
              fontSize: "14px",
              color: "#666",
              border: "0px",
              outline: "none",
              height: "28px",
              boxShadow: "inset 0 0 0 1px #F0F0F0",
              boxSizing: "content-box",
              borderRadius: "0 4px 4px 0",
              float: "left",
              paddingLeft: "8px"
            },
            swatch: {
              width: "30px",
              height: "30px",
              float: "left",
              borderRadius: "4px",
              margin: "0 6px 6px 0"
            },
            clear: {
              clear: "both"
            }
          },
          "hide-triangle": {
            triangle: {
              display: "none"
            },
            triangleShadow: {
              display: "none"
            }
          },
          "top-left-triangle": {
            triangle: {
              top: "-10px",
              left: "12px"
            },
            triangleShadow: {
              top: "-11px",
              left: "12px"
            }
          },
          "top-right-triangle": {
            triangle: {
              top: "-10px",
              right: "12px"
            },
            triangleShadow: {
              top: "-11px",
              right: "12px"
            }
          }
        }, passedStyles), {
          "hide-triangle": triangle === "hide",
          "top-left-triangle": triangle === "top-left",
          "top-right-triangle": triangle === "top-right"
        });
        var handleChange = function handleChange2(hexcode, e) {
          color.isValidHex(hexcode) && onChange({
            hex: hexcode,
            source: "hex"
          }, e);
        };
        return _react2.default.createElement(
          "div",
          { style: styles.card, className: "twitter-picker " + className },
          _react2.default.createElement("div", { style: styles.triangleShadow }),
          _react2.default.createElement("div", { style: styles.triangle }),
          _react2.default.createElement(
            "div",
            { style: styles.body },
            (0, _map2.default)(colors, function(c, i) {
              return _react2.default.createElement(_common.Swatch, {
                key: i,
                color: c,
                hex: c,
                style: styles.swatch,
                onClick: handleChange,
                onHover: onSwatchHover,
                focusStyle: {
                  boxShadow: "0 0 4px " + c
                }
              });
            }),
            _react2.default.createElement(
              "div",
              { style: styles.hash },
              "#"
            ),
            _react2.default.createElement(_common.EditableInput, {
              label: null,
              style: { input: styles.input },
              value: hex.replace("#", ""),
              onChange: handleChange
            }),
            _react2.default.createElement("div", { style: styles.clear })
          )
        );
      };
      Twitter.propTypes = {
        width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        triangle: _propTypes2.default.oneOf(["hide", "top-left", "top-right"]),
        colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
        styles: _propTypes2.default.object
      };
      Twitter.defaultProps = {
        width: 276,
        colors: ["#FF6900", "#FCB900", "#7BDCB5", "#00D084", "#8ED1FC", "#0693E3", "#ABB8C3", "#EB144C", "#F78DA7", "#9900EF"],
        triangle: "top-left",
        styles: {}
      };
      exports.default = (0, _common.ColorWrap)(Twitter);
    }
  });

  // node_modules/react-color/lib/components/google/GooglePointerCircle.js
  var require_GooglePointerCircle = __commonJS({
    "node_modules/react-color/lib/components/google/GooglePointerCircle.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GooglePointerCircle = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var GooglePointerCircle = exports.GooglePointerCircle = function GooglePointerCircle2(props) {
        var styles = (0, _reactcss2.default)({
          "default": {
            picker: {
              width: "20px",
              height: "20px",
              borderRadius: "22px",
              border: "2px #fff solid",
              transform: "translate(-12px, -13px)",
              background: "hsl(" + Math.round(props.hsl.h) + ", " + Math.round(props.hsl.s * 100) + "%, " + Math.round(props.hsl.l * 100) + "%)"
            }
          }
        });
        return _react2.default.createElement("div", { style: styles.picker });
      };
      GooglePointerCircle.propTypes = {
        hsl: _propTypes2.default.shape({
          h: _propTypes2.default.number,
          s: _propTypes2.default.number,
          l: _propTypes2.default.number,
          a: _propTypes2.default.number
        })
      };
      GooglePointerCircle.defaultProps = {
        hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
      };
      exports.default = GooglePointerCircle;
    }
  });

  // node_modules/react-color/lib/components/google/GooglePointer.js
  var require_GooglePointer = __commonJS({
    "node_modules/react-color/lib/components/google/GooglePointer.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GooglePointer = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var GooglePointer = exports.GooglePointer = function GooglePointer2(props) {
        var styles = (0, _reactcss2.default)({
          "default": {
            picker: {
              width: "20px",
              height: "20px",
              borderRadius: "22px",
              transform: "translate(-10px, -7px)",
              background: "hsl(" + Math.round(props.hsl.h) + ", 100%, 50%)",
              border: "2px white solid"
            }
          }
        });
        return _react2.default.createElement("div", { style: styles.picker });
      };
      GooglePointer.propTypes = {
        hsl: _propTypes2.default.shape({
          h: _propTypes2.default.number,
          s: _propTypes2.default.number,
          l: _propTypes2.default.number,
          a: _propTypes2.default.number
        })
      };
      GooglePointer.defaultProps = {
        hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 }
      };
      exports.default = GooglePointer;
    }
  });

  // node_modules/react-color/lib/components/google/GoogleFields.js
  var require_GoogleFields = __commonJS({
    "node_modules/react-color/lib/components/google/GoogleFields.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.GoogleFields = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _color = require_color();
      var color = _interopRequireWildcard(_color);
      var _common = require_common();
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj.default = obj;
          return newObj;
        }
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var GoogleFields = exports.GoogleFields = function GoogleFields2(_ref) {
        var onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hex = _ref.hex, hsv = _ref.hsv;
        var handleChange = function handleChange2(data, e) {
          if (data.hex) {
            color.isValidHex(data.hex) && onChange({
              hex: data.hex,
              source: "hex"
            }, e);
          } else if (data.rgb) {
            var values = data.rgb.split(",");
            color.isvalidColorString(data.rgb, "rgb") && onChange({
              r: values[0],
              g: values[1],
              b: values[2],
              a: 1,
              source: "rgb"
            }, e);
          } else if (data.hsv) {
            var _values = data.hsv.split(",");
            if (color.isvalidColorString(data.hsv, "hsv")) {
              _values[2] = _values[2].replace("%", "");
              _values[1] = _values[1].replace("%", "");
              _values[0] = _values[0].replace("\xB0", "");
              if (_values[1] == 1) {
                _values[1] = 0.01;
              } else if (_values[2] == 1) {
                _values[2] = 0.01;
              }
              onChange({
                h: Number(_values[0]),
                s: Number(_values[1]),
                v: Number(_values[2]),
                source: "hsv"
              }, e);
            }
          } else if (data.hsl) {
            var _values2 = data.hsl.split(",");
            if (color.isvalidColorString(data.hsl, "hsl")) {
              _values2[2] = _values2[2].replace("%", "");
              _values2[1] = _values2[1].replace("%", "");
              _values2[0] = _values2[0].replace("\xB0", "");
              if (hsvValue[1] == 1) {
                hsvValue[1] = 0.01;
              } else if (hsvValue[2] == 1) {
                hsvValue[2] = 0.01;
              }
              onChange({
                h: Number(_values2[0]),
                s: Number(_values2[1]),
                v: Number(_values2[2]),
                source: "hsl"
              }, e);
            }
          }
        };
        var styles = (0, _reactcss2.default)({
          "default": {
            wrap: {
              display: "flex",
              height: "100px",
              marginTop: "4px"
            },
            fields: {
              width: "100%"
            },
            column: {
              paddingTop: "10px",
              display: "flex",
              justifyContent: "space-between"
            },
            double: {
              padding: "0px 4.4px",
              boxSizing: "border-box"
            },
            input: {
              width: "100%",
              height: "38px",
              boxSizing: "border-box",
              padding: "4px 10% 3px",
              textAlign: "center",
              border: "1px solid #dadce0",
              fontSize: "11px",
              textTransform: "lowercase",
              borderRadius: "5px",
              outline: "none",
              fontFamily: "Roboto,Arial,sans-serif"
            },
            input2: {
              height: "38px",
              width: "100%",
              border: "1px solid #dadce0",
              boxSizing: "border-box",
              fontSize: "11px",
              textTransform: "lowercase",
              borderRadius: "5px",
              outline: "none",
              paddingLeft: "10px",
              fontFamily: "Roboto,Arial,sans-serif"
            },
            label: {
              textAlign: "center",
              fontSize: "12px",
              background: "#fff",
              position: "absolute",
              textTransform: "uppercase",
              color: "#3c4043",
              width: "35px",
              top: "-6px",
              left: "0",
              right: "0",
              marginLeft: "auto",
              marginRight: "auto",
              fontFamily: "Roboto,Arial,sans-serif"
            },
            label2: {
              left: "10px",
              textAlign: "center",
              fontSize: "12px",
              background: "#fff",
              position: "absolute",
              textTransform: "uppercase",
              color: "#3c4043",
              width: "32px",
              top: "-6px",
              fontFamily: "Roboto,Arial,sans-serif"
            },
            single: {
              flexGrow: "1",
              margin: "0px 4.4px"
            }
          }
        });
        var rgbValue = rgb.r + ", " + rgb.g + ", " + rgb.b;
        var hslValue = Math.round(hsl.h) + "\xB0, " + Math.round(hsl.s * 100) + "%, " + Math.round(hsl.l * 100) + "%";
        var hsvValue = Math.round(hsv.h) + "\xB0, " + Math.round(hsv.s * 100) + "%, " + Math.round(hsv.v * 100) + "%";
        return _react2.default.createElement(
          "div",
          { style: styles.wrap, className: "flexbox-fix" },
          _react2.default.createElement(
            "div",
            { style: styles.fields },
            _react2.default.createElement(
              "div",
              { style: styles.double },
              _react2.default.createElement(_common.EditableInput, {
                style: { input: styles.input, label: styles.label },
                label: "hex",
                value: hex,
                onChange: handleChange
              })
            ),
            _react2.default.createElement(
              "div",
              { style: styles.column },
              _react2.default.createElement(
                "div",
                { style: styles.single },
                _react2.default.createElement(_common.EditableInput, {
                  style: { input: styles.input2, label: styles.label2 },
                  label: "rgb",
                  value: rgbValue,
                  onChange: handleChange
                })
              ),
              _react2.default.createElement(
                "div",
                { style: styles.single },
                _react2.default.createElement(_common.EditableInput, {
                  style: { input: styles.input2, label: styles.label2 },
                  label: "hsv",
                  value: hsvValue,
                  onChange: handleChange
                })
              ),
              _react2.default.createElement(
                "div",
                { style: styles.single },
                _react2.default.createElement(_common.EditableInput, {
                  style: { input: styles.input2, label: styles.label2 },
                  label: "hsl",
                  value: hslValue,
                  onChange: handleChange
                })
              )
            )
          )
        );
      };
      exports.default = GoogleFields;
    }
  });

  // node_modules/react-color/lib/components/google/Google.js
  var require_Google = __commonJS({
    "node_modules/react-color/lib/components/google/Google.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Google = void 0;
      var _react = require_react();
      var _react2 = _interopRequireDefault(_react);
      var _propTypes = require_prop_types();
      var _propTypes2 = _interopRequireDefault(_propTypes);
      var _reactcss = require_lib();
      var _reactcss2 = _interopRequireDefault(_reactcss);
      var _merge = require_merge();
      var _merge2 = _interopRequireDefault(_merge);
      var _common = require_common();
      var _GooglePointerCircle = require_GooglePointerCircle();
      var _GooglePointerCircle2 = _interopRequireDefault(_GooglePointerCircle);
      var _GooglePointer = require_GooglePointer();
      var _GooglePointer2 = _interopRequireDefault(_GooglePointer);
      var _GoogleFields = require_GoogleFields();
      var _GoogleFields2 = _interopRequireDefault(_GoogleFields);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      var Google = exports.Google = function Google2(_ref) {
        var width = _ref.width, onChange = _ref.onChange, rgb = _ref.rgb, hsl = _ref.hsl, hsv = _ref.hsv, hex = _ref.hex, header = _ref.header, _ref$styles = _ref.styles, passedStyles = _ref$styles === void 0 ? {} : _ref$styles, _ref$className = _ref.className, className = _ref$className === void 0 ? "" : _ref$className;
        var styles = (0, _reactcss2.default)((0, _merge2.default)({
          "default": {
            picker: {
              width,
              background: "#fff",
              border: "1px solid #dfe1e5",
              boxSizing: "initial",
              display: "flex",
              flexWrap: "wrap",
              borderRadius: "8px 8px 0px 0px"
            },
            head: {
              height: "57px",
              width: "100%",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "16px",
              fontSize: "20px",
              boxSizing: "border-box",
              fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
            },
            saturation: {
              width: "70%",
              padding: "0px",
              position: "relative",
              overflow: "hidden"
            },
            swatch: {
              width: "30%",
              height: "228px",
              padding: "0px",
              background: "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", 1)",
              position: "relative",
              overflow: "hidden"
            },
            body: {
              margin: "auto",
              width: "95%"
            },
            controls: {
              display: "flex",
              boxSizing: "border-box",
              height: "52px",
              paddingTop: "22px"
            },
            color: {
              width: "32px"
            },
            hue: {
              height: "8px",
              position: "relative",
              margin: "0px 16px 0px 16px",
              width: "100%"
            },
            Hue: {
              radius: "2px"
            }
          }
        }, passedStyles));
        return _react2.default.createElement(
          "div",
          { style: styles.picker, className: "google-picker " + className },
          _react2.default.createElement(
            "div",
            { style: styles.head },
            header
          ),
          _react2.default.createElement("div", { style: styles.swatch }),
          _react2.default.createElement(
            "div",
            { style: styles.saturation },
            _react2.default.createElement(_common.Saturation, {
              hsl,
              hsv,
              pointer: _GooglePointerCircle2.default,
              onChange
            })
          ),
          _react2.default.createElement(
            "div",
            { style: styles.body },
            _react2.default.createElement(
              "div",
              { style: styles.controls, className: "flexbox-fix" },
              _react2.default.createElement(
                "div",
                { style: styles.hue },
                _react2.default.createElement(_common.Hue, {
                  style: styles.Hue,
                  hsl,
                  radius: "4px",
                  pointer: _GooglePointer2.default,
                  onChange
                })
              )
            ),
            _react2.default.createElement(_GoogleFields2.default, {
              rgb,
              hsl,
              hex,
              hsv,
              onChange
            })
          )
        );
      };
      Google.propTypes = {
        width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
        styles: _propTypes2.default.object,
        header: _propTypes2.default.string
      };
      Google.defaultProps = {
        width: 652,
        styles: {},
        header: "Color picker"
      };
      exports.default = (0, _common.ColorWrap)(Google);
    }
  });

  // node_modules/react-color/lib/index.js
  var require_lib2 = __commonJS({
    "node_modules/react-color/lib/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CustomPicker = exports.GooglePicker = exports.TwitterPicker = exports.SwatchesPicker = exports.SliderPicker = exports.SketchPicker = exports.PhotoshopPicker = exports.MaterialPicker = exports.HuePicker = exports.GithubPicker = exports.CompactPicker = exports.ChromePicker = exports.default = exports.CirclePicker = exports.BlockPicker = exports.AlphaPicker = void 0;
      var _Alpha = require_Alpha2();
      Object.defineProperty(exports, "AlphaPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Alpha).default;
        }
      });
      var _Block = require_Block();
      Object.defineProperty(exports, "BlockPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Block).default;
        }
      });
      var _Circle = require_Circle();
      Object.defineProperty(exports, "CirclePicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Circle).default;
        }
      });
      var _Chrome = require_Chrome();
      Object.defineProperty(exports, "ChromePicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Chrome).default;
        }
      });
      var _Compact = require_Compact();
      Object.defineProperty(exports, "CompactPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Compact).default;
        }
      });
      var _Github = require_Github();
      Object.defineProperty(exports, "GithubPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Github).default;
        }
      });
      var _Hue = require_Hue2();
      Object.defineProperty(exports, "HuePicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Hue).default;
        }
      });
      var _Material = require_Material();
      Object.defineProperty(exports, "MaterialPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Material).default;
        }
      });
      var _Photoshop = require_Photoshop();
      Object.defineProperty(exports, "PhotoshopPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Photoshop).default;
        }
      });
      var _Sketch = require_Sketch();
      Object.defineProperty(exports, "SketchPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Sketch).default;
        }
      });
      var _Slider = require_Slider();
      Object.defineProperty(exports, "SliderPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Slider).default;
        }
      });
      var _Swatches = require_Swatches();
      Object.defineProperty(exports, "SwatchesPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Swatches).default;
        }
      });
      var _Twitter = require_Twitter();
      Object.defineProperty(exports, "TwitterPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Twitter).default;
        }
      });
      var _Google = require_Google();
      Object.defineProperty(exports, "GooglePicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Google).default;
        }
      });
      var _ColorWrap = require_ColorWrap();
      Object.defineProperty(exports, "CustomPicker", {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_ColorWrap).default;
        }
      });
      var _Chrome2 = _interopRequireDefault(_Chrome);
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }
      exports.default = _Chrome2.default;
    }
  });

  // node_modules/validate-color/lib/index.js
  var require_lib3 = __commonJS({
    "node_modules/validate-color/lib/index.js"(exports, module) {
      module.exports = function(e) {
        var r = {};
        function t(n) {
          if (r[n])
            return r[n].exports;
          var a = r[n] = { i: n, l: false, exports: {} };
          return e[n].call(a.exports, a, a.exports, t), a.l = true, a.exports;
        }
        return t.m = e, t.c = r, t.d = function(e2, r2, n) {
          t.o(e2, r2) || Object.defineProperty(e2, r2, { enumerable: true, get: n });
        }, t.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, t.t = function(e2, r2) {
          if (1 & r2 && (e2 = t(e2)), 8 & r2)
            return e2;
          if (4 & r2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var n = /* @__PURE__ */ Object.create(null);
          if (t.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & r2 && "string" != typeof e2)
            for (var a in e2)
              t.d(n, a, function(r3) {
                return e2[r3];
              }.bind(null, a));
          return n;
        }, t.n = function(e2) {
          var r2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return t.d(r2, "a", r2), r2;
        }, t.o = function(e2, r2) {
          return Object.prototype.hasOwnProperty.call(e2, r2);
        }, t.p = "", t(t.s = 0);
      }([function(e, r, t) {
        "use strict";
        t.r(r), t.d(r, "validateHTMLColorName", function() {
          return l;
        }), t.d(r, "validateHTMLColorSpecialName", function() {
          return i;
        }), t.d(r, "validateHTMLColorHex", function() {
          return u;
        }), t.d(r, "validateHTMLColorRgb", function() {
          return g;
        }), t.d(r, "validateHTMLColorHsl", function() {
          return y;
        }), t.d(r, "validateHTMLColorHwb", function() {
          return L;
        }), t.d(r, "validateHTMLColorLab", function() {
          return S;
        }), t.d(r, "validateHTMLColorLch", function() {
          return m;
        }), t.d(r, "validateHTMLColor", function() {
          return G;
        });
        const n = (e2) => e2 && "string" == typeof e2, a = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenrod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "Goldenrod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenrodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquamarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenrod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"], o = ["currentColor", "inherit", "transparent"], l = (e2) => {
          let r2 = false;
          return n(e2) && a.map((t2) => (e2.toLowerCase() === t2.toLowerCase() && (r2 = true), null)), r2;
        }, i = (e2) => {
          let r2 = false;
          return n(e2) && o.map((t2) => (e2.toLowerCase() === t2.toLowerCase() && (r2 = true), null)), r2;
        }, u = (e2) => {
          if (n(e2)) {
            const r2 = /^#([\da-f]{3}){1,2}$|^#([\da-f]{4}){1,2}$/i;
            return e2 && r2.test(e2);
          }
          return false;
        }, d = "(([\\d]{0,5})((\\.([\\d]{1,5}))?))", s = `(${d}%)`, c = "(([0-9]|[1-9][0-9]|100)%)", f = `(${c}|(0?((\\.([\\d]{1,5}))?))|1)`, h = `([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?)([\\s]{1,5})${`(((${c}))|(0?((\\.([\\d]{1,5}))?))|1))?`}([\\s]{0,5})\\)`, $ = "(-?(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360)(deg)?)", g = (e2) => {
          if (n(e2)) {
            const r2 = "([\\s]{0,5})([\\d]{1,5})%?([\\s]{0,5}),?", t2 = "((([\\s]{0,5}),?([\\s]{0,5}))|(([\\s]{1,5})))", n2 = new RegExp(`^(rgb)a?\\(${`${r2}${t2}`}${`${r2}${t2}`}${`${r2}${t2}`}(${"(\\/?([\\s]{0,5})(0?\\.?([\\d]{1,5})%?([\\s]{0,5}))?|1|0)"})?\\)$`);
            return e2 && n2.test(e2);
          }
          return false;
        }, y = (e2) => {
          if (n(e2)) {
            const r2 = new RegExp(`^(hsl)a?\\((([\\s]{0,5})(${$}|${"(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-9][0-9]|400)grad)"}|${"((([0-5])?\\.([\\d]{1,5})|6\\.([0-9]|1[0-9]|2[0-8])|[0-6])rad)"}|${"((0?((\\.([\\d]{1,5}))?)|1)turn)"})((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${c})((([\\s]{0,5}),([\\s]{0,5}))|(([\\s]{1,5}))))(([\\s]{0,5})(0|${c})([\\s]{0,5})\\)?)(([\\s]{0,5})(\\/?|,?)([\\s]{0,5})(((${c}))|(0?((\\.([\\d]{1,5}))?))|1))?\\)$`);
            return e2 && r2.test(e2);
          }
          return false;
        }, L = (e2) => {
          if (n(e2)) {
            const r2 = new RegExp(`^(hwb\\(([\\s]{0,5})${$}([\\s]{1,5}))((0|${c})([\\s]{1,5}))((0|${c})${h}$`);
            return e2 && r2.test(e2);
          }
          return false;
        }, S = (e2) => {
          if (n(e2)) {
            const r2 = "(-?(([0-9]|[1-9][0-9]|1[0-5][0-9])((\\.([\\d]{1,5}))?)?|160))", t2 = new RegExp(`^(lab\\(([\\s]{0,5})${s}([\\s]{1,5})${r2}([\\s]{1,5})${r2}${h}$`);
            return e2 && t2.test(e2);
          }
          return false;
        }, m = (e2) => {
          if (n(e2)) {
            const r2 = "((([0-9]|[1-9][0-9])?((\\.([\\d]{1,5}))?)|100)(%)?)", t2 = "" + d, n2 = `((${$})|(0|${f})|(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9])((\\.([\\d]{1,5}))?)|360))`, a2 = `(\\/([\\s]{0,5})${f})`, o2 = new RegExp(`^lch\\(${`(([\\s]{0,5})${r2}([\\s]{1,5})${t2}([\\s]{1,5})${n2}([\\s]{0,5})(${a2})?)`}\\)$`);
            return e2 && o2.test(e2);
          }
          return false;
        }, G = (e2) => !!(e2 && u(e2) || g(e2) || y(e2) || L(e2) || S(e2) || m(e2));
        r.default = (e2) => !!(e2 && u(e2) || l(e2) || i(e2) || g(e2) || y(e2) || L(e2) || S(e2) || m(e2));
      }]);
    }
  });

  // node_modules/netlify-cms-widget-colorpicker/dist/ColorControl.js
  var require_ColorControl = __commonJS({
    "node_modules/netlify-cms-widget-colorpicker/dist/ColorControl.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = void 0;
      var _react = _interopRequireDefault(require_react());
      var _propTypes = _interopRequireDefault(require_prop_types());
      var _reactColor = require_lib2();
      var _validateColor = _interopRequireDefault(require_lib3());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
        if (superClass)
          _setPrototypeOf(subClass, superClass);
      }
      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        };
        return _setPrototypeOf(o, p);
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return _possibleConstructorReturn(this, result);
        };
      }
      function _possibleConstructorReturn(self2, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        }
        return _assertThisInitialized(self2);
      }
      function _assertThisInitialized(self2) {
        if (self2 === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self2;
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        };
        return _getPrototypeOf(o);
      }
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      var Picker = {
        block: _reactColor.BlockPicker,
        chrome: _reactColor.ChromePicker,
        compact: _reactColor.CompactPicker,
        github: _reactColor.GithubPicker,
        sketch: _reactColor.SketchPicker,
        swatches: _reactColor.SwatchesPicker,
        twitter: _reactColor.TwitterPicker
      };
      var DefaultPickerWidth = {
        block: "170px",
        github: "187px",
        sketch: "244px",
        swatches: "322px",
        twitter: "276px"
      };
      var DefaultPresetColors = {
        block: ["#F44336", "#9C27B0", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#9E9E9E", "#607D8B"],
        compact: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#607D8B", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#000000"],
        github: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548", "#607d8b", "#455a64", "#9E9E9E", "#616161"],
        sketch: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#9e9e9e", "#607d8b"],
        swatches: [["#FF8A80", "#FF5252", "#FF1744", "#D50000"], ["#FF80AB", "#FF4081", "#F50057", "#C51162"], ["#EA80FC", "#E040FB", "#D500F9", "#AA00FF"], ["#B388FF", "#7C4DFF", "#651FFF", "#6200EA"], ["#8C9EFF", "#536DFE", "#3D5AFE", "#304FFE"], ["#80D8FF", "#40C4FF", "#00B0FF", "#0091EA"], ["#84FFFF", "#18FFFF", "#00E5FF", "#00B8D4"], ["#A7FFEB", "#64FFDA", "#1DE9B6", "#00BFA5"], ["#B9F6CA", "#69F0AE", "#00E676", "#00C853"], ["#CCFF90", "#B2FF59", "#76FF03", "#64DD17"], ["#FFFF8D", "#FFFF00", "#FFEA00", "#FFD600"], ["#FFD180", "#FFAB40", "#FF9100", "#FF6D00"]],
        twitter: ["#F44336", "#E91E63", "#9C27B0", "#673AB7", "#3F51B5", "#2196F3", "#03A9F4", "#00BCD4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#9E9E9E", "#607D8B"]
      };
      var ColorControl2 = /* @__PURE__ */ function(_React$Component) {
        _inherits(ColorControl3, _React$Component);
        var _super = _createSuper(ColorControl3);
        function ColorControl3() {
          var _this;
          _classCallCheck(this, ColorControl3);
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _super.call.apply(_super, [this].concat(args));
          _defineProperty(_assertThisInitialized(_this), "state", {
            showColorPicker: false
          });
          _defineProperty(_assertThisInitialized(_this), "handleClick", function() {
            _this.setState({
              showColorPicker: !_this.state.showColorPicker
            });
          });
          _defineProperty(_assertThisInitialized(_this), "handleClear", function() {
            _this.props.onChange("");
          });
          _defineProperty(_assertThisInitialized(_this), "handleClose", function() {
            _this.setState({
              showColorPicker: false
            });
          });
          _defineProperty(_assertThisInitialized(_this), "handleChange", function(color) {
            var formatedColor = color.rgb.a < 1 ? "rgba(".concat(color.rgb.r, ", ").concat(color.rgb.g, ", ").concat(color.rgb.b, ", ").concat(color.rgb.a, ")") : color.hex;
            _this.props.onChange(formatedColor);
          });
          return _this;
        }
        _createClass(ColorControl3, [{
          key: "render",
          value: function render() {
            var allowInput = this.props.field.get("allowInput") || false;
            var DynamicPicker = Picker[this.props.field.get("picker") || "chrome"];
            var presetColors = this.props.field.get("presetColors") ? this.props.field.get("presetColors").toJS() : DefaultPresetColors[this.props.field.get("picker") || ""];
            var pickerWidth = this.props.field.get("pickerWidth") ? this.props.field.get("pickerWidth") : DefaultPickerWidth[this.props.field.get("picker") || ""];
            var _this$props = this.props, forID = _this$props.forID, value = _this$props.value, _onChange = _this$props.onChange, classNameWrapper = _this$props.classNameWrapper, setActiveStyle = _this$props.setActiveStyle, setInactiveStyle = _this$props.setInactiveStyle;
            return /* @__PURE__ */ _react["default"].createElement(_react["default"].Fragment, null, " ", !allowInput && value ? /* @__PURE__ */ _react["default"].createElement("div", {
              style: {
                position: "relative",
                width: "100%"
              }
            }, /* @__PURE__ */ _react["default"].createElement("div", {
              // clear button, not displayed if allowInput: true
              style: {
                position: "absolute",
                right: "6px",
                zIndex: "1000",
                padding: "8px",
                marginTop: "11px"
              },
              onClick: this.handleClear
            }, /* @__PURE__ */ _react["default"].createElement("svg", {
              height: "20",
              width: "20",
              viewBox: "0 0 20 20",
              "aria-hidden": "true",
              focusable: "false"
            }, /* @__PURE__ */ _react["default"].createElement("path", {
              fill: "rgb(122, 130, 145)",
              d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
            })))) : null, /* @__PURE__ */ _react["default"].createElement("div", {
              // color swatch background with checkerboard to display behind transparent colors
              style: {
                position: "absolute",
                zIndex: "1",
                background: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0pgAAAABJRU5ErkJggg==")',
                height: "38px",
                width: "48px",
                marginTop: "10px",
                marginLeft: "10px",
                borderRadius: "5px"
              }
            }), /* @__PURE__ */ _react["default"].createElement("div", {
              // color swatch
              style: {
                position: "absolute",
                zIndex: "2",
                background: (0, _validateColor["default"])(this.props.value) ? this.props.value : "#fff",
                cursor: "pointer",
                height: "38px",
                width: "48px",
                marginTop: "10px",
                marginLeft: "10px",
                borderRadius: "5px",
                border: "2px solid rgb(223, 223, 227)",
                textAlign: "center",
                fontSize: "27px",
                lineHeight: "1",
                paddingTop: "4px",
                userSelect: "none",
                color: (0, _validateColor["default"])(this.props.value) ? "rgba(255, 255, 255, 0)" : "rgb(223, 223, 227)"
              },
              onClick: this.handleClick
            }, "?"), this.state.showColorPicker ? /* @__PURE__ */ _react["default"].createElement("div", {
              // color picker container
              style: {
                position: "absolute",
                zIndex: "1000",
                marginTop: "48px",
                marginLeft: "12px"
              }
            }, /* @__PURE__ */ _react["default"].createElement("div", {
              // fullscreen div to close color picker when clicking outside of picker
              style: {
                position: "fixed",
                top: "0px",
                right: "0px",
                bottom: "0px",
                left: "0px"
              },
              onClick: this.handleClose
            }), /* @__PURE__ */ _react["default"].createElement(DynamicPicker, {
              color: value || "",
              onChange: this.handleChange,
              triangle: "hide",
              width: pickerWidth,
              height: this.props.field.get("pickerHeight") || "242px",
              colors: presetColors,
              presetColors,
              disableAlpha: !this.props.field.get("enableAlpha") || false
            })) : null, /* @__PURE__ */ _react["default"].createElement("input", {
              // text input with padding left for the color swatch
              type: "text",
              id: forID,
              className: classNameWrapper,
              value: value || "",
              onChange: function onChange(e) {
                return _onChange(e.target.value);
              },
              onFocus: setActiveStyle,
              onBlur: setInactiveStyle,
              style: {
                paddingLeft: "75px",
                paddingRight: "70px",
                color: !allowInput && "#bbb"
              },
              onClick: !allowInput && this.handleClick,
              readOnly: !allowInput
            }));
          }
        }]);
        return ColorControl3;
      }(_react["default"].Component);
      exports["default"] = ColorControl2;
      _defineProperty(ColorControl2, "propTypes", {
        onChange: _propTypes["default"].func.isRequired,
        forID: _propTypes["default"].string,
        value: _propTypes["default"].node,
        classNameWrapper: _propTypes["default"].string.isRequired,
        setActiveStyle: _propTypes["default"].func.isRequired,
        setInactiveStyle: _propTypes["default"].func.isRequired
      });
      _defineProperty(ColorControl2, "defaultProps", {
        value: ""
      });
    }
  });

  // node_modules/netlify-cms-widget-colorpicker/dist/ColorPreview.js
  var require_ColorPreview = __commonJS({
    "node_modules/netlify-cms-widget-colorpicker/dist/ColorPreview.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports["default"] = ColorPreview2;
      var _react = _interopRequireDefault(require_react());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      function ColorPreview2(_ref) {
        var value = _ref.value;
        return /* @__PURE__ */ _react["default"].createElement("div", null, value);
      }
    }
  });

  // node_modules/netlify-cms-widget-colorpicker/dist/index.js
  var require_dist = __commonJS({
    "node_modules/netlify-cms-widget-colorpicker/dist/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "ColorControl", {
        enumerable: true,
        get: function get() {
          return _ColorControl["default"];
        }
      });
      Object.defineProperty(exports, "ColorPreview", {
        enumerable: true,
        get: function get() {
          return _ColorPreview["default"];
        }
      });
      var _ColorControl = _interopRequireDefault(require_ColorControl());
      var _ColorPreview = _interopRequireDefault(require_ColorPreview());
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
    }
  });

  // src/admin/js/cms.js
  var import_netlify_cms_widget_colorpicker = __toESM(require_dist());
  CMS.registerWidget("color", import_netlify_cms_widget_colorpicker.ColorControl, import_netlify_cms_widget_colorpicker.ColorPreview);
})();
/*! Bundled license information:

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

react/cjs/react.development.js:
  (** @license React v16.14.0
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=cms.js.map
