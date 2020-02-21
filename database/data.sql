INSERT INTO "user"
    ("firstName", "lastName", "username", "password", "securityLevel", "phoneNumber", "email", "role")
VALUES
    ( 'Josh', 'Mann', 'JoMa', '1234', 5, 8161234567, 'j.ma@gmail.com', 'Admin'),
    ( 'Prime', 'Dev', 'PrimeDev', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 1111111111, 'email1', 'Developer'),
    ( 'Test', 'Admin', 'TestAdmin', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 1111111111, 'email2', 'Developer');
    ( 'Kyle', 'Smith', 'KyleSmith', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 8168675309, 'kylesemail@gmail.com', 'The Boss')
INSERT INTO "clients"
    ("firstName", "lastName", "gender", "phoneNumber", "email",  "criminalRecord", "misdemOrFel", 
    "incarceratedYorN", "incarcerationLength", "releaseDate", "docNumber", "stateIncarcerated", 
    "paroleOnRelease", "agentName", "agentPhone", "connections", "ifYesConnections", "business",
    "businessStage", "whyAtBeTheBoss", "whatHopeToGain", "profilePic", "timeStamp", "isActive")
VALUES
    ('Doug', 'Jones', 'Male', 8162345678, 'd.jones.@gmail.com', True, 'Felony', True,'2 years', 
    '2020-02-10' , '22', 'Missouri', True, 'Tom Jones', 8085699854, True, 'Connections', 
    'Doug & Sean Jones Coffee Shop', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2020-02-10 04:05:06', True),
    ('Sean', 'Jones', 'Male', 8162345678, 's.jones@gmail.com', True, 'Felony', True,'2 years', 
    '2020-02-10' , '22', 'Missouri', True, 'Tom Jones', 8085699856, True, 'Connections', 
    'Doug & Sean Jones Coffee Shop', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2020-02-10 04:05:06', True),
    ('Theresa', 'Williams', 'Female', 81623458678, 's.pherigo@gmail.com', True, 'Felony', True,'2 years', 
    '2020-01-10' , '32', 'Missouri', True, 'Tom Jones', 8085699854, True, 'Connections', 
    'Window cleaning business', 'Working on a Loan', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2020-02-10 04:05:06', True),
    ('Matt', 'Williams', 'Male', 6024345678, 'm.williams@gmail.com', True, 'Felony', True,'8 years', 
    '2019-03-07' , '35', 'Missouri', True, 'Jeff Jones', 8085699862, True, 'Connections',
    'Lawnmowing business', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2020-02-10 04:05:06', True),
    ('Tim', 'Phillips', 'Male', 9138745678, 't.phillips@gmail.com', True, 'Felony', True,'3 years', 
    '2020-02-10' , '28', 'Missouri', True, 'Jeff Jones', 8085699862, True, 'Connections', 
    'Auto repair', 'Working on licensing', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2018-03-10 04:05:06', True),
    ('Jennifer', 'Edwards', 'Female', 8162345678, 'j.edwards@gmail.com', True, 'Felony', True,'8 years', 
    '2020-02-10' , '30', 'Kansas', True, 'Mike Wallace', 9135699854, True, 'Connections', 
    'Horse Training Business', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2018-03-10 04:05:06', True),
    ('Sean', 'Anthony', 'Male', 8164239856, 's.anthony@gmail.com', True, 'Felony', True,'10 years', 
    '2017-10-10' , '35', 'Missouri', True, 'Tom Jones', 8085699854, True, 'Connections', 
    'Carpenty And Drywall R Us', 'Advanced Stage', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2019-02-10 04:05:06', True),
    ('Lindsey', 'Johnson', 'Female', 8162345678, 'l.johnson@gmail.com', True, 'Felony', True,'2 years', 
    '2018-04-11' , '24', 'Missouri', True, 'Jeff Jones', 8085699862, True, 'Connections', 
    'Food Truck', 'Working on Licensing', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2018-04-10 04:05:06', True),
    ('Jeffrey', 'Andrews', 'Male', 8165678978, 'j.andrews@gmail.com', True, 'Felony', True,'9 years', 
    '2018-04-11' , '32', 'Missouri', True, 'Jeff Jones', 8085699862, True, 'Connections', 
    'Undecided', 'Has a few ideas', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2020-01-10 04:05:06', True),
    ('Pat', 'Bowie', 'Other', 8163455678, 'p.bowie@gmail.com', True, 'Felony', True,'5 years', 
    '2018-04-11' , '42', 'Missouri', True, 'Tom Jones', 8085699856, True, 'Connections', 
    'Art Studio', 'Starting', 'Hope to gain info', 'info', 'JoshBW.png', 
    '2020-02-10 04:05:06', True);
INSERT INTO "address"
    ("clients_id", "street", "city", "state", "zip", "business", "home", "current")
VALUES
    (1, '215th Court', 'Peculiar', 'MO', 64078, True, False, False),
    (2, '12515 W. 5th St.', 'Kansas City', 'MO', 64114, True, False, False),
    (3, '14 W. Cleveland', 'Independence', 'MO', 64015, True, False, False),
    (4, '6735 W. Winchester', 'Rayton', 'MO', 64133, True, False, False),
    (5, '8748 Parker Rd.', 'Gladstone', 'MO', 64078, True, False, False),
    (6, '7653 Quyivira', 'Shawnee', 'KS', 66203, True, False, False),
    (7, '13310 8th St.', 'Grandview', 'MO', 64030, True, False, False),
    (8, '1301 Oak St.', 'Kansas City', 'MO', 64078, True, False, False),
    (9, '1514 S.Columbus Ave.', 'Independence', 'MO', 64015, True, False, False),
    (10, '5919 Locust', 'Brookside', 'MO', 64110, True, False, False);
INSERT INTO "competition_status"
    ("step1", "step2", "step3", "step4", "step5", "step6")
VALUES
    ('1', '2', '3', '4', '5', '6');

INSERT INTO "competitions"
    ("dateOf", "name", "winnerName", "amountGranted", "businessName", "notes")
VALUES
    ('2020-03-10', 'Super Competition', 'dane pherigo','10000', 'all star lawn mowing', 'awesome idea, very motivated');

INSERT INTO "clients_competitions"
    ("clients_id", "competitions_id", "status", "award", "grantAmount", "notes")
VALUES
    (1, 1, '', 'Congrats', 10000, 'You are awesome!');

INSERT INTO "links"
    ("clients_id", "url")
VALUES
    ( 1, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#'),
    ( 2, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#'),
    ( 3, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#'),
    ( 4, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#'),
    ( 5, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#'),
    ( 6, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#'),
    ( 7, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#'),
    ( 8, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#'),
    ( 9, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#'),
    ( 10, 'https://docs.google.com/document/d/1V7bclmvEbaafjZEyhMklqJxxqGRMARCzWyitCKzWs6U/edit#');

INSERT INTO "tasks"
    ("users_id", "clients_id", "task", "complete", "assignedOn", "dueBy")
VALUES
    ( 1, 1, 'Make sure Doug Jones has his LLC', False, '2020-02-11
04:05:06', '2020-02-27 05:05:05'),
( 1, 1, 'Make sure Doug Jones has insurance', False, '2020-02-13
04:05:06', '2020-02-28 05:05:05'),
( 1, 1, 'Doug Jones SBA', False, '2020-02-13
04:05:06', '2020-02-29 05:05:05'),
( 3, 2, 'Make sure Sean Jones has LLC', False, '2020-02-13
04:05:06', '2020-02-27 05:05:05'),
( 3, 2, 'Make sure Sean Jones has insurance', False, '2020-02-13
04:05:06', '2020-02-28 05:05:05'),
( 3, 2, 'Make sure Sean Jones SBA', False, '2020-02-13
04:05:06', '2020-02-29 05:05:05'),
( 2, 2, 'Make sure Sean Jones has LLC', False, '2020-02-13
04:05:06', '2020-02-27 05:05:05'),
( 2, 2, 'Make sure Sean Jones has insurance', False, '2020-02-13
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
    (1, False, 0, '2020-03-11'),
    (2, False, 25000, '2020-03-11'),
    (3, False, 25000, '2020-03-11'),
    (4, False, 25000, '2020-03-11'),
    (5, False, 25000, '2020-03-11'),
    (6, False, 25000, '2020-03-11'),
    (7, True, 25000, '2020-03-11'),
    (8, True, 25000, '2020-03-11'),
    (9, True, 25000, '2020-03-11'),
    (10, True, 25000, '2020-03-11'),
    (1, True, 25000, '2020-03-11'),
    (2, True, 25000, '2020-03-11'),
    (3, True, 25000, '2020-03-11'),
    (4, True, 25000, '2020-03-11'),
    (5, True, 25000, '2020-03-11'),
    (6, True, 25000, '2020-03-11');
    

INSERT INTO "events_clients"
    ("clients_id", "events_id")
VALUES
    (1, 1);

