INSERT INTO "user"
    ("firstName", "lastName", "username", "password", "securityLevel", "phoneNumber", "email", "role")
VALUES
    ( 'Josh', 'Mann', 'JoMa', '1234', 5, 8161234567, 'j.ma@gmail.com', 'Admin'),
    ( 'Prime', 'Dev', 'PrimeDev', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 1111111111, 'email1', 'Developer'),
    ( 'Test', 'Admin', 'TestAdmin', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 1111111111, 'email2', 'Developer'),
( 'Kyle', 'Smith', 'KyleSmith', '$2b$10$BoiqkRF6PW0Csei0ve6zT.LHuZSbolktRo4pz6sQwhQE/1AfxUb8G', 5, 8168675309, 'kylesemail@gmail.com', 'The Boss');
INSERT INTO "clients"
    ("firstName", "lastName", "gender", "phoneNumber", "email", "criminalRecord", "misdemOrFel",
    "incarceratedYorN", "incarcerationLength", "releaseDate", "docNumber", "stateIncarcerated",
    "paroleOnRelease", "agentName", "agentPhone", "connections", "ifYesConnections", "business",
    "businessStage", "whyAtBeTheBoss", "whatHopeToGain", "profilePic", "timeStamp", "isActive")
VALUES
    ('Doug', 'Jones', 'Male', 8162345678, 'd.jones.@gmail.com', True, 'Felony', True, '2 years',
        '2020-02-10' , '22', 'Missouri', True, 'Tom Jones', 8085699854, True, 'Connections',
        'Doug & Sean Jones Coffee Shop', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png',
        '2020-02-10 04:05:06', True),
    ('Sean', 'Jones', 'Male', 8162345678, 's.jones@gmail.com', True, 'Felony', True, '2 years',
        '2020-02-10' , '22', 'Missouri', True, 'Tom Jones', 8085699856, True, 'Connections',
        'Doug & Sean Jones Coffee Shop', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png',
        '2020-02-10 04:05:06', True),
    ('Theresa', 'Williams', 'Female', 81623458678, 't.williams@gmail.com', True, 'Felony', True, '2 years',
        '2020-01-10' , '32', 'Missouri', True, 'Tom Jones', 8085699854, True, 'Connections',
        'Window cleaning business', 'Working on a Loan', 'Hope to gain info', 'info', 'JoshBW.png',
        '2020-02-10 04:05:06', True),
    ('Matt', 'Williams', 'Male', 6024345678, 'm.williams@gmail.com', True, 'Felony', True, '8 years',
        '2019-03-07' , '35', 'Missouri', True, 'Jeff Jones', 8085699862, True, 'Connections',
        'Lawnmowing business', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png',
        '2020-02-10 04:05:06', True),
    ('Tim', 'Phillips', 'Male', 9138745678, 't.phillips@gmail.com', True, 'Felony', True, '3 years',
        '2020-02-10' , '28', 'Missouri', True, 'Jeff Jones', 8085699862, True, 'Connections',
        'Auto repair', 'Working on licensing', 'Hope to gain info', 'info', 'JoshBW.png',
        '2018-03-10 04:05:06', True),
    ('Jennifer', 'Edwards', 'Female', 8162345678, 'j.edwards@gmail.com', True, 'Felony', True, '8 years',
        '2020-02-10' , '30', 'Kansas', True, 'Mike Wallace', 9135699854, True, 'Connections',
        'Horse Training Business', 'Starting Stage', 'Hope to gain info', 'info', 'JoshBW.png',
        '2018-03-10 04:05:06', True),
    ('Sean', 'Anthony', 'Male', 8164239856, 's.anthony@gmail.com', True, 'Felony', True, '10 years',
        '2017-10-10' , '35', 'Missouri', True, 'Tom Jones', 8085699854, True, 'Connections',
        'Carpenty And Drywall R Us', 'Advanced Stage', 'Hope to gain info', 'info', 'JoshBW.png',
        '2019-02-10 04:05:06', True),
    ('Lindsey', 'Johnson', 'Female', 8162345678, 'l.johnson@gmail.com', True, 'Felony', True, '2 years',
        '2018-04-11' , '24', 'Missouri', True, 'Jeff Jones', 8085699862, True, 'Connections',
        'Food Truck', 'Working on Licensing', 'Hope to gain info', 'info', 'JoshBW.png',
        '2018-04-10 04:05:06', True),
    ('Jeffrey', 'Andrews', 'Male', 8165678978, 'j.andrews@gmail.com', True, 'Felony', True, '9 years',
        '2018-04-11' , '32', 'Missouri', True, 'Jeff Jones', 8085699862, True, 'Connections',
        'Undecided', 'Has a few ideas', 'Hope to gain info', 'info', 'JoshBW.png',
        '2020-01-10 04:05:06', True),
    ('Pat', 'Bowie', 'Other', 8163455678, 'p.bowie@gmail.com', True, 'Felony', True, '5 years',
        '2018-04-11' , '42', 'Missouri', True, 'Tom Jones', 8085699856, True, 'Connections',
        'Art Studio', 'Starting', 'Hope to gain info', 'info', 'JoshBW.png',
        '2020-02-10 04:05:06', True),
    ('Josh', 'Ganote', 'Male', 8165215678, 'j.ganote@gmail.com', True, 'Felony', True, '5 years',
        '2018-04-11' , '28', 'Missouri', True, 'Tom Jones', 8085699856, True, 'Musicians Together',
        'Music Studio', 'Gaining Info', 'Hope to gain info', 'info', 'JoshBW.png',
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
    ('starting point', 'business idea', 'identify tasks', 'risk analysis', 'completing tasks', 'competition ready');

INSERT INTO "competitions"
    ("dateOf", "name", "winnerName", "amountGranted", "businessName", "notes")
VALUES
    ('2016-03-10', ' First Competition', 'Tracy Anderson', '10000', 'AllPro Drywall', 'awesome presentation, very concise'),
    ('2016-09-24', 'Second Competition', 'Alexander Brown', '10000', 'DaVinci Lawn Mowing', 'good start, great attitude'),
    ('2017-03-07', 'Third Competition', 'Abigail Byrne', '10000', 'Nitro Cleaning', 'very detailed, very well organized'),
    ('2017-09-19', 'Fourth Competition', 'Emma Davies', '10000', 'Capitol Marketing', 'great ideas, really motivated'),
    ('2018-03-05', 'Fifth Competition', 'Emily Gagnon', '10000', 'RiverView Painting', 'great business model'),
    ('2018-09-14', 'Sixth Competition', 'Richard Jones', '10000', 'React Roofing', 'knows all the steps needed to be sucessful');

-- INSERT INTO "clients_competitions"
--     ("clients_id", "competitions_id", "status", "award", "grantAmount", "notes")
-- VALUES
--     (1, 1, '', 'Congrats', 10000, 'You are awesome!');

INSERT INTO "participants"
    ("id", "parName", "status")
VALUES
    ('31658e60-55a7-11ea-8c86-8bbb1ccfc341','Josh Ganote','step1'),
    ('9bb98420-55a6-11ea-a27d-e30923a9ad90','Luke Ma','step1'),
    ('28e6ed60-55ac-11ea-977a-a3520fa164db','Allen Lucke','step1'),
    ('2eb85670-55ac-11ea-977a-a3520fa164db','Travis Johnston','step1'),
    ('34837df0-55ac-11ea-977a-a3520fa164db','Lucas Pherigo','step1'),
    ('64d99b60-55ac-11ea-a702-eb36189ca139','Dane Schmidt','step1');

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
    ( 1, 1, 'Needs to work on a business name', False, '2019-07-16
04:05:06', '2020-02-27 05:05:05'),
    ( 1, 3, 'Needs to get taxes up to date', False, '2019-04-18
04:05:06', '2020-02-28 05:05:05'),
    ( 1, 4, 'Needs to get a LLC', False, '2019-05-03
04:05:06', '2020-02-29 05:05:05'),
    ( 2, 2, 'Speak with parole officer about starting business', False, '2019-09-13
04:05:06', '2020-02-27 05:05:05'),
    ( 2, 5, 'Make sure to get insurance', False, '2019-04-05
04:05:06', '2020-02-28 05:05:05'),
    ( 1, 6, 'Make sure to complete workman comp paperwork', False, '2019-06-29
04:05:06', '2020-02-29 05:05:05'),
    ( 1, 7, 'Make sure to set up business account', False, '2019-03-03
04:05:06', '2020-02-27 05:05:05'),
    ( 2, 8, 'Write reference letter', False, '2019-02-24
04:05:06', '2020-02-28 05:05:05'),
    ( 4, 10, 'Needs to work on a business name', False, '2019-07-16
04:05:06', '2020-02-27 05:05:05'),
    ( 4, 9, 'Needs to get taxes up to date', False, '2019-04-18
04:05:06', '2020-02-28 05:05:05'),
    ( 4, 2, 'Needs to get a LLC', False, '2019-05-03
04:05:06', '2020-02-29 05:05:05'),
    ( 4, 1, 'Speak with parole officer about starting business', False, '2019-09-13
04:05:06', '2020-02-27 05:05:05'),
    ( 4, 4, 'Make sure to get insurance', False, '2019-04-05
04:05:06', '2020-02-28 05:05:05'),
    ( 4, 5, 'Make sure to complete workman comp paperwork', False, '2019-06-29
04:05:06', '2020-02-29 05:05:05'),
    ( 4, 8, 'Make sure to set up business account', False, '2019-03-03
04:05:06', '2020-02-27 05:05:05'),
    ( 4, 7, 'Write reference letter', False, '2019-02-24
04:05:06', '2020-02-28 05:05:05'),
    ( 4, 11, 'Meet with parole officer re starting a business', False, '2020-02-03
04:05:06', '2020-02-27 05:05:05'),
    ( 4, 11, 'Look into a small business loan', False, '2020-02-03
04:05:06', '2020-02-27 05:05:05'),
    ( 4, 11, 'Make sure to set up business account', False, '2019-02-03
04:05:06', '2020-02-28 05:05:05');
;

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
    (8, 1, 'Schedule in person meeting.', '2020-02-11
04:05:06'),
    (9, 1, 'Needs to set up business account', '2020-02-11
04:05:06'),
    (10, 1, 'Meet with parole officer to speak about thier company', '2020-02-11
04:05:06'),
    (11, 4, 'Needs to work on a business name.', '2020-02-11
04:05:06');

INSERT INTO "events"
    ("eventDate", "endDate", "eventTitle", "notes", "location")
VALUES
    ( '2020-02-24 9:00:00', '2020-02-24 10:00:00', 'Weekly Kickoff', 'Plan next competition', 'Current office'),
    ( '2020-02-24 10:00:00', '2020-02-24 12:00:00', 'Meet with Kauffman Center', 'Park on the street', 'Kauffman Center'),
    ( '2020-02-24 11:00:00', '2020-02-24 15:00:00', 'Back to Business', 'We have 25 people scheudled to attend', 'Jackson County Corrections'),
    ( '2020-02-24 13:00:00', '2020-02-24 19:00:00', 'Brainstorm next competition', 'We need to start planning next competition', 'Current office'),
    ( '2020-02-25 8:30:00', '2020-02-25 10:30:00', 'Coffee with Doug', 'Needs LLC', 'Messenger'),
    ( '2020-02-25 10:00:00', '2020-02-25 12:00:00', 'Entreprenuer Seminar', 'Network with local entreprenuers in the area', 'Novel Building'),
    ( '2020-02-25 14:00:00', '2020-02-25 17:00:00', 'One-on-one with Sean', 'Help for business idea', 'The Roasterie'),
    ( '2020-02-25 13:00:00', '2020-02-25 19:00:00', 'Confrence call', 'Working more closely with Kauffman Center', 'Current office'),
    ( '2020-02-26 7:00:00', '2020-02-26 9:00:00', 'Mid week meeting', 'check-in to see what got done this week', 'Current office'),
    ( '2020-02-26 9:30:00', '2020-02-26 12:00:00', 'Be the Boss', '30 people attending. Be there an hour before to setup', 'Halfway House'),
    ( '2020-02-26 11:00:00', '2020-02-26 15:00:00', 'Office outing', 'Taking the staff out for some fun', 'Bowling'),
    ( '2020-02-26 15:00:00', '2020-02-26 19:00:00', 'One-on-one with Josh', 'Needs help with LLC', 'The Roasterie'),
    ( '2020-02-27 9:00:00', '2020-02-27 10:00:00', 'One-on-one with Theresa Williams', 'Sign contracts', 'Halfway House'),
    ( '2020-02-27 10:00:00', '2020-02-27 12:00:00', 'Meeting with potential Investors', 'Have data ready to show', 'Kauffman Center'),
    ( '2020-02-27 13:00:00', '2020-02-27 18:00:00', 'Competition Tracker', 'Make sure we have everything ready to go ', 'Current office'),
    ( '2020-02-27 12:00:00', '2020-02-27 15:00:00', 'Plan compeition event', 'Decide on where to hold the finals for competition', 'Current office'),
    ( '2020-02-28 8:00:00', '2020-02-28 10:30:00', 'Ted Talk', 'Present Determination Inc', 'Rockhill'),
    ( '2020-02-28 10:00:00', '2020-02-28 12:30:00', 'One-on-one with Time Philips', 'Help him start the process', 'Current office'),
    ( '2020-02-28 9:00:00', '2020-02-28 10:00:00', 'One-on-one with Jennifer Edwards', 'She has some question on how to apply for LLC', 'Current office'),
    ( '2020-02-28 11:00:00', '2020-02-28 15:00:00', 'Team Building', 'plan event for staff to hangout', 'Top Golf');

INSERT INTO "survey"
    ("clients_id", "businessStarted", "revenue", "date")
VALUES
    (1, False, 0, '2019-03-11'),
    (2, False, 0, '2019-03-11'),
    (3, False, 0, '2019-03-11'),
    (4, False, 0, '2019-03-11'),
    (5, False, 0, '2019-03-11'),
    (6, False, 0, '2019-03-11'),
    (7, False, 0, '2020-02-11'),
    (8, True, 25000, '2020-02-11'),
    (9, False, 0, '2020-02-11'),
    (10, True, 25000, '2020-02-11'),
    (1, True, 25000, '2020-02-11'),
    (2, True, 25000, '2020-02-11'),
    (3, True, 25000, '2020-02-11'),
    (4, True, 25000, '2020-02-11'),
    (5, True, 25000, '2020-02-11'),
    (6, True, 25000, '2020-02-11');


INSERT INTO "events_clients"
    ("clients_id", "events_id")
VALUES
    (1, 1);

