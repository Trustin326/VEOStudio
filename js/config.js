window.VEO_CONFIG = {
  APP_NAME: "VeoStudio AI",
  APPS_SCRIPT_URL: "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE",
  STRIPE: {
    starter: "PASTE_STARTER_STRIPE_PAYMENT_LINK",
    creator: "PASTE_CREATOR_STRIPE_PAYMENT_LINK",
    pro: "PASTE_PRO_STRIPE_PAYMENT_LINK",
    enterprise: "PASTE_ENTERPRISE_STRIPE_OR_CONTACT_LINK",
    reseller: "PASTE_RESELLER_LICENSE_STRIPE_LINK"
  },
  PLANS: {
    free: { label: "Free", credits: 5, exports: 2 },
    starter: { label: "Starter", credits: 50, exports: 20 },
    creator: { label: "Creator", credits: 200, exports: 100 },
    pro: { label: "Pro Studio", credits: 1000, exports: 500 },
    enterprise: { label: "Enterprise", credits: 9999, exports: 9999 }
  },
  AFFILIATE_RATE: 0.30
};
