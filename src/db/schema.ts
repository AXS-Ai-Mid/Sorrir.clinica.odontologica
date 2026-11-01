import {
  boolean,
  index,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

/**
 * Leads de orçamento captados pelos formulários do site.
 * Cada registro guarda a origem (página), o consentimento LGPD e o andamento
 * comercial usado no painel /admin.
 */
export const leads = pgTable(
  "leads",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 120 }).notNull(),
    phone: varchar("phone", { length: 32 }).notNull(),
    email: varchar("email", { length: 160 }),
    service: varchar("service", { length: 140 }),
    profile: varchar("profile", { length: 60 }),
    preferredTime: varchar("preferred_time", { length: 60 }),
    message: text("message"),
    consent: boolean("consent").notNull().default(false),
    sourcePage: varchar("source_page", { length: 180 }),
    status: varchar("status", { length: 24 }).notNull().default("novo"),
    notes: text("notes"),
    notifiedAt: timestamp("notified_at", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => [index("leads_created_at_idx").on(table.createdAt)],
);

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
