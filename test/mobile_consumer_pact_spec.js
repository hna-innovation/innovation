'use strict'

const expect = require('chai').expect
const path = require('path')
const Pact = require('pact')
const request = require('superagent')
const marchers = Pact.Matchers
const wrapper = require('@pact-foundation/pact-node')


describe('Innovation API', () => {
    let url = 'http://localhost'
    let port = 8080
    let provider

    const server = wrapper.createServer({
        port: port,
        log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
        dir: path.resolve(process.cwd(), 'test/pacts'),
        spec: 2,
        consumer: 'mobile-site',
        provider: 'innovation-api'
    })

    after(() => {
        provider.finalize().then(() => {
            done()
        })
        server.delete().then(() => {
            done()
        })
    })

    before(done => {
        server.start().then(() => {
        provider = Pact({ consumer:'mobile-site', provider:'innovation-api', port: port })
            done()
        })
    })

    describe('should return details json if project exist', () => {
        let project_id = '57ff24160269653b81b1b900'
        let response_body = {
            "code":"0",
            "data":{ "name": marchers.somethingLike("projectName")}
        }

        beforeEach(done => {
            const interaction = {
                state: 'project exist',
                uponReceiving: 'a request for project details',
                withRequest: {
                    method: 'GET',
                    path: '/api/projects/' + project_id
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:response_body
                }
            }
            provider.addInteraction(interaction).then(() => {
                done()
            })
        })

        it('successfully verifies', done => {
            request.get('http://localhost:8080/api/projects/' + project_id)
            .then(provider.verify).then(response => {
                expect(JSON.parse(response).code).to.eql(response_body.code)
                expect(JSON.parse(response).data.name).to.eql(response_body.data.name.contents)
                done()
           }).catch(done)
        })
    })

    describe('should return not exist', () => {
        let project_id = '57ff24160269653b81b1b901'
        let response_body = {
            "code":"1",
            "message": marchers.somethingLike("not exist")
        }

        beforeEach(done => {
            const interaction = {
                state: 'project not exist',
                uponReceiving: 'a request for project details',
                withRequest: {
                    method: 'GET',
                    path: '/api/projects/' + project_id
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:response_body

                }
            }
            provider.addInteraction(interaction).then(() => {
                done()
            })
        })

        it('successfully verifies', done => {
            request.get('http://localhost:8080/api/projects/' + project_id)
            .then(provider.verify).then(response => {
                expect(JSON.parse(response).code).to.eql(response_body.code)
                expect(JSON.parse(response).message).to.eql(response_body.message.contents)
                done()
            }).catch(done)
        })
    })

    describe('should return register user detail if successfully', () => {
        let postBody = {
            "email": "test@hna.com",
            "password": "12345678",
            "nickName": "nickName"
        }

        beforeEach(done => {
            const interaction = {
                state: 'user can register',
                uponReceiving: 'a post request for register user',
                withRequest: {
                    method: 'POST',
                    path: '/api/user/register',
                    headers: { 'Accept': 'application/json' },
                    body: postBody
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:
                        {
                            "code": 0,
                            "data": {
                                "id": marchers.somethingLike("5812bf4d7010504e4b14dca7"),
                                "userName": "test@hna.com",
                                "emailAddress": {
                                    "value": "test@hna.com"
                                },
                                "nickName": "nickName",
                                "headerIcon": marchers.somethingLike("img/face/1.png"),
                                "createdDate":  marchers.somethingLike("2016-10-28 11:00")
                            }
                        }
                }
            }

            provider.addInteraction(interaction).then(() => {
                done()
            })
        })

        it('successfully verifies', done => {
            request.post('http://localhost:8080/api/user/register')
            .send(postBody)
            .set({ 'Accept': 'application/json' })
            .then(provider.verify).then(response => {
                done()
            }).catch(done)
        })
    })
})
