import { JsonController, Get, Put, Post, Delete, Param, BodyParam, Body } from 'routing-controllers';
import { Inject } from 'typedi';
import { UserService } from '../../services/UserService';
import { ResourceProvider } from '../../services/ResourceProvider';
import { User } from '../../model/User';
import { EntityFromParam } from 'typeorm-routing-controllers-extensions';

/**
 * RESTy API controller
 * Resource: User
 * @TODO: Add resource management for HATEOAS
 * @TODO: Add error handling
 * @TODO: Add content negotiation
 */
@JsonController('/api/users')
export class ApiUserController {

    @Inject()
    private users: UserService;

    @Inject()
    private resources: ResourceProvider;

    /**
     * Get resource: One User
     * @param {User} user
     * @returns {Promise<any>}
     */
    @Get('/:id')
    async getOneUserAction(@EntityFromParam('id') user: User): Promise<any> {
        return {
          links: [
              this.resources.getResource('self', '/api/users', user.id)
          ],
          content: user
        };
    }

    /**
     * Get resource: User
     * @returns {Promise<any>}
     */
    @Get('/')
    async getUsersAction(): Promise<any> {
        const users: User[] = await this.users.getAll();
        const data = users.map(user => {
          return {
              content: { id: user.id },
              links: [
                  this.resources.getResource('self', '/api/users/', user.id)
              ]
          }
        });
        return {
            links: [ this.resources.getResource('self', '/api/users') ],
            content: data
        };
    }

  /**
   * Modify resource: User
   * @param {User} user
   * @param body
   * @returns {Promise<any>}
   */
    @Put('/:id')
    async updateUserAction(@EntityFromParam('id') user: User, @Body() body: any): Promise<any> {
        if (body.name) {
            user.name = body.name;
        }
        if (body.token) {
            user.token = body.token;
        }
        await this.users.persist(user);
        return {
            links: [ this.resources.getResource('self', '/api/users', user.id) ],
            content: user
        };
    }

  /**
   * Insert resource: One User
   * @param {string} name
   * @param {string} token
   * @returns {Promise<any>}
   */
    @Post('/')
    async creteUserAction(@BodyParam('name') name: string, @BodyParam('token') token: string): Promise<any> {
        const user = new User();
        user.token = token;
        user.name = name;
        await this.users.persist(user);
        return {
            links: [ this.resources.getResource('self', '/api/users') ],
            content: user
        };
    }

    /**
     * Deletes a resource: One User
     * @param {User} user
     * @returns {Promise<any>}
     */
    @Delete('/:id')
    async deleteUserAction(@EntityFromParam('id') user: User): Promise<any> {
        const result = this.users.remove(user);
        return {
            links: [ this.resources.getResource('self', '/api/users', user.id) ],
            content: result
        };
    }
}
