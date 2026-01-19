import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  timestamp,
  jsonb,
  decimal,
  boolean,
  index,
  uniqueIndex
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ==========================================
// MONTEURS TABLE - Airco Monteurs/Installateurs
// ==========================================
export const monteurs = pgTable('monteurs', {
  id: serial('id').primaryKey(),

  // Core identifiers
  name: varchar('name', { length: 500 }).notNull(),
  slug: varchar('slug', { length: 500 }).notNull().unique(),

  // Location - Dutch geography
  address: text('address'),
  city: varchar('city', { length: 255 }).notNull(),
  municipality: varchar('municipality', { length: 255 }), // Gemeente
  province: varchar('province', { length: 255 }).notNull(),
  provinceSlug: varchar('province_slug', { length: 100 }).notNull(),
  postalCode: varchar('postal_code', { length: 10 }), // Dutch: 1234 AB format
  country: varchar('country', { length: 100 }).notNull().default('Nederland'),
  latitude: decimal('latitude', { precision: 10, scale: 7 }),
  longitude: decimal('longitude', { precision: 10, scale: 7 }),
  serviceRadius: integer('service_radius'), // Werkgebied in km

  // Classification - Airco specific
  type: varchar('type', { length: 255 }).notNull().default('Airco Installateur'),
  typeSlug: varchar('type_slug', { length: 255 }),

  // Services offered
  services: jsonb('services').$type<string[]>().default([]),
  // e.g., ["airco-installatie", "onderhoud", "reparatie", "warmtepomp", "split-unit", "multi-split", "klimaatbeheersing"]

  // Brands/Merken they work with
  merken: jsonb('merken').$type<string[]>().default([]),
  // e.g., ["Daikin", "Mitsubishi", "Toshiba", "Samsung", "LG", "Panasonic", "Fujitsu"]

  // Certifications
  certificeringen: jsonb('certificeringen').$type<string[]>().default([]),
  // e.g., ["F-gassen gecertificeerd", "STEK", "VCA", "Erkend installateur", "Daikin certified"]

  // F-gassen registration (required by law for airco work)
  fGassenNummer: varchar('f_gassen_nummer', { length: 50 }),
  fGassenVerloopDatum: varchar('f_gassen_verloop_datum', { length: 20 }),

  // Business details
  kvkNummer: varchar('kvk_nummer', { length: 20 }), // KvK registration
  btwNummer: varchar('btw_nummer', { length: 30 }), // BTW number

  // Specializations
  specialisaties: jsonb('specialisaties').$type<string[]>().default([]),
  // e.g., ["particulier", "zakelijk", "utiliteit", "woningbouw", "renovatie"]

  // Target markets
  doelgroepen: jsonb('doelgroepen').$type<string[]>().default([]),
  // e.g., ["particulieren", "mkb", "grootzakelijk", "woningcorporaties", "vve"]

  // Contact
  phone: varchar('phone', { length: 50 }),
  phone2: varchar('phone2', { length: 50 }), // Secondary phone
  email: varchar('email', { length: 255 }),
  website: text('website'),
  whatsapp: varchar('whatsapp', { length: 50 }),

  // Details
  description: text('description'),
  openingHours: text('opening_hours'),
  yearEstablished: varchar('year_established', { length: 10 }),
  employees: integer('employees'), // Aantal medewerkers

  // Service areas - which cities/regions they serve
  serviceAreas: jsonb('service_areas').$type<string[]>().default([]),

  // Payment methods
  paymentMethods: jsonb('payment_methods').$type<string[]>().default([]),
  // e.g., ["iDEAL", "PIN", "Contant", "Factuur", "Creditcard"]

  // Google data
  googlePlaceId: varchar('google_place_id', { length: 255 }),
  rating: decimal('rating', { precision: 3, scale: 2 }),
  reviewCount: integer('review_count'),
  photoUrl: text('photo_url'),
  photos: jsonb('photos').$type<string[]>().default([]),
  reviews: jsonb('reviews').$type<Array<{
    reviewer_name: string;
    rating: number;
    review_text: string;
    review_date: string;
    reviewer_image?: string;
  }>>().default([]),

  // Generated/enriched content
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  enrichedContent: text('enriched_content'),
  generatedSummary: text('generated_summary'),
  generatedAbout: text('generated_about'),
  generatedFeatures: jsonb('generated_features').$type<string[]>().default([]),
  generatedServices: jsonb('generated_services').$type<string[]>().default([]),
  generatedTips: jsonb('generated_tips').$type<string[]>().default([]),
  generatedDirections: text('generated_directions'),
  generatedLocalContext: text('generated_local_context'),
  enrichedAt: timestamp('enriched_at'),

  // Ownership/claiming
  claimed: boolean('claimed').default(false),
  claimedBy: integer('claimed_by'),
  claimedAt: timestamp('claimed_at'),
  verified: boolean('verified').default(false),
  verifiedAt: timestamp('verified_at'),

  // Premium/Featured
  isPremium: boolean('is_premium').default(false),
  premiumUntil: timestamp('premium_until'),
  featured: boolean('featured').default(false),
  featuredUntil: timestamp('featured_until'),

  // Pricing info (optional, for leads)
  prijsIndicatie: varchar('prijs_indicatie', { length: 100 }), // e.g., "Vanaf EUR 1.500"
  gratisOfferte: boolean('gratis_offerte').default(true),
  spoedservice: boolean('spoedservice').default(false),

  // Metadata
  status: varchar('status', { length: 50 }).default('active'),
  source: varchar('source', { length: 100 }),
  sourceUrl: text('source_url'),
  discoveredAt: timestamp('discovered_at'),
  updatedAt: timestamp('updated_at').defaultNow(),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  // Performance indexes
  uniqueIndex('monteurs_slug_idx').on(table.slug),
  index('monteurs_city_idx').on(table.city),
  index('monteurs_province_idx').on(table.province),
  index('monteurs_province_slug_idx').on(table.provinceSlug),
  index('monteurs_municipality_idx').on(table.municipality),
  index('monteurs_type_idx').on(table.type),
  index('monteurs_type_slug_idx').on(table.typeSlug),
  index('monteurs_postal_code_idx').on(table.postalCode),
  index('monteurs_rating_idx').on(table.rating),
  index('monteurs_status_idx').on(table.status),
  index('monteurs_featured_idx').on(table.featured),
  index('monteurs_claimed_idx').on(table.claimed),
  index('monteurs_premium_idx').on(table.isPremium),
  // Composite indexes for common queries
  index('monteurs_city_province_idx').on(table.city, table.provinceSlug),
  index('monteurs_municipality_province_idx').on(table.municipality, table.provinceSlug),
]);

// Backward compatibility alias
export const facilities = monteurs;

// ==========================================
// USERS TABLE - Authentication
// ==========================================
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  passwordHash: text('password_hash'),
  role: varchar('role', { length: 50 }).notNull().default('user'),
  avatar: text('avatar'),
  phone: varchar('phone', { length: 50 }),
  emailVerified: timestamp('email_verified'),
  verificationCode: varchar('verification_code', { length: 6 }),
  verificationExpires: timestamp('verification_expires'),
  resetToken: varchar('reset_token', { length: 255 }),
  resetTokenExpires: timestamp('reset_token_expires'),
  lastLoginAt: timestamp('last_login_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
}, (table) => [
  uniqueIndex('users_email_idx').on(table.email),
  index('users_role_idx').on(table.role),
]);

// ==========================================
// CLAIMS TABLE - Monteur ownership claims
// ==========================================
export const claims = pgTable('claims', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  monteurSlug: varchar('monteur_slug', { length: 500 }).notNull(),
  businessRole: varchar('business_role', { length: 100 }).notNull(), // eigenaar, medewerker, etc.
  claimantName: varchar('claimant_name', { length: 255 }).notNull(),
  claimantPhone: varchar('claimant_phone', { length: 50 }),
  verificationEmail: varchar('verification_email', { length: 255 }).notNull(),
  verificationCode: varchar('verification_code', { length: 6 }),
  verificationExpires: timestamp('verification_expires'),
  emailVerified: boolean('email_verified').default(false),
  notes: text('notes'),
  adminNotes: text('admin_notes'),
  status: varchar('status', { length: 50 }).notNull().default('pending'),
  reviewedBy: integer('reviewed_by').references(() => users.id),
  reviewedAt: timestamp('reviewed_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
}, (table) => [
  index('claims_user_id_idx').on(table.userId),
  index('claims_monteur_slug_idx').on(table.monteurSlug),
  index('claims_status_idx').on(table.status),
]);

// ==========================================
// REVIEWS TABLE - User reviews
// ==========================================
export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  monteurSlug: varchar('monteur_slug', { length: 500 }).notNull(),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),
  reviewerName: varchar('reviewer_name', { length: 255 }).notNull(),
  reviewerEmail: varchar('reviewer_email', { length: 255 }),
  rating: integer('rating').notNull(),
  title: varchar('title', { length: 255 }),
  reviewText: text('review_text'),
  serviceType: varchar('service_type', { length: 100 }), // installatie, onderhoud, reparatie
  projectType: varchar('project_type', { length: 100 }), // particulier, zakelijk
  wouldRecommend: boolean('would_recommend'),
  helpful: integer('helpful').default(0),
  reported: boolean('reported').default(false),
  status: varchar('status', { length: 50 }).notNull().default('pending'),
  moderatedBy: integer('moderated_by').references(() => users.id),
  moderatedAt: timestamp('moderated_at'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('reviews_monteur_slug_idx').on(table.monteurSlug),
  index('reviews_user_id_idx').on(table.userId),
  index('reviews_status_idx').on(table.status),
  index('reviews_rating_idx').on(table.rating),
]);

// ==========================================
// PHOTOS TABLE - User-submitted photos
// ==========================================
export const photos = pgTable('photos', {
  id: serial('id').primaryKey(),
  monteurSlug: varchar('monteur_slug', { length: 500 }).notNull(),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),
  uploaderName: varchar('uploader_name', { length: 255 }).notNull(),
  fileUrl: text('file_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  caption: text('caption'),
  altText: varchar('alt_text', { length: 500 }),
  width: integer('width'),
  height: integer('height'),
  fileSize: integer('file_size'),
  mimeType: varchar('mime_type', { length: 100 }),
  status: varchar('status', { length: 50 }).notNull().default('pending'),
  moderatedBy: integer('moderated_by').references(() => users.id),
  moderatedAt: timestamp('moderated_at'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('photos_monteur_slug_idx').on(table.monteurSlug),
  index('photos_user_id_idx').on(table.userId),
  index('photos_status_idx').on(table.status),
]);

// ==========================================
// FEEDBACK TABLE - Site feedback
// ==========================================
export const feedback = pgTable('feedback', {
  id: serial('id').primaryKey(),
  monteurSlug: varchar('monteur_slug', { length: 500 }),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  subject: varchar('subject', { length: 255 }),
  message: text('message').notNull(),
  type: varchar('type', { length: 50 }).default('general'),
  status: varchar('status', { length: 50 }).default('new'),
  respondedBy: integer('responded_by').references(() => users.id),
  respondedAt: timestamp('responded_at'),
  response: text('response'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('feedback_monteur_slug_idx').on(table.monteurSlug),
  index('feedback_type_idx').on(table.type),
  index('feedback_status_idx').on(table.status),
]);

// ==========================================
// SAVED MONTEURS TABLE - User favorites
// ==========================================
export const savedMonteurs = pgTable('saved_monteurs', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  monteurSlug: varchar('monteur_slug', { length: 500 }).notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('saved_monteurs_user_id_idx').on(table.userId),
  index('saved_monteurs_monteur_slug_idx').on(table.monteurSlug),
  uniqueIndex('saved_monteurs_user_monteur_idx').on(table.userId, table.monteurSlug),
]);

// ==========================================
// OFFERTE REQUESTS TABLE - Quote requests
// ==========================================
export const offerteRequests = pgTable('offerte_requests', {
  id: serial('id').primaryKey(),
  monteurSlug: varchar('monteur_slug', { length: 500 }).notNull(),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),

  // Contact info
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),

  // Location
  postalCode: varchar('postal_code', { length: 10 }),
  city: varchar('city', { length: 255 }),
  address: text('address'),

  // Project details
  serviceType: varchar('service_type', { length: 100 }), // installatie, onderhoud, reparatie
  projectType: varchar('project_type', { length: 100 }), // particulier, zakelijk
  propertyType: varchar('property_type', { length: 100 }), // woning, kantoor, winkel
  numberOfRooms: integer('number_of_rooms'),
  squareMeters: integer('square_meters'),
  preferredBrand: varchar('preferred_brand', { length: 100 }),
  budget: varchar('budget', { length: 100 }),
  urgency: varchar('urgency', { length: 50 }), // normaal, spoed

  message: text('message'),

  // Status
  status: varchar('status', { length: 50 }).default('new'),
  forwardedToMonteur: boolean('forwarded_to_monteur').default(false),
  forwardedAt: timestamp('forwarded_at'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('offerte_requests_monteur_slug_idx').on(table.monteurSlug),
  index('offerte_requests_status_idx').on(table.status),
  index('offerte_requests_service_type_idx').on(table.serviceType),
]);

// ==========================================
// RELATIONS
// ==========================================

export const usersRelations = relations(users, ({ many }) => ({
  claims: many(claims),
  reviews: many(reviews),
  photos: many(photos),
  savedMonteurs: many(savedMonteurs),
  offerteRequests: many(offerteRequests),
}));

export const claimsRelations = relations(claims, ({ one }) => ({
  user: one(users, {
    fields: [claims.userId],
    references: [users.id],
  }),
  reviewer: one(users, {
    fields: [claims.reviewedBy],
    references: [users.id],
  }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
  }),
  moderator: one(users, {
    fields: [reviews.moderatedBy],
    references: [users.id],
  }),
}));

export const photosRelations = relations(photos, ({ one }) => ({
  user: one(users, {
    fields: [photos.userId],
    references: [users.id],
  }),
  moderator: one(users, {
    fields: [photos.moderatedBy],
    references: [users.id],
  }),
}));

export const savedMonteursRelations = relations(savedMonteurs, ({ one }) => ({
  user: one(users, {
    fields: [savedMonteurs.userId],
    references: [users.id],
  }),
}));

export const offerteRequestsRelations = relations(offerteRequests, ({ one }) => ({
  user: one(users, {
    fields: [offerteRequests.userId],
    references: [users.id],
  }),
}));

// ==========================================
// TYPE EXPORTS
// ==========================================

export type Monteur = typeof monteurs.$inferSelect;
export type NewMonteur = typeof monteurs.$inferInsert;

// Backward compatibility aliases
export type Facility = Monteur;
export type NewFacility = NewMonteur;

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Claim = typeof claims.$inferSelect;
export type NewClaim = typeof claims.$inferInsert;

export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;

export type Photo = typeof photos.$inferSelect;
export type NewPhoto = typeof photos.$inferInsert;

export type Feedback = typeof feedback.$inferSelect;
export type NewFeedback = typeof feedback.$inferInsert;

export type SavedMonteur = typeof savedMonteurs.$inferSelect;
export type NewSavedMonteur = typeof savedMonteurs.$inferInsert;

export type OfferteRequest = typeof offerteRequests.$inferSelect;
export type NewOfferteRequest = typeof offerteRequests.$inferInsert;
