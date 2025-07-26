-- 🚀 1. SERVICES & SUB-SERVICES
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sub_services (
    id SERIAL PRIMARY KEY,
    service_id INT REFERENCES services(id),
    title VARCHAR(100),
    slug VARCHAR(100) UNIQUE,
    description TEXT,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 📁 2. PROJECTS (PORTFOLIO & CASE STUDIES)
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    client_name VARCHAR(100),
    industry VARCHAR(100),
    summary TEXT,
    content TEXT,
    thumbnail VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE project_services (
    id SERIAL PRIMARY KEY,
    project_id INT REFERENCES projects(id),
    service_id INT REFERENCES services(id)
);

CREATE TABLE project_media (
    id SERIAL PRIMARY KEY,
    project_id INT REFERENCES projects(id),
    media_url VARCHAR(255),
    media_type VARCHAR(10) CHECK (media_type IN ('image', 'video'))
);

-- ✍️ 3. BLOG SYSTEM
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    bio TEXT,
    avatar_url VARCHAR(255),
    social_links JSONB,
    email VARCHAR(100)
);

CREATE TABLE blogs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200),
    slug VARCHAR(150) UNIQUE,
    content TEXT,
    excerpt TEXT,
    cover_image VARCHAR(255),
    author_id INT REFERENCES authors(id),
    category_id INT REFERENCES categories(id),
    published_at TIMESTAMP
);

CREATE TABLE blog_tags (
    id SERIAL PRIMARY KEY,
    blog_id INT REFERENCES blogs(id),
    tag_name VARCHAR(50)
);

-- 👥 4. TEAM & TESTIMONIALS
CREATE TABLE team_members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    designation VARCHAR(100),
    photo_url VARCHAR(255),
    bio TEXT,
    social_links JSONB
);

CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(100),
    company VARCHAR(100),
    photo_url VARCHAR(255),
    content TEXT,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 📞 5. CONTACT & LEADS
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15),
    message TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(10) CHECK (status IN ('new', 'viewed', 'responded')) DEFAULT 'new'
);

CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15),
    interested_service VARCHAR(100),
    notes TEXT,
    source VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 📊 6. ANALYTICS
CREATE TABLE page_views (
    id SERIAL PRIMARY KEY,
    page_slug VARCHAR(150),
    ip_address VARCHAR(50),
    user_agent TEXT,
    viewed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE event_logs (
    id SERIAL PRIMARY KEY,
    user_id INT,
    event_type VARCHAR(100),
    event_data JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 🔐 7. ADMIN USERS
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password_hash VARCHAR(255),
    role VARCHAR(10) CHECK (role IN ('admin', 'editor', 'viewer')) DEFAULT 'editor',
    last_login TIMESTAMP
);

-- 📄 8. STATIC PAGES
CREATE TABLE pages (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    slug VARCHAR(100) UNIQUE,
    content TEXT,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 🔁 9. REUSABLE CONTENT BLOCKS
CREATE TABLE content_blocks (
    id SERIAL PRIMARY KEY,
    location VARCHAR(100),  -- e.g. "home_hero", "footer_cta"
    title VARCHAR(150),
    content TEXT,
    image_url VARCHAR(255),
    button_text VARCHAR(50),
    button_link VARCHAR(255),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ✅ INDEXES FOR PERFORMANCE
CREATE INDEX idx_blog_slug ON blogs(slug);
CREATE INDEX idx_contact_email ON contact_messages(email);
CREATE INDEX idx_project_slug ON projects(slug);
CREATE INDEX idx_page_slug ON pages(slug); 