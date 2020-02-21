INSERT INTO "user"
    ("firstName", "lastName", "username", "password", "securityLevel", "phoneNumber", "email", "role")
VALUES
    ( 'Josh', 'Ma', 'JoMa', '1234', 5, 8161234567, 'j.ma@gmail.com', 'Admin'),
    ( 'Prime', 'Dev', 'PrimeDev', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 1111111111, 'email', 'Developer'),
    ( 'Test', 'Admin', 'TerstAdmin', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 1111111111, 'email', 'Developer');
INSERT INTO "clients"
    ("firstName", "lastName", "gender", "phoneNumber", "email", "criminalRecord", "misdemOrFel",
    "incarceratedYorN", "incarcerationLength", "releaseDate", "docNumber", "stateIncarcerated",
    "paroleOnRelease", "agentName", "agentPhone", "connections", "ifYesConnections", "business",
    "businessStage", "whyAtBeTheBoss", "whatHopeToGain", "profilePic", "timeStamp", "isActive")
VALUES
    ('Dane', 'Pherigo', 'Male', 8162345678, 'd.pherigo@gmail.com', True, 'Felony', True, '2 years',
        '2020-02-10' , '22', 'Missouri', True, 'Tom Jones', 8085699854, True, 'Connections',
        'Dane Pherigo Coffee Shop', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png',
        '2020-02-10 04:05:06', True),
    ('Sean', 'Pherigo', 'Male', 8162345678, 's.pherigo@gmail.com', True, 'Felony', True, '2 years',
        '2020-02-10' , '22', 'Missouri', True, 'Tom Jones', 8085699854, True, 'Connections',
        'Dane Pherigo Coffee Shop', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png',
        '2020-02-10 04:05:06', True);

INSERT INTO "address"
    ("clients_id", "street", "city", "state", "zip", "business", "home", "current")
VALUES
    (1, '215th Court', 'Peculiar', 'MO', 64078, True, False, False);

INSERT INTO "competition_status"
    ("step1", "step2", "step3", "step4", "step5", "step6")
VALUES
    ('1', '2', '3', '4', '5', '6');

INSERT INTO "competitions"
    ("dateOf", "name", "winnerName", "amountGranted", "businessName", "notes")
VALUES
    ('2020-03-10', ' First Competition', 'Tracy Anderson', '10000', 'AllPro Drywall', 'awesome presentation, very concise'),
    ('2020-09-24', 'Second Competition', 'Alexander Brown', '10000', 'DaVinci Lawn Mowing', 'good start, great attitude'),
    ('2021-03-07', 'Third Competition', 'Abigail Byrne', '10000', 'Nitro Cleaning', 'very detailed, very well organized'),
    ('2021-09-19', 'Fourth Competition', 'Emma Davies', '10000', 'Capitol Marketing', 'great ideas, really motivated'),
    ('2022-03-05', 'Fifth Competition', 'Emily Gagnon', '10000', 'RiverView Painting', 'great business model'),
    ('2022-09-14', 'Sixth Competition', 'Richard Jones', '10000', 'React Roofing', 'knows all the steps needed to be sucessful'),
    ('2023-03-11', 'Seventh Competition', 'Kyle Lee', '10000', 'Tsunami Electrical', 'worked well with other participants'),
    ('2023-09-09', 'Eighth Competition', 'Mason Miller', '10000', 'Salon Contour', 'amazing talent');

INSERT INTO "clients_competitions"
    ("clients_id", "competitions_id", "status", "award", "grantAmount", "notes")
VALUES
    (1, 1, '', 'Congrats', 10000, 'You are awesome!');

INSERT INTO "links"
    ("clients_id", "url")
VALUES
    ( 1, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#');

INSERT INTO "tasks"
    ("users_id", "clients_id", "task", "complete", "assignedOn", "dueBy")
VALUES
    ( 1, 1, 'Needs to work on a business name', False, '2020-07-16
04:05:06', '2020-02-27 05:05:05'),
    ( 1, 3, 'Needs to get taxes up to date', False, '2020-04-18
04:05:06', '2020-02-28 05:05:05'),
    ( 1, 4, 'Needs to get a LLC', False, '2020-05-03
04:05:06', '2020-02-29 05:05:05'),
    ( 2, 2, 'Speak with parole officer about starting business', False, '2020-09-13
04:05:06', '2020-02-27 05:05:05'),
    ( 2, 5, 'Make sure to get insurance', False, '2020-04-05
04:05:06', '2020-02-28 05:05:05'),
    ( 1, 6, 'Make sure to complete workman comp paperwork', False, '2020-06-29
04:05:06', '2020-02-29 05:05:05'),
    ( 1, 7, 'Make sure to set up business account', False, '2020-03-03
04:05:06', '2020-02-27 05:05:05'),
    ( 2, 8, 'Write reference letter', False, '2020-02-24
04:05:06', '2020-02-28 05:05:05');

INSERT INTO "notes"
    ("clients_id", "users_id", "note", "timeStamp")
VALUES
    (1, 1, 'Needs to work on a business name.', '2020-02-11
04:05:06'),
    (2, 1, 'Needs to get taxes up to date.', '2020-02-11
04:05:06'),
    (3, 1, 'Needs to get a LLC', '2020-02-11
04:05:06'),
    (4, 1, 'Has court on March 7th.', '2020-02-11
04:05:06'),
    (5, 1, 'Asked for a reference letter.', '2020-02-11
04:05:06'),
    (6, 1, 'Needs to get insurance', '2020-02-11
04:05:06'),
    (7, 1, 'Needs to get workers comp', '2020-02-11
04:05:06'),
    (8, 1, 'Schedual in person meeting.', '2020-02-11
04:05:06'),
    (9, 1, 'Needs to set up business account', '2020-02-11
04:05:06'),
    (10, 1, 'Meet with parole officer to speak about thier company', '2020-02-11
04:05:06');

INSERT INTO "events"
    ("eventDate", "startTime", "endTime", "endEventDate", "eventTitle", "notes", "location")
VALUES
    ( '2020-02-10', '2020-02-10
016:00:00', '2020-02-10 018:00:00', '2020-02-10 019:00:00', 'Back To Business', 'Get ready to change lives', 'Prime Digital Academy');

INSERT INTO "survey"
    ("clients_id", "businessStarted", "revenue", "date")
VALUES
    (1, True, 25000, '2020-03-11');

INSERT INTO "events_clients"
    ("clients_id", "events_id")
VALUES
    (1, 1);

