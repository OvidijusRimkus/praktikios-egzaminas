-- Studentai

INSERT INTO students (first_name, last_name, course)
VALUES
('Jonas', 'Jonaitis', 1),
('Petras', 'Petraitis', 2),
('Ona', 'Onaitė', 3);

-- Dalykai

INSERT INTO subjects (student_id, name, credits)
VALUES
(1, 'JavaScript programavimas', 5),
(1, 'HTML ir CSS', 4),

(2, 'React', 5),
(2, 'Node.js', 4),

(3, 'PostgreSQL', 5),
(3, 'REST API kūrimas', 4);