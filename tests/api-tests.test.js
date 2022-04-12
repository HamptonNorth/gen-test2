const request = require('supertest')
const app = require('../app')
const pool = require('../db/db-pool')

beforeAll(() => {})

describe('Test users route', () => {
  test('Test /api/users', async () => {
    const response = await request(app).get('/api/users')
    // change these assertions to match API return
    expect(response.body.data.users[0].email).toEqual('rcollins@redmug.co.uk')
    expect(response.body.data.users[1].email).toEqual('kdobson@redmug.dev')
    expect(response.body.data.users[2].email).toEqual('fcooke@redmug.dev')
    expect(response.body.data.users[0].role).toEqual('superuser')
    expect(response.body.data.users[1].role).toEqual('user')
    expect(response.body.data.users[2].role).toEqual('user')

    expect(response.statusCode).toBe(200)
  })
})

describe('Test user/:id route', () => {
  test('Test /api/user/:id', async () => {
    const response = await request(app).get('/api/user/1')
    // change these assertions to match API return
    expect(response.body.data.users[0].email).toEqual('rcollins@redmug.co.uk')

    expect(response.statusCode).toBe(200)
  })
})

describe('Test usersearch?name=coll route', () => {
  test('Test /api/usersearch?name=wil', async () => {
    const response = await request(app).get('/api/usersearch?name=coll')
    // change these assertions to match API return
    expect(response.body.data.users[0].email).toEqual('rcollins@redmug.co.uk')
    expect(response.body.data.users[1].email).toEqual('benlcollins@gmail.com')
    expect(response.body.data.users[2].email).toEqual('collinsps1@gmail.com')

    expect(response.statusCode).toBe(200)
  })
})

describe('Test createuser route', () => {
  test('Test /api/createuser', async () => {
    const response = await request(app).post('/api/createuser').send({
      display_name: 'HamptonNorth',
      email: 'hamptonnorth@redmug.dev',
      client_id: 150,
      user_status: 0,
      last_login: '2000-01-01 00:00:00',
      role: 'superuser',
    })
    // change these assertions to match API return
    expect(response.body.status).toEqual('success')
    expect(response.body.data.added.affectedRows).toEqual(1)
    expect(response.statusCode).toBe(201)
  })
})

describe('Test updateuserrole route', () => {
  test('Test /api/updateuserrole', async () => {
    const response = await request(app).put('/api/updateuserrole').send({ client_id: 1, role: 'superuser' })
    // change these assertions to match API return

    expect(response.statusCode).toBe(201)
  })
})

describe('Test deleteuser route', () => {
  test('Test /api/deleteuser', async () => {
    const response = await request(app).delete('/api/deleteuser').send({ client_id: 103 })
    // change these assertions to match API return

    expect(response.statusCode).toBe(201)
  })
})

//@insert1

afterAll(() => {
  pool.end()
})
