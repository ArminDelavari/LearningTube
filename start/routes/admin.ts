import Person from '#models/person'
import RoleDefinition from '#models/role_definition'
import EnvironmentEntity from '#models/environment_entity'
import router from '@adonisjs/core/services/router'

router
  .group(() => {
    // Person Management
    router.post('/add-person', async ({ request }) => {
      const data = request.body()
      const person = await Person.create(data)
      return {
        message: 'Person created successfully',
        person,
      }
    })

    router.put('/update-person/:id', async ({ request, params }) => {
      const data = request.body()
      const person = await Person.find(params.id)
      if (person) {
        person.merge(data)
        await person.save()
      }
      return {
        message: 'Person updated successfully',
        person,
      }
    })

    router.get('/people', async () => {
      const people = await Person.query().preload('roles')
      return people
    })

    router.get('/person/:id', async ({ params }) => {
      const person = await Person.find(params.id)
      await person?.load('roles')
      return person
    })

    // Role Management
    router.post('/role', async ({ request }) => {
      const data = request.body()
      const role = await RoleDefinition.create({
        logicalName: data.logicalName,
        description: data.description,
      })
      return {
        message: 'Role created successfully',
        role,
      }
    })

    router.put('/role/:id', async ({ request, params }) => {
      const data = request.body()
      const role = await RoleDefinition.find(params.id)
      if (role) {
        role.merge(data)
        await role.save()
      }
      return {
        message: 'Role updated successfully',
        role,
      }
    })

    router.get('/roles', async () => {
      const roles = await RoleDefinition.query().preload('assignedEntities')
      return roles
    })

    router.get('/role/:id', async ({ params }) => {
      const role = await RoleDefinition.find(params.id)
      await role?.load('assignedEntities')
      return role
    })

    // Entity Management
    router.post('/entity', async ({ request }) => {
      const data = request.body()
      const entity = await EnvironmentEntity.create({
        logicalName: data.logicalName,
        displayName: data.displayName,
        entityType: data.entityType,
        read: data.read,
        write: data.write,
        canDelete: data.canDelete,
        create: data.create,
        accessMode: data.accessMode,
      })
      return {
        message: 'Entity created successfully',
        entity,
      }
    })

    router.put('/entity/:id', async ({ request, params }) => {
      const data = request.body()
      const entity = await EnvironmentEntity.find(params.id)
      if (entity) {
        entity.merge(data)
        await entity.save()
      }
      return {
        message: 'Entity updated successfully',
        entity,
      }
    })

    router.get('/entities', async () => {
      const entities = await EnvironmentEntity.query().preload('assignedRoles')
      return entities
    })

    router.get('/entity/:id', async ({ params }) => {
      const entity = await EnvironmentEntity.find(params.id)
      await entity?.load('assignedRoles')
      return entity
    })

    // Role-Entity Assignment
    router.post('/assign-entities-to-role', async ({ request }) => {
      const data = request.body()
      const role = await RoleDefinition.find(data.roleId)
      await role?.related('assignedEntities').attach(data.entityIds)
      return {
        message: 'Entities assigned to role successfully',
        role,
      }
    })

    router.post('/remove-entities-from-role', async ({ request }) => {
      const data = request.body()
      const role = await RoleDefinition.find(data.roleId)
      await role?.related('assignedEntities').detach(data.entityIds)
      return {
        message: 'Entities removed from role successfully',
        role,
      }
    })

    // Person-Role Assignment
    router.post('/assign-roles-to-person', async ({ request }) => {
      const data = request.body()
      const person = await Person.find(data.personId)
      await person?.related('roles').attach(data.roleIds)
      return {
        message: 'Roles assigned to person successfully',
        person,
      }
    })

    router.post('/remove-roles-from-person', async ({ request }) => {
      const data = request.body()
      const person = await Person.find(data.personId)
      await person?.related('roles').detach(data.roleIds)
      return {
        message: 'Roles removed from person successfully',
        person,
      }
    })
  })
  .prefix('/admin')
