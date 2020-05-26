# Member Roles and Permissions
MERN Stack project that incorporates OAuth and Controlled Access depending on user's assigned level.


## Role Definitions
Role types - Project members, Project Managers, and Project Admins. 3 different permission levels, but requires scalability to add more roles and responsibilities.

- Project Members: can clock in their time, and view the roster

- Project Managers: view/edit roster, limited editing of the project

- Project Admins: Full read/write of the project

### Notes

Members are a potential many to many(few) relationship with projects.. projects will have many members, members may be a part of one or more..
<br>
Project Managers - few to many - Each project may have 1 or more project managers.
<br>
Because there various projects, roles must also state what project they belong to:
<br>
<code>
    User {
        affiliations: [ '1:member' ]   //projectID:role
    }
</code>
