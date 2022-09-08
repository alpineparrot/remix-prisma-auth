var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// node_modules/remix/dist/index.js
var require_dist = __commonJS({
  "node_modules/remix/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: !0,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: !0,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: !0,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: !0,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: !0,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: !0,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: !0,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: !0,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: !0,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: !0,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: !0,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: !0,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: !0,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: !0,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: !0,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: !0,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: !0,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: !0,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: !0,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: !0,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: !0,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: !0,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: !0,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: !0,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: !0,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: !0,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: !0,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: !0,
      get: function() {
        return react.useTransition;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: !0,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: !0,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: !0,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: !0,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: !0,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: !0,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: !0,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: !0,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: !0,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: !0,
      get: function() {
        return react.useSearchParams;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_server = require("react-dom/server"), import_remix = __toESM(require_dist()), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_remix2 = __toESM(require_dist());

// app/styles/app.css
var app_default = "/build/_assets/app-CQUNN6HF.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: app_default }], meta = () => ({ title: "New Remix App" });
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("meta", {
            name: "viewport",
            content: "width=device-width,initial-scale=1"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/index.ts
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader
});

// app/utils/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/auth.server.ts
var import_node = require("@remix-run/node");

// app/utils/users.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
var createUser = async (user) => {
  let passwordHash = await import_bcryptjs.default.hash(user.password, 10);
  return { id: (await prisma.user.create({
    data: {
      email: user.email,
      password: passwordHash,
      profile: {
        firstName: user.firstName,
        lastName: user.lastName
      }
    }
  })).id, email: user.email };
}, getOtherUsers = async (userId) => prisma.user.findMany({
  where: {
    id: { not: userId }
  },
  orderBy: {
    profile: {
      firstName: "asc"
    }
  }
});

// app/utils/auth.server.ts
var import_bcryptjs2 = __toESM(require("bcryptjs")), secret = process.env.SESSION_SECRET;
if (!secret)
  throw new Error("SESSION_SECRET is not set");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "kudos-session",
    secure: !1,
    secrets: [secret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function register(user) {
  if (await prisma.user.count({ where: { email: user.email } }))
    return (0, import_node.json)({ error: "User already exists with that email" }, { status: 400 });
  let newUser = await createUser(user);
  return newUser ? createUserSession(newUser.id, "/") : (0, import_node.json)(
    {
      error: "Something went wrong trying to create a new user.",
      fields: { email: user.email, password: user.password }
    },
    { status: 400 }
  );
}
var login = async (form) => {
  let user = await prisma.user.findUnique({
    where: { email: form.email }
  });
  return !user || !await import_bcryptjs2.default.compare(form.password, user.password) ? (0, import_node.json)({ error: "Incorrect login" }, { status: 400 }) : createUserSession(user.id, "/");
}, createUserSession = async (userId, redirectTo) => {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node.redirect)(redirectTo, {
    header: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
};
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { id: !0, email: !0, profile: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/routes/index.ts
var import_node2 = require("@remix-run/node"), loader = async ({ request }) => (await requireUserId(request), (0, import_node2.redirect)("/home"));

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Login,
  loader: () => loader2
});
var import_react2 = require("react");

// app/components/layout.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Layout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "h-screen w-full bg-blue-600 font-mono",
    children
  }, void 0, !1, {
    fileName: "app/components/layout.tsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

// app/components/form-field.tsx
var import_react = require("react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FormField({
  htmlFor,
  label,
  type = "text",
  value,
  onChange = () => {
  },
  error = ""
}) {
  let [errorText, setErrorText] = (0, import_react.useState)(error);
  return (0, import_react.useEffect)(() => {
    setErrorText(error);
  }, [error]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
        htmlFor,
        className: "text-blue-600 font-semibold",
        children: label
      }, void 0, !1, {
        fileName: "app/components/form-field.tsx",
        lineNumber: 28,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
        onChange: (e) => {
          onChange(e), setErrorText("");
        },
        type,
        id: htmlFor,
        name: htmlFor,
        className: "w-full p-2 rounded-xl my-2",
        value
      }, void 0, !1, {
        fileName: "app/components/form-field.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full",
        children: errorText || ""
      }, void 0, !1, {
        fileName: "app/components/form-field.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/form-field.tsx",
    lineNumber: 27,
    columnNumber: 12
  }, this);
}

// app/routes/login.tsx
var import_node3 = require("@remix-run/node");

// app/utils/validators.server.ts
var validateEmail = (email) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.length || !validRegex.test(email))
    return "Please enter a valid email address";
}, validatePassword = (password) => {
  if (password.length < 5)
    return "Please enter a password that is at least 5 characters long";
}, validateName = (name) => {
  if (!name.length)
    return "Please enter a value";
};

// app/routes/login.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => await getUser(request) ? redirect("/") : null, action = async ({ request }) => {
  let form = await request.formData(), action2 = form.get("_action"), email = form.get("email"), password = form.get("password"), firstName = form.get("firstName"), lastName = form.get("lastName");
  if (typeof action2 != "string" || typeof email != "string" || typeof password != "string")
    return (0, import_node3.json)(
      { error: "Invalid Form Data", form: action2 },
      { status: 400 }
    );
  if (action2 === "register" && (typeof firstName != "string" || typeof lastName != "string"))
    return (0, import_node3.json)(
      { error: "Invalid Form Data", form: action2 },
      { status: 400 }
    );
  let errors = {
    email: validateEmail(email),
    password: validatePassword(password),
    ...action2 === "register" ? {
      firstName: validateName(firstName || ""),
      lastName: validateName(lastName || "")
    } : {}
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node3.json)({ errors, fields: { email, password, firstName, lastName }, form: action2 }, { status: 400 });
  switch (action2) {
    case "login":
      return await login({ email, password });
    case "register":
      return firstName = firstName, lastName = lastName, await register({ email, password, firstName, lastName });
    default:
      return (0, import_node3.json)({ error: "Invalid Form Data" }, { status: 400 });
  }
};
function Login() {
  var _a, _b, _c, _d;
  let actionData = (0, import_react3.useActionData)(), [formError, setFormError] = (0, import_react2.useState)((actionData == null ? void 0 : actionData.error) || ""), [errors, setErrors] = (0, import_react2.useState)((actionData == null ? void 0 : actionData.errors) || {}), [action2, setAction] = (0, import_react2.useState)("login"), firstLoad = (0, import_react2.useRef)(!0), [formData, setFormData] = (0, import_react2.useState)({
    email: ((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.email) || "",
    password: ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.password) || "",
    firstName: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.lastName) || "",
    lastName: ((_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.firstName) || ""
  }), handleInputChange = (event, field) => {
    setFormData((form) => ({ ...form, [field]: event.target.value }));
  };
  return (0, import_react2.useEffect)(() => {
    if (!firstLoad.current) {
      let newState = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
      };
      setErrors(newState), setFormError(""), setFormData(newState);
    }
  }, [action2]), (0, import_react2.useEffect)(() => {
    firstLoad.current || setFormError("");
  }, [formData]), (0, import_react2.useEffect)(() => {
    firstLoad.current = !1;
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "h-full justify-center items-center flex flex-col gap-y-4",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          onClick: () => setAction(action2 == "login" ? "register" : "login"),
          className: "absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
          children: action2 === "login" ? "Sign Up" : "Sign In"
        }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 121,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "text-5xl font-extrabold text-yellow-300",
          children: "Welcome to Kudos!"
        }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "font-semibold text-slate-300",
          children: action2 === "login" ? "Log In To Give Some Praise!" : "Sign Up To Get Started!"
        }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 130,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
          method: "post",
          className: "rounded-2xl bg-gray-200 p-6 w-96",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "text-xs font-semibold text-center tracking-wide text-red-500 w-full",
              children: formError
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 137,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
              htmlFor: "email",
              label: "Email",
              value: formData.email,
              onChange: (e) => handleInputChange(e, "email"),
              error: errors == null ? void 0 : errors.email
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 140,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
              htmlFor: "password",
              type: "password",
              label: "Password",
              value: formData.password,
              onChange: (e) => handleInputChange(e, "password"),
              error: errors == null ? void 0 : errors.password
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 147,
              columnNumber: 13
            }, this),
            action2 !== "login" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                  htmlFor: "firstName",
                  label: "First Name",
                  onChange: (e) => handleInputChange(e, "firstName"),
                  value: formData.firstName,
                  error: errors == null ? void 0 : errors.firstName
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 158,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormField, {
                  htmlFor: "lastName",
                  label: "Last Name",
                  onChange: (e) => handleInputChange(e, "lastName"),
                  value: formData.lastName,
                  error: errors == null ? void 0 : errors.lastName
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 165,
                  columnNumber: 17
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/login.tsx",
              lineNumber: 157,
              columnNumber: 15
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full text-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                type: "submit",
                name: "_action",
                value: action2,
                className: "rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
                children: action2 === "login" ? "Sign In" : "Sign Up"
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 175,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 174,
              columnNumber: 13
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 120,
      columnNumber: 9
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 119,
    columnNumber: 7
  }, this);
}

// app/routes/home.tsx
var home_exports = {};
__export(home_exports, {
  default: () => Home,
  loader: () => loader3
});

// app/components/user-circle.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function UserCircle({ profile, onClick, className }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: `${className} cursor-pointer bg-gray-400 rounded-full flex justify-center items-center`,
    onClick,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
      children: [
        profile.firstName.charAt(0).toUpperCase(),
        profile.lastName.charAt(0).toUpperCase()
      ]
    }, void 0, !0, {
      fileName: "app/components/user-circle.tsx",
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, !1, {
    fileName: "app/components/user-circle.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this);
}

// app/components/user-panel.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function UserPanel({ users: users2 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "w-1/6 bg-gray-200 flex flex-col",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-center bg-gray-300 h-20 flex items-center justify-center",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
          className: "text-xl text-blue-600 font-semibold",
          children: "My Team"
        }, void 0, !1, {
          fileName: "app/components/user-panel.tsx",
          lineNumber: 12,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/user-panel.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex-1 overflow-y-scroll py-4 flex flex-col gap-y-10",
        children: users2.map((user) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserCircle, {
          profile: user.profile,
          className: "h-24 w-24 mx-auto flex-shrink-0"
        }, user.id, !1, {
          fileName: "app/components/user-panel.tsx",
          lineNumber: 16,
          columnNumber: 29
        }, this))
      }, void 0, !1, {
        fileName: "app/components/user-panel.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-center p-6 bg-gray-300",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
          type: "submit",
          className: "rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1",
          children: "Sign Out"
        }, void 0, !1, {
          fileName: "app/components/user-panel.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/components/user-panel.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/components/user-panel.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/home.tsx
var import_node4 = require("@remix-run/node");
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => {
  let userId = await requireUserId(request), users2 = await getOtherUsers(userId);
  return (0, import_node4.json)({ users: users2 });
};
function Home() {
  let data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "h-full flex",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(UserPanel, {
        users
      }, void 0, !1, {
        fileName: "app/routes/home.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/home.tsx",
      lineNumber: 18,
      columnNumber: 5
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/home.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "49a6e2f6", entry: { module: "/build/entry.client-Z3C47RVY.js", imports: ["/build/_shared/chunk-X3SEAUVL.js", "/build/_shared/chunk-752Z7BSF.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-E4VW4P76.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/build/routes/home-IF6OSE5U.js", imports: ["/build/_shared/chunk-VAIYEPLK.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-6NZLKEI5.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-A5NDM72M.js", imports: ["/build/_shared/chunk-VAIYEPLK.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-49A6E2F6.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: home_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
/**
 * @remix-run/node v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
