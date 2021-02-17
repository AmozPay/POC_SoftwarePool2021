/* MATCH projects name with members*/
SELECT members_name, projects.name AS project_name
FROM (
      /* MATCH projects id with members */
      SELECT members_name, projects_id
      FROM (
           SELECT members.name AS members_name, memberprojectrelation.projectid AS projects_id
           FROM memberprojectrelation
           INNER JOIN members ON members.id = memberprojectrelation.memberid
           )
      AS membersproject
      )
AS membersproject_table
INNER JOIN projects ON projects_id=projects.id;

/* MATCH projects name with members and keep  only 'Researchshare'*/
SELECT members_name, projects.name AS project_name
FROM (
      /* MATCH projects id with members */
      SELECT members_name, projects_id
      FROM (
           SELECT members.name AS members_name, memberprojectrelation.projectid AS projects_id
           FROM memberprojectrelation
           INNER JOIN members ON members.id = memberprojectrelation.memberid
           )
      AS membersproject
      )
AS membersproject_table
INNER JOIN projects ON projects_id=projects.id WHERE projects.name='Researchshare';

/* MATCH email with project name and keep only petit.lucas@epitech.eu */
SELECT projects.name, projects.pole, members_email
FROM (
      /* MATCH projects id with members email */
      SELECT members_email, projects_id
      FROM (
           SELECT members.email AS members_email, memberprojectrelation.projectid AS projects_id
           FROM memberprojectrelation
           INNER JOIN members ON members.id = memberprojectrelation.memberid
           )
      AS membersproject
      )
AS emailproject_table
INNER JOIN projects ON projects_id=projects.id
WHERE members_email='petit.lucas@epitech.eu'
ORDER BY projects.pole DESC;