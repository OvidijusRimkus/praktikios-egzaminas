CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    course INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL PRIMARY KEY,
    student_id INTEGER NOT NULL,
    name VARCHAR(255) NOT NULL,
    credits INTEGER NOT NULL,
    CONSTRAINT fk_student
        FOREIGN KEY(student_id)
        REFERENCES students(id)
        ON DELETE CASCADE
);

INSERT INTO students (first_name, last_name, course)
VALUES
('Jonas', 'Jonaitis', 1),
('Petras', 'Petraitis', 2),
('Ona', 'Onaite', 3);

INSERT INTO subjects (student_id, name, credits)
VALUES
(1, 'JavaScript', 5),
(1, 'HTML CSS', 4),
(2, 'React', 5),
(3, 'PostgreSQL', 4);