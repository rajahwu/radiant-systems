-- ============================================  
-- RADIANT SYSTEMS — BRAND KIT DATABASE POPULATION  
-- ============================================

-- Create or update Radiant Systems 
INSERT OR REPLACE INTO brands (id, name, slug, tagline, tone, keywords, created_at, updated_at)  
VALUES (  
'rs-02', 
'Radiant Systems',  
'radiant-systems',  
'Operational Permanence',  
'Institutional, calm, disciplined, authoritative — the governance layer ensuring continuity and clarity.',  
'Infrastructure · Governance · Clarity · Discipline · Continuity · Oversight',  
datetime('now'),  
datetime('now')  
);

-- ============================================  
-- COLORS  
-- ============================================

INSERT INTO brand_colors (brand_id, token_name, hex, rgb, cmyk, pantone, usage_notes, is_primary)  
VALUES  
-- Foundation Colors  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'foundation.white', '#FFFFFF', '255,255,255', '0,0,0,0', NULL, 'Pure white surfaces', 0),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'foundation.cream.50', '#FCFCF9', '252,252,249', '1,1,2,0', NULL, 'Page backgrounds', 0),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'foundation.cream.100', '#FFFFFD', '255,255,253', '0,0,1,0', NULL, 'Cards, panels', 0),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'foundation.gray.200', '#F5F5F5', '245,245,245', '4,3,3,0', NULL, 'Dividers, borders', 0),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'foundation.gray.300', '#A7A9A9', '167,169,169', '38,30,31,0', NULL, 'Disabled states', 0),

-- Text Colors    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'text.primary', '#13343B', '19,52,59', NULL, NULL, 'Primary text (Slate 900)', 0),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'text.secondary', '#626C71', '98,108,113', NULL, NULL, 'Secondary labels, metadata', 0),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'text.heading', '#262828', '38,40,40', NULL, NULL, 'Headings (Charcoal 800)', 0),

-- Brand Teal System    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'brand.teal.300', '#32B8C6', '50,184,198', NULL, NULL, 'Light accent, highlights', 1),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'brand.teal.500', '#21808D', '33,128,141', NULL, NULL, 'Primary brand color', 1),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'brand.teal.600', '#1D7480', '29,116,128', NULL, NULL, 'Hover, pressed states', 1),

-- Semantic Colors    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'semantic.error', '#C0152F', '192,21,47', NULL, NULL, 'Alerts, errors', 0),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'semantic.success', '#21808D', '33,128,141', NULL, NULL, 'Success state (alias of teal 500)', 0);

-- ============================================  
-- TYPOGRAPHY  
-- ============================================

INSERT INTO brand_typography (brand_id, token_name, font_family, font_weight, size_px, size_rem, line_height, letter_spacing, usage_notes)  
VALUES  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'type.h1', 'IBM Plex Sans', 'SemiBold (600)', 24, 1.714, 1.2, 'normal', 'Page titles'),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'type.h2', 'IBM Plex Sans', 'SemiBold (600)', 18, 1.286, 1.2, 'normal', 'Section headers'),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'type.h3', 'IBM Plex Sans', 'SemiBold (600)', 11, 0.786, 1.2, '0.05em', 'Overlines, labels'),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'type.body', 'IBM Plex Sans', 'Regular (400)', 14, 1.0, 1.6, 'normal', 'Standard paragraphs'),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'type.small', 'IBM Plex Sans', 'Regular (400)', 12, 0.857, 1.4, 'normal', 'Captions, metadata'),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'type.code', 'IBM Plex Mono', 'Regular (400)', 14, 1.0, 1.6, 'normal', 'CLI, logs, system data');

-- ============================================  
-- ICONS  
-- ============================================

INSERT INTO brand_icons (brand_id, category, name, file_path, size, stroke_width, description, is_primary_glyph)  
VALUES  
-- Governance Icons  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'governance', 'shield-governance', 'icons/governance/shield-governance.svg', '24x24', '2px', 'Governance authority symbol', 1),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'governance', 'compliance', 'icons/governance/compliance.svg', '24x24', '2px', 'Compliance and standards', 0),

-- Infrastructure Icons    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'infrastructure', 'infrastructure-node', 'icons/infrastructure/node.svg', '24x24', '2px', 'System node representation', 0),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'infrastructure', 'network-map', 'icons/infrastructure/network-map.svg', '24x24', '2px', 'System map / topology', 0),

-- Status Icons    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'status', 'error', 'icons/status/error.svg', '24x24', '2px', 'Error state indicator', 0),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'status', 'success', 'icons/status/success.svg', '24x24', '2px', 'Success state indicator', 0),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'status', 'alert', 'icons/status/alert.svg', '24x24', '2px', 'Alert/warning indicator', 0);

-- ============================================  
-- ASSETS  
-- ============================================

INSERT INTO brand_assets (brand_id, asset_type, category, name, file_path, file_format, usage_notes)  
VALUES  
-- Logos  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'logo', 'horizontal', 'Primary Logo Lockup', 'logo/logo-horizontal.svg', 'svg', 'Horizontal wordmark for headers and system UI'),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'logo', 'square', 'Square Logo', 'logo/logo-square.svg', 'svg', 'Square version for compact spaces'),  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'logo', 'icon', 'Icon Mark', 'logo/logo-icon.svg', 'svg', 'Icon-only mark for system indicators'),

-- Diagrams    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'illustration', 'diagram', 'System Map', 'illustrations/diagrams/system-map.svg', 'svg', 'High-level system topology'),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'illustration', 'diagram', 'Governance Flow', 'illustrations/diagrams/governance-flow.svg', 'svg', 'Governance and compliance flowchart'),    
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'illustration', 'diagram', 'Infrastructure Layers', 'illustrations/diagrams/infrastructure-layers.svg', 'svg', 'Layered infrastructure diagram');

-- ============================================  
-- GUIDELINES  
-- ============================================

INSERT INTO brand_guidelines (brand_id, section, content, display_order)  
VALUES  
((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'color-usage',  
'Radiant Systems uses a muted institutional palette. Avoid saturated colors, gradients, or decorative hues. Teal is reserved for primary actions and system emphasis.', 1),

((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'typography',    
'Typography follows a strict hierarchy using IBM Plex Sans and IBM Plex Mono. No custom fonts or decorative weights. Maximum weight: 600.', 2),

((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'iconography',    
'Icons follow a strict geometric grid with 2px strokes and no rounded corners. Designed for clarity, not expression.', 3),

((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'illustration',    
'Illustrations are diagrammatic: system maps, flows, and infrastructure diagrams. No characters, metaphors, or decorative artwork.', 4),

((SELECT id FROM brands WHERE slug = 'radiant-systems'), 'governance',    
'Radiant Systems governs all tokens and operational standards. Subsystems must consume tokens, not override them. Changes require documented justification.', 5);