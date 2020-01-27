import { Service, Inject } from 'typedi';
import * as path from 'path';

/**
 * A single resource location is represented by this interface.
 * Where rel is the relationship with the current resource and location is the
 * absolute location of the resource.
 */
export interface ResourceLink {
    rel: string;
    location: string;
}

/**
 * Default service for the users.
 */
@Service()
export class ResourceProvider {

    @Inject('config')
    private config: any;

    /**
     * Gets the given resource paths a location in the server.
     * @param {(string|number)[]} paths
     * @returns {string}
     */
    public getResourceLocation(...paths: (string|number)[]): string {
        const host = this.config.host;
        return `${host.protocol}://` +
            path.join(`${host.name}:${host.port}`, ...paths.map(String));
    }

    /**
     * Gets the resource link for the given relation & resource location.
     * @param {string} rel
     * @param {(string|number)[]} paths
     * @returns {ResourceLink}
     */
    public getResource(rel: string, ...paths: (string|number)[]): ResourceLink {
        return {
            rel: rel,
            location: this.getResourceLocation(...paths)
        };
    }
}
