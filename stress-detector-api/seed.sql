INSERT INTO users (
    id,
    fullname,
    email,
    password,
    role,
    created_at,
    updated_at
)
VALUES (
    'user-test-001',
    'Yanda Testing',
    'yanda@test.com',
    'yanda123_',
    'student',
    NOW(),
    NOW()
);


INSERT INTO daily_activities (
    id,
    user_id,
    activity_date,
    activity_status,
    sleep_hours,
    study_hours,
    screen_time_hours,
    social_media_hours,
    physical_activity_minutes,
    mood_score,
    fatigue_level,
    assignment_load,
    deadline_pressure,
    note,
    created_at,
    updated_at
)
VALUES
('act-001','user-test-001','2026-05-25','submitted',7.5,4,6,2,30,8,3,4,3,'Hari cukup baik',NOW(),NOW()),
('act-002','user-test-001','2026-05-26','submitted',6.5,5,7,3,20,7,4,5,4,'Banyak tugas',NOW(),NOW()),
('act-003','user-test-001','2026-05-27','submitted',5.5,6,8,4,15,6,6,7,6,'Mulai stres',NOW(),NOW()),
('act-004','user-test-001','2026-05-28','submitted',5,7,9,5,10,5,7,8,7,'Deadline mendekat',NOW(),NOW()),
('act-005','user-test-001','2026-05-29','submitted',6,6,8,4,20,6,6,7,6,'Masih banyak tugas',NOW(),NOW()),
('act-006','user-test-001','2026-05-30','submitted',7,4,6,3,40,8,3,4,3,'Mulai lebih santai',NOW(),NOW()),
('act-007','user-test-001','2026-05-31','submitted',8,3,5,2,45,9,2,2,2,'Akhir minggu tenang',NOW(),NOW());

INSERT INTO stress_predictions (
    id,
    user_id,
    activity_id,
    prediction_date,
    stress_level,
    stress_score,
    confidence_score,
    model_version,
    created_at
)
VALUES
('pred-001','user-test-001','act-001','2026-05-25','low',25.2,0.95,'v1.0',NOW()),
('pred-002','user-test-001','act-002','2026-05-26','low',35.8,0.94,'v1.0',NOW()),
('pred-003','user-test-001','act-003','2026-05-27','moderate',58.4,0.92,'v1.0',NOW()),
('pred-004','user-test-001','act-004','2026-05-28','high',81.3,0.96,'v1.0',NOW()),
('pred-005','user-test-001','act-005','2026-05-29','moderate',67.9,0.93,'v1.0',NOW()),
('pred-006','user-test-001','act-006','2026-05-30','low',32.4,0.95,'v1.0',NOW()),
('pred-007','user-test-001','act-007','2026-05-31','low',20.1,0.97,'v1.0',NOW());

INSERT INTO summaries (
    id,
    user_id,
    period_start,
    period_end,
    days_count,
    avg_sleep_hours,
    avg_study_hours,
    avg_screen_time_hours,
    avg_social_media_hours,
    avg_physical_activity,
    total_physical_activity_minutes,
    avg_mood_score,
    avg_fatigue_level,
    avg_assignment_load,
    avg_deadline_pressure,
    avg_stress_score,
    dominant_stress_level,
    high_stress_days,
    max_stress_score,
    stress_trend,
    summary_status,
    created_at,
    updated_at
)
VALUES (
    'summary-001',
    'user-test-001',
    '2026-05-25',
    '2026-05-31',
    7,
    6.5,
    5.0,
    7.0,
    3.3,
    25.7,
    180,
    7.0,
    4.4,
    5.3,
    4.4,
    45.9,
    'moderate',
    1,
    81.3,
    'decreasing',
    'pending',
    NOW(),
    NOW()
);

INSERT INTO insights (
    id,
    user_id,
    summary_id,
    insight_text,
    created_at
)
VALUES
(
    'insight-001',
    'user-test-001',
    'summary-001',
    'Tingkat stres meningkat pada pertengahan minggu dan menurun kembali menjelang akhir minggu.',
    NOW()
);

INSERT INTO recommendations (
    id,
    user_id,
    summary_id,
    category,
    priority_level,
    title,
    recommendation_text,
    is_read,
    created_at
)
VALUES
(
    'rec-001',
    'user-test-001',
    'summary-001',
    'sleep',
    'high',
    'Perbaiki Pola Tidur',
    'Usahakan tidur minimal 7 jam setiap malam untuk membantu menurunkan tingkat stres.',
    false,
    NOW()
),
(
    'rec-002',
    'user-test-001',
    'summary-001',
    'stress',
    'medium',
    'Kelola Deadline',
    'Buat daftar prioritas tugas agar tekanan deadline dapat berkurang.',
    false,
    NOW()
),
(
    'rec-003',
    'user-test-001',
    'summary-001',
    'physical_activity',
    'low',
    'Tetap Aktif',
    'Pertahankan aktivitas fisik minimal 30 menit setiap hari.',
    false,
    NOW()
);

