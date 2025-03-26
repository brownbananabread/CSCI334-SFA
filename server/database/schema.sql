DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS jobs;
DROP TABLE IF EXISTS quotes;
DROP TABLE IF EXISTS job_assignments;
DROP TABLE IF EXISTS messages;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(120) UNIQUE NOT NULL,
    password_hash VARCHAR(128) NOT NULL,  -- Hashed password (bcrypt hash length)
    is_business_account BOOLEAN DEFAULT FALSE,
    is_terms_checked BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES users(id),
    title VARCHAR(100) NOT NULL,
    description VARCHAR(500) NOT NULL,
    location TEXT NOT NULL,
    status TEXT CHECK (status IN ('open', 'pending_quote', 'quoted', 'quote_accepted', 'completed', 'cancelled')) DEFAULT 'open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE quotes (
    id SERIAL PRIMARY KEY,
    job_id INT REFERENCES jobs(id),
    trader_id INT REFERENCES users(id),
    price DECIMAL(10,2) NOT NULL,
    estimated_time INTERVAL NOT NULL,
    work_schedule TIMESTAMP NOT NULL,
    status TEXT CHECK (status IN ('pending', 'accepted', 'declined')) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE job_assignments (
    id SERIAL PRIMARY KEY,
    job_id INT REFERENCES jobs(id),
    trader_id INT REFERENCES users(id),
    start_time TIMESTAMP NOT NULL,
    completion_time TIMESTAMP NULL,
    status TEXT CHECK (status IN ('scheduled', 'in_progress', 'completed')) DEFAULT 'scheduled',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    id SERIAL PRIMARY KEY,
    job_id INT REFERENCES jobs(id),
    sender_id INT REFERENCES users(id),
    receiver_id INT REFERENCES users(id),
    message VARCHAR(500) NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Sample data for users table
INSERT INTO users (name, email, password, user_type) VALUES
('Alice Johnson', 'alice.johnson@example.com', 'password123', 'customer'),
('Bob Smith', 'bob.smith@example.com', 'password123', 'customer'),
('Charlie Brown', 'charlie.brown@example.com', 'password123', 'trader'),
('David White', 'david.white@example.com', 'password123', 'trader');

-- Sample data for jobs table
INSERT INTO jobs (customer_id, title, description, location, status) VALUES
(1, 'Plumbing Fix', 'Fix leaking pipe under the sink.', '123 Elm Street', 'open'),
(2, 'Electrical Issue', 'Replace faulty wiring in the kitchen.', '456 Oak Avenue', 'open');

-- Sample data for quotes table
INSERT INTO quotes (job_id, trader_id, price, estimated_time, work_schedule, status) VALUES
(1, 3, 150.00, '2 hours', '2025-03-27 10:00:00', 'pending'),
(2, 4, 250.00, '3 hours', '2025-03-28 14:00:00', 'pending');

-- Sample data for job_assignments table
INSERT INTO job_assignments (job_id, trader_id, start_time, status) VALUES
(1, 3, '2025-03-27 10:00:00', 'scheduled'),
(2, 4, '2025-03-28 14:00:00', 'scheduled');

-- Sample data for messages table
INSERT INTO messages (job_id, sender_id, receiver_id, message) VALUES
(1, 1, 3, 'Hi, I need my plumbing issue fixed ASAP.'),
(1, 3, 1, 'I can fix it tomorrow at 10 AM. Let me know if that works for you.'),
(2, 2, 4, 'I need the electrical issue fixed as soon as possible. Can you help?'),
(2, 4, 2, 'I can fix it tomorrow at 2 PM. Does that time work?');
