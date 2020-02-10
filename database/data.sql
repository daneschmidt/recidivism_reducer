INSERT INTO "user"
    ("firstName", "lastName", "password", "securityLevel", "phoneNumber", "email", "role", "isActive")
VALUES
    ( 'Josh', 'Ma', '1234', 5, 8161234567, 'j.ma@gmail.com', 'Admin', True);

INSERT INTO "clients"
    ("firstName", "lastName", "gender", "phoneNumber", "email", "incarcerationLength", "releaseDate", "docNumber", "stateIncarcerated", "paroleOnRelease", "connections", "ifYesConnections", "business", "profilePic", "timeStamp", "isActive")
VALUES
    ('Dane', 'Pherigo', 'Male', 8162345678, 'd.pherigo@gmail.com', '2 years', '2020-02-10' , '22', 'Missouri', True, True, 'Yes I do', 'Dane Pherigo Coffee Shop', 'JoshBW.png', '2020-02-10
04:05:06', True);

INSERT INTO "address"
    ("clients_id", "street", "city", "state", "zip", "business", "home", "current")
VALUES
    (1, '215th Court', 'Peculiar', 'MO', 64078, True, False, False);

INSERT INTO "competitions"
    ("dateOf", "name")
VALUES
    ('2020-03-10', 'Super Competition');

INSERT INTO "clients_competitions"
    ("clients_id", "competitions_id", "statusNum", "award", "notes")
VALUES
    (1, 1, 1, 'Congrats', 'You are awewsome!');

INSERT INTO "links"
    ("clients_id", "url")
VALUES
    ( 1, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#');

INSERT INTO "tasks"
    ("users_id", "clients_id", "task", "complete", "assignedOn", "dueBy")
VALUES
    ( 1, 1, 'Make sure Dane Pherigo has his LLC', False, '2020-02-11
04:05:06', '2020-02-28 05:05:05');

INSERT INTO "notes"
    ("clients_id", "users_id", "note", "timeStamp")
VALUES
    (1, 1, 'Keep up the good work', '2020-02-11
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

