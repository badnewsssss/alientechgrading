/**
 * Application-wide constants
 */

export const APP_NAME = "Alien Tech Grading";
export const APP_DESCRIPTION = "AI-Powered Trading Card Grading Platform";

// Navigation
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
] as const;

// Card Grading Scale
export const GRADE_SCALE = {
  PRISTINE: { value: 10, label: "Pristine 10", color: "text-purple-600" },
  GEM_MINT: { value: 9.5, label: "Gem Mint 9.5", color: "text-blue-600" },
  MINT: { value: 9, label: "Mint 9", color: "text-green-600" },
  NEAR_MINT_PLUS: { value: 8.5, label: "Near Mint+ 8.5", color: "text-emerald-600" },
  NEAR_MINT: { value: 8, label: "Near Mint 8", color: "text-teal-600" },
  EXCELLENT_PLUS: { value: 7.5, label: "Excellent+ 7.5", color: "text-yellow-600" },
  EXCELLENT: { value: 7, label: "Excellent 7", color: "text-orange-600" },
  VERY_GOOD: { value: 6, label: "Very Good 6", color: "text-red-600" },
  GOOD: { value: 5, label: "Good 5", color: "text-gray-600" },
  FAIR: { value: 4, label: "Fair 4", color: "text-gray-500" },
  POOR: { value: 1, label: "Poor 1-3", color: "text-gray-400" },
} as const;

// Pricing Tiers
export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: 9.99,
    credits: 10,
    features: [
      "10 card gradings",
      "Basic AI analysis",
      "Digital certificate",
      "24-hour turnaround",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 49.99,
    credits: 75,
    features: [
      "75 card gradings",
      "Advanced AI analysis",
      "Priority processing",
      "12-hour turnaround",
      "Detailed defect reports",
      "Market value estimates",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 199.99,
    credits: 500,
    features: [
      "500 card gradings",
      "Premium AI analysis",
      "Instant processing",
      "1-hour turnaround",
      "Comprehensive reports",
      "Bulk upload support",
      "API access",
      "Dedicated support",
    ],
  },
] as const;

// Card Types
export const CARD_TYPES = [
  "Sports Cards",
  "Pokemon",
  "Magic: The Gathering",
  "Yu-Gi-Oh!",
  "Trading Card Game",
  "Non-Sport Cards",
  "Other",
] as const;

// Grading Criteria
export const GRADING_CRITERIA = [
  {
    id: "centering",
    name: "Centering",
    weight: 0.25,
    description: "Card image alignment within borders",
  },
  {
    id: "corners",
    name: "Corners",
    weight: 0.25,
    description: "Sharpness and condition of all four corners",
  },
  {
    id: "edges",
    name: "Edges",
    weight: 0.2,
    description: "Condition of card edges and borders",
  },
  {
    id: "surface",
    name: "Surface",
    weight: 0.3,
    description: "Overall surface condition including scratches and print quality",
  },
] as const;

// Social Links
export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/alientechgrade",
  facebook: "https://facebook.com/alientechgrading",
  instagram: "https://instagram.com/alientechgrading",
  discord: "https://discord.gg/alientechgrading",
} as const;

// Contact
export const CONTACT_EMAIL = "support@alientechgrading.com";
export const SUPPORT_EMAIL = "help@alientechgrading.com";

// Legal
export const COMPANY_NAME = "Alien Tech Grading, LLC";
export const COPYRIGHT_YEAR = new Date().getFullYear();

// API Routes
export const API_ROUTES = {
  WAITLIST: "/api/waitlist",
  GRADE_CARD: "/api/grade-card",
  UPLOAD: "/api/upload",
  USER: "/api/user",
} as const;

// Feature Flags
export const FEATURES = {
  WAITLIST_ENABLED: process.env.NEXT_PUBLIC_ENABLE_WAITLIST === "true",
  MAINTENANCE_MODE: process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true",
} as const;

// Image Constraints
export const IMAGE_CONSTRAINTS = {
  MAX_FILE_SIZE: 10 * 1024 * 1024, // 10MB
  ACCEPTED_FORMATS: ["image/jpeg", "image/png", "image/webp"],
  MIN_RESOLUTION: { width: 800, height: 1000 },
  RECOMMENDED_RESOLUTION: { width: 1200, height: 1600 },
} as const;

// Animation Durations (in milliseconds)
export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Z-Index Scale
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
} as const;
