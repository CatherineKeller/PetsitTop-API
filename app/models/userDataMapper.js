/* eslint-disable camelcase */
const debug = require('debug')('opet:userDataMapper');
const client = require('./database');
const user_has_roleDataMapper = require('./user_has_roleDataMapper');
const user_has_pet_typeDataMapper = require('./user_has_pet_typeDataMapper');

/**
 * a general User type
 *
 * @typedef {object} User
 * @property {number} id - user id
 * @property {string} first_name - user's first_name
 * @property {string} last_name - user's last_name
 * @property {string} email - user's email adress
 * @property {string} password - user's encrypted password
 * @property {string} postal_code - user's postal code (adress)
 * @property {string} city - user's city (adress)
 * @property {string} presentation - user's presentation
 * @property {boolean} availability - user's availability (if role petsitter)
 * @property {string} availability_details - user's availability details (if role petsitter)
 * @property {boolean} rgpd_consent - 'true' if user's rgpd_consent is accepted / 'false'
 * @property {string} rgpd_consent_date - date of rgpd_consent
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * a get User type
 *
 * @typedef {object} UserGet
 * @property {number} id - user id
 * @property {string} first_name - user's first_name
 * @property {string} last_name - user's last_name
 * @property {string} email - user's email adress
 * @property {string} postal_code - user's postal code (adress)
 * @property {string} city - user's city (adress)
 * @property {string} presentation - user's presentation
 * @property {string} availability - user's availability 'true'/'false'(if role petsitter)
 * @property {boolean} availability - user's availability (if role petsitter)
 * @property {array<UserRole>} roles - array of user's roles (id and name)
 * @property {array<UserPetType>} pet_types - array of user pet_types (id & name) if role petsitter
 * @property {array<UserPet>} pets - array of user's pets (id, name, pet_type name, presentation)
 * @property {array<UserAd>} ads - array of user's ads (id, city, title, content)
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 * @property {boolean} isOwner - isOwner:true (added if loggedIn user wants its own profile page)
 */

/**
 * a UserWithPetTypeAndRole type
 *
 * @typedef {object} UserWithPetTypeAndRole
 * @property {number} id - user id
 * @property {string} first_name - user's first_name
 * @property {string} last_name - user's last_name
 * @property {string} email - user's email adress
 * @property {string} postal_code - user's postal code (adress)
 * @property {string} city - user's city (adress)
 * @property {string} presentation - user's presentation
 * @property {string} availability - user's availability 'true'/'false'(if role petsitter)
 * @property {boolean} availability - user's availability (if role petsitter)
 * @property {array<string>} role_names - array of user's role names
 * @property {array<number>} pet_types_ids - array of user's pet_types names if role petsitter
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * a post User type
 *
 * @typedef {object} UserPost
 * @property {string} first_name - user's first_name
 * @property {string} last_name - user's last_name
 * @property {string} email - user's email adress
 * @property {string} password - user's password
 * @property {string} confirmPassword - user's password confirmation
 * @property {string} postal_code - user's postal code (adress)
 * @property {string} city - user's city (adress)
 * @property {boolean} role_petowner - 'true' if user's role is petowner / 'false'
 * @property {boolean} role_petsitter - 'true' if user's role is petsitter / 'false'
 * @property {string} availability - user's availability 'true'/'false'(if role petsitter)
 * @property {string} availability_details - user's availability details (if role petsitter)
 * @property {array<string>} pet_type - array of user's pet_type id
 * @property {boolean} rgpd_consent - 'true' if user's rgpd_consent is accepted / 'false'
 * @property {boolean} cgu_consent - 'true' if user's cgu_consent is accepted / 'false'
 */

/**
 * a put User type
 *
 * @typedef {object} UserPut
 * @property {string} first_name - user's first_name
 * @property {string} last_name - user's last_name
 * @property {string} email - user's email adress
 * @property {string} presentation - user's presentation
 * @property {string} postal_code - user's postal code (adress)
 * @property {string} city - user's city (adress)
 * @property {boolean} role_petowner - 'true' if user's role is petowner / 'false'
 * @property {boolean} role_petsitter - 'true' if user's role is petsitter / 'false'
 * @property {string} availability - user's availability 'true'/'false'(if role petsitter)
 * @property {string} availability_details - user's availability details (if role petsitter)
 * @property {array<string>} pet_type - array of user's pet_type id
 */

/**
 * a User created type
 *
 * @typedef {object} UserCreated
 * @property {number} id - user id
 * @property {string} first_name - user's first_name
 * @property {string} last_name - user's last_name
 * @property {string} email - user's email adress
 * @property {string} postal_code - user's postal code (adress)
 * @property {string} city - user's city (adress)
 * @property {string} presentation - user's presentation
 * @property {array<number>} roles - array of user's roles id
 * @property {array<number>} pet_type - array of user's pet_type id
 * @property {boolean} availability - user's availability (if role petsitter)
 * @property {string} availability_details - user's availability details (if role petsitter)
 * @property {boolean} rgpd_consent - 'true' if user's rgpd_consent is accepted / 'false'
 * @property {string} rgpd_consent_date - date of rgpd_consent
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 */

/**
 * an User updated type
 *
 * @typedef {object} UserUpdated
 * @property {number} id - user id
 * @property {string} first_name - user's first_name
 * @property {string} last_name - user's last_name
 * @property {string} email - user's email adress
 * @property {string} postal_code - user's postal code (adress)
 * @property {string} city - user's city (adress)
 * @property {string} presentation - user's presentation
 * @property {array<number>} roles - array of user's roles id
 * @property {array<number>} pet_type - array of user's pet_type id
 * @property {boolean} availability - user's availability (if role petsitter)
 * @property {string} availability_details - user's availability details (if role petsitter)
 * @property {string} created_at - date of creation
 * @property {string} updated_at - date of last update
 * @property {array<number>} roles - array of user's roles id
 * @property {array<number>} pet_type - array of user's pet_type id
 * @property {array<UserPet>} pets - array of user's pets (id, name, pet_type name, presentation)
 * @property {array<UserAd>} ads - array of user's ads (id, city, title, content)
 */

const userDataMapper = {

  // /**
  //  * Fetches all users from database
  //  *
  //  * @returns {array<User>} - array of users
  //  */
  // findAllUsers: async () => {
  //   debug('findAllUsers');
  //   const query = {
  //     text: 'SELECT * FROM "user" ORDER BY "id"',
  //   };
  //   const results = await client.query(query);
  //   return results.rows;
  // },

  /**
   * Fetches available petsitters from database
   *
   * @returns {array<UserResearched>} array of users as available petsitters + their pet_types
   */
  // findAllAvailablePetsitters: async () => {
  //   debug('findAllAvailablePetsitters');
  //   const query = {
  //     text: `
  //       SELECT
  //         "user".*,
  //         ARRAY_AGG("pet_type"."name") AS "pet_types",
  //         "role"."name" AS "role_name"
  //       FROM
  //         "user"
  //       INNER JOIN "user_has_pet_type" ON "user"."id"="user_has_pet_type"."user_id"
  //       INNER JOIN "pet_type" ON "user_has_pet_type"."pet_type_id"="pet_type"."id"
  //       INNER JOIN "user_has_role" ON "user"."id"="user_has_role"."user_id"
  //       INNER JOIN "role" ON "user_has_role"."role_id"="role"."id"
  //       WHERE "user"."availability" = true AND "role"."name" = 'petsitter'
  //       GROUP BY "user"."id", "role"."name";
  //     `,
  //   };
  //   const results = await client.query(query);
  //   return results.rows;
  // },

  /**
   * Fetches available petsitters from database filtered by department & pet_type
   *
   * @returns {array<UserResearched>} array of users as available petsitters + their pet_types
   */
  findAllAvailablePetsittersFilter: async (department, petType) => {
    debug('findAllAvailablePetsittersFilter');
    const query = {
      text: `
        SELECT 
        "user"."id",
        "user"."first_name",
        "user"."last_name",
        "user"."email",
        "user"."postal_code",
        "user"."city",
        "user"."presentation",
        "user"."availability",
        "user"."availability_details",
        "user"."created_at",
        "user"."updated_at",
          ARRAY_AGG("pet_type"."name") AS "pet_types",
          "role"."name" AS "role_name"
        FROM
          "user"
        INNER JOIN "user_has_pet_type" ON "user"."id"="user_has_pet_type"."user_id"
        INNER JOIN "pet_type" ON "user_has_pet_type"."pet_type_id"="pet_type"."id"
        INNER JOIN "user_has_role" ON "user"."id"="user_has_role"."user_id"
        INNER JOIN "role" ON "user_has_role"."role_id"="role"."id"
        WHERE 
          "user"."availability" = true
          AND "role"."name" = 'petsitter'
          AND "user"."postal_code" LIKE $1||'%'
        GROUP BY "user"."id", "role"."name"
        HAVING $2 = ANY(ARRAY_AGG("pet_type"."name"));
      `,
      values: [department, petType],
    };
    const results = await client.query(query);
    return results.rows;
  },

  /**
   * fetches a user entry according to its email
   *
   * @param {number} email - user's email
   *
   * @returns {User} a user
   */
  findUserByEmail: async (email) => {
    debug('findUserByEmail');
    debug('email', email);
    const query = {
      text: `
        SELECT * from "user"
        WHERE "email" = $1;
      `,
      values: [email],
    };
    const results = await client.query(query);
    return results.rows[0];
  },

  /**
   * fetches a user entry according to its id
   *
   * @param {number} id - user's id
   *
   * @returns {UserGet} a user with its roles, pet_types (if petsitter),
   * pets, ads, and isOwner: true (if loggedInUser)
   */
  findUserById: async (id) => {
    debug('findUserById');
    debug('id', id);
    const query = {
      text: `
      SELECT 
        "user"."id",
        "user"."first_name",
        "user"."last_name",
        "user"."email",
        "user"."postal_code",
        "user"."city",
        "user"."presentation",
        "user"."availability",
        "user"."availability_details",
        "user"."created_at",
        "user"."updated_at",
        jsonb_agg(DISTINCT jsonb_build_object('id', "role"."id",'name', "role"."name")) AS "roles",
        COALESCE(jsonb_agg(DISTINCT jsonb_build_object('id', "pet_type_to_petsit"."id",'name', "pet_type_to_petsit"."name")) FILTER (WHERE "pet_type_to_petsit"."id" IS NOT NULL), '[]') AS "pet_types",
        COALESCE(jsonb_agg(DISTINCT jsonb_build_object('id', "pet"."id",'name', "pet"."name", 'presentation', "pet"."presentation", 'pet_type', "pet_type_qualify"."name")) FILTER (WHERE "pet"."id" IS NOT NULL), '[]') AS "pets",
        COALESCE(jsonb_agg(DISTINCT jsonb_build_object('id', "ad"."id",'title', "ad"."title", 'content', "ad"."content", 'city', "ad"."city", 'postal_code', "ad"."postal_code")) FILTER (WHERE "ad"."id" IS NOT NULL), '[]') AS "ads"
      
      FROM
        "user"
      
      LEFT JOIN "user_has_pet_type" ON "user"."id"="user_has_pet_type"."user_id"
      LEFT JOIN "pet_type" AS "pet_type_to_petsit" ON "user_has_pet_type"."pet_type_id"= "pet_type_to_petsit"."id"
      LEFT JOIN "user_has_role" ON "user"."id"="user_has_role"."user_id"
      LEFT JOIN "role" ON "user_has_role"."role_id"="role"."id"
      LEFT JOIN "pet" ON "pet"."user_id" = "user"."id"
      LEFT JOIN "pet_type" AS "pet_type_qualify" ON "pet"."pet_type_id"= "pet_type_qualify"."id"       
      LEFT JOIN "ad" ON "ad"."user_id" = "user"."id"
      
      WHERE 
          "user"."id" = $1
      
      GROUP BY "user"."id";
      `,
      values: [id],
    };
    const results = await client.query(query);
    debug('User by id : ', results.rows[0]);

    return results.rows[0];
  },

  /**
   * fetches a user with pet_types_id and role_names according to its id
   *
   * @param {number} id - user's id
   *
   * @returns {UserWithPetTypeAndRole} a user with its role_names, pet_types_ids (if petsitter)
  */
  findUserWithRoleAndPetTypeById: async (id) => {
    debug('findUserWithRoleAndPetTypeById');
    debug('id', id);
    const query = {
      text: `
        SELECT
          "user".*,
          ARRAY_AGG(DISTINCT "role"."name") AS "role_names",
          ARRAY_AGG(DISTINCT "user_has_pet_type"."pet_type_id") AS "pet_types_ids"
        FROM "user"
        LEFT JOIN "user_has_role" ON "user"."id"="user_has_role"."user_id"
        LEFT JOIN "role" ON "user_has_role"."role_id"="role"."id"
        LEFT JOIN "user_has_pet_type" ON "user"."id"="user_has_pet_type"."user_id"
        WHERE
          "user"."id" = $1
        GROUP BY "user"."id";
      `,
      values: [id],
    };
    const results = await client.query(query);

    return results.rows[0];
  },

  /**
   * adds (creates) a user
   *
   * @param {UserPost} createObj - the user to create
   * @returns {UserCreated} the created user
   */
  createUser: async (createObj) => {
    debug('createObj', createObj);
    debug('createUser');

    // we extract "role_petsitter" + "role_petowner" + array "pet_type" from createObj(req.body)
    // we create "createObj2" with all the other properties that can be inserted in "user" table
    const {
      role_petsitter, role_petowner, pet_type, ...createObj2
    } = createObj;

    // we insert user table "user"
    const queryUser = {
      text: `
        SELECT * FROM new_user($1);
      `,
      values: [createObj2],
    };
    // debug('query', query);
    const results = await client.query(queryUser);

    // ---------------------------------------------------------------
    // ----- WE AD THE ROLES FOR THE USER IN TABLE "user_has_role" :
    // ---------------------------------------------------------------
    // 1 insert if role petsitter and/or 1 insert if role petowner

    // we get the id of the user we just inserted in table "user" :
    const { id: userId } = results.rows[0];

    // we add a "roles" property to the user we'll return (array of the role or roles)
    const resultsRow = results.rows[0];
    resultsRow.roles = [];

    // default role is petowner
    const userRoleObj = { user_id: userId, role_id: 2 };

    // 1) we check if the two roles are false, if so we add the default role (petowner)
    if (role_petsitter === false && role_petowner === false) {
      userRoleObj.role_id = 2; // Petowner by default
      const resultPetowner = await user_has_roleDataMapper.createUserHasRolesForUser(userRoleObj);

      // we push the role_id in the array of the "roles" property
      resultsRow.roles.push(resultPetowner.rows[0].role_id);
    }

    // 2) if "Petsitter" checkbox has been checked :
    // debug('role_petsitter', role_petsitter);
    if (role_petsitter === true) {
      userRoleObj.role_id = 1;
      const resultPetsitter = await user_has_roleDataMapper.createUserHasRolesForUser(userRoleObj);
      // debug('resultPetsitter :', resultPetsitter.rows[0]);

      // we push the role_id in the array of the "roles" property
      resultsRow.roles.push(resultPetsitter.rows[0].role_id);
    }
    // 3) if "Petowner" checkbox has been checked :
    // debug('role_petowner', role_petowner);
    if (role_petowner === true) {
      userRoleObj.role_id = 2;
      const resultPetowner = await user_has_roleDataMapper.createUserHasRolesForUser(userRoleObj);
      // debug('resultPetowner :', resultPetowner.rows[0]);

      // we push the role_id in the array of the "roles" property
      resultsRow.roles.push(resultPetowner.rows[0].role_id);
    }

    // debug('resultsRow.roles :', resultsRow.roles);

    // ---------------------------------------------------------------
    // -----WE ADD THE PET_TYPES FOR THIS USER IN TABLE "user_has_pet_type":
    // ---------------------------------------------------------------
    // pet_types is an array of string, so first we cast to array of numbers:
    let petTypesToNumbers = [];
    if (pet_type) { // Si pet_type est vide, on ne fait rien
      petTypesToNumbers = pet_type.map(Number);
    }

    // eslint-disable-next-line max-len
    const resultsPetType = await user_has_pet_typeDataMapper.createUserHasPetTypesForUser(userId, petTypesToNumbers);
    // debug('resultsPetType :', resultsPetType.rows);

    const allPetTypes = resultsPetType.rows;

    // we add a "pet_types" property to the user we'll return (array of the pet_type(s) id)
    resultsRow.pet_types = [];
    // for each "pet_type" of the petsitter we push the "pet_type_id" in the "pet_types" array
    allPetTypes.forEach((petType) => {
      resultsRow.pet_types.push(petType.pet_type_id);
    });

    // debug('objet final :', results.rows[0]);

    return results.rows[0];
  },

  /**
   * modifies a user according to it's id
   *
   * @param {number} id - the user's id
   * @param {UserPost} modifyObj - the user to modify
   * @param {UserGet} userBeforeSave - the user before modifications
   *
   * @returns {UserUpdated} the modified user
   */
  modifyUser: async (id, modifyObj, userBeforeSave) => {
    debug('modifyUser');
    debug('id', id);
    debug('modifyObj', modifyObj);
    debug('userBeforeSave', userBeforeSave);

    // we extract "role_petsitter" + "role_petowner" + array "pet_type" from createObj(req.body)
    // we create "createObj2" with all the other properties that can be inserted in "user" table
    const {
      role_petsitter, role_petowner, pet_type, ...modifyUserObj
    } = modifyObj;

    // Modify user in table "user"
    const queryUser = {
      text: `
        SELECT * FROM update_user($1)
      `,
      values: [{ ...modifyUserObj, id }],
    };
    const results = await client.query(queryUser);
    debug('userAfterSave', results.rows[0]);

    // ---------------------------------------------------------------
    // -----MODIFICATION OF ROLES IN "user_has_role":
    // ---------------------------------------------------------------
    const userRoleObj = { user_id: id };

    // 1) Check if role_petsitter already exists for this user before update
    if (userBeforeSave.role_names.includes('petsitter')) {
      // debug('userBeforeSave was a petsitter');
      userRoleObj.role_id = 1;
      // if it does AND role_petsitter=false in body : we delete the role from user_has_role
      if (role_petsitter === false) {
        // debug('role_petsitter === false');
        // eslint-disable-next-line max-len
        await user_has_roleDataMapper.deleteUserHasRolesForUser(userRoleObj);
      }
      // 1bis) else: 'petsitter' was not in previous role AND it is updated to 'true':
      // we create role in user_has_role
    } else {
      // debug('userBeforeSave was NOT a petsitter');
      userRoleObj.role_id = 1;
      // eslint-disable-next-line no-lonely-if
      if (role_petsitter === true) {
        // debug('role_petsitter === true');
        await user_has_roleDataMapper.createUserHasRolesForUser(userRoleObj);
      }
    }

    // 2) Check if role_petowner already exists for this user before update
    if (userBeforeSave.role_names.includes('petowner')) {
      // debug('userBeforeSave was a petowner');
      userRoleObj.role_id = 2;
      // if it does AND role_petowner=false in body : we delete the role from user_has_role
      if (role_petowner === false) {
        // debug('role_petowner === false');
        await user_has_roleDataMapper.deleteUserHasRolesForUser(userRoleObj);
      }
      // 2bis) if 'petowner' was not in previous role AND it is updated to 'true':
      // we create role in user_has_role
    } else {
      // debug('userBeforeSave was NOT a petowner');
      // eslint-disable-next-line no-lonely-if
      if (role_petowner === true) {
        // debug('role_petowner === true');
        userRoleObj.role_id = 2;
        await user_has_roleDataMapper.createUserHasRolesForUser(userRoleObj);
      }
    }

    // ---------------------------------------------------------------
    // -----MODIFICATION OF ROLES IN user_has_pet_type (2 cases):
    // ---------------------------------------------------------------
    // if pet_type is not empty, we cast array of strings to array of numbers
    let petTypesToNb = [];
    if (pet_type) {
      petTypesToNb = pet_type.map(Number);
    }

    // 1) for the new "checked" pet_types in modification form,
    // we add them to table "user_has_pet_type" for the user

    // we make an array of only the added pet_types
    const addedPetTypes = petTypesToNb.filter(
      (type) => !userBeforeSave.pet_types_ids.includes(type),
    );
    debug('Added pet_types :', addedPetTypes);
    // we add these pet-types in the table "user_has_pet_type":
    await user_has_pet_typeDataMapper.createUserHasPetTypesForUser(id, addedPetTypes);

    // 2) for the "un-checked" pet_types in modification form
    /// we delete them from table "user_has_pet_type" for the user

    // we make an array of only the removed pet_types
    const removedPetTypes = userBeforeSave.pet_types_ids.filter(
      (type) => !petTypesToNb.includes(type),
    );
    debug('Removed pet_types :', removedPetTypes);
    // we delete these pet-types from the table "user_has_pet_type":
    await user_has_pet_typeDataMapper.deleteUserHasPetTypesForUser(id, removedPetTypes);

    // -------------------------------------------------------------------------
    // We get the now updated user from DB (including arrays of roles, epet_types etc) to send it:
    const userAfterSave = await userDataMapper.findUserById(id);
    // debug('userAfterSave', userAfterSave);

    return userAfterSave;
  },

  /**
   * deletes a user according to it's id
   *
   * @param {number} id - the user's id
   */
  deleteUserById: async (id) => {
    debug(`deleteUserById(${id})`);
    const query = {
      text: `
        DELETE FROM "user"
        WHERE id = $1
      `,
      values: [id],
    };
    await client.query(query);
  },
};

module.exports = userDataMapper;
