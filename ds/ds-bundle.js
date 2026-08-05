/* @ds-bundle: {"format":4,"namespace":"StackLaunchDesignSystem_e69a91","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CodeBlock","sourcePath":"components/data/CodeBlock.jsx"},{"name":"MetricStat","sourcePath":"components/data/MetricStat.jsx"},{"name":"StatusPill","sourcePath":"components/data/StatusPill.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"92fdfcdd1910","components/core/Button.jsx":"00e41d9b47ba","components/core/Card.jsx":"5e646a9e1793","components/core/Icon.jsx":"22677200a15c","components/core/IconButton.jsx":"f286fcac98e3","components/core/Logo.jsx":"d861d4eb08a0","components/core/Tag.jsx":"e5b541b34a88","components/data/CodeBlock.jsx":"f7780182e59b","components/data/MetricStat.jsx":"e6d71882f353","components/data/StatusPill.jsx":"bda4bcbefdf4","components/feedback/Dialog.jsx":"157da839a44d","components/feedback/Toast.jsx":"ce0dc6f45890","components/feedback/Tooltip.jsx":"8bef6928a767","components/forms/Checkbox.jsx":"b9fb95f342a9","components/forms/Input.jsx":"8078eec60d8b","components/forms/Radio.jsx":"e6c3ef26267c","components/forms/Select.jsx":"18d7b60ba56a","components/forms/Switch.jsx":"4b231e6cd63f","components/navigation/SideNav.jsx":"c4b0c8fc440b","components/navigation/Tabs.jsx":"f6ca9988ca44","ui_kits/console/Screens.jsx":"8d239b167d73","ui_kits/console/Shell.jsx":"74369f71d2c0","ui_kits/website/Sections.jsx":"92f5a2c2d016"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.StackLaunchDesignSystem_e69a91 = window.StackLaunchDesignSystem_e69a91 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: "var(--surface-sunken)",
    color: "var(--text-body)",
    border: "var(--border-hairline)"
  },
  accent: {
    background: "var(--azure-50)",
    color: "var(--azure-700)",
    border: "var(--azure-100)"
  },
  live: {
    background: "var(--signal-live-bg)",
    color: "var(--emerald-700)",
    border: "var(--signal-live-border)"
  },
  warn: {
    background: "var(--signal-warn-bg)",
    color: "var(--signal-warn)",
    border: "transparent"
  },
  error: {
    background: "var(--signal-error-bg)",
    color: "var(--signal-error)",
    border: "transparent"
  },
  inverse: {
    background: "var(--navy-900)",
    color: "#fff",
    border: "transparent"
  }
};
function Badge({
  children,
  tone = "neutral",
  mono = false,
  style,
  ...rest
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      height: "22px",
      padding: "0 8px",
      borderRadius: "var(--radius-xs)",
      background: t.background,
      color: t.color,
      border: `var(--border-width) solid ${t.border}`,
      font: mono ? "var(--weight-medium) var(--text-micro)/1 var(--font-mono)" : "var(--weight-medium) var(--text-micro)/1 var(--font-sans)",
      letterSpacing: mono ? "var(--tracking-label)" : ".02em",
      textTransform: mono ? "uppercase" : "none",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  font: "var(--weight-medium) var(--text-body-sm)/1 var(--font-sans)",
  letterSpacing: "var(--tracking-body)",
  borderRadius: "var(--radius-control)",
  border: "var(--border-width) solid transparent",
  cursor: "pointer",
  transition: "var(--transition-control)",
  whiteSpace: "nowrap",
  textDecoration: "none"
};
const sizes = {
  sm: {
    height: "var(--control-h-sm)",
    padding: "0 12px",
    fontSize: "var(--text-caption)"
  },
  md: {
    height: "var(--control-h-md)",
    padding: "0 16px"
  },
  lg: {
    height: "var(--control-h-lg)",
    padding: "0 22px",
    fontSize: "var(--text-body-md)"
  }
};
const variants = {
  primary: {
    background: "var(--action-primary-bg)",
    color: "var(--action-primary-fg)",
    boxShadow: "var(--shadow-xs)"
  },
  secondary: {
    background: "var(--action-secondary-bg)",
    color: "var(--action-secondary-fg)",
    borderColor: "var(--border-strong)"
  },
  ghost: {
    background: "transparent",
    color: "var(--text-body)"
  },
  danger: {
    background: "var(--signal-error)",
    color: "#fff"
  }
};
const hovers = {
  primary: {
    background: "var(--action-primary-bg-hover)"
  },
  secondary: {
    background: "var(--action-secondary-bg-hover)",
    borderColor: "var(--slate-400)"
  },
  ghost: {
    background: "var(--action-ghost-bg-hover)",
    color: "var(--text-strong)"
  },
  danger: {
    filter: "brightness(.92)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  href,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? "a" : "button";
  const css = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: `scale(${"var(--press-scale)".replace("var(--press-scale)", ".985")})`
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...(disabled ? {
      opacity: 0.45,
      cursor: "not-allowed",
      boxShadow: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : disabled,
    onClick: disabled ? undefined : onClick,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = "var(--card-pad)",
  interactive = false,
  inset = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: inset ? "var(--surface-subtle)" : "var(--surface-card)",
      border: "var(--border-width) solid var(--border-hairline)",
      borderRadius: "var(--radius-card)",
      padding,
      boxShadow: inset ? "none" : "var(--shadow-sm)",
      transition: "var(--transition-surface)",
      ...(interactive ? {
        cursor: "pointer"
      } : null),
      ...(hover ? {
        transform: "translateY(-2px)",
        boxShadow: "var(--shadow-md)",
        borderColor: "var(--border-strong)"
      } : null),
      ...style
    }
  }), children);
}
function CardHeader({
  title,
  eyebrow,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      marginBottom: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "6px"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title)), action);
}
Object.assign(__ds_scope, { Card, CardHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Lucide icon rendered as a CSS mask so it inherits currentColor. */
function Icon({
  name,
  size = 16,
  strokeWidth,
  color = "currentColor",
  style,
  ...rest
}) {
  const url = `https://unpkg.com/lucide-static@0.400.0/icons/${name}.svg`;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    "aria-hidden": "true",
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "0 0 auto",
      background: color,
      WebkitMaskImage: `url(${url})`,
      maskImage: `url(${url})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
function IconButton({
  icon,
  name,
  label,
  variant = "ghost",
  size = "md",
  disabled,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const px = sizes[size];
  const variants = {
    ghost: {
      background: "transparent",
      color: "var(--text-muted)",
      borderColor: "transparent"
    },
    secondary: {
      background: "var(--action-secondary-bg)",
      color: "var(--action-secondary-fg)",
      borderColor: "var(--border-strong)"
    },
    primary: {
      background: "var(--action-primary-bg)",
      color: "var(--action-primary-fg)",
      borderColor: "transparent"
    }
  };
  const hovers = {
    ghost: {
      background: "var(--action-ghost-bg-hover)",
      color: "var(--text-strong)"
    },
    secondary: {
      background: "var(--action-secondary-bg-hover)"
    },
    primary: {
      background: "var(--action-primary-bg-hover)"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    type: "button",
    "aria-label": label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: px,
      height: px,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-control)",
      border: "var(--border-width) solid transparent",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)",
      ...variants[variant],
      ...(hover && !disabled ? hovers[variant] : null),
      ...(disabled ? {
        opacity: 0.45
      } : null),
      ...style
    }
  }), icon || /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: size === "sm" ? 15 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The StackLaunch lockup. Uses the supplied raster logo assets in /assets. */
function Logo({
  variant = "lockup",
  theme = "light",
  height,
  assetBase = "/assets",
  style,
  ...rest
}) {
  const files = {
    lockup: {
      light: "logo-lockup.png",
      dark: "logo-lockup-dark.png",
      h: 40
    },
    horizontal: {
      light: "logo-horizontal.png",
      dark: "logo-lockup-dark.png",
      h: 32
    },
    wordmark: {
      light: "logo-wordmark.png",
      dark: "logo-wordmark-dark.png",
      h: 22
    },
    mark: {
      light: "logo-mark.png",
      dark: "logo-mark-dark.png",
      h: 32
    }
  }[variant];
  return /*#__PURE__*/React.createElement("img", _extends({}, rest, {
    src: `${assetBase}/${files[theme]}`,
    alt: "StackLaunch",
    style: {
      height: height || files.h,
      width: "auto",
      display: "block",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Removable metadata chip — used for tech filters, region tags, service labels. */
function Tag({
  children,
  onRemove,
  selected = false,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      height: "26px",
      padding: "0 10px",
      borderRadius: "var(--radius-sm)",
      background: selected ? "var(--azure-50)" : "var(--surface-card)",
      color: selected ? "var(--azure-700)" : "var(--text-body)",
      border: `var(--border-width) solid ${selected ? "var(--azure-300)" : "var(--border-hairline)"}`,
      font: "var(--weight-medium) var(--text-caption)/1 var(--font-mono)",
      cursor: onClick ? "pointer" : "default",
      transition: "var(--transition-control)",
      ...(hover && onClick ? {
        borderColor: "var(--border-strong)"
      } : null),
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      border: 0,
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      display: "inline-flex",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 12
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/CodeBlock.jsx
try { (() => {
/** Terminal / config snippet. Always navy-on-dark, mono, hairline framed. */
function CodeBlock({
  code = "",
  language = "bash",
  filename,
  copyable = true,
  style
}) {
  const [copied, setCopied] = React.useState(false);
  const lines = String(code).replace(/\n$/, "").split("\n");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-code)",
      border: "var(--border-width) solid rgba(255,255,255,.09)",
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "8px 12px",
      borderBottom: "var(--border-width) solid rgba(255,255,255,.09)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-mono)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.45)"
    }
  }, filename || language), copyable && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    },
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: copied ? "var(--emerald-500)" : "rgba(255,255,255,.5)",
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-mono)",
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: copied ? "check" : "copy",
    size: 12
  }), copied ? "COPIED" : "COPY")), /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      padding: "14px 16px",
      overflowX: "auto",
      font: "var(--weight-regular) var(--text-body-sm)/1.65 var(--font-mono)",
      color: "#D6DEEB"
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,.22)",
      userSelect: "none",
      minWidth: 16,
      textAlign: "right"
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "pre",
      color: l.trim().startsWith("#") ? "rgba(255,255,255,.4)" : "#D6DEEB"
    }
  }, l)))));
}
Object.assign(__ds_scope, { CodeBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/CodeBlock.jsx", error: String((e && e.message) || e) }); }

// components/data/MetricStat.jsx
try { (() => {
/** A single measured number: uptime, p95 latency, monthly spend. Mono figures, quiet label. */
function MetricStat({
  label,
  value,
  unit,
  delta,
  deltaTone = "auto",
  hint,
  align = "left",
  style
}) {
  const up = typeof delta === "string" && delta.trim().startsWith("+");
  const tone = deltaTone === "auto" ? up ? "var(--emerald-600)" : "var(--text-muted)" : deltaTone === "good" ? "var(--emerald-600)" : deltaTone === "bad" ? "var(--signal-error)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6,
      textAlign: align,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-metric)",
      color: "var(--text-strong)",
      letterSpacing: "-.02em"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-body-sm)/1 var(--font-mono)",
      color: "var(--text-muted)"
    }
  }, unit)), (delta || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      font: "var(--weight-regular) var(--text-caption)/1.3 var(--font-sans)",
      color: delta ? tone : "var(--text-muted)",
      justifyContent: align === "center" ? "center" : "flex-start"
    }
  }, delta && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: up ? "trending-up" : "trending-down",
    size: 13
  }), delta || hint));
}
Object.assign(__ds_scope, { MetricStat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/MetricStat.jsx", error: String((e && e.message) || e) }); }

// components/data/StatusPill.jsx
try { (() => {
const states = {
  live: {
    label: "Live",
    color: "var(--emerald-500)",
    bg: "var(--signal-live-bg)",
    fg: "var(--emerald-700)",
    border: "var(--signal-live-border)"
  },
  healthy: {
    label: "Healthy",
    color: "var(--emerald-500)",
    bg: "var(--signal-live-bg)",
    fg: "var(--emerald-700)",
    border: "var(--signal-live-border)"
  },
  degraded: {
    label: "Degraded",
    color: "var(--signal-warn)",
    bg: "var(--signal-warn-bg)",
    fg: "var(--signal-warn)",
    border: "transparent"
  },
  down: {
    label: "Down",
    color: "var(--signal-error)",
    bg: "var(--signal-error-bg)",
    fg: "var(--signal-error)",
    border: "transparent"
  },
  idle: {
    label: "Idle",
    color: "var(--signal-idle)",
    bg: "var(--signal-idle-bg)",
    fg: "var(--text-muted)",
    border: "transparent"
  },
  building: {
    label: "Building",
    color: "var(--azure-600)",
    bg: "var(--azure-50)",
    fg: "var(--azure-700)",
    border: "var(--azure-100)"
  }
};

/** Health signal chip. The only place emerald is allowed to appear by default. */
function StatusPill({
  status = "healthy",
  label,
  pulse = true,
  style
}) {
  const s = states[status];
  const animate = pulse && (status === "live" || status === "healthy" || status === "building");
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: 24,
      padding: "0 10px 0 8px",
      background: s.bg,
      color: s.fg,
      border: `var(--border-width) solid ${s.border}`,
      borderRadius: "var(--radius-pill)",
      font: "var(--weight-medium) var(--text-micro)/1 var(--font-mono)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 7,
      height: 7,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: s.color
    }
  }), animate && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: -3,
      borderRadius: "50%",
      background: s.color,
      opacity: 0.28,
      animation: "sl-pulse 2.4s var(--ease-standard) infinite"
    }
  })), label || s.label, /*#__PURE__*/React.createElement("style", null, "@keyframes sl-pulse{0%{transform:scale(.6);opacity:.35}70%{transform:scale(1.5);opacity:0}100%{opacity:0}}"));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 460
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "var(--surface-overlay)",
      backdropFilter: "blur(2px)",
      display: "grid",
      placeItems: "center",
      padding: "var(--space-6)",
      zIndex: 60
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      background: "var(--surface-card)",
      border: "var(--border-width) solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      boxShadow: "var(--shadow-overlay)",
      padding: "var(--space-6)",
      display: "grid",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-faint)",
      padding: 4,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  }))), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      justifyContent: "flex-end"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const tones = {
  info: {
    icon: "info",
    color: "var(--azure-600)"
  },
  success: {
    icon: "check-circle-2",
    color: "var(--emerald-500)"
  },
  warn: {
    icon: "alert-triangle",
    color: "var(--signal-warn)"
  },
  error: {
    icon: "alert-octagon",
    color: "var(--signal-error)"
  }
};
function Toast({
  title,
  message,
  tone = "info",
  onDismiss,
  style
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      width: 340,
      maxWidth: "100%",
      padding: "12px 14px",
      background: "var(--surface-card)",
      border: "var(--border-width) solid var(--border-hairline)",
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 16,
    style: {
      marginTop: 2,
      background: t.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) var(--text-body-sm)/1.35 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, title), message && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-caption)/1.5 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, message)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      color: "var(--text-faint)",
      padding: 0,
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  children,
  content,
  placement = "top",
  style
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      pointerEvents: "none",
      whiteSpace: "nowrap",
      background: "var(--navy-900)",
      color: "#fff",
      padding: "5px 9px",
      borderRadius: "var(--radius-xs)",
      boxShadow: "var(--shadow-md)",
      font: "var(--weight-regular) var(--text-caption)/1.3 var(--font-sans)",
      opacity: open ? 1 : 0,
      transition: `opacity var(--duration-fast) var(--ease-standard)`,
      zIndex: 40
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const check = "https://unpkg.com/lucide-static@0.400.0/icons/check.svg";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "checkbox",
    checked: isOn,
    disabled: disabled,
    onChange: e => {
      setInternal(e.target.checked);
      onChange && onChange(e.target.checked, e);
    },
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      flex: "0 0 auto",
      marginTop: 1,
      borderRadius: "var(--radius-xs)",
      background: isOn ? "var(--action-primary-bg)" : "var(--surface-card)",
      border: `var(--border-width) solid ${isOn ? "var(--action-primary-bg)" : "var(--border-strong)"}`,
      transition: "var(--transition-control)",
      display: "inline-flex"
    }
  }, isOn && /*#__PURE__*/React.createElement("span", {
    style: {
      width: "100%",
      height: "100%",
      background: "#fff",
      WebkitMaskImage: `url(${check})`,
      maskImage: `url(${check})`,
      WebkitMaskSize: "13px",
      maskSize: "13px",
      maskPosition: "center",
      WebkitMaskPosition: "center",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-caption)/1.45 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const heights = {
  sm: "var(--control-h-sm)",
  md: "var(--control-h-md)",
  lg: "var(--control-h-lg)"
};
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  size = "md",
  mono = false,
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "6px",
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      height: heights[size],
      padding: "0 12px",
      background: "var(--surface-card)",
      border: `var(--border-width) solid ${error ? "var(--signal-error)" : focus ? "var(--border-focus)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-control)",
      transition: "var(--transition-control)",
      boxShadow: focus && !error ? "var(--focus-ring)" : "none"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "inline-flex"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: inputId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      border: 0,
      outline: "none",
      background: "transparent",
      color: "var(--text-strong)",
      font: mono ? "var(--type-mono)" : "var(--weight-regular) var(--text-body-sm)/1.4 var(--font-sans)",
      ...style
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "inline-flex"
    }
  }, suffix)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-caption)/1.4 var(--font-sans)",
      color: error ? "var(--signal-error)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  onChange,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 18,
      height: 18,
      flex: "0 0 auto",
      marginTop: 1,
      borderRadius: "var(--radius-pill)",
      background: "var(--surface-card)",
      border: `${checked ? "5px" : "var(--border-width)"} solid ${checked ? "var(--action-primary-bg)" : "var(--border-strong)"}`,
      transition: "var(--transition-control)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-caption)/1.45 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, description)));
}
function RadioGroup({
  name,
  value,
  onChange,
  options = [],
  direction = "column",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "12px",
      gridAutoFlow: direction === "row" ? "column" : "row",
      justifyContent: "start",
      ...style
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name,
    value: o.value,
    label: o.label,
    description: o.description,
    checked: value === o.value,
    onChange: onChange
  })));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  size = "md",
  id,
  style,
  wrapperStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || React.useId();
  const heights = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h-md)",
    lg: "var(--control-h-lg)"
  };
  const caret = "https://unpkg.com/lucide-static@0.400.0/icons/chevron-down.svg";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "6px",
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      font: "var(--type-label)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    id: selectId,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      height: heights[size],
      padding: "0 34px 0 12px",
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: `var(--border-width) solid ${focus ? "var(--border-focus)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-control)",
      outline: "none",
      font: "var(--weight-regular) var(--text-body-sm)/1 var(--font-sans)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "var(--transition-control)",
      cursor: "pointer",
      ...style
    }
  }), options.map(o => {
    const value = typeof o === "string" ? o : o.value;
    const label2 = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label2);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 11,
      top: "50%",
      transform: "translateY(-50%)",
      width: 15,
      height: 15,
      background: "var(--text-muted)",
      pointerEvents: "none",
      WebkitMaskImage: `url(${caret})`,
      maskImage: `url(${caret})`,
      WebkitMaskSize: "contain",
      maskSize: "contain",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat"
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-caption)/1.4 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  description,
  checked,
  defaultChecked,
  onChange,
  disabled,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    const next = !isOn;
    setInternal(next);
    onChange && onChange(next);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: toggle,
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": isOn,
    style: {
      width: 38,
      height: 22,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: isOn ? "var(--action-primary-bg)" : "var(--slate-300)",
      transition: "background-color var(--duration-base) var(--ease-standard)",
      position: "relative",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: isOn ? 19 : 3,
      width: 16,
      height: 16,
      borderRadius: "var(--radius-pill)",
      background: "#fff",
      boxShadow: "var(--shadow-xs)",
      transition: "left var(--duration-base) var(--ease-standard)"
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "grid",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-body-sm)/1.4 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-regular) var(--text-caption)/1.45 var(--font-sans)",
      color: "var(--text-muted)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
/** Vertical product navigation used in the StackLaunch Console. */
function SideNav({
  items = [],
  value,
  onChange,
  footer,
  header,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      padding: "var(--space-4)",
      background: "var(--surface-page)",
      borderRight: "var(--border-width) solid var(--border-hairline)",
      minWidth: 232,
      ...style
    }
  }, header, items.map(it => it.section ? /*#__PURE__*/React.createElement("div", {
    key: it.section,
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      padding: "var(--space-5) 10px var(--space-2)"
    }
  }, it.section) : /*#__PURE__*/React.createElement(NavItem, {
    key: it.value,
    item: it,
    active: it.value === value,
    onClick: () => onChange && onChange(it.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), footer);
}
function NavItem({
  item,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      width: "100%",
      padding: "8px 10px",
      border: 0,
      borderRadius: "var(--radius-control)",
      cursor: "pointer",
      textAlign: "left",
      background: active ? "var(--azure-50)" : hover ? "var(--action-ghost-bg-hover)" : "transparent",
      color: active ? "var(--azure-700)" : "var(--text-body)",
      font: `var(--weight-medium) var(--text-body-sm)/1 var(--font-sans)`,
      transition: "var(--transition-control)"
    }
  }, item.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, item.label), item.badge);
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  style
}) {
  const [internal, setInternal] = React.useState(defaultValue || tabs[0] && (tabs[0].value || tabs[0]));
  const active = value !== undefined ? value : internal;
  const select = v => {
    setInternal(v);
    onChange && onChange(v);
  };
  const isSeg = variant === "segmented";
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "inline-flex",
      gap: isSeg ? 2 : "var(--space-6)",
      borderBottom: isSeg ? "none" : "var(--border-width) solid var(--border-hairline)",
      background: isSeg ? "var(--surface-sunken)" : "transparent",
      padding: isSeg ? 3 : 0,
      borderRadius: isSeg ? "var(--radius-control)" : 0,
      ...style
    }
  }, tabs.map(t => {
    const v = t.value || t;
    const label = t.label || t;
    const on = v === active;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(v),
      style: {
        appearance: "none",
        cursor: "pointer",
        border: 0,
        background: isSeg && on ? "var(--surface-card)" : "transparent",
        color: on ? "var(--text-strong)" : "var(--text-muted)",
        font: `var(--weight-medium) var(--text-body-sm)/1 var(--font-sans)`,
        padding: isSeg ? "7px 14px" : "0 0 12px",
        borderRadius: isSeg ? "var(--radius-xs)" : 0,
        boxShadow: isSeg && on ? "var(--shadow-xs)" : "none",
        borderBottom: isSeg ? "none" : `2px solid ${on ? "var(--azure-600)" : "transparent"}`,
        marginBottom: isSeg ? 0 : -1,
        transition: "var(--transition-control)",
        display: "inline-flex",
        alignItems: "center",
        gap: 8
      }
    }, label, t.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--weight-medium) var(--text-micro)/1 var(--font-mono)",
        color: "var(--text-faint)"
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Screens.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Card,
  CardHeader,
  Badge,
  Tag,
  StatusPill,
  MetricStat,
  CodeBlock,
  Input,
  Select,
  Switch,
  Checkbox,
  Tabs,
  Tooltip,
  RadioGroup
} = window.StackLaunchDesignSystem_e69a91;
const series = [42, 48, 45, 52, 61, 58, 66, 71, 68, 74, 70, 79, 84, 81, 88, 92, 86, 90];
const lat = [210, 198, 205, 188, 192, 184, 179, 186, 181, 176, 184, 190, 183, 178, 184];
function OverviewScreen({
  onOpenCluster
}) {
  const [range, setRange] = React.useState("24h");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "healthy",
    label: "All services healthy"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      color: "var(--text-faint)"
    }
  }, "last incident 41 days ago")), /*#__PURE__*/React.createElement(Tabs, {
    variant: "segmented",
    tabs: ["1h", "24h", "7d", "30d"],
    value: range,
    onChange: setRange
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "Uptime \xB7 30d",
    value: "99.98",
    unit: "%",
    delta: "+0.02% vs last month"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "p95 latency",
    value: "184",
    unit: "ms",
    hint: "all endpoints"
  }), /*#__PURE__*/React.createElement(Sparkline, {
    points: lat
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "Requests \xB7 24h",
    value: "4.21",
    unit: "M",
    delta: "+8.4% vs yesterday"
  }), /*#__PURE__*/React.createElement(Sparkline, {
    points: series,
    color: "var(--emerald-500)"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "Spend \xB7 month to date",
    value: "$2,140",
    delta: "-11% after rightsizing",
    deltaTone: "good"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Environments",
    eyebrow: "Platform",
    action: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 14
      })
    }, "New environment"),
    pad: "16px 20px 20px"
  }, /*#__PURE__*/React.createElement(Table, {
    onRow: onOpenCluster,
    columns: [{
      key: "name",
      label: "Environment",
      strong: true,
      mono: true,
      w: "1.4fr"
    }, {
      key: "region",
      label: "Region",
      mono: true
    }, {
      key: "nodes",
      label: "Nodes",
      mono: true,
      align: "right"
    }, {
      key: "version",
      label: "K8s",
      mono: true
    }, {
      key: "status",
      label: "Status",
      align: "right"
    }],
    rows: [{
      name: "prod-lagos-1",
      region: "af-south-1",
      nodes: "6",
      version: "1.29.4",
      status: /*#__PURE__*/React.createElement(StatusPill, {
        status: "healthy"
      })
    }, {
      name: "prod-eu-1",
      region: "eu-west-1",
      nodes: "4",
      version: "1.29.4",
      status: /*#__PURE__*/React.createElement(StatusPill, {
        status: "healthy"
      })
    }, {
      name: "staging",
      region: "af-south-1",
      nodes: "2",
      version: "1.30.0",
      status: /*#__PURE__*/React.createElement(StatusPill, {
        status: "building",
        label: "Deploying"
      })
    }, {
      name: "analytics",
      region: "eu-west-1",
      nodes: "3",
      version: "1.28.9",
      status: /*#__PURE__*/React.createElement(StatusPill, {
        status: "degraded",
        label: "Upgrade due"
      })
    }]
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Recent activity",
    eyebrow: "Audit log",
    pad: "8px 20px 16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, [{
    i: "git-branch",
    t: "Deployed api@4f21c8 to prod-lagos-1",
    w: "12m ago · pipeline #482"
  }, {
    i: "archive-restore",
    t: "Restore test passed on staging",
    w: "3h ago · 11m 04s · automated"
  }, {
    i: "key-round",
    t: "Rotated Postgres credentials",
    w: "yesterday · by Adaeze O."
  }, {
    i: "bell",
    t: "Alert resolved: 5xx spike on /checkout",
    w: "2 days ago · 6m to resolve"
  }].map(r => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    style: {
      display: "flex",
      gap: 12,
      padding: "13px 0",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.i,
    size: 15,
    style: {
      marginTop: 2,
      background: "var(--text-faint)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-strong)"
    }
  }, r.t), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, r.w))))))));
}
function ClusterScreen({
  name = "prod-lagos-1",
  onBack
}) {
  const [tab, setTab] = React.useState("workloads");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 14
    }),
    onClick: onBack
  }, "Environments"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      color: "var(--text-strong)"
    }
  }, name), /*#__PURE__*/React.createElement(StatusPill, {
    status: "healthy"
  }), /*#__PURE__*/React.createElement(Tag, null, "af-south-1"), /*#__PURE__*/React.createElement(Tag, null, "k8s 1.29.4"), /*#__PURE__*/React.createElement(Tag, null, "6 nodes")), /*#__PURE__*/React.createElement(Tabs, {
    tabs: [{
      value: "workloads",
      label: "Workloads",
      count: 9
    }, {
      value: "logs",
      label: "Logs"
    }, {
      value: "config",
      label: "Config"
    }],
    value: tab,
    onChange: setTab
  }), tab === "workloads" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Deployments",
    eyebrow: "Runtime",
    pad: "16px 20px 20px"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "svc",
      label: "Service",
      mono: true,
      strong: true,
      w: "1.3fr"
    }, {
      key: "pods",
      label: "Pods",
      mono: true,
      align: "right"
    }, {
      key: "cpu",
      label: "CPU",
      mono: true,
      align: "right"
    }, {
      key: "mem",
      label: "Memory",
      mono: true,
      align: "right"
    }, {
      key: "s",
      label: "",
      align: "right",
      w: ".7fr"
    }],
    rows: [{
      svc: "api",
      pods: "4/4",
      cpu: "38%",
      mem: "1.2 GB",
      s: /*#__PURE__*/React.createElement(StatusPill, {
        status: "healthy",
        pulse: false
      })
    }, {
      svc: "worker",
      pods: "2/2",
      cpu: "22%",
      mem: "740 MB",
      s: /*#__PURE__*/React.createElement(StatusPill, {
        status: "healthy",
        pulse: false
      })
    }, {
      svc: "notifications",
      pods: "1/2",
      cpu: "61%",
      mem: "512 MB",
      s: /*#__PURE__*/React.createElement(StatusPill, {
        status: "degraded",
        label: "1 pending"
      })
    }, {
      svc: "media-transcode",
      pods: "0/1",
      cpu: "—",
      mem: "—",
      s: /*#__PURE__*/React.createElement(StatusPill, {
        status: "idle",
        pulse: false
      })
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Last deploy",
    eyebrow: "Delivery"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "Duration",
    value: "4:12",
    hint: "canary 10% \u2192 100%"
  }), /*#__PURE__*/React.createElement(CodeBlock, {
    filename: "pipeline #482",
    copyable: false,
    code: "# ✓ build + sign + scan\n# ✓ migrations applied\n# ✓ canary healthy 4m12s\nrollback: stacklaunch rollback api"
  }))), /*#__PURE__*/React.createElement(Panel, {
    title: "Guardrails",
    eyebrow: "Policy",
    pad: "16px 20px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    label: "Require passing restore test before release"
  }), /*#__PURE__*/React.createElement(Switch, {
    defaultChecked: true,
    label: "Page on-call for 5xx above 1%"
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Allow manual pod exec in prod"
  }))))), tab === "logs" && /*#__PURE__*/React.createElement(CodeBlock, {
    filename: "kubectl logs -f deploy/api --tail=12",
    copyable: false,
    code: "2026-08-03T11:04:12Z  INFO   request completed  path=/v1/orders status=200 dur=41ms\n2026-08-03T11:04:12Z  INFO   request completed  path=/v1/me status=200 dur=18ms\n2026-08-03T11:04:13Z  WARN   slow query  table=orders dur=812ms\n2026-08-03T11:04:14Z  INFO   cache warm  keys=1284\n2026-08-03T11:04:15Z  INFO   request completed  path=/v1/checkout status=201 dur=96ms\n2026-08-03T11:04:16Z  ERROR  upstream timeout  provider=paystack attempt=1 retry_in=2s\n2026-08-03T11:04:18Z  INFO   upstream recovered  provider=paystack attempt=2\n2026-08-03T11:04:19Z  INFO   request completed  path=/v1/orders status=200 dur=38ms"
  }), tab === "config" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Panel, {
    title: "Scaling",
    eyebrow: "Compute"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Node type",
    options: ["m6g.large (2 vCPU · 8 GB)", "m6g.xlarge (4 vCPU · 16 GB)", "c6g.large (2 vCPU · 4 GB)"]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Min nodes",
    defaultValue: "3",
    mono: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Max nodes",
    defaultValue: "9",
    mono: true
  })), /*#__PURE__*/React.createElement(Checkbox, {
    defaultChecked: true,
    label: "Scale down outside business hours",
    description: "Saves roughly $180/month on this environment."
  }))), /*#__PURE__*/React.createElement(Panel, {
    title: "Backups",
    eyebrow: "Data"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    name: "freq",
    value: "nightly",
    onChange: () => {},
    options: [{
      value: "nightly",
      label: "Nightly, 02:00 WAT",
      description: "Cross-region copy to eu-west-1."
    }, {
      value: "6h",
      label: "Every 6 hours",
      description: "For high write volume."
    }]
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Retention (days)",
    defaultValue: "30",
    mono: true
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "archive-restore",
      size: 14
    })
  }, "Run restore test now")))));
}
function AlertsScreen({
  onAck
}) {
  const rows = [{
    sev: /*#__PURE__*/React.createElement(Badge, {
      tone: "error",
      mono: true
    }, "P1"),
    t: "5xx rate above 1% on /checkout",
    env: "prod-lagos-1",
    age: "6m",
    s: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: onAck
    }, "Acknowledge")
  }, {
    sev: /*#__PURE__*/React.createElement(Badge, {
      tone: "warn",
      mono: true
    }, "P3"),
    t: "Node group at 82% memory",
    env: "analytics",
    age: "2h",
    s: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "ghost",
      onClick: onAck
    }, "Snooze 24h")
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "degraded",
    label: "2 open alerts",
    pulse: false
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      color: "var(--text-faint)"
    }
  }, "on-call: Adaeze O. \xB7 escalates in 9m")), /*#__PURE__*/React.createElement(Panel, {
    title: "Open alerts",
    eyebrow: "Paging",
    pad: "16px 20px 20px"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "sev",
      label: "Sev",
      w: ".4fr"
    }, {
      key: "t",
      label: "Alert",
      strong: true,
      w: "2.2fr"
    }, {
      key: "env",
      label: "Environment",
      mono: true
    }, {
      key: "age",
      label: "Age",
      mono: true,
      align: "right",
      w: ".5fr"
    }, {
      key: "s",
      label: "",
      align: "right"
    }],
    rows: rows
  })), /*#__PURE__*/React.createElement(Panel, {
    title: "Alert rules",
    eyebrow: "Thresholds we tuned",
    pad: "16px 20px 20px"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "r",
      label: "Rule",
      strong: true,
      mono: true,
      w: "1.6fr"
    }, {
      key: "c",
      label: "Condition",
      mono: true,
      w: "1.4fr"
    }, {
      key: "d",
      label: "Destination"
    }, {
      key: "s",
      label: "",
      align: "right",
      w: ".5fr"
    }],
    rows: [{
      r: "http_5xx_rate",
      c: "> 1% for 5m",
      d: "PagerDuty · on-call",
      s: /*#__PURE__*/React.createElement(Switch, {
        defaultChecked: true
      })
    }, {
      r: "p95_latency",
      c: "> 400ms for 10m",
      d: "Slack #platform",
      s: /*#__PURE__*/React.createElement(Switch, {
        defaultChecked: true
      })
    }, {
      r: "restore_test_failed",
      c: "any failure",
      d: "PagerDuty · on-call",
      s: /*#__PURE__*/React.createElement(Switch, {
        defaultChecked: true
      })
    }, {
      r: "spend_forecast",
      c: "> $2,800 / month",
      d: "Email · founders",
      s: /*#__PURE__*/React.createElement(Switch, null)
    }]
  })));
}
function CostScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "Month to date",
    value: "$2,140",
    delta: "-11% vs last month",
    deltaTone: "good"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "Forecast",
    value: "$2,690",
    hint: "at current run rate"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "20px"
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "Waste identified",
    value: "$310",
    hint: "3 idle volumes, 1 oversized node group"
  }))), /*#__PURE__*/React.createElement(Panel, {
    title: "Spend by service",
    eyebrow: "AWS \xB7 your account",
    pad: "16px 20px 20px"
  }, /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: "s",
      label: "Service",
      strong: true,
      mono: true,
      w: "1.4fr"
    }, {
      key: "m",
      label: "Month to date",
      mono: true,
      align: "right"
    }, {
      key: "l",
      label: "Last month",
      mono: true,
      align: "right"
    }, {
      key: "d",
      label: "Change",
      align: "right"
    }],
    rows: [{
      s: "EKS + EC2",
      m: "$1,180",
      l: "$1,410",
      d: /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--emerald-600)",
          font: "var(--type-mono)"
        }
      }, "-16%")
    }, {
      s: "RDS Postgres",
      m: "$520",
      l: "$505",
      d: /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--text-muted)",
          font: "var(--type-mono)"
        }
      }, "+3%")
    }, {
      s: "S3 + CloudFront",
      m: "$214",
      l: "$198",
      d: /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--text-muted)",
          font: "var(--type-mono)"
        }
      }, "+8%")
    }, {
      s: "Data transfer",
      m: "$146",
      l: "$182",
      d: /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--emerald-600)",
          font: "var(--type-mono)"
        }
      }, "-20%")
    }, {
      s: "Backups + snapshots",
      m: "$80",
      l: "$78",
      d: /*#__PURE__*/React.createElement("span", {
        style: {
          color: "var(--text-muted)",
          font: "var(--type-mono)"
        }
      }, "+2%")
    }]
  })));
}
Object.assign(window, {
  OverviewScreen,
  ClusterScreen,
  AlertsScreen,
  CostScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/Shell.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Card,
  CardHeader,
  Badge,
  Tag,
  Logo,
  StatusPill,
  MetricStat,
  CodeBlock,
  Input,
  Select,
  Switch,
  Checkbox,
  Tabs,
  SideNav,
  Tooltip,
  RadioGroup
} = window.StackLaunchDesignSystem_e69a91;
function TopBar({
  title,
  breadcrumb,
  action,
  onSearch
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 60,
      display: "flex",
      alignItems: "center",
      gap: 16,
      padding: "0 24px",
      borderBottom: "1px solid var(--border-hairline)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      fontSize: 11,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-faint)"
    }
  }, breadcrumb), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) 17px/1.2 var(--font-display)",
      color: "var(--text-strong)"
    }
  }, title)), /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    placeholder: "Search resources",
    mono: true,
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14
    }),
    wrapperStyle: {
      width: 220
    },
    onChange: onSearch
  }), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Refresh"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "refresh-cw",
    label: "Refresh",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    content: "2 open alerts"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: "bell",
    label: "Alerts",
    size: "sm"
  })), action, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "var(--radius-pill)",
      background: "var(--navy-900)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      font: "var(--weight-medium) 11px/1 var(--font-mono)"
    }
  }, "AO"));
}
function Panel({
  title,
  eyebrow,
  action,
  children,
  pad = "20px"
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid var(--border-hairline)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 3
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "sl-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-semibold) 15px/1.2 var(--font-sans)",
      color: "var(--text-strong)"
    }
  }, title)), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad
    }
  }, children));
}
function Sparkline({
  points = [],
  color = "var(--azure-600)",
  height = 44
}) {
  const max = Math.max(...points),
    min = Math.min(...points);
  const d = points.map((p, i) => `${i / (points.length - 1) * 100},${100 - (p - min) / (max - min || 1) * 92 - 4}`).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: d,
    fill: "none",
    stroke: color,
    strokeWidth: "1.6",
    vectorEffect: "non-scaling-stroke",
    strokeLinejoin: "round"
  }));
}
function Table({
  columns,
  rows,
  onRow
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: columns.map(c => c.w || "1fr").join(" "),
      gap: 12,
      padding: "0 4px 10px"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.key,
    className: "sl-eyebrow",
    style: {
      textAlign: c.align || "left"
    }
  }, c.label))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onRow && onRow(r),
    style: {
      display: "grid",
      gridTemplateColumns: columns.map(c => c.w || "1fr").join(" "),
      gap: 12,
      padding: "12px 4px",
      borderTop: "1px solid var(--border-hairline)",
      alignItems: "center",
      cursor: onRow ? "pointer" : "default"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      font: c.mono ? "var(--type-mono)" : "var(--type-body-sm)",
      color: c.strong ? "var(--text-strong)" : "var(--text-body)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, r[c.key])))));
}
Object.assign(window, {
  TopBar,
  Panel,
  Sparkline,
  Table
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Card,
  CardHeader,
  Badge,
  Tag,
  Logo,
  StatusPill,
  MetricStat,
  CodeBlock,
  Input,
  Select,
  Checkbox,
  Switch,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  RadioGroup
} = window.StackLaunchDesignSystem_e69a91;
const MAX = {
  maxWidth: "var(--container-max)",
  margin: "0 auto",
  padding: "0 32px"
};
function SiteNav({
  theme,
  onTheme,
  onContact,
  active,
  onNav
}) {
  const links = ["Platform", "Services", "Pricing", "Runbook"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: theme === "dark" ? "var(--veil-dark)" : "var(--veil-light)",
      backdropFilter: "var(--blur-veil)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAX,
      height: 68,
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    theme: theme,
    height: 26,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => onNav(l),
    style: {
      border: 0,
      background: "transparent",
      cursor: "pointer",
      font: "var(--weight-medium) var(--text-body-sm)/1 var(--font-sans)",
      color: active === l ? "var(--text-strong)" : "var(--text-muted)",
      padding: "6px 0"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: theme === "dark" ? "Light theme" : "Dark theme"
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: theme === "dark" ? "sun" : "moon",
    label: "Toggle theme",
    onClick: onTheme
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Client login"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onContact
  }, "Book a review"))));
}
function Hero({
  onContact
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: "1px solid var(--border-hairline)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAX,
      padding: "96px 32px 88px",
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sl-eyebrow"
  }, "Mobile backend infrastructure \xB7 Lagos"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: "var(--weight-bold) var(--text-display-lg)/var(--leading-display) var(--font-display)",
      letterSpacing: "var(--tracking-display)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "You build the app.", /*#__PURE__*/React.createElement("br", null), "We make it ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--azure-600)"
    }
  }, "production-ready"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--weight-regular) var(--text-body-lg)/1.6 var(--font-sans)",
      color: "var(--text-body)",
      maxWidth: 520,
      margin: 0
    }
  }, "We run the AWS account, the Kubernetes cluster, the pipelines and the pager behind your mobile app \u2014 so you get a platform a serious customer can audit, without hiring a DevOps team."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onContact,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Book a platform review"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "See what we run")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center",
      paddingTop: 12,
      borderTop: "1px solid var(--border-hairline)",
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(StatusPill, {
    status: "healthy",
    label: "All client platforms healthy"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      color: "var(--text-faint)"
    }
  }, "18 platforms \xB7 3 regions"))), /*#__PURE__*/React.createElement(CodeBlock, {
    filename: "~/stacklaunch \u2014 day one",
    code: "# what your team runs after handover\nstacklaunch deploy --env staging --wait\n# ✓ image built, signed, scanned\n# ✓ migrations applied (rollback ready)\n# ✓ canary 10% → 100% in 4m12s\n\nstacklaunch restore --from 2026-08-02T02:00Z\n# ✓ verified restore into isolated env"
  })));
}
function ServicesGrid() {
  const items = [{
    icon: "cloud",
    eyebrow: "Cloud",
    title: "AWS accounts that pass review",
    body: "Multi-account setup, least-privilege IAM, tagged and budgeted from day one."
  }, {
    icon: "server",
    eyebrow: "Runtime",
    title: "Kubernetes you don't have to babysit",
    body: "EKS with autoscaling, resource limits that match real traffic, and a documented upgrade path."
  }, {
    icon: "git-branch",
    eyebrow: "Delivery",
    title: "CI/CD with a real rollback",
    body: "Build, scan, sign, deploy. Every release reversible in one command."
  }, {
    icon: "activity",
    eyebrow: "Observability",
    title: "Alerting that pages a human",
    body: "Metrics, logs and traces wired to your on-call rotation — with thresholds we tuned, not defaults."
  }, {
    icon: "archive-restore",
    eyebrow: "Backups",
    title: "Restores we have actually run",
    body: "Nightly encrypted snapshots, cross-region, restored monthly into a throwaway environment."
  }, {
    icon: "shield-check",
    eyebrow: "Security",
    title: "The boring controls, done",
    body: "Secret management, patch cadence, audit logging, and the evidence pack your enterprise buyer asks for."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      background: "var(--surface-subtle)",
      borderBottom: "1px solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAX,
      padding: "96px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: 620,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sl-eyebrow"
  }, "What we run"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--weight-semibold) 40px/1.15 var(--font-display)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Six things that decide whether your app survives its first real month")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    interactive: true,
    padding: "24px"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 20,
    style: {
      background: "var(--azure-600)",
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement(CardHeader, {
    eyebrow: it.eyebrow,
    title: it.title
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, it.body))))));
}
function ProofSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--navy-900)",
      borderBottom: "1px solid var(--border-hairline)"
    },
    "data-theme": "dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAX,
      padding: "88px 32px",
      display: "grid",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sl-eyebrow",
    style: {
      color: "var(--emerald-500)"
    }
  }, "Measured, not claimed"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--weight-semibold) 36px/1.15 var(--font-display)",
      letterSpacing: "var(--tracking-heading)",
      color: "#fff",
      margin: 0
    }
  }, "Numbers from the platforms we currently operate")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      color: "rgba(255,255,255,.45)"
    }
  }, "rolling 90 days \xB7 updated hourly")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32,
      paddingTop: 8,
      borderTop: "1px solid var(--border-inverse)"
    }
  }, /*#__PURE__*/React.createElement(MetricStat, {
    label: "Uptime",
    value: "99.98",
    unit: "%",
    hint: "across 18 platforms",
    style: {
      paddingTop: 32
    }
  }), /*#__PURE__*/React.createElement(MetricStat, {
    label: "p95 latency",
    value: "184",
    unit: "ms",
    hint: "af-south-1 origin",
    style: {
      paddingTop: 32
    }
  }), /*#__PURE__*/React.createElement(MetricStat, {
    label: "Median restore",
    value: "11",
    unit: "min",
    hint: "verified monthly",
    style: {
      paddingTop: 32
    }
  }), /*#__PURE__*/React.createElement(MetricStat, {
    label: "Cloud spend saved",
    value: "31",
    unit: "%",
    delta: "+ after rightsizing",
    style: {
      paddingTop: 32
    }
  }))));
}
function PricingSection({
  onContact
}) {
  const tiers = [{
    name: "Standby",
    price: "$1,800",
    cadence: "/ month",
    body: "For a launched app with light traffic.",
    features: ["Business-hours cover, 4h response", "Managed AWS + one cluster", "Nightly backups, monthly restore test", "Quarterly cost review"],
    tone: "secondary"
  }, {
    name: "On-call",
    price: "$4,200",
    cadence: "/ month",
    body: "For teams with paying customers and a real SLA.",
    features: ["24/7 paging, 15min response", "Multi-env delivery pipeline", "Full observability stack + tuned alerts", "Monthly platform review with your CTO"],
    tone: "primary",
    featured: true
  }, {
    name: "Embedded",
    price: "Custom",
    cadence: "",
    body: "For scale-ups replacing a DevOps hire.",
    features: ["Named engineer in your standups", "Security evidence pack for enterprise deals", "Migration and multi-region work", "Runbook handover on request"],
    tone: "secondary"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "pricing"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAX,
      padding: "96px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 14,
      maxWidth: 620,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sl-eyebrow"
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: "var(--weight-semibold) 40px/1.15 var(--font-display)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, "Flat monthly retainers. No hourly surprises."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, "Cloud costs are billed to your own AWS account \u2014 we never resell infrastructure.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 20,
      alignItems: "start"
    }
  }, tiers.map(t => /*#__PURE__*/React.createElement(Card, {
    key: t.name,
    padding: "28px",
    style: t.featured ? {
      borderColor: "var(--azure-300)",
      boxShadow: "var(--shadow-md)"
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      font: "var(--type-h3)",
      color: "var(--text-strong)",
      margin: 0
    }
  }, t.name), t.featured && /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    mono: true
  }, "Most chosen")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--weight-medium) 34px/1 var(--font-mono)",
      color: "var(--text-strong)",
      letterSpacing: "-.02em"
    }
  }, t.price), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      color: "var(--text-muted)"
    }
  }, t.cadence)), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      margin: "0 0 20px"
    }
  }, t.body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 10,
      marginBottom: 24,
      paddingTop: 18,
      borderTop: "1px solid var(--border-hairline)"
    }
  }, t.features.map(fe => /*#__PURE__*/React.createElement("div", {
    key: fe,
    style: {
      display: "flex",
      gap: 9,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    style: {
      background: "var(--emerald-500)",
      marginTop: 3
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-body)"
    }
  }, fe)))), /*#__PURE__*/React.createElement(Button, {
    variant: t.tone,
    fullWidth: true,
    onClick: onContact
  }, t.name === "Embedded" ? "Talk to us" : `Start on ${t.name}`))))));
}
function SiteFooter({
  theme
}) {
  const cols = [{
    h: "Platform",
    items: ["AWS foundation", "Kubernetes", "Delivery", "Observability"]
  }, {
    h: "Company",
    items: ["How we work", "Runbook library", "Security posture", "Careers"]
  }, {
    h: "Contact",
    items: ["hello@stacklaunch.io", "Yaba, Lagos", "+234 ··· ····"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAX,
      padding: "56px 32px 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3,1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 16,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    variant: "horizontal",
    theme: theme,
    height: 24,
    assetBase: "../../assets"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)",
      margin: 0,
      maxWidth: 260
    }
  }, "Mobile backend infrastructure and platform engineering, run from Lagos for West Africa and beyond."), /*#__PURE__*/React.createElement(StatusPill, {
    status: "healthy",
    label: "Status: operational"
  })), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: "grid",
      gap: 10,
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sl-eyebrow"
  }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...MAX,
      padding: "18px 32px",
      borderTop: "1px solid var(--border-hairline)",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      color: "var(--text-faint)"
    }
  }, "\xA9 2026 StackLaunch Ltd."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-mono)",
      color: "var(--text-faint)"
    }
  }, "RC 1849302 \xB7 Lagos, NG")));
}
Object.assign(window, {
  SiteNav,
  Hero,
  ServicesGrid,
  ProofSection,
  PricingSection,
  SiteFooter,
  MAX
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CodeBlock = __ds_scope.CodeBlock;

__ds_ns.MetricStat = __ds_scope.MetricStat;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
