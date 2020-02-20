INSERT INTO "user"
    ("firstName", "lastName", "username", "password", "securityLevel", "phoneNumber", "email", "role")
VALUES
    ( 'Josh', 'Ma', 'JoMa', '1234', 5, 8161234567, 'j.ma@gmail.com', 'Admin'),
    ( 'Prime', 'Dev', 'PrimeDev', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 1111111111, 'email', 'Developer'),
    ( 'Test', 'Admin', 'TerstAdmin', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 1111111111, 'email', 'Developer');
INSERT INTO "clients"
    ("firstName", "lastName", "gender", "phoneNumber", "email",  "criminalRecord", "misdemOrFel", 
    "incarceratedYorN", "incarcerationLength", "releaseDate", "docNumber", "stateIncarcerated", 
    "paroleOnRelease", "agentName", "agentPhone", "connections", "ifYesConnections", "business",
    "businessStage", "whyAtBeTheBoss", "whatHopeToGain", "profilePic", "timeStamp", "isActive")
VALUES
    ('Dane', 'Pherigo', 'Male', 8162345678, 'd.pherigo@gmail.com', True, 'Felony', True,'2 years', 
    '2020-02-10' , '22', 'Missouri', True, 'Tom Jones', 8085699854, True, 'Connections', 
    'Dane Pherigo Coffee Shop', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2020-02-10 04:05:06', True),
    ('Sean', 'Pherigo', 'Male', 8162345678, 's.pherigo@gmail.com', True, 'Felony', True,'2 years', 
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
    ("dateOf", "name")
VALUES
    ('2020-03-10', 'Super Competition');

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
    ( 1, 1, 'Make sure Dane Pherigo has his LLC', False, '2020-02-11
04:05:06', '2020-02-27 05:05:05'),
( 1, 1, 'Make sure Dane Pherigo has insurance', False, '2020-02-13
04:05:06', '2020-02-28 05:05:05'),
( 1, 1, 'Dane Pherigo SBA', False, '2020-02-13
04:05:06', '2020-02-29 05:05:05'),
( 3, 2, 'Make sure Sean Pherigo has LLC', False, '2020-02-13
04:05:06', '2020-02-27 05:05:05'),
( 3, 2, 'Make sure Sean Pherigo has insurance', False, '2020-02-13
04:05:06', '2020-02-28 05:05:05'),
( 3, 2, 'Make sure Sean Pherigo SBA', False, '2020-02-13
04:05:06', '2020-02-29 05:05:05'),
( 2, 2, 'Make sure Sean Pherigo has LLC', False, '2020-02-13
04:05:06', '2020-02-27 05:05:05'),
( 2, 2, 'Make sure Sean Pherigo has insurance', False, '2020-02-13
04:05:06', '2020-02-28 05:05:05');

INSERT INTO "notes"
    ("clients_id", "users_id", "note", "timeStamp")
VALUES
    (1, 1, 'Keep up the good work', '2020-02-11
04:05:06');

INSERT INTO "events"
    ("eventDate", "startTime", "endTime", "eventTitle", "notes", "location")
VALUES
    ( '2020-02-10', '016:00:00', '018:00:00', 'Back To Business', 'Get ready to change lives', 'Prime Digital Academy');

INSERT INTO "survey"
    ("clients_id", "businessStarted", "revenue", "date")
VALUES
    (1, True, 25000, '2020-03-11');

INSERT INTO "events_clients"
    ("clients_id", "events_id")
VALUES
    (1, 1);

