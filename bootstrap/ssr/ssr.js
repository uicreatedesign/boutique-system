import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
async function resolvePageComponent(path, pages) {
  for (const p of Array.isArray(path) ? path : [path]) {
    const page = pages[p];
    if (typeof page === "undefined") {
      continue;
    }
    return typeof page === "function" ? page() : page;
  }
  throw new Error(`Page not found: ${path}`);
}
const appName = "Boutique System";
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => title ? `${title} - ${appName}` : appName,
    resolve: (name) => resolvePageComponent(
      `./pages/${name}.tsx`,
      /* @__PURE__ */ Object.assign({ "./pages/Fabrics/Index.tsx": () => import("./assets/Index-e7GctObr.js"), "./pages/GarmentTypes/Index.tsx": () => import("./assets/Index-Bu-icbKt.js"), "./pages/Measurements/Create.tsx": () => import("./assets/Create-Clf6vTtD.js"), "./pages/Measurements/Edit.tsx": () => import("./assets/Edit-CwyTGsBA.js"), "./pages/Measurements/Index.tsx": () => import("./assets/Index-fNohuwwt.js"), "./pages/Measurements/Show.tsx": () => import("./assets/Show-C2KLQduK.js"), "./pages/Notifications/Index.tsx": () => import("./assets/Index-CiDvMj43.js"), "./pages/Orders/Create.tsx": () => import("./assets/Create-BstxZWLI.js"), "./pages/Orders/CreateEnhanced.tsx": () => import("./assets/CreateEnhanced-6fWtAWk9.js"), "./pages/Orders/Edit.tsx": () => import("./assets/Edit-CFb5aPCc.js"), "./pages/Orders/Edit_new.tsx": () => import("./assets/Edit_new-Ctlqce9f.js"), "./pages/Orders/Index.tsx": () => import("./assets/Index-B5S4h5uk.js"), "./pages/Orders/Show.tsx": () => import("./assets/Show-BLq6l1pF.js"), "./pages/Reports/Index.tsx": () => import("./assets/Index-CxDy47A9.js"), "./pages/Search/Index.tsx": () => import("./assets/Index-C1AETDLa.js"), "./pages/StitchingStatuses/Index.tsx": () => import("./assets/Index-Dft70MNP.js"), "./pages/auth/confirm-password.tsx": () => import("./assets/confirm-password-Cy5uXMWw.js"), "./pages/auth/forgot-password.tsx": () => import("./assets/forgot-password-v9ocYfpa.js"), "./pages/auth/login.tsx": () => import("./assets/login-DTHPnYUR.js"), "./pages/auth/register.tsx": () => import("./assets/register-yUKkgJr8.js"), "./pages/auth/reset-password.tsx": () => import("./assets/reset-password-CsCNO1fr.js"), "./pages/auth/two-factor-challenge.tsx": () => import("./assets/two-factor-challenge-BV8opar3.js"), "./pages/auth/verify-email.tsx": () => import("./assets/verify-email-vQOsEExc.js"), "./pages/customer-dashboard/index.tsx": () => import("./assets/index-DcnzhJnz.js"), "./pages/customer-dashboard/order-details.tsx": () => import("./assets/order-details-UjRRmdQM.js"), "./pages/customer/orders/index.tsx": () => import("./assets/index-Co66SOAk.js"), "./pages/customers/index.tsx": () => import("./assets/index-5LMdMS7m.js"), "./pages/dashboard.tsx": () => import("./assets/dashboard-CFgcUvWV.js"), "./pages/measurement-settings/index.tsx": () => import("./assets/index-4_kw0tvx.js"), "./pages/roles/index.tsx": () => import("./assets/index-C8jZdV1n.js"), "./pages/settings/appearance.tsx": () => import("./assets/appearance-SoAaKsU9.js"), "./pages/settings/backup.tsx": () => import("./assets/backup-Cw0vGGq2.js"), "./pages/settings/general.tsx": () => import("./assets/general-DNyoYUu6.js"), "./pages/settings/notifications.tsx": () => import("./assets/notifications-DdWhiq0O.js"), "./pages/settings/password.tsx": () => import("./assets/password-Csd2TyRf.js"), "./pages/settings/profile.tsx": () => import("./assets/profile-DSx2JXlR.js"), "./pages/settings/smtp.tsx": () => import("./assets/smtp-BfSqp2TR.js"), "./pages/settings/two-factor.tsx": () => import("./assets/two-factor-Cm0lBTTn.js"), "./pages/tailor-dashboard/index.tsx": () => import("./assets/index-CaSoMqZU.js"), "./pages/tailors/index.tsx": () => import("./assets/index-ZahIFZas.js"), "./pages/users/index.tsx": () => import("./assets/index-DX-A_nj4.js"), "./pages/welcome.tsx": () => import("./assets/welcome-Cb7QbS--.js") })
    ),
    setup: ({ App, props }) => {
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
